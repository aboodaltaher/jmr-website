import { buildMetadata } from "@/lib/metadata";
import { Phone, Mail, MapPin, Clock, MessageCircle, Star, ExternalLink } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import {
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS_FULL,
  GBP_URL,
  GOOGLE_REVIEWS_URL,
} from "@/lib/company";

export const metadata = buildMetadata({
  title: "Contact AGEC | HVAC Services in Dubai",
  description:
    "Contact AGEC for HVAC services in Dubai — call or WhatsApp +971 58 557 5987, or send a message about AC maintenance, repair, AMC or a new project.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} className="mb-6" />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h1 className="mt-3 font-heading text-5xl font-bold md:text-6xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-text-muted">
            Tell us about your project or send us a question.
          </p>
        </div>
      </section>

      {/* Two-column: info + form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-bg-soft p-8">
                <h2 className="font-heading text-xl font-bold">
                  Contact Information
                </h2>
                <div className="mt-6 space-y-6">
                  <div className="flex gap-4">
                    <Phone
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a
                        href={`tel:${PHONE}`}
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MessageCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm font-medium">WhatsApp</p>
                      <a
                        href={whatsappUrl("/contact")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-text-muted">{ADDRESS_FULL}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm font-medium">Availability</p>
                      <p className="text-sm text-text-muted">
                        Call or WhatsApp anytime, 24/7. We respond within 1
                        hour.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <GoogleReviewsBadge className="text-text-muted" />
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-semibold text-text hover:border-primary transition-colors"
                >
                  <Star className="h-4 w-4 text-primary fill-current" aria-hidden="true" />
                  Leave a review
                  <ExternalLink className="h-3.5 w-3.5 text-text-muted" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold">Visit us</h2>
          <div className="mt-6 overflow-hidden rounded-lg border border-border">
            {/* Pinned to AGEC's confirmed coordinates (matches the LocalBusiness schema). */}
            <iframe
              title="AGEC Technical Services location on Google Maps"
              src="https://www.google.com/maps?q=25.1431543,55.2210657&z=16&output=embed"
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-sm text-text-muted">
            {ADDRESS_FULL} ·{" "}
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Open in Google Maps →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
