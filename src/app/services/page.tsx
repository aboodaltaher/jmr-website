import type { Metadata } from "next";
import Link from "next/link";
import {
  Wind,
  Snowflake,
  Thermometer,
  Fan,
  ClipboardCheck,
  Gauge,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | AGEC",
  description:
    "End-to-end HVAC services in Dubai: VRF/VRV systems, chillers, DX units, ventilation, HVAC design, testing & commissioning, and maintenance contracts.",
};

const services = [
  {
    icon: Wind,
    name: "VRF / VRV Systems",
    href: "/services/vrf-vrv-systems",
    description:
      "Variable Refrigerant Flow systems for buildings requiring zoned cooling, energy efficiency, and quiet operation. We design, install, and commission VRF systems from leading manufacturers for villas, offices, and mid-rise buildings.",
  },
  {
    icon: Snowflake,
    name: "Chillers",
    href: "/services/chillers",
    description:
      "Air-cooled and water-cooled chiller systems for commercial buildings, hotels, and industrial facilities. Complete piping design, pump selection, and chilled water system commissioning.",
  },
  {
    icon: Thermometer,
    name: "DX Units",
    href: "/services/dx-units",
    description:
      "Direct Expansion systems including split units, ducted splits, cassettes, and concealed units for residential and small commercial applications. Reliable cooling solutions, properly sized and installed.",
  },
  {
    icon: Fan,
    name: "Ventilation & Fresh Air",
    href: "/services/ventilation-fresh-air",
    description:
      "Mechanical ventilation, fresh air handling units, and exhaust systems engineered for the Dubai climate. We size, balance, and commission ventilation to meet indoor air quality standards.",
  },
  {
    icon: ClipboardCheck,
    name: "HVAC Design & Consultancy",
    href: "/services/hvac-design",
    description:
      "Heat load calculations, duct sizing, equipment selection, and full HVAC system design. Whether you need a single villa or a multi-floor commercial fit-out, we deliver design documentation that meets code and performs in practice.",
  },
  {
    icon: Gauge,
    name: "Testing & Commissioning",
    href: "/services/testing-commissioning",
    description:
      "Independent testing, balancing, and commissioning services. Airflow measurement, water flow balancing, controls verification, and full T&C reports — every system handed over against specification.",
  },
  {
    icon: Wrench,
    name: "Maintenance",
    href: "/services/maintenance",
    description:
      "Annual maintenance contracts (AMC), reactive servicing, and emergency callouts. Scheduled preventive maintenance extends equipment life and protects warranties. Available for residential and commercial clients.",
  },
];

const steps = [
  { number: "01", name: "Consultation", description: "Understand the project scope and requirements" },
  { number: "02", name: "Design & Quote", description: "Heat load calculations, system design, transparent quote" },
  { number: "03", name: "Procurement", description: "Source approved equipment with proper warranties" },
  { number: "04", name: "Installation", description: "Qualified technicians, on schedule, to specification" },
  { number: "05", name: "Commissioning & Handover", description: "Tested, balanced, documented, and ready" },
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            End-to-end HVAC services for every project type
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">
            From heat load calculations and design through installation,
            commissioning, and long-term maintenance — AGECdelivers complete
            HVAC solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-lg border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <service.icon className="h-16 w-16 text-primary" strokeWidth={1.5} />
                <h2 className="mt-5 font-heading text-2xl font-bold">
                  {service.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-primary">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            How We Work
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-4xl font-bold md:text-5xl">
            A clear process, from first call to final commissioning
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="font-heading text-4xl font-bold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold">
                  {step.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </div>
            ))}
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
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Tell us about your project and we&apos;ll recommend the right
            approach.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
          >
            Get a Quote
          </Link>
          <div className="mt-4">
            <Link
              href="/contact"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Or speak to an engineer &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
