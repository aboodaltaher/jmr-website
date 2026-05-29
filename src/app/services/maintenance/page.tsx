import type { Metadata } from "next";
import {
  Calendar,
  Wrench,
  Thermometer,
  FileText,
  Clock,
  Shield,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Maintenance & AMC | JMR Technical Services",
  description:
    "HVAC maintenance contracts and emergency servicing in Dubai. Preventive maintenance, reactive repairs, and annual AMC programs for residential and commercial systems.",
};

export default function Maintenance() {
  return (
    <ServiceDetailLayout
      title="Maintenance & AMC"
      heroImage="/projects/jmr-maintenance-service-dubai.jpg"
      heroImageAlt="JMR Technical Services HVAC maintenance work at Dubai project"
      intro="Preventive maintenance contracts, reactive servicing, and emergency callouts — keeping HVAC systems running at peak performance year-round."
      overview={
        <>
          <p>
            In Dubai&apos;s climate, HVAC systems run at high capacity for 8–10
            months of the year. Without regular maintenance, filters clog,
            coils foul, refrigerant leaks develop, and efficiency drops — often
            by 20–30% within two years. Equipment that should last 15–20 years
            fails in 7–8. Preventive maintenance is not optional; it&apos;s the
            most cost-effective investment a building owner can make in their
            mechanical systems.
          </p>
          <p>
            JMR offers Annual Maintenance Contracts (AMC) for all HVAC system
            types: split units, VRF systems, chillers, air handling units, fan
            coil units, and ventilation equipment. Our AMC programs include
            scheduled preventive visits, priority emergency response, and
            detailed service reports documenting equipment condition and any
            recommended corrective actions.
          </p>
          <p>
            Beyond scheduled maintenance, we provide reactive servicing for
            breakdowns, fault diagnosis, and emergency repairs. Our technicians
            carry common spare parts and refrigerants, minimizing return visits.
            For commercial clients, we offer 24/7 emergency response with
            guaranteed attendance times. Every service visit is documented with
            before/after conditions, work performed, parts used, and
            recommendations — giving facility managers a complete maintenance
            history for each piece of equipment.
          </p>
        </>
      }
      whenYouNeedIt={[
        "Annual maintenance contracts for residential villas or apartment buildings",
        "Commercial AMC programs covering chillers, AHUs, FCUs, and VRF systems",
        "Emergency breakdown repair and fault diagnosis",
        "Pre-summer preparation — system inspection and servicing before peak cooling season",
        "Warranty compliance requiring documented maintenance by qualified contractors",
        "Takeover of maintenance from a previous contractor with system audit and baseline reporting",
      ]}
      whatWeDo={[
        {
          icon: Calendar,
          name: "Scheduled Preventive Maintenance",
          description:
            "Regular visits covering filter cleaning/replacement, coil cleaning, drain line flushing, belt inspection, and electrical connection checks.",
        },
        {
          icon: Wrench,
          name: "Reactive Repairs",
          description:
            "Fault diagnosis, component replacement, refrigerant leak repair, compressor replacement, and control board troubleshooting for all system types.",
        },
        {
          icon: Thermometer,
          name: "Refrigerant Management",
          description:
            "Leak detection, refrigerant recovery, system evacuation, and recharging with proper weighed charge. R-410A, R-32, R-134a, and R-407C systems.",
        },
        {
          icon: FileText,
          name: "Service Documentation",
          description:
            "Detailed reports for every visit: equipment condition, work performed, parts used, measurements taken, and recommended corrective actions.",
        },
        {
          icon: Clock,
          name: "Emergency Response",
          description:
            "Priority callout service for AMC clients with guaranteed response times. 24/7 availability for commercial and critical-facility accounts.",
        },
        {
          icon: Shield,
          name: "Warranty Protection",
          description:
            "Maintenance performed to manufacturer standards, maintaining equipment warranties. Documentation formatted for warranty claims when needed.",
        },
      ]}
      whyJmr={[
        "Technicians trained on VRF, chiller, and DX systems — 30+ HVAC projects maintained across the UAE",
        "ASHRAE 111 and SMACNA compliant maintenance practices with OEM-approved procedures",
        "Transparent pricing with no hidden charges — AMC scope clearly defined, reactive work quoted before proceeding",
        "24/7 emergency support across Dubai, Sharjah, and Abu Dhabi with guaranteed response times",
      ]}
    />
  );
}
