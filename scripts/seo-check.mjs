// SEO crawler: checks the built site against on-page SEO invariants.
// Usage: build, start the server, then run this against it:
//   npm run build && npx next start -p 3100 &   # (or `npm start`)
//   node scripts/seo-check.mjs
//
// Discovers URLs from /sitemap.xml (the single route list) and reports, per URL:
//   HTTP status · <title> length · meta description length · exactly one <h1>
//   · self-canonical · hreflang pairs · og:image · JSON-LD validity · missing
//   alt text. Internal links collected across all pages are then checked for
//   broken targets. Exits non-zero if any problem is found.

const BASE = process.env.BASE || "http://127.0.0.1:3100";

// Recommended lengths (soft — reported, counted as warnings not failures).
const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 160;

let problems = 0;
let warnings = 0;
const htmlCache = new Map();

const problem = (msg) => { console.log(`  ✗ ${msg}`); problems++; };
const warn = (msg) => { console.log(`  ⚠ ${msg}`); warnings++; };

const attr = (html, re) => { const m = html.match(re); return m ? m[1] : null; };
const stripDomain = (u) => u.replace(/^https?:\/\/[^/]+/, "") || "/";

async function fetchHtml(path) {
  if (htmlCache.has(path)) return htmlCache.get(path);
  let res, html = null, status = 0;
  try {
    res = await fetch(BASE + path, { redirect: "manual" });
    status = res.status;
    if (status >= 200 && status < 300) html = await res.text();
  } catch (e) {
    status = 0;
    console.log(`  ✗ fetch failed: ${e.message}`);
  }
  const entry = { status, html };
  htmlCache.set(path, entry);
  return entry;
}

function hreflangs(html) {
  const out = {};
  const re = /<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/gi;
  let m;
  while ((m = re.exec(html))) out[m[1]] = stripDomain(m[2]);
  return out;
}

function jsonLdBlocks(html) {
  const blocks = [];
  const re = /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) blocks.push(m[1]);
  return blocks;
}

// All internal href targets (same-origin, path-only), normalised (no #hash/?query).
function internalLinks(html) {
  const out = new Set();
  const re = /href="(\/[^"#?]*)(?:[#?][^"]*)?"/g;
  let m;
  while ((m = re.exec(html))) {
    let p = m[1];
    if (p.startsWith("/_next") || p.startsWith("/api")) continue;
    if (/\.(png|jpg|jpeg|svg|webp|ico|xml|txt|css|js|woff2?)$/i.test(p)) continue;
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    out.add(p);
  }
  return out;
}

// <img> tags with no alt attribute at all (alt="" is valid = decorative).
function imagesMissingAlt(html) {
  const imgs = html.match(/<img\b[^>]*>/gi) || [];
  return imgs.filter((t) => !/\salt\s*=/.test(t)).length;
}

async function getSitemapPaths() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml -> HTTP ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => stripDomain(m[1].trim()));
  return [...new Set(locs)].sort();
}

async function main() {
  console.log(`SEO check against ${BASE}\n`);

  // robots.txt + sitemap.xml must both be reachable.
  for (const f of ["/robots.txt", "/sitemap.xml"]) {
    const r = await fetch(BASE + f);
    if (r.ok) console.log(`ok   ${f} -> HTTP ${r.status}`);
    else problem(`${f} -> HTTP ${r.status}`);
  }

  const paths = await getSitemapPaths();
  console.log(`\nDiscovered ${paths.length} URLs from sitemap.xml\n`);

  const allInternal = new Set();

  for (const path of paths) {
    console.log(`• ${path}`);
    const { status, html } = await fetchHtml(path);
    if (status !== 200 || !html) { problem(`HTTP ${status}`); continue; }

    const title = attr(html, /<title>([^<]*)<\/title>/);
    if (!title) problem("no <title>");
    else if (title.length > TITLE_MAX) warn(`title ${title.length} chars (>${TITLE_MAX})`);

    const desc = attr(html, /<meta name="description" content="([^"]*)"/);
    if (!desc) problem("no meta description");
    else if (desc.length < DESC_MIN || desc.length > DESC_MAX)
      warn(`description ${desc.length} chars (want ${DESC_MIN}-${DESC_MAX})`);

    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) problem(`h1 count = ${h1} (want 1)`);

    const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
    if (!canonical) problem("no canonical");
    else {
      const cp = stripDomain(canonical);
      const norm = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
      const cpn = cp.length > 1 && cp.endsWith("/") ? cp.slice(0, -1) : cp;
      // A canonical that points elsewhere is an intentional alias; just note it.
      if (cpn !== norm && cpn !== (norm === "/" ? "/" : norm))
        warn(`canonical ${cp} != ${path} (alias?)`);
    }

    if (!/<meta property="og:image"/.test(html)) problem("no og:image");

    // hreflang: if present, must be reciprocal (en-AE, ar-AE, x-default).
    const hl = hreflangs(html);
    if (Object.keys(hl).length) {
      for (const k of ["en-AE", "ar-AE", "x-default"])
        if (!hl[k]) problem(`hreflang missing ${k}`);
    }

    // JSON-LD validity
    for (const block of jsonLdBlocks(html)) {
      try { JSON.parse(block); } catch (e) { problem(`invalid JSON-LD: ${e.message}`); }
    }

    const noAlt = imagesMissingAlt(html);
    if (noAlt > 0) problem(`${noAlt} <img> without an alt attribute`);

    for (const l of internalLinks(html)) allInternal.add(l);
    console.log(`  ok (title ${title?.length ?? "?"}, desc ${desc?.length ?? "?"}, h1 ${h1}, jsonld ${jsonLdBlocks(html).length})`);
  }

  // Broken internal links: every linked path must return 200.
  console.log(`\nChecking ${allInternal.size} unique internal link targets…`);
  for (const l of [...allInternal].sort()) {
    const { status } = await fetchHtml(l);
    if (status !== 200) problem(`broken internal link ${l} -> HTTP ${status}`);
  }

  console.log(`\n${problems} problem(s), ${warnings} warning(s)`);
  console.log(problems === 0 ? "ALL CHECKS PASSED" : "CHECKS FAILED");
  process.exit(problems === 0 ? 0 : 1);
}

main().catch((e) => { console.error(e); process.exit(1); });
