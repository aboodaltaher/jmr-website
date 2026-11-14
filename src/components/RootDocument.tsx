import { SiteSchema } from "@/components/SiteSchema";
import { Analytics, GtmNoScript } from "@/components/Analytics";
import { ConversionTracking } from "@/components/ConversionTracking";
import { GoogleTag } from "@/components/GoogleTag";
import { GA_ADS_ID, GA4_ID } from "@/lib/gtag";

/**
 * The <html>/<body> document shared by the two root layouts: app/(en)/layout.tsx
 * (lang="en" dir="ltr") and app/(ar)/layout.tsx (lang="ar" dir="rtl"). Two root
 * layouts, so the language and direction are in the server-rendered HTML of every
 * page instead of being set in the browser after hydration.
 */
export function RootDocument({
  lang,
  dir,
  fontClassName,
  children,
}: {
  lang: "en" | "ar";
  dir: "ltr" | "rtl";
  fontClassName: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} dir={dir} className={fontClassName}>
      <body className="min-h-screen flex flex-col antialiased pb-16 md:pb-0">
        <GtmNoScript />
        <SiteSchema />
        {/* Google tag: gtag.js is loaded ONCE (with the GA4 ID) and both Google Ads (AW-) and GA4 (G-) are configured from it. This inline snippet
            runs immediately and only creates the queue and the config calls; the library itself is
            loaded after hydration by <GoogleTag /> (see that file for why). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');
gtag('config', '${GA_ADS_ID}');`,
          }}
        />
        <GoogleTag />
        <Analytics />
        {children}
        <ConversionTracking />
      </body>
    </html>
  );
}
