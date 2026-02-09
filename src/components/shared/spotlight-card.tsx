"use client";

import { useRef, useCallback } from "react";

interface SpotlightContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightContainer({ children, className = "" }: SpotlightContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cards = el.querySelectorAll<HTMLElement>(".spotlight-card");
    cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      card.style.setProperty("--spotlight-x", `${x - (cardRect.left - rect.left)}px`);
      card.style.setProperty("--spotlight-y", `${y - (cardRect.top - rect.top)}px`);
      card.style.setProperty("--spotlight-opacity", "1");
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".spotlight-card");
    cards.forEach((card) => {
      card.style.setProperty("--spotlight-opacity", "0");
    });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </div>
  );
}

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  return (
    <div className={`spotlight-card relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
