"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mounts `children` only when the placeholder is within `margin` of the viewport (and always
 * mounts it for visitors without IntersectionObserver). `minHeight` reserves the space, so
 * nothing shifts when the content arrives. Used for below-the-fold forms so react-hook-form
 * and the validation code are not loaded until a visitor is about to see the form.
 */
export function LazyOnView({
  children,
  className = "",
  margin = "800px",
}: {
  children: React.ReactNode;
  /** Tailwind classes, normally a min-height such as "min-h-[380px]". */
  className?: string;
  margin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : null}
    </div>
  );
}
