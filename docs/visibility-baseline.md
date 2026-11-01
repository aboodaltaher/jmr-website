# AGEC visibility baseline (STEP 1 — no edits)

Measured on the production build (`next start`), mobile Lighthouse, full
sitemap crawl. Branch: `agec-visibility`.

## 1. Lighthouse (mobile) — 8 pages

| Page | SEO | Perf | LCP | TBT | CLS |
|---|---|---|---|---|---|
| / | 100 | 61\* | 4.3s\* | 1,070ms\* | 0 |
| /ac-maintenance-dubai | 100 | 80 | 1.1s | 860ms | 0 |
| /ac-repair-dubai | 100 | 81 | 1.0s | 810ms | 0 |
| /ac-amc-dubai | 100 | 97 | 1.0s | 190ms | 0 |
| /services/maintenance | 100 | 95 | 1.0s | 270ms | 0 |
| /services/vrf-vrv-systems | 100 | 88 | 3.6s | 150ms | 0 |
| /about | 100 | 96 | 2.5s | 140ms | 0 |
| /projects | 100 | 100 | 0.8s | 60ms | 0 |

\* Cold single run just after server start (next/image optimises on first
request). CLS is 0 everywhere. **SEO = 100 on every page.** Homepage LCP/TBT
and VRF LCP are the Core-Web-Vitals items to watch (STEP 2D).

## 2. Crawl — title / meta / words / inbound body links / schema

39 URLs in the sitemap. No duplicate titles. "Inbound (body)" counts only
contextual links inside `<main>` (excludes the header, footer and breadcrumb
nav, which link site-wide).

Notable issues:
- **Low contextual inbound (<3), the main internal-linking gap:** /about (0),
  /services (1), /projects (1), /contact (1), /ac-repair-dubai (2),
  /services/dx-units (3), /services/ventilation-fresh-air (4). Most blog posts
  have only 1 (the /blog index) — they are not linked from their matching
  service page and barely cross-link.
- **Meta description length off 120–155:** /services/testing-commissioning =
  94 (too short); /services/chillers = 168, /services/dx-units = 177 (too
  long). Several blog descriptions run 160–214 (acceptable for articles but
  long).
- **Titles > 60:** /blog/ac-maintenance-contracts-dubai-amc-guide (81),
  /blog/vrf-vs-chiller-dubai-villas (71). All page (non-blog) titles ≤ 56.
- **Thin-ish word counts** (not errors, but expansion candidates):
  /projects (244), /contact (100), /services/dx-units (481),
  /ac-repair-dubai (441), /air-balancing… (458). Service pages generally have
  FAQs; /services/* without FAQPage schema: chillers, dx-units, hvac-design,
  testing-commissioning, vrf-vrv-systems.
- **Structured data present site-wide:** Organization + HVACBusiness +
  GeneralContractor on every page; Service + FAQPage + BreadcrumbList on
  service pages; Article + BlogPosting on blog posts; Blog on /blog. **Missing:
  Person (founder) on /about.** No AggregateRating/Review schema (correct).
- **Orphans:** none in the strict sense — every URL is reachable via header,
  footer and/or sitemap. /about has 0 contextual body links in, which is the
  closest to an orphan signal.

## 3. robots.txt & sitemap.xml

- `robots.txt`: present — `User-Agent: * / Allow: /`, `Host: https://agec.ae`,
  `Sitemap: https://agec.ae/sitemap.xml`. ✓
- `sitemap.xml`: present, 39 URLs, non-www, `lastModified` on every entry,
  includes /ar subtree, excludes utility routes. ✓
- Canonicals: self-referencing, non-www, no trailing slash. hreflang (en/ar/
  x-default) present on the bilingual pages. ✓

## Summary — what's already solid vs. the real gaps

Already solid (from prior work): SEO 100, crawl files, canonicals/hreflang,
titles/metas mostly in range, full OG/Twitter + og:image, Service/FAQ/
Breadcrumb/Article schema, single facts config, visible reviews section +
byline, GA4/GTM infra (env-driven).

Real gaps this pass targets: contextual internal linking (Related-services
blocks, blog→service links, feed the low-inbound pages), Person(founder)
schema, a /review page + "Leave a review" button, a Service-areas section,
the Google Map on /contact, a handful of meta-length/title fixes, homepage
CWV, and the editorial + Search-Console docs. Location pages and case studies
are **not** built (no per-emirate content / no case-study files in the repo) —
listed as "waiting for content".
