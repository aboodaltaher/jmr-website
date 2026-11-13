import Link from "next/link";
import { MapPin, Phone, Check } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PHONE, PHONE_DISPLAY } from "@/lib/contact";
import { ADDRESS_FULL } from "@/lib/company";
import { ratingValue, reviewCount } from "@/lib/siteStats";

const SITE_URL = "https://agec.ae";

export interface LocationProjectLink {
  slug: string;
  name: string;
  note: string;
}
export interface LocationServiceLink {
  href: string;
  name: string;
}
export interface LocationFaq {
  q: string;
  a: string;
}

export interface LocationPageLayoutProps {
  emirate: string;
  slug: string; // e.g. "hvac-contractor-sharjah"
  title: string; // H1
  intro: string;
  body: React.ReactNode;
  projects: LocationProjectLink[];
  services: LocationServiceLink[];
  faq: LocationFaq[];
}

/**
 * Shared layout for the emirate landing pages (/hvac-contractor-*). Matches the
 * service-page design but scopes the Service schema's areaServed to the single
 * emirate, links to real projects delivered there, and states that the office
 * is in Dubai (no branch/phone claimed in the emirate).
 */
export function LocationPageLayout({
  emirate,
  slug,
  title,
  intro,
  body,
  projects,
  services,
  faq,
}: LocationPageLayoutProps) {
  const url = `${SITE_URL}/${slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    serviceType: "HVAC contracting",
    description: intro,
    url,
    areaServed: { "@type": "City", name: emirate },
    provider: { "@id": `${SITE_URL}/#business` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "" },
          { name: title, path: `/${slug}` },
        ]}
      />

      {/* Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs items={[{ name: `HVAC Contractor ${emirate}` }]} className="mb-6" />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            HVAC Contractor · {emirate}
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-block rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-8 py-4 font-medium text-text hover:border-primary hover:text-primary transition-colors"
              dir="ltr"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-4 leading-relaxed text-text-muted">{body}</div>
        </div>
      </section>

      {/* Projects delivered in this emirate */}
      {projects.length > 0 && (
        <section className="bg-bg-soft py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Projects we&apos;ve delivered in {emirate}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group rounded-xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="inline-flex items-center gap-1.5 text-sm text-primary">
                    <MapPin className="h-4 w-4" /> {emirate}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{p.note}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-primary">
                    Read the case study →
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/projects"
              className="mt-8 inline-block text-sm font-semibold text-primary hover:underline"
            >
              View all projects →
            </Link>
          </div>
        </section>
      )}

      {/* Services offered */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            HVAC services we offer in {emirate}
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 text-sm transition-colors hover:border-primary"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                  <span className="font-medium text-text">{s.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to book / based in Dubai */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            How to book in {emirate}
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-text-muted">
            <p>
              Call or WhatsApp{" "}
              <a href={`tel:${PHONE}`} className="font-semibold text-primary hover:underline" dir="ltr">
                {PHONE_DISPLAY}
              </a>
              , or send your details through our{" "}
              <Link href="/quote" className="font-semibold text-primary hover:underline">
                quote form
              </Link>
              . Tell us the property, the system and what you need, and our engineering
              team will come back to you — we reply on call and WhatsApp 24/7.
            </p>
            <p>
              AGEC is based in Dubai ({ADDRESS_FULL}) and works on projects in {emirate}
              {" "}from there — we do not run a separate branch or local number in {emirate}.
              You deal with the same Dubai engineering team end to end, and we are rated{" "}
              {ratingValue}★ by {reviewCount} Google reviewers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              {emirate} HVAC — frequently asked questions
            </h2>
            <div className="mt-8 space-y-6">
              {faq.map((f) => (
                <div key={f.q}>
                  <h3 className="font-heading text-lg font-semibold">{f.q}</h3>
                  <p className="mt-2 leading-relaxed text-text-muted">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            HVAC contractor for {emirate}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Tell us about your project and get a quotation from our engineering team.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
          >
            Get a Quote
          </Link>
          <div className="mt-4">
            <a href={`tel:${PHONE}`} className="text-sm font-medium text-white hover:underline" dir="ltr">
              Or call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
