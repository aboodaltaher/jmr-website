// Visible "draft — not yet reviewed" banner shown at the top of the legal
// pages (privacy policy, terms). The copy must be reviewed by AGEC and a
// professional before these pages are relied upon.
export function LegalDraftBanner({ lang = "en" }: { lang?: "en" | "ar" }) {
  const text =
    lang === "ar"
      ? "مسودة — تخضع لمراجعة AGEC قبل النشر."
      : "DRAFT — to be reviewed by AGEC before publishing.";
  return (
    <div
      role="note"
      className="rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900"
    >
      {text}
    </div>
  );
}
