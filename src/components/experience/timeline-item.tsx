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
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative md:grid md:grid-cols-[1fr_48px_1fr] md:gap-0"
    >
      {/* Left column */}
      <div className="hidden md:block">
        {isLeft && (
          <div className="pr-8">
            <TimelineCard
              title={title}
              subtitle={subtitle}
              period={period}
              location={location}
              description={description}
              highlights={highlights}
              align="right"
            />
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="hidden items-start pt-6 md:flex md:justify-center">
        <div className="z-10 h-3 w-3 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Right column */}
      <div className="hidden md:block">
        {!isLeft && (
          <div className="pl-8">
            <TimelineCard
              title={title}
              subtitle={subtitle}
              period={period}
              location={location}
              description={description}
              highlights={highlights}
              align="left"
            />
          </div>
        )}
      </div>

      {/* Mobile layout */}
      <div className="relative grid grid-cols-[48px_1fr] md:hidden">
        <div className="flex justify-center pt-6">
          <div className="z-10 h-3 w-3 rounded-full border-2 border-primary bg-background" />
        </div>
        <div className="pl-2">
          <TimelineCard
            title={title}
            subtitle={subtitle}
            period={period}
            location={location}
            description={description}
            highlights={highlights}
            align="left"
          />
        </div>
      </div>
    </motion.div>
  );
}

interface TimelineCardProps {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  align: "left" | "right";
}

function TimelineCard({
  title,
  subtitle,
  period,
  location,
  description,
  highlights,
  align,
}: TimelineCardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 ${
        align === "right" ? "text-right" : ""
      }`}
    >
      <div
        className={`flex flex-wrap items-center gap-3 text-[13px] text-muted-foreground ${
          align === "right" ? "justify-end" : ""
        }`}
      >
        <span className="font-medium">{period}</span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {location}
        </span>
      </div>
      <h3 className="mt-3 text-[17px] font-semibold tracking-[-0.01em]">{title}</h3>
      <p className="mt-1 text-[14px] font-medium text-primary dark:text-primary">{subtitle}</p>
      <p className="mt-4 text-[14px] leading-[1.7] text-muted-foreground">{description}</p>
      <ul className={`mt-4 space-y-2.5 ${align === "right" ? "flex flex-col items-end" : ""}`}>
        {highlights.map((highlight, i) => (
          <li
            key={i}
            className={`flex gap-3 text-[14px] leading-[1.7] text-muted-foreground ${
              align === "right" ? "flex-row-reverse" : ""
            }`}
          >
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}
