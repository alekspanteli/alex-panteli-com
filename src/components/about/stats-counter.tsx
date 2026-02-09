"use client";

import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { cvData } from "@/data/cv-data";
import type { Stat } from "@/data/cv-data";

function StatCard({ stat }: { stat: Stat }) {
  const { ref, display } = useCounterAnimation(stat.value);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold tracking-tighter">
        <span ref={ref}>{display}</span>
        {stat.suffix}
      </p>
      <p className="mt-1.5 text-xs text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {cvData.stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
