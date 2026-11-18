import { Star } from "lucide-react";
import { MAPS_URL, RATING_LINE, type GoogleReview } from "@/lib/reviews";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

/**
 * Static review cards (no third-party widget, no script). Text is shown exactly as written on
 * Google; an Arabic review keeps its original and, on English pages, adds Google's translation.
 * Each card's "Google review · Month YYYY" line links to the Google Maps profile.
 * Deliberately no review or rating schema markup.
 */
export function ReviewCards({ reviews, lang = "en" }: { reviews: GoogleReview[]; lang?: "en" | "ar" }) {
  return (
    <div className="mt-12 gap-7 sm:columns-2 lg:columns-3">
      {reviews.map((r) => (
        <figure
          key={r.name}
          className="mb-7 flex break-inside-avoid flex-col rounded-xl border border-border bg-bg-soft p-7"
        >
          <div className="flex gap-0.5 text-primary" role="img" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-4 text-text" {...(r.lang === "ar" ? { lang: "ar", dir: "rtl" } : {})}>
            {r.text}
          </blockquote>
          {r.lang === "ar" && r.googleTranslation && lang === "en" && (
            <p className="mt-3 text-sm italic text-text-muted">Translated by Google: {r.googleTranslation}</p>
          )}
          <figcaption className="mt-5 flex items-center gap-3">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#13212E] font-heading font-bold text-white"
              aria-hidden="true"
            >
              {initials(r.name)}
            </span>
            <span>
              <b className="block text-sm" dir="auto">{r.name}</b>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-muted hover:text-primary hover:underline"
              >
                Google review · {r.month}
              </a>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** A compact reviews block for service pages: heading, linked rating line, then the cards. */
export function ReviewsSection({ title, reviews }: { title: string; reviews: GoogleReview[] }) {
  return (
    <section id="reviews" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Customer Reviews</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">{title}</h2>
          <RatingLink className="mt-5" />
        </div>
        <ReviewCards reviews={reviews} />
      </div>
    </section>
  );
}

/** "★★★★★ 5.0 ★ from 42 Google reviews" pill, linked to the Google Maps profile. */
export function RatingLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-5 py-2.5 text-sm font-semibold text-text shadow-sm transition-colors hover:border-primary ${className}`}
    >
      <span className="flex gap-0.5 text-primary" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </span>
      {RATING_LINE}
    </a>
  );
}
