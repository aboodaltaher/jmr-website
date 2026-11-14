import Link from "next/link";
import { Check, Phone, MessageCircle, Star, ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, PHONE_DISPLAY } from "@/lib/contact";
import { whatsappUrl } from "@/lib/contact";
import { REVIEW_URL } from "@/lib/company";

export const metadata = buildMetadata({
  title: "Thank You | Request Received | AGEC",
  description:
    "Thanks — your request has reached AGEC. We'll be in touch shortly. For the fastest response, call or WhatsApp us now.",
  path: "/quote/thank-you",
  // Confirmation page — useful to visitors, not to search. Keep it out of the index.
  noindex: true,
});

export default function QuoteThankYou() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h1 className="mt-6 font-heading text-4xl font-bold md:text-5xl">
          Thanks — your request is in
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          We&apos;ve received your details and will be in touch shortly. For the
          fastest response, call or WhatsApp us now.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <a
            href={whatsappUrl("/quote")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <div className="mt-10 border-t border-border pt-8">
          <p className="text-sm text-text-muted">
            Already worked with us? A quick Google review helps other Dubai
            homeowners and businesses find AGEC.
          </p>
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-white px-6 py-3 text-sm font-semibold text-text hover:border-primary transition-colors"
          >
            <Star className="h-4 w-4 text-primary fill-current" aria-hidden="true" />
            Leave a review on Google
            <ExternalLink className="h-3.5 w-3.5 text-text-muted" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-8 text-sm text-text-muted">
          <Link href="/" className="font-medium text-primary hover:underline">
            Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
