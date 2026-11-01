import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { BookForm } from "@/components/BookForm";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";

export const metadata: Metadata = {
  title: "Book an AC or HVAC Service in Dubai | AGEC",
  description:
    "Book HVAC maintenance, AC repair, AMC or emergency service in Dubai with AGEC — qualified technicians, transparent pricing and priority response.",
  alternates: { canonical: "/book" },
  openGraph: {
    images: ["/og-image.png"],
    title: "Book an AC or HVAC Service in Dubai | AGEC",
    description:
      "Book HVAC maintenance, AC repair, AMC or emergency service in Dubai with AGEC — qualified technicians, transparent pricing and priority response.",
    url: "https://agec.ae/book",
    siteName: "AGEC",
    type: "website",
  },
};

export default function Book() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "" },
          { name: "Book a Service", path: "/book" },
        ]}
      />
      {/* Header */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Book a Service
          </p>
          <h1 className="mt-3 font-heading text-5xl font-bold md:text-6xl">
            Book maintenance or service call
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-text-muted">
            For maintenance, repairs, AMC inquiries, or one-off service calls.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <BookForm />
          <div className="mt-8 text-center">
            <GoogleReviewsBadge className="text-text-muted" />
          </div>
        </div>
      </section>
    </>
  );
}
