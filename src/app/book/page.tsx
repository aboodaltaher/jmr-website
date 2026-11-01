import { buildMetadata } from "@/lib/metadata";
import { QuoteContent } from "@/components/QuoteContent";

// /book shows the same request form as /quote. Canonical points to /quote so
// the two URLs don't compete as duplicate content.
export const metadata = buildMetadata({
  title: "Get a Quote or Book a Service in Dubai | AGEC",
  description:
    "Request an HVAC quote or book AC service, repair or maintenance in Dubai. One short form — we reply on call and WhatsApp 24/7, across all 7 emirates.",
  path: "/quote",
});

export default function Book() {
  return <QuoteContent />;
}
