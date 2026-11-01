import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Phone,
  MessageCircle,
  Snowflake,
  Fan,
  Gauge,
  Wind,
  Settings,
  FileText,
} from "lucide-react";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { PHONE, whatsappUrl } from "@/lib/contact";

const SITE_URL = "https://agec.ae";
const ROUTE = "/services/maintenance";

export const metadata: Metadata = {
  title: "Commercial HVAC Maintenance Dubai | AMC | AGEC",
  description:
    "Chillers, AHUs, FCUs and VRF maintained under one contract, with logged visits and reports for facility managers. Request a site survey.",
  alternates: { canonical: ROUTE },
  openGraph: {
    images: ["/og-image.png"],
    title: "Commercial HVAC Maintenance Dubai | AMC | AGEC",
    description:
      "Chillers, AHUs, FCUs and VRF maintained under one contract, with logged visits and reports for facility managers. Request a site survey.",
    url: `${SITE_URL}${ROUTE}`,
    siteName: "AGEC",
    type: "website",
  },
};

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

const systems = [
  { icon: Snowflake, name: "Chillers", desc: "Air- and water-cooled chillers, pumps, cooling towers and associated plant." },
  { icon: Fan, name: "AHUs & FAHUs", desc: "Air and fresh air handling units — coils, filters, belts, dampers and drainage." },
  { icon: Wind, name: "FCUs", desc: "Fan coil units across floors and zones, cleaned, checked and balanced." },
  { icon: Settings, name: "VRF / VRV", desc: "Multi-zone VRF/VRV systems and their controls, from all major brands." },
  { icon: Gauge, name: "Split & ducted DX", desc: "Split, ducted and package DX units for mixed-use and back-of-house areas." },
  { icon: Wind, name: "Ventilation & exhaust", desc: "Supply, exhaust and smoke systems, plus BMS-linked equipment." },
];

const visitRecords = [
  "Equipment condition before and after each visit",
  "Key readings — temperatures, pressures, currents and airflow where relevant",
  "Work performed and the parts or consumables used",
  "Faults found and the corrective actions recommended",
  "A signed-off service report for each visit, kept for your records",
];

const sectors = [
  "Offices and business towers",
  "Retail and malls",
  "Restaurants and F&B",
  "Data and server rooms",
  "Residential buildings and villa communities",
  "Clinics, schools and community facilities",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "What systems can you cover under one contract?",
    a: "Chillers, AHUs and FAHUs, FCUs, VRF/VRV, split and ducted DX units, pumps, cooling towers and ventilation — all under one contract with a single point of contact, so you are not juggling separate vendors.",
  },
  {
    q: "How fast do you respond to a breakdown?",
    a: "We respond to calls and WhatsApp within an hour, 24/7. The on-site attendance target is agreed in your contract and set by how critical each system is — a server-room cooling fault is prioritised differently from a back-of-house unit.",
  },
  {
    q: "Can you take over from our current contractor?",
    a: "Yes. We start with a baseline audit of every unit, document its condition and any defects, then agree the scope, visit schedule and response targets with you in writing before the contract starts.",
  },
  {
    q: "How is commercial maintenance priced?",
    a: "After a site survey. Commercial pricing depends on the systems, the number of units and the visit frequency, so we quote once we have seen the plant — not a fixed per-machine rate. For single-unit AC cover, our per-machine AC AMC plans may suit better.",
  },
  {
    q: "Do you provide reports for facility managers?",
    a: "Every visit is logged with equipment condition, readings, work performed, parts used and recommendations — a complete, auditable maintenance history for each piece of equipment.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial HVAC Maintenance & AMC",
  serviceType: "Commercial HVAC Maintenance",
  description:
    "Chillers, AHUs, FCUs and VRF maintained under one contract, with logged visits and reports for facility managers in Dubai.",
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
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Commercial HVAC Maintenance", item: `${SITE_URL}${ROUTE}` },
  ],
};

export default function Maintenance() {
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
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-text">Commercial HVAC Maintenance</span>
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
            <p className={eyebrow}>Dubai &amp; UAE · Facility Managers &amp; Building Owners</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
              Commercial HVAC Maintenance and AMC for Buildings in Dubai
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Chillers, AHUs, FCUs and VRF maintained under one contract — with logged visits,
              documented reports and a 1-hour response line, so your building keeps cooling and
              your records stay audit-ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className="rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">
                Request a Site Survey
              </Link>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/projects/multiple-ahu-installation-hvac-design-dubai.jpg"
              alt="Commercial air handling units maintained by AGEC in a Dubai building"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SYSTEMS WE MAINTAIN */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrow}>Systems we maintain</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            One contract across your plant
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((s) => (
              <div key={s.name}>
                <s.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-3 font-heading text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT EACH VISIT RECORDS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>What each visit records</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Documented, not just done
          </h2>
          <ul className="mt-8 space-y-3">
            {visitRecords.map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESPONSE TIMES */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Response times</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            A response line, and an SLA that fits the system
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            We answer calls and WhatsApp within an hour, 24/7. On-site attendance targets are set
            in your contract by how critical each system is — a server-room chiller is prioritised
            differently from a back-of-house split. For single-unit, per-machine AC cover, our{" "}
            <Link href="/ac-amc-dubai" className="font-semibold text-primary hover:underline">
              AC AMC plans
            </Link>{" "}
            run from same-day to 24–48 hour response by plan.
          </p>
        </div>
      </section>

      {/* TAKEOVER */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Taking over from your current contractor</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            A clean handover, in writing
          </h2>
          <ul className="mt-8 space-y-3">
            {[
              "Baseline audit of every unit, with documented condition and a defect list",
              "Scope, visit schedule and response targets agreed with you in writing",
              "Clear 12-month terms with no long tie-in — change scope or give notice as needed",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Sectors served</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Where we work
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span key={s} className="rounded-full border border-border bg-bg-soft px-5 py-2 text-sm font-medium text-text-muted">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft py-16 md:py-20">
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
            Request a site survey for your building
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="rounded-md bg-white px-8 py-4 font-semibold text-primary hover:bg-white/90 transition-colors">
              Request a Site Survey
            </Link>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
          <p className="mt-4 text-sm text-white">
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
