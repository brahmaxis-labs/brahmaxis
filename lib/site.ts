import type { LucideIcon } from "lucide-react";
import {
  ShoppingCart,
  TrendingUp,
  Boxes,
  LayoutDashboard,
  ServerCog,
  Cpu,
  Compass,
  ShoppingBag,
  Megaphone,
  ClipboardCheck,
  Database,
  Radio,
  Layers,
  Workflow,
  GaugeCircle,
} from "lucide-react";

/**
 * Single source of truth for Brahmaxis Labs marketing content.
 * Copy is positioned around revenue-critical product engineering — eCommerce,
 * AdTech, SaaS, data, infrastructure, internal tools, and edge-cloud systems.
 * Keep legal-safe wording: no employer logos, no endorsements, no exposed IP.
 */

export const SITE = {
  name: "Brahmaxis Labs",
  shortName: "Brahmaxis Labs",
  email: "hello@brahmaxis.com",
  domain: "brahmaxis.com",
  linkedin: "https://www.linkedin.com/company/brahmaxis-labs",
  tagline: "Product engineering for revenue, data, and operations systems.",
} as const;

/* ---------------------------------------------------------------- nav --- */

export type NavLink = { name: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { name: "Services", href: "/services" },
  { name: "Brahmastra", href: "/brahmastra" },
  { name: "Proof", href: "/proof" },
  { name: "Process", href: "/process" },
  { name: "Insights", href: "/#insights" },
  { name: "Book a Call", href: "/contact" },
];

/* ----------------------------------------------------------- services --- */

