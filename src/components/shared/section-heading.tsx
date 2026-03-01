"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-[-0.03em]">
        {title}
        <span className="text-primary">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-[16px] text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
}
