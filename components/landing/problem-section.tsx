const problems = [
  "Backend architecture",
  "Deployment",
  "Data flow",
  "Dashboards",
  "Monitoring",
  "Infrastructure",
  "Analytics",
  "Edge/cloud reliability",
  "Documentation",
  "Cost control",
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 lg:py-32 border-y border-foreground/10 bg-foreground/[0.02]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 items-start">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Problem
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Most MVPs fail because they are built as screens, not systems.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              BrahmAxis Labs helps you build the whole operating system behind the interface, from first architecture decision to deployable pilot.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {problems.map((problem) => (
              <div
                key={problem}
                className="group flex items-center gap-3 rounded-lg border border-border bg-card/40 px-5 py-4 text-sm text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60 transition-colors group-hover:bg-brand" />
                {problem}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
