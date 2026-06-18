import type { LucideIcon } from "lucide-react";

/** Generic proof / capability card used in founder-proof and anonymous-proof grids. */
export function ProofCard({
  title,
  body,
  eyebrow,
  icon: Icon,
}: {
  title: string;
  body: string;
  eyebrow?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="group h-full rounded-2xl border border-border bg-card/40 p-7 transition-all duration-500 hover:border-brand/40 hover:bg-card hover:-translate-y-1 hover:shadow-[0_14px_44px_-16px_color-mix(in_oklch,var(--brand)_35%,transparent)]">
      <div className="flex items-center justify-between">
        {eyebrow && (
          <div className="font-mono text-[11px] uppercase tracking-wider text-brand-soft">{eyebrow}</div>
        )}
        {Icon && (
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-brand transition-colors group-hover:border-brand/40">
            <Icon className="h-4 w-4" />
          </span>
        )}
      </div>
      <h3 className={`text-lg font-display font-semibold tracking-tight ${eyebrow || Icon ? "mt-4" : ""}`}>
        {title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
