import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  BadgeCheck,
  Clock,
  Wrench,
  FileText,
  Snowflake,
  Wind,
  Droplets,
  Gauge,
  Flame,
  AlertTriangle,
  CalendarClock,
  Phone,
  MessageCircle,
  Check,
  Star,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";

const PHONE = "+971553633139";
const PHONE_DISPLAY = "+971 55 363 3139";
const WA = "https://wa.me/971553633139";
const CANONICAL = "/ac-maintenance-dubai";

export const metadata: Metadata = {
  title: "AC Maintenance Dubai | AC Servicing, Repair & AMC | AGEC",
  description:
    "Professional AC maintenance in Dubai & the UAE — servicing, repair, coil & duct cleaning, gas top-up, and annual maintenance contracts (AMC). Licensed HVAC engineers, same-day & emergency service. Call +971 55 363 3139.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "AC Maintenance Dubai | AC Servicing, Repair & AMC | AGEC",
    description:
      "Professional AC maintenance, servicing and repair in Dubai & the UAE by licensed HVAC engineers. Same-day & emergency service, AMC plans for villas, apartments and commercial buildings.",
    url: "https://agec.ae/ac-maintenance-dubai",
    siteName: "AGEC",
    type: "website",
  },
};

/* ------------------------------ CONTENT ------------------------------ */

const trustBadges = [
  "Licensed & Insured HVAC Engineers",
  "All AC Brands Serviced",
  "Same-Day & Emergency Service",
  "Transparent Fixed Pricing",
  "Documented Service Reports",
];

const whyCards: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: ShieldCheck, title: "Licensed HVAC Engineers", desc: "Real, trained, insured technicians working to ASHRAE and Dubai Municipality standards — not unqualified handymen." },
  { icon: BadgeCheck, title: "Every AC Brand & Type", desc: "Split, ducted, cassette, VRF/VRV, chillers and package units — Daikin, O General, Carrier, Gree, Midea, LG and more." },
  { icon: Clock, title: "Same-Day & 24/7 Emergency", desc: "Fast response across Dubai and the UAE, with emergency breakdown support when your AC fails in peak summer." },
  { icon: FileText, title: "Documented Reports", desc: "Every visit is logged with before/after condition, work performed and parts used — a full maintenance history for your records." },
  { icon: Gauge, title: "Efficiency-Focused", desc: "We don't just clean filters — we restore cooling performance and cut the energy waste that inflates your DEWA bill." },
  { icon: CalendarClock, title: "Flexible AMC Plans", desc: "Annual Maintenance Contracts with scheduled visits and priority response for villas, apartments and commercial buildings." },
];

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: CalendarClock, title: "Preventive AC Maintenance", desc: "Scheduled servicing that keeps your AC efficient and reliable — filter cleaning, coil checks, drainage, gas pressure and electrical inspection." },
  { icon: Wrench, title: "AC Repair & Fault Diagnosis", desc: "Weak cooling, breakdowns, tripping, water leaks or strange noises — we diagnose the root cause and fix it properly." },
  { icon: Droplets, title: "Coil & Duct Cleaning", desc: "Deep cleaning of coils, drainage and ductwork to restore airflow, remove odours and improve indoor air quality." },
  { icon: Flame, title: "Gas Top-Up & Leak Repair", desc: "Refrigerant leak detection, repair and recharging to manufacturer specification — so your AC actually cools again." },
  { icon: AlertTriangle, title: "Emergency Breakdown Service", desc: "AC down in the heat? Fast-response emergency callouts across Dubai and the UAE to get you cool again quickly." },
  { icon: Snowflake, title: "Annual Maintenance Contracts (AMC)", desc: "Fixed-price yearly cover with scheduled visits and priority support. See our full AMC options on our maintenance page." },
];

const steps: { title: string; desc: string }[] = [
  { title: "Contact Us", desc: "Call, WhatsApp or book online. Tell us your AC type, property and the issue." },
  { title: "Inspection & Diagnosis", desc: "Our engineer inspects the system and identifies exactly what it needs." },
  { title: "Transparent Quote", desc: "You get a clear, fixed price upfront — no surprises, no pressure." },
  { title: "Service or Repair", desc: "We carry out the work cleanly and to standard, with common parts on hand." },
  { title: "Testing & Report", desc: "We test cooling performance and hand over a documented service report." },
];

const signs: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Snowflake, title: "Weak or No Cooling", desc: "The AC runs but the room won't get cold — often low gas, a dirty coil or a failing compressor." },
  { icon: Gauge, title: "Rising DEWA Bills", desc: "A neglected AC works harder for less cooling, quietly inflating your electricity bill." },
  { icon: Wind, title: "Weak Airflow", desc: "Clogged filters and ducts choke airflow and strain the system." },
  { icon: Droplets, title: "Water Leaks", desc: "Dripping indoor units usually mean a blocked drain line — easy to fix, costly if ignored." },
  { icon: AlertTriangle, title: "Strange Noises or Smells", desc: "Rattles, buzzing or musty odours are early warnings worth acting on." },
  { icon: Wrench, title: "Frequent Tripping", desc: "An AC that keeps cutting out has an electrical or refrigerant problem that needs diagnosis." },
];

