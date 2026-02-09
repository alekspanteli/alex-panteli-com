"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
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
      <h3 className="mb-2 text-[24px] font-semibold tracking-tight">Skills</h3>
      <p className="mb-8 text-[14px] text-muted-foreground">Technologies I work with</p>
      <div className="grid gap-10 sm:grid-cols-2">
        {categories.map((category) => {
          const skills = cvData.skills.filter(
            (s) => s.category === category.key
          );
          if (skills.length === 0) return null;
          return (
            <div key={category.key}>
              <h4 className="mb-4 text-[12px] font-medium uppercase tracking-widest text-muted-foreground">
                {category.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.25 }}
                  >
                    <Badge
                      variant="outline"
                      className="border-border font-normal transition-colors duration-200 hover:bg-accent hover:text-foreground"
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
