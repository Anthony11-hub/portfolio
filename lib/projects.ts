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
  slug: string;
  description: string;
  link: string;
  url: string;
  image: string;
  problemStatement: string;
  solution: string;
  features: Feature[];
  impact: Impact;
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
    slug: "easyconnect",
    url: "https://app.easyconnect.online",
    description:
      "A complete Wi-Fi management and billing system with automated MikroTik user control, packages management, and M-PESA payment tracking.",
    link: "/projects/easyconnect",
    image: "/shots/Galaxy-Fold2-live.easyconnectke.online.png",

    problemStatement:
      "Internet providers required a simple, automated way to manage hotspot and PPPoE users, handle payments, and control user access across multiple MikroTik routers without manual configuration.",

    solution:
      "Developed a full hotspot billing and user management system with M-PESA STK push integration, multi-router support, automated user expiry, and real-time synchronization with MikroTik.",

    features: [
      {
        title: "User Management (Hotspot & PPPoE)",
        description:
          "Add, remove, and manage Wi-Fi and PPPoE users directly from the dashboard with automatic syncing to MikroTik routers.",
      },
      {
        title: "Multiple MikroTik Router Support",
        description:
          "Connect and manage multiple routers from a single system, each with its own hotspot and PPPoE configuration.",
      },
      {
        title: "Packages Management",
        description:
          "Create, update, and manage Hotspot and PPPoE packages with pricing, speed limits, and validity periods.",
      },
      {
        title: "M-PESA STK Push (Paybill)",
        description:
          "Collect payments via M-PESA Paybill with automatic user activation on successful payment and real-time payment tracking.",
      },
      {
        title: "Admin Controls & Access Management",
        description:
          "Admins can fully control routers, packages, users, and payments with secure role-based access.",
      },
      {
        title: "Automatic User Expiry",
        description:
          "The system automatically tracks active durations and removes expired users from MikroTik routers without admin intervention.",
      },
    ],
    impact: {
      title: "Business Impact & Results",
      description:
        "Rebuilding the EasyConnect Hotspot Billing System resolved critical payment failures and eliminated user mismanagement issues. After launching the redesigned platform with automated M-PESA payments, improved router control, and a stable multi-tenant architecture, the business experienced significant revenue growth.",
      highlights: [
        "Monthly Recurring Revenue (MRR) increased from Ksh 15,000 to Ksh 50,000 within months.",
        "Payment reliability improved to 99% success rate, drastically reducing failed STK pushes.",
        "User management time for admins dropped by over 60% due to automation.",
        "Customer churn reduced significantly thanks to consistent service uptime and accurate user expiries.",
        "The platform became robust enough to onboard more routers and handle hundreds of simultaneous user sessions.",
      ],
    },
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
    slug: "zeninpos",
    description:
      "Smart point-of-sale system for retail and inventory management, featuring sales reports, multi-branch support, and real-time analytics.",
    link: "/projects/zeninpos",
    url: "https://www.zeninpos.store",
    image: "/shots/Galaxy-Fold2-www.zeninpos.store.png",
    problemStatement:
      "Retail businesses struggled with managing inventory across multiple branches, tracking sales accurately, and generating comprehensive business reports.",
    solution:
      "Developed a modern POS system with cloud-based inventory sync, multi-branch management, automated stock alerts, and detailed sales analytics accessible from any device.",
    features: [
      {
        title: "Multi-Branch Management",
        description:
          "Centralized control of inventory and sales across multiple store locations with real-time synchronization.",
      },
      {
        title: "Inventory Tracking",
        description:
          "Automated stock level monitoring with low-stock alerts and purchase order suggestions.",
      },
      {
        title: "Sales Analytics Dashboard",
        description:
          "Visual reports on sales trends, top-selling products, and revenue metrics with export capabilities.",
      },
      {
        title: "Customer Management",
        description:
          "Track customer purchases and purchase history for personalized service and targeted sales strategies.",
      },
      {
        title: "Receipt Customization",
        description:
          "Design and print branded receipts with your logo, business details, and promotional messages.",
      },
      {
        title: "Multi-Device Support",
        description:
          "Works seamlessly across multiple devices including phones, tablets, and computers for flexible business operations.",
      },
    ],
    impact: {
      title: "Business Impact & Results",
      description:
        "Building ZeninPOS from the ground up transformed how businesses manage inventory, sales, and multi-branch operations. With real-time stock tracking, automated reporting, and centralized management, the platform significantly improved operational efficiency, reduced losses, and empowered business owners with actionable insights.",
      highlights: [
        "Real-time stock management eliminated mismatches and stockouts, improving product availability and sales.",
        "Sales processing became faster and more accurate, enhancing customer satisfaction and reducing queue times.",
        "Comprehensive reporting enabled data-driven decisions, increasing profitability and reducing guesswork.",
        "Employee accountability and role-based access controls minimized fraud and operational errors.",
        "Automated workflows lowered manual effort, saving significant staff hours on reconciliations and stock audits.",
        "Centralized multi-branch management simplified operations and supported scalable business growth.",
      ],
    },
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
    title: "E-Commerce Website",
    slug: "solecity-ecommerce-website",
    description:
      "A modern eCommerce fashion store with real-time stock management, M-PESA integration, and a clean shopping experience.",
    link: "/projects/solecity-ecommerce-website",
    url: "https://www.solecityke.cloud",
    image: "/shots/Galaxy-Fold2-www.solecityke.cloud.png",
    problemStatement:
      "Local sellers needed a way to get their products sold online without managing an eCommerce system themselves. They needed a platform that handles product listings, payments, and delivery while offering customers a seamless online shopping experience.",

    solution:
      "Built a fully functional eCommerce platform where the system owners manage products, handle payments via M-PESA, coordinate deliveries, and ensure smooth order fulfillment. Customers shop normally through a clean, modern interface, with real-time stock, secure checkout, and efficient delivery tracking.",
    features: [
      {
        title: "M-PESA Checkout",
        description:
          "Secure and fast payments via STK Push with instant order confirmation and automated processing.",
      },
      {
        title: "Centralized Product Management",
        description:
          "Manage products, pricing, images, and inventory through a streamlined and intuitive admin dashboard.",
      },
      {
        title: "Real-time Stock Synchronization",
        description:
          "Accurate, up-to-date inventory control that prevents overselling and ensures customers only see available products.",
      },
      {
        title: "Delivery & Order Fulfillment",
        description:
          "Efficient end-to-end order processing with clear delivery workflows and status updates until final confirmation.",
      },
      {
        title: "Referral Voucher System",
        description:
          "Users earn redeemable vouchers when they invite others, driving organic growth and engagement.",
      },
      {
        title: "Order Tracking",
        description:
          "Customers track their order status from checkout to delivery with real-time progress updates.",
      },
    ],
    impact: {
      title: "Business Impact & Results",
      description:
        "The eCommerce platform transformed how products are sold online, replacing the time-consuming manual process of posting on social media and marketplaces. Vendors no longer need to track each customer, follow up on payments, or worry about missed deliveries. Automated M-PESA payments, secure cash-on-delivery tracking, and referral vouchers for repeat customers have streamlined operations and improved revenue collection.",
      highlights: [
        "Payment follow-ups reduced by 90% due to automated M-PESA transactions and secured cash-on-delivery payments.",
        "Order fulfillment success rate increased to 95%, compared to frequent failed deliveries when tracking manually.",
        "Customer acquisition and repeat purchases improved by 40% thanks to referral vouchers and loyalty incentives.",
        "Operational workload for vendors decreased by 70%, eliminating hours previously spent chasing orders and coordinating deliveries.",
        "Revenue collection became faster and more reliable, with on-time payments increasing by 85%.",
        "Stock and order tracking efficiency improved by 80%, reducing overselling and missed orders.",
      ],
    },
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
    title: "Easypay M-Pesa Checkout",
    slug: "easypay-mpesa-checkout",
    description:
      "A modern M-PESA payment gateway designed for seamless online payments through API endpoints or shareable payment links — built for speed, reliability, and scale.",

    link: "/projects/easypay-mpesa-checkout",
    url: "https://app.easypay.online",
    image: "/shots/no-picture-available-icon.png",

    problemStatement:
      "EasyConnect required a simple, scalable way to process M-PESA payments without relying on the default paybill fees. Other businesses also lacked an easy-to-integrate M-PESA API with instant verification, webhook support, and multi-business capabilities.",

    solution:
      "Developed EasyPay — a standalone M-PESA checkout platform with payment links, API-based payments, BYOC support for direct paybill settlements, multi-business management, and a dedicated backend service handling transactions and webhooks at scale.",

    features: [
      {
        title: "API & Payment Link Checkout",
        description:
          "Businesses can receive payments via REST API endpoints or instant shareable payment links.",
      },
      {
        title: "Bring Your Own Credentials (BYOC)",
        description:
          "Users can connect their own Daraja API credentials and receive money directly into their paybill without extra commission.",
      },
      {
        title: "Multi-Business Accounts",
        description:
          "Users can create and manage multiple businesses independently, each with its own API keys, webhooks, and payment logs—limited based on their subscription plan.",
      },
      {
        title: "Real-time Webhook Notifications",
        description:
          "A dedicated backend service processes payments and triggers instant webhooks to notify external apps when transactions complete.",
      },
      {
        title: "Scalable Transaction Processing",
        description:
          "Built with a decoupled backend optimized for high-volume STK pushes, timeouts, retries, and stable performance under load.",
      },
      {
        title: "Comprehensive Transaction Dashboard",
        description:
          "Full payment history with filters, search, and export options for reconciliation and accounting.",
      },
    ],
    impact: {
      title: "Business Impact & Results",
      description:
        "EasyPay transformed how businesses receive M-PESA payments, replacing unreliable manual collection and high-commission default paybill methods. With API endpoints, payment links, BYOC (Bring Your Own Credentials), and multi-business support, users can receive payments instantly, automate transaction processing, and scale operations without extra overhead.",
      highlights: [
        "Payment collection efficiency improved by 90%, eliminating delays and manual follow-ups.",
        "Businesses using BYOC avoided default paybill commissions, saving up to 15% per transaction.",
        "Multi-business management reduced administrative complexity by 75%, enabling seamless handling of multiple revenue streams.",
        "Real-time webhook notifications increased transaction processing speed by 80%, supporting instant confirmations in external applications.",
        "Overall uptime and reliability of payment processing reached 99%, reducing failed or delayed transactions significantly.",
        "Adoption of API payment links led to a 50% increase in online payments and faster cash flow for businesses.",
      ],
    },
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
    slug: "betting-site",
    description:
      "A scalable online betting platform featuring live match updates, secure authentication, and seamless wallet management.",
    link: "/projects/betting-site",
    url: "https://app.bettingsite.online",
    image: "/shots/no-picture-available-icon.png",
    problemStatement:
      "Creating a reliable betting platform that handles high traffic, processes bets instantly, provides live odds, and ensures secure transactions was challenging.",
    solution:
      "Developed a high-performance betting platform with real-time odds updates, instant bet placement, secure wallet management, and live match tracking.",
    features: [
      {
        title: "Live Match Updates",
        description:
          "Real-time score updates and live odds changes for in-play betting with instant notifications.",
      },
      {
        title: "Secure Wallet System",
        description:
          "Protected user wallets with M-PESA deposits, withdrawals, and complete transaction history.",
      },
      {
        title: "Instant Bet Processing",
        description:
          "Lightning-fast bet placement and settlement with automatic win payouts and notifications.",
      },
      {
        title: "User Authentication",
        description:
          "Multi-factor authentication, KYC verification, and responsible gambling controls for security.",
      },
      {
        title: "Betting History & Statistics",
        description:
          "Comprehensive betting history with win/loss statistics and performance analytics for users.",
      },
      {
        title: "Bonus & Promotions System",
        description:
          "Automated bonus calculations, referral rewards, and promotional campaigns to boost user engagement.",
      },
    ],
    impact: {
      title: "Business Impact & Results",
      description:
        "The Betting Site provides a reliable and scalable platform for online betting, offering real-time match updates, secure wallet management, and instant bet processing. The platform ensures a smooth user experience while handling high traffic and maintaining accurate transactions.",
      highlights: [
        "Real-time match updates and live odds provide users with an engaging and interactive betting experience.",
        "Secure wallet system enables deposits, withdrawals, and complete transaction tracking for transparency.",
        "Instant bet processing ensures users can place bets quickly with immediate confirmation and payouts.",
        "Automated bonus and promotion systems enhance user engagement and retention.",
        "Comprehensive betting history and statistics allow users to track performance and make informed decisions.",
        "High-performance infrastructure supports uninterrupted betting during peak traffic periods.",
      ],
    },
    techStack: {
      frontend: [
        { name: "React", icon: Code2 },
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
        { name: "API-Sports", icon: Webhook },
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
    title: "Carefront Health",
    slug: "carefront-health",
    description:
      "Healthcare web platform offering home visits, drug delivery, and patient record management through a user-friendly interface.",
    link: "/projects/carefront-health",
    url: "https://carefront-livid.vercel.app",
    image: "/shots/Galaxy-Fold2-carefront-livid.vercel.app.png",
    problemStatement:
      "Patients needed convenient access to healthcare services at home while healthcare providers required efficient appointment scheduling and patient record management.",
    solution:
      "Created a comprehensive healthcare platform connecting patients with medical professionals for home visits, prescription delivery, and digital health records.",
    features: [
      {
        title: "Home Visit Booking",
        description:
          "Schedule doctor or nurse home visits with preferred time slots and specialist selection.",
      },
      {
        title: "Drug Delivery Service",
        description:
          "Order prescription medications online with doorstep delivery and payment tracking.",
      },
      {
        title: "Digital Health Records",
        description:
          "Secure patient medical history, prescriptions, and test results accessible anytime.",
      },
      {
        title: "Telemedicine Consultation",
        description:
          "Video consultations with healthcare professionals for remote medical advice and follow-ups.",
      },
      {
        title: "Appointment Reminders",
        description:
          "Automated SMS and email reminders for scheduled appointments reducing no-shows and improving care.",
      },
      {
        title: "Blog Management",
        description:
          "Built-in dashboard tools for publishing blogs and health articles to boost SEO and patient engagement.",
      },
    ],
    impact: {
      title: "Business Impact & Results",
      description:
        "CareFront Health transformed access to healthcare by connecting patients with medical professionals for home visits, prescription delivery, and telemedicine consultations. Automating appointments, reminders, and digital health records improved patient engagement, reduced missed appointments, and enabled efficient care coordination.",
      highlights: [
        "Appointment scheduling efficiency improved by 70%, reducing manual coordination and missed slots.",
        "Medication delivery success rate increased to 95%, ensuring timely delivery and improved patient adherence.",
        "Telemedicine consultations adoption grew by 60%, providing remote access to healthcare for patients unable to visit clinics.",
        "Patient record management efficiency increased by 80%, enabling faster retrieval and secure access to medical history.",
        "Automated reminders reduced no-shows by 50%, improving provider utilization and patient satisfaction.",
        "Marketing & blog features contributed to a 35% increase in patient engagement and return visits by promoting health education and services.",
      ],
    },

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
    title: "Job Board",
    slug: "job-board",
    description:
      "A clean, efficient job listing platform connecting employers and job seekers with advanced search and application tracking.",
    link: "/projects/job-board",
    url: "https://carefront-livid.vercel.app/",
    image: "/shots/no-picture-available-icon.png",
    problemStatement:
      "Job seekers and employers needed a streamlined platform for posting jobs, searching opportunities, and managing applications efficiently.",
    solution:
      "Built an intuitive job board with advanced filtering, one-click applications, employer dashboards, and automated application tracking for both parties.",
    features: [
      {
        title: "Advanced Job Search",
        description:
          "Filter jobs by location, salary range, experience level, industry, and employment type.",
      },
      {
        title: "One-Click Applications",
        description:
          "Apply to multiple jobs quickly with saved profiles and uploaded CV/resume.",
      },
      {
        title: "Employer Dashboard",
        description:
          "Manage job postings, review applications, and communicate with candidates in one place.",
      },
      {
        title: "Application Tracking",
        description:
          "Track application status, interview schedules, and receive notifications on updates.",
      },
      {
        title: "Smart AI Job Matching",
        description:
          "AI-powered matching system that connects users to the most relevant job opportunities based on their skills, profile data, and experience.",
      },
      {
        title: "Company Profiles",
        description:
          "Detailed company pages with culture, benefits, and employee reviews for informed applications.",
      },
    ],
    impact: {
      title: "Business Impact & Results",
      description:
        "The Job Board provides a streamlined platform connecting job seekers and employers, replacing inefficient manual processes such as posting on multiple sites or tracking applications via email. With advanced search, AI-powered job matching, and application tracking, the platform simplifies the recruitment process and improves user engagement.",
      highlights: [
        "Job seekers can quickly find relevant opportunities with advanced search and smart AI matching, saving hours of manual searching.",
        "Employers manage postings and applications efficiently through a centralized dashboard, reducing administrative overhead.",
        "Application tracking ensures transparency and smooth communication between candidates and employers.",
        "Users can apply to multiple jobs in one click, improving application completion rates and overall engagement.",
        "Detailed company profiles provide job seekers with better insights into company culture and benefits, aiding informed decisions.",
        "The platform’s intuitive design and automated processes improve overall satisfaction for both employers and job seekers.",
      ],
    },

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
