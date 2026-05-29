import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Phone } from "lucide-react";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";

const SITE_URL = "https://agec.ae";

const relatedReading = [
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
    title: `${post.title} | AGEC`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
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
    image: `${SITE_URL}${post.image}`,
    author: {
      "@type": "Organization",
      name: "Altaher Ghabboun Engineering Contracting (AGEC)",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
                href="tel:+971553633139"
                className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +971 55 363 3139
              </a>
            </div>
          </div>
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
