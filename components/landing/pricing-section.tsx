"use client";

import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Discovery Sprint",
    description: "For teams that need clarity before committing serious build budget",
    price: "1-2 weeks",
    features: [
      "Product requirements and MVP scope",
      "Technical architecture",
      "Infra plan, budget, and timeline",
      "Risk assessment and build roadmap",
    ],
    cta: "Book discovery",
    popular: false,
  },
  {
    name: "MVP Build",
    description: "For founders and teams that need a usable product, not only a mockup",
    price: "6-12 weeks",
    features: [
      "Backend, frontend, database, auth",
      "Dashboard, APIs, deployment",
      "Monitoring basics",
      "Documentation and transition",
    ],
    cta: "Start MVP scope",
    popular: true,
  },
  {
    name: "Edge-Cloud Pilot",
    description: "For IoT, hardware, logistics, and operations teams testing real-world systems",
    price: "8-16 weeks",
    features: [
      "Device integration and edge service",
      "Telemetry ingestion and dashboard",
      "Alerts and deployment setup",
      "Pilot support and ops documentation",
    ],
    cta: "Plan pilot",
    popular: false,
  },
  {
    name: "Prototype Sprint",
    description: "For validating feasibility with something real enough to demo",
    price: "2-4 weeks",
    features: [
      "Clickable or functional prototype",
      "Basic backend and dashboard",
      "Core workflow",
      "Demo deployment and feasibility report",
    ],
    cta: "Prototype first",
    popular: false,
  },
  {
    name: "Fractional CTO",
    description: "For teams that need architecture and product judgment without a full-time CTO",
    price: "Monthly",
    features: [
      "Weekly architecture reviews",
      "Roadmap and sprint planning",
      "Hiring and vendor reviews",
      "Delivery oversight",
    ],
    cta: "Discuss retainer",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can Brahmaxis join an existing engineering team?",
    answer: "Yes. Work can be scoped as independent delivery, architecture support, fractional CTO guidance, or project-specific engineering.",
  },
  {
    question: "Do you handle deployment and DevOps?",
    answer: "Yes. Local setup, cloud deployment, CI/CD, monitoring, logging, and handover docs can be included.",
  },
  {
    question: "What projects are a good fit?",
    answer: "MVPs, IoT systems, edge-cloud pilots, analytics dashboards, infrastructure setup, and internal operations tools.",
  },
  {
    question: "How does a project start?",
    answer: "A qualification call checks problem, budget, timeline, and decision-maker, then a paid discovery sprint turns it into scope and architecture.",
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
            Productized ways
            <br />
            <span className="text-gradient-brand">to ship</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Capital-efficient packages with clear deliverables, timelines, outcomes, and decision points.
          </p>
        </div>

        {/* Engagement Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col rounded-2xl border p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-2 border-brand bg-brand/[0.05] shadow-[0_0_50px_-18px_color-mix(in_oklch,var(--brand)_60%,transparent)]"
                  : "border-border bg-card/40 hover:border-brand/40 hover:bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-brand-foreground">
                  Most popular
                </span>
              )}

              {/* Header — reserved bands keep prices aligned across cards */}
              <span className="font-mono text-xs text-brand">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 min-h-[3.75rem] font-display text-2xl font-semibold leading-tight tracking-tight text-foreground">
                {plan.name}
              </h3>
              <p className="mt-2 min-h-[6rem] text-sm text-muted-foreground leading-relaxed">
                {plan.description}
              </p>

              {/* Price */}
              <div className="pb-5 border-b border-border">
                <span className="font-display text-3xl font-semibold tracking-tight text-foreground">
                  {plan.price}
                </span>
              </div>

              {/* Features */}
              <ul className="mt-5 mb-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA pinned to the bottom */}
              <a
                href="#contact"
                className={`mt-auto w-full rounded-full py-3.5 flex items-center justify-center gap-2 text-sm font-medium transition-all ${
                  plan.popular
                    ? "bg-brand text-brand-foreground hover:bg-brand/90 shadow-lg shadow-brand/20"
                    : "border border-border text-foreground hover:border-brand/50 hover:bg-brand/5"
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
                <details key={faq.question} className="rounded-xl border border-border bg-card/40 p-6 group transition-colors hover:border-brand/30">
                  <summary className="cursor-pointer list-none font-medium text-foreground flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-brand text-lg leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <form
            id="contact"
                action="mailto:hello@brahmaxis.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 lg:p-10 scroll-mt-24"
          >
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
              Contact
            </span>
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm text-muted-foreground">
                Name
                <input name="name" required className="bg-transparent rounded-lg border border-border px-4 py-3 text-foreground outline-none focus:border-brand" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Email
                <input name="email" type="email" required className="bg-transparent rounded-lg border border-border px-4 py-3 text-foreground outline-none focus:border-brand" placeholder="you@company.com" />
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Company
                <input name="company" required className="bg-transparent rounded-lg border border-border px-4 py-3 text-foreground outline-none focus:border-brand" placeholder="Company name" />
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                What are you building?
                <input name="project" required className="bg-transparent rounded-lg border border-border px-4 py-3 text-foreground outline-none focus:border-brand" placeholder="MVP, IoT pilot, analytics dashboard, infra setup..." />
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Current stage
                <select name="stage" required className="bg-background rounded-lg border border-border px-4 py-3 text-foreground outline-none focus:border-brand">
                  <option>Idea or discovery</option>
                  <option>Prototype exists</option>
                  <option>MVP in progress</option>
                  <option>Preparing for launch</option>
                  <option>Existing system needs help</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Target launch timeline
                <select name="timeline" required className="bg-background rounded-lg border border-border px-4 py-3 text-foreground outline-none focus:border-brand">
                  <option>2-4 weeks</option>
                  <option>1-3 months</option>
                  <option>3-6 months</option>
                  <option>Exploring timeline</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Budget range
                <select name="budget" required className="bg-background rounded-lg border border-border px-4 py-3 text-foreground outline-none focus:border-brand">
                  <option>Discovery only</option>
                  <option>Under Rs 2L</option>
                  <option>Rs 2L-Rs 7L</option>
                  <option>Rs 8L-Rs 30L</option>
                  <option>Rs 30L+</option>
                  <option>Global budget</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Need type
                <select name="need" required className="bg-background rounded-lg border border-border px-4 py-3 text-foreground outline-none focus:border-brand">
                  <option>MVP or prototype</option>
                  <option>IoT or edge-cloud</option>
                  <option>Analytics platform</option>
                  <option>Infrastructure and deployment</option>
                  <option>Fractional CTO support</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Preferred call time
                <input name="preferred_call_time" className="bg-transparent rounded-lg border border-border px-4 py-3 text-foreground outline-none focus:border-brand" placeholder="Weekdays after 4 PM IST" />
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Message
                <textarea name="message" required className="min-h-36 bg-transparent rounded-lg border border-border px-4 py-3 text-foreground outline-none focus:border-brand" placeholder="What outcome are you trying to create?" />
              </label>
              <p className="text-sm text-muted-foreground">
                Prefer email? Write to{" "}
                <a className="text-foreground underline underline-offset-4" href="mailto:hello@brahmaxis.com?subject=Project%20enquiry%20for%20Brahmaxis">
                  hello@brahmaxis.com
                </a>
              </p>
              <button className="w-full rounded-full py-4 bg-brand text-brand-foreground flex items-center justify-center gap-2 text-sm font-medium transition-all group hover:bg-brand/90 shadow-lg shadow-brand/20" type="submit">
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
