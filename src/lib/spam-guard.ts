// Server-side bot check for the lead forms (no CAPTCHA, no third-party service).
//
// Each form sends two extra values (see src/components/useSpamGuard.tsx):
//   _hp       a hidden "website" field people never see or reach; bots that fill every input fill it
//   _elapsed  milliseconds between the form appearing and being submitted
// A submission is treated as a bot when _hp is not empty, or when it was sent faster than
// MIN_FILL_MS. If _elapsed is missing (for example an older cached page during a deploy) the
// timing check is skipped rather than risk dropping a real lead.
//
// A true per-IP rate limit is NOT done here: Vercel runs many short-lived instances that share
// no memory, so it would need a shared store such as Upstash Redis / Vercel KV (a new service).

export const MIN_FILL_MS = 2000;

export function isLikelyBot(data: Record<string, unknown>): boolean {
  const hp = data._hp;
  if (typeof hp === "string" && hp.trim() !== "") return true;
  const elapsed = data._elapsed;
  if (typeof elapsed === "number" && Number.isFinite(elapsed) && elapsed >= 0 && elapsed < MIN_FILL_MS) return true;
  return false;
}
