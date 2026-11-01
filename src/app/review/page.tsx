import type { Metadata } from "next";
import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/company";

// Utility page for technicians to hand out — kept out of search (noindex) and
// out of the sitemap.
export const metadata: Metadata = {
  title: "Leave a Review | AGEC",
  description:
    "Enjoyed AGEC's HVAC service? Scan the QR code or tap the button to leave us a review on Google.",
  alternates: { canonical: "/review" },
  robots: { index: false, follow: true },
};

export default function ReviewPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 text-center shadow-sm print:border-0 print:shadow-none">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          AGEC Technical Services
        </p>
        <div className="mt-4 flex justify-center gap-1 text-primary" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-current" />
          ))}
        </div>
        <h1 className="mt-4 font-heading text-3xl font-bold">
          Enjoyed our service?
        </h1>
        <p className="mt-2 text-text-muted">
          Your review helps other Dubai homeowners and businesses find us. It
          takes less than a minute.
        </p>

        <div className="mx-auto mt-6 w-48">
          <Image
            src="/review-qr.svg"
            alt="QR code linking to AGEC's Google review page"
            width={320}
            height={320}
            className="h-auto w-full rounded-lg border border-border"
          />
        </div>
        <p className="mt-3 text-xs text-text-muted">
          Scan with your phone camera, or use the button below.
        </p>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-white hover:bg-primary-dark transition-colors"
        >
          Leave a review on Google
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
        <p className="mt-4 break-all text-xs text-text-muted">
          {GOOGLE_REVIEWS_URL.replace("https://", "")}
        </p>
      </div>
    </section>
  );
}
