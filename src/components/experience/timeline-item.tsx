"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="grid grid-cols-[20px_1fr] gap-x-6"
    >
      {/* Timeline spine */}
      <div className="relative flex flex-col items-center">
        <div className="z-10 mt-1.5 h-2 w-2 shrink-0 rounded-full bg-border ring-4 ring-background" />
        <div className="mt-2 flex-1 w-px bg-border/60" />
      </div>

      {/* Content */}
      <div className="pb-10">
        {/* Meta row */}
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-[12px] font-medium tabular-nums tracking-[-0.01em] text-muted-foreground">
            {period}
          </span>
          <span className="flex items-center gap-1 text-[12px] text-muted-foreground/50">
            <MapPin className="h-3 w-3" aria-hidden="true" />
            {location}
          </span>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-border/60 bg-card p-5 transition-colors duration-200 hover:border-border">
          <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-heading">
            {title}
          </h3>
          <p className="mt-0.5 text-[13px] tracking-[-0.01em] text-muted-foreground">
            {subtitle}
          </p>
          <p className="mt-3 text-[13px] leading-[1.65] tracking-[-0.005em] text-muted-foreground">
            {description}
          </p>
          {highlights.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[13px] leading-[1.6] text-muted-foreground"
                >
                  <span className="mt-1.75 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}
