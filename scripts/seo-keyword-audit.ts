// Keyword-to-page audit. For every entry in docs/seo/keyword-map.json whose status is "exists" it
// reads the page's rendered HTML and reports:
//   - is the primary keyword in the <title>, the <h1>, the meta description, the first 100 words of
//     the page copy, and at least one <h2>
//   - title length (must be <= 60) and meta description length (must be 140-155)
//   - cannibalisation: does any OTHER sitemap page have the same primary keyword in its <title>
// and writes docs/seo/keyword-audit.md.
//
// Matching: lower-case, punctuation ignored, Arabic diacritics and alef/yeh variants folded. The
// keyword counts as present when its words appear in order, next to each other, with at most one
// filler word between them (in, for, of, the, and, a, to, في), so "ac maintenance dubai" matches
// "AC Maintenance in Dubai"; simple English plurals are folded ("contractors" = "contractor").
// "~" means every word is there but not as a phrase.
// "First 100 words" = the first 100 words of page text after the <h1> (the H1 is its own check).
//
// Input: the prerendered HTML of a production build in .next/server/app (the same files
// scripts/check-markers.mjs reads). If there is no build, or you pass --build, it runs
// `next build` first with VERCEL_ENV=production, so the gated pages are hidden as on the live site.
//
//   npm run seo:audit            # reads the existing build
//   npm run seo:audit -- --build # build first
//
// Runs on Node >= 22 via built-in TypeScript type stripping (no build step).

import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

// Make this file a module so its top-level names do not collide with other scripts.
export {};

const TITLE_MAX = 60;
const META_MIN = 140;
const META_MAX = 155;
const FIRST_WORDS = 100;

const ROOT = process.cwd();
const APP = join(ROOT, ".next", "server", "app");
const MAP_FILE = join(ROOT, "docs", "seo", "keyword-map.json");
const OUT_FILE = join(ROOT, "docs", "seo", "keyword-audit.md");

interface Entry {
  keyword: string;
  secondaryKeywords: string[];
  volumeTier: string;
  difficulty: string;
  intent: string;
  priority: string;
  targetUrl: string;
  status: string;
  interimUrl?: string;
  notes?: string;
}

// ---------------------------------------------------------------- keyword map
const PRIORITIES = ["Critical", "High", "Medium", "Low"];
const STATUSES = ["exists", "planned-phase7"];
const map = JSON.parse(readFileSync(MAP_FILE, "utf8")) as { entries: Entry[] };
const entries = map.entries;
{
  const seen = new Set<string>();
  for (const e of entries) {
    const problems: string[] = [];
    if (!PRIORITIES.includes(e.priority)) problems.push(`priority "${e.priority}"`);
    if (!STATUSES.includes(e.status)) problems.push(`status "${e.status}"`);
    if (!e.targetUrl.startsWith("/")) problems.push(`targetUrl "${e.targetUrl}"`);
    if (seen.has(e.keyword)) problems.push("duplicate keyword");
    seen.add(e.keyword);
    if (problems.length) {
      console.error(`seo-keyword-audit: invalid entry "${e.keyword}": ${problems.join(", ")}`);
      process.exit(1);
    }
  }
}

// ---------------------------------------------------------------- build / read
if (process.argv.includes("--build") || !existsSync(APP)) {
  console.log("seo-keyword-audit: running `next build` with VERCEL_ENV=production ...");
  const r = spawnSync("npm", ["run", "build"], {
    stdio: "inherit",
    env: { ...process.env, VERCEL_ENV: "production" },
  });
  if (r.status !== 0) {
    console.error("seo-keyword-audit: build failed");
    process.exit(1);
  }
}

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

const routeOf = (file: string): string => {
  const r = "/" + relative(APP, file).replace(/\.html$/, "").replace(/(^|\/)index$/, "");
  return r === "/" ? "/" : r.replace(/\/$/, "");
};

// Indexable pages = the sitemap. A page that is not in it is not a cannibalisation risk.
const sitemapFile = join(APP, "sitemap.xml.body");
if (!existsSync(sitemapFile)) {
  console.error("seo-keyword-audit: .next/server/app/sitemap.xml.body not found; run with --build");
  process.exit(1);
}
const sitemapPaths = new Set(
  [...readFileSync(sitemapFile, "utf8").matchAll(/<loc>https:\/\/agec\.ae([^<]*)<\/loc>/g)].map((m) => m[1] || "/"),
);

