import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Phone, MessageCircle } from "lucide-react";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";

const SITE_URL = "https://agec.ae";

const relatedReading = [
  {
    href: "/smart-thermostat-installation-dubai",
    title: "Smart Thermostat Installation",
    description: "Supply & professional installation of Google Nest and ecobee across the UAE.",
  },
  {
    href: "/services/vrf-vrv-systems",
    title: "VRF / VRV Systems",
    description: "Multi-zone climate control for villas and commercial buildings.",
  },
  {
    href: "/services/chillers",
    title: "Chiller Systems",
    description: "Air-cooled and water-cooled chiller plants for large-scale cooling.",
  },
  {
    href: "/services/hvac-design",
    title: "HVAC Design & Consultancy",
    description: "Heat load calculations and full system design.",
  },
];

// FAQ content for posts that have an FAQ section, keyed by slug. Used to emit
// FAQPage JSON-LD. Mirrors the visible "Frequently asked questions" section in
// the post body.
const faqBySlug: Record<string, { question: string; answer: string }[]> = {
  "ac-coil-cleaning-and-amc-dubai": [
    {
      question: "How often should AC coils be cleaned in Dubai?",
      answer:
        "At least every 3 months for units in regular use. Dusty areas and heavy-use sites may need it more often.",
    },
    {
      question: "Can I clean the coils myself?",
      answer:
        "You can wash the filters yourself. Coil cleaning needs the unit opened, the right cleaner and care not to bend the fins or wet the electrical parts, so we recommend an engineer does it.",
    },
    {
      question: "Is coil cleaning the same as AC service?",
      answer:
        "No. Coil cleaning is one part of a full service. A full service also covers drains, refrigerant pressure, electrical checks and a performance test.",
    },
    {
      question: "Does coil cleaning reduce my electricity bill?",
      answer:
        "A clean coil lets the system cool with less effort, which usually lowers energy use. The size of the saving depends on how dirty the system was and how the AC is used.",
    },
    {
      question: "Is an AMC worth it for a single villa?",
      answer:
        "If you have several units and want them checked on a schedule before summer, an AMC is usually easier and more predictable than calling for repairs one at a time.",
    },
    {
      question: "Do you cover my emirate?",
      answer: "We serve all 7 emirates. Call or WhatsApp +971 58 557 5987.",
    },
  ],
  "why-ac-bill-so-high-dubai": [
    {
      question:
        "What temperature should I set my AC to in Dubai to save money?",
      answer:
        "24°C is the sweet spot for most people — comfortable, and efficient enough that going lower mainly adds cost. Every degree below that raises consumption by roughly 5%, and the effect is larger in peak summer because the system fights a bigger gap against the outdoor heat. Nudge up to 25–26°C overnight and when you're out, but don't switch the system off entirely during a heatwave.",
    },
    {
      question: "Does servicing my AC really lower my DEWA bill?",
      answer:
        "Yes, and it's usually the best-value thing you can do. Dirty filters, fouled coils, and a dust-caked condenser can quietly cost you 15–20% in efficiency. In Dubai's dust that happens fast. Regular cleaning recovers that efficiency, and the saving typically outweighs the cost of the service over a summer.",
    },
    {
      question:
        "Is district cooling (Empower) cheaper than a split or VRF system?",
      answer:
        "Not necessarily — it's billed differently. District cooling splits your bill into a consumption charge for what you use and a fixed capacity charge (around AED 750 per refrigeration ton per year) that you pay whether you use the AC or not. So part of your cooling cost is fixed and can't be reduced by using less. A DEWA-metered split or VRF system has no fixed capacity charge, but you pay for the electricity directly on the slab tariff. Which works out cheaper depends on the property, the capacity allocated, and how you use it.",
    },
    {
      question: "Will a new inverter AC actually pay for itself?",
      answer:
        "Often, yes — if you're replacing fixed-speed units that are 10+ years old. Modern inverter systems commonly use 30–50% less energy for the same cooling, and on a high-summer-bill villa that can recover the upgrade cost in around two cooling seasons, with better comfort in the meantime. On newer or already-inverter equipment, the payback is much longer and maintenance is the smarter spend.",
    },
    {
      question:
        "Why is my AC bill higher than my neighbour's identical apartment?",
      answer:
        "Usually one of a few things: a lower thermostat setting, a poorly maintained or fouled unit, leaking or uninsulated ductwork, more sun exposure on your side of the building, or air leaks around doors and windows. Same floor plan doesn't mean same system condition or same habits — and small differences compound across a long Dubai summer.",
    },
  ],
};

