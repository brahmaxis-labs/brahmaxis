import type { LucideIcon } from "lucide-react";

/** Brahmastra kit / capability module card. */
export function KitCard({
  name,
  desc,
  icon: Icon,
}: {
  name: string;
  desc: string;
  icon: LucideIcon;
}) {
  return (
    <div className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-all duration-500 hover:border-brand/40 hover:bg-card hover:-translate-y-1 hover:shadow-[0_14px_44px_-16px_color-mix(in_oklch,var(--brand)_35%,transparent)]">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-brand transition-colors group-hover:border-brand/40 group-hover:bg-brand group-hover:text-brand-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-display font-semibold tracking-tight">{name}</h3>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
