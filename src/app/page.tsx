import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { CallOrWhatsApp } from "@/components/CallOrWhatsApp";
import { EmergencyStrip } from "@/components/EmergencyStrip";
import { ServiceAreas } from "@/components/ServiceAreas";
import {
  Gauge,
  Snowflake,
  Thermometer,
  Wind,
  Settings,
  ClipboardCheck,
  Wrench,
  Award,
  RefreshCw,
  ShieldCheck,
  Target,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Layers,
  Star,
} from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "@/lib/contact";
import { GOOGLE_REVIEWS_URL, GOOGLE_REVIEWS } from "@/lib/reviews";
import { getGoogleReviewStats } from "@/lib/google-reviews";

export const metadata = buildMetadata({
  title: "HVAC Contractor & AC Maintenance Dubai | AGEC",
  description:
    "Engineer-led HVAC installation, AC maintenance, AMC, air balancing and commissioning across the UAE. Call +971 58 557 5987.",
  path: "",
  languages: {
    en: "https://agec.ae/",
    ar: "https://agec.ae/ar",
    "x-default": "https://agec.ae/",
  },
});

const services = [
  {
    icon: Gauge,
    name: "VRF / VRV Systems",
    href: "/services/vrf-vrv-systems",
    image: "/projects/daikin-vrv-x-business-bay-dubai-rooftop-installation.jpg",
    alt: "Daikin VRV-X variable refrigerant volume system installation in Dubai by AGEC",
    description:
      "Multi-zone climate control with variable refrigerant flow technology for maximum efficiency.",
  },
  {
    icon: Snowflake,
    name: "Chillers",
    href: "/services/chillers",
    image: "/projects/chiller-installation-dubai-agec.jpg",
    alt: "Chiller plant installation by AGEC for commercial project in Dubai",
    description:
      "Air-cooled and water-cooled chiller systems sized and installed for commercial and large-scale residential projects.",
  },
  {
    icon: Thermometer,
    name: "DX Units",
    href: "/services/dx-units",
    image: "/projects/indoor-ahu-installation-refrigerant-piping-dubai.jpg",
    alt: "Indoor air handling unit installation in Dubai by AGEC",
    description:
      "Direct expansion split and packaged units for targeted cooling in offices, retail, and server rooms.",
  },
  {
    icon: Wind,
    name: "Ventilation & Fresh Air",
    href: "/services/ventilation-fresh-air",
    image: "/projects/fresh-air-handling-unit-fahu-dubai-agec.jpg",
    alt: "Fresh Air Handling Unit (FAHU) installation by AGEC in Dubai commercial project",
    description:
      "Mechanical ventilation and fresh air systems designed to meet Dubai Municipality air quality standards.",
  },
  {
    icon: Settings,
    name: "HVAC Design & Consultancy",
    href: "/services/hvac-design",
    image: "/projects/multiple-ahu-installation-hvac-design-dubai.jpg",
    alt: "HVAC design and engineering scale at Dubai commercial project by AGEC",
    description:
      "Heat load calculations, duct sizing, equipment selection, and full MEP coordination.",
  },
  {
    icon: ClipboardCheck,
    name: "Testing & Commissioning",
    href: "/services/testing-commissioning",
    image: "/projects/agec-technician-tab-commissioning-airflow-balometer-dubai.jpg",
    alt: "AGEC technician performing TAB testing and commissioning in Dubai",
    description:
      "System verification, airflow balancing, and performance testing against design specifications.",
  },
  {
    icon: Wrench,
    name: "Maintenance",
    href: "/services/maintenance",
    image: "/projects/agec-maintenance-service-dubai.jpg",
    alt: "AGEC HVAC maintenance in Dubai",
    description:
      "Preventive and corrective maintenance contracts to keep systems running at peak performance.",
  },
];

const reasons = [
  {
    icon: Award,
    name: "Certified Engineering",
    description:
      "Heat load calculations, duct sizing, and system balancing done by qualified engineers — not just installers.",
  },
  {
    icon: RefreshCw,
    name: "Full Lifecycle Support",
    description:
      "From design and installation through testing, commissioning, and AMC — one accountable partner throughout.",
  },
  {
    icon: ShieldCheck,
    name: "Quality Equipment Partners",
    description:
      "Approved brands, AHRI-certified equipment, and proper warranties on every system we install.",
  },
  {
    icon: Target,
    name: "Performance Guaranteed",
    description:
      "Every system tested and commissioned against specification. We don't leave until it's working as designed.",
  },
];

