import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "AGEC — HVAC, MEP & Maintenance Contractor in Dubai",
  description:
    "Design, installation, commissioning, and maintenance of HVAC, MEP, and building systems in Dubai. Serving residential, commercial & villa projects. Engineered to Perform.",
};

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
    image: "/projects/jmr-technician-tab-commissioning-airflow-balometer-dubai.jpg",
    alt: "AGEC technician performing TAB testing and commissioning in Dubai",
    description:
      "System verification, airflow balancing, and performance testing against design specifications.",
  },
  {
    icon: Wrench,
    name: "Maintenance",
    href: "/services/maintenance",
    image: "/projects/jmr-maintenance-service-dubai.jpg",
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center">
        <Image
          src="/projects/daikin-vrv-x-business-bay-dubai-rooftop-installation.jpg"
          alt="Daikin VRV-X variable refrigerant volume system installation on rooftop in Business Bay Dubai by AGEC"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/45" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <h1 className="max-w-4xl font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
            Advanced HVAC Solutions for Dubai&apos;s Most Demanding Projects
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/80">
            Design, installation, commissioning, and maintenance of VRF, chiller,
            and ventilation systems — from concept to long-term performance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-white/30 px-8 py-4 font-medium text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/60">
            Established 2022 · 30+ Projects · 3 Emirates · Dubai, UAE
          </p>
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
                src="https://images.unsplash.com/photo-1718203862467-c33159fdc504?auto=format&fit=crop&w=800&q=80"
                alt="Wall-mounted air conditioning unit"
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
                href: "/services/ac-cleaning/premium-duct",
                description:
                  "Complete duct system cleaning including supply and return grills, drain pipe flushing, deep coil cleaning, and full disinfection.",
              },
              {
                icon: Sparkles,
                line1: "Full AC",
                line2: "Cleaning",
                href: "/services/ac-cleaning/full-ac",
                description:
                  "Comprehensive system clean covering grills, ducts, coils, fan motor, blower, and cavity area.",
              },
              {
                icon: Snowflake,
                line1: "Split AC",
                line2: "Cleaning",
                href: "/services/ac-cleaning/split-ac",
                description:
                  "Targeted cleaning for split unit systems. Filter cleaning, coil treatment, and performance verification.",
              },
              {
                icon: Layers,
                line1: "AC Coil",
                line2: "Cleaning",
                href: "/services/ac-cleaning/coil-cleaning",
                description:
                  "Precision coil cleaning to restore heat transfer efficiency and improve cooling performance.",
              },
            ].map((pkg) => (
              <Link
                key={pkg.href}
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
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "30+", label: "Projects Delivered" },
              { value: "240 TR", label: "Max Single Project" },
              { value: "3", label: "Emirates Served" },
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
            Compliance &amp; Standards
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-heading text-3xl font-bold">
            Authorized HVAC contractor, compliant with regional and
            international standards
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["ASHRAE 111", "SMACNA", "CIBSE", "Dubai Municipality", "DEWA"].map(
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

      {/* CTA Band */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get a free quotation from our engineering team. Most quotes returned
            within 48 hours.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
          >
            Get a Quote
          </Link>
          <div className="mt-4">
            <Link
              href="/book"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Or book a service &rarr;
            </Link>
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
                  href="tel:+971553633139"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  +971 55 363 3139
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-0.5 h-6 w-6 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-heading font-semibold">Email</p>
                <a
                  href="mailto:sales@jmrtechnical.com"
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  sales@jmrtechnical.com
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
              Call us during business hours, Sun–Thu 8am–6pm GST.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
