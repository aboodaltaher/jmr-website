import Script from "next/script";
import { GA4_ID } from "@/lib/gtag";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Optional extras on top of the site's single Google tag (RootDocument + GoogleTag load gtag.js
 * ONCE and configure GA4 + Google Ads). Renders nothing when the vars are empty.
 *  - NEXT_PUBLIC_GA_ID: an ADDITIONAL GA4 property only. It is configured on the existing gtag.js
 *    (no second gtag.js), and ignored if it equals the built-in GA4 ID, so nothing double-counts.
 *  - NEXT_PUBLIC_GTM_ID: a GTM container. Don't add GA4/Ads tags inside it (they would duplicate).
 */
export function Analytics() {
  const extraGa = GA_ID && GA_ID !== GA4_ID ? GA_ID : null;
  return (
    <>
      {extraGa ? (
        <Script id="ga4-extra-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('config', '${extraGa}');`}
        </Script>
      ) : null}

      {GTM_ID ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      ) : null}
    </>
  );
}

/**
 * GTM <noscript> fallback. Place immediately after <body>. Renders nothing
 * when NEXT_PUBLIC_GTM_ID is unset.
 */
export function GtmNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
