"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { PersonalInfo, Stat } from "@/data/cv-data";

type HeroSectionProps = {
  personal: PersonalInfo;
  stats: Stat[];
};

export function HeroSection({ personal, stats }: HeroSectionProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!spotlightRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, color-mix(in srgb, var(--phosphor) 7%, transparent), transparent 40%)`;
    spotlightRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
  }, []);

  return (
    <section
      className="relative flex min-h-[calc(100svh-56px)] flex-col justify-center overflow-hidden px-6 py-20 sm:px-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor-reactive spotlight — no React re-renders */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{ willChange: "opacity" }}
        aria-hidden="true"
      />

      {/* Dot matrix grid — subtle viewport-wide bg, fades radially from center-left */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--phosphor)" fillOpacity="0.22" />
          </pattern>
          <radialGradient id="hero-dot-fade" cx="32%" cy="48%" r="62%" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="65%"  stopColor="white" stopOpacity="0.35" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-dot-mask">
            <rect width="100%" height="100%" fill="url(#hero-dot-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" mask="url(#hero-dot-mask)" />
      </svg>

      {/* Ambient phosphor glow — left-center, very subtle */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 22% 50%, color-mix(in srgb, var(--phosphor) 5%, transparent), transparent)",
        }}
        aria-hidden="true"
      />

      {/* HUD corner brackets — viewfinder / precision instrument */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute top-4 left-4 h-6 w-6 border-t border-l border-(--phosphor)/30" />
        <span className="absolute top-4 right-4 h-6 w-6 border-t border-r border-(--phosphor)/30" />
        <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-(--phosphor)/30" />
        <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-(--phosphor)/30" />
      </div>

      {/* Container-bounded decorations — anchor to content zone, not viewport */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="relative mx-auto h-full w-full max-w-[1400px] px-6 sm:px-12">

          {/* Technical annotations — developer telemetry */}
          <span className="absolute top-6 left-6 sm:left-12 font-mono text-[9px] tracking-[0.18em] text-(--phosphor)/35">
            rev.14285df
          </span>
          <span className="absolute top-6 right-6 sm:right-12 font-mono text-[9px] tracking-[0.18em] text-(--phosphor)/35">
            BUILD: PASSING
          </span>
          <span className="absolute bottom-6 left-6 sm:left-12 font-mono text-[9px] tracking-[0.18em] text-(--phosphor)/35">
            node@22 · next@16 · ts@5
          </span>
          <span className="absolute bottom-6 right-6 sm:right-12 font-mono text-[9px] tracking-[0.18em] text-(--phosphor)/35">
            react@19.1.0
          </span>

          {/* Oscilloscope trace — live reading motif, right-anchored */}
          <svg
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[22%] select-none opacity-[0.13] md:block"
            width="560"
            height="320"
            viewBox="0 0 560 320"
            fill="none"
          >
            {/* Screen frame */}
            <rect x="0.5" y="0.5" width="559" height="319" stroke="var(--phosphor)" strokeWidth="0.4" />
            {/* Horizontal axis — stronger centerline */}
            <line x1="0" y1="160" x2="560" y2="160" stroke="var(--phosphor)" strokeWidth="0.5" />
            {/* Graticule — minor horizontal divisions */}
            <line x1="0" y1="80"  x2="560" y2="80"  stroke="var(--phosphor)" strokeWidth="0.3" strokeDasharray="2 6" />
            <line x1="0" y1="240" x2="560" y2="240" stroke="var(--phosphor)" strokeWidth="0.3" strokeDasharray="2 6" />
            {/* Vertical time divisions */}
            <line x1="140" y1="0" x2="140" y2="320" stroke="var(--phosphor)" strokeWidth="0.3" strokeDasharray="2 8" />
            <line x1="280" y1="0" x2="280" y2="320" stroke="var(--phosphor)" strokeWidth="0.3" strokeDasharray="2 8" />
            <line x1="420" y1="0" x2="420" y2="320" stroke="var(--phosphor)" strokeWidth="0.3" strokeDasharray="2 8" />
            {/* Damped sine trace — amplitude decays left-to-right */}
            <path
              d="M 0 160 Q 35 60 70 160 T 140 160 Q 175 85 210 160 T 280 160 Q 315 115 350 160 T 420 160 Q 455 140 490 160 T 560 160"
              stroke="var(--phosphor)"
              strokeWidth="1.1"
              fill="none"
            />
            {/* Scan head — phosphor signature at leading edge */}
            <circle cx="560" cy="160" r="3" fill="var(--phosphor)" />
            <circle cx="560" cy="160" r="9" stroke="var(--phosphor)" strokeWidth="0.6" />
            {/* Corner registration marks */}
            <line x1="0" y1="0" x2="10" y2="0" stroke="var(--phosphor)" strokeWidth="0.85" />
            <line x1="0" y1="0" x2="0" y2="10" stroke="var(--phosphor)" strokeWidth="0.85" />
            <line x1="0" y1="320" x2="10" y2="320" stroke="var(--phosphor)" strokeWidth="0.85" />
            <line x1="0" y1="320" x2="0" y2="310" stroke="var(--phosphor)" strokeWidth="0.85" />
            {/* Channel label */}
            <text x="8" y="18" fill="var(--phosphor)" fontSize="7" fontFamily="monospace" letterSpacing="0.15em" opacity="0.7">
              CH1 · 2V
            </text>
          </svg>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl">

        {/* Role label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-10 font-mono text-[11px] uppercase tracking-widest text-(--phosphor)"
        >
          <span aria-hidden="true">{"// "}</span>{personal.title.toLowerCase().replace(/\s+/g, "_")}
        </motion.p>

        {/* Name — massive monospace, lowercase, blinking cursor */}
        <h1 className="font-display font-bold leading-[0.88] tracking-[-0.03em] text-heading
                       text-[clamp(68px,10vw,132px)]"
            aria-label="Alex Panteli">
          <motion.span
            className="block"
            initial={{ opacity: 1, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            alex
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 1, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            panteli<span className="blink text-(--phosphor)" aria-hidden="true">_</span>
          </motion.span>
        </h1>

        {/* Phosphor rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ transformOrigin: "left center" }}
          transition={{ delay: 0.18, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="my-10 h-0 w-full border-t border-dashed border-(--phosphor)/50 dark:border-(--phosphor)/30"
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">

          {/* Left: description + CTAs */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.35, ease: "easeOut" }}
              className="mb-8 max-w-130 text-[17px] leading-[1.65] tracking-[-0.01em] text-muted-foreground"
            >
              A decade crafting precise, accessible interfaces — from design-system
              foundations to real-time trading platforms. React, TypeScript, Next.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/experience"
                className="inline-flex h-10 items-center rounded-sm bg-(--phosphor) px-5 text-[13px] font-semibold tracking-wide text-background transition-opacity duration-150 hover:opacity-80"
              >
                View Experience
              </Link>
              <Link
                href="/contact"
                className="group inline-flex h-10 items-center gap-1.5 rounded-sm border border-border/70 px-5 text-[13px] font-semibold tracking-wide text-muted-foreground transition-colors duration-150 hover:border-(--phosphor)/50 hover:text-(--phosphor)"
              >
                Get In Touch
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.35, ease: "easeOut" }}
            className="flex items-end gap-8 md:flex-col md:items-end md:gap-7"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-right">
                <p className="font-display text-[48px] font-bold leading-none tracking-[-0.03em] text-heading">
                  {stat.value}
                  <span className="text-(--phosphor)">{stat.suffix}</span>
                </p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
