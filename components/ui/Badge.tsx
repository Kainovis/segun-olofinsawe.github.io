"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default:
      "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
    primary: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    secondary:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    outline:
      "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