export type Service = {
  slug: string;
  num: string;
  name: string;
  short: string;
  icon: LucideIcon;
  summary: string;
  build: string;
  engagement: string;
  bestFor: string[];
  outcomes: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "ecommerce-marketplace-automation",
    num: "01",
    name: "eCommerce & Marketplace Automation",
    short: "eCommerce & Marketplace",
    icon: ShoppingCart,
    summary:
      "Seller dashboards, Amazon-style workflows, marketplace integrations, listing automation, catalog operations, ad reporting, and inventory/order intelligence.",
    build:
      "Build seller dashboards, marketplace workflows, Amazon-style API integrations, catalog tools, listing automation, ad reporting, and inventory/order systems.",
    engagement: "Marketplace Growth Automation Sprint",
    bestFor: ["Amazon sellers", "D2C brands", "Marketplace agencies", "eCommerce consultants"],
    outcomes: [
      "Less manual reporting",
      "Better visibility into seller performance",
      "Faster catalog and listing workflows",
      "Operational dashboards for marketplace teams",
    ],
  },
  {
    slug: "adtech-growth-engineering",
    num: "02",
    name: "AdTech & Growth Engineering",
    short: "AdTech & Growth",
    icon: TrendingUp,
    summary:
      "Campaign dashboards, budget pacing, ROAS/CAC reporting, multi-channel ad data pipelines, token/account systems, and AdOps workflow automation.",
    build:
      "Build campaign dashboards, budget pacing tools, ROAS/CAC reporting, token/account management, marketing data pipelines, and AdOps automation.",
    engagement: "AdOps Automation Sprint",
    bestFor: [
      "Performance marketing agencies",
      "AdTech startups",
      "Growth teams",
      "D2C/SaaS companies with ad spend",
    ],
    outcomes: [
      "Cleaner campaign visibility",
      "Reduced manual AdOps",
      "Better reporting cadence",
      "Better control over spend and performance",
    ],
  },
  {
    slug: "saas-mvp-development",
    num: "03",
    name: "SaaS MVP Development",
    short: "SaaS MVP",
    icon: Boxes,
    summary:
      "Backend-heavy MVPs, multi-tenant SaaS foundations, auth/RBAC, admin dashboards, APIs, workers, deployment, and technical handover.",
    build:
      "Build backend-heavy MVPs with auth, roles, APIs, dashboards, data models, workers, deployment, and handover.",
    engagement: "SaaS MVP Foundation Sprint",
    bestFor: [
      "Non-technical founders",
      "B2B SaaS founders",
      "Domain experts",
      "Funded early-stage teams",
    ],
    outcomes: [
      "Working MVP",
      "Cleaner technical foundation",
      "Faster demos and pilots",
      "Easier future iteration",
    ],
  },
  {
    slug: "data-dashboards-internal-tools",
    num: "04",
    name: "Data, Dashboards & Internal Tools",
    short: "Data & Internal Tools",
    icon: LayoutDashboard,
    summary:
      "Operational dashboards, ETL pipelines, internal portals, approval workflows, automated reports, KPI layers, and decision systems.",
    build:
      "Build dashboards, ETL pipelines, automated reports, admin panels, approval systems, internal portals, and KPI systems.",
    engagement: "Data-to-Dashboard Sprint",
    bestFor: [
      "SMEs",
      "Agencies",
      "Logistics / eCommerce / ops-heavy teams",
      "Consulting firms",
    ],
    outcomes: [
      "Fewer spreadsheets",
      "Faster reporting",
      "Better operational visibility",
      "More repeatable workflows",
    ],
  },
  {
    slug: "infrastructure-production-readiness",
    num: "05",
    name: "Infrastructure & Production Readiness",
    short: "Infrastructure & Production",
    icon: ServerCog,
    summary:
      "CI/CD, Dockerization, monitoring, logging, cloud cost optimization, deployment pipelines, database cleanup, and reliability improvements.",
    build:
      "Improve deployment, monitoring, logging, CI/CD, cloud cost, database reliability, worker systems, and production operations.",
    engagement: "Production Readiness Sprint",
    bestFor: [
      "Startups with messy infra",
      "Teams preparing to launch",
      "Products with reliability issues",
      "Agencies needing DevOps support",
    ],
    outcomes: [
      "Cleaner deployment",
      "Better observability",
      "Reduced infra chaos",
      "More stable product operations",
    ],
  },
  {
    slug: "iot-edge-cloud",
    num: "06",
    name: "IoT & Edge-Cloud Systems",
    short: "IoT & Edge-Cloud",
    icon: Cpu,
    summary:
      "Telemetry dashboards, device/field operations, local/cloud deployment, edge workflows, monitoring, alerts, and real-world operational systems.",
    build:
      "Build telemetry dashboards, local/cloud deployment systems, edge gateways, device/field operations workflows, monitoring, and real-world operational tools.",
    engagement: "Edge-Cloud Pilot",
    bestFor: [
      "Smart infrastructure",
      "Logistics",
      "Facilities",
      "Field operations",
      "Hardware startups with working prototypes",
    ],
    outcomes: [
      "Pilot-ready systems",
      "Better field visibility",
      "Operational monitoring",
      "Deployment-ready edge/cloud workflows",
    ],
  },
  {
    slug: "fractional-cto",
    num: "07",
    name: "Fractional CTO & Product Architecture",
    short: "Fractional CTO",
    icon: Compass,
    summary:
      "Technical roadmap, architecture reviews, build-vs-buy decisions, hiring support, vendor evaluation, and delivery oversight.",
    build:
      "Provide senior technical leadership for architecture, roadmap, hiring, vendor decisions, delivery oversight, and build-vs-buy choices.",
    engagement: "Fractional CTO Retainer",
    bestFor: [
      "Non-technical founders",
      "SMEs building software",
      "Teams without senior technical leadership",
    ],
    outcomes: [
      "Fewer expensive technical mistakes",
      "Clearer roadmap",
      "Better vendor and hiring decisions",
      "Better delivery discipline",
    ],
  },
];

export const serviceBySlug = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

/* -------------------------------------------------------- buyer pain --- */

export const BUYER_PAINS: { title: string; icon: LucideIcon }[] = [
  { title: "MVPs that break after the demo", icon: Boxes },
  { title: "Dashboards that do not connect to real data", icon: LayoutDashboard },
  { title: "Manual operations stuck in spreadsheets", icon: ClipboardCheck },
  { title: "Ad and marketplace workflows spread across tools", icon: Megaphone },
  { title: "Infrastructure that nobody wants to touch", icon: ServerCog },
  { title: "IoT and field systems that fail outside ideal conditions", icon: Cpu },
];

/* ----------------------------------------------------- founder proof --- */

export type ProofItem = { title: string; body: string };

export const FOUNDER_PROOF: ProofItem[] = [
  {
    title: "AdTech and growth systems",
    body: "Founder experience includes building multi-channel campaign infrastructure across major ad platforms — ad-account systems, ETL pipelines, optimization workflows, token management, and reporting layers.",
  },
  {
    title: "eCommerce and marketplace SaaS",
    body: "Founder experience includes building marketplace automation for Amazon sellers — ads, seller data, inventory, orders, listing workflows, AI-assisted content generation, and operational dashboards.",
  },
  {
    title: "FinTech and transaction systems",
    body: "Experience includes bulk transaction processing, Kafka-based microservices, payment notifications, and monitoring workflows for high-volume transaction systems.",
  },
  {
    title: "Data and infrastructure",
    body: "Experience includes dockerized data pipelines, cloud cost optimization, deployment systems, observability, structured logs, alerts, and production-readiness practices.",
  },
  {
    title: "Real-world operations",
    body: "ParkTek experience adds operational software, edge/cloud patterns, local deployment, dashboards, and real-world field constraints.",
  },
];

