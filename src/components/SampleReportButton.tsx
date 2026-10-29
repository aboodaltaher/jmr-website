"use client";

import { Download } from "lucide-react";
import { pushDataLayer } from "@/lib/gtag";

export function SampleReportButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => pushDataLayer("download_sample_report")}
      className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white hover:bg-primary-dark transition-colors"
    >
      <Download className="h-4 w-4" /> Download a sample report (PDF, example
      format)
    </a>
  );
}