// ---------------------------------------------------------------- HTML parsing
const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
function decode(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h: string) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d: string) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([a-z]+);/gi, (m, n: string) => ENTITIES[n.toLowerCase()] ?? m);
}
const squash = (s: string): string => s.replace(/\s+/g, " ").trim();
const text = (html: string): string => squash(decode(html.replace(/<[^>]+>/g, " ")));

interface Page {
  path: string;
  title: string;
  meta: string;
  h1: string;
  h2s: string[];
  afterH1Words: string[];
  hasMarker: boolean;
}

function parse(path: string, html: string): Page {
  const title = text(html.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ?? "");
  const metaTag = html.match(/<meta\s+name="description"\s+content="([^"]*)"/)?.[1] ?? "";
  const h1 = text(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => text(m[1]));
  const bodyHtml = html.slice(html.search(/<body/));
  const afterH1 = bodyHtml.includes("</h1>") ? bodyHtml.slice(bodyHtml.indexOf("</h1>") + 5) : bodyHtml;
  const visible = afterH1
    .replace(/<(script|style|noscript|svg)[\s\S]*?<\/\1>/g, " ")
    .replace(/<!--[\s\S]*?-->/g, " ");
  return {
    path,
    title,
    meta: decode(metaTag).trim(),
    h1,
    h2s,
    afterH1Words: text(visible).split(" ").filter(Boolean).slice(0, FIRST_WORDS),
    hasMarker: html.includes("[TO CONFIRM"),
  };
}

const pages = new Map<string, Page>();
for (const file of walk(APP)) {
  const path = routeOf(file);
  if (path.startsWith("/_")) continue;
  pages.set(path, parse(path, readFileSync(file, "utf8")));
}

// ---------------------------------------------------------------- keyword matching
const FILLERS = new Set(["in", "for", "of", "the", "and", "a", "to", "في"]);

// Plural folding for English words ("contractors" = "contractor"); search engines treat them alike.
const singular = (w: string): string => (/^[a-z]{4,}$/.test(w) && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w);

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[ً-ٰٟـ]/g, "") // Arabic diacritics, tatweel
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/&/g, " and ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .split(" ")
    .filter(Boolean)
    .map(singular);
}

type Match = "yes" | "words" | "no";

function match(keyword: string, haystack: string | string[]): Match {
  const kw = tokens(keyword);
  const hay = Array.isArray(haystack) ? tokens(haystack.join(" ")) : tokens(haystack);
  if (kw.length === 0) return "no";
  for (let i = 0; i < hay.length; i++) {
    if (hay[i] !== kw[0]) continue;
    let pos = i;
    let ok = true;
    for (let k = 1; k < kw.length; k++) {
      if (hay[pos + 1] === kw[k]) pos += 1;
      else if (FILLERS.has(hay[pos + 1] ?? "") && hay[pos + 2] === kw[k]) pos += 2;
      else {
        ok = false;
        break;
      }
    }
    if (ok) return "yes";
  }
  const present = new Set(hay);
  return kw.every((w) => present.has(w)) ? "words" : "no";
}

const mark = (m: Match): string => (m === "yes" ? "✓" : m === "words" ? "~" : "✗");

// ---------------------------------------------------------------- audit
interface Row {
  e: Entry;
  page: Page;
  title: Match;
  h1: Match;
  meta: Match;
  first100: Match;
  h2: Match;
  h2Hit: string;
  titleLen: number;
  metaLen: number;
  titleLenOk: boolean;
  metaLenOk: boolean;
  cannibal: string[];
}

const rows: Row[] = [];
const missing: Entry[] = [];

