"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import { LazyOnView } from "@/components/LazyOnView";

const Impl = dynamic(
  () => import("@/components/InlineLeadFormImpl").then((m) => m.InlineLeadFormImpl),
  { ssr: false },
);

/**
 * Same props as before. The form (react-hook-form + validation) is loaded only when the visitor
 * scrolls near it, so it is not part of the page's initial JavaScript. The space is reserved.
 */
export function InlineLeadForm(props: ComponentProps<typeof Impl>) {
  return (
    <LazyOnView className="min-h-[340px]">
      <Impl {...props} />
    </LazyOnView>
  );
}
