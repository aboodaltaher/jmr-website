import Link from "next/link";
import { isPublished } from "@/data/new-pages";
import { buildMetadata } from "@/lib/metadata";
import {
  PenLine,
  Package,
  Wrench,
  Gauge,
  ClipboardCheck,
  FileText,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { InlineLeadForm } from "@/components/InlineLeadForm";
import { ratingValue, reviewCount } from "@/lib/siteStats";

export const metadata = buildMetadata({
  title: "HVAC & AC Installation Dubai — Design to Handover | AGEC",
  description:
    "HVAC installation in Dubai by engineers — ductwork, refrigerant piping, equipment set and commissioning, handed over with test sheets and as-built drawings.",
  path: "/services/hvac-installation-dubai",
});

export default function HvacInstallation() {
  return (
    <ServiceDetailLayout
      slug="services/hvac-installation-dubai"
      leadForm={
        <InlineLeadForm
          requestType="HVAC installation quote"
          whatsappPath="/services/hvac-installation-dubai"
          detailsLabel="Project details (optional)"
          detailsPlaceholder="e.g. new villa in Dubai Hills, G+1, ducted split — need supply + install + commissioning."
        />
      }
      title="HVAC Installation"
      intro="Complete air-conditioning installation for new builds and fit-outs — from reading the design through to a commissioned, documented handover."
      overview={
        <>
          <p>
            HVAC installation is the stage where a cooling design becomes a
            working system. It covers everything between the approved drawings
            and a system that actually holds temperature: setting the indoor and
            outdoor equipment, running and insulating ductwork, routing
            refrigerant or chilled-water piping, wiring controls, and proving the
            result. Done carefully, it is the difference between a building that
            cools quietly and efficiently and one that never quite performs.
          </p>
          <p>
            AGEC installs ducted splits, concealed and cassette units, VRF/VRV
            systems and packaged equipment for villas, apartments, offices,
            retail units and light-industrial spaces. We work from the project
            drawings and the room-by-room heat load, so equipment is matched to
            the space rather than guessed — the single most common cause of high
            bills and poor comfort is a system that was never sized or installed
            to its design in the first place.
          </p>
          <p>
            Our scope runs from first fix through to handover. First fix covers
            the concealed work — duct runs, piping, drainage and containment —
            that has to be right before ceilings close. Second fix sets the
            equipment, grilles, diffusers and thermostats. Then we pressure-test
            and evacuate the pipework, charge the system, and commission it:
            checking airflow, temperatures and controls against the design before
            we hand it over. You receive the test readings and as-built
            information, not just a set of keys.
          </p>
          {isPublished("ducting") && (
            <p>
              The ductwork is a trade of its own: see how we 
              <Link
                href="/ac-ducting-installation-dubai"
                className="text-primary underline underline-offset-2 hover:text-primary-dark"
              >
                fabricate, install, test and modify AC ductwork
              </Link>
               for villas and fit-outs.
            </p>
          )}
        </>
      }
      whenYouNeedIt={[
        "A new villa or building where the air conditioning is being installed from scratch",
        "An office, retail or restaurant fit-out that needs cooling and ventilation to its layout",
        "A renovation or extension where existing AC must be reworked or added to",
        "A developer or main contractor needing an HVAC subcontractor for the MEP package",
        "Replacing an old or failed system with correctly sized, modern equipment",
        "Any project where the cooling has to be installed and proven to a design, with documentation",
      ]}
      whatWeDo={[
        {
          icon: PenLine,
          name: "Drawing & Load Review",
          description:
            "We review the design and heat load before mobilising, so equipment selection, duct sizes and pipe runs match the space and the drawings.",
        },
        {
          icon: Package,
          name: "Equipment Set",
          description:
            "Indoor and outdoor units, FCUs, AHUs and packaged equipment positioned for access, airflow and serviceability — not just where they fit.",
        },
        {
          icon: Wrench,
          name: "Ductwork & Piping",
          description:
            "Ductwork fabrication and insulation, refrigerant and drainage piping, and chilled-water pipework, installed and pressure-tested before closing up.",
        },
        {
          icon: ClipboardCheck,
          name: "Controls & Wiring",
          description:
            "Thermostats, zone controllers and interlocks wired and configured so each area controls independently and safely.",
        },
        {
          icon: Gauge,
          name: "Commissioning",
          description:
            "Vacuum and leak checks, charging to specification, airflow and temperature verification, and a function test of every mode before handover.",
        },
        {
          icon: FileText,
          name: "Handover Pack",
          description:
            "Commissioning readings, equipment details and as-built information so you — and your consultant — have a documented record of the system.",
        },
      ]}
      whyAgec={[
        "Installation driven by the heat load and drawings, so systems are sized and fitted to perform",
        "Engineers on site, not just installers — the people who design and commission are the people who sign off the work",
        `Rated ${ratingValue}★ by ${reviewCount} Google reviewers`,
        "A documented handover: test readings and as-built information, not just a working switch",
      ]}
      faq={[
        {
          q: "Do you install systems designed by someone else?",
          a: "Yes. We install to a consultant's or developer's approved drawings, and we also design and install as a single package. Either way we review the heat load and drawings first so the installed system matches the intent.",
        },
        {
          q: "Which types of AC do you install?",
          a: "Ducted and concealed splits, wall and cassette units, VRF/VRV systems, and packaged units — for villas, apartments, offices, retail and light-industrial spaces. We advise on the best fit for your layout, budget and running cost.",
        },
        {
          q: "What do I receive at handover?",
          a: "A commissioned system plus the record of it: commissioning readings, equipment details and as-built information. This is what lets you, a consultant or a future maintainer understand exactly what was installed.",
        },
        {
          q: "Can you work alongside our main contractor?",
          a: "Yes. We regularly work as the HVAC subcontractor within a larger MEP package, coordinating first and second fix around the construction programme.",
        },
        {
          q: "Do you handle the maintenance afterwards?",
          a: "We can. Many clients move straight onto a maintenance plan or annual contract after handover so the system is serviced on schedule from day one.",
        },
      ]}
      relatedProjectSlugs={[
        "18-villas-community",
        "vrf-villa-al-mamzar-dubai",
        "private-villa-sharjah-flagship",
      ]}
    />
  );
}
