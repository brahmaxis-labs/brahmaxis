import type { Metadata } from "next";
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
import { JsonLd } from "@/components/site/json-ld";
import { FAQS } from "@/lib/site";
import {
  faqPageJsonLd,
  organizationJsonLd,
  pageMetadata,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const description =
  "Brahmaxis Labs builds eCommerce automation, AdTech workflows, SaaS MVPs, dashboards, internal tools, infrastructure, and edge-cloud systems for founders and teams building serious software.";

export const metadata: Metadata = pageMetadata({
  title: "Brahmaxis Labs — Product Engineering for Revenue, Data and Operations Systems",
  description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          professionalServiceJsonLd(),
          faqPageJsonLd(FAQS, "/"),
        ]}
      />
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
