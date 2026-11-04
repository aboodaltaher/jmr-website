// Crawl built routes and assert SEO/content invariants.
const BASE = process.env.BASE || "http://127.0.0.1:3100";

const routes = [
  "/", "/about", "/services", "/projects", "/blog", "/quote", "/book", "/contact", "/review",
  "/ac-maintenance-dubai", "/ac-repair-dubai", "/ac-amc-dubai", "/ac-duct-cleaning-dubai",
  "/air-balancing-airflow-testing-dubai", "/smart-thermostat-installation-dubai",
  "/quote/thank-you",
  "/services/vrf-vrv-systems", "/services/chillers", "/services/dx-units",
  "/services/ventilation-fresh-air", "/services/hvac-design", "/services/testing-commissioning",
  "/services/maintenance",
  "/services/hvac-installation-dubai",
  "/services/tab-testing-adjusting-balancing-dubai",
  "/services/chiller-maintenance-dubai",
];

const titles = new Map();
const descs = new Map();
let problems = 0;

function attr(html, re) {
  const m = html.match(re);
  return m ? m[1] : null;
}

for (const route of routes) {
  const res = await fetch(BASE + route);
  if (!res.ok) { console.log(`FAIL ${route} -> HTTP ${res.status}`); problems++; continue; }
  const html = await res.text();

  const h1count = (html.match(/<h1[\s>]/g) || []).length;
  const title = attr(html, /<title>([^<]*)<\/title>/);
  const desc = attr(html, /<meta name="description" content="([^"]*)"/);
  const canonicalHref = attr(html, /<link rel="canonical" href="([^"]*)"/);
  const canonical = !!canonicalHref;
  const ogImage = /<meta property="og:image"/.test(html);
  // A page whose canonical points elsewhere is an intentional alias (e.g. /book
  // -> /quote); its title/description are meant to match the canonical target.
  const canonicalPath = canonicalHref ? canonicalHref.replace(/^https?:\/\/[^/]+/, "") || "/" : route;
  const isAlias = canonicalPath !== route;

  // Strip tags for a rough visible-text check.
  const text = html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ");
  const has27 = /27\s+reviews/i.test(text);
  const has7em = /(all\s+)?(7|seven)\s+emirates/i.test(text);

  const issues = [];
  if (h1count !== 1) issues.push(`h1=${h1count}`);
  if (!title) issues.push("no <title>");
  if (!desc) issues.push("no description");
  if (!canonical) issues.push("no canonical");
  if (!ogImage) issues.push("no og:image");
  if (has27) issues.push('"27 reviews"');
  if (has7em) issues.push('"7 emirates"');
  if (!isAlias) {
    if (title) { if (titles.has(title)) issues.push(`dup title w/ ${titles.get(title)}`); else titles.set(title, route); }
    if (desc) { if (descs.has(desc)) issues.push(`dup desc w/ ${descs.get(desc)}`); else descs.set(desc, route); }
  }

  if (issues.length) { console.log(`FAIL ${route}: ${issues.join(", ")}`); problems += issues.length; }
  else console.log(`ok   ${route}${isAlias ? ` (alias -> ${canonicalPath})` : ""}`);
}

console.log(problems === 0 ? "\nALL CHECKS PASSED" : `\n${problems} PROBLEM(S)`);
process.exit(problems === 0 ? 0 : 1);
