"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
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
      <SectionHeading title="Skills" subtitle="Technologies I work with" />
      <div className="grid gap-8 sm:grid-cols-2">
        {categories.map((category) => {
          const skills = cvData.skills.filter(
            (s) => s.category === category.key
          );
          if (skills.length === 0) return null;
          return (
            <div key={category.key}>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Badge
                      variant="secondary"
                      className="transition-colors hover:bg-primary hover:text-primary-foreground"
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
