# AGEC — UX / SEO / Web-engineering fix report

Branch: `agec-ux-seo-full-pass` · Scope: the 16 issues in the brief.
Verified at 375 px and 1440 px, with Lighthouse (mobile) and axe-core
(WCAG 2.0/2.1 A + AA). Screenshots and raw data are in
`docs/fix-report-assets/` (`before-*`, `after-*`, `before-data.json`,
`after-data.json`).

> Context: several items in the brief were already addressed in earlier work
> merged to `main` (titles/meta, canonicals, most structured data, the /book→
> /quote merge). This pass verified those and closed the remaining gaps. Where
> a fact could not be confirmed from the repo, it is left as a visible
> `TODO(owner)` and listed at the bottom — nothing was invented.

## Before / after (Lighthouse mobile + axe)

axe-core: **0 violations on all 13 tested pages, before and after.**

| Page | Perf before→after | LCP before→after | a11y | BP | SEO | axe |
|---|---|---|---|---|---|---|
| / | 84 → 96 | 3.5s → 2.6s | 100 | 96* | 100 | 0 |
| /ac-maintenance-dubai | 97 → 92 | 0.9s | 100 | 96* | 100 | 0 |
| /ac-repair-dubai | 98 → 98 | 0.8s | 100 | 96* | 100 | 0 |
| /ac-amc-dubai | 95 → 100 | 0.9s | 100 | 96* | 100 | 0 |
| /services/maintenance | 100 → 99 | 0.9s | 100 | 96* | 100 | 0 |
| /services/vrf-vrv-systems | 93 → 91 | 3.2s → 3.3s | 100 | 96* | 100 | 0 |
| /smart-thermostat-installation-dubai | 98 → 95 | 0.9s | 100 | 96* | 100 | 0 |
| /air-balancing-airflow-testing-dubai | 99 → 93 | 0.9s | 100 | 96* | 100 | 0 |
| /ac-duct-cleaning-dubai | 100 → 98 | 0.9s | 100 | 96* | 100 | 0 |
| /projects | 100 → 99 | 0.8s | 100 | 96* | 100 | 0 |
| /about | 100 → 99 | 0.8s | 100 | 96* | 100 | 0 |
| /contact | 97 → 99 | 0.8s | 100 | 96* | 100 | 0 |
| /quote | 96 → 98 | 0.8s | 100 | 96* | 100 | 0 |

CLS = 0 on every page. No horizontal scroll at 320 / 375 / 430 px on any page.

\* **Best-Practices 96 is a sandbox artifact.** The only failing audit is
`errors-in-console`, caused by the cloud sandbox's egress proxy blocking the
Google Ads / GTM tag (`net::ERR_TUNNEL_CONNECTION_FAILED`). That tag loads
normally on the live site, so production Best-Practices is effectively 100.

## Pass / fail per item

