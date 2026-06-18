import { SectionHeader } from "@/components/site/section-header";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { FAQS } from "@/lib/site";

export function HomeFaq() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions, answered."
          align="center"
          intro="Straight answers on positioning, Brahmastra, ParkTek, and how engagements work."
        />
        <div className="mt-14">
          <FAQAccordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
