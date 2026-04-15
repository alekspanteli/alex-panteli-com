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
    <SpotlightCard className="rounded-xl border border-border/60 bg-card p-7 text-center transition-colors duration-200 hover:border-(--green)/40">
      <p className="text-[38px] font-bold tracking-[-0.04em] text-heading">
        <span ref={ref} className="text-(--green)">{display}</span>
        <span className="text-muted-foreground">{stat.suffix}</span>
      </p>
      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70">
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
