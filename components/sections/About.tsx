"use client";

import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Database,
  GitBranch,
  Shield,
  Landmark,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/data";

const SPECIALIZATIONS = [
  { icon: Server, label: ".NET & C#", desc: "Enterprise-grade backend systems" },
  { icon: Cloud, label: "Azure Cloud", desc: "Cloud-native architecture & DevOps" },
  { icon: GitBranch, label: "Architecture", desc: "DDD, CQRS, Clean Architecture" },
  { icon: Database, label: "Data", desc: "SQL Server, PostgreSQL, Redis" },
  { icon: Shield, label: "Security", desc: "IAM, RBAC, Compliance" },
  { icon: Landmark, label: "Fintech", desc: "Banking & payment platforms" },
  { icon: Cloud, label: "SaaS", desc: "Scalable multi-tenant platforms" },
];

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      className="bg-[#060e1f] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title=""
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="font-semibold text-[#1a56ff]">Senior Software Engineer and Software Architect</span>{" "}
              with extensive experience designing and building secure, scalable, cloud-native enterprise applications for the banking, fintech, and SaaS industries. My expertise spans the entire software development lifecycle—from requirements analysis and solution architecture to implementation, deployment, and continuous optimization.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I specialize in{" "}
              <span className="font-medium text-[#0A2540] dark:text-white">C#, .NET, ASP.NET Core, and Microsoft Azure</span>
              , with a strong focus on designing resilient systems using{" "}
              <span className="font-medium text-[#0A2540] dark:text-white">Domain-Driven Design (DDD), CQRS, Clean Architecture, Microservices, and event-driven architectures</span>
              . Beyond enterprise banking solutions, I have built{" "}
              <span className="font-medium text-[#0A2540] dark:text-white">SaaS platforms</span>
              , including a collaborative form-building solution similar to Notion, and developed{" "}
              <span className="font-medium text-[#0A2540] dark:text-white">workflow and business process automation tools</span>{" "}
              that streamline operations and improve productivity.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m passionate about delivering high-quality software, driving architectural excellence, and leveraging modern DevOps and cloud-native practices to build systems that are maintainable, scalable, and ready for enterprise growth.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                ".NET",
                "C#",
                "ASP.NET Core",
                "Microservices",
                "Azure",
                "CQRS",
                "DDD",
                "Clean Architecture",
                "DevOps",
                "Banking",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[#1a56ff]/10 text-[#38bdf8] border border-[#1a56ff]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats + specializations */}
          <div className="space-y-8">
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="p-6 rounded-2xl bg-[#0d1f3c]/60 border border-[#1a56ff]/10 text-center"
                >
                  <div className="text-4xl font-black text-[#1a56ff] mb-1">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-sm text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Specializations */}
            <div className="grid grid-cols-2 gap-3">
              {SPECIALIZATIONS.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1f3c]/50 border border-[#1a56ff]/10 card-glow transition-all"
                >
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex-shrink-0">
                      <spec.icon className="w-4 h-4 text-[#1a56ff]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-white">
                      {spec.label}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {spec.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
