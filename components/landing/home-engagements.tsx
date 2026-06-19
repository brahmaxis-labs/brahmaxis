"use client";

import { SectionHeader } from "@/components/site/section-header";
import { EngagementCard } from "@/components/site/engagement-card";
import { Reveal } from "@/components/site/reveal";
import { useMobileAutoScroll } from "@/hooks/use-mobile-auto-scroll";
import { ENGAGEMENTS } from "@/lib/site";

export function HomeEngagements() {
  const { activeIndex, scrollerRef } = useMobileAutoScroll<HTMLDivElement>(ENGAGEMENTS.length);

  return (
    <section id="engagements" className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Engagements"
          title="Engagements designed for clarity"
          intro="Productized ways to start, each with clear deliverables and decision points. Most engagements begin with paid discovery; full scope is set after qualification."
        />

        <div
          ref={scrollerRef}
          className="mt-16 -mx-6 flex gap-4 overflow-x-auto overscroll-x-contain px-6 pb-4 snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:color-mix(in_oklch,var(--brand)_45%,transparent)_transparent] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
        >
          {ENGAGEMENTS.map((engagement, i) => (
            <Reveal key={engagement.num} delay={(i % 3) * 70} className="h-full min-w-[82vw] snap-start sm:min-w-0">
              <EngagementCard engagement={engagement} />
            </Reveal>
          ))}
        </div>
        <div className="mt-2 flex justify-center gap-2 sm:hidden" aria-hidden="true">
          {ENGAGEMENTS.map((engagement, index) => (
            <span
              key={engagement.num}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-6 bg-brand" : "w-1.5 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
