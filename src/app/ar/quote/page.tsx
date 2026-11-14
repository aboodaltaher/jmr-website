import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Phone } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { PHONE, PHONE_DISPLAY } from "@/lib/contact";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, EMERGENCY_PREFIX } from "@/lib/company";

// Arabic translation of /quote. Faithful to the English copy — no new claims.
// TODO(owner): native Arabic review.
export const metadata = buildMetadata({
  title: "احصل على عرض سعر أو احجز خدمة في دبي | AGEC",
  description:
    "اطلب عرض سعر لأعمال التكييف أو احجز خدمة أو إصلاح أو صيانة في دبي. نموذج واحد قصير — نرد عبر الهاتف والواتساب 24/7، ومتاحون عبر الإمارات.",
  path: "/ar/quote",
  locale: "ar_AE",
});

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

export default function ArabicQuote() {
  return (
    <>
      {/* Emergency strip (Arabic) */}
      <div className="bg-[#13212E] py-2.5 text-center text-sm text-white">
        {/* EMERGENCY_PREFIX kept for parity; Arabic phrasing shown to users. */}
        <span className="sr-only">{EMERGENCY_PREFIX}</span>
        مكيّفك متوقّف الآن؟ اتصل بـ{" "}
        <a href={`tel:${PHONE}`} className="font-semibold text-primary-light hover:underline" dir="ltr">
          {PHONE_DISPLAY}
        </a>
      </div>

      {/* Header */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs lang="ar" items={[{ name: "احصل على عرض سعر", href: "/ar/quote" }]} className="mb-6" />
          <p className={eyebrow}>احصل على عرض سعر</p>
          <h1 className="mt-3 font-heading text-5xl font-bold md:text-6xl">
            احصل على عرض سعر أو احجز خدمة
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-text-muted">
            نموذج واحد قصير — عرض سعر لمشروع جديد، أو خدمة أو إصلاح أو صيانة للمكيف.
            نرد عبر الهاتف والواتساب 24/7، ومتاحون عبر الإمارات.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <QuoteForm lang="ar" />
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-text-muted">
            <Phone className="h-4 w-4 text-primary" />
            <span>
              مقيّمون {GOOGLE_RATING}★ من {GOOGLE_REVIEW_COUNT} مراجعة على Google
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
