import { MARKER_SPLIT, resolveDraft } from "@/lib/draft";

/**
 * Renders text that may contain "[TO CONFIRM: …]" placeholders. Off-production the
 * placeholders are highlighted; in production they are stripped (see src/lib/draft.ts).
 */
export function DraftText({ children }: { children: string }) {
  const text = resolveDraft(children);
  if (!text) return null;
  return (
    <>
      {text.split(MARKER_SPLIT).map((part, i) =>
        part.startsWith("[TO CONFIRM") ? (
          <mark key={i} className="rounded bg-amber-200 px-1 font-semibold text-amber-950">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
