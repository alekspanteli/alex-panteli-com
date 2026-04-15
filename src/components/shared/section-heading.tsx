"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      {label && (
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-(--cobalt)">
          {label}
        </p>
      )}
      <h2 className="font-display text-[42px] font-bold leading-[1.05] tracking-[-0.025em] text-heading sm:text-[54px]">
        {title}
      </h2>
      {/* Short cobalt rule below the title */}
      <div className="mt-5 h-px w-16 bg-(--cobalt)" aria-hidden="true" />
      {subtitle && (
        <p className="mt-5 max-w-xl text-[16px] leading-[1.65] tracking-[-0.01em] text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
