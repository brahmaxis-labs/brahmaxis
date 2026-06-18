import { HomeHero } from "@/components/landing/home-hero";
import { HomePain } from "@/components/landing/home-pain";
import { HomeBuild } from "@/components/landing/home-build";
import { HomeFounderProof } from "@/components/landing/home-founder-proof";
import { HomeParktek } from "@/components/landing/home-parktek";
import { HomeBrahmastra } from "@/components/landing/home-brahmastra";
import { HomeEngagements } from "@/components/landing/home-engagements";
import { HomeProcess } from "@/components/landing/home-process";
import { DevelopersSection } from "@/components/landing/developers-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { HomeFaq } from "@/components/landing/home-faq";
import { CTASection } from "@/components/site/cta-section";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomePain />
      <HomeBuild />
      <HomeFounderProof />
      <HomeParktek />
      <HomeBrahmastra />
      <HomeEngagements />
      <HomeProcess />
      <DevelopersSection />
      <IntegrationsSection />
      <HomeFaq />
      <CTASection
        title="Have a product, workflow, dashboard, or system to build?"
        sub="Tell us what you are building, where it stands today, and what outcome matters. We will help you decide whether the next step is discovery, architecture, build, or production cleanup."
        primary={{ label: "Book a Discovery Call", href: "/contact" }}
        secondary={{ label: "Send Project Details", href: "/contact" }}
        note="ParkTek-proven delivery · Brahmastra-powered execution"
      />
    </>
  );
}
