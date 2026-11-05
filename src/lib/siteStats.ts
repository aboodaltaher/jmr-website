// Site statistics — one place to read the Google review count, rating and
// project count. These re-export the underlying single source of truth in
// ./company so there is exactly one value for each (no duplication); this
// module just gives them the short, intent-revealing names the rest of the
// app and schema blocks read from.
//
// Live review figures (when the Google Places API is configured) come from
// ./google-reviews, which falls back to reviewCount / ratingValue below.
export {
  GOOGLE_REVIEW_COUNT as reviewCount,
  GOOGLE_RATING as ratingValue,
  PROJECTS_DELIVERED as projectCount,
} from "./company";
