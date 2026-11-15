import { buildMetadata } from "@/lib/metadata";
import {
  PenLine,
  Waves,
  Wind,
  Calendar,
  Fan,
  Gauge,
  Droplets,
  Settings,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { PROJECTS_DELIVERED } from "@/lib/company";
import { ratingValue, reviewCount } from "@/lib/siteStats";

export const metadata = buildMetadata({
  title: "Chiller Installation, Repair & Maintenance Dubai | AGEC",
  description:
    "Chiller maintenance in Dubai for air- and water-cooled plant: planned preventive visits, repair and installation, with logged reports after every visit.",
  path: "/services/chiller-maintenance-dubai",
});

const linkClass = "text-primary underline underline-offset-2 hover:text-primary-dark";
const h2Class = "font-heading text-3xl font-bold md:text-4xl";

// Planned preventive visit tasks. Refrigerant analysis, oil sampling, tube cleaning, filter replacement and
// performance trending were confirmed by the owner on 2026-11-15.
const ppmAll = [
  "Compressors, electrical and safety checks",
  "Refrigerant analysis and charge check",
  "Oil sampling and oil condition",
  "Condenser and evaporator tube cleaning",
  "Filter replacement",
  "Flow rates and temperature differentials measured against the plant's design figures",
  "Controls, sequencing, setpoints, interlocks and safety cut-outs verified",
  "Readings logged, performance trended visit to visit, and a report issued after every visit",
];
const ppmWater = [
  "Condenser-water condition and treatment reviewed for scaling, fouling and corrosion",
  "Cooling-tower basin and condenser-water loop condition checked",
];

const comparison = [
  {
    row: "Heat rejection",
    air: "Condenser coils reject heat to the outside air",
    water: "Condenser-water loop and cooling tower",
  },
  {
    row: "Dubai selection factors",
    air: "Must perform at ambient temperatures above 50°C; altitude, humidity, fouling allowances and part-load profiles are factored in",
    water: "Tower sizing, basin piping and condenser-water loop commissioning, with water treatment set up from the start",
  },
  {
    row: "Maintenance focus",
    air: "Coil and surface cleaning, refrigerant charge, compressors, controls and safeties",
    water: "The same checks, plus condenser-water treatment and the cooling-tower basin and loop",
  },
];

export default function ChillerMaintenance() {
  return (
    <ServiceDetailLayout
      slug="services/chiller-maintenance-dubai"
      heroImage="/projects/chiller-installation-dubai-agec.jpg"
      heroImageAlt="Chiller plant installed and maintained by AGEC for a commercial project in Dubai"
      ctaBar
      title="Chiller Installation and Maintenance"
      h1="Chiller Maintenance in Dubai — Air- and Water-Cooled Plant"
      intro="Chiller maintenance in Dubai for air- and water-cooled plant — with selection, installation and commissioning when you need them — keeping the plant at its design capacity through planned maintenance and repair."
      overview={
        <>
          <p>
            A chiller is the backbone of central cooling in Dubai&apos;s
            commercial and industrial buildings, serving air handling units, fan
            coil units and process loads through a chilled-water network. Getting
            it right starts at selection: air-cooled chillers here must perform at
            ambient temperatures above 50°C, so we factor in altitude, humidity,
            fouling allowances and realistic part-load profiles rather than
            oversizing on rough estimates. We work with Carrier, Trane, York and
            Daikin to match equipment to the building&apos;s actual load.
          </p>
          <p>
            AGEC provides the full chiller lifecycle under one engineering team:
            equipment selection and sizing, chilled-water piping design,
            primary/secondary and variable-primary pumping schemes, cooling-tower
            integration and condenser-water treatment for water-cooled plant, and
            complete commissioning with as-built drawings and operating
            procedures. The same team then maintains and repairs the plant — so
            the people who know how it was built keep it running.
          </p>
          <p>
            Because a chiller runs hard for most of the year, maintenance is what
            holds its capacity without surprises: fouled condenser tubes, drifting
            refrigerant charge, dirty filters and neglected water treatment all
            quietly erode efficiency and, left long enough, take a whole building
            off cooling in peak summer. A planned programme — scheduled preventive
            visits plus a response route for faults — catches those early. Each
            visit covers the mechanical and the measured: compressors, refrigerant
            and oil condition, condenser and evaporator cleaning, flow and
            temperature differentials, safeties and controls, all logged against
            the plant&apos;s design figures.
          </p>
        </>
      }
      whenYouNeedIt={[
        "A new or replacement chiller plant for a commercial building, hotel, mall or industrial facility",
        "A data centre or process facility where cooling capacity and uptime are critical",
        "Air- or water-cooled chillers losing capacity or tripping as ambient temperatures climb into summer",
        "A facilities team needing scheduled visits and logged reports for audit and budgeting",
        "Recently installed plant that should be maintained on schedule from day one",
        "An estate that wants chillers, AHUs and FCUs covered under one maintenance contract",
      ]}
      whatWeDo={[
        {
          icon: PenLine,
          name: "Chiller Plant Design & Selection",
          description:
            "Load calculations, equipment selection for Dubai's peak ambient, and layout for air-cooled and water-cooled configurations — sized to the real load, not oversized.",
        },
        {
          icon: Waves,
          name: "Piping & Pump Systems",
          description:
            "Chilled- and condenser-water piping, pump selection and sizing, hydraulic balancing, and primary/secondary or variable-primary pumping schemes.",
        },
        {
          icon: Wind,
          name: "Cooling Tower Integration",
          description:
            "Tower sizing, basin piping and condenser-water loop commissioning for water-cooled plant, with water treatment set up from the start.",
        },
        {
          icon: Calendar,
          name: "Scheduled Servicing",
          description:
            "Preventive visits planned around the plant and the cooling season, with compressor, electrical and safety checks each time.",
        },
        {
          icon: Fan,
          name: "Tube & Coil Cleaning",
          description:
            "Condenser and evaporator surfaces cleaned so the plant rejects and absorbs heat properly — the biggest single lever on chiller efficiency.",
        },
        {
          icon: Gauge,
          name: "Refrigerant, Performance & Commissioning",
          description:
            "Refrigerant charge, oil condition, flow rates and temperature differentials checked and measured against the plant's design figures, at install and at every service.",
        },
        {
          icon: Droplets,
          name: "Water Treatment",
          description:
            "For water-cooled plant, condenser-water condition and treatment reviewed to control scaling, fouling and corrosion in the loop.",
        },
        {
          icon: Settings,
          name: "Controls & Safeties",
          description:
            "Chiller sequencing, lead/lag control, setpoints, interlocks and safety cut-outs verified so the plant runs efficiently and protects itself.",
        },
        {
          icon: FileText,
          name: "Reports, Repair & AMC",
          description:
            "Logged readings and a report after every visit, repairs as part of the maintenance route, all under an annual maintenance contract with a fault response line.",
        },
      ]}
      whyAgec={[
        "Chiller selection based on actual Dubai operating conditions — peak ambient, altitude correction and realistic part-load profiles",
        "Design, installation, maintenance and repair under one engineering team, so the people who built the plant keep it running",
        "Air- and water-cooled plant covered, including condenser-water treatment on water-cooled systems",
        `${PROJECTS_DELIVERED} HVAC projects across the UAE, including commercial buildings and data centres — rated ${ratingValue}★ by ${reviewCount} Google reviewers`,
        "Logged reports after every visit, measured against design — the record a facilities team needs for audits and budgeting",
      ]}
      faq={[
        {
          q: "Do you install new chillers or only maintain them?",
          a: "Both. We design, select and install air-cooled and water-cooled chiller plant — piping, pumping, cooling towers and commissioning — and then maintain and repair it. One engineering team covers the whole lifecycle.",
        },
        {
          q: "How often should a chiller be serviced?",
          a: "It depends on the plant, its load and whether it is air- or water-cooled, but central chillers in Dubai's climate are typically maintained on a quarterly preventive schedule, with extra attention before the summer peak. We set the frequency to the plant and build it into the contract.",
        },
        {
          q: "Do you work on both air-cooled and water-cooled chillers?",
          a: "Yes. We cover both, including the condenser-water side of water-cooled systems — treatment, cooling-tower basin and loop condition — which air-cooled plant doesn't have.",
        },
        {
          q: "Can you take over an existing maintenance contract?",
          a: "Yes. We start with a baseline inspection of the plant so we know its real condition, then agree the scope in writing before taking over the schedule.",
        },
        {
          q: "What do we receive after each visit?",
          a: "A report with the logged readings, the work carried out, and anything that needs attention — the documented record a facilities team or owner can rely on.",
        },
      ]}
      extraSection={
        <>
          {/* AIR- VS WATER-COOLED */}
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Air-cooled vs water-cooled chillers</h2>
              <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">
                We maintain and install both. The difference that matters for
                maintenance is the condenser side.
              </p>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[34rem] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs uppercase tracking-wider text-text-muted">
                      <th className="py-3 pr-4 font-semibold" />
                      <th className="py-3 pr-4 font-semibold">Air-cooled</th>
                      <th className="py-3 font-semibold">Water-cooled</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((r) => (
                      <tr key={r.row} className="border-b border-border align-top">
                        <th scope="row" className="py-3 pr-4 font-medium">{r.row}</th>
                        <td className="py-3 pr-4 text-text-muted">{r.air}</td>
                        <td className="py-3 text-text-muted">{r.water}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* PPM CHECKLIST */}
          <section className="bg-bg-soft py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>PPM checklist for chiller maintenance in Dubai</h2>
              <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">
                What each planned preventive visit covers. Central chillers in
                Dubai&apos;s climate are typically maintained on a quarterly
                schedule, with extra attention before the summer peak; we set the
                frequency to the plant and build it into the contract.
              </p>
              <div className="mt-8 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="font-heading text-lg font-semibold">All chillers</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-text-muted">
                    {ppmAll.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">Water-cooled plant, in addition</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-text-muted">
                    {ppmWater.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* TODO(owner): check frequency per item (monthly / quarterly / annual). Only the overall quarterly schedule is stated on the site, so no per-item frequency is shown. */}
            </div>
          </section>

          {/* OVERHAUL */}
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Chiller overhaul and repair</h2>
              <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-text-muted">
                <p>
                  Repairs are part of the maintenance route: the same team that
                  maintains the plant repairs it, under an annual maintenance
                  contract with a fault response line. A baseline inspection of
                  the plant comes first, so its real condition is known before we
                  agree the scope in writing. See{" "}
                  <Link href="/ac-amc-dubai#commercial-amc" className={linkClass}>
                    commercial and building AMC
                  </Link>{" "}
                  for how chillers, AHUs and FCUs can sit under one contract.
                </p>
                {/* TODO(owner): overhaul scope (for example compressor or major-component overhaul, tube replacement, refrigerant recovery), whether it is quoted separately, and typical lead times. None is stated on the site, so none is shown. */}
              </div>
            </div>
          </section>

          {/* BRANDS */}
          <section className="bg-bg-soft py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className={h2Class}>Chiller brands we service</h2>
              <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">
                We service chillers from Carrier, Trane, York and Daikin. Brand
                names are trademarks of their respective owners.
              </p>
              {/* TODO(owner): do not add any "authorised dealer" or "partner" wording unless the manufacturer has confirmed that status in writing. */}
            </div>
          </section>
        </>
      }
    />
  );
}
