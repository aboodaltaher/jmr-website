import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { RelatedServices } from "@/components/RelatedServices";
import { InlineLeadForm } from "@/components/InlineLeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GOOGLE_REVIEWS_URL } from "@/lib/reviews";
import { getGoogleReviewStats } from "@/lib/google-reviews";
import {
  PRICE_THERMOSTAT_INSTALL_FROM,
  PRICE_ECOBEE_SUPPLY_INSTALL_FROM,
  PRICE_NOTE,
} from "@/lib/pricing";
import {
  ShieldCheck,
  BadgeCheck,
  Cpu,
  Target,
  Check,
  Phone,
  MessageCircle,
  Star,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";

const PHONE = "+971585575987";
const PHONE_DISPLAY = "+971 58 557 5987";
const WA = `https://wa.me/971585575987?text=${encodeURIComponent(
  "Hi AGEC, can you check if an ecobee works with my AC? Brand and model: ",
)}`;
const CANONICAL = "/ecobee-thermostat-installation-dubai";

export const metadata = buildMetadata({
  title: "ecobee Thermostat Installation Dubai | AGEC",
  description:
    "ecobee smart thermostat supply and installation in Dubai — free compatibility check, C-wire wiring and app setup by HVAC engineers.",
  ogDescription:
    "Supply & professional installation of ecobee smart thermostats across Dubai & the UAE. Free compatibility check, C-wire wiring and app setup by HVAC engineers.",
  path: CANONICAL,
});

/* ----------------------------- CONTENT DATA ----------------------------- */

const trustBadges = [
  "Supply & Install",
  "Install-Only Available",
  "Licensed HVAC Engineers",
  "Free Compatibility Check",
  "Workmanship Guarantee",
];

const whatWeDo = [
  "Supply & install ecobee smart thermostats — or install-only for an ecobee you already own",
  "Free compatibility check of your AC and wiring before you commit",
  "C-wire (common wire) installation, or a safe interface solution where needed",
  "Optimal SmartSensor placement for room-by-room balancing in larger villas",
  "App and Wi-Fi setup, schedules, eco+ modes and a hands-on walkthrough",
];

const whyCards: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ShieldCheck,
    title: "A Licensed HVAC Contractor",
    desc: "We understand UAE cooling systems from the ductwork up, so your ecobee is matched and wired to your AC properly — not just clipped to the wall.",
  },
  {
    icon: Cpu,
    title: "Correct C-Wire / Interface Work",
    desc: "For 220/240V split and inverter units we fit a safe interface module so the ecobee controls the AC without altering or damaging it.",
  },
  {
    icon: Target,
    title: "Multi-Room Sensor Tuning",
    desc: "ecobee's SmartSensors balance temperature across rooms. We place and configure them for even comfort in larger villas and multi-zone homes.",
  },
  {
    icon: BadgeCheck,
    title: "Backed by Our Guarantee",
    desc: "Every ecobee we supply is covered by our workmanship guarantee; manufacturer warranty applies where the unit you receive carries one.",
  },
];

const steps: { title: string; desc: string }[] = [
  { title: "Free compatibility check", desc: "Tell us your AC brand/model and ecobee model; we confirm it will work and what (if any) wiring is needed." },
  { title: "Transparent quote", desc: "A fixed price upfront after the check — supply + install, or install-only." },
  { title: "Professional installation", desc: "Tidy mounting, correct wiring, C-wire and sensors where required — usually under 90 minutes." },
  { title: "App setup & training", desc: "Wi-Fi, schedules, eco+ modes and sensors configured and explained." },
];

const areas = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Umm Al Quwain", "Fujairah"];

// Real reviews from the verified Google Business Profile (AGEC Technical Services).
const reviews = [
  {
    name: "Mays Masri",
    role: "Google review · translated from Arabic",
    initials: "MM",
    text: "I'm really happy with what they did, and their price is excellent. They installed a split unit at my home even though the wiring wasn't right — they sorted it out with an excellent electrician, left the whole house clean, and paid attention to the smallest details. Thank you.",
  },
  {
    name: "Malek Boos",
    role: "Google review · translated from Arabic",
    initials: "MB",
    text: "Honestly, incredible service and truly professional work — and above all, they are honest and conscientious. From the very first visit they solved a problem I had struggled with for a long time. I recommend anyone who needs anything AC-related to deal with them.",
  },
  {
    name: "Tareq Almasri",
    role: "Local Guide · Google review · translated from Arabic",
    initials: "TA",
    text: "I searched a long time to find work and cleanliness like this. Even the clean-up after they finished made me certain they deserve five stars — from management to staff. Thank you for the service, the kind treatment, and the honesty.",
  },
];

