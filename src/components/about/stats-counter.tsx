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
    <SpotlightCard className="rounded-lg border border-border bg-card p-8 text-center">
      <p className="text-[40px] font-bold tracking-tighter">
        <span ref={ref}>{display}</span>
        {stat.suffix}
      </p>
      <p className="mt-2 text-[14px] text-muted-foreground">
        {stat.label}
      </p>
    </SpotlightCard>
  );
}

export function StatsCounter() {
  return (
    <SpotlightContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {cvData.stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </SpotlightContainer>
  );
}
