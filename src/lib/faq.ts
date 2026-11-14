// One FAQ shape and one FAQPage builder for the whole site. A page renders its visible FAQ and
// its FAQPage JSON-LD from the SAME array (see components/FaqJsonLd.tsx), so the two cannot drift.

export interface FaqItem {
  q: string;
  a: string;
}

/** FAQPage JSON-LD for `items`, or null when there are none (an empty FAQPage is invalid). */
export function faqPageSchema(items: readonly FaqItem[], inLanguage?: string) {
  if (items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(inLanguage ? { inLanguage } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/**
 * Reads the FAQ out of a blog post's Markdown, so the visible "Frequently asked questions"
 * section is the only place the wording lives. Expects the heading followed by blocks of
 * `**Question**` on one line and the answer on the next line(s), separated by blank lines;
 * the section ends at the next `---` rule or `##` heading.
 */
export function extractMarkdownFaq(markdown: string): FaqItem[] {
  const start = markdown.search(/^## Frequently asked questions\s*$/m);
  if (start === -1) return [];
  const rest = markdown.slice(start).replace(/^## Frequently asked questions\s*$/m, "");
  const end = rest.search(/^(?:---|## )/m);
  const section = end === -1 ? rest : rest.slice(0, end);
  const items: FaqItem[] = [];
  for (const block of section.split(/\n\s*\n/)) {
    const m = block.trim().match(/^\*\*(.+?)\*\*\s*\n([\s\S]+)$/);
    if (m) items.push({ q: m[1].trim(), a: m[2].split("\n").map((l) => l.trim()).join(" ") });
  }
  return items;
}
