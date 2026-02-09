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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative grid grid-cols-[24px_1fr] gap-6 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="relative flex justify-center pt-1.5">
        <div className="z-10 h-2.25 w-2.25 rounded-full border-2 border-foreground bg-background" />
      </div>

      {/* Content */}
      <div className="rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-border/80">
        <div className="flex flex-wrap items-center gap-3 text-[14px] text-muted-foreground">
          <span className="font-medium">{period}</span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {location}
          </span>
        </div>
        <h4 className="mt-3 text-[18px] font-semibold tracking-tight">{title}</h4>
        <p className="mt-1 text-[14px] text-muted-foreground">{subtitle}</p>
        <p className="mt-4 text-[14px] leading-[1.6] text-muted-foreground">{description}</p>
        <ul className="mt-4 space-y-2">
          {highlights.map((highlight, i) => (
            <li key={i} className="flex gap-2.5 text-[14px] leading-[1.6] text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/30" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
