"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered ? "text-center" : "", "mb-16", className)}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest uppercase text-[#0057D9] dark:text-blue-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] dark:text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
