import Image from "next/image";
import { JobPhoto } from "@/components/JobPhoto";
import Link from "next/link";
import { Check, MessageCircle, Phone } from "lucide-react";
import { BreadcrumbBand } from "@/components/Breadcrumbs";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { InlineLeadForm } from "@/components/InlineLeadForm";
import { PriceTable } from "@/components/PriceTable";
import { RelatedServices } from "@/components/RelatedServices";
import { business } from "@/data/business";
import { getProjectBySlug } from "@/data/projects";
import { money, offersFor, prices } from "@/data/prices";
import { PHONE, whatsappUrl } from "@/lib/contact";
import { buildMetadata } from "@/lib/metadata";

const SITE_URL = business.url;
const ROUTE = "/ac-installation-dubai";

export const metadata = buildMetadata({
  title: "AC Installation Dubai | Supply & Install | AGEC",
  description: `AC installation in Dubai, new unit included: split and cassette AED ${money(prices.installation[0].from as number)} per ton. Piping, insulation, drain and wiring included. Get a quote.`,
  path: ROUTE,
  languages: {
    "en-AE": `${SITE_URL}${ROUTE}`,
    "ar-AE": `${SITE_URL}/ar/ac-installation-dubai`,
    "x-default": `${SITE_URL}${ROUTE}`,
  },
});

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";
const h2 = "mt-3 font-heading text-3xl font-bold md:text-4xl";
const body = "mt-5 text-lg leading-relaxed text-text-muted";
const link = "font-semibold text-primary hover:underline";

const [split, , ducted, vrf, replacement] = prices.installation;
const splitPrice = money(split.from as number);
const ductedPrice = money(ducted.from as number);
const vrfPrice = money(vrf.from as number);
const replacePrice = money(replacement.from as number);

// Confirmed by the owner: copper piping, insulation, drain and electrical connection.
// TODO(owner): confirm the last three items (vacuum and pressure test, commissioning readings, handover) are part of every install.
const included = [
  "The new AC unit, supplied by us",
  "Copper piping",
  "Pipe insulation",
  "Drain connection",
  "Electrical connection",
  "Vacuum and pressure test of the refrigerant pipework",
  "Commissioning readings, recorded",
  "Handover and a walk-through of the controls",
];

const brands = ["Daikin", "Trane", "O General", "Mitsubishi", "LG", "Carrier", "York"];

const systems: { name: string; text: string; price: string; href?: string; linkText?: string }[] = [
  {
    name: "Split AC installation",
    text: "One indoor unit and one outdoor unit for a single room or zone. The most common home installation, and the quickest to fit.",
    price: `AED ${splitPrice} per ton`,
    href: "/services/dx-units",
    linkText: "DX units and splits",
  },
  {
    name: "Cassette AC installation",
    text: "An indoor unit set into the ceiling that blows air in several directions, for larger rooms and open-plan spaces.",
    price: `AED ${splitPrice} per ton`,
  },
  {
    name: "Ducted AC installation",
    text: "One indoor unit above the ceiling feeding several rooms through ducts, with only the grilles visible. Ducting is part of the job.",
    price: `from AED ${ductedPrice} per ton`,
  },
  {
    name: "VRF for homes",
    text: "One outdoor unit serving several indoor units, each with its own temperature control. Suited to larger villas.",
    price: `from AED ${vrfPrice} per ton`,
    href: "/services/vrf-vrv-systems",
    linkText: "VRF / VRV systems",
  },
];

