import { buildMetadata } from "@/lib/metadata";
import { PROJECTS_DELIVERED } from "@/lib/company";
import {
  PenLine,
  Package,
  Wrench,
  Settings,
  ClipboardCheck,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { getProjectBySlug } from "@/data/projects";

export const metadata = buildMetadata({
  title: "VRF Installation in Dubai | VRV Systems & Maintenance | AGEC",
  description:
    "VRF installation in Dubai: design, installation and commissioning of VRF/VRV systems for villas, offices and buildings, plus VRF and FCU maintenance.",
  path: "/services/vrf-vrv-systems",
});

const linkClass = "text-primary underline underline-offset-2 hover:text-primary-dark";

export default function VrfVrvSystems() {
  // Case studies referenced in the maintenance section. Names and capacities come from the case-study data.
  const mamzar = getProjectBySlug("vrf-villa-al-mamzar-dubai");
  const basil = getProjectBySlug("basil-mall-ajman");

  return (
    <ServiceDetailLayout
      slug="services/vrf-vrv-systems"
      ctaBar
      title="VRF / VRV Systems"
      h1="VRF Installation in Dubai"
      heroImage="/projects/daikin-vrv-x-business-bay-dubai-rooftop-installation.jpg"
      heroImageAlt="Daikin VRV-X variable refrigerant volume system installation on rooftop in Business Bay Dubai by AGEC"
      intro="VRF and VRV installation and maintenance — multi-zone climate control with variable refrigerant flow, engineered for Dubai's extreme cooling demands."
      overview={
        <>
          <p>
            Variable Refrigerant Flow (VRF) systems — also known as Variable
            Refrigerant Volume (VRV) — are the most advanced approach to
            multi-zone air conditioning. Unlike conventional systems that operate
            at fixed capacity, VRF technology modulates compressor speed and
            refrigerant flow to match the exact cooling demand across multiple
            indoor zones simultaneously.
          </p>
          <p>
            In Dubai&apos;s climate, where cooling loads fluctuate significantly
            between perimeter and interior zones, VRF systems deliver measurable
            efficiency gains. Each indoor unit operates independently, allowing
            precise temperature control — a boardroom, a server room, and an
            open-plan office can all maintain different setpoints from a single
            outdoor unit.
          </p>
          <p>
            AGEC designs and installs VRF systems from major manufacturers
            including Daikin, Mitsubishi Electric, and Carrier. We handle the
            full engineering scope: refrigerant piping layout, branch selector
            sizing, control system programming, and final commissioning with
            capacity verification. For heat recovery applications, we specify
            3-pipe VRF systems that can simultaneously cool one zone while
            heating another — common in buildings with mixed-use floors or
            north/south exposure variation.
          </p>
        </>
      }
      whenYouNeedIt={[
        "Multi-story office buildings requiring independent zone control",
        "Luxury villas with multiple living areas and bedrooms at different setpoints",
        "Retail spaces with varying occupancy and solar exposure throughout the day",
        "Hotels and serviced apartments requiring individual room temperature control",
        "Renovation projects where ductwork space is limited or unavailable",
        "Mixed-use buildings with simultaneous heating and cooling requirements",
      ]}
      whatWeDo={[
        {
          icon: PenLine,
          name: "System Design & Engineering",
          description:
            "Refrigerant piping layout, branch selector sizing, and capacity calculations for Dubai's peak cooling loads. Full design documentation for consultant approval.",
        },
        {
          icon: Package,
          name: "Equipment Selection",
          description:
            "Manufacturer-neutral selection from Daikin, Mitsubishi Electric, Carrier, and other tier-one brands based on project requirements and budget.",
        },
        {
          icon: Wrench,
          name: "Installation & Piping",
          description:
            "Brazed copper piping with nitrogen purging, standing vacuum tests, electronic leak detection, and refrigerant charging to manufacturer specifications.",
        },
        {
          icon: Settings,
          name: "Controls & Integration",
          description:
            "Zone controllers, centralized management systems, BMS integration, scheduling, and remote monitoring setup.",
        },
        {
          icon: ClipboardCheck,
          name: "Commissioning & Handover",
          description:
            "Full capacity testing per zone, refrigerant charge verification, airflow balancing, and comprehensive handover documentation.",
        },
        {
          icon: Shield,
          name: "Warranty & Support",
          description:
            "Manufacturer-backed warranties with AGEC as the installation partner on record. AMC options available from day one.",
        },
      ]}
      whyAgec={[
        "Engineers experienced with Daikin, Mitsubishi Electric and Carrier VRF/VRV — up to 240 TR single-project capacity delivered",
        `${PROJECTS_DELIVERED} HVAC projects delivered across Dubai, Sharjah, Ajman and Abu Dhabi`,
        "ASHRAE 111 and SMACNA compliant installation and commissioning practices",
        "Proper refrigerant piping: nitrogen-purged brazing, standing vacuum tests, and electronic leak detection on every joint",
      ]}
      extraSection={
        <>
          {/* VRF & FCU MAINTENANCE */}
          <section id="vrf-fcu-maintenance" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                VRF &amp; FCU Maintenance
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-text-muted">
                <p>
                  VRF maintenance in Dubai is part of the same engineering team&apos;s
                  scope. VRF/VRV systems, fan coil units (FCUs) and the rest of
                  your HVAC plant can sit under one annual maintenance contract:
                  scheduled visits covering filter and coil cleaning, drain
                  flushing, refrigerant pressure checks, electrical and control
                  checks and a performance test, plus a service report with
                  photos after every visit. Filters on FCUs and indoor units are
                  cleaned quarterly under the AMC.
                </p>
                <p>
                  For offices, retail and whole buildings, see{" "}
                  <Link href="/ac-amc-dubai#commercial-amc" className={linkClass}>
                    commercial and building AMC (HVAC maintenance)
                  </Link>
                  .
                </p>
                {/* TODO(owner): a VRF-specific PPM checklist (outdoor unit, branch/BS boxes, controllers), if you want it listed. None is stated on the site, so none is shown. */}
              </div>

              <h3 className="mt-10 font-heading text-xl font-semibold">
                VRF projects across the UAE
              </h3>
              <ul className="mt-4 max-w-3xl space-y-3 text-text-muted">
                {mamzar && !mamzar.draft && (
                  <li>
                    <Link href={`/projects/${mamzar.slug}`} className={linkClass}>
                      {mamzar.name}
                    </Link>{" "}
                    — a private villa in {mamzar.location.emirate}: HVAC
                    installation and commissioning with a {mamzar.tonnage} VRF
                    system.
                  </li>
                )}
                {basil && !basil.draft && (
                  <li>
                    <Link href={`/projects/${basil.slug}`} className={linkClass}>
                      {basil.name}
                    </Link>{" "}
                    — a {basil.tonnage} VRF installation for a commercial mall in{" "}
                    {basil.location.emirate}, UAE.
                  </li>
                )}
              </ul>
            </div>
          </section>
        </>
      }
    />
  );
}
