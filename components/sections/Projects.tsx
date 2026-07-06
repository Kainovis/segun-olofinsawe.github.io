"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Boxes } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { PROJECTS } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  "Banking Platform": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-800/30",
  Payments: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-800/30",
  Security: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-200/50 dark:border-green-800/30",
  Treasury: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-800/30",
  Compliance: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-200/50 dark:border-red-800/30",
  "Agency Banking": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200/50 dark:border-cyan-800/30",
  "SaaS": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200/50 dark:border-violet-800/30",
  "Automation": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200/50 dark:border-orange-800/30",
};

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      className="bg-[#060e1f] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Featured Projects"
          title={
            <>
              Enterprise{" "}
              <span className="gradient-text">Solutions</span>
            </>
          }
          description="A selection of large-scale enterprise projects built for the banking and financial services sector."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col p-6 rounded-2xl bg-[#0d1f3c] border border-[#1a56ff]/15 shadow-sm hover:shadow-xl hover:shadow-[#1a56ff]/15 card-glow transition-all overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                    CATEGORY_COLORS[project.category] ||
                    "bg-slate-100 text-slate-600"
                  }`}
                >
                  {project.category}
                </span>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.githubUrl || "#"}
                    aria-label="GitHub"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demoUrl || "#"}
                    aria-label="Demo"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Architecture icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a56ff] to-[#0078D4] flex items-center justify-center mb-4 flex-shrink-0">
                <Boxes className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg text-white mb-2 leading-tight">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.longDescription}
              </p>

              {/* Architecture highlights */}
              {project.architectureHighlights && (
                <div className="mb-4">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                    Architecture
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.architectureHighlights.map((h) => (
                      <span
                        key={h}
                        className="px-2 py-0.5 rounded-md text-xs bg-[#1a56ff]/10 text-[#38bdf8] font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
