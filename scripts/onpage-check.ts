// On-page SEO guardrail. For EVERY URL in /sitemap.xml it fetches the page and
// fails (exit 1) if:
//   - the title is missing, over 60 characters, or duplicated on another URL
//   - the description is missing, outside 120-160 characters, or duplicated
//   - there isn't exactly one <h1>
//   - there isn't exactly one visible breadcrumb AND exactly one BreadcrumbList
//     JSON-LD, or the two don't match (same names, order and URLs)
//   - og:title / og:description differ from the page title / description
// The two homepages (/ and /ar) are exempt from breadcrumbs: they must have none.
//
// Usage (build and start the production server first):
//   npm run build && npx next start -p 3100 &
//   npm run onpage-check                       # BASE defaults to http://127.0.0.1:3100
//   BASE=https://agec.ae npm run onpage-check
//
// Runs on Node >= 22 via built-in TypeScript type stripping (no build step).

// Make this file a module so its top-level names do not collide with other scripts.
export {};

const BASE = process.env.BASE || "http://127.0.0.1:3100";
// Extra paths to check besides the sitemap (comma-separated), e.g. pages that are
// built but noindex/unpublished:  EXTRA_URLS=/ac-maintenance/al-barsha,/x npm run onpage-check
const EXTRA_URLS = (process.env.EXTRA_URLS || "").split(",").map((u) => u.trim()).filter(Boolean);
const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 160;
const HOMEPAGES = new Set(["/", "/ar"]);
const BC_LABELS = new Set(["breadcrumb", "مسار التنقل"]);

const strip = (u: string): string =>
  u.replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "") || "/";
const len = (s: string): number => [...s].length;

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

interface Crumb {
  name: string;
  path: string;
}

function metaContent(html: string, attr: string, key: string): string {
  const re = new RegExp(
    `<meta[^>]+${attr}="${key}"[^>]+content="([^"]*)"|<meta[^>]+content="([^"]*)"[^>]+${attr}="${key}"`,
    "i",
  );
  const m = html.match(re);
  return decode((m && (m[1] ?? m[2])) || "");
}

/** Visible breadcrumb navs: [list of crumbs] per nav found. */
function visibleBreadcrumbs(html: string, pagePath: string): Crumb[][] {
  const out: Crumb[][] = [];
  const navRe = /<nav\b([^>]*)>([\s\S]*?)<\/nav>/gi;
  let m: RegExpExecArray | null;
  while ((m = navRe.exec(html))) {
    const attrs = m[1];
    const label = (attrs.match(/aria-label="([^"]*)"/i) || [])[1] || "";
    if (!/data-breadcrumbs/.test(attrs) && !BC_LABELS.has(label.toLowerCase())) continue;
    const crumbs: Crumb[] = [];
    for (const li of m[2].matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)) {
      const href = (li[1].match(/<a\b[^>]*href="([^"]*)"/i) || [])[1];
      // Ignore decorative separators (aria-hidden spans) when reading the name.
      const text = decode(
        li[1].replace(/<span[^>]*aria-hidden="true"[^>]*>[\s\S]*?<\/span>/gi, "").replace(/<[^>]+>/g, " "),
      );
      // The last crumb is the current page (rendered without a link).
      crumbs.push({ name: text, path: href ? strip(href) : pagePath });
    }
    out.push(crumbs);
  }
  return out;
}

/** BreadcrumbList JSON-LD blocks (top level or inside @graph). */
function breadcrumbLists(html: string): Crumb[][] {
  const out: Crumb[][] = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let json: unknown;
    try {
      json = JSON.parse(m[1]);
    } catch {
      continue;
    }
    const nodes: unknown[] = Array.isArray(json)
      ? json
      : [json, ...(((json as { "@graph"?: unknown[] })["@graph"]) ?? [])];
    for (const n of nodes) {
      const node = n as { "@type"?: string; itemListElement?: { name: string; item: string }[] };
      if (node && node["@type"] === "BreadcrumbList") {
        out.push(
          (node.itemListElement ?? []).map((it) => ({
            name: decode(it.name),
            path: strip(it.item),
          })),
        );
      }
    }
  }
  return out;
}

const same = (a: Crumb[], b: Crumb[]): boolean =>
  a.length === b.length && a.every((c, i) => c.name === b[i].name && c.path === b[i].path);
