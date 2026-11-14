"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check, MessageCircle, Phone } from "lucide-react";
import { submitRequest } from "@/app/actions";
import { trackFormSubmit } from "@/lib/gtag";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";
import { type FormOf, defineSchema, resolver, required, optionalText, all, check } from "@/lib/form-schema";

// Same enquiry types and emirates as the /quote form (English).
const REQUEST_TYPES = [
  "Emergency — AC down now",
  "AC service, repair or maintenance",
  "New installation or project quote",
  "Other enquiry",
];
const EMIRATES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];

// Accepts +971 5x, 971 5x, 05x or 5x (UAE mobile), ignoring spaces/dashes.
const UAE_MOBILE = /^(?:\+?971|0)?5\d{8}$/;

const schema = defineSchema({
  requestType: required("Please choose what you need"),
  name: required("Full name is required"),
  phone: all(
    required("Phone number is required"),
    check((v) => UAE_MOBILE.test(v.replace(/[\s-]/g, "")), "Enter a valid UAE mobile, e.g. 05X XXX XXXX"),
  ),
  location: optionalText(),
});
type FormData = FormOf<typeof schema>;

const field =
  "w-full rounded-md border bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40";

export function HeroQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: resolver(schema) });

  const onSubmit = async (data: FormData) => {
    setFailed(false);
    const result = await submitRequest({
      ...data,
      details: "Sent from the homepage hero quick-quote form.",
    });
    if (result.success) {
      // Google Ads form conversion (unchanged) + GA4 form_submit_quote with
      // { page_path, service, form_location: "home_hero" }.
      trackFormSubmit("quote", "quote", "home_hero");
      setSubmitted(true);
    } else {
      setFailed(true);
    }
  };

  return (
    // min-height reserves the card so the success/error swap doesn't shift layout.
    <div className="min-h-[468px] rounded-xl border border-border bg-white p-6 shadow-xl">
      {submitted ? (
        <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-7 w-7 text-primary" />
          </div>
          <h3 className="mt-4 font-heading text-xl font-bold text-text">
            Thanks — an engineer will contact you shortly
          </h3>
          <p className="mt-2 text-sm text-text-muted">
            We reply on call and WhatsApp, 24/7.
          </p>
          <a
            href={whatsappUrl("/")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> Message us on WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div>
            <h2 className="font-heading text-xl font-bold text-text">Get a quote in 1 hour</h2>
            <p className="mt-1 text-sm text-text-muted">We reply on call and WhatsApp, 24/7.</p>
          </div>

          <div>
            <label htmlFor="hero-type" className="mb-1.5 block text-sm font-medium text-text">
              What do you need? <span className="text-red-500">*</span>
            </label>
            <select
              id="hero-type"
              defaultValue=""
              aria-invalid={!!errors.requestType}
              aria-describedby={errors.requestType ? "hero-type-err" : undefined}
              {...register("requestType")}
              className={`${field} ${errors.requestType ? "border-red-500" : "border-border"}`}
            >
              <option value="" disabled>
                Select…
              </option>
              {REQUEST_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.requestType && (
              <p id="hero-type-err" className="mt-1 text-sm text-red-600">
                {errors.requestType.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="hero-name" className="mb-1.5 block text-sm font-medium text-text">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              id="hero-name"
              type="text"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "hero-name-err" : undefined}
              {...register("name")}
              className={`${field} ${errors.name ? "border-red-500" : "border-border"}`}
            />
            {errors.name && (
              <p id="hero-name-err" className="mt-1 text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="hero-phone" className="mb-1.5 block text-sm font-medium text-text">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="hero-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              dir="ltr"
              placeholder="05X XXX XXXX"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "hero-phone-err" : undefined}
              {...register("phone")}
              className={`${field} ${errors.phone ? "border-red-500" : "border-border"}`}
            />
            {errors.phone && (
              <p id="hero-phone-err" className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="hero-location" className="mb-1.5 block text-sm font-medium text-text">
              Area / emirate <span className="text-text-muted">(optional)</span>
            </label>
            <select
              id="hero-location"
              defaultValue=""
              {...register("location")}
              className={`${field} border-border`}
            >
              <option value="">Select emirate</option>
              {EMIRATES.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>

          {failed && (
            <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
              Something went wrong. Please try again, or call{" "}
              <a href={`tel:${PHONE}`} className="font-semibold underline">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-primary px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
          >
            {isSubmitting ? "Submitting…" : "Get my quote"}
          </button>

          <p className="text-xs leading-relaxed text-text-muted">
            Your details are only used to respond to your enquiry — never shared or sold.{" "}
            <a href="/privacy-policy" className="underline hover:text-primary">
              Privacy policy
            </a>
            .
          </p>
          <p className="flex items-center justify-center gap-1.5 text-xs text-text-muted">
            <Phone className="h-3.5 w-3.5" /> Prefer to talk? {PHONE_DISPLAY}
          </p>
        </form>
      )}
    </div>
  );
}
