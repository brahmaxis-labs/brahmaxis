import { SectionHeader } from "@/components/site/section-header";
import { EngagementCard } from "@/components/site/engagement-card";
import { Reveal } from "@/components/site/reveal";
import { ENGAGEMENTS } from "@/lib/site";

export function HomeEngagements() {
  return (
    <section id="engagements" className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Engagements"
          title="Engagements designed for clarity"
          intro="Productized ways to start, each with clear deliverables and decision points. Most engagements begin with paid discovery; full scope is set after qualification."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ENGAGEMENTS.map((engagement, i) => (
            <Reveal key={engagement.num} delay={(i % 3) * 70} className="h-full">
              <EngagementCard engagement={engagement} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
