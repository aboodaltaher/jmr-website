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
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { InlineLeadForm } from "@/components/InlineLeadForm";
import { PROJECTS_DELIVERED } from "@/lib/company";
import { ratingValue, reviewCount } from "@/lib/siteStats";

export const metadata = buildMetadata({
  title: "Chiller Installation, Repair & Maintenance Dubai | AGEC",
  description:
    "Chiller installation, repair and maintenance in Dubai for air- and water-cooled plant — designed, installed, serviced and commissioned, with logged reports.",
  path: "/services/chiller-maintenance-dubai",
});

export default function ChillerMaintenance() {
  return (
    <ServiceDetailLayout
      slug="services/chiller-maintenance-dubai"
      heroImage="/projects/chiller-installation-dubai-agec.jpg"
      heroImageAlt="Chiller plant installed and maintained by AGEC for a commercial project in Dubai"
      leadForm={
        <InlineLeadForm
          requestType="Chiller installation / maintenance enquiry"
          whatsappPath="/services/chiller-maintenance-dubai"
          detailsLabel="Plant and site (optional)"
          detailsPlaceholder="e.g. 2× air-cooled chillers on a commercial tower in Dubai — need installation, or a maintenance plan."
        />
      }
      title="Chiller Installation and Maintenance"
      intro="Air- and water-cooled chiller plant in Dubai — selected, installed and commissioned, then kept at its design capacity through planned maintenance and repair."
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
    />
  );
}
