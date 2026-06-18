/** Accessible FAQ accordion using native <details> for zero-JS, keyboard-friendly disclosure. */
export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-4">
      {items.map((f) => (
        <details
          key={f.q}
          className="group rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-brand/30 open:border-brand/30"
        >
          <summary className="cursor-pointer list-none font-medium text-foreground flex items-center justify-between gap-4">
            <span>{f.q}</span>
            <span
              className="text-brand text-xl leading-none transition-transform duration-300 group-open:rotate-45"
              aria-hidden
            >
              +
            </span>
          </summary>
          <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
