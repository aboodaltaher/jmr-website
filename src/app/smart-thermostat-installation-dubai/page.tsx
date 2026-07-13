import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  BadgeCheck,
  Zap,
  Clock,
  Wifi,
  Smartphone,
  CalendarClock,
  Brain,
  MapPin,
  Plane,
  Droplets,
  BarChart3,
  BellRing,
  Target,
  Lightbulb,
  Phone,
  MessageCircle,
  Check,
  type LucideIcon,
} from "lucide-react";

const PHONE = "+971553633139";
const PHONE_DISPLAY = "+971 55 363 3139";
const WA = "https://wa.me/971553633139";
const CANONICAL = "/smart-thermostat-installation-dubai";

export const metadata: Metadata = {
  title:
    "Smart Thermostat Installation Dubai | Google Nest & ecobee Installer UAE | AGEC",
  description:
    "Authorized supplier & professional installer of Google Nest & ecobee smart thermostats in Dubai & the UAE. Free compatibility check, C-wire installation, same-day service. Call +971 55 363 3139.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Smart Thermostat Installation Dubai | Google Nest & ecobee Installer UAE",
    description:
      "Authorized supplier & professional installer of Google Nest & ecobee smart thermostats across Dubai & the UAE. Free compatibility check & expert C-wire installation.",
    url: "https://agec.ae/smart-thermostat-installation-dubai",
    siteName: "AGEC",
    type: "website",
  },
};

/* ----------------------------- CONTENT DATA ----------------------------- */

const trustBadges = [
  "Authorized Nest & ecobee Installer",
  "Licensed & Insured HVAC Engineers",
  "Free Compatibility Check",
  "Same-Day Service Available",
  "Workmanship Guarantee",
];

const whyCards: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ShieldCheck,
    title: "Licensed HVAC Engineers",
    desc: "Installations by trained, insured technicians following ASHRAE and Dubai Municipality standards — not general handymen.",
  },
  {
    icon: BadgeCheck,
    title: "Free Compatibility Check",
    desc: "We confirm your wiring and HVAC control system are ready — and advise on any C-wire or interface needed — before you commit to anything.",
  },
  {
    icon: Zap,
    title: "Genuine, Warrantied Devices",
    desc: "Authentic Google Nest and ecobee thermostats supplied with full manufacturer warranty plus our workmanship guarantee.",
  },
  {
    icon: Clock,
    title: "Same-Day & UAE-Wide",
    desc: "Fast response across all seven emirates, with same-day installation available for standard, compatible systems in Dubai.",
  },
  {
    icon: BarChart3,
    title: "Real Energy Savings",
    desc: "Correct configuration for UAE cooling loads — scheduling, geofencing and eco modes tuned to actually reduce your DEWA bill.",
  },
  {
    icon: Wifi,
    title: "Smart Home Integration",
    desc: "We connect your thermostat to Wi-Fi, Google Home, Alexa and your wider smart-home setup, then train you to use it.",
  },
];

type Product = {
  name: string;
  brand: string;
  tag: string;
  badge?: string;
  image: string;
  alt: string;
  fit: "cover" | "contain";
  desc: string;
  chips: string[];
  features: string[];
  details: { label: string; value: string }[];
};

