"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Cloud,
  Database,
  GitBranch,
  Workflow,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TECH_CATEGORIES } from "@/lib/data";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Languages: Code2,
  Frameworks: Layers,
  "Cloud & DevOps": Cloud,
  Databases: Database,
  Architecture: GitBranch,
  Practices: Workflow,
};

function TechCard({
  name,
  proficiency,
  color,
  index,
}: {
  name: string;
  proficiency: number;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 card-glow transition-all cursor-default"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-sm text-[#0A2540] dark:text-white">
          {name}
        </span>
        <span className="text-xs font-mono text-slate-400">{proficiency}%</span>
      </div>
      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}

export function TechStackSection() {
  return (
    <SectionWrapper
      id="tech-stack"
      className="bg-slate-50 dark:bg-[#080f1e] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Tech Stack"
          title={
            <>
              Tools I{" "}
              <span className="gradient-text">Master</span>
            </>
          }
          description="A comprehensive overview of the technologies, frameworks, and architectural patterns I use to build world-class software."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((cat, catIdx) => {
            const Icon = CATEGORY_ICONS[cat.category] || Code2;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#0d1829] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                    <Icon className="w-5 h-5 text-[#0057D9] dark:text-blue-400" />
                  </div>
                  <h3 className="font-bold text-[#0A2540] dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Tech items */}
                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <TechCard
                      key={item.name}
                      name={item.name}
                      proficiency={item.proficiency}
                      color={item.color}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
