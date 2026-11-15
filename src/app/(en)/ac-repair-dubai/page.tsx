import { MidPageCta } from "@/components/MidPageCta";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { RelatedServices } from "@/components/RelatedServices";
import { BreadcrumbBand } from "@/components/Breadcrumbs";
import { Phone, MessageCircle } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { RepairForm } from "@/components/RepairForm";
import { PHONE, whatsappUrl } from "@/lib/contact";
import { PriceTable } from "@/components/PriceTable";
import { prices, offersFor } from "@/data/prices";

const SITE_URL = "https://agec.ae";
const ROUTE = "/ac-repair-dubai";

export const metadata = buildMetadata({
  title: "AC Repair Dubai — Same-Day Engineer Diagnosis | AGEC",
  description:
    "AC repair in Dubai: not cooling, leaking or tripping? AGEC engineers find the root cause, quote in writing first and report every repair. Call or WhatsApp.",
  path: ROUTE,
  languages: {
    "en-AE": `${SITE_URL}${ROUTE}`,
    "ar-AE": `${SITE_URL}/ar/ac-repair-dubai`,
    "x-default": `${SITE_URL}${ROUTE}`,
  },
});

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

// TODO(owner): typical cost range per fault. Not on the site yet, so the table has no cost column. When supplied, add a "Typical cost" column
// (or fill prices.repair in src/data/prices.ts, which feeds the Prices section and the Service offers).
const faults: { fault: string; cause: string; fix: string }[] = [
  {
    fault: "AC not cooling",
    cause: "A dirty coil, a blocked drain or low refrigerant from a leak.",
    fix: "We measure the system to find the cause before we quote.",
  },
  {
    fault: "Water leaks from the indoor unit",
    cause: "A blocked or misaligned condensate drain, or a frozen coil that drips when it melts.",
    fix: "We clear the drain, check the coil and confirm the unit drains freely.",
  },
  {
    fault: "Tripping the breaker",
    cause: "An electrical or refrigerant-side problem that needs diagnosis.",
    fix: "We inspect the electrical and refrigerant circuits and quote the repair.",
  },
  {
    fault: "Unusual noise",
    cause: "A loose or worn part, or a fan or compressor problem.",
    fix: "We find the source before we quote.",
  },
  {
    fault: "Bad or musty smells",
    cause: "Dirt or mould building up in the coil, drain tray or ducts.",
    fix: "We clean what is affected; for ducts see AC duct cleaning in Dubai.",
  },
];

const brands = ["Daikin", "Carrier", "Mitsubishi", "LG", "Samsung", "Gree"];

const steps = [
  "We inspect and measure the system to find the root cause.",
  "We tell you the price in writing before any work starts.",
  "We carry out the repair.",
  "We send a short report with what we measured.",
];

// TODO(owner): FAQ "What is the call-out fee?" — prices.repair "Call-out and diagnosis" is TBC; say whether diagnosis is charged and how much.
// TODO(owner): FAQ "Do you warranty repairs?" — no repair warranty wording exists on the site; give the period and what it covers.
// TODO(owner): parts FAQ: confirm which parts you stock and typical lead time for others.
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
    q: "Do you have spare parts on hand?",
    a: "We carry common parts on hand. If a repair needs a part we do not have, we tell you before the work starts, in the written quote.",
  },
  {
    q: "Do you repair split, ducted and VRF?",
    a: "Yes — split, ducted and VRF/VRV systems from all major brands, across the UAE.",
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
  ...(offersFor(prices.repair).length ? { offers: offersFor(prices.repair) } : {}),
  areaServed: "United Arab Emirates",
};


export default function AcRepairPage() {
  const waHref = whatsappUrl(ROUTE);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <FaqJsonLd items={faqs} />

      {/* Breadcrumb (single trail + BreadcrumbList JSON-LD) */}
      <BreadcrumbBand
        items={[
          { name: "Services", href: "/services" },
          { name: "AC Repair Dubai", href: "/ac-repair-dubai" },
        ]}
      />

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
          <p className={eyebrow}>Dubai &amp; the UAE · Response within 1 hour</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
            AC Repair in Dubai: Diagnosed by an Engineer, Quoted Before We Start
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Weak cooling is often a dirty coil, a blocked drain or a leak, not
            just low gas. AC repair in Dubai starts with finding the cause: we
            tell you the price in writing, then repair it and send a short
            report with what we measured.
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
            <span>Available across the UAE</span>
            <span className="text-white/30">|</span>
            <span>Call or WhatsApp</span>
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Emergency</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Emergency (24/7) AC Repair
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            When the AC fails in peak summer, call or WhatsApp us any time of
            day. We respond within an hour and tell you the soonest we can reach
            you. Send your area, what the unit is doing and a photo of it, and
            an engineer can start on the likely cause before the visit.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp a Photo of the Unit
            </a>
          </div>
        </div>
      </section>

      {/* COMMON FAULTS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>What We Fix</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Common faults and typical costs
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            The cost depends on the fault, so we diagnose first and quote the
            repair in writing before any work begins.
          </p>
          <div className="mt-8 overflow-x-auto" tabIndex={0} role="region" aria-label="Common AC faults, likely causes and what we do">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="sr-only">Common AC faults, likely causes and what we do</caption>
              <thead className="bg-primary text-left text-white">
                <tr>
                  <th scope="col" className="border border-border px-4 py-3 font-semibold">Fault</th>
                  <th scope="col" className="border border-border px-4 py-3 font-semibold">Likely cause</th>
                  <th scope="col" className="border border-border px-4 py-3 font-semibold">What we do</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {faults.map((f) => (
                  <tr key={f.fault}>
                    <th scope="row" className="border border-border px-4 py-3 text-left font-semibold">{f.fault}</th>
                    <td className="border border-border px-4 py-3 text-text-muted">{f.cause}</td>
                    <td className="border border-border px-4 py-3 text-text-muted">{f.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mid-page lead block, directly after the first proof section */}
      <MidPageCta service="AC repair" path="/ac-repair-dubai" />

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

      {/* REPLACEMENT */}
      {/* TODO(owner): replacement scope (do you supply and fit new units or compressors?), compressor warranty and lead times. Nothing on the site states these. */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Repair or Replace</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            AC &amp; Compressor Replacement
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            A failing compressor is one of the faults we diagnose. Not every
            failed AC is worth repairing, so where replacing a compressor
            approaches the cost of a new unit we say so, and give you the
            reasoning and the price in writing before any work starts. Looking
            at a new system? See{" "}
            <Link href="/services/hvac-installation-dubai" className="font-semibold text-primary hover:underline">
              HVAC installation in Dubai
            </Link>
            .
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 md:py-20">
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
          <PriceTable rows={prices.repair} caption="AC repair call-out and typical repair prices" />
        </div>
      </section>

      {/* BRANDS & SYSTEM TYPES */}
      {/* TODO(owner): confirm the brand list (Samsung is not named elsewhere on the site). No dealer/authorised-partner wording. */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Brands &amp; Systems</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Brands we repair
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {brands.map((b) => (
              <li key={b} className="rounded-full border border-border bg-white px-5 py-2 font-semibold text-text">
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            We repair split, ducted and VRF/VRV systems from all major brands,
            across the UAE. Brand names are trademarks of their owners, listed
            to show the equipment we work on.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            AC repair in Dubai: FAQs
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
              href="/ac-amc-dubai"
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

      <RelatedServices currentPath="/ac-repair-dubai" />

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
