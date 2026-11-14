import { MidPageCta } from "@/components/MidPageCta";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { RelatedServices } from "@/components/RelatedServices";
import { Check, Phone, MessageCircle } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { AmcForm } from "@/components/AmcForm";
import { BreadcrumbBand } from "@/components/Breadcrumbs";
import { PHONE, whatsappUrl } from "@/lib/contact";
import { prices, visibleTiers, PRICE_FOOTNOTE, isConfirmed } from "@/data/prices";

import { PHONE_DISPLAY } from "@/lib/company";
const SITE_URL = "https://agec.ae";
const ROUTE = "/ac-amc-dubai";

export const metadata = buildMetadata({
  title: "AC AMC Dubai | Annual Maintenance Contracts | AGEC",
  description:
    "AC annual maintenance contracts in Dubai for villas, apartments, offices and commercial buildings — scheduled visits, written reports and priority repairs.",
  path: ROUTE,
  languages: {
    "en-AE": `${SITE_URL}${ROUTE}`,
    "ar-AE": `${SITE_URL}/ar/ac-amc-dubai`,
    "x-default": `${SITE_URL}${ROUTE}`,
  },
});

// Owner-supplied values. Empty values are hidden on the live page (never shown
// as [BRACKETS]). Fill these in to reveal the matching lines/rows.
const amcConfig = {
  visitsPerYear:
    "2, 4 or 6 per year depending on your plan (we recommend 4, every 3 months)",
  included: [
    "Scheduled visits",
    "Filter and coil cleaning",
    "Drain flushing",
    "Refrigerant pressure check",
    "Electrical and control check",
    "Performance test",
    "Written service report after every visit",
  ],
  excluded: [
    "Spare parts and components",
    "Refrigerant top-ups and gas refills",
    "Compressor and other major component replacement",
    "Repairs caused by misuse, damage or work by other contractors",
    "Faults that cannot be reached or tested because of access issues (blocked units, locked roofs or ceilings)",
    "Duct cleaning (quoted separately)",
  ],
  // Prices live in src/data/prices.ts (the one price config).
  plans: prices.amcPlans.map((p) => ({
    name: p.name,
    visits: p.visits,
    price: `AED ${p.from}`,
    response: p.response,
    partsDiscount: p.partsDiscount,
    reports: p.reports,
    popular: p.popular,
  })),
  fromPrice: `${Math.min(...prices.amcPlans.map((p) => p.from))} per machine per visit`,
  responsePromise: true,
  partsAndGasAnswer:
    "Routine servicing is included in your visit price. Spare parts and refrigerant top-ups are not included, but we quote them in writing before any work starts, and AMC customers get a discount on parts according to their plan.",
  cancellationTerms:
    "Contracts run for 12 months. You can add or remove units in writing at any time, and either side can end the contract with 30 days' written notice. Visits already completed are charged at the plan rate.",
};

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

