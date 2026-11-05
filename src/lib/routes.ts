// Single source of truth for the site's static public routes.
// Both the sitemap and the seo-check crawler read this list, so a new page is
// added in exactly one place. Dynamic routes (blog posts, project case studies)
// are generated from their own data and appended by the sitemap.
//
// hreflang pairing (which routes have an Arabic equivalent) lives in
// LOCALE_PAIRS in ./nav, so the language switch and the sitemap agree.

import type { MetadataRoute } from "next";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

export interface RouteEntry {
  /** Path after the domain, e.g. "/about". "/" is the home page. */
  path: string;
  changeFrequency: ChangeFreq;
  priority: number;
}

// Every indexable, static English page. Excludes:
//  - /book        → canonical alias of /quote (would be duplicate content)
//  - /quote/thank-you, /review → noindex utility pages
//  - dynamic blog/project pages → appended from data in sitemap.ts
export const staticRoutes: RouteEntry[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  // Landing pages
  { path: "/ac-maintenance-dubai", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ac-repair-dubai", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ac-amc-dubai", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ac-duct-cleaning-dubai", changeFrequency: "monthly", priority: 0.9 },
  { path: "/air-balancing-airflow-testing-dubai", changeFrequency: "monthly", priority: 0.8 },
  { path: "/smart-thermostat-installation-dubai", changeFrequency: "monthly", priority: 0.9 },
  // Service detail pages
  { path: "/services/hvac-installation-dubai", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/tab-testing-adjusting-balancing-dubai", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/chiller-maintenance-dubai", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/vrf-vrv-systems", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/chillers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/dx-units", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/ventilation-fresh-air", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/hvac-design", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/testing-commissioning", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/maintenance", changeFrequency: "monthly", priority: 0.7 },
  // Location / emirate landing pages
  { path: "/hvac-contractor-sharjah", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hvac-contractor-ajman", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hvac-contractor-abu-dhabi", changeFrequency: "monthly", priority: 0.8 },
  // Index & conversion pages
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/quote", changeFrequency: "yearly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
];
