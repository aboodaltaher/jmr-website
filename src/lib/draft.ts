// Handling of "[TO CONFIRM: …]" placeholders in content that is waiting on facts
// from the owner.
//
//  - On the LIVE production site (Vercel `VERCEL_ENV=production`) a placeholder is
//    stripped, and any section that has nothing left after stripping is hidden. So
//    unresolved facts never appear to visitors or search engines.
//  - Everywhere else (local dev/build, Vercel preview deployments) the placeholder
//    is shown, highlighted, so the owner can see exactly what is missing.
//
// `npm run to-confirm` writes every open placeholder to docs/open-questions.md.
//
// Safety net (two layers): components strip markers through resolveDraft/scrubDraft in
// production, and scripts/check-markers.mjs fails the production build if any indexable
// page still contains one.

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

/** True if any string anywhere inside `value` still contains a "[TO CONFIRM" marker. */
export function hasOpenMarkers(value: unknown): boolean {
  if (typeof value === "string") return hasMarker(value);
  if (Array.isArray(value)) return value.some(hasOpenMarkers);
  if (value && typeof value === "object") return Object.values(value).some(hasOpenMarkers);
  return false;
}

/** Deep copy with markers stripped from every string — in production only; unchanged elsewhere. */
export function scrubDraft<T>(value: T): T {
  if (!isProductionSite()) return value;
  const walk = (v: unknown): unknown => {
    if (typeof v === "string") return resolveDraft(v);
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === "object") {
      return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    }
    return v;
  };
  return walk(value) as T;
}
