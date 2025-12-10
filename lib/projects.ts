import {
  LucideIcon,
  Code2,
  Database,
  Cloud,
  Zap,
  GitBranch,
  Server,
  Search,
  FlaskConical,
  Logs,
  Webhook,
} from "lucide-react";

export interface TechStack {
  name: string;
  icon: LucideIcon;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Impact {
  title: string;
  description: string;
  highlights: string[];
}

export interface Project {
  title: string;
  summary: string;
  slug: string;
  description: string;
  link: string;
  url: string;
  image: string[];
  tags: string[];
  year: string;
  techStack: {
    frontend: TechStack[];
    backend: TechStack[];
    mobile?: TechStack[];
    errorLogs?: TechStack[];
    tools: TechStack[];
  };
}

export const projects: Project[] = [
  {
    title: "Easyconnect Hotspot Billing System",
    summary:
      "Automated hotspot billing with seamless Wi-Fi and M-PESA management.",
    slug: "easyconnect",
    url: "https://app.easyconnect.online",
    description:
      "A complete Wi-Fi management and billing system featuring automated MikroTik user control, subscription packages, real-time monitoring, and seamless M-PESA payment tracking for hotspot businesses.",
    link: "/projects/easyconnect",
    image: ["/shots/Galaxy-Fold2-live.easyconnectke.online.png"],
    tags: ["SAAS", "FullStack", "Networking"],
    year: "2025",
    techStack: {
      frontend: [
        { name: "Next.js", icon: Code2 },
        { name: "Shadcn", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Code2 },
      ],
      backend: [
        { name: "Node.js", icon: Server },
        { name: "MySQL", icon: Database },
        { name: "Redis", icon: Zap },
        { name: "Microtik Router API", icon: Webhook },
        { name: "Daraja API", icon: Webhook },
      ],
      tools: [
        { name: "Cloudflare DNS", icon: Cloud },
        { name: "AWS", icon: Cloud },
        { name: "Git", icon: GitBranch },
      ],
    },
  },
  {
    title: "Zenin POS",
    summary: "Smart POS solution for retailers with real-time analytics.",
    slug: "zeninpos",
    description:
      "A modern POS and inventory management system offering multi-branch support, detailed sales reports, role management, and real-time analytics tailored for retail businesses.",
    link: "/projects/zeninpos",
    url: "https://www.zeninpos.store",
    image: ["/shots/zenin-shot-1.png"],
    tags: ["SAAS", "FullStack", "Retail"],
    year: "2025",
    techStack: {
      frontend: [
        { name: "Next.js", icon: Code2 },
        { name: "Shadcn", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Code2 },
      ],
      backend: [
        { name: "Node.js", icon: Server },
        { name: "MySQL", icon: Database },
        { name: "Prisma", icon: Database },
        { name: "Redis", icon: Zap },
        { name: "Daraja API", icon: Webhook },
      ],
      tools: [
        { name: "Hostinger VPS", icon: Cloud },
        { name: "Git", icon: GitBranch },
        { name: "Cloudflare - DNS & R2", icon: Cloud },
      ],
    },
  },
  {
    title: "Solecity E-Commerce Website",
    summary:
      "Fashion eCommerce platform with fast checkout and stock tracking.",
    slug: "solecity-ecommerce-website",
    description:
      "A modern fashion eCommerce platform featuring real-time inventory tracking, M-PESA payments, advanced search, optimized product browsing, and a clean, mobile-friendly shopping experience.",
    link: "/projects/solecity-ecommerce-website",
    url: "https://www.solecityke.cloud",
    image: [
      "/shots/solecity-shot-2.png",
      "/shots/solecity-shot.png",
      "/shots/solecity-shot-5.png",
      "/shots/solecity-shot-6.png",
    ],
    tags: ["Ecommerce", "FullStack", "Sales & Marketing"],
    year: "2025",
    techStack: {
      frontend: [
        { name: "Next.js", icon: Code2 },
        { name: "Shadcn", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Code2 },
      ],
      backend: [
        { name: "Node.js", icon: Server },
        { name: "Express", icon: Server },
        { name: "MySQL", icon: Database },
        { name: "Redis", icon: Zap },
        { name: "Prisma", icon: Database },
        { name: "Daraja API", icon: Webhook },
      ],
      tools: [
        { name: "Hostinger VPS", icon: Cloud },
        { name: "Git", icon: GitBranch },
        { name: "RabbitMQ", icon: Zap },
        { name: "Typesense Search", icon: Search },
        { name: "CloudFlare - DNS & R2", icon: Cloud },
      ],
      errorLogs: [
        {
          name: "Vitest",
          icon: FlaskConical,
        },
        {
          name: "Sentry",
          icon: Logs,
        },
      ],
    },
  },
  {
    title: "Carefront Health",
    summary:
      "Healthcare platform for home visits, delivery, and patient management.",
    slug: "carefront-health",
    description:
      "A digital healthcare platform providing doctor home visits, drug delivery, service bookings, and patient record management through a simplified and mobile-friendly interface.",
    link: "/projects/carefront-health",
    url: "https://carefront-livid.vercel.app",
    image: ["/shots/carefront-shot.png"],
    tags: ["Web App", "FullStack", "HealthCare"],
    year: "2025",
    techStack: {
      frontend: [
        { name: "Next.js", icon: Code2 },
        { name: "Shadcn", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Code2 },
      ],
      backend: [
        { name: "Node.js", icon: Server },
        { name: "Mongodb", icon: Database },
        { name: "Prisma", icon: Database },
      ],
      tools: [
        { name: "Vercel", icon: Cloud },
        { name: "Git", icon: GitBranch },
      ],
    },
  },
  {
    title: "Stur Solutions",
    summary:
      "Construction and real-estate website offering modern property services.",
    slug: "stur-solutions",
    description:
      "A professional construction and real-estate platform showcasing architectural design, structural planning, cost analysis, and comprehensive land or property services for modern developments.",
    link: "/projects/stur-solutions",
    url: "https://stursolutions.com",
    image: ["/shots/stur-solutions-shot.png"],
    tags: ["Web App", "Frontend", "Construction"],
    year: "2025",
    techStack: {
      frontend: [
        { name: "Next.js", icon: Code2 },
        { name: "Shadcn", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Code2 },
      ],
      backend: [
        { name: "Node.js", icon: Server },
        { name: "Express", icon: Server },
        { name: "MySQL", icon: Database },
        { name: "Prisma", icon: Database },
        { name: "Redis", icon: Zap },
        { name: "Daraja API", icon: Webhook },
      ],
      tools: [
        { name: "Cloudflare DNS", icon: Cloud },
        { name: "AWS", icon: Cloud },
        { name: "Git", icon: GitBranch },
      ],
    },
  },
  {
    title: "Betting Site",
    summary:
      "Job listing platform with advanced filtering and application tracking.",
    slug: "betting-site",
    description:
      "A streamlined job listing platform enabling employers to post opportunities and applicants to search, filter, and track applications with a smooth and responsive interface.",
    link: "/projects/job-board",
    url: "https://carefront-livid.vercel.app/",
    image: ["/shots/no-picture-available-icon.png"],
    tags: ["SAAS", "FullStack", "Marketing"],
    year: "2025",
    techStack: {
      frontend: [
        { name: "Next.js", icon: Code2 },
        { name: "Shadcn", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Code2 },
      ],
      backend: [
        { name: "Node.js", icon: Server },
        { name: "MySQL", icon: Database },
        { name: "Astra Db Vector Embeddings", icon: Database },
      ],
      tools: [
        { name: "AWS", icon: Cloud },
        { name: "Cloudflare DNS", icon: Cloud },
        { name: "Git", icon: GitBranch },
      ],
    },
  },
];
