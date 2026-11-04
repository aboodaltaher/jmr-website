import { buildMetadata } from "@/lib/metadata";
import {
  Calendar,
  Droplets,
  Gauge,
  Fan,
  Settings,
  FileText,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { InlineLeadForm } from "@/components/InlineLeadForm";
import { ratingValue, reviewCount } from "@/lib/siteStats";

export const metadata = buildMetadata({
  title: "Chiller Maintenance in Dubai | Plant Servicing | AGEC",
  description:
    "Chiller maintenance in Dubai for air- and water-cooled plant — scheduled servicing, tube cleaning, refrigerant and performance checks, with logged reports.",
  path: "/services/chiller-maintenance-dubai",
});

export default function ChillerMaintenance() {
  return (
    <ServiceDetailLayout
      slug="services/chiller-maintenance-dubai"
      leadForm={
        <InlineLeadForm
          requestType="Chiller maintenance enquiry"
          whatsappPath="/services/chiller-maintenance-dubai"
          detailsLabel="Plant and site (optional)"
          detailsPlaceholder="e.g. 2× air-cooled chillers on a commercial tower in Dubai — need a maintenance plan."
        />
      }
      title="Chiller Maintenance"
      intro="Planned maintenance for air- and water-cooled chiller plant — keeping central cooling reliable, efficient and documented across the cooling season."
      overview={
        <>
          <p>
            A chiller is the heart of a central cooling system, and in Dubai it
            runs hard for most of the year. Maintenance is what keeps it
            delivering its capacity without surprises: fouled condenser tubes,
            drifting refrigerant charge, dirty filters and neglected water
            treatment all quietly erode efficiency and, left long enough, cause
            the kind of failure that takes a whole building off cooling in peak
            summer. Planned maintenance catches those before they become
            breakdowns.
          </p>
          <p>
            AGEC maintains air-cooled and water-cooled chiller plant for
            commercial buildings, hotels, malls, data and process-cooling
            facilities. A maintenance programme is built around the plant and how
            hard it works: scheduled preventive visits through the year, plus a
            response route for faults. The aim is simple — hold the design
            cooling capacity at the lowest sensible running cost, and keep a
            record that a facilities team or owner can rely on.
          </p>
          <p>
            Each visit covers the mechanical and the measured: inspecting
            compressors, checking refrigerant and oil condition, cleaning
            condenser and evaporator surfaces, verifying flow and temperature
            differentials, reviewing safeties and controls, and logging the
            readings. Where the plant is part of a wider estate, chiller
            maintenance sits naturally alongside our commercial maintenance and
            AMC plans and our chiller-systems installation work, both linked
            below, so one engineering team covers design, upkeep and repair.
          </p>
        </>
      }
      whenYouNeedIt={[
        "A commercial building, hotel or mall running air- or water-cooled chiller plant",
        "A data centre or process facility where cooling downtime is not an option",
        "Chillers losing capacity or tripping as ambient temperatures climb into summer",
        "A facilities team needing scheduled visits and logged reports for audit and budgeting",
        "New or recently installed plant that should be maintained on schedule from the start",
        "An estate that wants chillers, AHUs and FCUs covered under one maintenance contract",
      ]}
      whatWeDo={[
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
            "Condenser and evaporator surfaces cleaned so the plant rejects and absorbs heat properly — the biggest lever on chiller efficiency.",
        },
        {
          icon: Gauge,
          name: "Refrigerant & Performance",
          description:
            "Refrigerant charge, oil condition, flow rates and temperature differentials checked and measured against the plant's design figures.",
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
            "Chiller sequencing, setpoints, interlocks and safety cut-outs verified so the plant runs efficiently and protects itself.",
        },
        {
          icon: FileText,
          name: "Reports & AMC",
          description:
            "Logged readings and a report after every visit, under an annual maintenance contract with a response route for faults.",
        },
      ]}
      whyAgec={[
        "Maintenance measured against the plant's design figures, not just a visual once-over",
        "Air- and water-cooled plant covered, including condenser-water treatment on water-cooled systems",
        `Rated ${ratingValue}★ by ${reviewCount} Google reviewers`,
        "Logged reports after every visit — the record a facilities team needs for audits and budgeting",
      ]}
      faq={[
        {
          q: "How often should a chiller be serviced?",
          a: "It depends on the plant, its load and whether it is air- or water-cooled, but central chillers in Dubai's climate are typically maintained on a quarterly preventive schedule, with extra attention before the summer peak. We set the frequency to the plant and build it into the contract.",
        },
        {
          q: "Do you maintain both air-cooled and water-cooled chillers?",
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
        {
          q: "Do you also repair and install chillers?",
          a: "Yes. Repairs are part of the maintenance route, and we design and install chiller plant too — see our chiller-systems page. One engineering team covers design, maintenance and repair.",
        },
      ]}
    />
  );
}