const show = (c: Crumb[]): string => c.map((x) => `${x.name}→${x.path}`).join(" / ");

interface Row {
  url: string;
  title: string;
  desc: string;
  h1: number;
  navs: number;
  lds: number;
  problems: string[];
}

async function main(): Promise<void> {
  const smRes = await fetch(`${BASE}/sitemap.xml`);
  if (!smRes.ok) {
    console.log(`✗ cannot read ${BASE}/sitemap.xml (HTTP ${smRes.status})`);
    process.exit(1);
  }
  const urls = [
    ...new Set([
      ...[...(await smRes.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => strip(m[1])),
      ...EXTRA_URLS,
    ]),
  ];

  const rows: Row[] = [];
  for (const url of urls) {
    const problems: string[] = [];
    const res = await fetch(BASE + url, { redirect: "manual" });
    if (res.status !== 200) {
      rows.push({ url, title: "", desc: "", h1: 0, navs: 0, lds: 0, problems: [`HTTP ${res.status}`] });
      continue;
    }
    const html = await res.text();

    const title = decode((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "");
    const desc = metaContent(html, "name", "description");
    const ogTitle = metaContent(html, "property", "og:title");
    const ogDesc = metaContent(html, "property", "og:description");
    const h1 = (html.match(/<h1[\s>]/gi) || []).length;
    const navs = visibleBreadcrumbs(html, url);
    const lds = breadcrumbLists(html);

    if (!title) problems.push("title missing");
    else if (len(title) > TITLE_MAX) problems.push(`title ${len(title)} > ${TITLE_MAX}`);
    if (!desc) problems.push("description missing");
    else if (len(desc) < DESC_MIN || len(desc) > DESC_MAX)
      problems.push(`description ${len(desc)} not in ${DESC_MIN}-${DESC_MAX}`);
    if (h1 !== 1) problems.push(`${h1} <h1> (need exactly 1)`);
    if (ogTitle !== title) problems.push("og:title != title");
    if (ogDesc !== desc) problems.push("og:description != description");

    if (HOMEPAGES.has(url)) {
      if (navs.length || lds.length) problems.push("homepage should have no breadcrumb");
    } else {
      if (navs.length !== 1) problems.push(`${navs.length} visible breadcrumbs (need 1)`);
      if (lds.length !== 1) problems.push(`${lds.length} BreadcrumbList JSON-LD (need 1)`);
      if (navs.length === 1 && lds.length === 1 && !same(navs[0], lds[0]))
        problems.push(`breadcrumb mismatch: visible [${show(navs[0])}] vs JSON-LD [${show(lds[0])}]`);
    }
    rows.push({ url, title, desc, h1, navs: navs.length, lds: lds.length, problems });
  }

  // Duplicates across the whole sitemap.
  const dup = (key: "title" | "desc", label: string): void => {
    const seen = new Map<string, string[]>();
    for (const r of rows) if (r[key]) seen.set(r[key], [...(seen.get(r[key]) ?? []), r.url]);
    for (const [, list] of seen)
      if (list.length > 1)
        for (const r of rows)
          if (list.includes(r.url))
            r.problems.push(`${label} duplicated on ${list.filter((u) => u !== r.url).join(", ")}`);
  };
  dup("title", "title");
  dup("desc", "description");

  const w = Math.max(...rows.map((r) => r.url.length), 3);
  console.log(`On-page check against ${BASE} — ${rows.length} sitemap URLs\n`);
  console.log(`${"URL".padEnd(w)}  TITLE  DESC   H1  NAV  LD  RESULT`);
  for (const r of rows) {
    console.log(
      `${r.url.padEnd(w)}  ${String(len(r.title)).padStart(5)}  ${String(len(r.desc)).padStart(4)}  ${String(r.h1).padStart(3)}  ${String(r.navs).padStart(3)}  ${String(r.lds).padStart(2)}  ${r.problems.length ? "FAIL" : "ok"}`,
    );
  }

  const failed = rows.filter((r) => r.problems.length);
  console.log("");
  for (const r of failed) for (const p of r.problems) console.log(`  ✗ ${r.url}: ${p}`);
  console.log(`\n${failed.length} failing URL(s) of ${rows.length}`);
  if (failed.length) {
    console.log("ON-PAGE CHECK FAILED");
    process.exit(1);
  }
  console.log("ON-PAGE CHECK PASSED");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
