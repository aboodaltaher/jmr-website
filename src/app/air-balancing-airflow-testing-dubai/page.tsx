import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, MessageCircle, Download } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { BalancingForm } from "@/components/BalancingForm";
import { PHONE, whatsappUrl } from "@/lib/contact";

const SITE_URL = "https://agec.ae";
const ROUTE = "/air-balancing-airflow-testing-dubai";

export const metadata: Metadata = {
  title: "Air Balancing Dubai | HVAC Airflow Testing | AGEC",
  description:
    "Measured HVAC air balancing and airflow testing in Dubai and the UAE, with calibrated instruments and signed reports. Request a technical assessment.",
  alternates: { canonical: ROUTE },
  openGraph: {
    title: "Air Balancing Dubai | HVAC Airflow Testing | AGEC",
    description:
      "Measured HVAC air balancing and airflow testing in Dubai and the UAE, with calibrated instruments and signed reports. Request a technical assessment.",
    url: `${SITE_URL}${ROUTE}`,
    siteName: "AGEC",
    type: "website",
  },
};

// Owner-supplied values. Empty values are hidden on the live page.
const balancingConfig = {
  // TODO: owner to supply instrument names and models. Empty = hide the line.
  instruments: "",
  // TODO: confirm standards before publishing.
  standards: "ASHRAE, SMACNA and CIBSE guidance",
  // TODO: owner to supply a redacted sample report PDF at the path below.
  sampleReportPath: "/sample-air-balancing-report.pdf",
};

// The sample-report section only renders if the PDF actually exists in /public.
const sampleReportExists = fs.existsSync(
  path.join(process.cwd(), "public", "sample-air-balancing-report.pdf"),
);

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is air balancing?",
    a: "Adjusting an HVAC system so each room and branch receives the airflow it was designed for, then recording the measured results.",
  },
  {
    q: "How long does it take?",
    a: "It depends on system size. We confirm the time after a survey.",
  },
  {
    q: "Do you work to the consultant's design?",
    a: "Yes. We balance to the design values on the drawings and report any difference.",
  },
  {
    q: "Do you balance existing buildings, not only new ones?",
    a: "Yes.",
  },
  {
    q: "What standard do you follow?",
    a: `${balancingConfig.standards}.`,
  },
  {
    q: "Do you cover my emirate?",
    a: "We serve all 7 emirates. Call or WhatsApp +971 58 557 5987.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HVAC Air Balancing and Airflow Testing",
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

const signs = [
  "Uneven temperatures between rooms",
  "Noisy diffusers or ducts",
  "High energy bills after a fit-out",
  "Failed or delayed handover",
  "Fresh-air or CO2 complaints",
];

const measured = [
  "Airflow at diffusers and branches",
  "Static pressure",
  "Fan speed",
  "Return and exhaust air",
  "Fresh-air quantity",
];

const steps = [
  "Review drawings and design values.",
  "Site survey and system inspection.",
  "Measure and adjust dampers and fans to design airflow.",
  "Re-test and record final values.",
  "Signed report issued.",
];

export default function AirBalancingPage() {
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

      {/* Breadcrumb */}
      <nav className="border-b border-border bg-bg-soft" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-6 py-3 text-sm text-text-muted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/services/testing-commissioning"
            className="hover:text-primary transition-colors"
          >
            Testing &amp; Commissioning
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text">Air Balancing &amp; Airflow Testing</span>
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
          <p className={eyebrow}>Dubai &amp; UAE · Measured &amp; Signed Off</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
            HVAC Air Balancing and Airflow Testing in Dubai
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Poor airflow wastes energy and leaves rooms too hot or too cold. We
            measure every diffuser and branch, adjust to design values, and give
            you a signed report.
          </p>
          <p className="mt-3 font-heading text-lg font-semibold text-primary">
            Measured, documented, signed off.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#balancing-form"
              className="rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Request a Technical Assessment
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
            >
              WhatsApp an Engineer
            </a>
            <a
              href={`tel:${PHONE}`}
              className="rounded-md border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call Now
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/80">
            <GoogleReviewsBadge className="text-white/90" />
            <span className="text-white/30">|</span>
            <span>Serving all 7 emirates</span>
            <span className="text-white/30">|</span>
            <span>24/7 call or WhatsApp</span>
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Warning Signs</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Signs you need air balancing
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {signs.map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 rounded-lg border border-border bg-white p-4"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-text">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT WE MEASURE */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>What We Measure</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            What we measure
          </h2>
          <ul className="mt-8 list-disc space-y-2 pl-6 text-text-muted">
            {measured.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          {balancingConfig.instruments && (
            <p className="mt-6 text-text-muted">
              Instruments used: {balancingConfig.instruments}
            </p>
          )}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>How It Works</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            How the process works
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

      {/* WHO WE WORK FOR */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Who We Work For</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Who we work for
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            Consultants, developers, main contractors, fit-out managers, and
            building owners. Existing buildings as well as new ones.
          </p>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Standards</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Standards we work to
          </h2>
          {/* TODO: confirm standards before publishing */}
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            We work to {balancingConfig.standards}.
          </p>
        </div>
      </section>

      {/* PART OF A COMPLETE SERVICE */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>End to End</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Part of a complete service
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            AGEC can{" "}
            <Link
              href="/services/testing-commissioning"
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
            >
              design, install, commission
            </Link>{" "}
            and{" "}
            <Link
              href="/services/maintenance"
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
            >
              maintain
            </Link>{" "}
            the same system — including{" "}
            <Link
              href="/services/ventilation-fresh-air"
              className="text-primary underline underline-offset-2 hover:text-primary-dark"
            >
              ventilation and fresh air
            </Link>{" "}
            — so the person who balances it knows how it was built.
          </p>
        </div>
      </section>

      {/* SAMPLE REPORT (only if the PDF exists) */}
      {sampleReportExists && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className={eyebrow}>Sample Report</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              See what you get
            </h2>
            <a
              href={balancingConfig.sampleReportPath}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              <Download className="h-4 w-4" /> Download a sample report (PDF)
            </a>
          </div>
        </section>
      )}

      {/* RELATED PROJECTS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Related Projects</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Related projects
          </h2>
          <p className="mt-5 text-lg text-text-muted">
            See the kind of systems we build and balance across the UAE.
          </p>
          <Link
            href="/projects"
            className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
          >
            View our projects &rarr;
          </Link>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className={eyebrow}>What Our Customers Say</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Rated by our customers
          </h2>
          <div className="mt-6 flex justify-center">
            <GoogleReviewsBadge className="text-text" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Air balancing FAQs
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

      {/* FORM */}
      <section id="balancing-form" className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className={eyebrow}>Request an Assessment</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Request a technical assessment
          </h2>
          <p className="mt-4 text-text-muted">
            Tell us about the building and the symptom, and an engineer will come
            back with next steps.
          </p>
          <div className="mt-8">
            <BalancingForm whatsappHref={waHref} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Need measured, signed-off airflow?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="#balancing-form"
              className="rounded-md bg-white px-7 py-4 font-semibold text-primary hover:bg-white/90 transition-colors"
            >
              Request a Technical Assessment
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/60 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