const products: Product[] = [
  {
    name: "Google Nest Thermostat (4th Generation)",
    brand: "Google Nest",
    tag: "Most Popular",
    image: "/images/google-nest-thermostat-4th-generation-dubai.png",
    alt: "Google Nest Learning Thermostat 4th Generation supplied and installed in Dubai",
    fit: "contain",
    desc: "The smartest way to cool a UAE home. The 4th-gen Nest learns your routine, auto-adjusts with AI and Soli sensing, and lowers your bill — in a premium mirrored finish.",
    chips: ["AI Auto-Schedule", "Google Home", "Works with Alexa"],
    features: [
      "Auto-scheduling that learns your comfort preferences",
      "Nest app energy history & savings tips",
      "Soli motion & presence sensing",
      "Elegant edge-to-edge display",
    ],
    details: [
      { label: "Key Features", value: "AI auto-scheduling, Home/Away routines, Soli presence sensing, remote sensor support, quick-schedule presets." },
      { label: "Benefits", value: "Hands-off comfort, lower DEWA bills, no manual programming, whole-family control." },
      { label: "Ideal For", value: "Villas, apartments & smart homes wanting a premium, automatic experience." },
      { label: "Energy Savings", value: "Up to ~15–20% off cooling energy with Eco temperatures & scheduling." },
      { label: "Smart Home", value: "Google Home native; supports Matter & leading smart-home platforms." },
      { label: "Voice", value: "Google Assistant + Amazon Alexa." },
      { label: "App", value: "Google Home app (iOS & Android) — remote control, schedules, energy reports." },
      { label: "Warranty", value: "Manufacturer warranty + AGEC installation guarantee." },
      { label: "Pro Install Benefit", value: "Correct wiring, C-wire where needed, and UAE-tuned cooling configuration." },
    ],
  },
  {
    name: "ecobee Smart Thermostat Premium",
    brand: "ecobee",
    tag: "Best Overall",
    image: "/images/ecobee-smart-thermostat-premium-dubai.jpg",
    alt: "ecobee Smart Thermostat Premium supplied and installed in the UAE",
    fit: "cover",
    desc: "The flagship. Built-in Alexa, a premium sensor for room-by-room balancing, plus air-quality monitoring — ideal for larger villas and comfort-focused homes.",
    chips: ["Alexa Built-In", "Smart Sensor", "Air Quality"],
    features: [
      "SmartSensor for room-by-room temperature balancing",
      "Built-in Alexa speaker & voice control",
      "Indoor air-quality monitor",
      "Elegant zinc casing & smudge-resistant glass",
    ],
    details: [
      { label: "Key Features", value: "Included SmartSensor, radar occupancy, air-quality monitor, built-in Alexa, Smart Home/Away." },
      { label: "Benefits", value: "Balanced comfort across rooms, healthier air, voice control without extra speakers." },
      { label: "Ideal For", value: "Large villas, multi-room homes & premium offices." },
      { label: "Energy Savings", value: "ecobee reports up to ~26% annual HVAC savings with eco+ features." },
      { label: "Smart Home", value: "Works with Alexa, Google Assistant, SmartThings, Matter & HomeKit." },
      { label: "Voice", value: "Built-in Alexa + Google Assistant & Siri (via HomeKit)." },
      { label: "App", value: "ecobee app — remote control, schedules, detailed energy reports." },
      { label: "Warranty", value: "Manufacturer warranty + AGEC installation guarantee." },
      { label: "Pro Install Benefit", value: "Optimal sensor placement & multi-zone tuning by HVAC engineers." },
    ],
  },
  {
    name: "ecobee Smart Thermostat Enhanced",
    brand: "ecobee",
    tag: "Great Value",
    image: "/images/ecobee-smart-thermostat-enhanced-dubai.jpg",
    alt: "ecobee Smart Thermostat Enhanced installed on a wall in Dubai",
    fit: "cover",
    desc: "The sweet spot of value and features. Smart sensor support, occupancy detection and eco+ savings, without the built-in speaker — perfect for most UAE homes.",
    chips: ["Sensor-Ready", "eco+ Savings", "Occupancy"],
    features: [
      "Supports optional SmartSensors for hot-spot rooms",
      "Radar-based occupancy detection",
      "eco+ energy-saving automation",
      "Clean, bright touchscreen",
    ],
    details: [
      { label: "Key Features", value: "Occupancy sensing, eco+ optimizations, SmartSensor compatibility, Smart Home/Away." },
      { label: "Benefits", value: "Strong savings and comfort at a mid-range price; expandable with sensors." },
      { label: "Ideal For", value: "Apartments & medium villas wanting great value." },
      { label: "Energy Savings", value: "Meaningful cooling reductions via eco+ & scheduling." },
      { label: "Smart Home", value: "Works with Alexa, Google Assistant, SmartThings, Matter & HomeKit." },
      { label: "Voice", value: "Alexa, Google Assistant & Siri (via HomeKit) using your existing speakers." },
      { label: "App", value: "ecobee app — full remote control & energy reports." },
      { label: "Warranty", value: "Manufacturer warranty + AGEC installation guarantee." },
      { label: "Pro Install Benefit", value: "Correct HVAC configuration & sensor strategy for your layout." },
    ],
  },
  {
    name: "ecobee Smart Thermostat Essential",
    brand: "ecobee",
    tag: "Best Value",
    image: "/images/ecobee-smart-thermostat-essential-dubai.jpg",
    alt: "ecobee Smart Thermostat Essential installed in a Dubai apartment",
    fit: "cover",
    desc: "ecobee's current entry-level smart thermostat. Full app control, scheduling and eco+ energy savings in a bright, modern design — a smart, affordable upgrade for UAE homes.",
    chips: ["App Control", "eco+ Savings", "Alexa & Google"],
    features: [
      "Full smartphone app control over Wi-Fi",
      "Custom & smart scheduling",
      "eco+ automatic energy savings",
      "Bright, modern touchscreen",
    ],
    details: [
      { label: "Key Features", value: "Wi-Fi app control, scheduling, eco+ savings, Smart Home/Away." },
      { label: "Benefits", value: "Affordable entry into smart cooling with genuine savings and simple control." },
      { label: "Ideal For", value: "Apartments, studios, rentals & budget-conscious upgrades." },
      { label: "Energy Savings", value: "Cut waste with schedules & eco+ modes." },
      { label: "Smart Home", value: "Works with Alexa, Google Assistant, SmartThings & Matter." },
      { label: "Voice", value: "Alexa & Google Assistant via your existing speakers." },
      { label: "App", value: "ecobee app — control your AC from anywhere." },
      { label: "Warranty", value: "Manufacturer warranty + AGEC installation guarantee." },
      { label: "Pro Install Benefit", value: "Fast, tidy install with correct wiring & Wi-Fi setup." },
    ],
  },
];