/* ----------------------------------------------------- parktek proof --- */

export const PARKTEK_MODULES: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: "Core platform layer", desc: "Multi-tenant services, auth, roles, and the shared data model behind every workflow.", icon: Layers },
  { title: "Operations dashboard", desc: "Real-time operational views for field teams, approvals, and day-to-day control.", icon: LayoutDashboard },
  { title: "Analytics layer", desc: "KPI rollups, reporting, and the decision surfaces operators actually use.", icon: GaugeCircle },
  { title: "Infrastructure and deployment", desc: "Dockerized services, environments, monitoring, logging, and deployment pipelines.", icon: ServerCog },
  { title: "Local / cloud workflows", desc: "Edge-and-cloud patterns that keep running under real-world field constraints.", icon: Cpu },
  { title: "Automation and internal tooling", desc: "Background workers, notifications, and the internal tools that remove manual steps.", icon: Workflow },
];

/* --------------------------------------------------- brahmastra kits --- */

export const BRAHMASTRA_KITS: { name: string; desc: string; icon: LucideIcon }[] = [
  { name: "Core Kit", desc: "Auth, RBAC, multi-tenant foundations, API templates, workers, queues, dashboard shell, logging, deployment, and documentation.", icon: Boxes },
  { name: "Commerce Kit", desc: "Marketplace data models, seller dashboards, listing workflows, inventory/order patterns, and ad reporting templates.", icon: ShoppingBag },
  { name: "Ads Kit", desc: "Ad-account schemas, campaign reporting models, token management patterns, budget pacing, ROAS dashboards, and ETL templates.", icon: Megaphone },
  { name: "Ops Kit", desc: "Admin panels, approval workflows, notifications, audit logs, reporting, and internal workflow patterns.", icon: ClipboardCheck },
  { name: "Data Kit", desc: "ETL scaffolding, validation checks, dashboards, KPIs, alert rules, and automated reporting.", icon: Database },
  { name: "Infra Kit", desc: "CI/CD, Docker, monitoring, logs, deployment readiness, cloud cost checks, and observability patterns.", icon: ServerCog },
  { name: "Edge Kit", desc: "Telemetry ingestion, device registry, local deployment, edge gateway patterns, and operational monitoring.", icon: Radio },
];

export const BRAHMASTRA_CLIENT_VALUE: string[] = [
  "Faster project setup",
  "Cleaner architecture",
  "Better documentation",
  "More predictable delivery",
  "Easier handover",
  "Less repeated boilerplate",
  "More senior attention on business-specific problems",
];

export const BRAHMASTRA_NOT: string[] = [
  "It does not let non-coders build anything magically.",
  "It does not replace engineering judgment.",
  "It is not currently a public SaaS product.",
  "It is not a shortcut around proper architecture, testing, and deployment.",
];

/* --------------------------------------------------- engagements ------ */

export type Engagement = {
  num: string;
  name: string;
  audience: string;
  deliverables: string[];
  cta: string;
  popular?: boolean;
};

