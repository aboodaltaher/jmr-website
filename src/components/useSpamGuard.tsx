"use client";

import { useEffect, useRef } from "react";

/**
 * Honeypot + time-to-submit guard for the lead forms. Render `field` inside the <form> and spread
 * `values()` into the data sent to the server action; the server drops bots silently (see
 * src/lib/spam-guard.ts). The hidden field is off-screen, out of the tab order (tabIndex -1),
 * hidden from screen readers (aria-hidden) and has autocomplete off so browsers don't fill it.
 */
export function useSpamGuard() {
  const shownAt = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);

  useEffect(() => {
    shownAt.current = Date.now();
  }, []);

  const field = (
    <div
      aria-hidden="true"
      style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}
    >
      <label>
        Website
        <input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );

  const values = () => ({
    _hp: honeypot.current?.value ?? "",
    _elapsed: shownAt.current ? Date.now() - shownAt.current : undefined,
  });

  return { field, values };
}
