import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { PHONE, PHONE_DISPLAY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Get a Quote or Book a Service in Dubai | AGEC",
  description:
    "Request an HVAC quote or book AC service, repair or maintenance in Dubai. One short form — we reply on call and WhatsApp 24/7, across all 7 emirates.",
  alternates: { canonical: "/quote" },
  openGraph: {
    images: ["/og-image.png"],
    title: "Get a Quote or Book a Service in Dubai | AGEC",
    description:
      "Request an HVAC quote or book AC service, repair or maintenance in Dubai. One short form — we reply on call and WhatsApp 24/7, across all 7 emirates.",
    url: "https://agec.ae/quote",
    siteName: "AGEC",
    type: "website",
  },
};

export default function Quote() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "" },
          { name: "Get a Quote", path: "/quote" },
        ]}
      />
      {/* Emergency banner */}
      <div className="bg-text text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-3 sm:flex-row">
          <p className="text-sm font-semibold">
            AC down right now? Don&apos;t wait on the form — call us.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            <Phone className="h-4 w-4" /> Emergency? Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Header */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs items={[{ name: "Get a Quote" }]} className="mb-6" />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get a Quote
          </p>
          <h1 className="mt-3 font-heading text-5xl font-bold md:text-6xl">
            Get a quote or book a service
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-text-muted">
            One short form — a quote for a new project, or AC service, repair or
            maintenance. We reply on call and WhatsApp 24/7, across all 7 emirates.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <QuoteForm />
          <div className="mt-8 text-center">
            <GoogleReviewsBadge className="text-text-muted" />
          </div>
        </div>
      </section>
    </>
  );
}
