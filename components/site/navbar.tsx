"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV_LINKS, SERVICES } from "@/lib/site";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2.5 group shrink-0">
      <span className="relative flex h-6 w-6 items-center justify-center" aria-hidden>
        <span className="absolute inset-0 rounded-md bg-brand/15 ring-1 ring-brand/40" />
        <span className="h-3 w-3 rounded-[3px] bg-brand rotate-45 transition-transform duration-500 group-hover:rotate-[135deg]" />
      </span>
      <span className="font-display font-semibold tracking-tight text-lg">
        BrahmAxis<span className="font-normal text-muted-foreground"> Labs</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/services"
      ? pathname.startsWith("/services")
      : pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      className={`fixed z-50 animate-nav-in transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || mobileOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          <Logo />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) =>
              link.name === "Services" ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                      isActive(link.href) ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[640px] transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="rounded-2xl border border-border bg-popover/95 backdrop-blur-xl shadow-2xl p-3 grid grid-cols-2 gap-1">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent"
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-brand transition-colors group-hover:border-brand/40">
                            <s.icon className="h-4 w-4" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-medium text-foreground">{s.short}</span>
                            <span className="block text-xs text-muted-foreground truncate">
                              {s.engagement}
                            </span>
                          </span>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="col-span-2 mt-1 flex items-center justify-center gap-2 rounded-xl border border-border/60 px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:border-brand/40 hover:text-foreground"
                      >
                        View all services
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 relative group ${
                    isActive(link.href) ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button
              asChild
              size="sm"
              className={`bg-brand hover:bg-brand/90 text-brand-foreground rounded-full shadow-md shadow-brand/20 transition-all duration-500 ${
                isScrolled ? "px-4 h-8 text-xs" : "px-6"
              }`}
            >
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-10 overflow-y-auto">
          <nav className="flex-1 flex flex-col justify-center gap-6">
            {[{ name: "Home", href: "/" }, ...NAV_LINKS].map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-4xl font-display transition-all duration-500 ${
                  isActive(link.href) ? "text-brand" : "text-foreground hover:text-muted-foreground"
                } ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div
            className={`flex flex-col gap-3 pt-8 border-t border-foreground/10 transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "320ms" : "0ms" }}
          >
            <Button asChild className="bg-brand text-brand-foreground rounded-full h-14 text-base" onClick={() => setMobileOpen(false)}>
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full h-14 text-base border-border bg-card/40"
              onClick={() => setMobileOpen(false)}
            >
              <Link href="/contact">Tell us what you&apos;re building</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
