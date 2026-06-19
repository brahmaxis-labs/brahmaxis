import Link from "next/link";
import { AnimatedWave } from "@/components/landing/animated-wave";
import { SITE, SERVICES, LEGAL_NOTES } from "@/lib/site";

const columns: { title: string; links: { name: string; href: string }[] }[] = [
  {
    title: "Services",
    links: SERVICES.slice(0, 5).map((s) => ({ name: s.short, href: `/services/${s.slug}` })),
  },
  {
    title: "Company",
    links: [
      { name: "Brahmastra", href: "/brahmastra" },
      { name: "Proof", href: "/proof" },
      { name: "Process", href: "/process" },
      { name: "Insights", href: "/#insights" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Engage",
    links: [
      { name: "Book a Discovery Call", href: "/contact" },
      { name: "Tell us what you're building", href: "/contact" },
      { name: "All services", href: "/services" },
      { name: "Fractional CTO", href: "/services/fractional-cto" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 mt-px">
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden" aria-hidden>
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center mb-6 group">
                <img
                  src="/brand/logo-light.png"
                  alt="Brahmaxis Labs"
                  className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Product engineering for revenue, data, and operations systems — eCommerce automation,
                AdTech, SaaS, dashboards, internal tools, infrastructure, and edge-cloud.
              </p>

              <a
                href={`mailto:${SITE.email}?subject=Project%20enquiry%20for%20BrahmAxis%20Labs`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {SITE.email}
              </a>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-medium mb-6">{col.title}</h3>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Legal notes */}
          <div className="mt-16 grid gap-3 border-t border-foreground/10 pt-8">
            {LEGAL_NOTES.map((note) => (
              <p key={note} className="text-xs text-muted-foreground/80 leading-relaxed max-w-4xl">
                {note}
              </p>
            ))}
          </div>
        </div>

        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BrahmAxis Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for select projects
            </span>
            <span className="text-foreground/20">|</span>
            <span>India &amp; global</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
