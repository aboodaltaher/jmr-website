import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { QuoteForm } from "@/components/QuoteForm";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";

export const metadata: Metadata = {
  title: "Request an HVAC Quote in Dubai | AGEC",
  description:
    "Get a free HVAC quotation from AGEC in Dubai. VRF systems, chillers, DX units, ventilation, design, and maintenance — most quotes returned within 48 hours.",
  alternates: { canonical: "/quote" },
  openGraph: {
    images: ["/og-image.png"],
    title: "Request an HVAC Quote in Dubai | AGEC",
    description:
      "Get a free HVAC quotation from AGEC in Dubai. VRF systems, chillers, DX units, ventilation, design, and maintenance — most quotes returned within 48 hours.",
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
          { name: "Request a Quote", path: "/quote" },
        ]}
      />
      {/* Header */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Request a Quote
          </p>
          <h1 className="mt-3 font-heading text-5xl font-bold md:text-6xl">
            Get a quotation for your project
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-text-muted">
            Most quotes returned within 48 hours. The more detail you provide,
            the more accurate the quote.
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
