import { buildMetadata } from "@/lib/metadata";
import { Phone, Mail, MapPin, Clock, MessageCircle, Star, ExternalLink } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";
import { ContactForm } from "@/components/ContactForm";
import {
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS_FULL,
  GBP_URL,
  GOOGLE_REVIEWS_URL,
} from "@/lib/company";

// Arabic translation of /contact. Faithful to the English copy — no new claims.
// NAP is sourced from the shared company constants. TODO(owner): native review.
export const metadata = buildMetadata({
  title: "اتصل بـ AGEC | خدمات التكييف في دبي",
  description:
    "تواصل مع AGEC لخدمات التكييف في دبي — اتصل أو راسلنا على واتساب ‎+971 58 557 5987، أو أرسل رسالة بخصوص صيانة أو إصلاح أو عقد صيانة أو مشروع جديد.",
  path: "/ar/contact",
  locale: "ar_AE",
});

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";

export default function ArabicContact() {
  const wa = whatsappUrl("/ar/contact");
  return (
    <>
      {/* Header */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrow}>اتصل بنا</p>
          <h1 className="mt-3 font-heading text-5xl font-bold md:text-6xl">تواصل معنا</h1>
          <p className="mt-4 max-w-2xl text-xl text-text-muted">أخبرنا عن مشروعك أو أرسل لنا سؤالاً.</p>
        </div>
      </section>

      {/* Two-column: info + form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-bg-soft p-8">
                <h2 className="font-heading text-xl font-bold">معلومات التواصل</h2>
                <div className="mt-6 space-y-6">
                  <div className="flex gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium">الهاتف</p>
                      <a href={`tel:${PHONE}`} className="text-sm text-text-muted hover:text-primary transition-colors" dir="ltr">
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium">واتساب</p>
                      <a href={wa} target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-primary transition-colors" dir="ltr">
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium">البريد الإلكتروني</p>
                      <a href={`mailto:${EMAIL}`} className="text-sm text-text-muted hover:text-primary transition-colors" dir="ltr">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium">الموقع</p>
                      <p className="text-sm text-text-muted">مبنى المصرف، شارع الشيخ زايد، دبي، الإمارات</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium">التوفّر</p>
                      <p className="text-sm text-text-muted">اتصل أو راسلنا على واتساب في أي وقت، 24/7. نرد خلال ساعة.</p>
                    </div>
                  </div>
                </div>

                {/* Leave a review */}
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold text-text hover:border-primary transition-colors"
                >
                  <Star className="h-4 w-4 text-primary fill-current" />
                  اترك تقييماً على Google
                  <ExternalLink className="h-3.5 w-3.5 text-text-muted" />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm lang="ar" />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold">زورونا</h2>
          <div className="mt-6 overflow-hidden rounded-lg border border-border">
            <iframe
              title="موقع AGEC Technical Services على خرائط Google"
              src="https://www.google.com/maps?q=25.1431543,55.2210657&z=16&output=embed"
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-sm text-text-muted">
            <span dir="ltr">{ADDRESS_FULL}</span> ·{" "}
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
              افتح في خرائط Google ←
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
