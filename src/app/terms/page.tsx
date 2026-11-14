import { buildMetadata } from "@/lib/metadata";
import { LegalDraftBanner } from "@/components/LegalDraftBanner";
import {
  COMPANY_LEGAL,
  EMAIL,
  PHONE_DISPLAY,
  ADDRESS_FULL,
  LICENCE_NO,
} from "@/lib/company";

// NOTE(owner): this is a standard, good-faith set of website terms drafted for
// the AGEC website. Please review it against your actual practices and have a
// professional confirm it before relying on it.
export const metadata = buildMetadata({
  title: "Terms of Use | AGEC Technical Services",
  description:
    "The terms that apply when you use agec.ae and when you request a quote, booking or service from AGEC Technical Services.",
  path: "/terms",
});

const UPDATED = "14 November 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-2xl font-bold text-text">{title}</h2>
      <div className="mt-3 space-y-3 text-text-muted">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <LegalDraftBanner />
        <h1 className="mt-6 font-heading text-4xl font-bold text-text md:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: {UPDATED}</p>

        <p className="mt-6 text-text-muted">
          These terms apply to your use of the website at agec.ae (the &ldquo;site&rdquo;),
          operated by {COMPANY_LEGAL} (&ldquo;AGEC&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using
          the site or submitting an enquiry, you agree to these terms. If you do not agree,
          please do not use the site.
        </p>

        <Section title="About the site">
          <p>
            The site provides information about our HVAC design, installation, maintenance
            and related engineering services, and lets you contact us or request a quote or
            booking. The site does not sell products or take payment online.
          </p>
        </Section>

        <Section title="Quotes, bookings and enquiries">
          <p>
            When you submit a quote, booking or contact form, you ask us to get in touch —
            you are not entering a binding contract at that point. Any prices, figures or
            availability shown on the site, or given in response to an enquiry, are
            indicative and subject to a site survey and a written proposal. A binding
            agreement is formed only when we confirm the scope, price and terms of the work
            in writing.
          </p>
          <p>
            Please give accurate contact details so we can respond. We reply by phone and
            WhatsApp, and by email where provided.
          </p>
        </Section>

        <Section title="Accuracy of information">
          <p>
            We take care to keep the information on the site current and correct, but we do
            not warrant that it is complete, accurate or up to date at all times. Technical
            guidance in our articles is general information, not engineering advice for your
            specific property; always get a site-specific assessment before acting on it.
          </p>
        </Section>

        <Section title="Intellectual property">
          <p>
            The content of the site — including text, logos, images of our projects, and
            design — belongs to AGEC or is used with permission, and is protected by
            applicable law. You may view and share the content for your own, non-commercial
            use. You may not copy, republish or use it commercially without our written
            permission.
          </p>
        </Section>

        <Section title="Acceptable use">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Do not use the site unlawfully or in a way that could damage or disrupt it.</li>
            <li>Do not attempt to gain unauthorised access to the site or its systems.</li>
            <li>Do not submit false, misleading or abusive information through our forms.</li>
          </ul>
        </Section>

        <Section title="Third-party links and services">
          <p>
            The site may link to third-party websites and use third-party services (such as
            Google Maps, Google Analytics and Google Ads). We are not responsible for the
            content or practices of third-party sites. Your use of our website is also
            covered by our{" "}
            <a href="/privacy-policy" className="font-medium text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section title="Liability">
          <p>
            The site is provided &ldquo;as is&rdquo;. To the extent permitted by law, we are not
            liable for any loss arising from your use of, or reliance on, the site or its
            content. Nothing in these terms limits any liability that cannot be limited under
            UAE law.
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            We may update these terms from time to time. The &ldquo;last updated&rdquo; date above
            shows when they were last revised. Your continued use of the site means you accept
            the current terms.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These terms are governed by the laws of the United Arab Emirates as applied in the
            Emirate of Dubai, and any dispute is subject to the jurisdiction of the Dubai
            courts.
          </p>
        </Section>

        <Section title="Contact us">
          <p>
            {COMPANY_LEGAL}
            <br />
            {ADDRESS_FULL}
            <br />
            Commercial Licence No. {LICENCE_NO}
            <br />
            Email:{" "}
            <a href={`mailto:${EMAIL}`} className="font-medium text-primary hover:underline">
              {EMAIL}
            </a>
            <br />
            Phone: {PHONE_DISPLAY}
          </p>
        </Section>
      </div>
    </article>
  );
}
