"use client";

import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { cvData } from "@/data/cv-data";
import type { Stat } from "@/data/cv-data";

interface StatItemProps {
  stat: Stat;
}

function StatItem({ stat }: StatItemProps) {
  const { ref, display } = useCounterAnimation(stat.value);

  return (
    <div className="border-t border-border/50 pt-6">
      <p className="font-display text-[54px] font-bold leading-none tracking-[-0.04em] text-heading">
        <span ref={ref}>{display}</span>
        <span className="text-(--cobalt)">{stat.suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/55">
        {stat.label}
      </p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
      {cvData.stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
