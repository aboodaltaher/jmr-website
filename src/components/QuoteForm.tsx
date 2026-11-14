"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { submitRequest } from "@/app/actions";
import { trackFormSubmit } from "@/lib/gtag";
import { FormAssurance } from "@/components/FormAssurance";
import { type FormOf, defineSchema, resolver, required, optionalText, optionalEmail } from "@/lib/form-schema";

type Lang = "en" | "ar";

// All user-facing strings per language. Request types and emirates are sent as
// data, so each language has its own set. TODO(owner): native Arabic review.
const T: Record<Lang, {
  requestTypes: string[];
  emirates: string[];
  whatDoYouNeed: string; required: string; optional: string;
  fullName: string; phone: string; email: string; emirate: string;
  selectEmirate: string; details: string; detailsPlaceholder: string;
  submit: string; submitting: string;
  errType: string; errName: string; errPhone: string; errEmail: string;
  sentTitle: string; sentBody: string;
}> = {
  en: {
    requestTypes: [
      "Emergency — AC down now",
      "AC service, repair or maintenance",
      "New installation or project quote",
      "Other enquiry",
    ],
    emirates: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
    whatDoYouNeed: "What do you need?", required: "*", optional: "(optional)",
    fullName: "Full name", phone: "Phone", email: "Email", emirate: "Emirate / area",
    selectEmirate: "Select emirate",
    details: "Tell us what you need",
    detailsPlaceholder: "e.g. 3 split units in a villa need servicing, or a VRF quote for a new office fit-out.",
    submit: "Get a Quote", submitting: "Submitting...",
    errType: "Please choose what you need", errName: "Full name is required",
    errPhone: "Phone number is required", errEmail: "Please enter a valid email",
    sentTitle: "Thanks — your request is in",
    sentBody: "We've received your details and will be in touch shortly.",
  },
  ar: {
    requestTypes: [
      "طارئ — المكيف متوقف الآن",
      "خدمة أو إصلاح أو صيانة مكيف",
      "تركيب جديد أو عرض سعر لمشروع",
      "استفسار آخر",
    ],
    emirates: ["دبي", "أبوظبي", "الشارقة", "عجمان", "رأس الخيمة", "الفجيرة", "أم القيوين"],
    whatDoYouNeed: "ما الذي تحتاجه؟", required: "*", optional: "(اختياري)",
    fullName: "الاسم الكامل", phone: "الهاتف", email: "البريد الإلكتروني", emirate: "الإمارة / المنطقة",
    selectEmirate: "اختر الإمارة",
    details: "أخبرنا بما تحتاجه",
    detailsPlaceholder: "مثال: 3 وحدات سبليت في فيلا تحتاج صيانة، أو عرض سعر VRF لتجهيز مكتب جديد.",
    submit: "احصل على عرض سعر", submitting: "جارٍ الإرسال...",
    errType: "يرجى اختيار ما تحتاجه", errName: "الاسم الكامل مطلوب",
    errPhone: "رقم الهاتف مطلوب", errEmail: "يرجى إدخال بريد إلكتروني صحيح",
    sentTitle: "شكراً — تم استلام طلبك",
    sentBody: "استلمنا تفاصيلك وسنتواصل معك قريباً.",
  },
};

const inputClass = (hasError: boolean) =>
  `w-full rounded-md border ${hasError ? "border-red-500" : "border-border"} bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`;

export function QuoteForm({ lang = "en" }: { lang?: Lang }) {
  const t = T[lang];
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const schema = defineSchema({
    requestType: required(t.errType),
    name: required(t.errName),
    phone: required(t.errPhone),
    email: optionalEmail(t.errEmail),
    location: optionalText(),
    details: optionalText(),
  });
  type FormData = FormOf<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: resolver(schema) });

  const onSubmit = async (data: FormData) => {
    const result = await submitRequest(data);
    if (result.success) {
      trackFormSubmit("quote", "quote", "quote_page");
      // English flows to the dedicated thank-you page (conversion tracking);
      // Arabic has no thank-you route, so confirm inline.
      if (lang === "ar") setSubmitted(true);
      else router.push("/quote/thank-you");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-bg-soft p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-4 font-heading text-2xl font-bold">{t.sentTitle}</h3>
        <p className="mt-2 text-text-muted">{t.sentBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* What do you need? */}
      <fieldset>
        <legend className="block text-sm font-medium mb-2">
          {t.whatDoYouNeed} <span className="text-red-500">{t.required}</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {t.requestTypes.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-start gap-2 rounded-md border border-border bg-white p-3 text-sm has-[:checked]:border-primary has-[:checked]:bg-primary/5"
            >
              <input
                type="radio"
                value={type}
                {...register("requestType")}
                className="mt-0.5 h-4 w-4 accent-[var(--color-primary)]"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
        {errors.requestType && (
          <p className="mt-1 text-sm text-red-600">{errors.requestType.message}</p>
        )}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="block text-sm font-medium mb-1.5">
            {t.fullName} <span className="text-red-500">{t.required}</span>
          </label>
          <input id="q-name" type="text" autoComplete="name" {...register("name")} className={inputClass(!!errors.name)} />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="q-phone" className="block text-sm font-medium mb-1.5">
            {t.phone} <span className="text-red-500">{t.required}</span>
          </label>
          <input id="q-phone" type="tel" autoComplete="tel" dir="ltr" {...register("phone")} className={inputClass(!!errors.phone)} />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="q-email" className="block text-sm font-medium mb-1.5">
            {t.email} <span className="text-text-muted">{t.optional}</span>
          </label>
          <input id="q-email" type="email" autoComplete="email" dir="ltr" {...register("email")} className={inputClass(!!errors.email)} />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="q-location" className="block text-sm font-medium mb-1.5">
            {t.emirate} <span className="text-text-muted">{t.optional}</span>
          </label>
          <select id="q-location" {...register("location")} className={inputClass(false)}>
            <option value="">{t.selectEmirate}</option>
            {t.emirates.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="q-details" className="block text-sm font-medium mb-1.5">
          {t.details} <span className="text-text-muted">{t.optional}</span>
        </label>
        <textarea
          id="q-details"
          rows={5}
          placeholder={t.detailsPlaceholder}
          {...register("details")}
          className={inputClass(!!errors.details)}
        />
        {errors.details && <p className="mt-1 text-sm text-red-600">{errors.details.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? t.submitting : t.submit}
      </button>
      <FormAssurance lang={lang} />
    </form>
  );
}
