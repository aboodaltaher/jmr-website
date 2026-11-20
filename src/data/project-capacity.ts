import { publishedProjects, type Project } from "@/data/projects";

// Published case studies that have an installed capacity, largest first. One list, so every
// capacity table or strip on the site (installation page, homepage) shows the same figures.
//
/** "224 TR" -> 224 (NaN if there is no capacity, or it is not in TR). */
export const tonnageNumber = (p: Project): number => {
  const c = p.facts.capacity ?? "";
  return /\bTR\b/i.test(c) ? parseFloat(c) : NaN;
};

export function capacityProjects(): Project[] {
  return publishedProjects
    .filter((p) => Number.isFinite(tonnageNumber(p)))
    .sort((a, b) => tonnageNumber(b) - tonnageNumber(a));
}
