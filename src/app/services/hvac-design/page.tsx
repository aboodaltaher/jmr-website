import type { Metadata } from "next";
import {
  Calculator,
  PenLine,
  Package,
  FileText,
  Users,
  ClipboardCheck,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "HVAC Design & Consultancy | AGEC",
  description:
    "HVAC system design, heat load calculations, duct sizing, and MEP coordination in Dubai. Engineering documentation from concept through construction.",
};

export default function HvacDesign() {
  return (
    <ServiceDetailLayout
      title="HVAC Design & Consultancy"
      heroImage="/projects/multiple-ahu-installation-hvac-design-dubai.jpg"
      heroImageAlt="Multiple air handling unit installation showing HVAC design and engineering scale at Dubai commercial project by AGEC"
      intro="Heat load calculations, system design, equipment selection, and full engineering documentation — from concept through construction."
      overview={
        <>
          <p>
            Proper HVAC design is the difference between a system that performs
            efficiently for decades and one that struggles from day one. In
            Dubai, where cooling accounts for 60–70% of a building&apos;s energy
            consumption, design decisions made on paper directly impact operating
            costs, occupant comfort, and equipment lifespan.
          </p>
          <p>
            AGECprovides complete HVAC design services: heat load calculations
            using industry-standard software, system type selection, equipment
            specification, duct and piping layout, controls design, and
            construction documentation. We work on projects ranging from single
            villas to multi-floor commercial fit-outs, delivering design packages
            that meet consultant requirements and municipality approval
            standards.
          </p>
          <p>
            Our design approach starts with accurate load calculations — not
            rules of thumb. We model each space considering orientation, glazing
            type and area, wall construction, occupancy schedules, lighting
            loads, and equipment heat gains. This produces equipment selections
            that match the actual load, avoiding the chronic oversizing that
            plagues the Dubai market and leads to short-cycling, humidity
            problems, and wasted capital expenditure.
          </p>
        </>
      }
      whenYouNeedIt={[
        "New construction projects requiring HVAC design from scratch",
        "Commercial fit-out or tenant improvement projects needing system design within an existing building",
        "Renovation or system upgrade projects where the existing design is outdated or inadequate",
        "Value engineering — reviewing an existing HVAC design to reduce cost without sacrificing performance",
        "Second opinion on equipment sizing or system selection from another contractor",
      ]}
      whatWeDo={[
        {
          icon: Calculator,
          name: "Heat Load Calculations",
          description:
            "Room-by-room and block load calculations using HAP, Trace, or equivalent software. Accounts for Dubai's peak ambient conditions, solar exposure, and internal gains.",
        },
        {
          icon: PenLine,
          name: "Duct & Piping Design",
          description:
            "Duct sizing by equal friction or static regain method, piping layout with hydraulic calculations, and routing coordination with other MEP disciplines.",
        },
        {
          icon: Package,
          name: "Equipment Specification",
          description:
            "Manufacturer-neutral equipment schedules with performance criteria, electrical data, physical dimensions, and acceptable alternatives.",
        },
        {
          icon: FileText,
          name: "Construction Documentation",
          description:
            "AutoCAD and Revit deliverables including floor plans, sections, details, equipment schedules, and specifications for tender and construction.",
        },
        {
          icon: Users,
          name: "MEP Coordination",
          description:
            "Coordination with electrical, plumbing, and fire protection disciplines to resolve routing conflicts and ensure adequate ceiling space and shaft sizing.",
        },
        {
          icon: ClipboardCheck,
          name: "Code Compliance Review",
          description:
            "Verification against ASHRAE standards, Dubai Municipality requirements, and Green Building regulations including Al Sa'fat compliance where required.",
        },
      ]}
      whyJmr={[
        "Design based on calculated loads with documented assumptions — 30+ projects designed and delivered across the UAE",
        "Engineers who also install and commission systems, bringing practical construction knowledge into the design phase",
        "ASHRAE 111, SMACNA, and CIBSE compliant design documentation",
        "Design packages formatted for consultant approval, Dubai Municipality submission, and contractor tendering",
      ]}
    />
  );
}
