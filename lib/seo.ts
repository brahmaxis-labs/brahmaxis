import type { Metadata } from "next";
import { SERVICES, SITE, type Service } from "@/lib/site";

export const SITE_URL = "https://brahmaxis.com";
export const DEFAULT_OG_IMAGE = "/brand/og-image.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  absoluteTitle?: boolean;
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const socialTitle = title.includes(SITE.name) ? title : `${title} — ${SITE.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: absoluteUrl(path),
      siteName: SITE.name,
      title: socialTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Brahmaxis Labs product engineering brand banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    url: SITE_URL,
    logo: absoluteUrl("/brand/logo-dark.png"),
    email: SITE.email,
    description:
      "Brahmaxis Labs builds product engineering systems for revenue, data, operations, infrastructure, and edge-cloud teams.",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE.name,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: SITE.name,
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    email: SITE.email,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates", "Global"],
    serviceType: SERVICES.map((service) => service.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Product engineering services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.summary,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/brahmastra#software-application`,
    name: "Brahmastra",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Internal delivery accelerator",
    url: absoluteUrl("/brahmastra"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    creator: { "@id": `${SITE_URL}/#organization` },
    description:
      "Brahmastra is Brahmaxis Labs' internal product engineering accelerator for reusable architecture, CLI workflows, templates, deployment playbooks, and vertical kits.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/OnlineOnly",
      price: "0",
      priceCurrency: "USD",
      description: "Brahmastra is not sold as a public product; clients receive its delivery leverage through Brahmaxis Labs engagements.",
    },
  };
}

export function faqPageJsonLd(items: { q: string; a: string }[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceFaqs(service: Service) {
  return [
    {
      q: `What problem does ${service.name} solve?`,
      a: `It helps teams replace manual, fragile, or disconnected ${service.short.toLowerCase()} workflows with production-ready software that can be operated, measured, and improved.`,
    },
    {
      q: `Who is ${service.name} for?`,
      a: `It is best for ${service.bestFor.join(", ")} who need a clearer system, faster execution, and fewer operational bottlenecks.`,
    },
    {
      q: "How does the engagement usually start?",
      a: `Most work starts with ${service.engagement} or a focused discovery sprint so scope, architecture, risks, and delivery milestones are clear before build work expands.`,
    },
  ];
}
