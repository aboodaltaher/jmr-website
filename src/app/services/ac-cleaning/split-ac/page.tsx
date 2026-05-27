import type { Metadata } from "next";
import { AcCleaningLayout } from "@/components/AcCleaningLayout";

export const metadata: Metadata = {
  title: "Split AC Cleaning | JMR Technical Services",
  description:
    "Split AC cleaning service in Dubai — filter cleaning, coil treatment, drain line flush, condenser cleaning, and performance verification. Quick turnaround.",
};

export default function SplitAcCleaning() {
  return (
    <AcCleaningLayout
      title="Split AC Cleaning"
      intro="Targeted cleaning service for split AC units. Quick turnaround, minimal disruption, and verified performance after cleaning."
      included={[
        "Indoor unit panel and filter cleaning",
        "Evaporator coil treatment and disinfection",
        "Drain line flushing",
        "Outdoor unit (condenser) cleaning",
        "Fan blade cleaning and balancing check",
        "Refrigerant pressure verification",
        "Performance verification post-clean",
        "Service completion report",
      ]}
      whoItsFor={[
        "Apartments and villas with split AC units",
        "Quarterly or seasonal maintenance",
        "Properties with multiple split units across rooms",
        "Customers who notice reduced cooling or higher bills",
      ]}
    />
  );
}
