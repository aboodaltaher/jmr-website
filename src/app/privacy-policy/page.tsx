import { buildMetadata } from "@/lib/metadata";
import {
  COMPANY_LEGAL,
  EMAIL,
  PHONE_DISPLAY,
  ADDRESS_FULL,
  LICENCE_NO,
} from "@/lib/company";

// NOTE(owner): this is a standard, good-faith privacy policy drafted for the
// AGEC website. Please review it against your actual data practices and have a
// professional confirm it meets UAE PDPL requirements before relying on it.
export const metadata = buildMetadata({
  title: "Privacy Policy | AGEC Technical Services",
  description:
    "How AGEC Technical Services collects, uses and protects the details you submit through agec.ae — used only to respond to your enquiry, never sold.",
  path: "/privacy-policy",
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

export default function PrivacyPolicyPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-heading text-4xl font-bold text-text md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: {UPDATED}</p>

        <p className="mt-6 text-text-muted">
          {COMPANY_LEGAL} (&ldquo;AGEC&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the website
          at agec.ae. This policy explains what information we collect when you use the
          site or contact us, how we use it, and the choices you have. We respect your
          privacy and handle your information in line with applicable UAE data protection law.
        </p>

        <Section title="Information we collect">
          <p>
            <strong className="text-text">Information you give us.</strong> When you submit a
            quote, booking or contact form, or message us by phone, WhatsApp or email, we
            collect the details you provide — typically your name, phone number, email
            address, emirate/area and the details of your enquiry.
          </p>
          <p>
            <strong className="text-text">Information collected automatically.</strong> Like most
            websites, we collect basic technical and usage data (such as pages viewed and
            approximate device/browser information) through cookies and analytics tools to
            understand how the site is used and to measure our advertising.
          </p>
        </Section>

        <Section title="How we use your information">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>To respond to your enquiry and provide quotes, bookings and services.</li>
            <li>To contact you about your request by phone, WhatsApp or email.</li>
            <li>To operate, maintain and improve the website.</li>
            <li>To measure the performance of our website and advertising.</li>
            <li>To keep records and comply with our legal obligations.</li>
          </ul>
          <p>
            We use your details <strong className="text-text">only to respond to your enquiry
            and provide our services</strong>. We never sell your information.
          </p>
        </Section>

        <Section title="Cookies and analytics">
          <p>
            We use Google Analytics and Google Ads to understand site usage and measure
            advertising. These services may set cookies and collect usage data. You can
            control cookies through your browser settings, and you can opt out of Google
            Analytics using Google&rsquo;s{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              opt-out browser add-on
            </a>
            . We do not include your name, phone number or email in analytics events.
          </p>
        </Section>

        <Section title="How we share information">
          <p>
            We do not sell or rent your information. We share it only with trusted service
            providers who help us operate the site and respond to you — for example, our
            email delivery provider (to send your enquiry to our team) and our analytics and
            advertising providers (Google). These providers may process data on our behalf,
            and only for the purposes described here. We may also disclose information where
            required by law.
          </p>
        </Section>

        <Section title="How long we keep it">
          <p>
            We keep enquiry details for as long as needed to respond to you, provide our
            services and maintain reasonable business and legal records, after which we
            delete or anonymise them.
          </p>
        </Section>

        <Section title="Your choices and rights">
          <p>
            You may ask us to access, correct or delete the personal information we hold about
            you, or to stop contacting you. To make a request, email{" "}
            <a href={`mailto:${EMAIL}`} className="font-medium text-primary hover:underline">
              {EMAIL}
            </a>{" "}
            or call {PHONE_DISPLAY}. We will respond within a reasonable time.
          </p>
        </Section>

        <Section title="Data security">
          <p>
            We take reasonable technical and organisational measures to protect your
            information. No method of transmission or storage is completely secure, but we
            work to safeguard the details you share with us.
          </p>
        </Section>

        <Section title="Other websites">
          <p>
            Our site may link to third-party websites (such as Google Maps or our social
            profiles). We are not responsible for the privacy practices of those sites;
            please review their own policies.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this policy from time to time. The &ldquo;last updated&rdquo; date above
            shows when it was last revised.
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
