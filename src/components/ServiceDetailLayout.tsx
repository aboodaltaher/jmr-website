import Image from "next/image";
import Link from "next/link";
import { Check, type LucideIcon } from "lucide-react";
import { RelatedServices } from "@/components/RelatedServices";
import { AREA_SERVED_SCHEMA } from "@/lib/company";

interface Capability {
  icon: LucideIcon;
  name: string;
  description: string;
  href?: string;
}

interface FaqItem {
  q: string;
  a: string;
}

type Lang = "en" | "ar";

interface ServiceDetailLayoutProps {
  title: string;
  intro: string;
  heroImage?: string;
  heroImageAlt?: string;
  overview: React.ReactNode;
  whenYouNeedIt: string[];
  whatWeDo: Capability[];
  whyAgec: string[];
  faq?: FaqItem[];
  /** Path after the domain, e.g. "services/chillers" — enables Service + BreadcrumbList schema. */
  slug?: string;
  /** Optional inline lead form rendered just above the closing CTA band. */
  leadForm?: React.ReactNode;
  /** Locale. "ar" localises the headings/CTA and points links at the /ar subtree. */
  lang?: Lang;
}

// Localised chrome strings. {t} is replaced with the service title.
const STRINGS: Record<Lang, {
  servicesLabel: string;
  servicesHref: string;
  eyebrow: string;
  whatIs: string;
  whenHeading: string;
  whatHeading: string;
  whyHeading: string;
  faqHeading: string;
  getQuote: string;
  quoteHref: string;
  orCall: string;
  ready: string;
  leadHeading: string;
  leadSub: string;
}> = {
  en: {
    servicesLabel: "Services",
    servicesHref: "/services",
    eyebrow: "Service",
    whatIs: "What is {t}?",
    whenHeading: "When you need this service",
    whatHeading: "What AGEC provides",
    whyHeading: "Why AGEC for {t}",
    faqHeading: "Frequently asked questions",
    getQuote: "Get a Quote",
    quoteHref: "/quote",
    orCall: "Or call +971 58 557 5987",
    ready: "Ready to discuss your {t} project?",
    leadHeading: "Get a quote for {t}",
    leadSub: "Send your details and our engineering team will come back to you.",
  },
  ar: {
    servicesLabel: "الخدمات",
    servicesHref: "/ar/services",
    eyebrow: "خدمة",
    whatIs: "ما هي {t}؟",
    whenHeading: "متى تحتاج هذه الخدمة",
    whatHeading: "ماذا تقدّم AGEC",
    whyHeading: "لماذا AGEC لـ {t}",
    faqHeading: "أسئلة شائعة",
    getQuote: "احصل على عرض سعر",
    quoteHref: "/ar/quote",
    orCall: "أو اتصل على ‎+971 58 557 5987",
    ready: "هل أنت مستعد لمناقشة مشروع {t}؟",
    leadHeading: "احصل على عرض سعر لـ {t}",
    leadSub: "أرسل تفاصيلك وسيعاود فريقنا الهندسي التواصل معك.",
  },
};

export function ServiceDetailLayout({
  title,
  intro,
  heroImage,
  heroImageAlt,
  overview,
  whenYouNeedIt,
  whatWeDo,
  whyAgec,
  faq,
  slug,
  leadForm,
  lang = "en",
}: ServiceDetailLayoutProps) {
  const s = STRINGS[lang];
  const t = (str: string) => str.replace("{t}", title);
  const url = slug ? `https://agec.ae/${slug}` : null;

  const faqSchema =
    faq && faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          ...(lang === "ar" ? { inLanguage: "ar" } : {}),
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  const serviceSchema = url
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: title,
        description: intro,
        serviceType: title,
        url,
        ...(lang === "ar" ? { inLanguage: "ar" } : {}),
        areaServed: AREA_SERVED_SCHEMA,
        provider: {
          "@type": "HVACBusiness",
          name: "AGEC Technical Services",
          telephone: "+971585575987",
          email: "a.altaher@agec.ae",
          address: {
            "@type": "PostalAddress",
            streetAddress: "AlMasraf Building, Sheikh Zayed Road",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
          url: "https://agec.ae",
        },
      }
    : null;

  const breadcrumbSchema = url
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: lang === "ar" ? "الرئيسية" : "Home", item: lang === "ar" ? "https://agec.ae/ar" : "https://agec.ae" },
          { "@type": "ListItem", position: 2, name: s.servicesLabel, item: `https://agec.ae${s.servicesHref}` },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      }
    : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {/* Page Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-muted">
            <Link
              href={s.servicesHref}
              className="hover:text-primary transition-colors"
            >
              {s.servicesLabel}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text">{title}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {s.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">{intro}</p>
          <Link
            href={s.quoteHref}
            className="mt-8 inline-block rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors"
          >
            {s.getQuote}
          </Link>
        </div>
      </section>

      {heroImage && (
        <div className="relative mx-auto max-w-7xl px-6 -mt-1">
          <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
            <Image
              src={heroImage}
              alt={heroImageAlt ?? title}
              fill
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            {t(s.whatIs)}
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
            {s.whenHeading}
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
            {s.whatHeading}
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
                {cap.href && (
                  <Link
                    href={cap.href}
                    className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    {lang === "ar" ? "اعرف المزيد ←" : "Learn more →"}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AGEC */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            {t(s.whyHeading)}
          </h2>
          <ul className="mt-6 max-w-3xl space-y-4">
            {whyAgec.map((reason) => (
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

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              {s.faqHeading}
            </h2>
            <div className="mt-8 space-y-6">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="font-heading text-lg font-semibold">
                    {item.q}
                  </h3>
                  <p className="mt-2 leading-relaxed text-text-muted">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services — English subtree only (links point at English pages). */}
      {lang === "en" && (
        <RelatedServices currentPath={url ? `/${slug}` : undefined} />
      )}

      {/* Inline quick quote */}
      {leadForm && (
        <section className="bg-bg-soft py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
              {t(s.leadHeading)}
            </h2>
            <p className="mt-3 text-center text-text-muted">
              {s.leadSub}
            </p>
            <div className="mt-8 rounded-xl border border-border bg-white p-6 md:p-8">
              {leadForm}
            </div>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            {t(s.ready)}
          </h2>
          <Link
            href={s.quoteHref}
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
          >
            {s.getQuote}
          </Link>
          <div className="mt-4">
            <a
              href="tel:+971585575987"
              className="text-sm font-medium text-white hover:underline transition-colors"
              dir="ltr"
            >
              {s.orCall}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
