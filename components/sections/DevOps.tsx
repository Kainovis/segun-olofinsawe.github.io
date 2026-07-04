"use client";

import { motion } from "framer-motion";
import { GitBranch, Container, Cloud, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

const DEVOPS_TOOLS = [
  { name: "GitHub", icon: GitBranch, color: "#24292e", desc: "Source Control & Collaboration" },
  { name: "Azure DevOps", icon: Cloud, color: "#0078D4", desc: "Pipelines & Work Tracking" },
  { name: "Docker", icon: Container, color: "#2496ED", desc: "Containerization" },
  { name: "Kubernetes", icon: RefreshCw, color: "#326CE5", desc: "Container Orchestration" },
  { name: "Azure", icon: Cloud, color: "#0057D9", desc: "Cloud Infrastructure" },
  { name: "Terraform", icon: GitBranch, color: "#7B42BC", desc: "Infrastructure as Code" },
];

const PIPELINE_STAGES = [
  { label: "Code", icon: GitBranch, desc: "Developer pushes to GitHub" },
  { label: "Build", icon: Container, desc: "Compile & package" },
  { label: "Test", icon: CheckCircle2, desc: "Unit & integration tests" },
  { label: "Containerize", icon: Container, desc: "Docker image build" },
  { label: "Deploy", icon: Cloud, desc: "AKS rolling deploy" },
  { label: "Monitor", icon: RefreshCw, desc: "Azure Monitor & alerts" },
];

export function DevOpsSection() {
  return (
    <SectionWrapper
      id="devops"
      className="bg-slate-50 dark:bg-[#080f1e] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="DevOps"
          title={
            <>
              CI/CD &{" "}
              <span className="gradient-text">Cloud Infrastructure</span>
            </>
          }
          description="Automating delivery pipelines and infrastructure provisioning to ensure fast, reliable, zero-downtime deployments."
        />

        {/* Pipeline animation */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Deployment Pipeline
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {PIPELINE_STAGES.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-[#0d1829] border border-slate-200 dark:border-slate-800 min-w-[90px] shadow-sm hover:shadow-md transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 mb-2">
                    <stage.icon className="w-5 h-5 text-[#0057D9] dark:text-blue-400" />
                  </div>
                  <p className="font-semibold text-xs text-[#0A2540] dark:text-white">
                    {stage.label}
                  </p>
                  <p className="text-[10px] text-slate-400 text-center mt-0.5">
                    {stage.desc}
                  </p>
                </motion.div>
                {i < PIPELINE_STAGES.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.12 }}
                    className="origin-left"
                  >
                    <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {DEVOPS_TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex flex-col items-center p-5 rounded-2xl bg-white dark:bg-[#0d1829] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md card-glow transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: `${tool.color}18` }}
              >
                <tool.icon
                  className="w-6 h-6"
                  style={{ color: tool.color }}
                />
              </div>
              <p className="font-bold text-sm text-[#0A2540] dark:text-white text-center">
                {tool.name}
              </p>
              <p className="text-[11px] text-slate-400 text-center mt-1">
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
