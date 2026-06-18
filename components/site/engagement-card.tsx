import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Engagement } from "@/lib/site";

/** Productized engagement / package card. Pricing stays qualification-gated. */
export function EngagementCard({ engagement: e }: { engagement: Engagement }) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
        e.popular
          ? "border-2 border-brand bg-brand/[0.05] shadow-[0_0_50px_-18px_color-mix(in_oklch,var(--brand)_60%,transparent)]"
          : "border-border bg-card/40 hover:border-brand/40 hover:bg-card"
      }`}
    >
      {e.popular && (
        <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-brand-foreground">
          Start here
        </span>
      )}

      <span className="font-mono text-xs text-brand">{e.num}</span>
      <h3 className="mt-3 min-h-[3.5rem] font-display text-xl font-semibold leading-tight tracking-tight">
        {e.name}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.audience}</p>

      <ul className="mt-5 mb-6 space-y-2.5 flex-1">
        {e.deliverables.map((d) => (
          <li key={d} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
            <span className="text-sm text-muted-foreground leading-snug">{d}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5 border-t border-border/60">
        <p className="mb-4 font-mono text-xs text-muted-foreground">Starts with paid discovery</p>
        <Link
          href="/contact"
          className={`w-full rounded-full py-3 flex items-center justify-center gap-2 text-sm font-medium transition-all ${
            e.popular
              ? "bg-brand text-brand-foreground hover:bg-brand/90 shadow-lg shadow-brand/20"
              : "border border-border text-foreground hover:border-brand/50 hover:bg-brand/5"
          }`}
        >
          {e.cta}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
