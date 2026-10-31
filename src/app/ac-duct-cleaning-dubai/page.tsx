import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, MessageCircle, Wind, AlertCircle } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { PHONE, whatsappUrl } from "@/lib/contact";

const SITE_URL = "https://agec.ae";
const ROUTE = "/ac-duct-cleaning-dubai";

export const metadata: Metadata = {
  title: "AC Duct Cleaning Dubai | Villas & Offices | AGEC",
  description:
    "Full duct, coil and drain cleaning with disinfection and a written completion report. Villas, apartments and offices. Request a quote.",
  alternates: { canonical: ROUTE },
  openGraph: {
    title: "AC Duct Cleaning Dubai | Villas & Offices | AGEC",
    description:
      "Full duct, coil and drain cleaning with disinfection and a written completion report. Villas, apartments and offices. Request a quote.",
    url: `${SITE_URL}${ROUTE}`,
    siteName: "AGEC",
    type: "website",
  },
};

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

const whatIsCleaned = [
  "Full area protection and plastic covering before we start",
  "Supply and return grilles dismantled and deep cleaned",
  "Ducts cleaned and disinfected",
  "Coils, fan motor and blower deep cleaned",
  "Drain tray and pipe cleaned and flushed",
  "Cavity area cleaned",
  "Professional disinfection treatment",
  "Written service completion report",
];

const signs = [
  "Dust or black marks around the supply grilles",
  "A musty or stale smell when the AC runs",
  "Weak airflow from the vents",
  "More dust in the rooms, or worse allergies",
  "Visible mould on grilles or diffusers",
  "After renovation, or before moving into a property",
];

