// PageSpeed Insights monitor. For 6 key URLs, on mobile and desktop, it records:
//   - lab results (performance score, LCP, TBT, CLS, FCP)
//   - field data (CrUX): LCP, INP, CLS at the 75th percentile, when Google has enough traffic
//     (URL-level first, otherwise origin-level; "n/a" when there is none)
// and writes reports/psi/{YYYY-MM-DD}.json plus a markdown summary table (.md).
//
// It exits 1 if MOBILE lab LCP is over 2.5 s or MOBILE lab CLS is over 0.1 on any URL.
// Missing field data never fails the run.
//
// Usage:   PSI_API_KEY=... npm run psi-check
//          BASE=https://agec.ae (default) · PSI_PAGES=/,/ac-repair-dubai (override the list)
// Runs on Node >= 22 via built-in TypeScript type stripping (no build step).

import { mkdirSync, writeFileSync } from "node:fs";

export {};

const BASE = (process.env.BASE ?? "https://agec.ae").replace(/\/$/, "");
const KEY = process.env.PSI_API_KEY ?? "";
const PAGES = (process.env.PSI_PAGES ??
  "/,/ac-maintenance-dubai,/ac-repair-dubai,/ac-amc-dubai,/services/hvac-installation-dubai,/blog/vrf-vs-chiller-dubai-villas"
).split(",");
const STRATEGIES = ["mobile", "desktop"] as const;
const LCP_LIMIT_MS = 2500;
const CLS_LIMIT = 0.1;

interface Field { lcpMs: number | null; inpMs: number | null; cls: number | null; source: "url" | "origin" | "none" }
interface Row {
  path: string;
  strategy: (typeof STRATEGIES)[number];
  score: number | null;
  lcpMs: number | null;
  tbtMs: number | null;
  cls: number | null;
  fcpMs: number | null;
  field: Field;
  error?: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function psi(url: string, strategy: string): Promise<any> {
  const q = new URLSearchParams({ url, strategy, category: "performance" });
  if (KEY) q.set("key", KEY);
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${q}`);
    if (res.ok) return res.json();
    if (res.status === 429 || res.status >= 500) {
      await sleep(attempt * 5000);
      continue;
    }
    throw new Error(`PSI ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  throw new Error("PSI: gave up after 4 attempts (quota or server error)");
}

const metric = (m: any, key: string): number | null => m?.[key]?.percentile ?? null;

function fieldData(json: any): Field {
  for (const [exp, source] of [
    [json.loadingExperience, "url"],
    [json.originLoadingExperience, "origin"],
  ] as const) {
    const m = exp?.metrics;
    if (m && (m.LARGEST_CONTENTFUL_PAINT_MS || m.INTERACTION_TO_NEXT_PAINT || m.CUMULATIVE_LAYOUT_SHIFT_SCORE)) {
      const cls = metric(m, "CUMULATIVE_LAYOUT_SHIFT_SCORE");
      return {
        lcpMs: metric(m, "LARGEST_CONTENTFUL_PAINT_MS"),
        inpMs: metric(m, "INTERACTION_TO_NEXT_PAINT"),
        cls: cls === null ? null : cls / 100, // CrUX reports CLS x100
        source,
      };
    }
  }
  return { lcpMs: null, inpMs: null, cls: null, source: "none" };
}

const rows: Row[] = [];
for (const path of PAGES) {
  for (const strategy of STRATEGIES) {
    const url = `${BASE}${path}`;
    try {
      const j = await psi(url, strategy);
      const a = j.lighthouseResult?.audits ?? {};
      rows.push({
        path,
        strategy,
        score: j.lighthouseResult?.categories?.performance?.score != null ? Math.round(j.lighthouseResult.categories.performance.score * 100) : null,
        lcpMs: a["largest-contentful-paint"]?.numericValue ?? null,
        tbtMs: a["total-blocking-time"]?.numericValue ?? null,
        cls: a["cumulative-layout-shift"]?.numericValue ?? null,
        fcpMs: a["first-contentful-paint"]?.numericValue ?? null,
        field: fieldData(j),
      });
      console.log(`ok   ${strategy.padEnd(7)} ${path}`);
    } catch (e) {
      rows.push({ path, strategy, score: null, lcpMs: null, tbtMs: null, cls: null, fcpMs: null, field: { lcpMs: null, inpMs: null, cls: null, source: "none" }, error: String(e) });
      console.error(`FAIL ${strategy.padEnd(7)} ${path}: ${e}`);
    }
    await sleep(1500);
  }
}

const date = new Date().toISOString().slice(0, 10);
mkdirSync("reports/psi", { recursive: true });
writeFileSync(`reports/psi/${date}.json`, JSON.stringify({ date, base: BASE, rows }, null, 2) + "\n");

const s = (n: number | null, d = 0) => (n === null ? "n/a" : n.toFixed(d));
const sec = (ms: number | null) => (ms === null ? "n/a" : (ms / 1000).toFixed(2) + " s");
const md = [
  `# PageSpeed Insights — ${date}`,
  "",
  `Base: ${BASE}. Lab = Lighthouse run by PSI. Field = CrUX 75th percentile (url, else origin).`,
  "",
  "| Page | Device | Score | LCP (lab) | TBT (lab) | CLS (lab) | LCP (field) | INP (field) | CLS (field) |",
  "|---|---|---|---|---|---|---|---|---|",
  ...rows.map((r) =>
    r.error
      ? `| ${r.path} | ${r.strategy} | error | | | | | | |`
      : `| ${r.path} | ${r.strategy} | ${s(r.score)} | ${sec(r.lcpMs)} | ${s(r.tbtMs)} ms | ${s(r.cls, 3)} | ${sec(r.field.lcpMs)} | ${s(r.field.inpMs)} ms | ${s(r.field.cls, 2)} |`,
  ),
  "",
];
writeFileSync(`reports/psi/${date}.md`, md.join("\n"));
console.log("\n" + md.join("\n"));

// If PSI returned nothing at all (bad key, quota), that is a tooling failure, not a pass.
if (rows.every((r) => r.error)) {
  console.error("\nFAILED: PageSpeed Insights returned no data for any page (check PSI_API_KEY and quota).");
  process.exit(1);
}
if (rows.some((r) => r.error)) console.warn("\nWarning: some pages returned errors; they are excluded from the gate.");

// Gate: mobile lab LCP and CLS only. Missing data (errors, no field data) never fails.
const bad = rows.filter((r) => r.strategy === "mobile" && !r.error && ((r.lcpMs ?? 0) > LCP_LIMIT_MS || (r.cls ?? 0) > CLS_LIMIT));
if (bad.length) {
  console.error(`\nFAILED: mobile lab LCP > ${LCP_LIMIT_MS} ms or CLS > ${CLS_LIMIT} on:`);
  for (const r of bad) console.error(`  ${r.path}  LCP ${sec(r.lcpMs)}  CLS ${s(r.cls, 3)}`);
  process.exit(1);
}
console.log("\nPSI check passed (mobile lab LCP and CLS within limits).");
