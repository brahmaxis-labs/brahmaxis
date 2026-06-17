import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "MVP development", href: "#features" },
    { name: "IoT edge-cloud", href: "#features" },
    { name: "Analytics platforms", href: "#features" },
    { name: "Infrastructure", href: "#features" },
  ],
  Engagements: [
    { name: "Discovery sprint", href: "#engagements" },
    { name: "Prototype sprint", href: "#engagements" },
    { name: "MVP build", href: "#engagements" },
    { name: "Fractional CTO", href: "#engagements" },
  ],
  Company: [
    { name: "Brahmastra", href: "#brahmastra" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Team", href: "#team" },
    { name: "Insights", href: "#insights" },
    { name: "Process", href: "#how-it-works" },
  ],
};

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2.5 mb-6 group">
                <span className="relative flex h-6 w-6 items-center justify-center" aria-hidden>
                  <span className="absolute inset-0 rounded-md bg-brand/15 ring-1 ring-brand/40" />
                  <span className="h-3 w-3 rounded-[3px] bg-brand rotate-45 transition-transform duration-500 group-hover:rotate-[135deg]" />
                </span>
                <span className="text-2xl font-display font-semibold tracking-tight">
                  BrahmAxis<span className="font-normal text-muted-foreground"> Labs</span>
                </span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Product engineering for deployable MVPs, IoT systems, analytics platforms, infrastructure, and edge-cloud products.
              </p>

              <a
                href="mailto:hello@brahmaxis.com?subject=Project%20enquiry%20for%20BrahmAxis%20Labs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@brahmaxis.com
              </a>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 BrahmAxis Labs. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for select projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
