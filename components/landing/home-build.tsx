"use client";

import { SectionHeader } from "@/components/site/section-header";
import { ServiceCard } from "@/components/site/service-card";
import { Reveal } from "@/components/site/reveal";
import { useMobileAutoScroll } from "@/hooks/use-mobile-auto-scroll";
import { SERVICES } from "@/lib/site";

export function HomeBuild() {
  const { activeIndex, scrollerRef } = useMobileAutoScroll<HTMLDivElement>(SERVICES.length);

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="What we build"
          title={
            <>
              Serious software systems,{" "}
              <br />
              <span className="text-muted-foreground">not just screens.</span>
            </>
          }
          intro="We focus on software where revenue, operations, APIs, data, automation, and reliability matter — across marketplaces, AdTech, SaaS, dashboards, internal tools, infrastructure, and real-world operations."
        />

        <div
          ref={scrollerRef}
          className="mt-16 -mx-6 flex gap-4 overflow-x-auto overscroll-x-contain px-6 pb-4 snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:color-mix(in_oklch,var(--brand)_45%,transparent)_transparent] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-5"
        >
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 70} className="h-full min-w-[82vw] snap-start sm:min-w-0">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-2 flex justify-center gap-2 sm:hidden" aria-hidden="true">
          {SERVICES.map((service, index) => (
            <span
              key={service.slug}
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
