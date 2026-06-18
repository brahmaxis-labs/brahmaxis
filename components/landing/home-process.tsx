import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { ProcessSteps } from "@/components/site/process-steps";

export function HomeProcess() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-foreground/[0.02] border-y border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
            eyebrow="Process"
            title="How we work"
            intro="A clear path from business problem to a system that runs in production — with less ambiguity and faster shipping."
          />
          <Link
            href="/process"
            className="shrink-0 inline-flex items-center gap-2 text-sm text-foreground hover:text-brand transition-colors group"
          >
            See the full delivery process
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-16">
          <ProcessSteps />
        </div>
      </div>
    </section>
  );
}
