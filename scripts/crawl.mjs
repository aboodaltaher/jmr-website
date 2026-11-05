// Crawl built routes and assert SEO / nav / content invariants.
//   node scripts/crawl.mjs            (expects a server on BASE)
const BASE = process.env.BASE || "http://127.0.0.1:3100";

const enRoutes = [
  "/", "/about", "/services", "/projects", "/blog", "/quote", "/book", "/contact", "/review",
  "/ac-maintenance-dubai", "/ac-repair-dubai", "/ac-amc-dubai", "/ac-duct-cleaning-dubai",
  "/air-balancing-airflow-testing-dubai", "/smart-thermostat-installation-dubai",
  "/quote/thank-you",
  "/services/vrf-vrv-systems", "/services/chillers", "/services/dx-units",
  "/services/ventilation-fresh-air", "/services/hvac-design", "/services/testing-commissioning",
  "/services/maintenance", "/services/hvac-installation-dubai",
  "/services/tab-testing-adjusting-balancing-dubai", "/services/chiller-maintenance-dubai",
  // Published case studies
  "/projects/basil-mall-ajman", "/projects/private-g4-building-dubai",
  "/projects/double-twin-villa-sharjah", "/projects/g1r-villa-dubai",
  "/projects/villa-al-barsha-dubai", "/projects/18-villas-community",
  "/projects/private-villa-sharjah-flagship", "/projects/mbz-ai-server-room-abu-dhabi",
  "/projects/pure-gym-al-barsha", "/projects/ave-restaurant-business-bay",
  "/projects/zain-solution-data-center-abu-dhabi", "/projects/cultural-center-al-barsha",
];
const arRoutes = ["/ar", "/ar/ac-maintenance-dubai", "/ar/ac-repair-dubai", "/ar/ac-duct-cleaning-dubai", "/ar/ac-amc-dubai"];

// EN<->AR pairs that must carry reciprocal hreflang (en-AE, ar-AE, x-default->EN).
const PAIRS = [
  ["/", "/ar"],
  ["/ac-maintenance-dubai", "/ar/ac-maintenance-dubai"],
  ["/ac-repair-dubai", "/ar/ac-repair-dubai"],
  ["/ac-duct-cleaning-dubai", "/ar/ac-duct-cleaning-dubai"],
  ["/ac-amc-dubai", "/ar/ac-amc-dubai"],
];
const pairPages = new Set(PAIRS.flat());

const DUCT_ANCHORS = ["premium-duct-cleaning", "full-ac-cleaning", "split-ac-cleaning", "coil-cleaning"];

let problems = 0;
const titles = new Map();
const descs = new Map();
const headerSigs = new Map();
const htmlCache = new Map();

const attr = (html, re) => { const m = html.match(re); return m ? m[1] : null; };

async function get(route) {
  if (htmlCache.has(route)) return htmlCache.get(route);
  const res = await fetch(BASE + route);
  const html = res.ok ? await res.text() : null;
  htmlCache.set(route, html);
  if (!html) { console.log(`FAIL ${route} -> HTTP ${res.status}`); problems++; }
  return html;
}

function hreflangs(html) {
  const out = {};
  const re = /<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/gi;
  let m;
  while ((m = re.exec(html))) out[m[1]] = m[2].replace(/^https?:\/\/[^/]+/, "") || "/";
  return out;
}

// Stable nav links only — exclude the language switch, which is intentionally
// page-specific (EN pages link to the current page's /ar counterpart, and vice
// versa). EN header keeps non-/ar links; AR header keeps /ar links.
function headerLinks(html, isAr) {
  const m = html.match(/<header[\s\S]*?<\/header>/);
  if (!m) return null;
  const hrefs = [...m[0].matchAll(/href="([^"]+)"/g)].map((x) => x[1])
    .filter((h) => h.startsWith("/"))
    .filter((h) => (isAr ? h.startsWith("/ar") : !h.startsWith("/ar")));
  return [...new Set(hrefs)].sort().join(",");
}

for (const route of [...enRoutes, ...arRoutes]) {
  const html = await get(route);
  if (!html) continue;
  const isAr = route === "/ar" || route.startsWith("/ar/");
  const issues = [];

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) issues.push(`h1=${h1}`);

  const title = attr(html, /<title>([^<]*)<\/title>/);
  const desc = attr(html, /<meta name="description" content="([^"]*)"/);
  if (!title) issues.push("no <title>");
  if (!desc) issues.push("no description");
  if (!/<meta property="og:image"/.test(html)) issues.push("no og:image");

  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  const canonicalPath = canonical ? canonical.replace(/^https?:\/\/[^/]+/, "") || "/" : null;
  if (!canonical) issues.push("no canonical");
  const isAlias = canonicalPath && canonicalPath !== route;
  if (canonical && !isAlias && canonicalPath !== route) issues.push(`canonical ${canonicalPath} != ${route}`);

  if (!isAlias) {
    if (title) { if (titles.has(title)) issues.push(`dup title w/ ${titles.get(title)}`); else titles.set(title, route); }
    if (desc) { if (descs.has(desc)) issues.push(`dup desc w/ ${descs.get(desc)}`); else descs.set(desc, route); }
  }

  // hreflang: required on pair pages, absent elsewhere.
  const hl = hreflangs(html);
  if (pairPages.has(route)) {
    const pair = PAIRS.find((p) => p.includes(route));
    const [en, ar] = pair;
    if (hl["en-AE"] !== en) issues.push(`en-AE=${hl["en-AE"]}≠${en}`);
    if (hl["ar-AE"] !== ar) issues.push(`ar-AE=${hl["ar-AE"]}≠${ar}`);
    if (hl["x-default"] !== en) issues.push(`x-default=${hl["x-default"]}≠${en}`);
  } else if (Object.keys(hl).length) {
    issues.push(`unexpected hreflang on non-pair page`);
  }

  // header-link consistency within a locale
  const sig = headerLinks(html, isAr);
  if (sig) { const k = isAr ? "ar" : "en"; if (!headerSigs.has(k)) headerSigs.set(k, { sig, route }); else if (headerSigs.get(k).sig !== sig) issues.push(`header links differ from ${headerSigs.get(k).route}`); }

  if (issues.length) { console.log(`FAIL ${route}: ${issues.join(", ")}`); problems += issues.length; }
  else console.log(`ok   ${route}${isAlias ? ` (alias -> ${canonicalPath})` : ""}`);
}

// duct anchors exist on target + home links to them
const duct = await get("/ac-duct-cleaning-dubai");
const home = await get("/");
for (const a of DUCT_ANCHORS) {
  if (duct && !duct.includes(`id="${a}"`)) { console.log(`FAIL anchor #${a} missing on /ac-duct-cleaning-dubai`); problems++; }
  if (home && !home.includes(`/ac-duct-cleaning-dubai#${a}`)) { console.log(`FAIL home does not link to #${a}`); problems++; }
}
if (duct && home) console.log(`ok   duct anchors (${DUCT_ANCHORS.length}) present + linked`);

console.log(problems === 0 ? "\nALL CHECKS PASSED" : `\n${problems} PROBLEM(S)`);
process.exit(problems === 0 ? 0 : 1);
