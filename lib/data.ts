import type {
  NavItem,
  Project,
  Experience,
  TechCategory,
  Certification,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: "Languages",
    icon: "Code2",
    items: [
      { name: "C#", proficiency: 95, color: "#9B59B6" },
      { name: "SQL", proficiency: 90, color: "#3498DB" },
      { name: "TypeScript", proficiency: 78, color: "#3178C6" },
      { name: "JavaScript", proficiency: 75, color: "#F7DF1E" },
    ],
  },
  {
    category: "Frameworks",
    icon: "Layers",
    items: [
      { name: ".NET 8", proficiency: 95, color: "#512BD4" },
      { name: "ASP.NET Core", proficiency: 93, color: "#512BD4" },
      { name: "Entity Framework", proficiency: 90, color: "#512BD4" },
      { name: "MediatR", proficiency: 88, color: "#0057D9" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    items: [
      { name: "Azure", proficiency: 88, color: "#0078D4" },
      { name: "Docker", proficiency: 85, color: "#2496ED" },
      { name: "Kubernetes", proficiency: 78, color: "#326CE5" },
      { name: "Azure DevOps", proficiency: 85, color: "#0078D4" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    items: [
      { name: "SQL Server", proficiency: 92, color: "#CC2927" },
      { name: "PostgreSQL", proficiency: 85, color: "#336791" },
      { name: "Redis", proficiency: 80, color: "#DC382D" },
      { name: "MongoDB", proficiency: 72, color: "#47A248" },
    ],
  },
  {
    category: "Architecture",
    icon: "GitBranch",
    items: [
      { name: "Microservices", proficiency: 90, color: "#0057D9" },
      { name: "DDD", proficiency: 88, color: "#0A2540" },
      { name: "CQRS", proficiency: 90, color: "#0078D4" },
      { name: "Clean Architecture", proficiency: 92, color: "#0057D9" },
    ],
  },
  {
    category: "Practices",
    icon: "Workflow",
    items: [
      { name: "REST APIs", proficiency: 95, color: "#27AE60" },
      { name: "SOLID", proficiency: 93, color: "#E74C3C" },
      { name: "Message Queues", proficiency: 83, color: "#F39C12" },
      { name: "CI/CD", proficiency: 85, color: "#8E44AD" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Agency Banking Platform",
    description: "Agent onboarding, settlement, and POS integration.",
    longDescription:
      "A full-featured agency banking solution managing agent lifecycle from onboarding through daily operations, including POS device management, transaction processing, settlement automation, and performance dashboards.",
    technologies: [".NET Core", "SQL Server", "Azure Service Bus", "Docker", "Kubernetes"],
    category: "Agency Banking",
    featured: true,
    architectureHighlights: ["Microservices", "CQRS", "POS Integration", "Auto-Settlement"],
  },
  {
    id: 2,
    title: "Merchant Onboarding Platform",
    description:
      "Enterprise banking onboarding system supporting merchants nationwide.",
    longDescription:
      "A comprehensive digital onboarding solution for merchants, featuring automated KYC/KYB verification, document management, multi-tier approval workflows, and real-time status tracking across Nigerian banking channels.",
    technologies: [".NET 8", "Azure", "SQL Server", "CQRS", "DDD", "MediatR"],
    category: "Banking Platform",
    featured: true,
    architectureHighlights: ["CQRS", "DDD", "Clean Architecture", "Azure Service Bus"],
  },
  {
    id: 3,
    title: "PAPSS Integration",
    description:
      "Pan-African Payment and Settlement System — cross-border payment platform.",
    longDescription:
      "Integration with the Pan-African Payment and Settlement System enabling seamless cross-border transactions across African markets, with real-time settlement, currency conversion, and compliance reporting.",
    technologies: [".NET Core", "REST APIs", "SQL Server", "Azure", "Microservices"],
    category: "Payments",
    featured: true,
    architectureHighlights: ["Microservices", "Event-Driven", "API Gateway", "Idempotency"],
  },
  {
    id: 4,
    title: "User Access Management",
    description: "Role-based access control platform for enterprise banking.",
    longDescription:
      "Centralized identity and access management system implementing fine-grained RBAC, attribute-based access control, audit trails, and compliance reporting across multiple banking applications.",
    technologies: [".NET", "SQL Server", "Azure AD", "JWT", "CQRS"],
    category: "Security",
    featured: true,
    architectureHighlights: ["RBAC", "JWT", "Audit Logging", "Multi-tenant"],
  },
  {
    id: 5,
    title: "Treasury Portal",
    description:
      "Rate management, concessions, and approval workflow system.",
    longDescription:
      "A sophisticated treasury management portal enabling real-time rate management, automated concession processing, multi-level approval workflows, and comprehensive treasury reporting for banking operations.",
    technologies: [".NET Core", "SQL Server", "SignalR", "Azure", "Entity Framework"],
    category: "Treasury",
    featured: true,
    architectureHighlights: ["Real-time", "Workflow Engine", "Event Sourcing"],
  },
  {
    id: 6,
    title: "Fraud Reporting Portal",
    description: "Fraud investigation, audit, and reporting platform.",
    longDescription:
      "An intelligent fraud management system for real-time fraud detection, case management, investigation workflows, regulatory reporting, and analytics dashboards for compliance and risk teams.",
    technologies: [".NET", "SQL Server", "Azure", "Redis", "Background Services"],
    category: "Compliance",
    featured: true,
    architectureHighlights: ["Event-Driven", "Audit Trail", "Real-time Alerts"],
  },
  {
    id: 7,
    title: "Enterprise Form Builder Platform",
    description: "Collaborative SaaS platform for dynamic form design and workflow management.",
    longDescription:
      "A collaborative SaaS platform that enables organizations to design, customize, and manage dynamic forms with configurable workflows, real-time collaboration, role-based access control, and seamless third-party integrations for efficient data collection and business process management.",
    technologies: [".NET Core", "SQL Server", "REST APIs", "SignalR"],
    category: "SaaS",
    featured: true,
    architectureHighlights: ["SaaS", "Multi-Tenant", "Dynamic Form Engine", "RBAC", "Real-time Collaboration"],
  },
  {
    id: 8,
    title: "Workflow & Business Process Automation Platform",
    description: "Enterprise automation platform for configurable low-code workflow orchestration.",
    longDescription:
      "An enterprise automation platform that streamlines business operations by enabling organizations to automate workflows, approvals, notifications, task orchestration, and business processes through configurable, low-code automation pipelines and system integrations.",
    technologies: [".NET Core", "SQL Server", "Azure Service Bus", "REST APIs"],
    category: "Automation",
    featured: true,
    architectureHighlights: ["Workflow Engine", "BPA", "Microservices", "Event-Driven Architecture"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Wema Bank PLC",
    role: "Senior Software Engineer",
    period: "2022 – Present",
    location: "Lagos, Nigeria",
    current: true,
    description: [
      "Designed and developed secure APIs for Agency Banking and Merchant Banking platforms, supporting agent onboarding, merchant onboarding, POS lifecycle management, settlements, and transaction processing.",
      "Built and maintained enterprise banking solutions including transfers, withdrawals, bill payments, airtime, data services, account opening, and card operations.",
      "Developed backend services using C#, .NET, ASP.NET Core, SQL Server, Entity Framework, Clean Architecture, DDD, CQRS, and Microservices.",
      "Integrated banking applications with Finacle, third-party payment providers, and POS platforms through secure RESTful APIs.",
      "Optimized high-volume transactional systems, improving performance, reliability, and scalability across banking services.",
      "Collaborated with cross-functional teams using Azure DevOps for Agile planning, source control, code reviews, CI/CD, and release management.",
      "Troubleshot and resolved production issues while ensuring high availability and operational excellence of mission-critical banking applications.",
    ],
    technologies: [".NET 8", "Azure", "SQL Server", "CQRS", "DDD", "Microservices", "Azure DevOps"],
  },
  {
    id: 2,
    company: "Uridium Technologies",
    role: "Senior Software Engineer",
    period: "2025 – 2026",
    location: "Lagos, Nigeria",
    description: [
      "Designed and developed enterprise banking solutions using .NET, Azure, SQL Server, Microservices, and Azure DevOps.",
      "Built secure APIs using Clean Architecture, DDD, and CQRS.",
      "Delivered solutions for cross-border payments (PAPSS), treasury, access management, fraud reporting, and branch transfer systems.",
      "Collaborated with cross-functional teams using Azure DevOps to deliver scalable, cloud-native enterprise applications.",
    ],
    technologies: [".NET", "ASP.NET Core", "SQL Server", "Entity Framework", "Clean Architecture", "DDD", "CQRS", "Microservices", "Azure DevOps", "Finacle"],
  },
  {
    id: 3,
    company: "Revent Technologies",
    role: "Senior Software Engineer",
    period: "2024 – 2025",
    location: "Lagos, Nigeria",
    description: [
      "Participated in solution architecture and product design, creating UML, use case, class, and database models.",
      "Developed scalable SaaS applications, including dynamic form-building and workflow automation platforms.",
      "Built reusable backend services and integrated third-party APIs to extend platform capabilities.",
      "Implemented real-time collaboration features and optimized application performance and responsiveness.",
      "Collaborated with cross-functional teams to deliver high-quality, customer-centric software solutions.",
      "Performed testing, debugging, and code optimization to ensure application stability, scalability, and maintainability.",
    ],
    technologies: [".NET Core", "SQL Server", "REST APIs", "Azure", "Entity Framework"],
  },
  {
    id: 4,
    company: "Epoch Loop Technologies",
    role: "Software Developer",
    period: "2019 – 2021",
    location: "Ogun State, Nigeria",
    description: [
      "Played a key role in developing an incident monitoring application tracking events globally",
      "Contributed to the development and implementation of an e-commerce platform",
      "Implemented real-time collaboration features and optimized application performance and responsiveness",
      "Performed testing, debugging, and code optimization to ensure application stability and maintainability",
      "Collaborated with cross-functional teams to deliver high-quality, customer-centric software solutions",
    ],
    technologies: ["ASP.NET Core", "SQL Server", "JavaScript", "REST APIs"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Azure Developer Associate",
    issuer: "Microsoft",
    code: "AZ-204",
    status: "preparing",
    description:
      "Designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.",
    color: "#0078D4",
  },
  {
    id: 2,
    title: "Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    code: "AZ-400",
    status: "preparing",
    description:
      "Combining people, process, and technologies to continuously deliver valuable products and services.",
    color: "#0057D9",
  },
];

export const STATS = [
  { label: "Years Experience", value: 6, suffix: "+" },
  { label: "Projects Delivered", value: 20, suffix: "+" },
  { label: "Enterprise Apps", value: 10, suffix: "+" },
  { label: "Banking Systems", value: 5, suffix: "+" },
];

export const SOCIAL_LINKS = {
  email: "segun.olofinsawe@outlook.com",
  phone: "+2348136713116",
  linkedin: "https://www.linkedin.com/in/segun-olofinsawe",
  github: "https://github.com/segun-olofinsawe",
};
