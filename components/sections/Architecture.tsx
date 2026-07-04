"use client";

import { motion } from "framer-motion";
import {
  Layers,
  ArrowRight,
  RefreshCw,
  Boxes,
  GitMerge,
  Globe,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ArchCard {
  icon: React.ElementType;
  title: string;
  description: string;
  layers?: string[];
  color: string;
}

const ARCH_CARDS: ArchCard[] = [
  {
    icon: Layers,
    title: "Clean Architecture",
    description:
      "Separation of concerns with Domain, Application, Infrastructure, and Presentation layers — ensuring independent testability and maintainability.",
    layers: ["Presentation", "Application", "Domain", "Infrastructure"],
    color: "#0057D9",
  },
  {
    icon: ArrowRight,
    title: "CQRS Pattern",
    description:
      "Command and Query Responsibility Segregation using MediatR — read and write models are decoupled for performance and scalability.",
    layers: ["Commands", "Queries", "Event Handlers", "MediatR Pipeline"],
    color: "#0078D4",
  },
  {
    icon: Globe,
    title: "Domain-Driven Design",
    description:
      "Bounded contexts, aggregates, domain events, and ubiquitous language — aligning software design with complex business domains.",
    layers: ["Aggregates", "Value Objects", "Domain Events", "Repositories"],
    color: "#5B21B6",
  },
  {
    icon: Boxes,
    title: "Microservices",
    description:
      "Independently deployable services communicating via REST APIs and message queues, with service discovery and API gateway patterns.",
    layers: ["API Gateway", "Service Mesh", "Event Bus", "Service Registry"],
    color: "#0891B2",
  },
  {
    icon: RefreshCw,
    title: "Azure Cloud Native",
    description:
      "Leveraging Azure PaaS services: App Service, Azure Functions, Service Bus, Key Vault, AKS, and Azure Monitor for observability.",
    layers: ["App Service", "Service Bus", "Key Vault", "AKS", "Monitor"],
    color: "#0078D4",
  },
  {
    icon: GitMerge,
    title: "CI/CD Pipeline",
    description:
      "Automated build, test, and deployment pipelines using Azure DevOps and GitHub Actions — enabling zero-downtime continuous delivery.",
    layers: ["Build", "Unit Tests", "Integration Tests", "Deploy", "Monitor"],
    color: "#059669",
  },
];

export function ArchitectureSection() {
  return (
    <SectionWrapper
      id="architecture"
      className="bg-white dark:bg-[#060d1a] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Architecture"
          title={
            <>
              System Design{" "}
              <span className="gradient-text">Principles</span>
            </>
          }
          description="I design systems that are built to last — applying proven architectural patterns to deliver enterprise-grade, maintainable solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARCH_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-[#0d1829] border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:shadow-blue-500/10 card-glow transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${card.color}20` }}
              >
                <card.icon
                  className="w-6 h-6"
                  style={{ color: card.color }}
                />
              </div>

              <h3 className="font-bold text-[#0A2540] dark:text-white text-lg mb-3">
                {card.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                {card.description}
              </p>

              {card.layers && (
                <div className="space-y-1.5">
                  {card.layers.map((layer, li) => (
                    <motion.div
                      key={layer}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + li * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: card.color }}
                      />
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {layer}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Architecture diagram banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#0d1829] border border-slate-800 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,87,217,0.15),transparent)]" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">
              Typical Enterprise Architecture
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              How these patterns come together in a real banking system
            </p>

            {/* ASCII-style architecture flow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 items-center text-center">
              {[
                { label: "Client", sub: "Web/Mobile" },
                { label: "→", sub: "" },
                { label: "API Gateway", sub: "Auth & Rate Limit" },
                { label: "→", sub: "" },
                { label: "Services", sub: "CQRS + DDD" },
                { label: "→", sub: "" },
                { label: "Azure Bus", sub: "Events" },
                { label: "→", sub: "" },
              ].map((item, i) =>
                item.label === "→" ? (
                  <ArrowRight
                    key={i}
                    className="w-5 h-5 text-slate-600 mx-auto hidden lg:block"
                  />
                ) : (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <p className="text-xs font-bold text-white">{item.label}</p>
                    {item.sub && (
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        {item.sub}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { label: "SQL Server", sub: "Write Model" },
                { label: "Redis Cache", sub: "Read Model" },
                { label: "Azure Monitor", sub: "Observability" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <p className="text-xs font-bold text-white">{item.label}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