export const ENGAGEMENTS: Engagement[] = [
  {
    num: "01",
    name: "Discovery Sprint",
    audience: "For founders and teams who need clarity before building.",
    deliverables: ["Product scope", "Technical architecture", "Risk assessment", "Delivery roadmap", "Budget estimate"],
    cta: "Start with Discovery",
    popular: true,
  },
  {
    num: "02",
    name: "Marketplace Growth Automation Sprint",
    audience: "For eCommerce teams, Amazon sellers, and marketplace operators.",
    deliverables: ["Seller dashboard", "Reporting workflow", "Marketplace API integration where feasible", "Listing/catalog workflow", "Automated reporting"],
    cta: "Build marketplace automation",
  },
  {
    num: "03",
    name: "AdOps Automation Sprint",
    audience: "For growth teams and performance marketing agencies.",
    deliverables: ["Campaign dashboard", "Budget pacing", "ROAS/CAC reporting", "Data pipelines", "Alerts and account workflows"],
    cta: "Automate AdOps",
  },
  {
    num: "04",
    name: "SaaS MVP Foundation Sprint",
    audience: "For founders building B2B SaaS products.",
    deliverables: ["Multi-tenant backend", "Auth/RBAC", "Dashboard", "API layer", "Deployment", "Documentation"],
    cta: "Build an MVP foundation",
  },
  {
    num: "05",
    name: "Data-to-Dashboard Sprint",
    audience: "For teams drowning in spreadsheets and disconnected systems.",
    deliverables: ["Data ingestion", "Transformations", "Dashboard", "KPIs", "Alerts", "Automated reports"],
    cta: "Create an operational dashboard",
  },
  {
    num: "06",
    name: "Production Readiness Sprint",
    audience: "For startups with unstable infra or messy deployments.",
    deliverables: ["Infra audit", "CI/CD", "Logging", "Monitoring", "Deployment cleanup", "Cloud cost recommendations"],
    cta: "Stabilize your product",
  },
  {
    num: "07",
    name: "Fractional CTO Retainer",
    audience: "For founders who need senior technical leadership.",
    deliverables: ["Architecture reviews", "Roadmap", "Vendor decisions", "Hiring support", "Delivery oversight"],
    cta: "Get CTO-level support",
  },
];

/* --------------------------------------------------------- process --- */

export const PROCESS: { num: string; title: string; desc: string }[] = [
  { num: "01", title: "Diagnose", desc: "Understand the business problem, users, constraints, budget, and success metric." },
  { num: "02", title: "Architect", desc: "Define scope, system architecture, data model, integrations, infra, and delivery risks." },
  { num: "03", title: "Build", desc: "Ship in focused sprints using senior engineering, reusable patterns, and Brahmastra-powered scaffolding." },
  { num: "04", title: "Deploy", desc: "Set up staging/production, monitoring, documentation, and handover." },
  { num: "05", title: "Improve", desc: "Support iteration, analytics, maintenance, and product scaling." },
];

/* ------------------------------------------------------------- faq --- */

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Is Brahmaxis Labs only an IoT company?",
    a: "No. IoT and edge-cloud systems are one part of our work. We also build eCommerce automation, AdTech workflows, SaaS MVPs, data dashboards, internal tools, infrastructure, and production systems.",
  },
  {
    q: "Is Brahmastra a public product?",
    a: "Not yet. Brahmastra is currently our internal engineering accelerator. It helps us deliver faster and more consistently. Private licensing may be explored later only after repeated client proof.",
  },
  {
    q: "Do you build simple websites?",
    a: "Only when they are part of a larger product or business system. Brahmaxis Labs is not positioned as a low-cost website agency.",
  },
  {
    q: "Can you work with non-technical founders?",
    a: "Yes, but we start by clarifying scope, risks, budget, and success metrics. We usually recommend a paid discovery sprint before a full build.",
  },
  {
    q: "Do you expose or reuse ParkTek code?",
    a: "No. ParkTek is used as proof of execution and learning. We do not sell or expose ParkTek source code, secrets, customer data, or sensitive architecture.",
  },
  {
    q: "Can you work globally?",
    a: "Yes. We work with both India and global leads. We keep scope and engagement terms clear for each region.",
  },
  {
    q: "Do you take equity-only projects?",
    a: "No. We work on paid engagements. Strategic equity discussions may only happen alongside meaningful cash compensation.",
  },
];

export const SERVICES_FAQS: { q: string; a: string }[] = [
  {
    q: "Which service should I choose first?",
    a: "If the problem is still fuzzy, start with discovery or Fractional CTO support. If the workflow is already clear, we can start with the closest sprint, such as SaaS MVP, marketplace automation, AdOps, dashboards, infrastructure, or edge-cloud.",
  },
  {
    q: "Can Brahmaxis Labs work with an existing product?",
    a: "Yes. We can audit the current system, stabilize infrastructure, build missing dashboards or workflows, and add new product capabilities without forcing a full rewrite.",
  },
  {
    q: "Do you only take full product builds?",
    a: "No. Some projects are scoped sprints for one workflow, dashboard, integration, deployment cleanup, or architecture decision. The right shape depends on risk, urgency, and business value.",
  },
  {
    q: "How quickly can a service engagement start?",
    a: "Most work starts after a discovery call and scoped plan. Small audits or discovery sprints can usually begin faster than full builds because requirements and access needs are narrower.",
  },
];

