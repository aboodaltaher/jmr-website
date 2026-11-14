import { faqPageSchema, type FaqItem } from "@/lib/faq";

/**
 * FAQPage JSON-LD built from the same `items` array the page renders as its visible FAQ.
 * Renders nothing when `items` is empty.
 */
export function FaqJsonLd({ items, inLanguage }: { items: readonly FaqItem[]; inLanguage?: string }) {
  const schema = faqPageSchema(items, inLanguage);
  if (!schema) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
