import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights & Engineering Guides | JMR Technical Services",
  description:
    "HVAC engineering guides, system comparisons, and practical advice from JMR Technical Services — based on real project experience across Dubai, Sharjah, and Abu Dhabi.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      {/* Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Insights
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            Insights &amp; Engineering Guides
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">
            Practical HVAC engineering advice, system comparisons, and lessons
            from real projects across the UAE — written by our engineering team,
            not marketers.
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-lg border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-xl font-bold leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-text-muted">
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
