import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { BookingSection } from "@/components/site/booking-section";
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
    </>
  );
}
