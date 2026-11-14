// Single source for the homepage "project-proof" strip (stats + logo row).
// Update the numbers or the trusted-by list here and the homepage follows.
//
// Numbers reuse the canonical company facts where they already exist, so they
// stay consistent with the rest of the site. The Google-reviews stat is NOT
// listed here — it's composed at render time from business.reviews
// (src/data/business.ts) so the homepage always shows the same count as the
// reviews section, contact and quote pages.

import { PROJECTS_DELIVERED, LARGEST_PROJECT_TR, LICENCE_NO } from "@/lib/company";

export interface ProofStat {
  value: string;
  label: string;
}

/** The three static proof stats (the 4th, Google reviews, is added live). */
export const proofStats: ProofStat[] = [
  { value: PROJECTS_DELIVERED, label: "completed projects" },
  { value: `${LARGEST_PROJECT_TR} TR`, label: "largest single cooling capacity" },
  // Owner-provided (2026-11). Update here if the figure changes.
  { value: "AED 8.75M", label: "largest contract value" },
];

export interface ProofLogo {
  /** Project name — used as the accessible label until a real logo is supplied. */
  name: string;
  /** Case-study URL under /projects. */
  href: string;
}

/**
 * "Trusted on projects for" row. Placeholder grey boxes labelled with the
 * project name until the owner supplies logos they have permission to use —
 * never display a third-party brand logo without permission.
 */
export const proofLogos: ProofLogo[] = [
  { name: "Basil Mall, Ajman", href: "/projects/basil-mall-ajman" },
  { name: "Pure Gym, Al Barsha", href: "/projects/pure-gym-al-barsha" },
  { name: "MBZ-AI Server Room, Masdar City", href: "/projects/mbz-ai-server-room-abu-dhabi" },
  { name: "Zain Solution Data Center", href: "/projects/zain-solution-data-center-abu-dhabi" },
  { name: "AVE Restaurant, Business Bay", href: "/projects/ave-restaurant-business-bay" },
];

export const PROOF_LICENCE = `Dubai Commercial Licence No. ${LICENCE_NO}`;
