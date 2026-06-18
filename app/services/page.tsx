import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { ServiceCard } from "@/components/site/service-card";
import { Reveal } from "@/components/site/reveal";
import { CTASection } from "@/components/site/cta-section";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From marketplace automation and AdTech workflows to SaaS MVPs, dashboards, infrastructure, and edge-cloud systems — Brahmaxis builds the software behind business execution.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Product engineering for{" "}
            <span className="text-gradient-brand">revenue, data, and operations</span> systems.
          </>
        }
        sub="From marketplace automation and AdTech workflows to SaaS MVPs, dashboards, infrastructure, and edge-cloud systems — Brahmaxis builds the software behind business execution."
      >
        <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-brand-foreground px-8 h-14 text-base rounded-full">
          <Link href="/contact">Book a Discovery Call</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-border bg-card/40">
          <Link href="/contact">Tell us what you&apos;re building</Link>
        </Button>
      </PageHero>

      {/* Overview grid */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 70} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <div className="border-t border-foreground/10">
        {SERVICES.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`relative py-20 lg:py-28 scroll-mt-28 ${i % 2 === 1 ? "bg-foreground/[0.02] border-y border-foreground/10" : ""}`}
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-brand">
                      <service.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-brand">{service.num}</span>
                  </div>
                  <h2 className="mt-6 text-3xl lg:text-4xl font-display font-semibold tracking-tight">
                    {service.name}
                  </h2>
                  <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
                    {service.build}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {service.bestFor.map((b) => (
                      <span
                        key={b}
                        className="px-3.5 py-1.5 rounded-full border border-border bg-card/40 text-xs text-muted-foreground"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-foreground hover:text-brand transition-colors group"
                    >
                      View service details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Discuss your build →
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card/40 p-8">
                  <div className="font-mono text-xs uppercase tracking-wider text-brand-soft mb-5">
                    Typical outcomes
                  </div>
                  <ul className="space-y-3.5">
                    {service.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span className="text-muted-foreground">{o}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-border/60">
                    <span className="text-sm text-muted-foreground">
                      <span className="font-mono text-brand-soft">Typical engagement</span>
                      <span className="mt-1 block text-foreground/80">{service.engagement}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTASection
        title="Not sure which service fits?"
        sub="Tell us the problem, the stage, and the outcome that matters. We will recommend the right starting point — even if that is a smaller engagement than you expected."
        primary={{ label: "Book a Discovery Call", href: "/contact" }}
        secondary={{ label: "Explore Brahmastra", href: "/brahmastra" }}
      />
    </>
  );
}
