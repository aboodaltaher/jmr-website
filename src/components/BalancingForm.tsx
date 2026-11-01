"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, MessageCircle } from "lucide-react";
import { submitBalancingRequest } from "@/app/actions";
import { trackFormSubmit } from "@/lib/gtag";
import { FormAssurance } from "@/components/FormAssurance";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  buildingType: z.string().min(1, "Please select a building type"),
  symptom: z.string().min(1, "Please describe the symptom"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  location: z.string().optional(),
  drawings: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputClass = (hasError: boolean) =>
  `w-full rounded-md border ${hasError ? "border-red-500" : "border-border"} bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`;

export function BalancingForm({ whatsappHref }: { whatsappHref: string }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const result = await submitBalancingRequest(data);
    if (result.success) {
      setSubmitted(true);
      trackFormSubmit("balancing");
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
          An engineer will review the details and reply with next steps.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#062e14] hover:bg-[#1fad52] transition-colors"
        >
          <MessageCircle className="h-4 w-4" /> Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bal-name" className="mb-1.5 block text-sm font-medium">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="bal-name"
            type="text"
            autoComplete="name"
            {...register("name")}
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="bal-company" className="mb-1.5 block text-sm font-medium">
            Company <span className="text-text-muted">(optional)</span>
          </label>
          <input
            id="bal-company"
            type="text"
            autoComplete="organization"
            {...register("company")}
            className={inputClass(!!errors.company)}
          />
        </div>
        <div>
          <label htmlFor="bal-phone" className="mb-1.5 block text-sm font-medium">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="bal-phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="bal-email" className="mb-1.5 block text-sm font-medium">
            Email <span className="text-text-muted">(optional)</span>
          </label>
          <input
            id="bal-email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="bal-buildingType" className="mb-1.5 block text-sm font-medium">
            Building type <span className="text-red-500">*</span>
          </label>
          <select
            id="bal-buildingType"
            {...register("buildingType")}
            className={inputClass(!!errors.buildingType)}
          >
            <option value="">Select building type</option>
            {[
              "Office",
              "Retail",
              "Restaurant",
              "Hotel",
              "Residential building",
              "Villa",
              "Other",
            ].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.buildingType && (
            <p className="mt-1 text-sm text-red-600">
              {errors.buildingType.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="bal-location" className="mb-1.5 block text-sm font-medium">
            Location / emirate <span className="text-text-muted">(optional)</span>
          </label>
          <input
            id="bal-location"
            type="text"
            autoComplete="address-level2"
            placeholder="e.g. Business Bay, Dubai"
            {...register("location")}
            className={inputClass(!!errors.location)}
          />
        </div>
        <div>
          <label htmlFor="bal-drawings" className="mb-1.5 block text-sm font-medium">
            Drawings available? <span className="text-text-muted">(optional)</span>
          </label>
          <select
            id="bal-drawings"
            {...register("drawings")}
            className={inputClass(!!errors.drawings)}
          >
            <option value="">Select an option</option>
            {["Yes", "No", "Some"].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="bal-symptom" className="mb-1.5 block text-sm font-medium">
          What is the symptom? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="bal-symptom"
          rows={4}
          placeholder="e.g. meeting rooms too warm, noisy diffusers, failed handover"
          {...register("symptom")}
          className={inputClass(!!errors.symptom)}
        />
        {errors.symptom && (
          <p className="mt-1 text-sm text-red-600">{errors.symptom.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="bal-notes" className="mb-1.5 block text-sm font-medium">
          Notes
        </label>
        <textarea
          id="bal-notes"
          rows={3}
          {...register("notes")}
          className={inputClass(false)}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Get a Quote"}
      </button>
      <p className="text-center text-sm text-text-muted">
        An engineer replies with next steps.
      </p>
      <FormAssurance />
    </form>
  );
}
