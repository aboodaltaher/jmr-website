"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Phone, MessageCircle } from "lucide-react";
import { submitRequest } from "@/app/actions";
import { trackFormSubmit } from "@/lib/gtag";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";

const requestTypes = [
  "AC service, repair or maintenance",
  "New installation or project quote",
  "Other enquiry",
];

const emirates = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
];

const schema = z.object({
  requestType: z.string().min(1, "Please choose what you need"),
  name: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  location: z.string().optional(),
  details: z.string().min(1, "Please tell us what you need"),
});

type FormData = z.infer<typeof schema>;

const inputClass = (hasError: boolean) =>
  `w-full rounded-md border ${hasError ? "border-red-500" : "border-border"} bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`;

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const result = await submitRequest(data);
    if (result.success) {
      setSubmitted(true);
      trackFormSubmit("quote");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-bg-soft p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mt-4 font-heading text-2xl font-bold">
          Thanks — your request is in
        </h2>
        <p className="mt-2 text-text-muted">
          We&apos;ll be in touch shortly. For the fastest response, call or
          WhatsApp us now.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <a
            href={whatsappUrl("/quote")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* What do you need? */}
      <fieldset>
        <legend className="block text-sm font-medium mb-2">
          What do you need? <span className="text-red-500">*</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {requestTypes.map((type) => (
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
            Full name <span className="text-red-500">*</span>
          </label>
          <input id="q-name" type="text" {...register("name")} className={inputClass(!!errors.name)} />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="q-phone" className="block text-sm font-medium mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input id="q-phone" type="tel" {...register("phone")} className={inputClass(!!errors.phone)} />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="q-email" className="block text-sm font-medium mb-1.5">
            Email <span className="text-text-muted">(optional)</span>
          </label>
          <input id="q-email" type="email" {...register("email")} className={inputClass(!!errors.email)} />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="q-location" className="block text-sm font-medium mb-1.5">
            Emirate / area <span className="text-text-muted">(optional)</span>
          </label>
          <select id="q-location" {...register("location")} className={inputClass(false)}>
            <option value="">Select emirate</option>
            {emirates.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="q-details" className="block text-sm font-medium mb-1.5">
          Tell us what you need <span className="text-red-500">*</span>
        </label>
        <textarea
          id="q-details"
          rows={5}
          placeholder="e.g. 3 split units in a villa need servicing, or a VRF quote for a new office fit-out."
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
        {isSubmitting ? "Submitting..." : "Get a Quote"}
      </button>
      <p className="text-center text-xs text-text-muted">
        We reply on call and WhatsApp 24/7.
      </p>
    </form>
  );
}
