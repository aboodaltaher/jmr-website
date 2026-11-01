# AGEC — Technical SEO Baseline (Step 1)

Measured on branch `seo-technical-pass` against a local production build
(`next build` + `next start`), mobile Lighthouse. No source edits were made
for this baseline. Figures are from the sandbox server; a CDN (Vercel) will
be faster, but relative problems hold.

## 1. How the site is generated

- **Framework:** Next.js 15 App Router (static export per route; all target pages are `○ (Static)` or SSG).
- **Metadata:** per-page `export const metadata` objects; a root `app/layout.tsx` sets `metadataBase: https://agec.ae`, a generic default `title`/`openGraph`/`twitter`, and loads fonts.
- **Canonicals:** every page sets its own `alternates.canonical` (self-referencing). ✅
- **Sitemap:** `src/app/sitemap.ts` (`MetadataRoute.Sitemap`) — hand-listed URLs + blog posts from `getAllPosts()` (drafts excluded). No `lastmod`.
- **robots:** `src/app/robots.ts` → allow all, references `https://agec.ae/sitemap.xml`, `host: https://agec.ae`. ✅
- **Redirects:** `next.config.ts` 308-redirects the four old `/services/ac-cleaning/*` URLs → `/ac-duct-cleaning-dubai`. ✅
- **Structured data:** inline `<script type="application/ld+json">` per page (no central helper).

## 2. Lighthouse (mobile) — SEO & Core Web Vitals

| Page | SEO | Perf | LCP | FCP | TBT | CLS |
|---|---|---|---|---|---|---|
| / | 100 | 70 | **4.3 s** | 0.9 s | **610 ms** | 0 |
| /ac-maintenance-dubai | 100 | 92 | 3.2 s | 0.9 s | 100 ms | 0 |
| /ac-repair-dubai | 100 | 98 | 0.8 s | 0.8 s | 170 ms | 0 |
| /ac-amc-dubai | 100 | 94 | 2.9 s | 0.9 s | 130 ms | 0 |
| /services/maintenance | 100 | 100 | 0.8 s | 0.8 s | 70 ms | 0 |
| /services/vrf-vrv-systems | 100 | 93 | 3.2 s | 0.8 s | 100 ms | 0 |
| /projects | 100 | 99 | 0.8 s | 0.8 s | 100 ms | 0 |
| /contact | 100 | 96 | 0.8 s | 0.8 s | 240 ms | 0 |

- **Lighthouse SEO = 100 everywhere**, but Lighthouse only checks basics (title, meta, crawlable, tap targets). It does **not** grade OG images, structured-data richness, or NAP consistency — which is where the real gaps are (below).
- **CLS = 0 everywhere.** ✅
- **Homepage is the perf outlier:** LCP 4.3 s, TBT 610 ms (hero image + reviews block + analytics scripts). Pages with a large hero image (maintenance, vrf, amc) sit at LCP ~3 s. Not in the Step-2 scope (meta/schema/crawl), recorded for the owner.

## 3. Titles & meta descriptions (rendered lengths)

Spec: titles ≤ 60 chars, descriptions 120–155, each with service + "Dubai" where relevant.