for (const e of entries.filter((x) => x.status === "exists")) {
  const page = pages.get(e.targetUrl);
  if (!page) {
    missing.push(e);
    continue;
  }
  let h2: Match = "no";
  let h2Hit = "";
  for (const h of page.h2s) {
    const m = match(e.keyword, h);
    if (m === "yes") {
      h2 = "yes";
      h2Hit = h;
      break;
    }
    if (m === "words" && h2 === "no") {
      h2 = "words";
      h2Hit = h;
    }
  }
  const cannibal = [...pages.values()]
    .filter((p) => p.path !== e.targetUrl && sitemapPaths.has(p.path) && match(e.keyword, p.title) === "yes")
    .map((p) => p.path);
  rows.push({
    e,
    page,
    title: match(e.keyword, page.title),
    h1: match(e.keyword, page.h1),
    meta: match(e.keyword, page.meta),
    first100: match(e.keyword, page.afterH1Words),
    h2,
    h2Hit,
    titleLen: [...page.title].length,
    metaLen: [...page.meta].length,
    titleLenOk: [...page.title].length <= TITLE_MAX,
    metaLenOk: [...page.meta].length >= META_MIN && [...page.meta].length <= META_MAX,
    cannibal,
  });
}

if (missing.length) {
  console.error(
    `seo-keyword-audit: ${missing.length} "exists" target(s) have no rendered HTML (not published, or not in this build): ` +
      missing.map((m) => `${m.keyword} -> ${m.targetUrl}`).join("; "),
  );
}

// ---------------------------------------------------------------- report
const planned = entries.filter((x) => x.status !== "exists");
const markerPages = [...pages.values()].filter((p) => p.hasMarker && sitemapPaths.has(p.path)).map((p) => p.path);

const count = (f: (r: Row) => boolean): number => rows.filter(f).length;
const checks: [string, (r: Row) => boolean][] = [
  ["keyword in title", (r) => r.title === "yes"],
  ["keyword in H1", (r) => r.h1 === "yes"],
  ["keyword in meta description", (r) => r.meta === "yes"],
  ["keyword in first 100 words", (r) => r.first100 === "yes"],
  ["keyword in at least one H2", (r) => r.h2 === "yes"],
  [`title <= ${TITLE_MAX} characters`, (r) => r.titleLenOk],
  [`meta description ${META_MIN}-${META_MAX} characters`, (r) => r.metaLenOk],
  ["no other page has the keyword in its title", (r) => r.cannibal.length === 0],
];
const fullPass = (r: Row): boolean => checks.every(([, f]) => f(r));

