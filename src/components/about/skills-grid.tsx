"use client";

import { motion } from "motion/react";
import { cvData } from "@/data/cv-data";

const categories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "tools" as const, label: "Tooling" },
  { key: "other" as const, label: "Practices" },
];

export function SkillsGrid() {
  return (
    <div>
      <div className="mb-10 border-t border-border/50 pt-8">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-(--cobalt)">
          Stack
        </p>
        <h3 className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-heading">
          Technologies
        </h3>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        {categories.map((category, catIndex) => {
          const skills = cvData.skills.filter((s) => s.category === category.key);
          if (skills.length === 0) return null;
          return (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.07, duration: 0.45, ease: "easeOut" }}
              className="border-l-2 border-(--cobalt)/25 pl-5"
            >
              <h4 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
                {category.label}
              </h4>
              <p className="text-[14px] leading-[1.85] text-foreground/75">
                {skills.map((s) => s.name).join(" · ")}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
