import { Star } from "lucide-react";
import { MAPS_URL, reviewStats } from "@/lib/reviews";

/** "Rated on Google — N reviews" linking to the AGEC Google Maps profile.
 *  Count comes from src/data/business.ts (updated monthly). */
export function GoogleReviewsBadge({ className = "" }: { className?: string }) {
  const { count } = reviewStats;
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-sm font-medium hover:underline ${className}`}
    >
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
      Rated on Google — {count} reviews
    </a>
  );
}
