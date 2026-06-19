import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { ServiceCard } from "@/components/site/service-card";
import { EngagementCard } from "@/components/site/engagement-card";
import { Reveal } from "@/components/site/reveal";
import { CTASection } from "@/components/site/cta-section";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { SERVICES, ENGAGEMENTS, serviceBySlug } from "@/lib/site";
import { faqPageJsonLd, pageMetadata, serviceFaqs } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const engagement = ENGAGEMENTS.find((e) => e.name === service.engagement) ?? ENGAGEMENTS[0];
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const faqs = serviceFaqs(service);

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs, `/services/${service.slug}`)} />
      <PageHero
        eyebrow={`Service · ${service.num}`}
        title={service.name}
        sub={service.build}
      >
        <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-brand-foreground px-8 h-14 text-base rounded-full">
          <Link href="/contact">Book a Discovery Call</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-border bg-card/40">
          <Link href="/services">All services</Link>
        </Button>
      </PageHero>

      <section className="relative py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
            {/* Detail */}
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                Problem statement
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-semibold tracking-tight">
                The work this service is built for.
              </h2>
              <p className="mt-5 text-xl text-muted-foreground leading-relaxed">
                Teams come to Brahmaxis Labs when {service.short.toLowerCase()} work has become too
                manual, brittle, slow to measure, or risky to scale through disconnected tools.
              </p>

              <div className="mt-12 grid sm:grid-cols-2 gap-10">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-brand-soft mb-4">
                    Who it is for
                  </div>
                  <ul className="space-y-2.5">
                    {service.bestFor.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-brand-soft mb-4">
                    What Brahmaxis Labs delivers
                  </div>
                  <ul className="space-y-2.5">
                    {service.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-border bg-card/40 p-8">
                <h2 className="text-2xl font-display font-semibold tracking-tight">
                  What we build
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{service.summary}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{service.build}</p>
                <Button asChild className="mt-8 rounded-full bg-brand hover:bg-brand/90 text-brand-foreground">
                  <Link href="/contact">Book a Discovery Call</Link>
                </Button>
              </div>
            </div>

            {/* Engagement */}
            <div className="lg:sticky lg:top-28">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                Recommended starting point
              </div>
              <EngagementCard engagement={engagement} />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative py-20 lg:py-24 border-t border-foreground/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center justify-center gap-3 text-sm font-mono text-muted-foreground mb-6 w-full">
            <span className="w-8 h-px bg-foreground/30" />
            FAQ
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-center text-3xl lg:text-5xl font-display font-semibold tracking-tight">
            {service.short} questions, answered.
          </h2>
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="relative py-20 lg:py-24 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between gap-6 mb-12">
            <h2 className="text-2xl lg:text-3xl font-display font-semibold tracking-tight">
              Related services
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All services
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a project like this in mind?"
        sub="Share where it stands today and the outcome that matters. We will tell you honestly whether Brahmaxis Labs is the right fit and the best next step."
        primary={{ label: "Book a Discovery Call", href: "/contact" }}
        secondary={{ label: "Tell us what you're building", href: "/contact" }}
      />
    </>
  );
}
