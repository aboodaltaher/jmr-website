// Site statistics — one place to read the Google review count, rating and
// project count. The review figures come from src/data/business.ts (via
// ./company), so there is exactly one value for each; this module just gives
// them the short, intent-revealing names the rest of the app reads from.
export {
  GOOGLE_REVIEW_COUNT as reviewCount,
  GOOGLE_RATING as ratingValue,
  PROJECTS_DELIVERED as projectCount,
} from "./company";