const L: string[] = [];
L.push("# Keyword audit");
L.push("");
L.push(
  `Generated by \`npm run seo:audit\` from the rendered HTML of the production build, against \`docs/seo/keyword-map.json\`. ` +
    `${rows.length} keyword(s) with an existing page were audited; ${planned.length} planned keyword(s) have no page yet.`,
);
L.push("");
L.push("## Summary");
L.push("");
L.push("| Check | Pass | Fail |");
L.push("|---|---|---|");
for (const [name, f] of checks) L.push(`| ${name} | ${count(f)} | ${rows.length - count(f)} |`);
L.push("");
L.push(`**${count(fullPass)} of ${rows.length}** keywords pass every check.`);
L.push("");
L.push("| Priority | Keywords | Pass every check |");
L.push("|---|---|---|");
for (const p of PRIORITIES) {
  const rs = rows.filter((r) => r.e.priority === p);
  if (rs.length) L.push(`| ${p} | ${rs.length} | ${rs.filter(fullPass).length} |`);
}
L.push("");
L.push("## Per keyword");
L.push("");
L.push("✓ phrase present · ~ all words present but not as a phrase · ✗ absent. Lengths are in characters; ✗ after a length means outside the limit.");
L.push("");
L.push("| Priority | Keyword | Page | Title | H1 | Meta | First 100 | H2 | Title len | Meta len | Other pages with it in the title |");
L.push("|---|---|---|---|---|---|---|---|---|---|---|");
for (const r of rows) {
  L.push(
    `| ${r.e.priority} | ${r.e.keyword} | \`${r.e.targetUrl}\` | ${mark(r.title)} | ${mark(r.h1)} | ${mark(r.meta)} | ${mark(r.first100)} | ${mark(r.h2)} | ` +
      `${r.titleLen}${r.titleLenOk ? "" : " ✗"} | ${r.metaLen}${r.metaLenOk ? "" : " ✗"} | ${r.cannibal.length ? r.cannibal.map((c) => `\`${c}\``).join(", ") : "none"} |`,
  );
}
L.push("");
L.push("## What to fix");
L.push("");
const failing = rows.filter((r) => !fullPass(r));
if (failing.length === 0) L.push("Nothing: every audited keyword passes every check.");
for (const r of failing) {
  const issues: string[] = [];
  if (r.title !== "yes") issues.push(`title ${r.title === "words" ? "has the words but not the phrase" : "lacks it"}`);
  if (r.h1 !== "yes") issues.push(`H1 ${r.h1 === "words" ? "has the words but not the phrase" : "lacks it"}`);
  if (r.meta !== "yes") issues.push(`meta description ${r.meta === "words" ? "has the words but not the phrase" : "lacks it"}`);
  if (r.first100 !== "yes") issues.push(`first 100 words ${r.first100 === "words" ? "have the words but not the phrase" : "lack it"}`);
  if (r.h2 !== "yes") issues.push(`no H2 with the phrase${r.h2 === "words" ? ` (closest: "${r.h2Hit}")` : ""}`);
  if (!r.titleLenOk) issues.push(`title is ${r.titleLen} characters`);
  if (!r.metaLenOk) issues.push(`meta is ${r.metaLen} characters`);
  if (r.cannibal.length) issues.push(`also in the title of ${r.cannibal.join(", ")}`);
  L.push(`- **${r.e.keyword}** (${r.e.priority}, \`${r.e.targetUrl}\`): ${issues.join("; ")}`);
  L.push(`  - title: "${r.page.title}"`);
  L.push(`  - H1: "${r.page.h1}"`);
  L.push(`  - meta: "${r.page.meta}"`);
}
L.push("");
L.push("## Planned (not audited)");
L.push("");
if (planned.length === 0) L.push("None.");
else {
  L.push("| Priority | Keyword | Target (not published) | Interim page | Notes |");
  L.push("|---|---|---|---|---|");
  for (const p of planned) {
    L.push(`| ${p.priority} | ${p.keyword} | \`${p.targetUrl}\` | ${p.interimUrl ? `\`${p.interimUrl}\`` : "none"} | ${p.notes ?? ""} |`);
  }
}
if (missing.length) {
  L.push("");
  L.push("## Marked \"exists\" but not in the build");
  L.push("");
  for (const m of missing) L.push(`- ${m.keyword}: \`${m.targetUrl}\``);
}
if (markerPages.length) {
  L.push("");
  L.push(
    `> Warning: ${markerPages.length} indexable page(s) in this build still show "[TO CONFIRM" markers (${markerPages.slice(0, 5).join(", ")}). ` +
      "This build was not made with VERCEL_ENV=production; rerun with `npm run seo:audit -- --build`.",
  );
}
L.push("");
L.push("## Method");
L.push("");
L.push(
  `- Source: \`.next/server/app/**/*.html\` of a production build (${pages.size} pages, ${sitemapPaths.size} in the sitemap).`,
);
L.push("- Phrase match: words in order and adjacent, ignoring case and punctuation, allowing one filler word (in, for, of, the, and, a, to, في) between words. Simple English plurals are folded (contractors = contractor). Arabic diacritics and alef/yeh/teh-marbuta variants are folded.");
L.push(`- First 100 words: the first ${FIRST_WORDS} words of page text after the \`<h1>\`, scripts and styles removed.`);
L.push(`- Limits: title <= ${TITLE_MAX}, meta ${META_MIN}-${META_MAX} characters (the site-wide on-page check allows 120-155; this audit uses the tighter range you asked for).`);
L.push("- Cannibalisation: another sitemap page whose `<title>` contains the same phrase. Two keywords that share one target page are not counted.");
L.push("- volumeTier, difficulty and intent in the keyword map are estimates, not keyword-tool data.");
L.push("");

writeFileSync(OUT_FILE, L.join("\n"));

// ---------------------------------------------------------------- console summary
console.log(`\nKeyword audit: ${rows.length} audited, ${planned.length} planned (skipped), report: docs/seo/keyword-audit.md\n`);
for (const [name, f] of checks) console.log(`  ${String(count(f)).padStart(2)}/${rows.length}  ${name}`);
console.log(`\n  ${count(fullPass)}/${rows.length} keywords pass every check`);
for (const p of PRIORITIES) {
  const rs = rows.filter((r) => r.e.priority === p);
  if (rs.length) console.log(`    ${p.padEnd(8)} ${rs.filter(fullPass).length}/${rs.length}`);
}
if (markerPages.length) console.log("\n  WARNING: this build shows [TO CONFIRM markers; rerun with --build");
process.exit(missing.length ? 1 : 0);
