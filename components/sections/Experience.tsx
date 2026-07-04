"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, CheckCircle2, Circle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EXPERIENCES } from "@/lib/data";

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCES)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-8 mb-0 ${
        !isLeft ? "md:[&>div:first-child]:order-3 md:[&>div:last-child]:order-1" : ""
      }`}
    >
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`p-6 rounded-2xl bg-[#0d1f3c] border border-[#1a56ff]/15 shadow-sm hover:shadow-md card-glow transition-all ${
          isLeft ? "md:text-right" : "md:text-left"
        } mb-4 md:mb-0`}
      >
        <div
          className={`flex items-center gap-2 mb-3 flex-wrap ${
            isLeft ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {experience.current && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Current
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <Calendar className="w-3 h-3" />
            {experience.period}
          </span>
          {experience.location && (
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <MapPin className="w-3 h-3" />
              {experience.location}
            </span>
          )}
        </div>

        <h3 className="font-bold text-lg text-white mb-1">
          {experience.company}
        </h3>
        <p className="text-[#1a56ff] font-medium text-sm mb-4">
          {experience.role}
        </p>

        <ul
          className={`space-y-2 mb-4 ${isLeft ? "md:text-right" : "md:text-left"}`}
        >
          {experience.description.map((item, i) => (
            <li
              key={i}
              className={`flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400 ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-[#1a56ff] flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div
          className={`flex flex-wrap gap-1.5 ${
            isLeft ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Center dot + line */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-6 z-10 ${
            experience.current
              ? "border-[#1a56ff] bg-[#1a56ff] shadow-lg shadow-blue-500/40"
              : "border-[#1a56ff] bg-[#060e1f]"
          }`}
        />
        <div className="flex-1 w-0.5 bg-gradient-to-b from-[#1a56ff]/50 to-transparent" />
      </div>

      {/* Empty cell for alternating layout */}
      <div className="hidden md:block" />
    </div>
  );
}

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      className="bg-[#0a1628] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              Career{" "}
              <span className="gradient-text">Journey</span>
            </>
          }
          description="A timeline of roles where I've delivered impactful enterprise software across the banking and technology sectors."
        />

        <div className="relative">
          {/* Center timeline line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a56ff]/30 via-[#1a56ff]/15 to-transparent -translate-x-1/2" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <TimelineItem key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