export const BRAHMASTRA_FAQS: { q: string; a: string }[] = [
  {
    q: "Can clients buy Brahmastra directly?",
    a: "No. Brahmastra is currently an internal Brahmaxis Labs delivery accelerator, not a public SaaS or no-code product.",
  },
  {
    q: "How does Brahmastra help a client project?",
    a: "It helps us reuse proven architecture patterns, templates, documentation standards, deployment playbooks, and vertical kits so more time goes into the client-specific business problem.",
  },
  {
    q: "Does Brahmastra replace custom engineering?",
    a: "No. It speeds up repeated setup and delivery work, but architecture decisions, integrations, product behavior, testing, and production readiness still need engineering judgment.",
  },
  {
    q: "Which project types benefit most from Brahmastra?",
    a: "It is most useful for SaaS foundations, dashboards, internal tools, marketplace workflows, AdOps systems, infrastructure cleanup, and edge-cloud operational software.",
  },
];

/* ------------------------------------------------- experience map ---- */

export const EXPERIENCE_MAP: { domain: string; built: string; help: string }[] = [
  {
    domain: "eCommerce / Marketplace",
    built: "Seller dashboards, marketplace automation, listing and catalog workflows, ad reporting.",
    help: "Marketplace automation, seller intelligence, and operational dashboards.",
  },
  {
    domain: "AdTech / Growth",
    built: "Multi-channel campaign infrastructure, ETL pipelines, token systems, reporting layers.",
    help: "Campaign dashboards, ROAS/CAC reporting, and AdOps automation.",
  },
  {
    domain: "FinTech / Transactions",
    built: "Bulk transaction processing, Kafka microservices, payment notifications, monitoring.",
    help: "High-volume processing, transaction monitoring, and alerting workflows.",
  },
  {
    domain: "Data / Infrastructure",
    built: "Dockerized data pipelines, cloud cost optimization, observability, structured logs.",
    help: "Pipelines, dashboards, deployment, and production-readiness.",
  },
  {
    domain: "DeFi / Smart Contract Ops",
    built: "On-chain operations tooling, monitoring, and automation workflows.",
    help: "Operational tooling, monitoring, and process automation.",
  },
  {
    domain: "ParkTek / Real-world operations",
    built: "Multi-repo platform, dashboards, infrastructure, local/cloud deployment, field workflows.",
    help: "Operational software, edge/cloud delivery, and real-world reliability.",
  },
];

/* ------------------------------------------------- anonymous proof --- */

export const ANON_PROOF: { title: string; desc: string }[] = [
  { title: "Multi-channel campaign infrastructure", desc: "Ad-account systems, ETL pipelines, optimization workflows, and reporting layers across major channels." },
  { title: "Marketplace automation SaaS", desc: "Seller data, ads, inventory, orders, and listing workflows behind an operational dashboard." },
  { title: "Transaction monitoring workflows", desc: "High-volume processing, microservices, notifications, and monitoring for transaction systems." },
  { title: "Dockerized data pipelines", desc: "Containerized ingestion and transformation with observability, logs, and cost control." },
  { title: "Real-world operations platform", desc: "Dashboards, infrastructure, local/cloud deployment, and field-grade operational workflows." },
];

/* --------------------------------------------- contact form options -- */

export const FORM_SERVICES = [
  "eCommerce / Marketplace Automation",
  "AdTech / Growth Engineering",
  "SaaS MVP",
  "Data / Dashboards / Internal Tools",
  "Infrastructure / Production Readiness",
  "IoT / Edge-Cloud",
  "Fractional CTO",
  "Not sure yet",
] as const;

export const FORM_STAGES = [
  "Idea",
  "Prototype",
  "Existing product",
  "Scaling product",
  "Broken/messy system",
] as const;

export const FORM_BUDGETS = [
  "Under ₹2L",
  "₹2L–₹5L",
  "₹5L–₹10L",
  "₹10L–₹25L",
  "₹25L+",
  "Global / USD budget",
] as const;

export const FORM_TIMELINES = ["ASAP", "1 month", "2–3 months", "3–6 months", "Exploring"] as const;

/* ---------------------------------------------------------- legal ---- */

export const LEGAL_NOTES = [
  "Brahmaxis Labs is an independent product engineering company. References to founder experience are for background only and do not imply endorsement by prior employers or affiliated organizations.",
  "Brahmastra is currently an internal delivery accelerator and is not marketed as a public no-code platform.",
];
