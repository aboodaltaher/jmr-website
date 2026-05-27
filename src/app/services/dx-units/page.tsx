import type { Metadata } from "next";
import {
  Ruler,
  Wrench,
  Wind,
  Settings,
  Gauge,
  Shield,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "DX Units & Split Systems | JMR Technical Services",
  description:
    "Direct expansion AC installation in Dubai — wall-mount splits, ducted splits, cassettes, and concealed units. Properly sized and installed for residential and commercial spaces.",
};

export default function DxUnits() {
  return (
    <ServiceDetailLayout
      title="DX Units & Split Systems"
      intro="Direct expansion cooling systems — wall-mount splits, ducted splits, cassettes, and concealed units — properly sized and installed for Dubai's cooling demands."
      overview={
        <>
          <p>
            Direct Expansion (DX) systems remain the most common cooling
            solution for residential and small commercial applications in Dubai.
            The category covers wall-mount splits, ceiling cassettes, ducted
            splits, floor-standing units, and concealed ceiling units — each
            suited to different space configurations and aesthetic requirements.
          </p>
          <p>
            The critical difference between a reliable DX installation and a
            problematic one is proper sizing and installation practice. In
            Dubai&apos;s climate, undersized equipment runs continuously without
            reaching setpoint. Oversized equipment short-cycles, causing humidity
            problems and premature compressor wear. JMR performs room-by-room
            heat load calculations accounting for glazing, orientation, occupancy,
            and equipment heat gains to select the correct capacity for each
            space.
          </p>
          <p>
            Installation quality matters equally. Proper refrigerant line sizing,
            correct brazing technique, thorough vacuum pulling, and accurate
            refrigerant charging directly impact system efficiency and lifespan.
            We follow manufacturer installation standards on every project —
            whether it&apos;s a single split unit in a studio apartment or a
            multi-unit ducted system across a full villa.
          </p>
        </>
      }
      whenYouNeedIt={[
        "New villa or apartment fit-outs requiring complete AC installation",
        "Office or retail spaces needing independent zone cooling",
        "Server rooms and IT closets requiring dedicated precision cooling",
        "Replacement of aging or failed split system equipment",
        "Additions to existing buildings where central plant expansion is not feasible",
      ]}
      whatWeDo={[
        {
          icon: Ruler,
          name: "Load Calculation & Sizing",
          description:
            "Room-by-room heat load calculations accounting for Dubai's peak solar gains, glazing ratios, occupancy profiles, and equipment heat loads.",
        },
        {
          icon: Wrench,
          name: "Installation",
          description:
            "Wall-mount, cassette, ducted, and concealed unit installation with proper mounting, drainage, refrigerant piping, and electrical connections.",
        },
        {
          icon: Wind,
          name: "Ductwork & Airflow",
          description:
            "Supply and return duct design for ducted systems, including grille and diffuser selection, duct sizing, and insulation to prevent condensation.",
        },
        {
          icon: Settings,
          name: "Controls & Thermostats",
          description:
            "Wired and wireless thermostat installation, timer programming, and integration with smart home systems where required.",
        },
        {
          icon: Gauge,
          name: "Performance Verification",
          description:
            "Post-installation testing of supply air temperatures, airflow rates, refrigerant pressures, and electrical draw against manufacturer specifications.",
        },
        {
          icon: Shield,
          name: "Warranty Registration",
          description:
            "Proper manufacturer warranty registration as an authorized installer. Extended warranty options available on select equipment.",
        },
      ]}
      whyJmr={[
        "Every unit sized from calculated heat loads — up to 240 TR single-project capacity across our DX portfolio",
        "30+ HVAC projects delivered across the UAE, from studio apartments to multi-villa communities",
        "ASHRAE 111 and SMACNA compliant installation practices with full commissioning documentation",
        "Refrigerant piping to manufacturer standards: nitrogen-purged brazing, 500-micron vacuum hold test, and weighed charge",
      ]}
    />
  );
}