const packages = [
  {
    name: "Premium Duct Cleaning",
    for: "The complete package — full duct system for villas and offices",
    includes: [
      "Return and supply grilles dismantled and deep cleaned",
      "Ducts cleaned and disinfected",
      "Coils, fan motor and blower",
      "Drain tray and pipe flushed",
      "Cavity cleaning and full disinfection",
    ],
  },
  {
    name: "Full AC Cleaning",
    for: "Scheduled annual clean for split, ducted and concealed systems",
    includes: [
      "Supply grilles dismantled and cleaned",
      "Ducts cleaned and disinfected",
      "Filter cleaning",
      "Coils, fan motor and blower",
      "Cavity cleaning and disinfection",
    ],
  },
  {
    name: "Split AC Cleaning",
    for: "Targeted clean for wall-mounted split units",
    includes: [
      "Indoor panel and filter cleaning",
      "Evaporator coil treatment and disinfection",
      "Drain line flush",
      "Outdoor condenser cleaning",
      "Performance verification after cleaning",
    ],
  },
  {
    name: "Coil Cleaning",
    for: "The single most impactful clean for cooling performance",
    includes: [
      "Evaporator and condenser coil cleaning",
      "Fin straightening where required",
      "Coil disinfection and drain flush",
      "Pre and post-clean temperature readings",
      "Performance verification report",
    ],
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "How often should ducts be cleaned?",
    a: "For most Dubai villas and offices, once a year keeps airflow and air quality in good shape. Clean more often if you are near construction or heavy dust, have pets, or anyone in the home has allergies or respiratory issues.",
  },
  {
    q: "How long does a villa take?",
    a: "It depends on the number of units, the number of grilles and the duct layout. We confirm the expected time when we quote, after we know your system — a single apartment is much quicker than a multi-system villa.",
  },
  {
    q: "Is duct cleaning different from AC servicing?",
    a: "Yes. Servicing keeps the unit running — filters, gas, electrical checks. Duct cleaning targets the air path itself: the grilles, ducts, coils, blower and drain, where dust, mould and smells build up. Many properties need both.",
  },
  {
    q: "What does the report show?",
    a: "You get a written completion report listing what was cleaned, the condition before and after, the disinfection used, and any recommendations — useful for landlords, handovers and your own records.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Duct Cleaning",
  serviceType: "AC Duct Cleaning",
  description:
    "Full duct, coil and drain cleaning with disinfection and a written completion report for villas, apartments and offices in Dubai.",
  url: `${SITE_URL}${ROUTE}`,
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  provider: {
    "@type": "HVACBusiness",
    name: "AGEC Technical Services",
    telephone: PHONE,
    email: "a.altaher@agec.ae",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Quoz Industrial Area 1",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    url: SITE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "AC Duct Cleaning Dubai", item: `${SITE_URL}${ROUTE}/` },
  ],
};

export default function AcDuctCleaningPage() {
  const waHref = whatsappUrl(ROUTE);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="bg-bg-soft border-b border-border" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-6 py-3 text-sm text-text-muted">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-text">AC Duct Cleaning Dubai</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13212E] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(1100px 560px at 82% -10%, rgba(212,118,46,.32), transparent)" }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className={eyebrow}>Dubai &amp; UAE · Villas, Apartments &amp; Offices</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
              AC Duct Cleaning in Dubai With a Completion Report
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Full duct, coil and drain cleaning with disinfection — and a written report of
              what we cleaned and found. For villas, apartments and offices across the UAE.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className="rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">
                Get a Quote
              </Link>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">
                <MessageCircle className="h-4 w-4" /> WhatsApp Photos of Your Vents
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/photos/agec-ac-vent-cleaning-villa-dubai.jpg"
              alt="AGEC technician cleaning air conditioning ventilation in a Dubai villa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHAT IS CLEANED */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>What is cleaned</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Grilles, ducts, coils, blower, drain and cavity
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {whatIsCleaned.map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SIGNS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Signs your ducts need cleaning</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            When to book a duct clean
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {signs.map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrow}>Cleaning packages</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Choose the clean that fits your system
          </h2>
          <p className="mt-4 max-w-2xl text-text-muted">
            Every package includes professional disinfection and a written completion report.
            Pricing depends on the number of units and the system, so we quote after we know
            your setup — send photos of your vents on WhatsApp for a fast estimate.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <div key={pkg.name} className="flex flex-col rounded-xl border border-border bg-white p-7">
                <Wind className="h-9 w-9 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 font-heading text-lg font-bold">{pkg.name}</h3>
                <p className="mt-1 text-sm text-text-muted">{pkg.for}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {pkg.includes.map((inc) => (
                    <li key={inc} className="flex gap-2 text-sm text-text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                      {inc}
                    </li>
                  ))}
                </ul>
                <Link href="/quote" className="mt-5 text-sm font-semibold text-primary hover:underline">
                  Get a Quote &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUCT CLEANING VS SERVICING */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Duct cleaning vs AC servicing</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            They are not the same job
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-7">
              <h3 className="font-heading text-lg font-bold">AC servicing / maintenance</h3>
              <p className="mt-3 text-text-muted">
                Keeps the unit running well — filters, refrigerant, electrical and drain
                checks, and performance. Book this regularly to protect the equipment and
                your DEWA bill.
              </p>
              <Link href="/ac-maintenance-dubai" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                See AC Maintenance &rarr;
              </Link>
            </div>
            <div className="rounded-xl border border-border bg-white p-7">
              <h3 className="font-heading text-lg font-bold">Duct cleaning</h3>
              <p className="mt-3 text-text-muted">
                Cleans the air path itself — grilles, ducts, coils, blower and drain — where
                dust, mould and smells collect. Book this for air quality, odours and visible
                dust from the vents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-heading text-lg font-semibold">{f.q}</h3>
                <p className="mt-2 leading-relaxed text-text-muted">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <GoogleReviewsBadge className="text-text-muted" />
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            Book a duct clean with a written report
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="rounded-md bg-white px-8 py-4 font-semibold text-primary hover:bg-white/90 transition-colors">
              Get a Quote
            </Link>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp Photos of Your Vents
            </a>
          </div>
          <p className="mt-4 text-sm text-white/80">
            Or call{" "}
            <a href={`tel:${PHONE}`} className="font-semibold text-white hover:underline">
              +971 58 557 5987
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
