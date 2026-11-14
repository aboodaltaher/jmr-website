// Keyword to page map, typed. The data lives in docs/seo/keyword-map.json (the file that
// scripts/seo-keyword-audit.ts reads); it is imported here, not copied, so the two can never differ.
//
// volumeTier, difficulty and intent are estimates, not keyword-tool data (see "meta" in the JSON).
import keywordMap from "../../../docs/seo/keyword-map.json";

export type VolumeTier = "VH" | "H" | "M" | "L";
export type Difficulty = "Low" | "Medium" | "High";
export type Intent = "transactional" | "commercial" | "informational";
export type Priority = "Critical" | "High" | "Medium" | "Low";
/** "exists": the target is published and in the sitemap. "planned-phase7": not published yet. */
export type KeywordStatus = "exists" | "planned-phase7";

export interface KeywordEntry {
  keyword: string;
  secondaryKeywords: string[];
  volumeTier: VolumeTier;
  difficulty: Difficulty;
  intent: Intent;
  priority: Priority;
  /** Path of the page that should rank for the keyword. */
  targetUrl: string;
  status: KeywordStatus;
  /** A published page that stands in for a planned targetUrl until it exists. */
  interimUrl?: string;
  notes?: string;
}

export const keywordEntries: KeywordEntry[] = keywordMap.entries as KeywordEntry[];