const faqs: { q: string; a: string }[] = [
  { q: "Do you supply and install ecobee in Dubai?", a: "Yes — we supply and professionally install ecobee smart thermostats, and we also offer install-only if you've already sourced your own unit. Either way, we start with a free compatibility check." },
  { q: "Is ecobee officially sold in the UAE?", a: "ecobee isn't as widely available through official UAE channels as Google Nest, so units here are typically imported. It's worth knowing before you buy, as regional warranty terms and app-account requirements can differ. We back every ecobee we supply with our workmanship guarantee, and manufacturer warranty applies where the unit you receive carries one." },
  { q: "Will ecobee work with my Dubai AC?", a: "Often yes. Most Dubai homes use 24V ducted systems, which ecobee supports. For 220/240V split and inverter units we fit a safe interface module so the ecobee controls the AC without modifying or damaging it. We confirm with a free compatibility check first." },
  { q: "Does ecobee work with VRF/VRV or chiller FCU systems?", a: "Often yes, with the right interface and controls — these systems vary, so we assess your specific setup before promising anything." },
  { q: "Do I need a C-wire for ecobee?", a: "Sometimes. The C-wire gives the thermostat constant power; if your system doesn't have one, we install a proper C-wire or a safe power solution." },
  { q: "How much does ecobee installation cost in Dubai?", a: `Install-only starts from AED ${PRICE_THERMOSTAT_INSTALL_FROM}, and supply + installation from AED ${PRICE_ECOBEE_SUPPLY_INSTALL_FROM} depending on the model you choose. Your exact fixed price is confirmed after the free compatibility check.` },
  { q: "Should I choose ecobee or Google Nest?", a: "Both are excellent. ecobee Premium adds a room SmartSensor and built-in Alexa, which suits larger multi-room villas. For many UAE homes, Google Nest is simpler because it's officially available here — we'll advise honestly after seeing your setup. See our Google Nest installation page to compare." },
  { q: "Which areas do you cover?", a: "All of Dubai — including Dubai Hills, Arabian Ranches, Palm Jumeirah, JVC, Downtown, Business Bay, Al Barsha, Mirdif and Dubai Marina — plus Sharjah, Ajman and Abu Dhabi." },
];

/* ------------------------------ JSON-LD ------------------------------ */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ecobee Thermostat Installation Dubai",
  serviceType: "Smart thermostat installation",
  description:
    "Supply and professional installation of ecobee smart thermostats in Dubai and the UAE — free compatibility check, C-wire wiring, SmartSensor tuning and app setup by licensed HVAC engineers.",
  url: "https://agec.ae/ecobee-thermostat-installation-dubai",
  provider: { "@id": "https://agec.ae/#business" },
  areaServed: areas,
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://agec.ae" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://agec.ae/services" },
    { "@type": "ListItem", position: 3, name: "Smart Thermostats", item: "https://agec.ae/smart-thermostat-installation-dubai" },
    { "@type": "ListItem", position: 4, name: "ecobee Installation Dubai", item: "https://agec.ae/ecobee-thermostat-installation-dubai" },
  ],
};

/* ------------------------------- HELPERS ------------------------------- */

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";
const eyebrowDark = "text-sm font-semibold uppercase tracking-widest text-primary-light";

/* -------------------------------- PAGE -------------------------------- */

