"use client";

import { motion } from "motion/react";
import { cvData } from "@/data/cv-data";

const categories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "tools" as const, label: "Tools & Testing" },
  { key: "other" as const, label: "Other" },
];

export function SkillsGrid() {
  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-widest text-(--green)">
          Skills
        </p>
        <h3 className="text-[22px] font-semibold tracking-[-0.025em] text-heading">
          Technologies I work with
        </h3>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        {categories.map((category) => {
          const skills = cvData.skills.filter((s) => s.category === category.key);
          if (skills.length === 0) return null;
          return (
            <div key={category.key}>
              <h4 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground/70">
                {category.label}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.025, duration: 0.2, ease: "easeOut" }}
                    className="inline-flex items-center rounded-md border border-border/60 bg-card px-2.5 py-1 text-[12px] font-medium tracking-[-0.005em] text-muted-foreground transition-colors duration-150 hover:border-(--green)/50 hover:text-foreground"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
