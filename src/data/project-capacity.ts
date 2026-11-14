import { publishedProjects, type Project } from "@/data/projects";
import { resolveDraft } from "@/lib/draft";

// Published case studies that have an installed capacity, largest first. One list, so every
// capacity table or strip on the site (installation page, homepage) shows the same figures.
//
// TODO(owner): the 109 TR figure for the Al Mamzar villa (vrf-villa-al-mamzar-dubai) is not
// confirmed. Until it is, that project is left out of every capacity table and strip. Delete its
// slug from this set once you confirm the figure. (The same figure also appears in that project's
// own case study and its summary line; those are not changed here.)
const TONNAGE_NOT_CONFIRMED = new Set(["vrf-villa-al-mamzar-dubai"]);

/** "224 TR" -> 224 (NaN if there is no number). */
export const tonnageNumber = (p: Project): number => parseFloat(resolveDraft(p.tonnage));

export function capacityProjects(): Project[] {
  return publishedProjects
    .filter((p) => !TONNAGE_NOT_CONFIRMED.has(p.slug) && Number.isFinite(tonnageNumber(p)))
    .sort((a, b) => tonnageNumber(b) - tonnageNumber(a));
}
