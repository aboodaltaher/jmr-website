import { buildMetadata } from "@/lib/metadata";
import {
  Gauge,
  Wind,
  Droplets,
  Settings,
  Target,
  FileText,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { InlineLeadForm } from "@/components/InlineLeadForm";
import { ratingValue, reviewCount } from "@/lib/siteStats";

export const metadata = buildMetadata({
  title: "HVAC Testing, Commissioning & Balancing Dubai | AGEC",
  description:
    "HVAC testing, commissioning and air balancing in Dubai — airflow and water flow set and proven to design, controls verified, with a signed handover report.",
  path: "/services/tab-testing-adjusting-balancing-dubai",
});

export default function TestingCommissioningBalancing() {
  return (
    <ServiceDetailLayout
      slug="services/tab-testing-adjusting-balancing-dubai"
      heroImage="/projects/agec-technician-tab-commissioning-airflow-balometer-dubai.jpg"
      heroImageAlt="AGEC technician performing HVAC testing, commissioning and air balancing with an airflow balometer at a Dubai project"
      leadForm={
        <InlineLeadForm
          requestType="Testing, commissioning & balancing enquiry"
          whatsappPath="/services/tab-testing-adjusting-balancing-dubai"
          detailsLabel="Building and problem (optional)"
          detailsPlaceholder="e.g. office floor in Business Bay — some rooms warm, consultant wants a balancing and commissioning report."
        />
      }
      title="HVAC Testing, Commissioning & Air Balancing in Dubai"
      intro="Measured airflow and water flow set and proven to their design figures, controls verified, and the whole system commissioned — with a documented report to prove it."
      overview={
        <>
          <p>
            Testing, commissioning and balancing is the engineering step that
            makes an HVAC system actually deliver what it was designed to deliver.
            A system can be installed perfectly and still leave some rooms warm and
            others freezing, simply because the air and water were never
            distributed to the figures on the drawings, or because controls and
            safeties were never proven under load. This service closes that gap —
            from measuring and balancing each branch and terminal, through
            verifying controls, to commissioning the system as a whole.
          </p>
          <p>
            <strong className="text-text">Testing, adjusting and balancing (TAB)</strong>{" "}
            measures what each diffuser, grille and terminal is actually doing,
            adjusts dampers, valves and fan or pump settings, and re-measures until
            air and water match design.{" "}
            <strong className="text-text">Commissioning</strong> is the broader
            process that brings a whole system into proven operation — controls and
            BMS point-to-point checkout, equipment performance verification, and
            safety testing — following ASHRAE Guideline 0 and the CIBSE
            Commissioning Code. It matters most at handover of a new building, after
            a fit-out or retrofit, or when occupants complain that comfort is uneven
            despite the units running constantly.
          </p>
          <p>
            AGEC covers air and water systems: supply, extract and fresh-air
            quantities at diffusers and grilles, chilled-water flow through coils
            and terminals, controls and interlocks, and equipment capacity under
            load. We use calibrated, traceable instruments, record readings area by
            area, and compare them against design before and after adjustment. The
            deliverable is a clear report — measured versus design, the adjustments
            made, and any shortfall that points to a sizing, leakage or equipment
            issue rather than a balancing one — in the documented, signed format
            consultants and landlords ask for at sign-off.
          </p>
        </>
      }
      whenYouNeedIt={[
        "Handover of a new building where airflow, water flow and controls must be proven to design",
        "A new HVAC installation requiring full commissioning before handover to the owner",
        "A consultant or developer requiring independent, third-party commissioning or balancing verification",
        "After a fit-out, retrofit or extension that changed the duct or pipe network",
        "Uneven comfort — some rooms never cool while others overcool and the system runs non-stop",
        "Retro-commissioning of an older building to restore performance and cut energy waste",
        "A consultant, landlord or authority requiring a documented, signed balancing and commissioning report",
      ]}
      whatWeDo={[
        {
          icon: Gauge,
          name: "Measurement",
          description:
            "Airflow, water flow, temperatures and pressures measured with calibrated instruments and recorded area by area against the design.",
        },
        {
          icon: Wind,
          name: "Air Balancing",
          description:
            "Supply, extract and fresh-air quantities adjusted at dampers, diffusers and grilles until each space matches its design airflow.",
        },
        {
          icon: Droplets,
          name: "Water Balancing",
          description:
            "Chilled-water flow set through coils, FCUs and terminals using balancing valves so every circuit gets its design flow.",
        },
        {
          icon: Settings,
          name: "Controls & BMS Verification",
          description:
            "Point-to-point checkout of BMS inputs and outputs, control-sequence and setpoint verification, interlock and alarm testing — so the balanced figures hold under normal control.",
        },
        {
          icon: Target,
          name: "Performance Testing",
          description:
            "Equipment capacity verified under load: chiller COP, AHU coil performance, fan curves and pump duty points confirmed against design.",
        },
        {
          icon: FileText,
          name: "Commissioning & Reporting",
          description:
            "Systematic comparison of measured values against specification with pass/fail criteria, deficiency logs, and a signed report ready for consultant or owner handover.",
        },
      ]}
      whyAgec={[
        "Readings taken with calibrated, traceable instruments and reported honestly — measured versus design, whether it passes or not",
        "Full handover scope under one team: air and water balancing, controls/BMS checkout, equipment performance testing and commissioning",
        "Methodology to ASHRAE 111, SMACNA and the CIBSE Commissioning Code / ASHRAE Guideline 0, with systematic documentation",
        `Rated ${ratingValue}★ by ${reviewCount} Google reviewers`,
        "A documented report you can hand to a consultant, landlord or authority as proof of performance",
      ]}
      faq={[
        {
          q: "What's the difference between testing, commissioning and balancing?",
          a: "Balancing (TAB) is the measurement-and-adjustment step that sets airflow and water flow to design. Commissioning is the broader process that brings the whole system — controls, safeties and equipment performance — into proven operation. We provide both as one service, so a system is both balanced and commissioned before handover.",
        },
        {
          q: "What do I receive at the end?",
          a: "A documented report: measured versus design readings area by area, controls and performance results, the adjustments made, and any shortfall with its likely cause. It is the signed proof consultants and landlords ask for.",
        },
        {
          q: "My rooms are unevenly cooled — is that a balancing problem?",
          a: "Often, yes. Uneven comfort with the system running constantly is frequently a distribution issue that balancing fixes. If measurement shows the system can't reach design even when balanced, that points to sizing, leakage or a fault, which we identify.",
        },
        {
          q: "Do you balance both air and water systems?",
          a: "Yes. We measure and adjust supply/extract airflow and fresh-air quantities, and chilled-water flow through coils and terminals.",
        },
        {
          q: "How long does testing and balancing take?",
          a: "It depends on the size and complexity of the system and how many zones and terminals are involved. We scope it after a quick look at the drawings or a site visit, and give you a clear timeline before starting.",
        },
        {
          q: "Do you work to the consultant's design?",
          a: "Yes. We balance and commission to the design figures on the approved drawings and specification, and report measured against design so the consultant can sign off.",
        },
        {
          q: "Do you commission and balance existing buildings, not just new ones?",
          a: "Yes. As well as new-build handover, we carry out retro-commissioning and re-balancing of existing buildings to restore performance, fix comfort complaints and cut wasted fan and pump energy.",
        },
        {
          q: "What standards do you follow?",
          a: "Our testing, balancing and commissioning methodology follows ASHRAE 111 and SMACNA for TAB and the CIBSE Commissioning Code / ASHRAE Guideline 0 for commissioning, with calibrated, traceable instruments and systematic documentation.",
        },
      ]}
    />
  );
}
