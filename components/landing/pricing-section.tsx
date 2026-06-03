"use client";

import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Sprint",
    description: "For focused builds and urgent delivery needs",
    price: "2-4 weeks",
    features: [
      "Defined outcome and scope",
      "Senior implementation",
      "Weekly delivery review",
      "Deployment-ready handover",
    ],
    cta: "Plan a sprint",
    popular: false,
  },
  {
    name: "Build Partner",
    description: "For MVPs, platforms, apps, and modernization",
    price: "6-12 weeks",
    features: [
      "Architecture and delivery plan",
      "Backend, web, mobile, cloud",
      "CI/CD and observability",
      "Product-minded execution",
      "Documentation and transition",
    ],
    cta: "Start discovery",
    popular: true,
  },
  {
    name: "Embedded Engineer",
    description: "For contract engineering inside your roadmap",
    price: "Monthly",
    features: [
      "Senior capacity on demand",
      "Existing codebase onboarding",
      "Feature delivery and refactors",
      "Technical leadership support",
      "Flexible collaboration model",
    ],
    cta: "Check availability",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can Aarambh join an existing engineering team?",
    answer: "Yes. Work can be scoped as embedded contract engineering, independent delivery, or technical leadership support.",
  },
  {
    question: "Do you handle deployment and DevOps?",
    answer: "Yes. Cloud setup, CI/CD, monitoring, rollback paths, and production readiness can be included.",
  },
  {
    question: "What projects are a good fit?",
    answer: "Backend systems, web apps, mobile apps, AI automation, cloud deployment, platform modernization, and urgent product delivery.",
  },
  {
    question: "How does a project start?",
    answer: "A short discovery call turns goals, constraints, and risks into a clear scope, timeline, and first milestone.",
  },
];

export function PricingSection() {
  return (
    <section id="engagements" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Engagements
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Flexible ways
            <br />
            <span className="text-stroke">to work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Pick the collaboration model that matches your roadmap, risk, and timeline.
          </p>
        </div>

        {/* Engagement Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                <span className="font-display text-4xl lg:text-5xl text-foreground">
                  {plan.price}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* FAQ and Contact */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
              FAQ
            </span>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="border border-foreground/10 p-6 group">
                  <summary className="cursor-pointer list-none font-medium text-foreground flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <form
            id="contact"
            action="mailto:hello@aarambh.dev"
            method="post"
            encType="text/plain"
            className="border border-foreground/10 p-8 lg:p-10 scroll-mt-24"
          >
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
              Contact
            </span>
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm text-muted-foreground">
                Name
                <input name="name" required className="bg-transparent border border-foreground/10 px-4 py-3 text-foreground outline-none focus:border-foreground/40" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Email
                <input name="email" type="email" required className="bg-transparent border border-foreground/10 px-4 py-3 text-foreground outline-none focus:border-foreground/40" placeholder="you@company.com" />
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Project need
                <input name="project" required className="bg-transparent border border-foreground/10 px-4 py-3 text-foreground outline-none focus:border-foreground/40" placeholder="Backend, web, mobile, DevOps, AI automation..." />
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Message
                <textarea name="message" required className="min-h-36 bg-transparent border border-foreground/10 px-4 py-3 text-foreground outline-none focus:border-foreground/40" placeholder="What outcome are you trying to create?" />
              </label>
              <p className="text-sm text-muted-foreground">
                Prefer email? Write to{" "}
                <a className="text-foreground underline underline-offset-4" href="mailto:hello@aarambh.dev?subject=Project%20enquiry%20for%20Aarambh">
                  hello@aarambh.dev
                </a>
              </p>
              <button className="w-full py-4 bg-foreground text-primary-foreground flex items-center justify-center gap-2 text-sm font-medium transition-all group hover:bg-foreground/90" type="submit">
                Send project brief
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
