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

          {/* Radar / schematic target — single protagonist, right-anchored to container edge */}
          <svg
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[30%] select-none opacity-[0.13] md:block"
            width="520"
            height="520"
            viewBox="0 0 520 520"
            fill="none"
          >
            {/* 3 concentric rings — removed 2 for breathing room */}
            <circle cx="260" cy="260" r="240" stroke="var(--phosphor)" strokeWidth="0.85" />
            <circle cx="260" cy="260" r="170" stroke="var(--phosphor)" strokeWidth="0.6" />
            <circle cx="260" cy="260" r="100" stroke="var(--phosphor)" strokeWidth="0.6" />
            {/* Dashed crosshairs only — removed 45° diagonals */}
            <line x1="260" y1="0"   x2="260" y2="520" stroke="var(--phosphor)" strokeWidth="0.5" strokeDasharray="3 10" />
            <line x1="0"   y1="260" x2="520" y2="260" stroke="var(--phosphor)" strokeWidth="0.5" strokeDasharray="3 10" />
            {/* Bearing tick — single intentional mark instead of cluster */}
            <line x1="260" y1="12" x2="260" y2="28" stroke="var(--phosphor)" strokeWidth="1" />
            {/* Center pip with phosphor signature ring */}
            <circle cx="260" cy="260" r="3" fill="var(--phosphor)" />
            <circle cx="260" cy="260" r="9" stroke="var(--phosphor)" strokeWidth="0.6" />
          </svg>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl">

        {/* Role label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
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
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            alex
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 1, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            panteli<span className="blink text-(--phosphor)" aria-hidden="true">_</span>
          </motion.span>
        </h1>

        {/* Phosphor rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ transformOrigin: "left center" }}
          transition={{ delay: 0.52, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="my-10 h-px w-full bg-(--phosphor)/25"
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">

          {/* Left: description + CTAs */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.5, ease: "easeOut" }}
              className="mb-8 max-w-130 text-[17px] leading-[1.65] tracking-[-0.01em] text-muted-foreground"
            >
              A decade crafting precise, accessible interfaces — from design-system
              foundations to real-time trading platforms. React, TypeScript, Next.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.45, ease: "easeOut" }}
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
            transition={{ delay: 0.95, duration: 0.6, ease: "easeOut" }}
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
