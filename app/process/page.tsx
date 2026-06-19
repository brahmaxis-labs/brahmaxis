import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ProcessSteps } from "@/components/site/process-steps";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { CTASection } from "@/components/site/cta-section";
import { pageMetadata } from "@/lib/seo";

const description =
  "How Brahmaxis Labs works: diagnose, architect, build, deploy, and improve — a clear path from business problem to a system that runs in production.";

export const metadata: Metadata = pageMetadata({
  title: "Process",
  description,
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title={
          <>
            How we <span className="text-gradient-brand">work.</span>
          </>
        }
        sub="A clear path from business problem to a system that runs in production — with less ambiguity, controlled scope, and faster shipping."
      />

      {/* 5-step overview */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ProcessSteps />
        </div>
      </section>

      {/* Detailed engagement workflow */}
      <HowItWorksSection />

      <CTASection
        title="Ready to start with clarity?"
        sub="Most engagements begin with a paid discovery sprint that turns your idea into scope, architecture, risks, and a delivery roadmap."
        primary={{ label: "Book a Discovery Call", href: "/contact" }}
        secondary={{ label: "See engagements", href: "/#engagements" }}
      />
    </>
  );
}
