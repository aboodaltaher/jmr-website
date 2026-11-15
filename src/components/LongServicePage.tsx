import { Fragment } from "react";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MidPageCta } from "@/components/MidPageCta";
import { business } from "@/data/business";
import { PHONE, PHONE_DISPLAY } from "@/lib/company";
import { whatsappUrl } from "@/lib/contact";
import { MARKER_SPLIT, resolveDraft } from "@/lib/draft";
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
    draft: "DRAFT — not published. This page returns 404 on the live site until it is switched on (src/data/new-pages.ts). Local and preview builds show it for review.",
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
    draft: "مسودة — غير منشورة. تعرض هذه الصفحة خطأ 404 على الموقع المباشر إلى أن يتم تفعيلها (src/data/new-pages.ts). تظهر في بيئتَي المعاينة والتطوير للمراجعة فقط.",
    reply: "نرد عبر الاتصال وواتساب.",
  },
} as const;

const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;

/** Renders **bold** and [label](/path) links inside a piece of copy. */
function Inline({ children }: { children: string }) {
  return (
    <>
      {children.split(INLINE).map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i} className="text-text">{bold[1]}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link) {
          const [, label, href] = link;
          const cls = "font-semibold text-primary underline underline-offset-2 hover:text-primary-dark";
          return href.endsWith(".pdf") ? (
            <a key={i} href={href} className={cls} download>{label}</a>
          ) : (
            <Link key={i} href={href} className={cls}>{label}</Link>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

/** Highlights any "[TO CONFIRM: …]" marker (local/preview). In production the marker is stripped (resolveDraft). */
function Text({ children }: { children: string }) {
  const text = resolveDraft(children);
  return (
    <>
      {text.split(MARKER_SPLIT).map((part, i) =>
        part.startsWith("[TO CONFIRM") ? (
          <mark key={i} dir="ltr" className="rounded bg-amber-200 px-1 font-semibold text-amber-950">
            {part}
          </mark>
        ) : (
          <Inline key={i}>{part}</Inline>
        ),
      )}
    </>
  );
}

/**
 * Long-form service page (ducting, MEP, kitchen exhaust, and the Arabic twins).
 * `published` false → shows a DRAFT banner; the route sets noindex and 404s in production.
 * Pages that still have markers 404 in production (see each route), so markers only ever
 * render in local and Vercel preview builds.
 */
export function LongServicePage({
  service: rawIn,
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
  // {{LICENCE}} is filled from business.ts, so the licence number is never typed into copy (check-nap).
  const fill = <T,>(v: T): T => {
    if (typeof v === "string") return v.replaceAll("{{LICENCE}}", business.licence.label) as T;
    if (Array.isArray(v)) return v.map(fill) as T;
    if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fill(x)])) as T;
    return v;
  };
  const raw = fill(rawIn);
  // On the live site markers are stripped, so drop anything left empty (and any FAQ with no answer).
  const keep = (x: string) => resolveDraft(x) !== "";
  const c: LongService = {
    ...raw,
    intro: raw.intro.filter(keep),
    sections: raw.sections.map((s) => ({
      ...s,
      paragraphs: s.paragraphs.filter(keep),
      bullets: s.bullets?.filter(keep),
      subsections: s.subsections?.map((x) => ({
        ...x,
        paragraphs: x.paragraphs?.filter(keep),
        bullets: x.bullets?.filter(keep),
      })),
    })),
    faqs: raw.faqs.filter((f) => keep(f.a)).map((f) => ({ ...f, a: resolveDraft(f.a) })),
  };
  const ctaAfter = Math.max(0, c.sections.findIndex((s) => (s.bullets?.length ?? 0) > 0 || (s.subsections?.length ?? 0) > 0));
  const url = `${business.url}${path}`;
  const wa = whatsappUrl(path);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.h1,
    serviceType: c.serviceType,
    description: c.metaDescription,
    url,
    inLanguage: lang === "ar" ? "ar-AE" : "en-AE",
    areaServed: c.areaServed
      ? c.areaServed.map((name) => ({ "@type": "AdministrativeArea", name }))
      : { "@type": "City", name: "Dubai" },
    ...(c.offerCatalog
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: c.offerCatalog.name,
            itemListElement: c.offerCatalog.items.map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name },
            })),
          },
        }
      : {}),
    provider: {
      "@type": "HVACBusiness",
      "@id": `${business.url}/#business`,
      name: business.name,
      telephone: business.phone.e164,
      url: business.url,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FaqJsonLd items={c.faqs} />

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
        <Fragment key={s.h2}>
        <section className={i % 2 === 0 ? "py-14 md:py-16" : "bg-bg-soft py-14 md:py-16"}>
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
              {s.subsections?.map((x) => (
                <div key={x.h3} className="pt-2">
                  <h3 className="font-heading text-xl font-semibold text-text">{x.h3}</h3>
                  {x.paragraphs?.map((p, j) => (
                    <p key={j} className="mt-2"><Text>{p}</Text></p>
                  ))}
                  {x.bullets && (
                    <ul className="mt-2 list-disc space-y-2 ps-6">
                      {x.bullets.map((b) => (
                        <li key={b}><Text>{b}</Text></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            {c.figures
              ?.filter((f) => f.afterSection === i)
              .map((f) => (
                <figure key={f.src} className="mt-8">
                  <div
                    className={
                      f.fit === "contain"
                        ? "relative mx-auto aspect-[3/4] max-w-xs overflow-hidden rounded-xl border border-border bg-white"
                        : "relative aspect-[16/9] overflow-hidden rounded-xl border border-border"
                    }
                  >
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes={f.fit === "contain" ? "320px" : "(max-width: 896px) 100vw, 896px"}
                      className={f.fit === "contain" ? "object-contain" : "object-cover"}
                    />
                  </div>
                  {f.caption && <figcaption className="mt-2 text-sm text-text-muted">{f.caption}</figcaption>}
                </figure>
              ))}
          </div>
        </section>
        {/* Mid-page lead block, directly after the first checklist section */}
        {i === ctaAfter && <MidPageCta service={c.ctaService ?? c.serviceType} path={path} lang={lang} />}
        </Fragment>
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
