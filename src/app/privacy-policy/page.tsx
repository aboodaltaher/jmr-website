import { buildMetadata } from "@/lib/metadata";
import { EMAIL, PHONE_DISPLAY, COMPANY_LEGAL } from "@/lib/company";

// PLACEHOLDER PAGE — flagged to the owner.
// TODO(owner): replace the body below with your real privacy policy (what data
// you collect via the lead forms, how it's used, retention, third parties such
// as Resend for email delivery, and how to request deletion). Set `noindex` to
// false and add this route to src/lib/routes.ts once the real policy is live.
export const metadata = buildMetadata({
  title: "Privacy Policy | AGEC Technical Services",
  description:
    "How AGEC Technical Services collects and uses the details you submit through the website — used only to respond to your enquiry, never shared or sold.",
  path: "/privacy-policy",
  noindex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-heading text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-6 text-text-muted">
          {COMPANY_LEGAL} respects your privacy. The details you submit through
          our quote, booking and contact forms are used only to respond to your
          enquiry. We never sell or share your information with third parties for
          marketing.
        </p>
        <p className="mt-4 text-text-muted">
          This is a placeholder page. A full privacy policy — covering the data
          we collect, how long we keep it, the services we use to process
          enquiries, and how to request deletion — will be published here.
        </p>
        <p className="mt-6 text-text-muted">
          Questions about your data? Contact us at{" "}
          <a href={`mailto:${EMAIL}`} className="font-medium text-primary hover:underline">
            {EMAIL}
          </a>{" "}
          or {PHONE_DISPLAY}.
        </p>
      </div>
    </section>
  );
}
