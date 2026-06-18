import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { ProofCard } from "@/components/site/proof-card";
import { Reveal } from "@/components/site/reveal";
import { FOUNDER_PROOF } from "@/lib/site";

export function HomeFounderProof() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Experience-backed"
          title="Experience-backed product engineering"
          intro="Brahmaxis is built around hands-on engineering experience across revenue-critical platforms — not generic outsourced development."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDER_PROOF.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 70} className="h-full">
              <ProofCard eyebrow="Founder experience" title={item.title} body={item.body} />
            </Reveal>
          ))}

          <div className="rounded-2xl border border-dashed border-border/70 bg-transparent p-7 flex flex-col justify-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              References to founder experience are for background only. We do not use employer logos
              or imply endorsement by prior employers.
            </p>
            <Link
              href="/proof"
              className="mt-5 inline-flex items-center gap-2 text-sm text-foreground hover:text-brand transition-colors"
            >
              See the full proof map
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
