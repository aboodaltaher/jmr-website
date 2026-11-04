import { buildMetadata } from "@/lib/metadata";
import {
  Gauge,
  Wind,
  Droplets,
  Settings,
  FileText,
  ClipboardCheck,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { InlineLeadForm } from "@/components/InlineLeadForm";
import { ratingValue, reviewCount } from "@/lib/siteStats";

export const metadata = buildMetadata({
  title: "HVAC TAB — Testing, Adjusting & Balancing Dubai | AGEC",
  description:
    "HVAC testing, adjusting and balancing (TAB) in Dubai — measured airflow and water flow set to design values, with a documented, signed balancing report.",
  path: "/services/tab-testing-adjusting-balancing-dubai",
});

export default function TabTestingAdjustingBalancing() {
  return (
    <ServiceDetailLayout
      slug="services/tab-testing-adjusting-balancing-dubai"
      leadForm={
        <InlineLeadForm
          requestType="TAB / balancing enquiry"
          whatsappPath="/services/tab-testing-adjusting-balancing-dubai"
          detailsLabel="Building and problem (optional)"
          detailsPlaceholder="e.g. office floor in Business Bay — some rooms warm, consultant wants a balancing report."
        />
      }
      title="Testing, Adjusting & Balancing (TAB)"
      intro="Measured airflow and water flow set to their design figures — so every room gets the air it was designed for, with a report to prove it."
      overview={
        <>
          <p>
            Testing, adjusting and balancing (TAB) is the engineering step that
            makes a system deliver what it was designed to deliver. A system can
            be installed perfectly and still leave some rooms warm and others
            freezing, simply because the air and water were never distributed to
            the figures on the drawings. TAB measures what each branch, diffuser
            and terminal is actually doing, adjusts dampers, valves and fan or
            pump settings, and re-measures until the whole system matches design.
          </p>
          <p>
            It matters most on handover of a new building, after a fit-out or
            retrofit, or when occupants complain that comfort is uneven despite
            the units running constantly. It is also what consultants and
            landlords ask for as documented proof that a system performs — a
            balancing report is often a condition of sign-off. Without it, you
            are relying on a system being right by chance.
          </p>
          <p>
            AGEC carries out TAB on air and water systems: supply and extract
            airflow at diffusers and grilles, fresh-air quantities, and
            chilled-water flow through coils and terminals. We use calibrated
            instruments, record the readings area by area, and compare them
            against the design before and after adjustment. The deliverable is a
            clear balancing report — measured versus design, the adjustments
            made, and any shortfall that points to a sizing, leakage or equipment
            issue rather than a balancing one. For wider handover testing see our{" "}
            testing &amp; commissioning and air-balancing pages, linked below.
          </p>
        </>
      }
      whenYouNeedIt={[
        "Handover of a new building where airflow and water flow must be proven to design",
        "After a fit-out, retrofit or extension that changed the duct or pipe network",
        "Uneven comfort — some rooms never cool while others overcool and the system runs non-stop",
        "A consultant, landlord or authority requiring a documented, signed balancing report",
        "Suspected under-performance where you need to know if it is balancing, sizing or a fault",
        "Energy concerns — a system moving the wrong volumes wastes fan and pump energy",
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
          name: "Controls Check",
          description:
            "Thermostats, valves and interlocks verified so the balanced figures hold under normal control, not just during the test.",
        },
        {
          icon: ClipboardCheck,
          name: "Verification",
          description:
            "Re-measurement after adjustment to confirm the system holds its design values, with any residual shortfall identified.",
        },
        {
          icon: FileText,
          name: "Balancing Report",
          description:
            "A documented report — measured versus design by area, the adjustments made, and recommendations — ready for consultant or landlord sign-off.",
        },
      ]}
      whyAgec={[
        "Readings taken with calibrated instruments and reported honestly — measured versus design, whether it passes or not",
        "Air and water both covered, so a comfort problem is traced to the right cause",
        `Rated ${ratingValue}★ by ${reviewCount} Google reviewers`,
        "A report you can hand to a consultant, landlord or authority as proof of performance",
      ]}
      faq={[
        {
          q: "What is the difference between TAB and commissioning?",
          a: "Commissioning is the broader process of bringing a whole system into proven operation; TAB is the specific measurement-and-adjustment step within it that sets airflow and water flow to design. We offer both — see our testing & commissioning page for full handover testing.",
        },
        {
          q: "What do I receive at the end?",
          a: "A balancing report: measured versus design readings area by area, the adjustments made, and any shortfall with its likely cause. It is the documented proof consultants and landlords ask for.",
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
          q: "Is a balancing report needed for handover?",
          a: "On most commercial projects a balancing report is expected as part of handover and is often a condition of consultant sign-off. We produce it in a clear, documented format.",
        },
      ]}
    />
  );
}
