import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, MessageCircle } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { RepairForm } from "@/components/RepairForm";
import { PHONE, whatsappUrl } from "@/lib/contact";

const SITE_URL = "https://agec.ae";
const ROUTE = "/ac-repair-dubai";

export const metadata: Metadata = {
  title: "AC Repair Dubai | AC Technicians | AGEC",
  description:
    "AC not cooling, leaking or tripping? AGEC engineers find the root cause, quote in writing first and report every repair. Call or WhatsApp.",
  alternates: {
    canonical: ROUTE,
    languages: {
      en: `${SITE_URL}${ROUTE}`,
      ar: `${SITE_URL}/ar/ac-repair-dubai`,
      "x-default": `${SITE_URL}${ROUTE}`,
    },
  },
  openGraph: {
    title: "AC Repair Dubai | AC Technicians | AGEC",
    description:
      "AC not cooling, leaking or tripping? AGEC engineers find the root cause, quote in writing first and report every repair. Call or WhatsApp.",
    url: `${SITE_URL}${ROUTE}`,
    siteName: "AGEC",
    type: "website",
  },
};

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

const faults = [
  "AC not cooling",
  "Water leaks from the indoor unit",
  "Tripping the breaker",
  "Unusual noise",
  "Bad or musty smells",
];

const steps = [
  "We inspect and measure the system to find the root cause.",
  "We tell you the price in writing before any work starts.",
  "We carry out the repair.",
  "We send a short report with what we measured.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "My AC runs but does not cool: why?",
    a: "It is usually a dirty coil, a blocked drain or low refrigerant from a leak — not simply 'low gas'. We measure the system to find the real cause before we quote.",
  },
  {
    q: "Why is my AC leaking water?",
    a: "Most often a blocked or misaligned condensate drain, or a frozen coil that drips when it melts. We clear the drain, check the coil and confirm the unit drains freely before we leave.",
  },
  {
    q: "Is a gas top-up enough?",
    a: "Only if the refrigerant is genuinely low and there is no leak. Refrigerant runs in a sealed loop, so if it is low, something is leaking. We find and fix the leak rather than just topping up, so the fault does not come straight back.",
  },
  {
    q: "How fast can you come?",
    a: "We respond within an hour, any time of day. Call or WhatsApp us with your area and the problem, and we will confirm the soonest we can reach you.",
  },
  {
    q: "Do you repair split, ducted and VRF?",
    a: "Yes — split, ducted and VRF/VRV systems from all major brands, across all 7 emirates of the UAE.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Repair",
  provider: {
    "@type": "Organization",
    name: "AGEC Technical Services",
    url: SITE_URL,
  },
  areaServed: "United Arab Emirates",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AC Repair Dubai",
      item: `${SITE_URL}${ROUTE}`,
    },
  ],
};

export default function AcRepairPage() {
  const waHref = whatsappUrl(ROUTE);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="border-b border-border bg-bg-soft" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-6 py-3 text-sm text-text-muted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text">AC Repair Dubai</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13212E] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 560px at 82% -10%, rgba(212,118,46,.32), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className={eyebrow}>Dubai &amp; UAE · All 7 Emirates · Response within 1 hour</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
            AC Repair in Dubai: Diagnosed by an Engineer, Quoted Before We Start
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Weak cooling is often a dirty coil, a blocked drain or a leak, not
            just low gas. We find the cause, tell you the price in writing, then
            repair it and send a short report with what we measured.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp a Photo of the Unit
            </a>
            <Link
              href="#repair-form"
              className="rounded-md border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Request a Repair Visit
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/80">
            <GoogleReviewsBadge className="text-white/90" />
            <span className="text-white/30">|</span>
            <span>Serving all 7 emirates</span>
            <span className="text-white/30">|</span>
            <span>Call or WhatsApp</span>
          </div>
        </div>
      </section>

      {/* COMMON FAULTS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>What We Fix</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Common faults we fix
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {faults.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-lg border border-border bg-white p-4"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-text">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW A REPAIR VISIT WORKS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>How It Works</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            How a repair visit works
          </h2>
          <ol className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-text">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GAS TOP-UP */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Gas Top-Up</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Gas top-up: when it is and is not the answer
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            Refrigerant runs in a sealed loop, so it does not get used up. If a
            system is low on gas, something is leaking. A top-up on its own hides
            the problem and the cooling fades again within weeks. We find and fix
            the leak, then recharge to the correct level — so the repair lasts.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Pricing</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Prices
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            The price depends on the fault, so we diagnose first, then quote the
            repair in writing before any work begins — you approve the cost
            before we start, with no obligation.
          </p>
        </div>
      </section>

      {/* BRANDS & SYSTEM TYPES */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Brands &amp; Systems</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Brands and system types
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            We repair split, ducted and VRF/VRV systems from all major brands,
            across all 7 emirates of the UAE.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            AC repair FAQs
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-text marker:content-none">
                  {f.q}
                  <span className="text-2xl leading-none text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* REPAIR FORM */}
      <section id="repair-form" className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className={eyebrow}>Request a Repair</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Request a repair visit
          </h2>
          <p className="mt-4 text-text-muted">
            Name, phone, area and the problem — that&apos;s all we need to call
            you back. For an urgent fault, call or WhatsApp us instead.
          </p>
          <div className="mt-8">
            <RepairForm whatsappHref={waHref} />
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-2xl font-bold">Related services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/ac-maintenance-dubai"
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold">
                AC maintenance, servicing &amp; cleaning
              </h3>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Read more &rarr;
              </span>
            </Link>
            <Link
              href="/ac-amc-dubai"
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold">
                Annual maintenance contracts (AMC)
              </h3>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Read more &rarr;
              </span>
            </Link>
            <Link
              href="/services/maintenance"
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold">
                Commercial HVAC maintenance
              </h3>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Read more &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            AC down? Talk to an engineer now.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-4 font-semibold text-primary hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp a Photo of the Unit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
