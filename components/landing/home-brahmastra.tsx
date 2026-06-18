import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { KitCard } from "@/components/site/kit-card";
import { Reveal } from "@/components/site/reveal";
import { BrahmastraTerminal } from "@/components/site/brahmastra-terminal";
import { BRAHMASTRA_KITS } from "@/lib/site";

const CHIPS = [
  "Internal accelerator",
  "Not a public no-code tool",
  "CLI workflows",
  "Reusable templates",
  "Deployment playbooks",
  "Documentation engine",
];

export function HomeBrahmastra() {
  return (
    <section id="brahmastra" className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Powered by Brahmastra"
          title="Powered by Brahmastra"
          intro="Brahmastra is our internal engineering accelerator for faster, cleaner, more repeatable product delivery."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Brahmastra combines reusable architecture, CLI workflows, templates, deployment
              playbooks, documentation standards, and vertical kits for eCommerce, AdTech, SaaS,
              internal tools, infrastructure, and edge-cloud systems.
            </p>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              It helps us reduce repetitive setup work, improve consistency, and move from
              architecture to deployment faster. Brahmastra is currently an internal accelerator —
              not a public no-code tool.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {CHIPS.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full border border-border bg-card/40 text-xs font-mono text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 h-12 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/20 transition-colors hover:bg-brand/90 group"
              >
                Work with a Brahmastra-powered team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <BrahmastraTerminal />
        </div>

        {/* Vertical kits */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            Vertical kits
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BRAHMASTRA_KITS.map((kit, i) => (
              <Reveal key={kit.name} delay={(i % 4) * 60} className="h-full">
                <KitCard name={kit.name} desc={kit.desc} icon={kit.icon} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
