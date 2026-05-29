import type { Metadata } from "next";
import {
  Gauge,
  Droplets,
  Wind,
  FileText,
  Settings,
  Target,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Testing & Commissioning | JMR Technical Services",
  description:
    "Independent HVAC testing, air balancing, water balancing, and commissioning services in Dubai. Every system verified against design specifications before handover.",
};

export default function TestingCommissioning() {
  return (
    <ServiceDetailLayout
      title="Testing & Commissioning"
      heroImage="/projects/trane-hvac-controls-commissioning-dubai.jpg"
      heroImageAlt="Trane HVAC control panel commissioning at 24 degrees Celsius set point on Dubai project site by JMR Technical Services TAB engineers"
      intro="Independent verification that every HVAC system performs to specification — airflow, water flow, controls, and safety systems tested and documented."
      overview={
        <>
          <p>
            Testing and Commissioning (T&amp;C) is the process of verifying that
            installed HVAC systems actually perform as designed. It bridges the
            gap between what&apos;s on the drawings and what&apos;s delivered on
            site. Without proper T&amp;C, systems are handed over with
            unbalanced airflow, incorrect water flow rates, misconfigured
            controls, and safety interlocks that have never been tested.
          </p>
          <p>
            JMR provides systematic T&amp;C services covering air-side systems,
            water-side systems, controls and automation, and refrigeration
            circuits. We use calibrated instruments — anemometers, pitot tubes,
            ultrasonic flow meters, digital manometers, and precision temperature
            sensors — to measure actual performance against design intent.
          </p>
          <p>
            Our commissioning process follows ASHRAE Guideline 0 and CIBSE
            Commissioning Code methodology. Every measurement is documented in
            structured reports with pass/fail criteria referenced to the design
            specifications. Where performance falls short, we identify the root
            cause and work with the installing contractor to resolve deficiencies
            before handover. The result is a system that works as designed from
            day one — not one that requires months of complaints and callbacks to
            reach acceptable performance.
          </p>
        </>
      }
      whenYouNeedIt={[
        "New HVAC installation requiring commissioning before handover to the building owner",
        "Consultant or developer requiring independent third-party commissioning verification",
        "Existing systems with comfort complaints, uneven temperatures, or noise issues",
        "Post-renovation verification that modified systems still meet original design intent",
        "Retro-commissioning of older buildings to restore performance and reduce energy waste",
      ]}
      whatWeDo={[
        {
          icon: Wind,
          name: "Air-Side Balancing",
          description:
            "Measurement and adjustment of supply, return, and exhaust airflow at every diffuser, grille, and terminal unit. Fan speed and static pressure verification.",
        },
        {
          icon: Droplets,
          name: "Water-Side Balancing",
          description:
            "Chilled water, condenser water, and hot water flow rate measurement and balancing valve adjustment. Pump performance and pressure drop verification.",
        },
        {
          icon: Settings,
          name: "Controls Verification",
          description:
            "Point-to-point checkout of BMS inputs and outputs, control sequence verification, setpoint confirmation, and alarm testing.",
        },
        {
          icon: Gauge,
          name: "Performance Testing",
          description:
            "Equipment capacity verification under load: chiller COP, AHU coil performance, fan curves, and pump duty point confirmation.",
        },
        {
          icon: Target,
          name: "Specification Compliance",
          description:
            "Systematic comparison of measured values against design specifications with documented pass/fail criteria for every parameter.",
        },
        {
          icon: FileText,
          name: "Commissioning Reports",
          description:
            "Structured documentation of all measurements, test results, deficiency logs, and final sign-off records for consultant and owner handover.",
        },
      ]}
      whyJmr={[
        "Commissioning engineers with calibrated, traceable instruments — 30+ projects commissioned across the UAE",
        "ASHRAE 111, SMACNA, and CIBSE compliant methodology with systematic documentation",
        "Independent verification: we report what we measure, whether it passes or not, giving owners and consultants confidence in the handover",
        "Practical problem-solving when systems don't meet spec — root cause identification, not just deficiency logging",
      ]}
    />
  );
}
