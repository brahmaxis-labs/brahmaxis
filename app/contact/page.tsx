import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ContactSection } from "@/components/site/contact-section";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const description =
  "Contact Brahmaxis Labs about product engineering, SaaS MVPs, dashboards, automation, infrastructure, AI opportunities, scaling, and technical roadmap questions.";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Contact <span className="text-gradient-brand">Brahmaxis Labs.</span>
          </>
        }
        sub="Tell us about your product, workflow, dashboard, integration, infrastructure, AI opportunity, scaling challenge, or technical roadmap."
      />
      <ContactSection />
      <section className="relative pb-20">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
          <p className="text-sm text-muted-foreground">
            Follow Brahmaxis Labs on{" "}
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
