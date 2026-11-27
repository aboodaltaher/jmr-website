// Google Places API (New) helpers behind the automatic review-count sync.
// Plain JS on purpose: the prebuild script (scripts/sync-google-reviews.mjs) and the daily cron route
// (src/app/api/cron/review-sync/route.ts) both import this one file.

/** Pulls the Google Place ID out of the owner's "write a review" link, so the ID lives in one place only. */
export function placeIdFromReviewLink(link) {
  const m = /[?&]placeid=([^&#]+)/i.exec(link || "");
  return m ? decodeURIComponent(m[1]) : null;
}

/** Rating and total review count for a place. Throws on any HTTP or shape problem. */
export async function fetchPlaceReviewStats(placeId, apiKey, { timeoutMs = 10000 } = {}) {
  const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
    headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": "rating,userRatingCount" },
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!res.ok) throw new Error(`Places API returned HTTP ${res.status}`);
  const body = await res.json();
  return { rating: body.rating, count: body.userRatingCount };
}

/**
 * Guards against a bad response replacing good numbers. The rating must be 1 to 5, the count a whole number,
 * and the count may not fall by more than 20% in one sync (reviews are rarely removed in bulk).
 */
export function isPlausible(next, current) {
  if (!next || typeof next.rating !== "number" || !(next.rating >= 1 && next.rating <= 5)) return false;
  if (!Number.isInteger(next.count) || next.count < 1) return false;
  return next.count >= Math.floor(current.count * 0.8);
}

/** The rating as the site shows it: one decimal place. */
export const roundRating = (rating) => Math.round(rating * 10) / 10;
