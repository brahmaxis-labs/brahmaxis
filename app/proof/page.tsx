import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { ProofCard } from "@/components/site/proof-card";
import { Reveal } from "@/components/site/reveal";
import { CTASection } from "@/components/site/cta-section";
import { EXPERIENCE_MAP, FOUNDER_PROOF, PARKTEK_MODULES, ANON_PROOF, LEGAL_NOTES } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const description =
  "Brahmaxis Labs is built on hands-on experience shipping revenue-critical, operational, and infrastructure-heavy software systems — proven through ParkTek, without exposing IP.";

export const metadata: Metadata = pageMetadata({
  title: "Proof & Case Studies",
  description,
  path: "/proof",
});

export default function ProofPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof"
        title={
          <>
            Proof without the <span className="text-gradient-brand">theatre.</span>
          </>
        }
        sub="Brahmaxis Labs is built on hands-on experience shipping revenue-critical, operational, and infrastructure-heavy software systems."
      />

      {/* Experience map */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Founder experience map
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold tracking-tight max-w-2xl">
            Where the experience comes from.
          </h2>

          {/* Desktop table */}
          <div className="mt-12 hidden md:block overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-foreground/[0.03] border-b border-border">
                  <th className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-muted-foreground w-1/4">Domain</th>
                  <th className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Systems built</th>
                  <th className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">What Brahmaxis Labs can help with</th>
                </tr>
              </thead>
              <tbody>
                {EXPERIENCE_MAP.map((row) => (
                  <tr key={row.domain} className="border-b border-border/60 last:border-b-0 align-top transition-colors hover:bg-foreground/[0.02]">
                    <td className="px-6 py-5 font-display font-medium text-foreground">{row.domain}</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">{row.built}</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">{row.help}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-10 grid gap-4 md:hidden">
            {EXPERIENCE_MAP.map((row) => (
              <div key={row.domain} className="rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="font-display font-semibold tracking-tight">{row.domain}</h3>
                <p className="mt-3 text-xs font-mono uppercase tracking-wider text-brand-soft">Systems built</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{row.built}</p>
                <p className="mt-3 text-xs font-mono uppercase tracking-wider text-brand-soft">Brahmaxis Labs can help</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{row.help}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground/80 max-w-3xl">
            Domains reflect founder experience. We use no employer logos and imply no endorsement.
          </p>
        </div>
      </section>

      {/* Founder proof cards */}
      <section className="relative py-20 lg:py-28 border-y border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Experience-backed
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold tracking-tight max-w-2xl">
            Hands-on, not outsourced.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FOUNDER_PROOF.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 70} className="h-full">
                <ProofCard eyebrow="Founder experience" title={item.title} body={item.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ParkTek teaser */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="glow-brand w-[460px] h-[460px] -top-32 right-1/4 opacity-20" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Case study · ParkTek
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold tracking-tight max-w-3xl">
            ParkTek: real-world operational software under startup constraints
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            ParkTek demonstrates our ability to build across dashboards, infrastructure, deployment,
            analytics, local/cloud systems, and operational workflows. It is proof of execution — not
            a codebase for sale, and never exposing source, secrets, or sensitive architecture.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARKTEK_MODULES.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 70} className="h-full">
                <ProofCard title={m.title} body={m.desc} icon={m.icon} />
              </Reveal>
            ))}
          </div>

          <Link
            href="/#parktek"
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 h-12 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:bg-card group"
          >
            See how we think about real-world systems
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Anonymous proof */}
      <section className="relative py-20 lg:py-28 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Selected work — anonymized
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold tracking-tight max-w-2xl">
            Systems shipped, details protected.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ANON_PROOF.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70} className="h-full">
                <ProofCard title={p.title} body={p.desc} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground/80 max-w-3xl">{LEGAL_NOTES[0]}</p>
        </div>
      </section>

      <CTASection
        title="Want this kind of execution on your problem?"
        sub="Tell us what you are building and where it stands. We will tell you honestly whether Brahmaxis Labs is the right fit and what the best next step is."
        primary={{ label: "Book a Discovery Call", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
