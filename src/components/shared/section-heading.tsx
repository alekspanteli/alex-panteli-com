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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mb-12"
    >
      {label && (
        <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-(--green)">
          {label}
        </p>
      )}
      <h2 className="text-[36px] font-bold leading-[1.1] tracking-[-0.035em] text-heading sm:text-[44px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-140 text-[16px] leading-[1.65] tracking-[-0.01em] text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
