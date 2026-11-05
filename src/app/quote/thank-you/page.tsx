import Link from "next/link";
import { Check, Phone, MessageCircle } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, PHONE_DISPLAY } from "@/lib/contact";
import { whatsappUrl } from "@/lib/contact";

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
        <p className="mt-8 text-sm text-text-muted">
          <Link href="/" className="font-medium text-primary hover:underline">
            Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
