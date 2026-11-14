"use client";

import { Fragment, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";
import { enEquivalentOf } from "@/lib/nav";
import { ServicesMegaMenu } from "@/components/ServicesMegaMenu";
import { ServicesMobileAccordion } from "@/components/ServicesMobileAccordion";

// Home + About + Contact; all services now live in the Services mega-menu.
const navLinks = [
  { href: "/ar", label: "الرئيسية" },
  { href: "/ar/about", label: "من نحن" },
  { href: "/ar/contact", label: "اتصل بنا" },
];

/**
 * RTL chrome for the Arabic /ar subtree. Sets the document direction and
 * language, and renders an Arabic header, footer and mobile contact bar.
 */
export function ArabicChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wa = whatsappUrl(pathname);
  const enHref = enEquivalentOf(pathname);

  useEffect(() => {
    const el = document.documentElement;
    const prevLang = el.lang;
    const prevDir = el.dir;
    el.lang = "ar";
    el.dir = "rtl";
    return () => {
      el.lang = prevLang || "en";
      el.dir = prevDir || "ltr";
    };
  }, []);

  return (
    <div
      dir="rtl"
      lang="ar"
      style={{ fontFamily: "var(--font-arabic), sans-serif" }}
      className="flex min-h-screen flex-col"
    >
      {/* Header */}
      <header className="relative border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <Link href="/ar" aria-label="AGEC — الصفحة الرئيسية">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link, i) => (
              <Fragment key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-text transition-colors"
                >
                  {link.label}
                </Link>
                {i === 0 && <ServicesMegaMenu lang="ar" />}
              </Fragment>
            ))}
            <Link
              href={enHref}
              className="text-sm font-semibold text-primary hover:underline"
            >
              English
            </Link>
            <Link
              href="/ar/quote"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              عرض سعر
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="text-sm font-semibold text-text hover:text-primary transition-colors"
              dir="ltr"
            >
              {PHONE_DISPLAY}
            </a>
          </nav>
          <Link
            href={enHref}
            className="text-sm font-semibold text-primary hover:underline md:hidden"
          >
            English
          </Link>
        </div>
        {/* Mobile nav */}
        <nav className="flex flex-col border-t border-border px-6 py-1 md:hidden">
          {navLinks.map((link, i) => (
            <Fragment key={link.href}>
              <Link
                href={link.href}
                className="py-2.5 text-base font-medium text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </Link>
              {i === 0 && <ServicesMobileAccordion lang="ar" />}
            </Fragment>
          ))}
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-bg-soft">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <Link href="/ar" aria-label="AGEC — الصفحة الرئيسية">
            <Logo />
          </Link>
          <p className="mt-3 text-sm text-text-muted">
            التاهر غبون للمقاولات الهندسية (AGEC) — تصميم وتركيب وصيانة أنظمة
            التكييف والتهوية في دبي والإمارات.
          </p>
          <div className="mt-4 space-y-1 text-sm text-text-muted" dir="ltr">
            <p>{PHONE_DISPLAY}</p>
            <p>a.altaher@agec.ae</p>
            <p>AlMasraf Building, Sheikh Zayed Road, Dubai, UAE</p>
          </div>
          <p className="mt-4 text-xs text-text-muted">
            متاحون على الهاتف والواتساب على مدار الساعة — نرد خلال ساعة واحدة.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 border-t border-border pt-6 text-center text-xs text-text-muted">
            <Link href="/ar/privacy-policy" className="hover:text-text transition-colors">
              سياسة الخصوصية
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/ar/terms" className="hover:text-text transition-colors">
              شروط الاستخدام
            </Link>
          </div>
          <p className="mt-3 text-center text-xs text-text-muted">
            &copy; {new Date().getFullYear()} AGEC Technical Services L.L.C. ·
            رخصة تجارية دبي رقم 1221573. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* Mobile sticky contact bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-white md:hidden">
        <a
          href={`tel:${PHONE}`}
          aria-label="اتصل بـ AGEC"
          className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-text"
        >
          <Phone className="h-5 w-5 text-primary" />
          اتصل
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل مع AGEC على واتساب"
          className="flex flex-1 items-center justify-center gap-2 border-r border-border bg-[#25D366] py-3.5 text-sm font-semibold text-[#062e14]"
        >
          <MessageCircle className="h-5 w-5" />
          واتساب
        </a>
      </div>
    </div>
  );
}
