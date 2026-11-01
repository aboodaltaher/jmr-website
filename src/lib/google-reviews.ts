import "server-only";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/company";

// Live Google rating + review count via the Places API (New), fetched
// server-side and cached for a day. Falls back to the manual config numbers
// when the API key / place ID aren't set or the request fails — so the site
// always shows a sensible value and never breaks.
//
// To enable, set these environment variables (server-side, not NEXT_PUBLIC):
//   GOOGLE_PLACES_API_KEY  — a Google Cloud key with the Places API (New) enabled
//   GOOGLE_PLACE_ID        — AGEC's Google Business Profile Place ID
// (TODO(owner): supply both and the numbers update automatically.)

export interface ReviewStats {
  rating: string;
  count: number;
  /** true when the numbers came live from Google, false when using the fallback. */
  live: boolean;
}

const FALLBACK: ReviewStats = {
  rating: GOOGLE_RATING,
  count: GOOGLE_REVIEW_COUNT,
  live: false,
};

export async function getGoogleReviewStats(): Promise<ReviewStats> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return FALLBACK;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?fields=rating,userRatingCount`,
      {
        headers: { "X-Goog-Api-Key": key },
        // Refresh once a day; cached across requests so we never hammer the API.
        next: { revalidate: 86400 },
      },
    );
    if (!res.ok) return FALLBACK;
    const data: { rating?: number; userRatingCount?: number } = await res.json();
    return {
      rating:
        typeof data.rating === "number" ? data.rating.toFixed(1) : GOOGLE_RATING,
      count:
        typeof data.userRatingCount === "number"
          ? data.userRatingCount
          : GOOGLE_REVIEW_COUNT,
      live: true,
    };
  } catch {
    return FALLBACK;
  }
}
