"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { submitBooking } from "@/app/actions";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  address: z.string().min(1, "Address is required"),
  serviceType: z.string().min(1, "Please select a service type"),
  equipmentType: z.string().min(1, "Please select equipment type"),
  description: z.string().min(1, "Please describe the issue"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const equipmentTypes = [
  "Split AC",
  "VRF/VRV System",
  "Central AC",
  "Chiller",
  "Ductwork",
  "Ventilation",
  "Other",
  "Not sure",
];

const timeSlots = [
  { value: "morning", label: "Morning (8am–12pm)" },
  { value: "afternoon", label: "Afternoon (12pm–4pm)" },
  { value: "evening", label: "Evening (4pm–7pm)" },
  { value: "flexible", label: "Flexible" },
];

const inputClass = (hasError: boolean) =>
  `w-full rounded-md border ${hasError ? "border-red-500" : "border-border"} bg-white px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`;

export function BookForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const result = await submitBooking(data);
    if (result.success) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-bg-soft p-12 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mt-4 font-heading text-2xl font-bold">
          Booking received
        </h2>
        <p className="mt-2 text-text-muted">
          We&apos;ll confirm your appointment shortly.
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
              htmlFor="address"
              className="block text-sm font-medium mb-1.5"
            >
              Address / location <span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              type="text"
              {...register("address")}
              className={inputClass(!!errors.address)}
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>
      </fieldset>

      {/* Service Type */}
      <fieldset>
        <legend className="font-heading text-xl font-bold">Service Type</legend>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-600">
            {errors.serviceType.message}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-4">
          {[
            { value: "maintenance", label: "Maintenance call" },
            { value: "repair", label: "Repair" },
            { value: "amc", label: "AMC inquiry" },
            { value: "emergency", label: "Emergency" },
            { value: "other", label: "Other" },
          ].map((type) => (
            <label
              key={type.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                value={type.value}
                {...register("serviceType")}
                className="h-4 w-4 accent-[var(--color-primary)]"
              />
              <span className="text-sm">{type.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Equipment & Description */}
      <fieldset>
        <legend className="font-heading text-xl font-bold">
          Equipment &amp; Issue
        </legend>
        <div className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="equipmentType"
              className="block text-sm font-medium mb-1.5"
            >
              Equipment type <span className="text-red-500">*</span>
            </label>
            <select
              id="equipmentType"
              {...register("equipmentType")}
              className={inputClass(!!errors.equipmentType)}
            >
              <option value="">Select equipment type</option>
              {equipmentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.equipmentType && (
              <p className="mt-1 text-sm text-red-600">
                {errors.equipmentType.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1.5"
            >
              Issue description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Briefly describe the issue or service needed"
              {...register("description")}
              className={inputClass(!!errors.description)}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>
      </fieldset>

      {/* Scheduling */}
      <fieldset>
        <legend className="font-heading text-xl font-bold">
          Preferred Schedule
        </legend>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="preferredDate"
              className="block text-sm font-medium mb-1.5"
            >
              Preferred date
            </label>
            <input
              id="preferredDate"
              type="date"
              {...register("preferredDate")}
              className={inputClass(false)}
            />
          </div>
          <div>
            <label
              htmlFor="preferredTime"
              className="block text-sm font-medium mb-1.5"
            >
              Preferred time
            </label>
            <select
              id="preferredTime"
              {...register("preferredTime")}
              className={inputClass(false)}
            >
              <option value="">Select time slot</option>
              {timeSlots.map((slot) => (
                <option key={slot.value} value={slot.value}>
                  {slot.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-8 py-4 font-medium text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Book Service"}
      </button>
    </form>
  );
}
