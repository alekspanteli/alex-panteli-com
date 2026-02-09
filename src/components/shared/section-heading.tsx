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
      <h2 className="text-[40px] font-bold tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[18px] text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
}
