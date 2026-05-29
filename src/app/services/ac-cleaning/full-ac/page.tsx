import type { Metadata } from "next";
import { AcCleaningLayout } from "@/components/AcCleaningLayout";

export const metadata: Metadata = {
  title: "Full AC Cleaning | AGEC",
  description:
    "Comprehensive AC system cleaning in Dubai covering grills, ducts, coils, fan motor, blower, and cavity. Ideal for annual maintenance of split and ducted systems.",
};

export default function FullAcCleaning() {
  return (
    <AcCleaningLayout
      title="Full AC Cleaning"
      heroImage="https://images.unsplash.com/photo-1718203862467-c33159fdc504?auto=format&fit=crop&w=1600&q=80"
      intro="Comprehensive AC system cleaning covering all critical components. Ideal for scheduled annual maintenance of split, ducted, and concealed systems."
      included={[
        "Basic plastic covering and area protection",
        "Dismantle and deep clean of supply grills",
        "Cleaning and disinfection of ducts",
        "Filter cleaning",
        "Deep cleaning of coils, fan motor, and blower",
        "Cavity area cleaning",
        "Professional disinfection treatment",
        "Service completion report",
      ]}
      whoItsFor={[
        "Residential villas and apartments with split or ducted AC",
        "Annual maintenance schedules",
        "Properties between deep cleans",
        "Commercial spaces with multiple AC units",
      ]}
    />
  );
}
