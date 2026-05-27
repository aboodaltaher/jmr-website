import Image from "next/image";
import Link from "next/link";
import { Check, type LucideIcon } from "lucide-react";

interface Capability {
  icon: LucideIcon;
  name: string;
  description: string;
}

interface ServiceDetailLayoutProps {
  title: string;
  intro: string;
  heroImage?: string;
  overview: React.ReactNode;
  whenYouNeedIt: string[];
  whatWeDo: Capability[];
  whyJmr: string[];
}

export function ServiceDetailLayout({
  title,
  intro,
  heroImage,
  overview,
  whenYouNeedIt,
  whatWeDo,
  whyJmr,
}: ServiceDetailLayoutProps) {
  return (
    <>
      {/* Page Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="mb-6 text-sm text-text-muted">
            <Link
              href="/services"
              className="hover:text-primary transition-colors"
            >
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text">{title}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Service
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">{intro}</p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {heroImage && (
        <div className="relative mx-auto max-w-7xl px-6 -mt-1">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            What is {title}?
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-text-muted">
            {overview}
          </div>
        </div>
      </section>

      {/* When You Need It */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            When you need this service
          </h2>
          <ul className="mt-6 max-w-3xl space-y-3">
            {whenYouNeedIt.map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            What JMR provides
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((cap) => (
              <div key={cap.name}>
                <cap.icon
                  className="h-8 w-8 text-primary"
                  strokeWidth={1.5}
                />
                <h3 className="mt-3 font-heading text-lg font-semibold">
                  {cap.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why JMR */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Why JMR for {title}
          </h2>
          <ul className="mt-6 max-w-3xl space-y-4">
            {whyJmr.map((reason) => (
              <li key={reason} className="flex gap-3">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={2}
                />
                <span className="text-text-muted">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            Ready to discuss your {title} project?
          </h2>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
          >
            Get a Quote
          </Link>
          <div className="mt-4">
            <a
              href="tel:+971553633139"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Or call +971 55 363 3139
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
