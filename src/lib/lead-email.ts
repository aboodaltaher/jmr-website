// HTML building blocks for the lead-notification emails sent by src/app/actions.ts.
// Every value a visitor typed goes through escapeHtml(), so "<script>" or "<b>" in a form field
// arrives in the inbox as visible text, never as markup. Labels and headings are fixed strings
// from our own code, but they are escaped too so nothing can slip through later.

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escape the five HTML-significant characters. */
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

function timestamp(): string {
  return new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" });
}

/** One label/value row. Empty values are left out. */
export function row(label: string, value: string | undefined): string {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px 6px 0;color:#6B7280;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`;
}

/** The email body: a heading and the rows built with row(). */
export function wrap(heading: string, rows: string): string {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#1A1A1A;border-bottom:2px solid #FF6B1A;padding-bottom:8px">${escapeHtml(heading)}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;color:#1A1A1A">${rows}</table>
      <p style="margin-top:24px;font-size:12px;color:#6B7280">Submitted ${escapeHtml(timestamp())} via agec.ae contact form</p>
    </div>`;
}
