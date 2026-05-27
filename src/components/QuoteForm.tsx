"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { submitQuoteRequest } from "@/app/actions";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  location: z.string().min(1, "Please select a location"),
  projectSize: z.string().optional(),
  timeline: z.string().min(1, "Please select a timeline"),
  budget: z.string().optional(),
  details: z.string().min(1, "Please describe your project"),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  { value: "vrf-vrv", label: "VRF/VRV Systems" },
  { value: "chillers", label: "Chillers" },
  { value: "dx-units", label: "DX Units" },
  { value: "ventilation", label: "Ventilation & Fresh Air" },
  { value: "hvac-design", label: "HVAC Design" },
  { value: "testing-commissioning", label: "Testing & Commissioning" },
  { value: "maintenance", label: "Maintenance" },
  { value: "not-sure", label: "Not sure yet" },
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

const timelines = [
  { value: "asap", label: "ASAP" },
  { value: "1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "exploring", label: "Just exploring" },
];

const budgets = [
  { value: "under-50k", label: "Under 50k AED" },
  { value: "50k-150k", label: "50k–150k AED" },
  { value: "150k-500k", label: "150k–500k AED" },
  { value: "500k-plus", label: "500k+ AED" },
  { value: "prefer-not", label: "Prefer not to say" },
];

const inputClass = (hasError: boolean) =>
  `w-full rounded-md border ${hasError ? "border-red-500" : "border-border"} bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`;

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { services: [] },
  });

  const selectedServices = watch("services");

  const toggleService = (value: string) => {
    const current = getValues("services") || [];
    const updated = current.includes(value)
      ? current.filter((s) => s !== value)
      : [...current, value];
    setValue("services", updated, { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    const result = await submitQuoteRequest(data);
    if (result.success) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-bg-soft p-12 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mt-4 font-heading text-2xl font-bold">
          Thanks — we&apos;ll be in touch within 48 hours
        </h2>
        <p className="mt-2 text-text-muted">
          Our engineering team will review your project details and prepare a
          quotation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      {/* Contact Info */}
      <fieldset>
        <legend className="font-heading text-xl font-bold">
          Contact Information
        </legend>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1.5"
            >
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className={inputClass(!!errors.name)}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1.5"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={inputClass(!!errors.email)}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-1.5"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className={inputClass(!!errors.phone)}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium mb-1.5"
            >
              Company name
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              className={inputClass(false)}
            />
          </div>
        </div>
      </fieldset>

      {/* Project Type */}
      <fieldset>
        <legend className="font-heading text-xl font-bold">Project Type</legend>
        {errors.projectType && (
          <p className="mt-1 text-sm text-red-600">
            {errors.projectType.message}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-4">
          {["Residential", "Commercial", "Villa", "Other"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value={type.toLowerCase()}
                {...register("projectType")}
                className="h-4 w-4 accent-[var(--color-primary)]"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Services Needed */}
      <fieldset>
        <legend className="font-heading text-xl font-bold">
          Services Needed
        </legend>
        <p className="mt-1 text-sm text-text-muted">
          Select all that apply.
        </p>
        {errors.services && (
          <p className="mt-1 text-sm text-red-600">
            {errors.services.message}
          </p>
        )}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedServices?.includes(option.value)}
                onChange={() => toggleService(option.value)}
                className="h-4 w-4 rounded accent-[var(--color-primary)]"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Project Details */}
      <fieldset>
        <legend className="font-heading text-xl font-bold">
          Project Details
        </legend>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium mb-1.5"
            >
              Project location <span className="text-red-500">*</span>
            </label>
            <select
              id="location"
              {...register("location")}
              className={inputClass(!!errors.location)}
            >
              <option value="">Select emirate</option>
              {emirates.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">
                {errors.location.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="projectSize"
              className="block text-sm font-medium mb-1.5"
            >
              Approximate project size
            </label>
            <input
              id="projectSize"
              type="text"
              placeholder='e.g. "3-bedroom villa" or "5000 sqft office"'
              {...register("projectSize")}
              className={inputClass(false)}
            />
          </div>
          <div>
            <label
              htmlFor="timeline"
              className="block text-sm font-medium mb-1.5"
            >
              Timeline <span className="text-red-500">*</span>
            </label>
            <select
              id="timeline"
              {...register("timeline")}
              className={inputClass(!!errors.timeline)}
            >
              <option value="">Select timeline</option>
              {timelines.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            {errors.timeline && (
              <p className="mt-1 text-sm text-red-600">
                {errors.timeline.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium mb-1.5"
            >
              Budget range
            </label>
            <select
              id="budget"
              {...register("budget")}
              className={inputClass(false)}
            >
              <option value="">Select budget range</option>
              {budgets.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5">
          <label
            htmlFor="details"
            className="block text-sm font-medium mb-1.5"
          >
            Additional details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="details"
            rows={5}
            placeholder="Tell us about the project"
            {...register("details")}
            className={inputClass(!!errors.details)}
          />
          {errors.details && (
            <p className="mt-1 text-sm text-red-600">
              {errors.details.message}
            </p>
          )}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Request Quote"}
      </button>
    </form>
  );
}
