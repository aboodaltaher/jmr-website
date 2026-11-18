import { business } from "@/data/business";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Phone, MessageCircle } from "lucide-react";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { RelatedServices } from "@/components/RelatedServices";
import { AuthorByline } from "@/components/AuthorByline";
import { AuthorBox } from "@/components/AuthorBox";
import { FOUNDER, PHONE, PHONE_DISPLAY } from "@/lib/company";
import { whatsappUrl } from "@/lib/contact";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SITE_URL = business.url;

// Other published posts to surface under "Related reading", so every post is
// linked from several siblings (internal linking / indexing). Deterministic:
// the three posts that follow the current one in the published list, wrapping
// around, so every post is both a source and a target.
function relatedPostsFor(slug: string, count = 3) {
  const all = getAllPosts();
  const i = all.findIndex((p) => p.slug === slug);
  if (i === -1) return all.slice(0, count);
  return Array.from({ length: count }, (_, n) => all[(i + 1 + n) % all.length])
    .filter((p) => p.slug !== slug);
}

// Per-slug closing CTA override. Posts without an entry keep the default box.
const ctaBySlug: Record<
  string,
  { heading: string; text: string; quoteHref: string }
> = {
  "ac-coil-cleaning-and-amc-dubai": {
    heading: "Get your AC checked before the next heatwave",
    text: "Tell us how many units you have and where they are. An AGEC engineer will send a written proposal.",
    quoteHref: "/ac-amc-dubai#amc-form",
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
  // Include drafts so they build and are previewable by URL (they are noindex
  // and excluded from the blog index and sitemap until published).
  return getAllSlugs().map((slug) => ({ slug }));
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
    ...(post.draft ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: post.titleTag || `${post.title} | AGEC`,
      description: post.description,
      url,
      siteName: "AGEC",
      locale: "en_AE",
      type: "article",
      publishedTime: post.date,
      images: [{ url: `${SITE_URL}${post.image}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.titleTag || `${post.title} | AGEC`,
      description: post.description,
      images: [`${SITE_URL}${post.image}`],
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

  const relatedPosts = relatedPostsFor(slug);

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
    dateModified: post.updated || post.date,
    image: `${SITE_URL}${post.image}`,
    author: {
      "@type": "Person",
      name: FOUNDER,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/agec-logo.png`,
      },
    },
  };

  const cta = ctaBySlug[slug];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      <FaqJsonLd items={post.faq} />

      {/* Breadcrumb */}
      <div className="bg-bg-soft">
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <Breadcrumbs
            items={[
              { name: "Insights", href: "/blog" },
              { name: post.title, href: `/blog/${slug}` },
            ]}
          />
        </div>
      </div>

      {post.draft && (
        <div className="bg-amber-100 text-amber-900">
          <div className="mx-auto max-w-7xl px-6 py-3 text-sm font-semibold">
            Draft — not published. This page is hidden from the blog index,
            sitemap and search engines until published.
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="bg-bg-soft pb-12 pt-6">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <AuthorByline
            date={post.date}
            readingTime={post.readingTime}
            updated={post.updated}
            showTitle
            className="mt-4 text-sm"
          />
          <div className="relative mt-8 aspect-[21/9] overflow-hidden rounded-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
              fetchPriority="high"
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

      {/* Author box */}
      <section className="pb-4">
        <AuthorBox />
      </section>

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
                  href={whatsappUrl(`/blog/${slug}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp an Engineer
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-4 font-semibold text-text hover:border-primary hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-text-muted">
                <GoogleReviewsBadge className="text-text" />
                <span className="text-border">|</span>
                <span>Available across the UAE</span>
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
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <RelatedServices limit={3} heading="Explore our HVAC services" />

      {/* Related Reading — other posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-heading text-3xl font-bold">Related reading</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-heading text-lg font-semibold group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-primary">
                    Read more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
