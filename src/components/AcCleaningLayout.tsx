import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

interface AcCleaningLayoutProps {
  title: string;
  intro: string;
  heroImage?: string;
  included: string[];
  whoItsFor: string[];
}

const steps = [
  { number: "01", name: "Book inspection", description: "Schedule a free site visit at your convenience" },
  { number: "02", name: "We assess", description: "Our technician evaluates your system and confirms scope" },
  { number: "03", name: "Cleaning service", description: "Trained technicians complete the work with minimal disruption" },
  { number: "04", name: "Completion report", description: "You receive a detailed service report on completion" },
];

export function AcCleaningLayout({
  title,
  intro,
  heroImage,
  included,
  whoItsFor,
}: AcCleaningLayoutProps) {
  return (
    <>
      {/* Page Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="mb-6 text-sm text-text-muted">
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span>AC Cleaning</span>
            <span className="mx-2">/</span>
            <span className="text-text">{title}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            AC Cleaning
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">{intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/quote"
              className="rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+971553633139"
              className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              Or call +971 55 363 3139
            </a>
          </div>
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

      {/* What's Included */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            What&apos;s included
          </h2>
          <ul className="mt-6 max-w-3xl space-y-3">
            {included.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                <span className="text-text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            How it works
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="font-heading text-4xl font-bold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold">
                  {step.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Who this is for
          </h2>
          <ul className="mt-6 max-w-3xl space-y-3">
            {whoItsFor.map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            Ready to book your AC cleaning?
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
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              Or call +971 55 363 3139
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
