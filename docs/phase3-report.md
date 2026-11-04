# Phase 3 — Review source, coverage wording, new service pages, case studies

Branch: `feature/new-services-casestudies`.
Verification: `eslint` ✓ (0 errors) · `tsc --noEmit` ✓ · `next build` ✓ (50 routes) ·
crawl `scripts/crawl.mjs` ✓ (all pages: one H1, unique title/description, canonical,
og:image; no "27 reviews", no "7 emirates").

## Task 1 — one source for the review count
- Repo grep: **no "27" anywhere**; the only hard-coded "32" is in `src/lib/company.ts`
  (the config). The review count was already single-sourced.
- Added `src/lib/siteStats.ts` — a thin facade re-exporting `reviewCount`,
  `ratingValue`, `projectCount` from `company.ts` (one underlying value each, no
  duplication). New pages read from it.
- No `AggregateRating` schema exists (intentionally not added).

## Task 2 — reword "all 7 emirates"
- Delivered list reconciled to **Dubai, Sharjah, Ajman, Abu Dhabi** (About and Projects
  name these four, and the projects grid includes a real Ajman project). The **VRF page**
  named only three (missing Ajman) and was corrected to match. Flagged in CONTENT_NEEDED.md.
- `COVERAGE_SENTENCE` = "Serving Dubai, Sharjah, Ajman and Abu Dhabi, with service available
  across the UAE on request." (shared constant). Arabic `COVERAGE_SENTENCE_AR` added.
- English "7 emirates" was already gone; fixed the **three remaining Arabic** claims
  (`/ar`, `/ar/ac-repair-dubai`).
- LocalBusiness + Service JSON-LD `areaServed` now use a shared `AREA_SERVED_SCHEMA`
  (the 4 emirates + UAE).

## Task 3 — three new service pages
Slugs chosen (SEO `-dubai` style; new routes, no redirects):
- **/services/hvac-installation-dubai**
- **/services/tab-testing-adjusting-balancing-dubai**
- **/services/chiller-maintenance-dubai**

Each: shared `ServiceDetailLayout`, unique title (50–60 chars) + meta (140–155),
self-referencing canonical + og/twitter via `buildMetadata`, one H1, 600–900 words,
5 FAQ items rendered as FAQPage JSON-LD, Service + BreadcrumbList JSON-LD with the shared
`areaServed`, review count from `siteStats`, inline lead form. Wired into the services hub
grid, header services + maintenance menus, footer, `RelatedServices` (so existing pages
link back), and the sitemap. Copy is general — no invented certifications, standards,
brands, clients, numbers or dates.

## Task 4 — case-study system
- `src/data/projects.ts` is the single source for `/projects` and `/projects/[slug]`.
- `/projects/[slug]` template: project facts, scope/challenge/solution/result, gallery,
  **Project + BreadcrumbList JSON-LD**, `generateMetadata`, `dynamicParams = false`
  (only non-draft slugs exist; draft/unknown → `notFound`).
- `ProjectGrid` now reads the data file; published cards link to their case study, drafts
  render non-linked.
- All **12 projects are `draft: true`** — entered from published facts only (name, category,
  system/capacity, location). None render or appear in the sitemap, because the site publishes
  no challenge/solution/result, photos, dates or client permission. `CONTENT_NEEDED.md` lists,
  per project, exactly what to supply; flip `draft: false` once provided.

## New URLs
- `/services/hvac-installation-dubai`
- `/services/tab-testing-adjusting-balancing-dubai`
- `/services/chiller-maintenance-dubai`
- `/projects/[slug]` — dynamic case studies (0 published; 12 drafts ready)

## Flagged for native Arabic review
- `src/lib/company.ts` → `COVERAGE_SENTENCE_AR`
- `src/app/ar/page.tsx` → coverage card title + description
- `src/app/ar/ac-repair-dubai/page.tsx` → coverage FAQ answer + hero eyebrow

## Files changed
19 files (see `git diff`): `company.ts`, `siteStats.ts` (new), `metadata`/schema wiring
(`SiteSchema.tsx`, `ServiceDetailLayout.tsx`), `RelatedServices.tsx`, `Header.tsx`,
`Footer.tsx`, `services/page.tsx`, 3 new service pages, `data/projects.ts` (new),
`projects/[slug]/page.tsx` (new), `ProjectGrid.tsx`, `sitemap.ts`, VRF + Arabic pages,
`CONTENT_NEEDED.md` (new), `scripts/crawl.mjs` (new).

Nothing pushed; no PR opened (not requested).
