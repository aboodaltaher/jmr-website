import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { business } from "@/data/business";
import { getProjectBySlug } from "@/data/projects";
import { PHONE, PHONE_DISPLAY, WHATSAPP } from "@/lib/company";
import type { Community } from "@/data/communities";

const MARKER = /(\[TO CONFIRM[^\]]*\])/g;

/** Renders text, highlighting any "[TO CONFIRM: …]" marker so it cannot be missed. */
function Text({ children }: { children: string }) {
  return (
    <>
      {children.split(MARKER).map((part, i) =>
        part.startsWith("[TO CONFIRM") ? (
          <mark key={i} className="rounded bg-amber-200 px-1 font-semibold text-amber-950">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function CommunityPage({ community: c }: { community: Community }) {
  const path = `/ac-maintenance/${c.slug}`;
  const url = `${business.url}${path}`;
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(c.whatsappText)}`;
  const projects = c.projectSlugs
    .map((s) => getProjectBySlug(s))
    .filter((p) => p && !p.draft);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `AC Maintenance in ${c.name}`,
    serviceType: "AC maintenance",
    description: c.metaDescription,
    url,
    areaServed: {
      "@type": "Place",
      name: `${c.name}, Dubai`,
      containedInPlace: { "@type": "City", name: "Dubai" },
    },
    provider: {
      "@type": "HVACBusiness",
      name: business.name,
      telephone: business.phone.e164,
      email: business.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.line,
        addressLocality: business.address.locality,
        addressCountry: business.address.countryCode,
      },
      url: business.url,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <section className="bg-bg-soft py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: "Areas", href: "/ac-maintenance-dubai" },
              { name: c.name, href: path },
            ]}
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            AC maintenance · {c.name}
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold md:text-6xl">{c.h1}</h1>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-text-muted">
            {c.intro.map((p, i) => (
              <p key={i}><Text>{p}</Text></p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] transition-colors hover:bg-[#1fad52]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp about {c.name}
            </a>
            <Link
              href="/quote"
              className="rounded-md bg-primary px-7 py-4 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Get a quote
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-primary"
              dir="ltr"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Body sections */}
      {c.sections.map((s, i) => (
        <section key={s.h2} className={i % 2 === 0 ? "py-14 md:py-16" : "bg-bg-soft py-14 md:py-16"}>
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">{s.h2}</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-text-muted">
              {s.paragraphs.map((p, j) => (
                <p key={j}><Text>{p}</Text></p>
              ))}
              {s.bullets && (
                <ul className="list-disc space-y-2 pl-6">
                  {s.bullets.map((b) => (
                    <li key={b}><Text>{b}</Text></li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Services that fit — contextual internal links */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Related services</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/ac-maintenance-dubai", label: "AC maintenance in Dubai" },
              { href: "/ac-amc-dubai", label: "Annual maintenance contracts (AMC)" },
              { href: "/ac-repair-dubai", label: "AC repair" },
              { href: "/ac-duct-cleaning-dubai", label: "AC duct cleaning" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-semibold text-primary hover:underline">
                  {l.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case studies in the area */}
      <section className="bg-bg-soft py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">{c.projectsHeading}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-text-muted"><Text>{c.projectsIntro}</Text></p>
          {projects.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) =>
                p ? (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.category}</p>
                    <h3 className="mt-2 font-heading text-lg font-semibold group-hover:text-primary">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{p.systemSummary}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-primary">View case study &rarr;</span>
                  </Link>
                ) : null,
              )}
            </div>
          )}
          {projects.length === 0 && (
            <p className="mt-6">
              <Link href="/projects" className="font-semibold text-primary hover:underline">
                See all our projects →
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">{c.name} AC maintenance: common questions</h2>
          <div className="mt-8 space-y-6">
            {c.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-heading text-lg font-semibold">{f.q}</h3>
                <p className="mt-2 leading-relaxed text-text-muted"><Text>{f.a}</Text></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Book AC maintenance in {c.name}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Tell us the number of units and the property. We reply on call and WhatsApp, {business.hours.short}.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-4 font-semibold text-primary transition-colors hover:bg-white/90"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
            </a>
            <Link
              href="/quote"
              className="rounded-md border border-white/60 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
