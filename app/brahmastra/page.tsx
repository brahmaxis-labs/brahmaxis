import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { KitCard } from "@/components/site/kit-card";
import { Reveal } from "@/components/site/reveal";
import { BrahmastraTerminal } from "@/components/site/brahmastra-terminal";
import { CTASection } from "@/components/site/cta-section";
import { BRAHMASTRA_KITS, BRAHMASTRA_CLIENT_VALUE, BRAHMASTRA_NOT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brahmastra — Internal Engineering Accelerator",
  description:
    "Brahmastra is Brahmaxis Labs' internal product engineering accelerator — reusable architecture, CLI workflows, templates, deployment playbooks, and vertical kits. It is not a public no-code tool.",
  alternates: { canonical: "/brahmastra" },
};

export default function BrahmastraPage() {
  return (
    <>
      <PageHero
        eyebrow="Brahmastra"
        title={
          <>
            Brahmastra: our internal{" "}
            <span className="text-gradient-brand">product engineering accelerator.</span>
          </>
        }
        sub="Reusable architecture, CLI workflows, templates, deployment playbooks, documentation standards, and vertical kits that help Brahmaxis Labs deliver faster and cleaner."
      />

      {/* What it is */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                What Brahmastra is
              </span>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Brahmastra is not a public no-code tool. It is our internal delivery system for
                reducing repetitive engineering work and improving consistency across client
                projects.
              </p>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                It helps us scaffold common product foundations, set up deployment patterns, generate
                documentation, and reuse proven workflows across eCommerce, AdTech, SaaS, internal
                tools, infrastructure, and edge-cloud systems.
              </p>
            </div>
            <BrahmastraTerminal />
          </div>
        </div>
      </section>

      {/* Kits */}
      <section className="relative py-20 lg:py-28 border-y border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            What Brahmastra includes
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold tracking-tight max-w-2xl">
            Vertical kits, ready to adapt.
          </h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BRAHMASTRA_KITS.map((kit, i) => (
              <Reveal key={kit.name} delay={(i % 3) * 70} className="h-full">
                <KitCard name={kit.name} desc={kit.desc} icon={kit.icon} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Means / does not claim */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-card/40 p-8 lg:p-10">
              <h3 className="text-xl font-display font-semibold tracking-tight">
                What this means for clients
              </h3>
              <ul className="mt-6 space-y-3.5">
                {BRAHMASTRA_CLIENT_VALUE.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-muted-foreground">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-dashed border-border/70 p-8 lg:p-10">
              <h3 className="text-xl font-display font-semibold tracking-tight">
                What Brahmastra does not claim
              </h3>
              <ul className="mt-6 space-y-3.5">
                {BRAHMASTRA_NOT.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                    <span className="text-muted-foreground">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Build with a Brahmastra-powered team"
        sub="You do not license Brahmastra — you get the leverage. We bring the accelerator; you get faster setup, cleaner architecture, and more senior attention on your business-specific problems."
        primary={{ label: "Book a Discovery Call", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
        note="Brahmastra is currently an internal delivery accelerator, not a public product."
      />
    </>
  );
}
