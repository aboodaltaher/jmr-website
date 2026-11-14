// Build-time safety net: fails the build if any INDEXABLE page in the production build still
// contains a "[TO CONFIRM" marker.
//
// "Indexable" = the prerendered page is a 200 (not a 404 produced by notFound()) and has no
// <meta name="robots" content="noindex…">. Pages that are in the sitemap are always
// indexable, so they are covered; this scan also catches an indexable page that is NOT in the
// sitemap. Gated pages that return 404 in production are reported but not failed.
//
// Runs only in production builds (VERCEL_ENV=production). Locally and on Vercel previews
// markers are meant to be visible, so the check is skipped — set FORCE_MARKER_CHECK=1 to run it
// anyway (used to prove the check can fail).
//
// Wired in package.json: "build": "next build && node scripts/check-markers.mjs".

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const force = process.env.FORCE_MARKER_CHECK === "1";
if (process.env.VERCEL_ENV !== "production" && !force) {
  console.log(`check-markers: skipped (VERCEL_ENV=${process.env.VERCEL_ENV ?? "unset"}; not a production build)`);
  process.exit(0);
}

const root = join(process.cwd(), ".next", "server", "app");
if (!existsSync(root)) {
  console.error("check-markers: .next/server/app not found — run `next build` first");
  process.exit(1);
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

const routeOf = (file) => {
  const r = "/" + relative(root, file).replace(/\.html$/, "").replace(/(^|\/)index$/, "");
  return r === "/" ? "/" : r.replace(/\/$/, "");
};

// Sitemap paths (for the report only).
let sitemap = new Set();
const smFile = join(root, "sitemap.xml.body");
if (existsSync(smFile)) {
  sitemap = new Set(
    [...readFileSync(smFile, "utf8").matchAll(/<loc>https:\/\/agec\.ae([^<]*)<\/loc>/g)].map((m) => m[1] || "/"),
  );
}

const MARKER = /\[TO CONFIRM/;
const NOINDEX = /<meta name="robots" content="[^"]*noindex/i;

let scanned = 0, indexable = 0, notFound = 0, noindexed = 0;
const failures = [];
const gated = [];

for (const file of walk(root)) {
  const route = routeOf(file);
  if (route.startsWith("/_")) continue; // _not-found, _global-error shells
  const html = readFileSync(file, "utf8");
  scanned++;
  const metaFile = file.replace(/\.html$/, ".meta");
  let status = 200;
  if (existsSync(metaFile)) {
    try { status = JSON.parse(readFileSync(metaFile, "utf8")).status ?? 200; } catch { /* keep 200 */ }
  }
  if (status === 404) {
    notFound++;
    gated.push(route);
    continue;
  }
  if (NOINDEX.test(html)) {
    noindexed++;
    continue;
  }
  indexable++;
  if (MARKER.test(html)) failures.push({ route, inSitemap: sitemap.has(route) });
}

console.log(`check-markers: scanned ${scanned} prerendered pages — ${indexable} indexable, ${noindexed} noindex, ${notFound} returning 404`);
console.log(`check-markers: sitemap lists ${sitemap.size} URLs`);
if (gated.length) console.log(`check-markers: 404 in this build: ${gated.sort().join(", ")}`);

if (failures.length) {
  console.error("\ncheck-markers: FAILED — open [TO CONFIRM] markers on indexable pages:");
  for (const f of failures) console.error(`  ${f.route}${f.inSitemap ? "  (in sitemap)" : ""}`);
  console.error("Answer the open questions (docs/open-questions.md), or gate the page so it 404s/noindexes.");
  process.exit(1);
}
console.log("check-markers: PASSED — no indexable page contains an open marker");
