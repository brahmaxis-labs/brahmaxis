import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { Reveal } from "@/components/site/reveal";
import { PARKTEK_MODULES } from "@/lib/site";

export function HomeParktek() {
  return (
    <section id="parktek" className="relative py-24 lg:py-32 bg-foreground/[0.02] border-y border-foreground/10 overflow-hidden">
      <div className="glow-brand w-[460px] h-[460px] -bottom-40 left-1/4 opacity-20" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Proof · ParkTek"
          title="Proven through ParkTek"
          intro="ParkTek gave us the operating scars behind Brahmaxis: multi-repo systems, dashboards, infrastructure, local deployment, edge-cloud patterns, and real-world operational workflows."
        />

        <div className="mt-8 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            ParkTek is not being sold as a codebase. It is proof that our team has built software
            under real startup and operational constraints. The engineering patterns, deployment
            practices, and delivery lessons from ParkTek inform how we build client systems.
          </p>
        </div>

        <div className="mt-12 flex items-center gap-3 text-sm font-mono text-muted-foreground">
          <span className="w-8 h-px bg-foreground/30" />
          Internal modules — capabilities, not code
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PARKTEK_MODULES.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 70} className="h-full">
              <div className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-all duration-500 hover:border-brand/40 hover:bg-card hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-brand transition-colors group-hover:border-brand/40">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{m.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/proof"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 h-12 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:bg-card group"
          >
            See how we think about real-world systems
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
