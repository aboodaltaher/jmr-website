import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { EmergencyStrip } from "@/components/EmergencyStrip";

/**
 * Shared body for /quote and /book — the single request form, with the
 * emergency strip on top. /book renders this same content (canonical → /quote).
 */
export function QuoteContent() {
  return (
    <>
      <EmergencyStrip />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "" },
          { name: "Get a Quote", path: "/quote" },
        ]}
      />
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