const areas = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Umm Al Quwain", "Fujairah"];

const faqs: { q: string; a: string }[] = [
  { q: "How often should I service my AC in Dubai?", a: "Because AC runs almost year-round in the UAE, we recommend servicing every 3–4 months (3–4 times a year), or at minimum before and during the summer peak. Homes with heavy use, pets or dust exposure benefit from more frequent visits. An AMC schedules this automatically." },
  { q: "How much does AC maintenance cost in Dubai?", a: "It depends on the number and type of units and whether it's a one-off service or an annual contract. We quote a transparent fixed price upfront after understanding your system — with no hidden charges. AMC plans reduce the per-visit cost." },
  { q: "Do you service all AC brands?", a: "Yes. We service every major brand and system type — split, ducted, cassette, VRF/VRV, chillers and package units — including Daikin, O General, Carrier, Gree, Midea, LG, Mitsubishi, Trane and more." },
  { q: "Do you offer same-day or emergency AC repair?", a: "Yes. We provide same-day service where possible and 24/7 emergency breakdown support across Dubai and the UAE — important when your AC fails during peak summer." },
  { q: "What is included in an AC service?", a: "A standard service typically includes cleaning filters and coils, clearing the drainage line, checking refrigerant pressure, inspecting electrical connections and controls, and testing cooling performance — followed by a service report." },
  { q: "What is an AMC (Annual Maintenance Contract)?", a: "An AMC is a yearly agreement covering scheduled preventive visits plus priority response for breakdowns, at a fixed price. It keeps your AC reliable and efficient and spreads the cost. See our maintenance page for AMC options." },
  { q: "My AC isn't cooling — do I just need a gas top-up?", a: "Not always. Low cooling can be low refrigerant, but it can also be a dirty coil, a failing compressor or airflow problems. We diagnose the real cause first — topping up gas without fixing a leak is a temporary and wasteful fix." },
  { q: "Do you do AC coil and duct cleaning?", a: "Yes. We deep-clean coils, drainage and ductwork to restore airflow, remove odours and improve indoor air quality — often a big factor in weak cooling and high bills." },
  { q: "Can regular maintenance lower my electricity bill?", a: "Yes. A clean, well-charged, properly running AC uses noticeably less energy than a neglected one — efficiency can drop 20–30% within two years without maintenance, and that shows up on your DEWA bill." },
  { q: "Do you maintain AC for villas and apartments?", a: "Both. We handle single apartments, large villas, and everything in between — as one-off services or annual contracts." },
  { q: "Do you handle commercial AC maintenance?", a: "Yes. We provide AMC and reactive maintenance for offices, shops, restaurants, hotels and buildings — including chillers, AHUs, FCUs and VRF systems, with 24/7 response options." },
  { q: "Are your technicians licensed and insured?", a: "Yes. AGEC is a licensed engineering contracting company and our technicians are trained and insured, working to ASHRAE and Dubai Municipality standards." },
  { q: "Which areas do you cover?", a: "We serve all seven emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah." },
  { q: "Can you take over maintenance from my previous contractor?", a: "Yes. We can take over an existing system with a full audit and baseline report, so you have a clear record and a fresh maintenance schedule." },
  { q: "While you're here, can you also upgrade my thermostat?", a: "Yes — many customers add a smart thermostat during a service visit. See our smart thermostat installation page for Google Nest and ecobee options." },
];

/* Real reviews from the verified Google Business Profile (JMR Technical Services, 5.0 / 17). */
const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/fPKs5SXmDeK9Co4VA";
const GOOGLE_RATING = "5.0";
const GOOGLE_REVIEW_COUNT = 17;
const reviews = [
  { name: "Malek Boos", role: "Google review · translated from Arabic", initials: "MB", text: "Honestly, incredible service and truly professional work — and above all, they are honest and conscientious. From the very first visit they solved a problem I had struggled with for a long time, after bad experiences with other companies. I recommend anyone who needs anything AC-related to deal with them. Five stars isn't enough — you deserve 100." },
  { name: "Mays Masri", role: "Google review · translated from Arabic", initials: "MM", text: "I'm really happy with what they did, and their price is excellent. They installed a split unit at my home even though the wiring wasn't right — they sorted it out with an excellent electrician, left the whole house clean, and paid attention to the smallest details. Thank you." },
  { name: "Tareq Almasri", role: "Local Guide · Google review · translated from Arabic", initials: "TA", text: "I searched a long time to find work and cleanliness like this. Even the clean-up after they finished made me certain they deserve five stars — from management to staff. Thank you for the service, the kind treatment, and the honesty." },
];

