import type { Metadata } from "next";
import { BookForm } from "@/components/BookForm";

export const metadata: Metadata = {
  title: "Book a Service | AGEC",
  description:
    "Book HVAC maintenance, repairs, AMC, or emergency service in Dubai. AGEC — qualified technicians, priority response.",
};

export default function Book() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Book a Service
          </p>
          <h1 className="mt-3 font-heading text-5xl font-bold md:text-6xl">
            Book maintenance or service call
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-text-muted">
            For maintenance, repairs, AMC inquiries, or one-off service calls.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <BookForm />
        </div>
      </section>
    </>
  );
}
