import type { Metadata } from "next";
import {
  PenLine,
  Package,
  Wrench,
  Settings,
  ClipboardCheck,
  Shield,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "VRF / VRV Systems | JMR Technical Services",
  description:
    "VRF and VRV system design, installation, and commissioning in Dubai. Multi-zone climate control for villas, offices, and commercial buildings from certified engineers.",
};

export default function VrfVrvSystems() {
  return (
    <ServiceDetailLayout
      title="VRF / VRV Systems"
      intro="Multi-zone climate control with variable refrigerant flow technology — engineered for Dubai's extreme cooling demands."
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
            JMR designs and installs VRF systems from major manufacturers
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
            "Manufacturer-backed warranties with JMR as the certified installation partner on record. AMC options available from day one.",
        },
      ]}
      whyJmr={[
        "Factory-trained engineers certified by Daikin, Mitsubishi Electric, and Carrier — up to 240 TR single-project capacity",
        "30+ HVAC projects delivered across Dubai, Sharjah, and Abu Dhabi",
        "ASHRAE 111 and SMACNA compliant installation and commissioning practices",
        "Proper refrigerant piping: nitrogen-purged brazing, standing vacuum tests, and electronic leak detection on every joint",
      ]}
    />
  );
}
