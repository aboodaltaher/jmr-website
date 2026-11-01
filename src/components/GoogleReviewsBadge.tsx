import { Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/reviews";
import { getGoogleReviewStats } from "@/lib/google-reviews";

/** "Rated on Google — N reviews" linking to the AGEC Google Business Profile.
 *  Count is live from Google (cached daily), with a config fallback. */
export async function GoogleReviewsBadge({ className = "" }: { className?: string }) {
  const { count } = await getGoogleReviewStats();
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-sm font-medium hover:underline ${className}`}
    >
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
      Rated on Google — {count} reviews
    </a>
  );
}
