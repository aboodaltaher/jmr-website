import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | AGEC",
  description:
    "Get in touch with AGEC in Dubai. Call, email, or send us a message about your HVAC project.",
};

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg-soft py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h1 className="mt-3 font-heading text-5xl font-bold md:text-6xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-text-muted">
            Tell us about your project or send us a question.
          </p>
        </div>
      </section>

      {/* Two-column: info + form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-bg-soft p-8">
                <h2 className="font-heading text-xl font-bold">
                  Contact Information
                </h2>
                <div className="mt-6 space-y-6">
                  <div className="flex gap-4">
                    <Phone
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a
                        href="tel:+971553633139"
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                      >
                        +971 55 363 3139
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href="mailto:sales@jmrtechnical.com"
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                      >
                        sales@jmrtechnical.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-text-muted">
                        Al Hind Tower, Office 1611, Dubai, UAE
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm font-medium">Business Hours</p>
                      <p className="text-sm text-text-muted">
                        Sun–Thu 8am–6pm GST · 24/7 Emergency Support
                        Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold">Visit us</h2>
          <div className="relative mt-6 h-80 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1745750434535-5943ef2fd31a?auto=format&fit=crop&w=1600&q=80"
              alt="Dubai skyline"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-6">
              <p className="text-sm font-medium text-white">
                Al Hind Tower, Office 1611, Dubai, UAE
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