const brands = [
  "Daikin", "Mitsubishi Electric", "Mitsubishi Heavy", "O General", "Carrier",
  "Trane", "York", "Lennox", "Rheem", "Goodman", "Samsung", "LG", "Fujitsu",
  "Hitachi", "Gree", "Midea", "AUX", "Toshiba", "Bosch",
];

const steps: { title: string; desc: string }[] = [
  { title: "Contact Us", desc: "Call, WhatsApp or request a callback. Tell us your property type and AC system." },
  { title: "Free Compatibility Check", desc: "We verify your wiring and control system and confirm the right thermostat for you." },
  { title: "Schedule Visit", desc: "Pick a convenient slot — same-day and weekend appointments available." },
  { title: "Professional Installation", desc: "Licensed technicians mount and wire your thermostat cleanly and safely." },
  { title: "Testing", desc: "We test heating/cooling calls, fan and modes to confirm flawless operation." },
  { title: "Wi-Fi Setup", desc: "Your thermostat is connected to your home network and cloud account." },
  { title: "App Configuration", desc: "We set up the Nest/ecobee app, schedules, geofencing and eco modes." },
  { title: "Customer Training", desc: "A hands-on walkthrough so you and your family get the most from day one." },
];

const benefits: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Lightbulb, title: "Reduce Electricity Bills", desc: "Stop cooling empty rooms and cut DEWA costs with smart scheduling and eco modes." },
  { icon: Smartphone, title: "Remote Control", desc: "Adjust your AC from your phone — from the office, the mall or another country." },
  { icon: CalendarClock, title: "Smart Scheduling", desc: "Automatic temperature routines for work, sleep and weekends." },
  { icon: Brain, title: "AI Learning", desc: "Nest learns your habits and adjusts automatically for effortless comfort." },
  { icon: MapPin, title: "Geofencing", desc: "Cools your home as you head back and eases off when everyone leaves." },
  { icon: Plane, title: "Vacation Mode", desc: "Save energy while you travel, then return to a perfectly cool home." },
  { icon: Droplets, title: "Humidity Monitoring", desc: "Track and manage humidity for healthier, more comfortable indoor air." },
  { icon: BarChart3, title: "Energy Reports", desc: "See exactly where your energy goes with clear monthly usage insights." },
  { icon: BellRing, title: "Smart Alerts", desc: "Get notified about extreme temperatures or system issues before they cost you." },
  { icon: Target, title: "Comfort Optimization", desc: "Room-balancing sensors keep every space at your ideal temperature." },
];

