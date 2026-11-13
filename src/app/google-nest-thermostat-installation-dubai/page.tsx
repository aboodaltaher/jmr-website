import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { RelatedServices } from "@/components/RelatedServices";
import { InlineLeadForm } from "@/components/InlineLeadForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GOOGLE_REVIEWS_URL } from "@/lib/reviews";
import { getGoogleReviewStats } from "@/lib/google-reviews";
import {
  PRICE_NEST_SUPPLY,
  PRICE_INSTALLATION,
  PRICE_DROP_AIR_ADAPTOR,
  PRICE_NEST_SUPPLY_INSTALL,
  PRICE_NOTE,
} from "@/lib/pricing";
import {
  ShieldCheck,
  BadgeCheck,
  Cpu,
  Clock,
  Wifi,
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
  "Hi AGEC, can you check if a Google Nest works with my AC? Brand and model: ",
)}`;
const CANONICAL = "/google-nest-thermostat-installation-dubai";

export const metadata = buildMetadata({
  title: "Google Nest Thermostat Installation Dubai | AGEC",
  description:
    "Professional Google Nest thermostat installation in Dubai — free compatibility check, C-wire wiring and Google Home setup by HVAC engineers.",
  ogDescription:
    "Supply & professional installation of Google Nest smart thermostats across Dubai & the UAE. Free compatibility check, C-wire wiring and Google Home setup.",
  path: CANONICAL,
});

/* ----------------------------- CONTENT DATA ----------------------------- */

const trustBadges = [
  "Supply & Install",
  "Install-Only Available",
  "Licensed HVAC Engineers",
  "Free Compatibility Check",
  "Google Home Setup",
];

const whatWeDo = [
  "Supply & install genuine Google Nest thermostats — or install-only for a Nest you already own",
  "Free compatibility check of your AC and wiring before you commit",
  "C-wire (common wire) installation, or a safe power/interface solution where needed",
  "Clean, safe mounting and wiring by qualified engineers — not general handymen",
  "Full Google Home app setup — Wi-Fi, schedules, geofencing and eco modes, plus a hands-on walkthrough",
];

const whyCards: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ShieldCheck,
    title: "A Licensed HVAC Contractor",
    desc: "We understand UAE cooling systems from the ductwork up, so your Nest is matched and wired to your AC properly — not just clipped to the wall.",
  },
  {
    icon: Cpu,
    title: "Correct C-Wire / Interface Work",
    desc: "Missing or wrong C-wire is the #1 reason DIY Nest installs fail here. We fit a proper C-wire or a safe interface module so Nest gets constant power.",
  },
  {
    icon: BadgeCheck,
    title: "Supply or Install-Only",
    desc: "Buy the device from us and we supply + install it, or we professionally fit the Nest you already have. Your choice.",
  },
  {
    icon: Clock,
    title: "24/7 On Call & WhatsApp",
    desc: "We reply within the hour on call and WhatsApp, with same-day installation available for standard, compatible systems in Dubai.",
  },
];

const steps: { title: string; desc: string }[] = [
  { title: "Free compatibility check", desc: "Tell us your AC brand/model; we confirm Nest will work and what (if any) wiring is needed." },
  { title: "Transparent quote", desc: "A fixed install price upfront after the check — no surprises." },
  { title: "Professional installation", desc: "Tidy mounting, correct wiring and C-wire where required — usually under 90 minutes." },
  { title: "Google Home setup & training", desc: "Connected, scheduled and explained so you get value from day one." },
];

const areas = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Umm Al Quwain", "Fujairah"];

// Real reviews from the verified Google Business Profile (AGEC Technical Services).
const reviews = [
  {
    name: "Malek Boos",
    role: "Google review · translated from Arabic",
    initials: "MB",
    text: "Honestly, incredible service and truly professional work — and above all, they are honest and conscientious. From the very first visit they solved a problem I had struggled with for a long time, after bad experiences with other companies. I recommend anyone who needs anything AC-related to deal with them.",
  },
  {
    name: "Mays Masri",
    role: "Google review · translated from Arabic",
    initials: "MM",
    text: "I'm really happy with what they did, and their price is excellent. They installed a split unit at my home even though the wiring wasn't right — they sorted it out with an excellent electrician, left the whole house clean, and paid attention to the smallest details. Thank you.",
  },
  {
    name: "Tareq Almasri",
    role: "Local Guide · Google review · translated from Arabic",
    initials: "TA",
    text: "I searched a long time to find work and cleanliness like this. Even the clean-up after they finished made me certain they deserve five stars — from management to staff. Thank you for the service, the kind treatment, and the honesty.",
  },
];

const faqs: { q: string; a: string }[] = [
  { q: "Is Google Nest available in the UAE?", a: "Yes — Google Nest is officially sold in the UAE. We install the model you already have, or supply a genuine unit for you as part of the job." },
  { q: "Will Nest work with my villa's AC?", a: "Usually yes. Most Dubai homes use 24V ducted or ducted-split systems, which Nest supports directly. For 220/240V split and inverter units we fit a safe interface module so Nest can control the AC without modifying or damaging it. We always confirm with a free compatibility check first." },
  { q: "Does Nest work with VRF/VRV or chiller FCU systems?", a: `Yes — Nest works with VRF/VRV systems using a drop-air adaptor, an interface we fit so the Nest can control the indoor unit (AED ${PRICE_DROP_AIR_ADAPTOR} where required). Chiller FCU and other setups vary, so we confirm your specific system with a free compatibility check first.` },
  { q: "What is a C-wire and do I need one?", a: "The C-wire (common wire) gives the thermostat constant power. If your system doesn't have one, our engineers run a proper C-wire or fit a compatible power/interface solution safely and cleanly, so your Nest stays powered and reliable." },
  { q: "How much does Nest installation cost in Dubai?", a: `Installation is AED ${PRICE_INSTALLATION}; a genuine Nest supplied is AED ${PRICE_NEST_SUPPLY}, so supply + installation is from AED ${PRICE_NEST_SUPPLY_INSTALL}. A drop-air adaptor (AED ${PRICE_DROP_AIR_ADAPTOR}) is added only for VRF/VRV or where your system needs one. Your exact price is confirmed after the free compatibility check.` },
  { q: "Can you install a Nest I already bought?", a: "Yes — we offer install-only. We check compatibility, wire it correctly (C-wire where needed) and set up Google Home, so a device you sourced yourself is fitted to professional standard." },
  { q: "Will a Nest lower my DEWA bill?", a: "It can. Scheduling, geofencing and eco modes cut wasted cooling across the UAE's long cooling season. Actual savings depend on your home, usage and settings, but smart control is one of the fastest ways to reduce cooling waste." },
  { q: "How long does installation take, and what warranty do I get?", a: "A standard, compatible install is usually under 90 minutes. You get the full manufacturer warranty on the Nest device plus our workmanship guarantee on the installation." },
  { q: "Which areas do you cover?", a: "All of Dubai — including Dubai Hills, Arabian Ranches, Palm Jumeirah, JVC, Downtown, Business Bay, Al Barsha, Jumeirah, Mirdif and Dubai Marina — plus Sharjah, Ajman and Abu Dhabi." },
];

/* ------------------------------ JSON-LD ------------------------------ */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Nest Thermostat Installation Dubai",
  serviceType: "Smart thermostat installation",
  description:
    "Supply and professional installation of Google Nest smart thermostats in Dubai and the UAE — free compatibility check, C-wire wiring and Google Home setup by licensed HVAC engineers.",
  url: "https://agec.ae/google-nest-thermostat-installation-dubai",
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
    { "@type": "ListItem", position: 4, name: "Google Nest Installation Dubai", item: "https://agec.ae/google-nest-thermostat-installation-dubai" },
  ],
};

/* ------------------------------- HELPERS ------------------------------- */

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";
const eyebrowDark = "text-sm font-semibold uppercase tracking-widest text-primary-light";

/* -------------------------------- PAGE -------------------------------- */

export default async function GoogleNestPage() {
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
              { name: "Google Nest" },
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
            <p className={eyebrow}>Dubai &amp; UAE · Same-Day Available</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.05] md:text-6xl">
              Google Nest Thermostat Installation in{" "}
              <span className="text-primary">Dubai</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Control your AC from your phone, schedule cooling around your day and cut wasted
              energy. We <strong className="text-white">supply and professionally install</strong>{" "}
              genuine Google Nest thermostats — with a free compatibility check, proper C-wire
              wiring and full Google Home setup. Already have a Nest? We offer{" "}
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
            <div className="relative flex min-h-[240px] items-center justify-center">
              <div
                className="pointer-events-none absolute h-64 w-64 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(212,118,46,.5), transparent 62%)" }}
              />
              <span className="absolute right-1 top-1 z-10 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-white shadow-lg">
                23° · Eco
              </span>
              <Image
                src="/images/google-nest-thermostat-4th-generation-dubai.png"
                alt="Google Nest Learning Thermostat professionally supplied and installed in a Dubai home by AGEC"
                width={300}
                height={300}
                priority
                className="relative max-h-[250px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="mt-4 flex justify-between gap-3 border-t border-white/10 pt-5 text-center">
              <div className="flex-1">
                <b className="block font-heading text-2xl text-white">&lt;90min</b>
                <span className="text-xs uppercase tracking-wide text-white/50">Install Time</span>
              </div>
              <div className="flex-1">
                <b className="block font-heading text-2xl text-white">UAE</b>
                <span className="text-xs uppercase tracking-wide text-white/50">Official</span>
              </div>
              <div className="flex-1">
                <b className="block font-heading text-2xl text-white">{GOOGLE_RATING}★</b>
                <span className="text-xs uppercase tracking-wide text-white/50">Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className={eyebrow}>What We Do</p>
              <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
                Nest, Installed Right — By HVAC Engineers
              </h2>
              <p className="mt-5 text-lg text-text-muted">
                A Nest only works well when it&apos;s matched and wired correctly to your system.
                As a licensed HVAC contractor, that&apos;s exactly what we get right.
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
              Does Nest Work With My AC in Dubai?
            </h2>
          </div>
          <p className="mt-6 text-lg text-white/75">
            Most Dubai homes use 24V ducted or ducted-split systems, which Nest supports. For{" "}
            <strong className="text-white">220/240V split and inverter units</strong>, our engineers
            fit a safe interface module so Nest can control the AC{" "}
            <strong className="text-white">without modifying or damaging your unit</strong> and without
            depending on its internal control board. For{" "}
            <strong className="text-white">VRF/VRV systems</strong> we fit a{" "}
            <strong className="text-white">drop-air adaptor</strong> so the Nest can control the
            indoor unit. We check split, ducted DX, VRF/VRV and chiller FCU setups
            first — so there&apos;s a solution for almost any system. Compatibility depends on your
            wiring and controls, not just the AC brand, which is why we always start with a free assessment.
          </p>
          <div className="mt-8 flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <Wifi className="h-6 w-6 text-primary" strokeWidth={1.75} />
            </div>
            <p className="text-white/80">
              Prefer the full comparison, or considering ecobee too? See our{" "}
              <Link href="/smart-thermostat-installation-dubai" className="font-semibold text-primary-light hover:underline">
                smart thermostat hub
              </Link>{" "}
              or the dedicated{" "}
              <Link href="/ecobee-thermostat-installation-dubai" className="font-semibold text-primary-light hover:underline">
                ecobee installation page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>How Installation Works</p>
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
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-primary/40 bg-white p-7 ring-1 ring-primary/20">
              <h3 className="font-heading text-lg font-semibold">Supply &amp; install</h3>
              <p className="mt-1 text-sm text-text-muted">Genuine Nest (AED {PRICE_NEST_SUPPLY}) + installation.</p>
              <p className="mt-4 font-heading text-3xl font-bold text-primary">
                from AED {PRICE_NEST_SUPPLY_INSTALL}
                <span className="align-super text-base">*</span>
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-7">
              <h3 className="font-heading text-lg font-semibold">Installation only</h3>
              <p className="mt-1 text-sm text-text-muted">We fit the Nest you already own.</p>
              <p className="mt-4 font-heading text-3xl font-bold text-primary">
                AED {PRICE_INSTALLATION}
                <span className="align-super text-base">*</span>
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-7">
              <h3 className="font-heading text-lg font-semibold">Drop-air adaptor</h3>
              <p className="mt-1 text-sm text-text-muted">For VRF/VRV or where required.</p>
              <p className="mt-4 font-heading text-3xl font-bold text-primary">
                AED {PRICE_DROP_AIR_ADAPTOR}
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
              Google Nest in Dubai — Your Questions Answered
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
            Nest Installation Across the UAE
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
            Tell us your AC brand and we&apos;ll confirm whether Nest fits — no obligation.
          </p>
          <div className="mt-8 rounded-xl border border-border bg-white p-6 md:p-8">
            <InlineLeadForm
              requestType="Google Nest thermostat installation"
              whatsappPath="/google-nest-thermostat-installation-dubai"
              detailsLabel="AC brand / model and area (optional)"
              detailsPlaceholder="e.g. Daikin ducted split, villa in Arabian Ranches."
              formName="thermostat"
            />
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/google-nest-thermostat-installation-dubai" />

      {/* FINAL CTA */}
      <section className="bg-primary py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to Install Your Google Nest?
          </h2>
          <p className="mt-5 text-lg text-white">
            Supply &amp; install or install-only — set up properly for UAE homes by licensed HVAC engineers.
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
