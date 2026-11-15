import { publishedProjects, type Project } from "@/data/projects";
import { resolveDraft } from "@/lib/draft";

// Published case studies that have an installed capacity, largest first. One list, so every
// capacity table or strip on the site (installation page, homepage) shows the same figures.
//
/** "224 TR" -> 224 (NaN if there is no number). */
export const tonnageNumber = (p: Project): number => parseFloat(resolveDraft(p.tonnage));

export function capacityProjects(): Project[] {
  return publishedProjects
    .filter((p) => Number.isFinite(tonnageNumber(p)))
    .sort((a, b) => tonnageNumber(b) - tonnageNumber(a));
}
