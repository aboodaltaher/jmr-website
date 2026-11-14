// Re-runnable SEO invariant checker. For every URL in /sitemap.xml it verifies:
//   1. HTTP status 200
//   2. self-canonical (<link rel="canonical"> points to the page itself)
//   3. no noindex (robots meta)
//   4. hreflang reciprocity (each alternate points back, x-default present on
//      twinned pages, and the sitemap's alternates match the <head> tags)
//   5. internal inbound-link count (how many OTHER pages link to it)
//
// Hard failures (exit 1): status, canonical, noindex, hreflang.
// Warnings (exit 0): fewer than MIN_INLINKS inbound internal links.
//
// Usage — build and start the production server first, then run this:
//   npm run build && npx next start -p 3100 &
//   npm run seo-check                 # BASE defaults to http://127.0.0.1:3100
//   BASE=https://agec.ae npm run seo-check
//
// Runs on Node >= 22 via built-in TypeScript type stripping (no build step).

const BASE = process.env.BASE || "http://127.0.0.1:3100";
const MIN_INLINKS = 2;

type Rec = { status: number; html: string | null };

const strip = (u: string): string =>
  u.replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "") || "/";

let failures = 0;
let warnings = 0;
const fail = (msg: string): void => {
  console.log(`  ✗ ${msg}`);
  failures++;
};
const warn = (msg: string): void => {
  console.log(`  ⚠ ${msg}`);
  warnings++;
};

const cache = new Map<string, Rec>();
async function get(path: string): Promise<Rec> {
  const cached = cache.get(path);
  if (cached) return cached;
  let rec: Rec = { status: 0, html: null };
  try {
    const res = await fetch(BASE + path, { redirect: "manual" });
    rec = {
      status: res.status,
      html: res.status >= 200 && res.status < 300 ? await res.text() : null,
    };
  } catch (e) {
    console.log(`  ✗ fetch failed for ${path}: ${(e as Error).message}`);
  }
  cache.set(path, rec);
  return rec;
}

function canonicalOf(html: string): string | null {
  const m = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
  return m ? strip(m[1]) : null;
}
function robotsOf(html: string): string | null {
  const m = html.match(/<meta[^>]+name="robots"[^>]+content="([^"]+)"/i);
  return m ? m[1] : null;
}
function hreflangsOf(html: string): Record<string, string> {
  const out: Record<string, string> = {};
  const re =
    /<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) out[m[1]] = strip(m[2]);
  return out;
}

async function main(): Promise<void> {
  const sm = await get("/sitemap.xml");
  if (!sm.html) {
    console.log(`✗ could not read ${BASE}/sitemap.xml (status ${sm.status})`);
    process.exit(1);
  }

  const urls = [...sm.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    strip(m[1]),
  );
  // Sitemap alternates per URL (xhtml:link rel="alternate").
  const smAlts: Record<string, Record<string, string>> = {};
  for (const [, block] of sm.html.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = strip((block.match(/<loc>([^<]+)<\/loc>/) || [])[1] || "");
    const als: Record<string, string> = {};
    const re = /hreflang="([^"]+)"\s+href="([^"]+)"/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(block))) als[m[1]] = strip(m[2]);
    smAlts[loc] = als;
  }

  console.log(`SEO check against ${BASE} — ${urls.length} sitemap URLs\n`);

  // Fetch every page up front.
  for (const u of urls) await get(u);

  // Inbound internal-link counts (distinct source pages).
  const inlinks: Record<string, Set<string>> = Object.fromEntries(
    urls.map((u) => [u, new Set<string>()]),
  );
  for (const src of urls) {
    const { html } = cache.get(src)!;
    if (!html) continue;
    const hrefs = [...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) =>
      strip(m[1]),
    );
    for (const h of new Set(hrefs)) {
      if (h !== src && inlinks[h]) inlinks[h].add(src);
    }
  }

  for (const u of urls) {
    const page = cache.get(u)!;
    if (page.status !== 200) {
      fail(`${u}: status ${page.status}`);
      continue;
    }
    const html = page.html!;

    // 2. self-canonical
    const canon = canonicalOf(html);
    if (canon !== u) fail(`${u}: canonical is ${canon ?? "(missing)"}, not self`);

    // 3. no noindex
    const robots = robotsOf(html);
    if (robots && /noindex/i.test(robots)) fail(`${u}: noindex (${robots})`);

    // 4. hreflang reciprocity + x-default + sitemap sync
    const head = hreflangsOf(html);
    const headLangs = Object.keys(head);
    const smLangs = Object.keys(smAlts[u] || {});
    if (headLangs.length > 0 || smLangs.length > 0) {
      if (headLangs.length && !head["x-default"])
        fail(`${u}: <head> hreflang missing x-default`);
      if (smLangs.length && !smAlts[u]["x-default"])
        fail(`${u}: sitemap hreflang missing x-default`);
      const hk = headLangs.filter((k) => k !== "x-default").sort().join(",");
      const sk = smLangs.filter((k) => k !== "x-default").sort().join(",");
      if (hk !== sk)
        fail(`${u}: head hreflang [${hk}] != sitemap [${sk}]`);
      for (const [lang, target] of Object.entries(head)) {
        if (lang === "x-default") continue;
        const tp = await get(target);
        if (!tp.html) {
          fail(`${u}: hreflang ${lang} -> ${target} not 200`);
          continue;
        }
        const back = Object.values(hreflangsOf(tp.html));
        if (!back.includes(u))
          fail(`${u}: hreflang ${lang} -> ${target} is not reciprocal`);
      }
    }

    // 5. inbound internal links
    const n = inlinks[u].size;
    if (n < MIN_INLINKS)
      warn(`${u}: only ${n} inbound internal link(s) (want >= ${MIN_INLINKS})`);
  }

  console.log(
    `\n${failures} failure(s), ${warnings} warning(s) across ${urls.length} URLs`,
  );
  if (failures > 0) {
    console.log("SEO CHECK FAILED");
    process.exit(1);
  }
  console.log("SEO CHECK PASSED");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