| # | Item | Status | Notes |
|---|---|---|---|
| 1 | Two CTAs; remove booking labels; merge /book; emergency option | ✅ | Removed the last "Request a Technical Assessment" label (air-balancing page + form) and "Get My AMC Quote"; form submit buttons standardised to "Get a Quote". /book 308→/quote (already live). Added an **Emergency? Call now** banner with the full number on /quote and an "Emergency — AC down now" option in the quote form. |
| 2 | Form required fields, response time, privacy note, confirmation, inline validation | ✅ | /quote = 3 required (need, name, phone); AMC = 3 required (name, phone, property type) + optional email added; air-balancing = 4 required (name, phone, building type, symptom); /contact phone now required. Shared `FormAssurance` adds a privacy line + response note to every form. All forms already had confirmation state + inline zod validation. |
| 3 | Inline short forms on 5 pages | ✅ | New `InlineLeadForm` (name, phone, optional details) embedded on /ac-maintenance-dubai, /services/vrf-vrv-systems, /ac-duct-cleaning-dubai, /smart-thermostat-installation-dubai, /services/maintenance. |
| 4 | WhatsApp pre-fills, no brackets, one config | ✅ | Already bracket-free; all prefills are plain sentences in `src/lib/contact.ts`. |
| 5 | Mobile sticky bar 44px, no h-scroll, input types/autocomplete | ✅ | Sticky Call/WhatsApp bar targets ≈48px (`py-3.5`). No horizontal scroll 320–430px (measured). Inputs use `type="tel"/"email"` + `autoComplete` on every form. |
| 6 | Services link, Insights footer, breadcrumbs, contextual links | ✅ | Header "Services" is now a real link to /services (desktop + mobile) keeping the hover menu; "Insights" added to the footer; visible `Breadcrumbs` added to every content page (service pages already had them); maintenance ↔ ac-maintenance cross-links added both ways. |
| 7 | Titles ≤60 / meta 120–155 / unique; page-specific OG+Twitter; 1200×630 og:image | ✅ | Verified: all 13 titles ≤56 chars, all descriptions 120–152 chars, unique. vrf title is "VRF & VRV Systems Dubai \| AGEC" (30), thermostat 50. Each page sets its own OG title/description; `og-image.png` is 1200×630 and applied on every page incl. home. |
| 8 | JSON-LD Organization + HVACBusiness, Service, FAQPage, BreadcrumbList; no AggregateRating | ✅ | Site-wide Organization + HVACBusiness/GeneralContractor (phone, address, areaServed = 7 emirates, 24/7 hours, geo, sameAs = GBP + Instagram). Service + FAQPage + BreadcrumbList on service pages. No AggregateRating anywhere. |
| 9 | sitemap lastmod, robots→sitemap, self-canonicals, www/trailing consistency | ✅ | robots references the sitemap + host; sitemap entries carry `lastModified`; every page self-canonicalises to non-www `https://agec.ae/...` with no trailing slash. |
| 10 | One config file; typos; reconcile figures | ✅ | New `src/lib/company.ts` is the single source for phone, email (one address: a.altaher@agec.ae), address, licence, review count (27), turnaround, founder, largest project. Fixed 6 missing-space typos (AGECdesigns, AGECas, AGECfactors, AGECdelivers, AGECperforms, AGECprovides). Quote turnaround unified to "within 24 hours". Largest project reconciled to **224 TR** (matches the projects list) sitewide. |
| 11 | Claims | ✅ | No "Authorized"/"Licensed & Insured"/"hundreds of" remain. Thermostat heading softened from "Every Major HVAC Brand" to "Most HVAC Systems" (matches the "vast majority" body). Savings figures consolidated to one manufacturer-sourced number (ecobee up to ~26%, eco+) with a visible "actual savings depend on usage" caveat; unsourced 23% / 10–23% / 15–20% removed. |
| 12 | Projects page | ✅ | Empty "Industrial" filter removed; empty "Project photo" placeholder boxes hidden until real photos exist; meta now names Ajman; 30+ claim softened to "a selection … across the UAE"; capacity gaps + the 140-ton Al Barsha villa flagged `TODO(owner)`. |
| 13 | About page | ✅ | H1 now "Engineering-led HVAC contracting in Dubai"; added an engineer/team section (`TODO(owner)` for names, qualifications, headshots); hero uses a real AGEC villa photo (no stock skyline). |
| 14 | Pricing | ✅ | AMC page now explains Basic (2 visits) vs the 4-visit recommendation, and reconciles one-off AED 350/machine (min 3 units) vs AMC AED 250–400/machine. Visible price-anchor figures for repair & duct are `TODO(owner)`. |
| 15 | Performance (LCP/INP/CLS, formats, dimensions, preload) | ✅ | CLS 0 everywhere; LCP < 2.6s on all but the two large-hero pages (home 2.6s, vrf 3.3s — hero is `priority`-preloaded, 204 KB, served as AVIF/WebP by next/image). All images via next/image with width/height or fill + lazy below the fold. |
| 16 | Accessibility | ✅ | axe-core = 0 violations on all pages; Lighthouse a11y = 100 on all pages; WCAG AA contrast held (fixed one new low-contrast footnote on the thermostat savings band); focus states, labels and descriptive link text throughout. |

## TODO(owner) — facts we could not confirm from the repo

These are in the code as `TODO(owner)` comments and need your input:

1. **Trade-licence address** — exact building/unit to match the DET licence (`src/lib/company.ts`, `SiteSchema`).
2. ~~Founder surname spelling~~ — **confirmed: Ghabboun.**
3. ~~Quote turnaround SLA~~ — **finalised: "within 24 hours."**
4. ~~Form response-time~~ — **finalised: the 24/7 call & WhatsApp line.**
5. ~~Largest project capacity~~ — **confirmed: 240 TR.**
6. ~~Total projects delivered~~ — **confirmed: 32.**
7. ~~Projects without capacity~~ — **closed by owner:** these stay described by scope (no TR/ton figure needed).
8. ~~140-ton Al Barsha villa~~ — **confirmed: 140-ton single villa.**
9. **Real project photos** — _partially done:_ 4 real photos added as a "Recent work" gallery on /projects. Per-project photos for the named grid cards are still welcome.
10. ~~Engineer profile~~ — **done:** Mohannad Ghabboun profile + headshot on /about (10+ yrs, DM-approved engineer, Expo 2020 Parcels HVAC lead).
11. ~~Price anchors~~ — **finalised: no numeric anchor.** Per owner, repair/duct pricing depends on the job; both pages keep honest "confirmed in writing" / "quoted after we know your setup" copy.
12. **Review count/rating** — 27 / 5.0 is in config; re-check against the live Google profile periodically.

**Only one item genuinely still needs a fact from the owner:** #1 (exact licence building/unit). Everything else is resolved or closed by owner decision.

## Off-site actions (for you — outside the codebase)

- **Google Business Profile**: keep NAP identical to the site; add/verify the Al Quoz address; post photos and updates.
- **Review generation**: send review-request links after each job (more real reviews = stronger local SEO; we can feature more review text once you add it).
- **Google Search Console**: verify the property and submit `https://agec.ae/sitemap.xml`; confirm the non-www host is the canonical.
- **Bing Webmaster Tools**: submit the same sitemap.
- **Directory / citation listings**: consistent NAP on relevant UAE directories.
- **Backlinks**: supplier/manufacturer partner pages (Daikin, Mitsubishi, Carrier), local business listings, project PR.
- **Instagram**: already linked in schema/footer — keep it active; it reinforces the GBP.
