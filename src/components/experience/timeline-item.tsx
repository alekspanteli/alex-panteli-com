"use client";

import { motion } from "motion/react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  index: number;
}

export function TimelineItem({
  title,
  subtitle,
  period,
  location,
  description,
  highlights,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="grid gap-6 border-t border-border/50 py-10 md:grid-cols-[180px_1fr]"
    >
      {/* Left: period + location — stacked meta */}
      <div className="md:pt-1">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-(--cobalt)">
          {period}
        </p>
        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/45">
          {location}
        </p>
      </div>

      {/* Right: full content */}
      <div>
        <h3 className="font-display text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-heading">
          {title}
        </h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/55">
          {subtitle}
        </p>
        <p className="mt-4 text-[14px] leading-[1.72] tracking-[-0.005em] text-muted-foreground">
          {description}
        </p>
        {highlights.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[13px] leading-[1.65] text-muted-foreground"
              >
                {/* Short horizontal dash — more editorial than a round dot */}
                <span
                  className="mt-[9px] h-px w-4 shrink-0 bg-(--cobalt)/50"
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