const steps = [
  { t: "Send us the room", d: "Send a photo of the room on WhatsApp, with the area and what you want cooled. We can give you a first idea of the unit type before any visit." },
  { t: "We size it", d: "An engineer checks the room, how it is used and the heat coming in, and recommends the unit type and tonnage." },
  { t: "You get a written price", d: "The price covers the unit and the installation, so there is nothing to add for piping, insulation, drain or the electrical connection." },
  { t: "We install", d: "About 3 hours for a single split unit and about 7 hours for a ducted unit including the ducting." },
  { t: "We test and hand over", d: "We test the system, record the readings and show you how to use it." },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "How much does AC installation cost in Dubai?",
    a: `Our installation prices include the new unit. A split or cassette AC is AED ${splitPrice} per ton, a ducted split starts from AED ${ductedPrice} per ton, and VRF for homes starts from AED ${vrfPrice} per ton. Replacing an old unit starts from AED ${replacePrice} per unit. The final price depends on the unit size and how the job is laid out, and we confirm it in writing before we start.`,
  },
  {
    q: "How long does AC installation take?",
    a: "About 3 hours for a single split unit, and about 7 hours for a ducted unit including the ducting. Larger jobs with several units take longer, and we tell you the time when we quote.",
  },
  {
    q: "What is included in the installation price?",
    a: "The new unit, copper piping, pipe insulation, the drain connection and the electrical connection. The price is for supply and installation together, not the installation alone.",
  },
  {
    q: "What warranty do I get?",
    a: "The manufacturer gives a 5-year warranty on the compressor. AGEC gives a 1-year warranty on the indoor unit and on our installation work.",
  },
  {
    q: "How many tons of AC do I need?",
    a: "It depends on the size of the room, how it is used, how much sun it gets and how well it is insulated, so a rule of thumb can leave you with a unit that is too small or too large. Send us a photo of the room and the approximate size, and an engineer will tell you what we would size it at.",
  },
  {
    q: "Can you replace my old AC unit?",
    a: `Yes. Replacing an old unit starts from AED ${replacePrice} per unit, with the new unit supplied by us. We take out the old unit and fit the new one.`,
  },
  {
    q: "Which brands do you install?",
    a: "We install and repair Daikin, Trane, O General, Mitsubishi, LG, Carrier and York. Tell us the brand you prefer and we will quote it.",
  },
  {
    q: "Which type of AC is best for a villa?",
    a: "It depends on the layout. Split units suit single rooms, cassettes suit larger open rooms, a ducted split suits a whole floor with a clean ceiling, and VRF suits larger villas that need separate control in each room. Send us your floor plan or photos and we will recommend one.",
  },
  {
    q: "Do you also service the AC after installing it?",
    a: "Yes. We do AC maintenance and repair for the units we install, and for other units. See our AC maintenance and AC repair pages for the prices.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Installation",
  serviceType: "AC supply and installation",
  url: `${SITE_URL}${ROUTE}`,
  description:
    "Supply and installation of split, cassette, ducted and VRF air conditioning for homes in Dubai, with the new unit, piping, insulation, drain and electrical connection included.",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "City", name: "Dubai" },
  ...(offersFor(prices.installation).length ? { offers: offersFor(prices.installation) } : {}),
};