/* ------------------------------ JSON-LD ------------------------------ */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Air Conditioning Maintenance & Repair",
  provider: { "@id": "https://agec.ae/#business" },
  areaServed: areas,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AC Maintenance Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Servicing & Preventive Maintenance Dubai" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Repair & Fault Diagnosis Dubai" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Coil & Duct Cleaning Dubai" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Gas Top-Up & Leak Repair Dubai" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Maintenance Contract (AMC) Dubai" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://agec.ae/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://agec.ae/services/" },
    { "@type": "ListItem", position: 3, name: "AC Maintenance Dubai", item: "https://agec.ae/ac-maintenance-dubai/" },
  ],
};

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

/* -------------------------------- PAGE -------------------------------- */

export default function AcMaintenancePage() {
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
          <span className="text-text">AC Maintenance Dubai</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13212E] text-white">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(1100px 560px at 82% -10%, rgba(212,118,46,.32), transparent)" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className={eyebrow}>Dubai &amp; UAE · Same-Day &amp; Emergency</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.03] md:text-6xl">
              AC Maintenance in Dubai — <span className="text-primary">Servicing, Repair &amp; AMC</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Keep your air conditioning cooling properly and running efficiently with professional AC
              maintenance from licensed HVAC engineers. Servicing, repairs, coil &amp; duct cleaning, gas
              top-ups and annual maintenance contracts — for villas, apartments and businesses across the UAE.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">Book AC Service</Link>
              <a href={WA} className="rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">WhatsApp Us</a>
              <a href={`tel:${PHONE}`} className="rounded-md border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors">Call Now</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85">
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} /> {b}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/ac-maintenance-duct-cleaning-dubai.jpg"
              alt="AGEC technician performing AC duct cleaning in a Dubai apartment"
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Why Choose AGEC</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Dubai&apos;s Reliable AC Maintenance Company</h2>
            <p className="mt-5 text-lg text-text-muted">
              We&apos;re a licensed HVAC &amp; MEP engineering contractor — the same engineers who design and install
              major cooling systems also keep your AC running at its best.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-bg-soft p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <c.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-bg-soft py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>What We Cover</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Complete AC Maintenance &amp; Repair Services</h2>
            <p className="mt-5 text-lg text-text-muted">From a one-off service to a full annual contract — everything your air conditioning needs, done properly.</p>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-text-muted">
            Looking for a yearly contract? Explore our{" "}
            <Link href="/services/maintenance" className="font-semibold text-primary hover:underline">HVAC maintenance &amp; AMC plans</Link>, or add a{" "}
            <Link href="/smart-thermostat-installation-dubai" className="font-semibold text-primary hover:underline">smart thermostat</Link> during your visit.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>How It Works</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Simple, Transparent AC Service</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-border bg-bg-soft p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-white">{i + 1}</div>
                <h3 className="mt-4 font-heading text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNS YOU NEED SERVICE */}
      <section className="bg-bg-soft py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Warning Signs</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Signs Your AC Needs Attention</h2>
            <p className="mt-5 text-lg text-text-muted">Catching these early is the difference between a quick service and an expensive breakdown in peak summer.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {signs.map((s) => (
              <div key={s.title} className="flex gap-4 rounded-xl border border-border bg-white p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-text-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className={eyebrow}>Customer Reviews</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">Rated {GOOGLE_RATING}★ by Our Customers</h2>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-5 py-2.5 text-sm font-semibold text-text shadow-sm transition-colors hover:border-primary">
              <span className="flex gap-0.5 text-primary">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}</span>
              {GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} verified Google reviews
              <ExternalLink className="h-3.5 w-3.5 text-text-muted" />
            </a>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="flex flex-col rounded-xl border border-border bg-bg-soft p-7">
                <div className="flex gap-0.5 text-primary">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}</div>
                <blockquote className="mt-4 flex-1 text-text">{r.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#13212E] font-heading font-bold text-white">{r.initials}</span>
                  <span><b className="block text-sm">{r.name}</b><span className="text-xs text-text-muted">{r.role}</span></span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-text-muted">
            Genuine reviews from our verified Google Business Profile.{" "}
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Read all {GOOGLE_REVIEW_COUNT} on Google →</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-bg-soft py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className={eyebrow}>FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">AC Maintenance — Your Questions Answered</h2>
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
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">AC Maintenance Across the UAE</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {areas.map((a) => (<span key={a} className="rounded-full border border-border bg-bg-soft px-6 py-3 font-semibold text-text">{a}</span>))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Book Your AC Service Today</h2>
          <p className="mt-5 text-lg text-white/85">Keep your AC cooling and your bills down. Same-day and emergency service available across Dubai and the UAE.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-4 font-semibold text-primary hover:bg-white/90 transition-colors"><Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}</a>
            <a href={WA} className="inline-flex items-center gap-2 rounded-md bg-[#13212E] px-7 py-4 font-semibold text-white hover:bg-[#0f1a24] transition-colors"><MessageCircle className="h-4 w-4" /> WhatsApp Us</a>
            <Link href="/book" className="rounded-md border border-white/60 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors">Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
