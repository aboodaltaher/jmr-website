import { MidPageCta } from "@/components/MidPageCta";
import { JobPhoto } from "@/components/JobPhoto";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { RelatedServices } from "@/components/RelatedServices";
import { BreadcrumbBand } from "@/components/Breadcrumbs";
import { Phone, MessageCircle } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { ReviewsSection } from "@/components/ReviewCards";
import { reviewsAbout } from "@/lib/reviews";
import { RepairForm } from "@/components/RepairForm";
import { PHONE, whatsappUrl } from "@/lib/contact";
import { PriceTable } from "@/components/PriceTable";
import { prices, offersFor, money } from "@/data/prices";

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

const drainPhoto = {
  src: "/projects/al-wasl-ac-drain-rectification.jpg",
  alt: "AC condensate drain connection being corrected after a previous contractor's installation, Al Wasl, Dubai",
  width: 1206,
  height: 1600,
  caption: "A condensate drain connection being corrected after a previous contractor's installation, in Al Wasl.",
};

const symptoms: { id: string; h2: string; paras: string[]; photo?: typeof drainPhoto }[] = [
  {
    id: "ac-not-cooling",
    h2: "AC not cooling in Dubai",
    paras: [
      "When an AC runs but the room stays warm, the thermostat is rarely the cause. In a Dubai summer the unit works near the limit of its capacity, so any loss of airflow or refrigerant shows up quickly. The usual causes are a dirty indoor coil or clogged filter, a blocked condensate drain, a dirty outdoor condenser that cannot reject heat, a failed fan motor or capacitor, and low refrigerant from a leak. Refrigerant is not used up, so low gas always means a leak somewhere.",
      "We measure the air temperature drop across the indoor coil, check airflow, then read suction and discharge pressures and the compressor and fan currents. Those readings tell us which fault it is, so we do not guess and top up gas.",
      "What you can do first: switch the unit to fan-only for a few minutes, check the filter, and make sure nothing is blocking or covering the outdoor unit. If it still blows warm air, call us rather than running it for days. A unit short of refrigerant can damage its own compressor.",
    ],
  },
  {
    id: "ac-leaking-water",
    photo: drainPhoto,
    h2: "AC leaking water in Dubai",
    paras: [
      "Water from an indoor unit is almost always condensate with nowhere to go. As the coil cools the air it collects water, which runs into a tray and out through a drain line. If that line is blocked with dust and algae, has lost its slope, or the tray is cracked, the water overflows into your ceiling or wall. A frozen coil does the same: ice forms from poor airflow or low refrigerant, then melts faster than the tray can take it.",
      "We trace the water to its source. We clear and flush the drain, check the slope and joints, inspect the tray, check the insulation on the refrigerant pipes (condensation on bare pipework looks exactly like a leak) and, if the coil iced up, find out why.",
      "If the unit is dripping near electrics, furniture or a false ceiling, switch it off and send us a photo of where the water comes out. Ceiling stains spread quickly, so do not leave it running.",
    ],
  },
  {
    id: "ac-tripping-breaker",
    h2: "AC tripping the breaker",
    paras: [
      "A breaker trips to protect the wiring from a fault, so resetting it again and again is the wrong response. The usual causes are a compressor or fan motor drawing too much current, a failed start or run capacitor, a loose or burnt terminal, water in an electrical connection, or a breaker that is too small for the unit.",
      "How it trips helps. A unit that trips the moment it starts usually has a short or an earth fault. One that runs for a while and then trips is usually overloaded, for example by a dirty condenser, a failing motor or high refrigerant pressure.",
      "We isolate the supply, test insulation resistance on the compressor and motors, check the capacitors and contactor, and compare running current with the nameplate rating. Leave the unit off and call us. Repeated resets can damage the compressor and overheat the wiring.",
    ],
  },
  {
    id: "ac-making-noise",
    h2: "AC making a noise",
    paras: [
      "A new noise tells you where to look. Rattling or vibration points to loose panels, a fan blade out of balance, or an outdoor unit sitting on worn mounting pads. Squealing or grinding from the outdoor unit points to a failing fan motor bearing or compressor. A hum that ends in a click, with the unit not starting, is typically a failed capacitor or a seized motor. Hissing can mean a refrigerant leak. Gurgling at the indoor unit is usually air or water in the drain line.",
      "We find the source with the unit running, then check the mounting, fan blades, motor currents and refrigerant pressures. Switch the unit off if you hear grinding, or if there is a burning smell.",
    ],
  },
  {
    id: "ac-bad-smell",
    h2: "AC with a bad smell",
    paras: [
      "A musty or sour smell usually comes from dust and moisture growing on a wet coil, in the drain tray, or in the ductwork. In Dubai it tends to come back because the coil stays damp and the filters are not cleaned often enough. We clean the coil and tray and flush the drain. If the smell comes from the ducts, we recommend ",
      "A burning smell is different. It can be an overheating motor or wiring. Switch the unit off at the breaker and call us.",
    ],
  },
  {
    id: "ac-error-code",
    h2: "AC showing an error code",
    paras: [
      "Split, ducted and VRF units flash or display a code when a sensor, communication or protection fault occurs. Codes differ between brands and even between models, so a code on its own is not a diagnosis. It points to a circuit, not to a part.",
      "Note the code, take a photo of the display or the flashing indicator, and send it with the brand and model. We read the code against the manufacturer's service data, then test the circuit it points to: temperature sensors, communication wiring, the control board, the drain float switch and the pressure switches. Please do not clear the code over and over by cutting the power, because that can wipe the clue we need.",
    ],
  },
];

