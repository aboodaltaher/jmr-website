import { Star } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/fPKs5SXmDeK9Co4VA";

/** "Rated on Google — 27 reviews" linking to the AGEC Google Business Profile. */
export function GoogleReviewsBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-sm font-medium hover:underline ${className}`}
    >
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
      Rated on Google — 27 reviews
    </a>
  );
}
