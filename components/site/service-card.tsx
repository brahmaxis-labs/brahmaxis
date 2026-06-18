import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";

/** Service vertical card — links through to its detail page. */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 transition-all duration-500 hover:border-brand/40 hover:bg-card hover:-translate-y-1 hover:shadow-[0_18px_50px_-18px_color-mix(in_oklch,var(--brand)_35%,transparent)]"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-brand transition-colors group-hover:border-brand/40">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-xs text-brand">{service.num}</span>
      </div>

      <h3 className="mt-6 text-xl font-display font-semibold tracking-tight">{service.name}</h3>
      <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{service.summary}</p>

      <div className="mt-6 pt-5 border-t border-border/60 flex items-end justify-between gap-4">
        <span className="text-xs text-muted-foreground">
          <span className="font-mono text-brand-soft">Typical engagement</span>
          <span className="mt-1 block text-foreground/80">{service.engagement}</span>
        </span>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