export default async function Home() {
  const { rating: GOOGLE_RATING, count: GOOGLE_REVIEW_COUNT } =
    await getGoogleReviewStats();
  return (
    <>
      <EmergencyStrip />
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center">
        <Image
          src="/projects/daikin-vrv-x-business-bay-dubai-rooftop-installation.jpg"
          alt="Daikin VRV-X variable refrigerant volume system installation on rooftop in Business Bay Dubai by AGEC"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/45" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <h1 className="max-w-4xl font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
            HVAC Contractor and AC Maintenance in Dubai
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Engineer-led installation, maintenance contracts and airflow testing
            for villas, offices and buildings across the UAE.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CallOrWhatsApp
              pathname="/"
              triggerClassName="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors"
            />
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 px-8 py-4 font-medium text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Get a quote
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/80">
            <Link
              href="/ac-amc-dubai#amc-form"
              className="underline-offset-4 hover:text-white hover:underline"
            >
              AMC plans
            </Link>
            <Link
              href="/quote"
              className="underline-offset-4 hover:text-white hover:underline"
            >
              Project enquiries
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/60">
            Established 2022 · 32 Projects · All 7 Emirates · Dubai, UAE
          </p>
          <div className="mt-4">
            <GoogleReviewsBadge className="text-white/90" />
          </div>
        </div>
      </section>

      {/* AC Cleaning Packages */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                AC Cleaning Services
              </p>
              <h2 className="mt-3 font-heading text-4xl font-bold md:text-5xl">
                Professional AC cleaning that protects your investment
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-text-muted">
                Scheduled cleaning maintains efficiency, extends equipment life,
                and ensures indoor air quality. Choose the package that fits your
                system.
              </p>
            </div>
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-lg lg:col-span-2 lg:block">
              <Image
                src="/photos/agec-ac-grille-cleaning-dubai.jpg"
                alt="AGEC technician cleaning an air conditioning return-air grille in Dubai"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wind,
                line1: "Premium AC",
                line2: "Duct Cleaning",
                href: "/ac-duct-cleaning-dubai",
                description:
                  "Complete duct system cleaning including supply and return grills, drain pipe flushing, deep coil cleaning, and full disinfection.",
              },
              {
                icon: Sparkles,
                line1: "Full AC",
                line2: "Cleaning",
                href: "/ac-duct-cleaning-dubai",
                description:
                  "Comprehensive system clean covering grills, ducts, coils, fan motor, blower, and cavity area.",
              },
              {
                icon: Snowflake,
                line1: "Split AC",
                line2: "Cleaning",
                href: "/ac-duct-cleaning-dubai",
                description:
                  "Targeted cleaning for split unit systems. Filter cleaning, coil treatment, and performance verification.",
              },
              {
                icon: Layers,
                line1: "AC Coil",
                line2: "Cleaning",
                href: "/ac-duct-cleaning-dubai",
                description:
                  "Precision coil cleaning to restore heat transfer efficiency and improve cooling performance.",
              },
            ].map((pkg) => (
              <Link
                key={pkg.line1}
                href={pkg.href}
                className="flex flex-col rounded-lg border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <pkg.icon className="h-14 w-14 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 font-heading text-xl font-bold leading-tight">
                  {pkg.line1}
                  <br />
                  {pkg.line2}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                  {pkg.description}
                </p>
                <span className="mt-5 text-sm font-medium text-primary">
                  View Details &rarr;
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-text-muted">
            All packages include professional disinfection and a service
            completion report. Available for residential villas, apartments,
            commercial buildings, and facilities.
          </p>
          <p className="mt-4 text-center text-sm">
            <Link
              href="/ac-amc-dubai"
              className="font-medium text-primary hover:underline"
            >
              AC annual maintenance from AED 250 per machine per visit.
            </Link>
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "32", label: "Projects Delivered" },
              { value: "240 TR", label: "Max Single Project" },
              { value: "7", label: "Emirates Served" },
              { value: "2022", label: "Established" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-5xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-4xl font-bold md:text-5xl">
            Complete HVAC solutions, engineered for the Dubai climate
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-lg border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <service.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-3 font-heading text-xl font-semibold">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-primary">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why AGEC */}
      <section className="bg-bg-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why AGEC
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-4xl font-bold md:text-5xl">
            Engineering-first. From load calculations to long-term performance.
          </h2>
          <div className="mt-14 grid gap-12 lg:grid-cols-5">
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-3">
              {reasons.map((reason) => (
                <div key={reason.name}>
                  <reason.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-4 font-heading text-lg font-semibold">
                    {reason.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative hidden overflow-hidden rounded-lg lg:col-span-2 lg:block">
              <Image
                src="https://images.unsplash.com/photo-1704022632400-79aab2ddb9f6?auto=format&fit=crop&w=1200&q=80"
                alt="Modern building with HVAC ventilation systems"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Strip */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Engineering Standards
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-heading text-3xl font-bold">
            We design, install and commission to recognised HVAC engineering
            standards
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["ASHRAE 111", "SMACNA", "CIBSE"].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border px-5 py-2 text-sm font-medium uppercase tracking-wider text-text-muted"
                >
                  {badge}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Customer Reviews
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
              Rated {GOOGLE_RATING}★ by Dubai clients
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
            </a>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {GOOGLE_REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col rounded-xl border border-border bg-bg-soft p-7"
              >
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-text">
                  {r.text}
                </blockquote>
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
          <p className="mt-8 text-center text-sm text-text-muted">
            Genuine reviews from our verified Google Business Profile.{" "}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Read all {GOOGLE_REVIEW_COUNT} on Google →
            </a>
          </p>
          <div className="mt-6 text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-6 py-3 text-sm font-semibold text-text hover:border-primary hover:text-primary transition-colors"
            >
              Leave a review
            </a>
          </div>
        </div>
      </section>

      <ServiceAreas />

      {/* CTA Band */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white">
            Get a free quotation from our engineering team. Most quotes returned
            within 24 hours.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
          >
            Get a Quote
          </Link>
          <div className="mt-4">
            <a
              href={`tel:${PHONE}`}
              className="text-sm font-medium text-white hover:underline transition-colors"
            >
              Or call {PHONE_DISPLAY} &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex items-start gap-4">
              <Phone className="mt-0.5 h-6 w-6 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-heading font-semibold">Phone</p>
                <a
                  href="tel:+971585575987"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  +971 58 557 5987
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-0.5 h-6 w-6 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-heading font-semibold">Email</p>
                <a
                  href="mailto:a.altaher@agec.ae"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  a.altaher@agec.ae
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-6 w-6 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-heading font-semibold">Location</p>
                <p className="text-text-muted">Dubai, UAE</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="font-heading text-lg font-semibold">Prefer to talk?</p>
            <p className="mt-1 text-sm text-text-muted">
              Call or WhatsApp anytime, 24/7. We respond within 1 hour.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
