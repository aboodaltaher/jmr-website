// Single source of truth for the site's static public routes.
// Both the sitemap and the seo-check crawler read this list, so a new page is
// added in exactly one place. Dynamic routes (blog posts, project case studies)
// are generated from their own data and appended by the sitemap.
//
// hreflang pairing (which routes have an Arabic equivalent) lives in
// LOCALE_PAIRS in ./nav, so the language switch and the sitemap agree.
//
// `updatedAt` is the date the page's CONTENT last really changed (YYYY-MM-DD),
// seeded from the git history of each page's file. It drives <lastmod> in the
// sitemap. Bump it by hand (or via git date) when you change a page's content —
// never to today's date for a page that didn't change, or Google learns to
// ignore lastmod. changefreq/priority are deliberately omitted: Google ignores
// both.

export interface RouteEntry {
  /** Path after the domain, e.g. "/about". "/" is the home page. */
  path: string;
  /** Content-last-changed date, YYYY-MM-DD. Feeds the sitemap's <lastmod>. */
  updatedAt: string;
}

import { isPublished } from "@/data/new-pages";

// Every indexable, static English page. Excludes:
//  - /book        → canonical alias of /quote (would be duplicate content)
//  - /quote/thank-you → noindex utility page; /review → 302 to Google reviews
//  - dynamic blog/project pages → appended from data in sitemap.ts
export const staticRoutes: RouteEntry[] = [
  { path: "/", updatedAt: "2026-11-14" },
  { path: "/about", updatedAt: "2026-11-05" },
  { path: "/services", updatedAt: "2026-11-14" },
  // Landing pages
  { path: "/ac-maintenance-dubai", updatedAt: "2026-11-14" },
  { path: "/ac-repair-dubai", updatedAt: "2026-11-14" },
  { path: "/ac-amc-dubai", updatedAt: "2026-11-14" },
  { path: "/ac-duct-cleaning-dubai", updatedAt: "2026-11-05" },
  { path: "/smart-thermostat-installation-dubai", updatedAt: "2026-11-13" },
  // Service detail pages
  { path: "/services/hvac-installation-dubai", updatedAt: "2026-11-04" },
  { path: "/services/tab-testing-adjusting-balancing-dubai", updatedAt: "2026-11-14" },
  { path: "/services/chiller-maintenance-dubai", updatedAt: "2026-11-14" },
  { path: "/services/vrf-vrv-systems", updatedAt: "2026-11-04" },
  { path: "/services/dx-units", updatedAt: "2026-11-02" },
  { path: "/services/ventilation-fresh-air", updatedAt: "2026-11-02" },
  { path: "/services/hvac-design", updatedAt: "2026-11-02" },
  // Gated: in the sitemap only once published (src/data/new-pages.ts)
  ...(isPublished("kitchenExhaust") ? [{ path: "/kitchen-exhaust-cleaning-dubai", updatedAt: "2026-11-14" }] : []),
  ...(isPublished("ducting") ? [{ path: "/ac-ducting-installation-dubai", updatedAt: "2026-11-14" }] : []),
  ...(isPublished("mep") ? [{ path: "/mep-contractors-dubai", updatedAt: "2026-11-14" }] : []),
  // Location / emirate landing pages
  { path: "/hvac-contractor-sharjah", updatedAt: "2026-11-13" },
  { path: "/hvac-contractor-ajman", updatedAt: "2026-11-14" },
  { path: "/hvac-contractor-abu-dhabi", updatedAt: "2026-11-14" },
  // Index & conversion pages
  { path: "/projects", updatedAt: "2026-11-13" },
  { path: "/blog", updatedAt: "2026-11-02" },
  { path: "/quote", updatedAt: "2026-11-05" },
  { path: "/contact", updatedAt: "2026-11-13" },
  // Legal
  { path: "/privacy-policy", updatedAt: "2026-11-14" },
  { path: "/terms", updatedAt: "2026-11-14" },
];
