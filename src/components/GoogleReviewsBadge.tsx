import { Star } from "lucide-react";
import { MAPS_URL, RATING_LINE } from "@/lib/reviews";

/** "5.0 ★ from 42 Google reviews" linking to the AGEC Google Maps profile.
 *  Rating and count come from src/data/business.ts (verified 19 Nov 2026). */
export function GoogleReviewsBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-sm font-medium hover:underline ${className}`}
    >
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
      {RATING_LINE}
    </a>
  );
}
