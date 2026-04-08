"use client";

import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { SpotlightContainer, SpotlightCard } from "@/components/shared/spotlight-card";
import { cvData } from "@/data/cv-data";
import type { Stat } from "@/data/cv-data";

interface StatCardProps {
  stat: Stat;
}

function StatCard({ stat }: StatCardProps) {
  const { ref, display } = useCounterAnimation(stat.value);

  return (
    <SpotlightCard className="rounded-xl border border-border/60 bg-card p-7 text-center transition-colors duration-200 hover:border-border">
      <p className="text-[38px] font-bold tracking-[-0.04em] text-heading">
        <span ref={ref}>{display}</span>
        {stat.suffix}
      </p>
      <p className="mt-1.5 text-[13px] tracking-[-0.01em] text-muted-foreground">
        {stat.label}
      </p>
    </SpotlightCard>
  );
}

export function StatsCounter() {
  return (
    <SpotlightContainer className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {cvData.stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </SpotlightContainer>
  );
}