const brands = ["Daikin", "Trane", "O General", "Mitsubishi", "LG", "Carrier", "York"];

const steps = [
  "We inspect and measure the system to find the root cause.",
  "We tell you the price in writing before any work starts.",
  "We carry out the repair.",
  "We send a short report with what we measured.",
];

// TODO(owner): FAQ "Do you warranty repairs?" — no repair warranty wording exists on the site; give the period and what it covers.
// TODO(owner): parts FAQ: confirm which parts you stock and typical lead time for others.
const callout = money(prices.repair[0].from as number);
const faqs: { q: string; a: string }[] = [
  {
    q: "What is the call-out fee?",
    a: `Call-out and diagnosis is AED ${callout}. If you go ahead with the repair, we waive it. After diagnosis we give you the exact repair price in writing, before any work starts.`,
  },
  {
    q: "How much does AC repair cost in Dubai?",
    a: `It depends on the fault, so we do not quote a price range over the phone. An engineer diagnoses the unit for AED ${callout}, waived if you go ahead with the repair, and then quotes the exact repair price in writing before starting.`,
  },
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
    a: "Yes. We repair split, ducted and VRF/VRV systems, including Daikin, Trane, O General, Mitsubishi, LG, Carrier and York, across the UAE.",
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
            <span>Serving all 7 emirates</span>
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
              <MessageCircle className="h-4 w-4" /> AC down now? WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* SIX SYMPTOMS */}
      {symptoms.map((sym, i) => (
        <section key={sym.id} id={sym.id} className={`${i % 2 === 0 ? "bg-bg-soft" : ""} py-14 md:py-16`}>
          <div className="mx-auto max-w-4xl px-6">
            {i === 0 && <p className={eyebrow}>What We Fix</p>}
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">{sym.h2}</h2>
            {sym.paras.map((t, j) => (
              <p key={j} className="mt-5 text-lg leading-relaxed text-text-muted">
                {t}
                {sym.id === "ac-bad-smell" && j === 0 && (
                  <>
                    <Link href="/ac-duct-cleaning-dubai" className="font-semibold text-primary hover:underline">
                      AC duct cleaning in Dubai
                    </Link>
                    .
                  </>
                )}
              </p>
            ))}
            {sym.photo && <JobPhoto {...sym.photo} className="mt-6" />}
            {i === 0 && (
              <p className="mt-5 text-lg leading-relaxed text-text-muted">
                The exact repair price is quoted after diagnosis; see{" "}
                <Link href="#prices" className="font-semibold text-primary hover:underline">prices</Link>.
              </p>
            )}
          </div>
        </section>
      ))}

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
      {/* TODO(owner): compressor replacement lead times and any repair warranty. Not stated on the site. */}
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
            reasoning and the price in writing before any work starts. If a unit is
            past repair, we supply and install a new one: replacing an old unit
            starts from AED {money(prices.installation[4].from as number)} per unit, new unit included. See{" "}
            <Link href="/ac-installation-dubai" className="font-semibold text-primary hover:underline">
              AC installation in Dubai
            </Link>
            .
          </p>
          <JobPhoto
            className="mt-6"
            src="/projects/sustainable-city-ac-compressor-replacement.jpg"
            alt="Worn twin scroll compressors in an AC outdoor unit before compressor replacement, The Sustainable City, Dubai"
            width={1187}
            height={1600}
            caption={
              <>
                Worn compressors in an outdoor unit before replacement, in The Sustainable City.{" "}
                <Link href="/ac-maintenance/sustainable-city" className="font-semibold text-primary hover:underline">
                  AC leak repair and compressor replacement in The Sustainable City
                </Link>
              </>
            }
          />
        </div>
      </section>

      {/* PRICING */}
      <section id="prices" className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Pricing</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            AC repair prices: the diagnosis fee
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            Every repair starts with a diagnosis, charged at the call-out fee
            below. If you go ahead with the repair, we waive it. The exact repair
            price is quoted after diagnosis, in writing, before any work begins,
            so you approve the cost before we start.
          </p>
          <PriceTable rows={prices.repair} caption="AC repair call-out and diagnosis fee" />
        </div>
      </section>

      {/* BRANDS & SYSTEM TYPES */}
      {/* Brand list confirmed by the owner. Never "authorised", "dealer" or "service centre". */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Brands &amp; Systems</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Brands we install and repair
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {brands.map((b) => (
              <li key={b} className="rounded-full border border-border bg-white px-5 py-2 font-semibold text-text">
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            We repair split, ducted and VRF/VRV systems across the UAE. If your
            brand is not listed, call or WhatsApp us and we will tell you
            whether we can help. Brand names are trademarks of their owners,
            listed to show the equipment we work on.
          </p>
        </div>
      </section>

      <ReviewsSection title="What customers say after a repair" reviews={reviewsAbout("repair")} />

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
                  <span aria-hidden="true" className="text-2xl leading-none text-primary transition-transform after:content-['+'] group-open:rotate-45" />
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