// Per-slug closing CTA override. Posts without an entry keep the default box.
const ctaBySlug: Record<
  string,
  { heading: string; text: string; quoteHref: string; whatsappText: string }
> = {
  "ac-coil-cleaning-and-amc-dubai": {
    heading: "Get your AC checked before the next heatwave",
    text: "Tell us how many units you have and where they are. An AGEC engineer will send a written proposal.",
    quoteHref: "/ac-amc-dubai#amc-form",
    whatsappText:
      "Hi AGEC, I'd like to know about AC coil cleaning and an AMC for [number] units in [area].",
  },
};

const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 className="mt-12 font-heading text-3xl font-bold">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-heading text-xl font-semibold">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 leading-relaxed text-text">{children}</p>
  ),
  a: ({ href, children }) => {
    const url = href ?? "";
    if (url.startsWith("/")) {
      return (
        <Link
          href={url}
          className="text-primary underline underline-offset-2 hover:text-primary-dark"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={url}
        className="text-primary underline underline-offset-2 hover:text-primary-dark"
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-text">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-text">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-text">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-4 border-primary bg-bg-soft py-3 pl-6 pr-4 font-heading text-lg italic text-text">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-border" />,
  table: ({ children }) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-primary text-left text-white">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="border border-border px-4 py-3 font-semibold">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-4 py-3 align-top">{children}</td>
  ),
  tbody: ({ children }) => (
    <tbody className="[&>tr:nth-child(even)]:bg-bg-soft">{children}</tbody>
  ),
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.titleTag || `${post.title} | AGEC`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.titleTag || `${post.title} | AGEC`,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      images: [{ url: `${SITE_URL}${post.image}` }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: `${SITE_URL}${post.image}`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Altaher Ghabboun Engineering Contracting (AGEC)",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/agec-logo.png`,
      },
    },
  };

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: `${SITE_URL}${post.image}`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Altaher Ghabboun Engineering Contracting (AGEC)",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/agec-logo.png`,
      },
    },
  };

  const faq = faqBySlug[slug];
  const cta = ctaBySlug[slug];
  const faqLd = faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      {/* Breadcrumb */}
      <div className="bg-bg-soft">
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <nav className="text-sm text-text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span className="mx-2">›</span>
            <span className="text-text">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-bg-soft pb-12 pt-6">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-text-muted">
            <span>By the {post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="relative mt-8 aspect-[21/9] overflow-hidden rounded-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* CTA Box */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-6">
          {cta ? (
            <div className="rounded-xl border border-border bg-bg-soft p-8 text-center">
              <h2 className="font-heading text-2xl font-bold">{cta.heading}</h2>
              <p className="mx-auto mt-3 max-w-xl text-text-muted">{cta.text}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={cta.quoteHref}
                  className="rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Get My AMC Quote
                </Link>
                <a
                  href={`https://wa.me/971585575987?text=${encodeURIComponent(
                    cta.whatsappText,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp an Engineer
                </a>
                <a
                  href="tel:+971585575987"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-4 font-semibold text-text hover:border-primary hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-text-muted">
                <GoogleReviewsBadge className="text-text" />
                <span className="text-border">|</span>
                <span>Serving all 7 emirates</span>
                <span className="text-border">|</span>
                <span>24/7 call or WhatsApp</span>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-bg-soft p-8 text-center">
              <h2 className="font-heading text-2xl font-bold">
                Planning a villa HVAC system?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-text-muted">
                Get a real engineering opinion — heat load calculations, system
                comparison, and an honest recommendation for your villa.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:+971585575987"
                  className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +971 58 557 5987
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Reading */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold">Related reading</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedReading.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-primary">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
