"use client";

import { motion } from "framer-motion";
import { Award, Clock, BookOpen } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CERTIFICATIONS } from "@/lib/data";

export function CertificationsSection() {
  return (
    <SectionWrapper
      id="certifications"
      className="bg-[#060e1f] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Certifications"
          title={
            <>
              Microsoft{" "}
              <span className="gradient-text">Azure Certifications</span>
            </>
          }
          description="Pursuing Microsoft Azure certifications to formally validate cloud engineering expertise."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl bg-[#0d1f3c] border border-[#1a56ff]/15 shadow-sm hover:shadow-xl hover:shadow-[#1a56ff]/10 overflow-hidden card-glow transition-all"
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle at top left, ${cert.color}10, transparent 60%)`,
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${cert.color}, ${cert.color}aa)`,
                    }}
                  >
                    <Award className="w-7 h-7" />
                  </div>
                  <span
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.status === "earned"
                        ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                        : "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400"
                    }`}
                  >
                    {cert.status === "earned" ? (
                      <Award className="w-3 h-3" />
                    ) : (
                      <Clock className="w-3 h-3" />
                    )}
                    {cert.status === "earned" ? "Certified" : "In Progress"}
                  </span>
                </div>

                {/* Exam code badge */}
                <div className="mb-3">
                  <span
                    className="px-2.5 py-1 rounded-lg text-sm font-mono font-bold text-white"
                    style={{ backgroundColor: cert.color }}
                  >
                    {cert.code}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
                  {cert.issuer}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {cert.status === "preparing" && (
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs font-medium">
                      Currently preparing
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Microsoft logo acknowledgment */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-slate-400 mt-10"
        >
          Microsoft Azure Certification credentials issued by Microsoft
          Corporation
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
