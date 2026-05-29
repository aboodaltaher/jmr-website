export function Logo({ variant = "light" }: { variant?: "dark" | "light" }) {
  const mark = "#D4762E";
  const word = variant === "dark" ? "#F5F6F7" : "#13212E";
  const rule = variant === "dark" ? "#8A929A66" : "#E2E1DC";
  const desc = variant === "dark" ? "#8A929A" : "#8A929A";
  return (
    <div className="inline-flex flex-col items-center">
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 48 48" fill="none" className="h-11 w-11 shrink-0" aria-hidden>
          <rect x="6" y="6" width="36" height="36" stroke={mark} strokeWidth="3" />
          <line x1="6" y1="24" x2="42" y2="24" stroke={mark} strokeWidth="3" />
          <line x1="24" y1="6" x2="24" y2="42" stroke={mark} strokeWidth="3" />
        </svg>
        <span style={{ color: word }} className="font-heading font-bold text-5xl tracking-[0.06em] leading-none">AGEC</span>
      </div>
      <div style={{ borderTopColor: rule }} className="mt-3 w-full border-t" />
      <span style={{ color: desc }} className="font-heading text-xs tracking-[0.45em] mt-3 pl-[0.45em]">
        HVAC · MEP · MAINTENANCE
      </span>
    </div>
  );
}
