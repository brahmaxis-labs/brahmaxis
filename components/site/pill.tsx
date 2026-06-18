import type { ReactNode } from "react";

/** Eyebrow pill used above heroes — optional live "pulse" dot. */
export function Pill({ children, pulse = true }: { children: ReactNode; pulse?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs font-mono text-muted-foreground">
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
        </span>
      )}
      {children}
    </span>
  );
}
