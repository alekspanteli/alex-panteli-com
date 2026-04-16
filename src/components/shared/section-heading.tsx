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
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-(--phosphor)">
          {label}
        </p>
      )}
      <h2 className="font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] text-heading sm:text-[42px]">
        <span className="text-(--phosphor) mr-3" aria-hidden="true">{"// "}</span>{title}
      </h2>
      <span
        className="mt-4 block font-mono text-[13px] leading-none text-(--phosphor)/70"
        aria-hidden="true"
      >
        └──
      </span>
      {subtitle && (
        <p className="mt-5 max-w-xl text-[16px] leading-[1.65] tracking-[-0.01em] text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
