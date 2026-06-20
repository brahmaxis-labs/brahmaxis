import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { BookingSection } from "@/components/site/booking-section";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const description =
  "Book a free 30-minute strategy call with the Brahmaxis Labs team — product roadmap, architecture, AI opportunities, scaling, and a clear next step. Free for the first 50 founder consultations.";

export const metadata: Metadata = pageMetadata({
  title: "Book a Free Strategy Call",
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free strategy call"
        title={
          <>
            Book a Free <span className="text-gradient-brand">Strategy Call.</span>
          </>
        }
        sub="Discuss your product, architecture, AI opportunities, scaling challenges, or technical roadmap with the Brahmaxis Labs team."
      />
      <BookingSection />
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
