"use client";

import { useReveal } from "./use-reveal";

const integrations = [
  { name: "Marketplace automation for Amazon sellers, done right", category: "eCommerce" },
  { name: "Building ROAS and CAC reporting that teams trust", category: "AdTech" },
  { name: "What a real multi-tenant SaaS MVP actually needs", category: "SaaS" },
  { name: "Designing dashboards operations teams actually use", category: "Data" },
  { name: "From spreadsheets to an operational data layer", category: "Internal tools" },
  { name: "Production readiness: CI/CD, logs, and monitoring", category: "Infrastructure" },
  { name: "Cutting cloud cost without breaking reliability", category: "Cost control" },
  { name: "Edge-cloud architecture under field constraints", category: "Edge-cloud" },
  { name: "How to structure multi-repo product systems", category: "Architecture" },
  { name: "Lessons from building ParkTek operations software", category: "Case study" },
];

export function IntegrationsSection() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>();

  return (
    <section id="insights" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Insights
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Content that proves
            <br />
            competence.
          </h2>
          <p className="text-xl text-muted-foreground">
            Writing that teaches what Brahmaxis knows: marketplace automation, AdOps reporting, SaaS MVP architecture, operational dashboards, infrastructure and cost, edge-cloud systems, and ParkTek lessons.
          </p>
        </div>

      </div>
      
      {/* Full-width marquees outside container */}
      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {integrations.map((integration) => (
                <div
                  key={`${integration.name}-${setIndex}`}
                  className="shrink-0 max-w-sm rounded-xl px-8 py-6 border border-border bg-card/40 hover:border-brand/40 hover:bg-card hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_color-mix(in_oklch,var(--brand)_30%,transparent)] transition-all duration-300 group"
                >
                  <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-brand-soft">{integration.category}</div>
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Reverse marquee */}
      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[...integrations].reverse().map((integration) => (
                <div
                  key={`${integration.name}-reverse-${setIndex}`}
                  className="shrink-0 max-w-sm rounded-xl px-8 py-6 border border-border bg-card/40 hover:border-brand/40 hover:bg-card hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_color-mix(in_oklch,var(--brand)_30%,transparent)] transition-all duration-300 group"
                >
                  <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-brand-soft">{integration.category}</div>
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
