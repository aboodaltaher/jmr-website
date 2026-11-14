// Handling of "[TO CONFIRM: …]" placeholders in content that is waiting on facts
// from the owner.
//
//  - On the LIVE production site (Vercel `VERCEL_ENV=production`) a placeholder is
//    stripped, and any section that has nothing left after stripping is hidden. So
//    unresolved facts never appear to visitors or search engines.
//  - Everywhere else (local dev/build, Vercel preview deployments) the placeholder
//    is shown, highlighted, so the owner can see exactly what is missing.
//
// `npm run to-confirm` lists every remaining placeholder in one file.

const MARKER = /\[TO CONFIRM[^\]]*\]/g;
/** Same pattern with a capture group, for String.split. */
export const MARKER_SPLIT = /(\[TO CONFIRM[^\]]*\])/g;

export function isProductionSite(): boolean {
  return process.env.VERCEL_ENV === "production";
}

export function hasMarker(text: string): boolean {
  return /\[TO CONFIRM/.test(text);
}

/** The text to render: unchanged off-production; markers removed in production ("" if nothing is left). */
export function resolveDraft(text: string | undefined): string {
  if (!text) return "";
  if (!isProductionSite()) return text;
  return text.replace(MARKER, "").replace(/\s{2,}/g, " ").replace(/\s+([.,;:])/g, "$1").trim();
}

/** Keep only the entries that still have content once placeholders are resolved. */
export function visibleItems(items: readonly string[] | undefined): string[] {
  return (items ?? []).map(resolveDraft).filter(Boolean);
}