export default function AcInstallationPage() {
  const waHref = whatsappUrl(ROUTE);
  const caseStudy = getProjectBySlug("g1r-villa-dubai");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FaqJsonLd items={faqs} />

      <BreadcrumbBand
        items={[
          { name: "Services", href: "/services" },
          { name: "AC Installation Dubai", href: ROUTE },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13212E] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(1100px 560px at 82% -10%, rgba(212,118,46,.32), transparent)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className={eyebrow}>Dubai &amp; the UAE · Supply and install</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
            AC Installation in Dubai: New Unit Included, Priced Per Ton
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            AC installation in Dubai from AED {splitPrice} per ton for a split or cassette unit. The
            price includes the new unit, copper piping, insulation, drain and electrical connection.
            One split unit takes about 3 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] transition-colors hover:bg-[#1fad52]"
            >
              <MessageCircle className="h-4 w-4" /> Send us a photo of the room
            </a>
            <Link
              href="#quote"
              className="rounded-md border border-white/30 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get an Installation Quote
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/80">
            <GoogleReviewsBadge className="text-white/90" />
            <span className="text-white/30">|</span>
            <span>5-year manufacturer compressor warranty</span>
            <span className="text-white/30">|</span>
            <span>1-year AGEC warranty on installation</span>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Prices</p>
          <h2 className={h2}>AC installation cost in Dubai</h2>
          <p className={body}>
            These are supply-and-install prices: the new unit is included, so you are not buying the
            unit separately. We confirm the final price in writing once we know the unit size and the
            layout.
          </p>
          <PriceTable rows={prices.installation} caption="AC installation prices, new unit included" />
        </div>
      </section>

      {/* WHAT IS INCLUDED */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className={eyebrow}>What You Get</p>
            <h2 className={h2}>What is included in AC installation</h2>
            <ul className="mt-6 space-y-3">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-text">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[1206/895] overflow-hidden rounded-xl border border-border">
            <Image
              src="/projects/agec-villa-interior-concealed-cooling-dubai.jpg"
              alt="Concealed ducted AC installed in a Dubai villa by AGEC"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SYSTEM TYPES */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className={eyebrow}>Unit Types</p>
          <h2 className={h2}>Split, cassette, ducted and VRF for your home</h2>
          <p className={body}>
            We install four types of AC in homes. The right one depends on the layout, the size of
            the rooms and how much of the ceiling you want to see.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {systems.map((s) => (
              <div key={s.name} className="rounded-lg border border-border bg-white p-6">
                <h3 className="font-heading text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-text-muted">{s.text}</p>
                <p className="mt-3 font-semibold text-text">{s.price}</p>
                {s.href && (
                  <Link href={s.href} className={`${link} mt-3 inline-block text-sm`}>
                    {s.linkText} &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL JOB PHOTO */}
      <section className="py-14 md:py-16">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-8 px-6">
          <JobPhoto
            src="/projects/mira-oasis-ducted-ac-installation.jpg"
            alt="Ducted AC unit installed above the ceiling with insulated flexible ducts in a Mira Oasis villa, Dubai"
            width={1600}
            height={1200}
          />
          <p className="min-w-[240px] flex-1 text-lg leading-relaxed text-text-muted">
            A ducted unit we installed above the ceiling of a Mira Oasis villa, with insulated flexible
            ducts. See{" "}
            <Link href="/ac-maintenance/mira-oasis" className={link}>
              ducted AC installation in Mira Oasis
            </Link>
            .
          </p>
          <JobPhoto
            src="/projects/dubai-hills-duct-installation-corridor.jpg"
            alt="Insulated duct boxes and ducted AC units installed along a ceiling during duct installation in Dubai Hills, Dubai"
            width={900}
            height={1600}
            caption={
              <>
                Duct installation in Dubai Hills.{" "}
                <Link href="/ac-maintenance/dubai-hills" className={link}>
                  AC installation and replacement in Dubai Hills
                </Link>
              </>
            }
          />
        </div>
      </section>

      {/* TIME & WARRANTY */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className={eyebrow}>Time</p>
            <h2 className="mt-3 font-heading text-2xl font-bold md:text-3xl">How long installation takes</h2>
            <p className={body}>
              About 3 hours for one split unit. About 7 hours for a ducted unit, including the
              ducting. Jobs with several units take longer, and we give you the time in the quote.
            </p>
          </div>
          <div>
            <p className={eyebrow}>Warranty</p>
            <h2 className="mt-3 font-heading text-2xl font-bold md:text-3xl">AC installation warranty</h2>
            <p className={body}>
              The manufacturer gives a 5-year warranty on the compressor. AGEC gives a 1-year
              warranty on the indoor unit and on our installation work.
            </p>
          </div>
        </div>
      </section>

      {/* REPLACING AN OLD UNIT */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Replacement</p>
          <h2 className={h2}>Replacing an old AC unit</h2>
          <p className={body}>
            If your unit is old, failing often or not worth repairing, we supply and fit a new one.
            Replacing an old unit starts from AED {replacePrice} per unit, new unit included. We
            remove the old unit and connect the new one. If you are not sure whether to repair or
            replace, our engineers will tell you which makes sense: see{" "}
            <Link href="/ac-repair-dubai" className={link}>
              AC repair in Dubai
            </Link>
            .
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>How It Works</p>
          <h2 className={h2}>How we install your AC</h2>
          <ol className="mt-8 space-y-5">
            {steps.map((s, i) => (
              <li key={s.t} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1">
                  <span className="font-semibold text-text">{s.t}.</span>{" "}
                  <span className="text-text-muted">{s.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Brands</p>
          <h2 className={h2}>Brands we install and repair</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {brands.map((b) => (
              <li key={b} className="rounded-full border border-border bg-white px-5 py-2 font-semibold text-text">
                {b}
              </li>
            ))}
          </ul>
          <p className={body}>
            Tell us the brand you prefer and we quote it. Brand names are trademarks of their
            owners, listed to show the equipment we work on.
          </p>
        </div>
      </section>

      {/* CASE STUDY */}
      {caseStudy && !caseStudy.draft && (
        <section className="bg-bg-soft py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className={eyebrow}>Recent Work</p>
            <h2 className={h2}>A villa installation we completed</h2>
            <Link
              href={`/projects/${caseStudy.slug}`}
              className="group mt-8 block rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{caseStudy.category}</p>
              <h3 className="mt-2 font-heading text-xl font-semibold group-hover:text-primary">{caseStudy.name}</h3>
              <p className="mt-2 text-text-muted">{caseStudy.systemSummary}</p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">View case study &rarr;</span>
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>FAQ</p>
          <h2 className={h2}>AC installation in Dubai: FAQs</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-lg border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-text marker:content-none">
                  {f.q}
                  <span className="text-2xl leading-none text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 pb-5 text-text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="scroll-mt-24 bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className={eyebrow}>Get a Quote</p>
          <h2 className={h2}>Get an AC installation quote</h2>
          <p className="mt-4 text-text-muted">
            Name, phone and what you want cooled. Or send a photo of the room on WhatsApp.
          </p>
          <div className="mt-8">
            <InlineLeadForm
              requestType="AC installation"
              whatsappPath={ROUTE}
              detailsLabel="Rooms, unit type and area (optional)"
              detailsPlaceholder="e.g. 3 bedrooms, split units, Dubai Hills."
            />
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-6 text-text-muted">
          Already have AC? See{" "}
          <Link href="/ac-maintenance-dubai" className={link}>AC maintenance in Dubai</Link>,{" "}
          <Link href="/ac-amc-dubai" className={link}>annual maintenance contracts</Link> or{" "}
          <Link href="/ac-repair-dubai" className={link}>AC repair in Dubai</Link>. Installing HVAC for
          a building or fit-out? See{" "}
          <Link href="/services/hvac-installation-dubai" className={link}>HVAC installation for projects</Link>.
        </div>
      </section>

      <RelatedServices currentPath={ROUTE} />
    </>
  );
}
