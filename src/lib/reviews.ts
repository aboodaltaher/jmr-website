// Google review figures come from the single company-facts source (./company).
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "./company";

export { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, MAPS_URL, REVIEW_URL } from "./company";

/** Rating + count shown on the site, from src/data/business.ts (verified 19 Nov 2026). */
export const reviewStats = { rating: GOOGLE_RATING, count: GOOGLE_REVIEW_COUNT };

/** "5.0 ★ from 42 Google reviews" — the one visible rating line, always linked to the Maps profile. */
export const RATING_LINE = `${GOOGLE_RATING} ★ from ${GOOGLE_REVIEW_COUNT} Google reviews`;

export type ReviewTopic = "repair" | "maintenance" | "amc" | "smell" | "leak" | "general";

export interface GoogleReview {
  name: string;
  /** "November 2026" — shown as "Google review · November 2026". */
  month: string;
  /** Exact wording from Google, spelling untouched. */
  text: string;
  /** Set for a review written in Arabic: the original is always shown. */
  lang?: "ar";
  /** Google's own translation, shown under an Arabic review on English pages. */
  googleTranslation?: string;
  topics: ReviewTopic[];
}

// Real reviews from the Google Business Profile, supplied by the owner (19 Nov 2026).
// Copy them EXACTLY: no spelling fixes, no edits, no invented reviews. Never emit them as
// schema.org review or rating markup (reviews taken from another site are not allowed).
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Mohammad Al ashek",
    month: "November 2026",
    text: "Finally, an HVAC company that does what it says. AGEC showed up on time, found the problem in minutes, and had cold air blowing again the same afternoon — fair price, no upsell, no drama. Engineer Abdulrahaman explained everything clearly and left the place spotless. They're the only HVAC crew I'll call from now on. Highly recommend.",
    topics: ["repair", "general"],
  },
  {
    name: "Abdulrahman Hachem",
    month: "November 2026",
    text: "The best and most professional AC system maintenance company in the UAE. Their team spent over 3 hours getting to the root cause of the water leakage to ensure it is 100% resolved. Top tier expertise, can't recommend it enough.",
    topics: ["repair", "maintenance", "leak"],
  },
  {
    name: "Ezzine Sarah",
    month: "November 2026",
    text: "After a couple of other companies failed to fix the bad smell from our AC, we called these guys and they were a lifesaver. Quick to arrive, found the issue, and fixed it. Professional service at a good price. Thank you!",
    topics: ["repair", "maintenance", "smell"],
  },
  {
    name: "Khalid Abdo",
    month: "November 2026",
    text: "Excellent service from AGEC Technical Services! A professional and knowledgeable team with great attention to detail and a commitment to quality work. Highly recommended for anyone looking for reliable AC maintenance and HVAC services. Keep up the great work!",
    topics: ["maintenance", "general"],
  },
  {
    name: "Abdulrahman Haddad",
    month: "November 2026",
    text: "Very professional and neat work, the AC of our apartment had bad smell air blow was very low and cooling took too much time. Thank you for the service",
    topics: ["maintenance", "smell"],
  },
  {
    name: "Mustafa NewSolution",
    month: "November 2026",
    text: "Great service, I signed with them Annual maintenance contract. So far I'm happy with the service, they do their work smoothly and efficiently.",
    topics: ["amc", "maintenance"],
  },
  {
    name: "Murtada Alhilfi",
    month: "November 2026",
    text: "ممتن لحظراتكم فريق عمل محترم و يحترم اوقات العملاء و يشتغلون ليل نهار 👍🏼👏🏼 فخور بيكم شباب ربي يوفقكم",
    lang: "ar",
    googleTranslation:
      "Thank you for your respectful team who respect clients' time and work day and night. Proud of you guys, may God grant you success",
    topics: ["general"],
  },
  {
    name: "xabieru garcia",
    month: "November 2026",
    text: "Great team. Great work. They are very knowledgeable and they know what they doing.",
    topics: ["general"],
  },
  {
    name: "Common User",
    month: "November 2026",
    text: "Providing Excellent service, known for years. Value for money, realiable.",
    topics: ["general"],
  },
  {
    name: "Pasindu Dias",
    month: "November 2026",
    text: "Professional team, they assisted the problem and fixed it immediately",
    topics: ["repair", "general"],
  },
  {
    name: "Joe Sakic",
    month: "November 2026",
    text: "The team is professional and their prices are very reasonable",
    topics: ["general"],
  },
  {
    name: "Ameed Al Hashash",
    month: "November 2026",
    text: "Exceptional service and highly recommended 👌🏻",
    topics: ["general"],
  },
  {
    name: "Nima Amini",
    month: "November 2026",
    text: "very happy to choose this company. fantastic service and product. thank you.",
    topics: ["general"],
  },
  {
    name: "Thair Safi",
    month: "October 2026",
    text: "They did excellent job",
    topics: ["general"],
  },
];

/** Reviews matching any of the topics, in the order above (verbatim, never edited). */
export function reviewsAbout(...topics: ReviewTopic[]): GoogleReview[] {
  return GOOGLE_REVIEWS.filter((r) => r.topics.some((t) => topics.includes(t)));
}
