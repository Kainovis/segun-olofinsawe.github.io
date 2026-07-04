import type {
  NavItem,
  Project,
  Experience,
  TechCategory,
  Certification,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Architecture", href: "#architecture" },
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    title: "Agency Banking Platform",
    description: "Agent onboarding, settlement, and POS integration.",
    longDescription:
      "A full-featured agency banking solution managing agent lifecycle from onboarding through daily operations, including POS device management, transaction processing, settlement automation, and performance dashboards.",
    technologies: [".NET Core", "SQL Server", "Azure Service Bus", "Docker", "Kubernetes"],
    category: "Agency Banking",
    featured: true,
    architectureHighlights: ["Microservices", "CQRS", "POS Integration", "Auto-Settlement"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Wema Bank PLC",
    role: "Software Engineer",
    period: "2022 – Present",
    location: "Lagos, Nigeria",
    current: true,
    description: [
      "Architect and deliver enterprise banking solutions serving millions of customers across Nigeria",
      "Lead development of Merchant Onboarding Platform, PAPSS integration, and Agency Banking Platform",
      "Design and implement microservices using .NET 8, Azure, CQRS, and DDD patterns",
      "Drive cloud adoption strategy and Azure infrastructure design",
      "Mentor junior engineers and conduct code reviews for quality assurance",
    ],
    technologies: [".NET 8", "Azure", "SQL Server", "CQRS", "DDD", "Microservices", "Docker"],
  },
  {
    id: 2,
    company: "Uridium Technologies",
    role: "Senior Software Engineer",
    period: "2021 – 2022",
    location: "Lagos, Nigeria",
    description: [
      "Delivered high-performance fintech solutions for banking clients",
      "Implemented Clean Architecture and CQRS patterns across the product suite",
      "Designed RESTful APIs consumed by mobile and web clients",
      "Improved system performance through caching strategies with Redis",
    ],
    technologies: [".NET Core", "SQL Server", "Redis", "REST APIs", "Azure DevOps"],
  },
  {
    id: 3,
    company: "Revent Technologies",
    role: "Senior Software Engineer",
    period: "2020 – 2021",
    location: "Lagos, Nigeria",
    description: [
      "Built scalable backend services for enterprise clients",
      "Implemented message-driven architecture using Azure Service Bus",
      "Developed Treasury and payment processing modules",
      "Contributed to DevOps pipeline setup and CI/CD automation",
    ],
    technologies: [".NET Core", "Azure Service Bus", "SQL Server", "Entity Framework"],
  },
  {
    id: 4,
    company: "Epoch Loop Technologies",
    role: "Software Engineer",
    period: "2018 – 2020",
    location: "Lagos, Nigeria",
    description: [
      "Developed and maintained web applications using ASP.NET Core and SQL Server",
      "Built RESTful APIs for mobile app integration",
      "Implemented user authentication and role-based access control systems",
      "Participated in agile sprints and contributed to technical documentation",
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
  email: "sawesis1234@gmail.com",
  phone: "+2348136713116",
  linkedin: "https://www.linkedin.com/in/segun-olofinsawe",
  github: "https://github.com/segun-olofinsawe",
};
