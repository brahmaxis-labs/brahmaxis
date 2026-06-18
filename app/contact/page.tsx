import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're building — the problem, stage, budget, and timeline. We'll respond with whether Brahmaxis is the right fit and the best next step.",
  alternates: { canonical: "/contact" },
};

const NEXT_STEPS = [
  { n: "01", t: "We read your brief", d: "We check the problem, stage, budget, and timeline for fit — honestly." },
  { n: "02", t: "We book a discovery call", d: "If it's a match, we align on scope, risks, and the outcome that matters." },
  { n: "03", t: "You get a clear next step", d: "Discovery, architecture, build, or production cleanup — whatever fits best." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what you&apos;re <span className="text-gradient-brand">building.</span>
          </>
        }
        sub="Share the problem, stage, budget, and timeline. We will respond with whether Brahmaxis is the right fit and the best next step."
      />

      <section className="relative py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-start">
            <ContactForm />

            <aside className="lg:sticky lg:top-28 space-y-8">
              <div>
                <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                  <span className="w-8 h-px bg-foreground/30" />
                  What happens next
                </span>
                <ol className="space-y-5">
                  {NEXT_STEPS.map((s) => (
                    <li key={s.n} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 font-mono text-xs text-brand">
                        {s.n}
                      </span>
                      <div>
                        <h3 className="font-medium text-foreground">{s.t}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="font-medium text-foreground">Prefer email?</h3>
                <a
                  href={`mailto:${SITE.email}?subject=Project%20enquiry%20for%20BrahmAxis%20Labs`}
                  className="mt-1 inline-block text-sm text-brand hover:underline underline-offset-4"
                >
                  {SITE.email}
                </a>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  We work with founders and teams across India and globally. We respond to qualified
                  briefs with a clear, honest next step.
                </p>
              </div>

              <div className="rounded-2xl border border-dashed border-border/70 p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We work on paid engagements. Strategic equity discussions may only happen alongside
                  meaningful cash compensation.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
