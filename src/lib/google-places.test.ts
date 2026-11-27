import assert from "node:assert/strict";
import test from "node:test";
import { fetchPlaceReviewStats, isPlausible, placeIdFromReviewLink, roundRating } from "./google-places.mjs";

test("placeIdFromReviewLink reads the Place ID from the review link", () => {
  assert.equal(placeIdFromReviewLink("https://search.google.com/local/writereview?placeid=ChIJabc123"), "ChIJabc123");
  assert.equal(placeIdFromReviewLink("https://example.com/none"), null);
  assert.equal(placeIdFromReviewLink(undefined), null);
});

test("isPlausible accepts normal growth and small corrections", () => {
  assert.equal(isPlausible({ rating: 5, count: 52 }, { count: 47 }), true);
  assert.equal(isPlausible({ rating: 4.9, count: 47 }, { count: 47 }), true);
  assert.equal(isPlausible({ rating: 5, count: 40 }, { count: 47 }), true);
});

test("isPlausible rejects bad shapes and big drops", () => {
  assert.equal(isPlausible(null, { count: 47 }), false);
  assert.equal(isPlausible({ rating: "5", count: 50 } as never, { count: 47 }), false);
  assert.equal(isPlausible({ rating: 6, count: 50 }, { count: 47 }), false);
  assert.equal(isPlausible({ rating: 5, count: 0 }, { count: 47 }), false);
  assert.equal(isPlausible({ rating: 5, count: 47.5 }, { count: 47 }), false);
  assert.equal(isPlausible({ rating: 5, count: 10 }, { count: 47 }), false);
});

test("roundRating keeps one decimal", () => {
  assert.equal(roundRating(4.94), 4.9);
  assert.equal(roundRating(5), 5);
});

test("fetchPlaceReviewStats sends the key and field mask and maps the answer", async () => {
  const realFetch = globalThis.fetch;
  let seen: { url: string; headers: Record<string, string> } | undefined;
  globalThis.fetch = (async (url: string, init: { headers: Record<string, string> }) => {
    seen = { url, headers: init.headers };
    return new Response(JSON.stringify({ rating: 5, userRatingCount: 51 }), { status: 200 });
  }) as typeof fetch;
  try {
    const stats = await fetchPlaceReviewStats("PLACE", "KEY");
    assert.deepEqual(stats, { rating: 5, count: 51 });
    assert.equal(seen?.url, "https://places.googleapis.com/v1/places/PLACE");
    assert.equal(seen?.headers["X-Goog-Api-Key"], "KEY");
    assert.equal(seen?.headers["X-Goog-FieldMask"], "rating,userRatingCount");
    globalThis.fetch = (async () => new Response("denied", { status: 403 })) as typeof fetch;
    await assert.rejects(() => fetchPlaceReviewStats("PLACE", "BAD"), /HTTP 403/);
  } finally {
    globalThis.fetch = realFetch;
  }
});
