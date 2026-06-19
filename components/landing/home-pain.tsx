import { SectionHeader } from "@/components/site/section-header";
import { Reveal } from "@/components/site/reveal";
import { BUYER_PAINS } from "@/lib/site";

export function HomePain() {
  return (
    <section id="pain" className="relative py-24 lg:py-32 border-y border-foreground/10 bg-foreground/[0.02]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <SectionHeader
              eyebrow="The problem"
              title={
                <>
                  Most software projects fail because they are built as{" "}
                  <span className="text-muted-foreground">screens, not systems.</span>
                </>
              }
            />
            <div className="mt-8 space-y-5 max-w-xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A real product needs more than UI. It needs APIs, auth, roles, data models,
                integrations, dashboards, workers, deployment, monitoring, documentation, and a path
                to operate after launch.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Brahmaxis Labs helps teams build the system behind the product — not just the interface
                people click.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {BUYER_PAINS.map((pain, i) => (
              <Reveal key={pain.title} delay={i * 50} className="h-full">
                <div className="group flex h-full items-start gap-3 rounded-xl border border-border bg-card/40 px-5 py-5 transition-colors hover:border-brand/40 hover:bg-card">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:text-brand">
                    <pain.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-foreground/80 leading-snug">{pain.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
