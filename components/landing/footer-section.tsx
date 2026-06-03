import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "Backend engineering", href: "#features" },
    { name: "Web platforms", href: "#features" },
    { name: "Mobile apps", href: "#features" },
    { name: "Cloud and DevOps", href: "#features" },
  ],
  Engagements: [
    { name: "Product sprint", href: "#engagements" },
    { name: "MVP build", href: "#engagements" },
    { name: "Embedded engineering", href: "#engagements" },
    { name: "Technical consulting", href: "#how-it-works" },
  ],
  Company: [
    { name: "Process", href: "#how-it-works" },
    { name: "Tech stack", href: "#developers" },
    { name: "Delivery standards", href: "#security" },
    { name: "Contact", href: "#contact" },
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
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">Aarambh</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Software consulting and product engineering for teams that need dependable delivery from idea to production.
              </p>

              <a
                href="mailto:hello@aarambh.dev?subject=Project%20enquiry%20for%20Aarambh"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@aarambh.dev
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
            2026 Aarambh. All rights reserved.
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
