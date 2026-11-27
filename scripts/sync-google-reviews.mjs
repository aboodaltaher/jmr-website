// Runs before every build (npm "prebuild"). Fetches the Google rating and review count and stores them in
// src/data/google-reviews.json, which src/data/business.ts reads. It NEVER fails the build: with no API key,
// or on any error or implausible answer, the last stored values stay in place.
//
// Needs the build environment variable GOOGLE_PLACES_API_KEY (Places API (New) enabled). See docs/review-sync.md.
import fs from "node:fs";
import { fetchPlaceReviewStats, isPlausible, placeIdFromReviewLink, roundRating } from "../src/lib/google-places.mjs";

const JSON_PATH = new URL("../src/data/google-reviews.json", import.meta.url);
const CONFIG_PATH = new URL("../src/data/business.ts", import.meta.url);
const tag = "[sync-google-reviews]";

const apiKey = process.env.GOOGLE_PLACES_API_KEY;
if (!apiKey) {
  console.log(`${tag} GOOGLE_PLACES_API_KEY not set: keeping the stored review figures.`);
  process.exit(0);
}

try {
  const current = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  const placeId = placeIdFromReviewLink(fs.readFileSync(CONFIG_PATH, "utf8").match(/reviewLeave:\s*"([^"]+)"/)?.[1]);
  if (!placeId) throw new Error("could not find the Place ID in src/data/business.ts");

  const live = await fetchPlaceReviewStats(placeId, apiKey);
  if (!isPlausible(live, current)) {
    console.warn(`${tag} ignored an implausible answer (${JSON.stringify(live)}); keeping ${current.rating} / ${current.count}.`);
    process.exit(0);
  }
  const next = { rating: roundRating(live.rating), count: live.count, fetchedAt: new Date().toISOString().slice(0, 10) };
  fs.writeFileSync(JSON_PATH, JSON.stringify(next, null, 2) + "\n");
  console.log(`${tag} ${current.rating} / ${current.count} -> ${next.rating} / ${next.count} (${next.fetchedAt}).`);
} catch (err) {
  console.warn(`${tag} sync failed (${err instanceof Error ? err.message : err}); keeping the stored review figures.`);
}
