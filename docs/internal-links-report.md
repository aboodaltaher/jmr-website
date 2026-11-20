# Internal links report (Phase 2, 19 Nov 2026)

Method: every URL in sitemap.xml (87) was crawled on a **local production build of branch claude/phase2-indexing** ("after") and on the **live site agec.ae** ("before", = main @ cbf8cdc). For each URL we count the distinct sitemap pages that link to it (self-links ignored; #anchors and trailing slashes normalised).

- **All links**: any link on the page, including the header menu, footer and breadcrumbs.
- **In content**: links outside the header, nav and footer, i.e. the contextual links that tell Google what a page is about.

## URLs with fewer than 3 inbound links (all links)

| URL | Before | After | Proposed sources |
|---|---|---|---|
| `/projects/18-villas-community` | 2 | 2 | Add to the DX units page "Related projects" (its services are DX and installation) and to /areas. It has no emirate on record, so no emirate page fits. |

Every other URL has 3 or more inbound links, mostly through the site-wide menu and footer.

## URLs with fewer than 3 in-content inbound links

| URL | All links (before → after) | In content (before → after) | Linked in content from | Proposed sources |
|---|---|---|---|---|
| `/ar` | 65 → 65 | 0 → 0 | — | Arabic home is reached only via the logo/menu. Add a body link from the /ar/about and /ar/services intros. |
| `/blog` | 64 → 64 | 0 → 0 | — | Blog index is reached only via the menu. Add a "More guides" link to /blog at the end of every blog post and from /services. |
| `/` | 65 → 65 | 1 → 1 | `/ar` | Homepage: reached via logo, menu and breadcrumbs (normal). No action needed. |
| `/ar/about` | 22 → 22 | 1 → 1 | `/ar/mep-contractors-dubai` | Link from the Arabic home (/ar) and from /ar/contact. |
| `/ar/ac-ducting-installation-dubai` | 22 → 22 | 1 → 1 | `/ar/services` | Link from /ar/services/hvac-installation-dubai and /ar/services/ventilation-fresh-air (their English twins already link ducting). |
| `/ar/ac-installation-dubai` | 22 → 22 | 0 → 1 | `/ar/quote` | Link from the Arabic home service cards and /ar/ac-maintenance-dubai. |
| `/ar/mep-contractors-dubai` | 22 → 22 | 1 → 1 | `/ar/services` | Link from /ar/services/hvac-design and /ar/about (the English twins already link MEP). |
| `/ar/services` | 22 → 22 | 1 → 1 | `/ar/about` | Link from the Arabic home and from Arabic service pages. |
| `/ar/services/dx-units` | 22 → 22 | 1 → 1 | `/ar/services` | Link from /ar/ac-installation-dubai and /ar/services/hvac-installation-dubai. |
| `/ar/ac-duct-cleaning-dubai` | 22 → 22 | 1 → 2 | `/ar/ac-ducting-installation-dubai`, `/ar/quote` | Link from /ar/ac-maintenance-dubai and /ar/ac-amc-dubai. |
| `/ar/ac-maintenance-dubai` | 22 → 22 | 1 → 2 | `/ar/quote`, `/ar/services` | Link from the Arabic home and /ar/ac-amc-dubai. |
| `/ar/ac-repair-dubai` | 22 → 22 | 1 → 2 | `/ar`, `/ar/quote` | Link from /ar/ac-maintenance-dubai and /ar/ac-amc-dubai. |
| `/ar/contact` | 22 → 22 | 1 → 2 | `/ar/quote`, `/ar/services` | Link from /ar/about and /ar/ac-repair-dubai. |
| `/ar/services/ventilation-fresh-air` | 22 → 22 | 2 → 2 | `/ar/ac-ducting-installation-dubai`, `/ar/services` | Link from /ar/services/hvac-design and /ar/ac-duct-cleaning-dubai. |
| `/ar/services/vrf-vrv-systems` | 22 → 22 | 1 → 2 | `/ar/quote`, `/ar/services` | Link from /ar/ac-installation-dubai and /ar/services/hvac-installation-dubai. |
| `/ar/smart-thermostat-installation-dubai` | 22 → 22 | 2 → 2 | `/ar/services`, `/ar/services/dx-units` | Link from /ar/ac-maintenance-dubai and the Arabic home. |
| `/ar/terms` | 22 → 22 | 2 → 2 | `/ar/contact`, `/ar/quote` | Legal page: footer and form links are enough. No action needed. |
| `/projects/18-villas-community` | 2 → 2 | 2 → 2 | `/projects`, `/services/hvac-installation-dubai` | Add to the DX units page "Related projects" (its services are DX and installation) and to /areas. It has no emirate on record, so no emirate page fits. |

## The 9 case studies Search Console lists as "Crawled – currently not indexed"

| Case study | All links (before → after) | In content (before → after) |
|---|---|---|
| `/projects/cultural-center-al-barsha` | 3 → 4 | 3 → 4 |
| `/projects/mbz-ai-server-room-abu-dhabi` | 3 → 4 | 3 → 4 |
| `/projects/private-villa-sharjah-flagship` | 3 → 5 | 3 → 5 |
| `/projects/double-twin-villa-sharjah` | 3 → 4 | 3 → 4 |
| `/projects/basil-mall-ajman` | 86 → 86 | 5 → 6 |
| `/projects/private-g4-building-dubai` | 3 → 3 | 3 → 3 |
| `/projects/ave-restaurant-business-bay` | 5 → 7 | 5 → 7 |
| `/projects/zain-solution-data-center-abu-dhabi` | 3 → 4 | 3 → 4 |
| `/projects/villa-al-barsha-dubai` | 5 → 5 | 5 → 5 |

Links alone are unlikely to get these indexed: each case study is about 450 words on a shared template. The real fix is the owner facts in docs/case-study-facts-template.md.

## Not changed in this branch

The proposals above are suggestions only (Task 5 is report-only). The Arabic pages are linked almost entirely through the Arabic menu; adding contextual Arabic links needs Arabic copy, which a native speaker should review first.
