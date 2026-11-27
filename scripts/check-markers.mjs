// Build-time safety net: fails the build if any INDEXABLE page in the production build still
// contains a "[TO CONFIRM" marker.
//
// "Indexable" = the prerendered page is a 200 (not a 404 produced by notFound()) and has no
// <meta name="robots" content="noindex…">. Pages that are in the sitemap are always
// indexable, so they are covered; this scan also catches an indexable page that is NOT in the
// sitemap. Gated pages that return 404 in production are reported but not failed.
//
// WHERE THE PAGES ARE. Next.js writes prerendered pages to one of two places, and this script reads both:
//   1. .next/server/app/**/*.html           a plain `next build` (local builds, other hosts). Status in the .meta file.
//   2. .next/output/functions/**/*.prerender-fallback.html
//                                           a build on Vercel with Next 16, where the Vercel build adapter moves
//                                           the pages out of .next/server/app. Status in the sibling
//                                           .prerender-config.json (`initialStatus`, absent for a 200).
// Before this was handled the check scanned 0 pages on Vercel and passed without checking anything (27 Nov 2026).
// It now FAILS if it finds no output, scans 0 pages, cannot read the sitemap, or finds a sitemap URL that is
// missing from the build.
//
// Runs only in production builds (VERCEL_ENV=production). Locally and on Vercel previews
// markers are meant to be visible, so the check is skipped — set FORCE_MARKER_CHECK=1 to run it
// anyway (used to prove the check can fail).
//
// Wired in package.json: "build": "next build && node scripts/check-markers.mjs".

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { pathToFileURL } from "node:url";

const MARKER = /\[TO CONFIRM/;
const NOINDEX = /<meta name="robots" content="[^"]*noindex/i;
const FALLBACK = ".prerender-fallback.html";

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const toRoute = (rel) => {
  const r = "/" + rel.split(sep).join("/").replace(/(^|\/)index$/, "");
  return r === "/" ? "/" : r.replace(/\/$/, "");
};

const readJson = (file) => {
  try { return JSON.parse(readFileSync(file, "utf8")); } catch { return null; }
};

const sitemapRoutes = (xml) =>
  new Set([...xml.matchAll(/<loc>https:\/\/agec\.ae([^<]*)<\/loc>/g)].map((m) => m[1] || "/"));

/** Every prerendered page the build left behind, from whichever layout(s) exist. */
export function collectPages(cwd) {
  const pages = new Map(); // route -> { route, file, status }
  const sources = [];
  let sitemap = null;

  // 1. Plain next build.
  const appRoot = join(cwd, ".next", "server", "app");
  if (existsSync(appRoot)) {
    const files = walk(appRoot).filter((f) => f.endsWith(".html"));
    if (files.length) sources.push(`.next/server/app (${files.length} html)`);
    for (const file of files) {
      const route = toRoute(relative(appRoot, file).replace(/\.html$/, ""));
      const meta = readJson(file.replace(/\.html$/, ".meta"));
      pages.set(route, { route, file, status: meta?.status ?? 200 });
    }
    const body = join(appRoot, "sitemap.xml.body");
    if (existsSync(body)) sitemap = sitemapRoutes(readFileSync(body, "utf8"));
  }

  // 2. Vercel build adapter output.
  const fnRoot = join(cwd, ".next", "output", "functions");
  if (existsSync(fnRoot)) {
    const files = walk(fnRoot).filter((f) => f.endsWith(FALLBACK));
    if (files.length) sources.push(`.next/output/functions (${files.length} html)`);
    for (const file of files) {
      const route = toRoute(relative(fnRoot, file).slice(0, -FALLBACK.length));
      if (pages.has(route)) continue;
      const cfg = readJson(file.slice(0, -FALLBACK.length) + ".prerender-config.json");
      pages.set(route, { route, file, status: cfg?.initialStatus ?? 200 });
    }
    const xml = join(cwd, ".next", "output", "static", "sitemap.xml");
    if (!sitemap && existsSync(xml)) sitemap = sitemapRoutes(readFileSync(xml, "utf8"));
  }

  return { pages: [...pages.values()], sources, sitemap };
}

/** Scan the build. Throws if there is nothing to scan: a check that scans nothing must not pass. */
export function scanBuild(cwd = process.cwd()) {
  const { pages, sources, sitemap } = collectPages(cwd);
  const looked = ".next/server/app/**/*.html and .next/output/functions/**/*.prerender-fallback.html";
  if (sources.length === 0) throw new Error(`no prerendered pages found (looked in ${looked}) — did \`next build\` run?`);

  let scanned = 0, indexable = 0, notFound = 0, noindexed = 0;
  const failures = [], gated = [], seen = new Set();
  for (const { route, file, status } of pages) {
    if (route.split("/").some((seg) => seg.startsWith("_"))) continue; // _not-found, _global-error shells
    scanned++;
    seen.add(route);
    if (status === 404) { notFound++; gated.push(route); continue; }
    const html = readFileSync(file, "utf8");
    if (NOINDEX.test(html)) { noindexed++; continue; }
    indexable++;
    if (MARKER.test(html)) failures.push({ route, inSitemap: sitemap?.has(route) ?? false });
  }

  if (scanned === 0) throw new Error(`scanned 0 prerendered pages (looked in ${looked})`);
  if (!sitemap || sitemap.size === 0) throw new Error("could not read any URLs from the build's sitemap, so coverage cannot be verified");
  const missing = [...sitemap].filter((r) => !seen.has(r)).sort();

  return { scanned, indexable, noindexed, notFound, gated: gated.sort(), failures, sitemap, missing, sources };
}

function main() {
  const force = process.env.FORCE_MARKER_CHECK === "1";
  if (process.env.VERCEL_ENV !== "production" && !force) {
    console.log(`check-markers: skipped (VERCEL_ENV=${process.env.VERCEL_ENV ?? "unset"}; not a production build)`);
    return 0;
  }

  let r;
  try {
    r = scanBuild();
  } catch (err) {
    console.error(`check-markers: FAILED — ${err instanceof Error ? err.message : err}`);
    return 1;
  }

  console.log(`check-markers: scanned ${r.scanned} prerendered pages — ${r.indexable} indexable, ${r.noindexed} noindex, ${r.notFound} returning 404`);
  console.log(`check-markers: read from ${r.sources.join(" + ")}`);
  console.log(`check-markers: sitemap lists ${r.sitemap.size} URLs, ${r.sitemap.size - r.missing.length} of them found in the build`);
  if (r.gated.length) console.log(`check-markers: 404 in this build: ${r.gated.join(", ")}`);

  let code = 0;
  if (r.missing.length) {
    console.error(`\ncheck-markers: FAILED — ${r.missing.length} sitemap URL(s) have no prerendered page in the build output:`);
    for (const m of r.missing) console.error(`  ${m}`);
    code = 1;
  }
  if (r.failures.length) {
    console.error("\ncheck-markers: FAILED — open [TO CONFIRM] markers on indexable pages:");
    for (const f of r.failures) console.error(`  ${f.route}${f.inSitemap ? "  (in sitemap)" : ""}`);
    console.error("Answer the open questions (docs/open-questions.md), or gate the page so it 404s/noindexes.");
    code = 1;
  }
  if (code === 0) console.log("check-markers: PASSED — no indexable page contains an open marker");
  return code;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) process.exit(main());
