import { PROCESS } from "@/lib/site";

/** Five-step delivery process — horizontal timeline on desktop, stacked on mobile. */
export function ProcessSteps() {
  return (
    <div className="relative">
      {/* Desktop connecting line */}
      <div
        className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden
      />
      <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
        {PROCESS.map((step, i) => (
          <li key={step.num} className="relative flex gap-5 lg:flex-col lg:gap-0">
            {/* Mobile vertical line */}
            {i < PROCESS.length - 1 && (
              <span
                className="lg:hidden absolute left-7 top-16 -bottom-10 w-px bg-border"
                aria-hidden
              />
            )}
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand/30 bg-card font-display text-lg font-semibold text-brand">
              {step.num}
            </div>
            <div className="lg:mt-6">
              <h3 className="text-xl font-display font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed lg:max-w-[14rem]">
                {step.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
