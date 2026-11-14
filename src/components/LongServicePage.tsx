import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { business } from "@/data/business";
import { PHONE, PHONE_DISPLAY, WHATSAPP } from "@/lib/company";
import { MARKER_SPLIT } from "@/lib/draft";
import type { LongService } from "@/data/long-services";

const UI = {
  en: {
    area: "Services",
    areaHref: "/services",
    whatsapp: "WhatsApp us",
    quote: "Get a quote",
    quoteHref: "/quote",
    related: "Related services",
    faq: "Common questions",
    draft: "DRAFT — not published. This page is noindex, out of the sitemap and not linked from anywhere until the open [TO CONFIRM] items are answered.",
    reply: `We reply on call and WhatsApp, ${business.hours.short}.`,
  },
  ar: {
    area: "خدماتنا",
    areaHref: "/ar/services",
    whatsapp: "راسلنا عبر واتساب",
    quote: "اطلب عرض سعر",
    quoteHref: "/ar/quote",
    related: "خدمات ذات صلة",
    faq: "أسئلة شائعة",
    draft: "مسودة — غير منشورة. هذه الصفحة غير مفهرسة وخارج خريطة الموقع وغير مرتبطة من أي صفحة إلى أن تُحسم بنود [TO CONFIRM] المفتوحة.",
    reply: "نرد عبر الاتصال وواتساب.",
  },
} as const;

/** Highlights any "[TO CONFIRM: …]" marker so it cannot be missed on a draft page. */
function Text({ children }: { children: string }) {
  return (
    <>
      {children.split(MARKER_SPLIT).map((part, i) =>
        part.startsWith("[TO CONFIRM") ? (
          <mark key={i} dir="ltr" className="rounded bg-amber-200 px-1 font-semibold text-amber-950">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/**
 * Long-form service page (ducting, MEP, kitchen exhaust, and the Arabic twins).
 * `published` false → shows a DRAFT banner; the route itself sets noindex.
 * Markers are always highlighted: a page with markers is a draft by definition.
 */
export function LongServicePage({
  service: c,
  lang = "en",
  path,
  published,
  related,
}: {
  service: LongService;
  lang?: "en" | "ar";
  /** This page's own path (differs for the Arabic twin). */
  path: string;
  published: boolean;
  /** Related links to show (already localised). */
  related: { href: string; label: string }[];
}) {
  const t = UI[lang];
  const url = `${business.url}${path}`;
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(c.whatsappText)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.h1,
    serviceType: c.serviceType,
    description: c.metaDescription,
    url,
    inLanguage: lang === "ar" ? "ar-AE" : "en-AE",
    areaServed: { "@type": "City", name: "Dubai" },
    provider: {
      "@type": "HVACBusiness",
      "@id": `${business.url}/#business`,
      name: business.name,
      telephone: business.phone.e164,
      url: business.url,
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {!published && (
        <div className="bg-amber-200 px-6 py-3 text-center text-sm font-semibold text-amber-950">
          {t.draft}
        </div>
      )}

      <section className="bg-bg-soft py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs
            lang={lang}
            className="mb-6"
            items={[
              { name: t.area, href: t.areaHref },
              { name: c.kicker.split(" · ")[0], href: path },
            ]}
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{c.kicker}</p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold md:text-6xl">{c.h1}</h1>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-text-muted">
            {c.intro.map((p, i) => (
              <p key={i}><Text>{p}</Text></p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] transition-colors hover:bg-[#1fad52]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> {t.whatsapp}
            </a>
            <Link
              href={t.quoteHref}
              className="rounded-md bg-primary px-7 py-4 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              {t.quote}
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-primary"
              dir="ltr"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {c.sections.map((s, i) => (
        <section key={s.h2} className={i % 2 === 0 ? "py-14 md:py-16" : "bg-bg-soft py-14 md:py-16"}>
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">{s.h2}</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-text-muted">
              {s.paragraphs.map((p, j) => (
                <p key={j}><Text>{p}</Text></p>
              ))}
              {s.bullets && (
                <ul className="list-disc space-y-2 ps-6">
                  {s.bullets.map((b) => (
                    <li key={b}><Text>{b}</Text></li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">{t.related}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {related.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-semibold text-primary hover:underline">
                  {l.label} {lang === "ar" ? "←" : "→"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg-soft py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">{t.faq}</h2>
          <div className="mt-8 space-y-6">
            {c.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-heading text-lg font-semibold">{f.q}</h3>
                <p className="mt-2 leading-relaxed text-text-muted"><Text>{f.a}</Text></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">{c.ctaHeading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            {c.ctaText} {t.reply}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-4 font-semibold text-primary transition-colors hover:bg-white/90"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> {t.whatsapp}
            </a>
            <Link
              href={t.quoteHref}
              className="rounded-md border border-white/60 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.quote}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