const areas = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Umm Al Quwain", "Fujairah"];

const faqs: { q: string; a: string }[] = [
  { q: "Is the Google Nest Thermostat compatible with my AC in Dubai?", a: "Most Dubai homes use 24V ducted or ducted-split HVAC systems, which are compatible with Google Nest. Compatibility ultimately depends on your existing wiring and control system, so we provide a free compatibility check before installation and advise on any wiring modifications, such as adding a C-wire." },
  { q: "Is ecobee compatible with Daikin systems?", a: "ecobee works with most conventional and heat-pump 24V systems, including many Daikin ducted and ducted-split units. Some inverter or proprietary Daikin controllers require an interface module. Our free assessment confirms compatibility for your exact model." },
  { q: "Can you install a C-wire if my system doesn't have one?", a: "Yes — C-wire (common wire) installation is one of our core services. If your thermostat needs continuous power, our licensed technicians run a proper C-wire or fit a compatible power extender kit safely and cleanly." },
  { q: "How much does smart thermostat installation cost in Dubai?", a: "Standard installation is affordably priced and quoted upfront after your free compatibility check. Final cost depends on your HVAC type, whether a C-wire or wiring modification is needed, and the number of zones. You always receive a transparent, no-obligation quote before any work begins." },
  { q: "Can I control the thermostat from my phone?", a: "Yes. Both Google Nest and ecobee offer full mobile app control over Wi-Fi, so you can adjust temperature, set schedules and monitor energy use from anywhere in the world." },
  { q: "Does it work with Amazon Alexa?", a: "ecobee thermostats work with Amazon Alexa — and ecobee Premium has Alexa built in. Google Nest works with Google Assistant and also supports Alexa voice commands for temperature control." },
  { q: "Does it work with Google Home?", a: "Yes. Google Nest integrates natively with Google Home, and ecobee also connects to Google Assistant — so you can control your AC by voice and within your smart-home routines." },
  { q: "Can a smart thermostat really save electricity in the UAE?", a: "Yes. With scheduling, geofencing, AI learning and eco modes, smart thermostats typically cut cooling energy by 10–23% — significant given the UAE's long, hot cooling season and DEWA tariffs." },
  { q: "Is a smart thermostat suitable for villas?", a: "Absolutely. Villas often have multiple AC zones, making smart thermostats ideal for room-by-room scheduling and major savings. We handle multi-zone villa installations across Dubai and the UAE." },
  { q: "Is a smart thermostat suitable for apartments?", a: "Yes. Whether your apartment has a ducted fan-coil unit or a split system, we can assess compatibility and install a Nest or ecobee cleanly, including any required C-wire or interface." },
  { q: "Do you offer same-day installation in Dubai?", a: "In most cases, yes. For standard, compatible systems within Dubai we offer same-day or next-day installation. Message us on WhatsApp for current availability." },
  { q: "Are your technicians licensed and insured?", a: "Yes. AGEC is a licensed engineering contracting company, and installations are carried out by trained, insured HVAC technicians following ASHRAE and Dubai Municipality standards." },
  { q: "What warranty do I get?", a: "You receive the full manufacturer warranty on your Google Nest or ecobee device (typically 1–3 years depending on model) plus our workmanship guarantee on the installation." },
  { q: "Which is better — Google Nest or ecobee?", a: "Both are excellent. Nest offers AI auto-scheduling and a premium minimalist design; ecobee Premium adds built-in Alexa, a room sensor and air-quality monitoring. We recommend the best fit after reviewing your home and HVAC setup." },
  { q: "Can you install thermostats in offices, shops and restaurants?", a: "Yes. We handle both residential and commercial installations — offices, shops, restaurants and hotels — including multi-unit and multi-zone rollouts with documentation." },
  { q: "Do you serve areas outside Dubai?", a: "Yes. We install across all seven emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah." },
  { q: "Will installation damage my wall or existing wiring?", a: "No. Our technicians work cleanly and professionally, reusing existing wiring where possible and finishing neatly. Any wall work needed for a C-wire is done tidily and discreetly." },
  { q: "How long does installation take?", a: "A standard single-zone installation is usually completed in under 90 minutes, including Wi-Fi setup, app configuration and a training walkthrough. Multi-zone or commercial jobs are scheduled accordingly." },
  { q: "Do I need a separate device for each AC unit or zone?", a: "Generally yes — each independently controlled zone or AC unit needs its own thermostat. During your free assessment we map your zones and recommend the right number of units." },
  { q: "Can it work with my existing Wi-Fi?", a: "Yes. Nest and ecobee connect to standard home Wi-Fi (2.4GHz networks supported). We handle the full connection and account setup during installation." },
  { q: "What happens if the internet goes down?", a: "Your thermostat keeps controlling your AC locally using its stored schedule — you simply lose remote/app control until the connection returns. Comfort is never interrupted." },
  { q: "Is the Google Nest 4th Generation available in the UAE?", a: "Yes. We supply the genuine Google Nest Thermostat (4th Generation) in the UAE with full warranty and professional installation." },
  { q: "Do you supply the thermostat, or do I buy it myself?", a: "We're an authorized supplier — you can buy the device and installation together as a complete package, with genuine, warrantied hardware. We can also install a unit you already own." },
  { q: "Can I upgrade from an old or basic thermostat?", a: "Yes. Thermostat upgrades are a specialty. We safely remove your old unit, handle any wiring changes and install your new smart thermostat." },
  { q: "Does it work with a chiller or VRF/VRV system?", a: "Many chiller fan-coil and VRF/VRV systems can be integrated using the correct interface or thermostat type. As an HVAC/MEP contractor, we assess these advanced systems and recommend a compatible solution." },
  { q: "Can I set different temperatures for different rooms?", a: "Yes — with ecobee SmartSensors or multiple thermostats, you can balance and schedule temperatures room by room. Ideal for large villas." },
  { q: "Do you provide after-sales support?", a: "Absolutely. We offer ongoing after-sales support, troubleshooting and configuration help — plus emergency assistance if you need it." },
  { q: "Can you install multiple thermostats in one visit?", a: "Yes. Multi-unit installations for large villas, offices and commercial sites are handled efficiently, often in a single scheduled visit." },
  { q: "Will a smart thermostat void my AC warranty?", a: "No. A correctly installed smart thermostat is a control upgrade and does not affect your AC's warranty. Our professional installation ensures everything is done to standard." },
  { q: "How do I book a free compatibility check?", a: "Simply call or WhatsApp us at +971 55 363 3139, or email sales@jmrtechnical.com. Tell us your property type and AC system, and we'll arrange your free assessment." },
  { q: "Do you offer emergency or urgent support?", a: "Yes. As an established HVAC contractor we provide fast-response and emergency support across Dubai and the UAE — contact us and we'll prioritize urgent cases." },
];