export default async function EcobeePage() {
  const { rating: GOOGLE_RATING, count: GOOGLE_REVIEW_COUNT } =
    await getGoogleReviewStats();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-bg-soft">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <Breadcrumbs
            items={[
              { name: "Smart Thermostats", href: "/smart-thermostat-installation-dubai" },
              { name: "ecobee" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13212E] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(1100px 560px at 82% -10%, rgba(212,118,46,.32), transparent)" }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className={eyebrow}>Dubai &amp; UAE · Supply &amp; Install</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
              ecobee Thermostat Supply &amp; Installation in{" "}
              <span className="text-primary">Dubai</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              The ecobee Premium adds a room SmartSensor, built-in Alexa and air-quality monitoring —
              ideal for larger villas. We <strong className="text-white">supply and professionally
              install</strong> ecobee thermostats, with a free compatibility check, correct wiring
              and sensor tuning. Already have an ecobee? We offer{" "}
              <strong className="text-white">install-only</strong> too.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className="rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">
                Book Free Compatibility Check
              </Link>
              <a href={WA} className="rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">
                WhatsApp Us
              </a>
              <a href={`tel:${PHONE}`} className="rounded-md border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
                Call Now
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85">
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} /> {b}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/ecobee-smart-thermostat-premium-dubai.jpg"
                alt="ecobee Smart Thermostat Premium supplied and installed in a Dubai villa by AGEC"
                width={640}
                height={480}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-4 flex justify-between gap-3 border-t border-white/10 pt-5 text-center">
              <div className="flex-1">
                <b className="block font-heading text-2xl text-white">&lt;90min</b>
                <span className="text-xs uppercase tracking-wide text-white/50">Install Time</span>
              </div>
              <div className="flex-1">
                <b className="block font-heading text-2xl text-white">Multi-room</b>
                <span className="text-xs uppercase tracking-wide text-white/50">Sensors</span>
              </div>
              <div className="flex-1">
                <b className="block font-heading text-2xl text-white">{GOOGLE_RATING}★</b>
                <span className="text-xs uppercase tracking-wide text-white/50">Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVAILABILITY NOTE (honest) */}
      <section className="border-b border-border bg-bg-soft py-5">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm leading-relaxed text-text-muted">
            <strong className="text-text">Good to know:</strong> ecobee is less widely available through
            official UAE channels than Google Nest, so units here are typically imported. We back every
            ecobee we supply with our workmanship guarantee, and manufacturer warranty applies where the
            unit carries one. If you&apos;d prefer an officially UAE-available option, see our{" "}
            <Link href="/google-nest-thermostat-installation-dubai" className="font-semibold text-primary hover:underline">
              Google Nest installation
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className={eyebrow}>What We Do</p>
              <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
                ecobee, Installed Right — By HVAC Engineers
              </h2>
              <p className="mt-5 text-lg text-text-muted">
                An ecobee only delivers even, efficient comfort when it&apos;s matched, wired and
                sensor-tuned to your home. As a licensed HVAC contractor, that&apos;s what we get right.
              </p>
              <ul className="mt-6 space-y-3">
                {whatWeDo.map((w) => (
                  <li key={w} className="flex gap-3 text-text">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {whyCards.map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-bg-soft p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <c.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPATIBILITY */}
      <section className="bg-[#13212E] py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className={eyebrowDark}>Compatibility</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
              Works With Your System
            </h2>
          </div>
          <p className="mt-6 text-lg text-white/75">
            We install ecobee on <strong className="text-white">split, ducted DX, VRF/VRV and
            chiller FCU</strong> systems. Most Dubai homes use 24V ducted systems (directly
            compatible); for <strong className="text-white">220/240V split and inverter</strong> units
            we fit a safe interface module so the ecobee controls the AC without altering it.
            Compatibility depends on your wiring and controls — so we always start with a free check.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>How It Works</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              From Free Check to Fully Set Up
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-border bg-bg-soft p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className={eyebrow}>Pricing</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              Transparent, Fixed-Price Installation
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-7">
              <h3 className="font-heading text-lg font-semibold">Install-only</h3>
              <p className="mt-1 text-sm text-text-muted">We fit the ecobee you already own.</p>
              <p className="mt-4 font-heading text-3xl font-bold text-primary">
                from AED {PRICE_THERMOSTAT_INSTALL_FROM}
                <span className="align-super text-base">*</span>
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-7">
              <h3 className="font-heading text-lg font-semibold">Supply &amp; install</h3>
              <p className="mt-1 text-sm text-text-muted">ecobee device + professional fitting.</p>
              <p className="mt-4 font-heading text-3xl font-bold text-primary">
                from AED {PRICE_ECOBEE_SUPPLY_INSTALL_FROM}
                <span className="align-super text-base">*</span>
              </p>
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-text-muted">
            The compatibility check is <strong className="text-text">free</strong>. *{PRICE_NOTE}
          </p>
          <div className="mt-8 text-center">
            <Link href="/quote" className="inline-block rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">
              Get My Fixed Quote
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrow}>Customer Reviews</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
              Rated {GOOGLE_RATING}★ by Our Customers
            </h2>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-5 py-2.5 text-sm font-semibold text-text shadow-sm transition-colors hover:border-primary"
            >
              <span className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              {GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} verified Google reviews
              <ExternalLink className="h-3.5 w-3.5 text-text-muted" />
            </a>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="flex flex-col rounded-xl border border-border bg-bg-soft p-7">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-text">{r.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#13212E] font-heading font-bold text-white">
                    {r.initials}
                  </span>
                  <span>
                    <b className="block text-sm">{r.name}</b>
                    <span className="text-xs text-text-muted">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className={eyebrow}>FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
              ecobee in Dubai — Your Questions Answered
            </h2>
          </div>
          <div className="mt-12 space-y-3">
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

      {/* SERVICE AREAS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className={eyebrow}>Service Areas</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            ecobee Installation Across the UAE
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <span key={a} className="rounded-full border border-border bg-bg-soft px-6 py-3 font-semibold text-text shadow-sm">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quick quote */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
            Book a free compatibility check
          </h2>
          <p className="mt-3 text-center text-text-muted">
            Tell us your AC brand and we&apos;ll confirm whether ecobee fits — no obligation.
          </p>
          <div className="mt-8 rounded-xl border border-border bg-white p-6 md:p-8">
            <InlineLeadForm
              requestType="ecobee thermostat installation"
              whatsappPath="/ecobee-thermostat-installation-dubai"
              detailsLabel="AC brand / model and area (optional)"
              detailsPlaceholder="e.g. Daikin ducted split, villa in Dubai Hills."
              formName="thermostat"
            />
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/ecobee-thermostat-installation-dubai" />

      {/* FINAL CTA */}
      <section className="bg-primary py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to Install Your ecobee?
          </h2>
          <p className="mt-5 text-lg text-white">
            Supply &amp; install or install-only — set up and sensor-tuned for UAE homes by licensed HVAC engineers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-4 font-semibold text-primary hover:bg-white/90 transition-colors">
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
            <a href={WA} className="inline-flex items-center gap-2 rounded-md bg-[#13212E] px-7 py-4 font-semibold text-white hover:bg-[#0f1a24] transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link href="/quote" className="rounded-md border border-white/60 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
              Book Free Check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
