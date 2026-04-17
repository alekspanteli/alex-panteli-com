"use client";

import { motion } from "motion/react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  stack?: string[];
  index: number;
}

export function TimelineItem({
  title,
  subtitle,
  period,
  location,
  description,
  highlights,
  stack,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="grid gap-6 border-t border-(--phosphor)/30 py-10 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] dark:border-(--phosphor)/10"
    >
      {/* Left: period + location */}
      <div className="md:pt-1">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-(--phosphor)">
          <span className="mr-2 text-(--phosphor)/60" aria-hidden="true">[{String(index + 1).padStart(2, "0")}]</span>
          <span className="whitespace-nowrap">{period}</span>
        </p>
        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/85">
          {location}
        </p>
      </div>

      {/* Right: full content */}
      <div>
        <h3 className="font-display text-[22px] font-bold leading-[1.15] tracking-[-0.025em] text-heading">
          {title}
        </h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/85">
          {subtitle}
        </p>
        <p className="mt-4 text-[14px] leading-[1.72] tracking-[-0.005em] text-muted-foreground">
          {description}
        </p>
        {stack && stack.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <li
                key={tech}
                className="border border-(--phosphor)/25 px-2 py-0.5 font-mono text-[11px] tracking-wide text-(--phosphor)/85 dark:border-(--phosphor)/15"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
        {highlights.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[13px] leading-[1.65] text-muted-foreground"
              >
                <span
                  className="mt-[9px] h-px w-3 shrink-0 bg-(--phosphor)/40"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
