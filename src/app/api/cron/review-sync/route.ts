import { NextResponse } from "next/server";
import { business } from "@/data/business";
import { fetchPlaceReviewStats, isPlausible, placeIdFromReviewLink, roundRating } from "@/lib/google-places.mjs";

// Daily cron (vercel.json). Compares Google's live count with the one baked into this build and, only when
// they differ, triggers a redeploy through a Vercel deploy hook. The rebuild's prebuild step then writes the
// new figures (scripts/sync-google-reviews.mjs). Unchanged count: nothing happens, so no pointless builds.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret || request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const hookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;
  const missing = [!apiKey && "GOOGLE_PLACES_API_KEY", !hookUrl && "VERCEL_DEPLOY_HOOK_URL"].filter(Boolean);
  if (!apiKey || !hookUrl) return NextResponse.json({ status: "not configured", missing });

  const placeId = placeIdFromReviewLink(business.links.reviewLeave);
  if (!placeId) return NextResponse.json({ status: "error", error: "no Place ID in business.ts" }, { status: 500 });

  try {
    const live = await fetchPlaceReviewStats(placeId, apiKey);
    const baked = business.reviews;
    if (!isPlausible(live, baked)) return NextResponse.json({ status: "ignored implausible answer", live, baked });
    if (live.count === baked.count && roundRating(live.rating) === roundRating(baked.rating)) {
      return NextResponse.json({ status: "up to date", count: baked.count });
    }
    const hook = await fetch(hookUrl, { method: "POST" });
    return NextResponse.json({ status: hook.ok ? "rebuild triggered" : "deploy hook failed", from: baked, to: live });
  } catch (err) {
    return NextResponse.json({ status: "error", error: err instanceof Error ? err.message : String(err) }, { status: 502 });
  }
}
