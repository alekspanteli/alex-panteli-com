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
    <SpotlightCard className="rounded-xl border border-border bg-card p-8 text-center transition-colors duration-300 hover:border-primary/20">
      <p className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-[-0.04em] text-foreground">
        <span ref={ref}>{display}</span>
        <span className="text-primary">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-[13px] font-medium uppercase tracking-widest text-muted-foreground">
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