// Only visible FAQs are built here, and the same list feeds the FAQPage schema.
const faqs: { q: string; a: string }[] = [
  {
    q: "How often should a villa AC be serviced in Dubai?",
    a: "Every 3–4 months is our recommendation, with the heaviest use between May and October.",
  },
  {
    q: "What is the difference between an AMC and a one-off service?",
    a: "A one-off service fixes today's problem. An AMC schedules the visits for the year, gives you a named engineer and reports, and puts your repairs first in line.",
  },
  ...(amcConfig.partsAndGasAnswer
    ? [{ q: "Are spare parts and gas included?", a: amcConfig.partsAndGasAnswer }]
    : []),
  {
    q: "Do you take over from my current contractor?",
    a: "Yes. We start with a baseline audit of your units, then agree the scope in writing.",
  },
  ...(amcConfig.cancellationTerms
    ? [{ q: "Can I cancel or change the scope?", a: amcConfig.cancellationTerms }]
    : []),
  {
    q: "Can you cover a whole building or multiple units under one contract?",
    a: "Yes. For offices, retail, hotels and managed estates we put all your HVAC plant — split and ducted units, VRF/VRV, chillers, AHUs, FCUs and ventilation — under one maintenance contract, with a response SLA and documented reports for the facilities team.",
  },
  {
    q: "How is commercial AMC priced?",
    a: `Residential plans start from AED ${Math.min(...prices.amcPlans.map((p) => p.from))} per machine per visit. Commercial and building cover is quoted after a site survey, based on the number and type of units and the response level you need — scheduled visits are fixed, with parts and major works quoted in writing first.`,
  },
  {
    q: "Do you cover my emirate?",
    a: `We've delivered projects in Dubai, Sharjah, Ajman and Abu Dhabi, and are available across the UAE. Call or WhatsApp ${PHONE_DISPLAY}.`,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Annual Maintenance Contract",
  serviceType: "HVAC annual maintenance contract",
  description:
    "Residential and commercial AC annual maintenance contracts (AMC) in Dubai — scheduled preventive visits, written reports and priority repairs for villas, apartments, offices and whole buildings.",
  provider: {
    "@type": "Organization",
    name: "AGEC Technical Services",
    url: SITE_URL,
  },
  offers: prices.amcPlans.map((p) => ({
    "@type": "Offer",
    name: `${p.name} AMC plan (${p.visits} visits a year)`,
    price: String(p.from),
    priceCurrency: "AED",
  })),
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

const steps = [
  "Site survey and baseline audit of your current system.",
  "Written proposal.",
  "Signed agreement.",
  "Scheduled visits.",
  "Report after every visit.",
];

export default function AcAmcPage() {
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

      {/* Breadcrumb (single trail + BreadcrumbList JSON-LD) */}
      <BreadcrumbBand
        items={[
          { name: "Services", href: "/services" },
          { name: "AC AMC Dubai", href: "/ac-amc-dubai" },
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
          <p className={eyebrow}>Dubai &amp; the UAE</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
            AC Annual Maintenance Contracts in Dubai
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            An AMC keeps your AC serviced on a schedule, with a named engineer, a
            written report after every visit, and priority response when
            something fails.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#amc-form"
              className="rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Get My AMC Quote
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
            <span>Available across the UAE</span>
            <span className="text-white/30">|</span>
            <span>24/7 call or WhatsApp</span>
          </div>
        </div>
      </section>

      {/* WHO AN AMC SUITS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Who It Suits</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Who an AMC suits
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            Villa owners, landlords, property managers, offices and shops. One
            contractor looks after every unit on a fixed schedule, so faults are
            caught before the summer peak instead of during it.
          </p>
        </div>
      </section>

      {/* WHAT AN AMC COVERS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>What&apos;s Included</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            What an AMC covers
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {amcConfig.included.map((item) => {
              const label =
                item === "Scheduled visits" && amcConfig.visitsPerYear
                  ? `Scheduled visits — ${amcConfig.visitsPerYear}`
                  : item;
              return (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border bg-white p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-text">{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* WHAT IS NOT INCLUDED */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Transparency</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            What is not included
          </h2>
          {amcConfig.excluded.length > 0 && (
            <ul className="mt-6 list-disc space-y-2 pl-6 text-text-muted">
              {amcConfig.excluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <p className="mt-6 text-lg text-text-muted">
            Anything outside the contract is quoted in writing before work
            starts.
          </p>
        </div>
      </section>

      {/* COMMERCIAL & BUILDING AMC */}
      <section id="commercial-amc" className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>For buildings &amp; facilities</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Commercial &amp; building AMC
          </h2>
          <p className="mt-6 text-lg text-text-muted">
            The same contract scales from a villa to a whole building. For
            offices, retail, restaurants, hotels and managed estates, we put all
            your HVAC plant under one maintenance contract — split and ducted
            units, VRF/VRV, chillers, AHUs, FCUs and ventilation — so one
            engineering team is accountable for the lot, not several separate
            call-outs.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "All plant under one contract — split, ducted, VRF/VRV, chillers, AHUs, FCUs and ventilation",
              "A response line and an SLA matched to how critical the system is",
              "Documented reports after every visit — the record facility managers need for audits and budgeting",
              "Transparent pricing — scheduled visits are fixed; parts and major works are quoted in writing first",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-text-muted">
            Larger plant such as chiller systems can also be covered on a
            dedicated schedule — see{" "}
            <Link
              href="/services/chiller-maintenance-dubai"
              className="font-semibold text-primary hover:underline"
            >
              chiller installation &amp; maintenance
            </Link>
            . Commercial cover is quoted after a site survey, based on the number
            and type of units and the response level you need.
          </p>
        </div>
      </section>

      {/* AMC PLANS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Plans</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            AMC plans
          </h2>
          {amcConfig.fromPrice && (
            <p className="mt-4 font-heading text-xl font-bold">
              From AED {amcConfig.fromPrice}
            </p>
          )}
          {amcConfig.plans.length === 0 ? (
            <p className="mt-6 text-lg text-text-muted">
              Plans are tailored to your property. Tell us the number of units
              and we will send a written proposal.
            </p>
          ) : (
            <>
              <div
                className="mt-8 overflow-x-auto"
                tabIndex={0}
                role="region"
                aria-label="Maintenance plan comparison"
              >
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-primary text-left text-white">
                    <tr>
                      <th className="border border-border px-4 py-3 font-semibold">
                        Plan
                      </th>
                      <th className="border border-border px-4 py-3 font-semibold">
                        Visits per year
                      </th>
                      <th className="border border-border px-4 py-3 font-semibold">
                        Price per machine per visit
                      </th>
                      <th className="border border-border px-4 py-3 font-semibold">
                        Priority response time
                      </th>
                      <th className="border border-border px-4 py-3 font-semibold">
                        Discount on spare parts
                      </th>
                      <th className="border border-border px-4 py-3 font-semibold">
                        Written report after every visit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&>tr:nth-child(even)]:bg-white">
                    {amcConfig.plans.map((p) => (
                      <tr key={p.name}>
                        <td className="border border-border px-4 py-3 font-semibold">
                          {p.name}
                          {p.popular && (
                            <span className="ml-2 inline-block rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-white">
                              Most popular
                            </span>
                          )}
                        </td>
                        <td className="border border-border px-4 py-3">
                          {p.visits}
                        </td>
                        <td className="border border-border px-4 py-3">
                          {p.price}
                        </td>
                        <td className="border border-border px-4 py-3">
                          {p.response}
                        </td>
                        <td className="border border-border px-4 py-3">
                          {p.partsDiscount}
                        </td>
                        <td className="border border-border px-4 py-3">
                          {p.reports}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-text-muted">
                Prices are in AED per machine per visit and exclude 5% VAT. Final
                price depends on the number and type of units and is confirmed in
                your written proposal.
              </p>
              <p className="mt-3 text-sm text-text-muted">
                The <strong>Basic</strong> plan&apos;s 2 visits suit low-use or
                single-split homes; for year-round villa and office use we
                recommend 4 visits a year — roughly one every 3 months. AMC visits
                are AED {Math.min(...prices.amcPlans.map((p) => p.from))}–{Math.max(...prices.amcPlans.map((p) => p.from))} per machine depending on plan, which is below our
                one-off service rate of AED {prices.maintenance[0].from} per machine (minimum 3 units),
                because the visits are scheduled for the year.
              </p>
            </>
          )}

          {/* By property type — rows appear only once their price is confirmed in prices.ts */}
          {visibleTiers().length > 0 && (
            <div className="mt-12">
              <h3 className="font-heading text-2xl font-bold">AMC by property type</h3>
              <div className="mt-6 overflow-x-auto" tabIndex={0} role="region" aria-label="AMC comparison by property type">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-primary text-left text-white">
                    <tr>
                      <th scope="col" className="border border-border px-4 py-3 font-semibold">Property</th>
                      <th scope="col" className="border border-border px-4 py-3 font-semibold">Visits a year</th>
                      <th scope="col" className="border border-border px-4 py-3 font-semibold">Response time</th>
                      <th scope="col" className="border border-border px-4 py-3 font-semibold">What is included</th>
                      <th scope="col" className="border border-border px-4 py-3 font-semibold">From (AED)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {visibleTiers().map((t) => (
                      <tr key={t.id}>
                        <th scope="row" className="border border-border px-4 py-3 text-left font-semibold">{t.label}</th>
                        <td className="border border-border px-4 py-3">{t.visitsPerYear.startsWith("[") ? "—" : t.visitsPerYear}</td>
                        <td className="border border-border px-4 py-3">{t.response.startsWith("[") ? "—" : t.response}</td>
                        <td className="border border-border px-4 py-3">{t.includes.length ? t.includes.join(", ") : "—"}</td>
                        <td className="border border-border px-4 py-3">{isConfirmed(t.from) ? `From AED ${t.from}` : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-text-muted">{PRICE_FOOTNOTE}</p>
            </div>
          )}
        </div>
      </section>

      {/* Mid-page lead block, directly after the first proof section */}
      <MidPageCta service="AC annual maintenance contract" path="/ac-amc-dubai" />

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>How It Works</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            How it works
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

      {/* SWITCHING */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Switching</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Switching from your current contractor
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            We can take over from your current contractor, starting with a
            baseline audit of your units.
          </p>
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
            AMC FAQs
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
          <p className="mt-8 text-sm text-text-muted">
            Related reading:{" "}
            <Link
              href="/blog/ac-coil-cleaning-and-amc-dubai"
              className="font-medium text-primary hover:underline"
            >
              AC coil cleaning and AMC in Dubai: why both matter
            </Link>
          </p>
        </div>
      </section>

      {/* AMC FORM */}
      <section id="amc-form" className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className={eyebrow}>Get a Quote</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Get your AMC quote
          </h2>
          <p className="mt-4 text-text-muted">
            Tell us about your property and units and we&apos;ll send a written
            proposal.
          </p>
          <div className="mt-8">
            <AmcForm
              whatsappHref={waHref}
              responsePromise={amcConfig.responsePromise}
            />
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-2xl font-bold">Related reading</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/ac-maintenance-dubai"
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold">
                AC maintenance, servicing &amp; repair
              </h3>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Read more &rarr;
              </span>
            </Link>
            <Link
              href="/services/chiller-maintenance-dubai"
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold">
                Chiller installation &amp; maintenance
              </h3>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Read more &rarr;
              </span>
            </Link>
            <Link
              href="/smart-thermostat-installation-dubai"
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold">
                Smart thermostat installation
              </h3>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Read more &rarr;
              </span>
            </Link>
            <Link
              href="/blog/ac-maintenance-contracts-dubai-amc-guide"
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold">
                Why reactive maintenance costs more
              </h3>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Read the guide &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/ac-amc-dubai" />

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Ready for a proposal?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="#amc-form"
              className="rounded-md bg-white px-7 py-4 font-semibold text-primary hover:bg-white/90 transition-colors"
            >
              Get My AMC Quote
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
