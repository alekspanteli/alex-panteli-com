"use client";

import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { cvData } from "@/data/cv-data";
import type { Stat } from "@/data/cv-data";

interface StatItemProps {
  stat: Stat;
}

function StatItem({ stat }: StatItemProps) {
  const { ref } = useCounterAnimation(stat.value);

  return (
    <div className="border-t border-(--phosphor)/35 pt-6 dark:border-(--phosphor)/15">
      <p
        className="font-display text-[48px] font-bold leading-none tracking-[-0.03em] text-heading"
        aria-label={`${stat.value}${stat.suffix}`}
      >
        <span ref={ref} aria-hidden="true">0</span>
        <span aria-hidden="true" className="text-(--phosphor)">{stat.suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/75">
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
