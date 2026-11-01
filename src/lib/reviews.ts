// Google review figures come from the single company-facts source (./company).
export { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_URL } from "./company";

export interface GoogleReview {
  name: string;
  role: string;
  initials: string;
  text: string;
}

// Real reviews from the verified Google Business Profile (AGEC Technical Services).
// TODO(owner): add more real review texts here to feature additional cards.
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Malek Boos",
    role: "Google review · translated from Arabic",
    initials: "MB",
    text: "Honestly, incredible service and truly professional work — and above all, they are honest and conscientious. From the very first visit they solved a problem I had struggled with for a long time, after bad experiences with other companies. I recommend anyone who needs anything AC-related to deal with them. Five stars isn't enough — you deserve 100.",
  },
  {
    name: "Mays Masri",
    role: "Google review · translated from Arabic",
    initials: "MM",
    text: "I'm really happy with what they did, and their price is excellent. They installed a split unit at my home even though the wiring wasn't right — they sorted it out with an excellent electrician, left the whole house clean, and paid attention to the smallest details. Thank you.",
  },
  {
    name: "Tareq Almasri",
    role: "Local Guide · Google review · translated from Arabic",
    initials: "TA",
    text: "I searched a long time to find work and cleanliness like this. Even the clean-up after they finished made me certain they deserve five stars — from management to staff. Thank you for the service, the kind treatment, and the honesty.",
  },
];