/* ------------------------------ JSON-LD ------------------------------ */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Smart Thermostat Supply & Installation",
  provider: { "@id": "https://agec.ae/#business" },
  areaServed: areas,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Smart Thermostat Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Nest Thermostat Installation Dubai" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ecobee Thermostat Installation Dubai" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "C-Wire Installation Dubai" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free HVAC Compatibility Check" } },
    ],
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://agec.ae/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://agec.ae/services/" },
    { "@type": "ListItem", position: 3, name: "Smart Thermostat Installation Dubai", item: "https://agec.ae/smart-thermostat-installation-dubai/" },
  ],
};

/* ------------------------------- HELPERS ------------------------------- */

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

/* -------------------------------- PAGE -------------------------------- */

export default function SmartThermostatPage() {
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
          <span className="text-text">Smart Thermostat Installation Dubai</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13212E] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(1100px 560px at 82% -10%, rgba(212,118,46,.32), transparent)" }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className={eyebrow}>Dubai &amp; UAE · Same-Day Installation</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.03] md:text-6xl">
              Smart Thermostat Installation in Dubai —{" "}
              <span className="text-primary">Google Nest &amp; ecobee</span> Experts
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Authorized supplier and professional installer of Google Nest and ecobee smart
              thermostats across Dubai and the UAE. Cut your DEWA cooling bill, control your AC
              from your phone, and let licensed HVAC engineers handle everything — including
              C-wire installation and a <strong className="text-white">free compatibility check</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">
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
                alt="Google Nest Learning Thermostat 4th Generation professionally installed in a Dubai home"
                width={300}
                height={300}
                priority
                className="relative max-h-[250px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="mt-4 flex justify-between gap-3 border-t border-white/10 pt-5 text-center">
              <div className="flex-1">
                <b className="block font-heading text-2xl text-white">‑23%</b>
                <span className="text-xs uppercase tracking-wide text-white/50">Cooling Bill</span>
              </div>
              <div className="flex-1">
                <b className="block font-heading text-2xl text-white">&lt;90min</b>
                <span className="text-xs uppercase tracking-wide text-white/50">Install Time</span>
              </div>
              <div className="flex-1">
                <b className="block font-heading text-2xl text-white">7</b>
                <span className="text-xs uppercase tracking-wide text-white/50">Emirates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Why Choose AGEC</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
              Dubai&apos;s Trusted Smart Thermostat Specialists
            </h2>
            <p className="mt-5 text-lg text-text-muted">
              As a licensed HVAC &amp; MEP engineering contractor, we understand UAE cooling
              systems from the ductwork up — so your Nest or ecobee is installed right, first time.
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

      {/* PRODUCTS */}
      <section id="products" className="bg-bg-soft py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Smart Thermostats We Supply &amp; Install</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
              Google Nest &amp; ecobee — Supplied, Installed &amp; Configured
            </h2>
            <p className="mt-5 text-lg text-text-muted">
              Every device includes professional installation, Wi-Fi setup, app configuration and hands-on training.
            </p>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.name} className="flex flex-col overflow-hidden rounded-xl border border-border bg-white">
                <div className="relative aspect-[4/3] bg-bg">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-[#13212E] px-2.5 py-1 text-xs font-semibold text-white">{p.brand}</span>
                  {p.tag && <span className="absolute right-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-white">{p.tag}</span>}
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width:1024px) 50vw, 25vw"
                    className={p.fit === "contain" ? "object-contain p-4" : "object-cover"}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-heading text-lg font-semibold leading-tight">{p.name}</h3>
                  <p className="text-sm text-text-muted">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.chips.map((c) => (
                      <span key={c} className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-text">{c}</span>
                    ))}
                  </div>
                  <ul className="mt-1 space-y-1.5 text-sm text-text">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={3} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <details className="mt-auto border-t border-border pt-3">
                    <summary className="cursor-pointer text-sm font-semibold text-primary">Full specs &amp; benefits</summary>
                    <div className="mt-3 space-y-2 text-sm">
                      {p.details.map((d) => (
                        <p key={d.label} className="text-text-muted">
                          <span className="font-semibold text-text">{d.label}:</span> {d.value}
                        </p>
                      ))}
                    </div>
                  </details>
                  <Link href="/quote" className="mt-2 rounded-md bg-primary px-5 py-3 text-center font-semibold text-white hover:bg-primary-dark transition-colors">
                    Get a Quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPATIBILITY */}
      <section id="compatibility" className="bg-[#13212E] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>HVAC Compatibility</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-5xl">
              Compatible With Every Major HVAC Brand in the UAE
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Nest and ecobee work with the vast majority of ducted, ducted-split and conventional
              24V systems used across the Emirates.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {brands.map((b) => (
              <div key={b} className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-center font-semibold text-white/90">
                {b}
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-primary/40 bg-primary/10 p-7">
            <p className="max-w-2xl text-white/85">
              <strong className="text-white">Compatibility depends on your existing wiring and HVAC control system</strong> —
              not just the AC brand. Some inverter, VRF/VRV or proprietary controllers need a simple
              interface, and some systems require a C-wire (which we install). That&apos;s why we start
              with a <strong className="text-white">free compatibility assessment</strong>.
            </p>
            <Link href="/book" className="rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">
              Check My System — Free
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>How It Works</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
              Our 8-Step Professional Installation Process
            </h2>
            <p className="mt-5 text-lg text-text-muted">
              A smooth, transparent experience from first call to final training — usually under 90 minutes.
            </p>
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

      {/* SAVINGS BAND */}
      <section className="bg-primary py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center sm:grid-cols-4">
          {[["10–23%", "Cooling energy saved"], ["<90 min", "Standard install time"], ["7", "Emirates covered"], ["1–3 yr", "Manufacturer warranty"]].map(([n, l]) => (
            <div key={l}>
              <b className="block font-heading text-4xl font-bold">{n}</b>
              <span className="text-white/85">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="bg-bg-soft py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>The Benefits</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
              Why a Smart Thermostat Pays for Itself in the UAE
            </h2>
            <p className="mt-5 text-lg text-text-muted">
              In a climate where AC runs most of the year, smart control is one of the fastest ways
              to cut your electricity bill and live more comfortably.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 xl:grid-cols-5">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 rounded-xl border border-border bg-white p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <b.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold">{b.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="bg-[#13212E] py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className={eyebrow}>Free · No Obligation</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
            Book Your Free Compatibility Check Today
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Find out whether your AC is smart-ready, which thermostat suits you best, and get a
            transparent fixed quote — with zero pressure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors">
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
            <a href={WA} className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className={eyebrow}>FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
              Smart Thermostat Installation — Your Questions Answered
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-lg border border-border bg-bg-soft">
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
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className={eyebrow}>Service Areas</p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Smart Thermostat Installation Across the UAE
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <span key={a} className="rounded-full border border-border bg-white px-6 py-3 font-semibold text-text shadow-sm">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to Make Your AC Smart?
          </h2>
          <p className="mt-5 text-lg text-white/85">
            Join hundreds of UAE homes and businesses saving energy with professionally installed
            Google Nest and ecobee thermostats.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE}`} className="rounded-md bg-white px-7 py-4 font-semibold text-primary hover:bg-white/90 transition-colors">
              Call Now
            </a>
            <a href={WA} className="rounded-md bg-[#13212E] px-7 py-4 font-semibold text-white hover:bg-[#0f1a24] transition-colors">
              WhatsApp Us
            </a>
            <Link href="/book" className="rounded-md border border-white/60 px-7 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
              Book Free Check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
