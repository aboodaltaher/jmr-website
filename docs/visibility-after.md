# AGEC visibility — after (STEP 5 measurement)

Same build/measurement method as `visibility-baseline.md`. Branch
`agec-visibility`.

## Lighthouse (mobile) — before → after

| Page | SEO | Perf | LCP | TBT |
|---|---|---|---|---|
| / | 100 → 100 | 61 → **91** | 4.3s → **2.6s** | 1,070 → **290ms** |
| /ac-maintenance-dubai | 100 → 100 | 80 → 76 | 1.1s → 1.1s | 860 → 1,260ms\* |
| /ac-repair-dubai | 100 → 100 | 81 → 88 | 1.0s → 1.0s | 810 → 490ms |
| /ac-amc-dubai | 100 → 100 | 97 → 93 | 1.0s → 1.0s | 190 → 330ms |
| /services/maintenance | 100 → 100 | 95 → 95 | 1.0s → 0.9s | 270 → 260ms |
| /services/vrf-vrv-systems | 100 → 100 | 88 → 87 | 3.6s → 3.4s | 150 → 230ms |
| /about | 100 → 100 | 96 → 98 | 2.5s → 0.8s | 140 → 170ms |
| /projects | 100 → 100 | 100 → 99 | 0.8s → 0.8s | 60 → 150ms |

CLS = 0 on every page. **SEO stays 100.** The homepage improved a lot
(the baseline figure was a cold run). `*` TBT numbers swing ±400ms between
runs and are dominated by the third-party analytics tags (Google Ads/GTM),
which are deferrable but conversion-critical — left in place.

**Core Web Vitals watch-list:** homepage LCP ~2.6s and
/services/vrf-vrv-systems LCP ~3.4s (both large hero images, already
`priority`-preloaded and served as AVIF/WebP). On a warm CDN these are faster;
flagged for Search Console field-data monitoring.

## Internal linking — inbound contextual (body) links, before → after

The new "Related services" block (on every service page + every blog post) and
the "Service areas" section fixed the low-inbound pages:

| Page | before | after |
|---|---|---|
| /about | 0 | **27** |
| /services | 1 | **28** |
| /projects | 1 | **29** |
| /contact | 1 | **29** |
| /ac-repair-dubai | 2 | **28** |
| /services/vrf-vrv-systems | 18 | 24 |
| /services/dx-units | 3 | 3 |
| /services/ventilation-fresh-air | 4 | 4 |

Every non-blog, non-/ar page now has ≥3 contextual inbound links; the core
pages and most service pages have 20+. (dx-units/ventilation sit at 3–4 — they
appear less often in the rotated 6-item block; raising the block size or
reordering can lift them further if wanted.)

## Structured data — after
- Added **Person (founder)** on /about, matching the visible profile.
- Confirmed Organization + HVACBusiness + GeneralContractor site-wide;
  Service + FAQPage + BreadcrumbList on service pages; Article + BlogPosting
  on blog posts; Blog on /blog. No AggregateRating/Review for AGEC's own
  reviews (per rule).

## Titles / metas — after
- Fixed: /services/testing-commissioning (94 → ~140), /services/chillers
  (168 → ~150), /services/dx-units (177 → ~140). Two long blog titles shortened
  via `titleTag` (amc-guide 81 → 41, vrf-vs-chiller 70 → 48). No duplicate
  titles; every page has page-specific OG/Twitter + 1200×630 og:image.

## New pages
- **/review** — printable QR card for technicians (noindex, excluded from the
  sitemap), QR → the Google review URL, "Leave a review" button.
- Location pages (/hvac-contractor-dubai, /ac-installation-dubai,
  /ac-services-sharjah, /ac-services-abu-dhabi) and case studies
  (/projects/[slug]) were **not** built — see the PR for why.