| Page | Title (len) | Desc (len) | Issue |
|---|---|---|---|
| / | 49 | 123 | ✅ |
| /about | **12** "About \| AGEC" | **214** | Title brand-only; **desc far too long** |
| /services | 36 | 130 | ✅ |
| /ac-maintenance-dubai | 60 | 134 | ✅ (title at limit) |
| /ac-repair-dubai | 39 | 138 | ✅ |
| /ac-amc-dubai | 50 | 152 | ✅ |
| /ac-duct-cleaning-dubai | 52 | 134 | ✅ |
| /services/maintenance | 46 | 136 | ✅ already "Commercial HVAC Maintenance Dubai \| AMC" (the brief's premise was pre-fix) |
| /services/vrf-vrv-systems | **24** | **167** | Title lacks Dubai; **desc too long** and says **"certified engineers" (unverified claim → remove)** |
| /services/ventilation-fresh-air | 52 | 145 | ✅ |
| /projects | **15** "Projects \| AGEC" | 137 | Title brand-only (add Dubai/HVAC) |
| /contact | **14** "Contact \| AGEC" | **91** | Title brand-only; **desc too short** |
| /quote | 22 | 155 | ✅ (title could add Dubai) |
| /book | 21 | 116 | desc slightly short |
| /smart-thermostat-installation-dubai | **62** | 140 | Title **> 60**, shorten |
| /blog | 40 | 148 | ✅ |

## 4. Social / Open Graph tags

- **`og:image` is MISSING on every page** (no 1200×630 image anywhere). ❌ biggest social gap.
- **`twitter:title` is the generic `"AGEC — Engineered to Perform"` on every page** (leaks from `layout.tsx`; pages set `openGraph` but not `twitter`, so the default persists). ❌
- `og:title` / `og:description` are correctly page-specific. ✅
- Generic `layout.tsx` `openGraph.description` ("HVAC · MEP · Maintenance contracting across the UAE") only shows if a page omits its own — all current pages override it, but it should still be improved as the default.

## 5. Structured data (JSON-LD) present per page

| Page | Present | Missing |
|---|---|---|
| / | HVACBusiness | Organization + `sameAs` (GBP); openingHours; areaServed explicit |
| /about | — | BreadcrumbList |
| /services | — | BreadcrumbList |
| /ac-maintenance-dubai | Service, FAQPage, BreadcrumbList | ✅ |
| /ac-repair-dubai | Service, FAQPage, BreadcrumbList | ✅ |
| /ac-amc-dubai | Service, FAQPage | **BreadcrumbList** |
| /ac-duct-cleaning-dubai | Service, FAQPage, BreadcrumbList | ✅ |
| /services/maintenance | Service, FAQPage, BreadcrumbList | ✅ |
| /services/vrf-vrv-systems | Service, BreadcrumbList | ✅ (no visible FAQ, correct) |
| /services/ventilation-fresh-air | Service, FAQPage, BreadcrumbList | ✅ |
| /projects | — | BreadcrumbList |
| /contact | — | **LocalBusiness** (required by CLAUDE.md) + BreadcrumbList |
| /quote, /book | — | BreadcrumbList (minor) |
| /blog | — | Blog + BreadcrumbList |
| /smart-thermostat-installation-dubai | Service, FAQPage, BreadcrumbList | ✅ |

- No `AggregateRating`/`Review` markup anywhere — correct, must stay that way (not self-serving).
- BreadcrumbList `item` URLs in existing schema use **trailing slashes** (`…/services/`) while canonicals have **no** trailing slash — inconsistent; normalise to no trailing slash.

## 6. Crawl / canonical consistency

- robots.txt and sitemap.xml generated and cross-referenced. ✅
- Sitemap has **no `lastmod`**; includes `/quote`, `/book`, `/contact` (fine — they're indexable). No noindex/utility pages leak in.
- **www vs non-www:** all canonicals, robots `host`, sitemap and `metadataBase` use **non-www `https://agec.ae`**, but the brand/site is cited as **`https://www.agec.ae`**. The code is internally consistent (all non-www), so there is no *internal* inconsistency — but the canonical host must match whichever host actually serves the site in production. **This needs the owner's decision before any host change** (see report question).
- Trailing slash: canonicals are consistently slash-less; only the schema `item` URLs differ (above).

## 7. Minor

- `<meta name="next-size-adjust">` appears on every page — this is **injected by Next.js** `next/font` and is empty/harmless; there is no supported API to remove it. Not a real issue.
- No `meta keywords` tag anywhere. ✅ (nothing to remove)

---

## Fix plan (Step 2)

- **A. Titles/descriptions:** rewrite `/about` (title+desc), `/services/vrf-vrv-systems` (title+desc, drop "certified"), `/contact` (title+desc), `/projects` (title), `/smart-thermostat-installation-dubai` (title ≤60), `/book` (desc). (`/services/maintenance` already compliant.)
- **B. Social:** add a 1200×630 `og:image` site-wide default (+ key pages); make `twitter` inherit page title/description; improve the `layout.tsx` default OG/Twitter text.
- **C. Structured data:** site-wide Organization + LocalBusiness (HVACBusiness) with NAP, areaServed, openingHours, `sameAs` (GBP); add LocalBusiness to /contact; add BreadcrumbList to /about, /services, /projects, /contact, /blog, /ac-amc-dubai (and /quote, /book); normalise schema URLs to slash-less. Geo coords remain `TODO(owner)`.
- **D. Crawl:** add `lastmod` to sitemap; keep self-referencing canonicals; resolve www vs non-www per owner.

## Open question for owner
- **Canonical host: `agec.ae` or `www.agec.ae`?** Everything currently uses non-www. Tell me which the production site serves as primary and I will make the whole site (metadataBase, canonicals, robots, sitemap, schema) match it.

## TODO(owner) carried forward
- Exact building/unit + **geo coordinates** for the Al Quoz address (for LocalBusiness `geo`).
- Any **social profile URLs** (Instagram/LinkedIn) for `sameAs` beyond the Google Business Profile.
- Confirm **physical opening hours** vs the advertised 24/7 phone availability.
