import { SectionHeader } from "@/components/site/section-header";
import { ServiceCard } from "@/components/site/service-card";
import { Reveal } from "@/components/site/reveal";
import { SERVICES } from "@/lib/site";

export function HomeBuild() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="What we build"
          title={
            <>
              Serious software systems,
              <br />
              <span className="text-muted-foreground">not just screens.</span>
            </>
          }
          intro="We focus on software where revenue, operations, APIs, data, automation, and reliability matter — across marketplaces, AdTech, SaaS, dashboards, internal tools, infrastructure, and real-world operations."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 70} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
