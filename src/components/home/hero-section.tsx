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
    spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.07), transparent 40%)`;
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

      {/* Dot matrix grid — fades radially from center-left */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--phosphor)" fillOpacity="0.28" />
          </pattern>
          <radialGradient id="hero-dot-fade" cx="32%" cy="48%" r="62%" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="65%"  stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-dot-mask">
            <rect width="100%" height="100%" fill="url(#hero-dot-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" mask="url(#hero-dot-mask)" />
      </svg>

      {/* Oscilloscope signal trace — lower third */}
      <svg
        className="pointer-events-none absolute bottom-[18%] left-0 h-20 w-full opacity-[0.13]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Baseline */}
        <line x1="0" y1="40" x2="1440" y2="40" stroke="var(--phosphor)" strokeWidth="0.5" strokeDasharray="4 10" />
        {/* Signal waveform */}
        <path
          d="M0,40 L140,40 L148,40 Q152,12 162,10 Q172,8 178,40 L300,40 L312,40 Q315,52 323,54 Q331,56 336,40 L500,40 L514,40 Q518,18 528,14 Q538,10 548,14 Q558,18 562,40 L700,40 L712,40 Q715,48 722,50 Q729,52 734,40 L880,40 L895,40 Q899,22 910,18 Q921,14 926,40 L1060,40 L1072,40 Q1075,50 1082,52 Q1089,54 1094,40 L1220,40 L1234,40 Q1238,28 1246,25 Q1254,22 1260,40 L1440,40"
          stroke="var(--phosphor)"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Ambient phosphor glow — left-center, very subtle */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 22% 50%, rgba(56,189,248,0.05), transparent)",
        }}
        aria-hidden="true"
      />

      {/* HUD corner brackets */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute top-4 left-4 h-6 w-6 border-t border-l border-(--phosphor)/30" />
        <span className="absolute top-4 right-4 h-6 w-6 border-t border-r border-(--phosphor)/30" />
        <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-(--phosphor)/30" />
        <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-(--phosphor)/30" />
      </div>

      {/* Technical annotations — developer telemetry at corners */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="absolute top-10 left-10 font-mono text-[9px] tracking-[0.18em] text-(--phosphor)/35">
          rev.14285df
        </span>
        <span className="absolute top-10 right-10 font-mono text-[9px] tracking-[0.18em] text-(--phosphor)/35">
          BUILD: PASSING
        </span>
        <span className="absolute bottom-10 left-10 font-mono text-[9px] tracking-[0.18em] text-(--phosphor)/35">
          node@22 · next@16 · ts@5
        </span>
        <span className="absolute bottom-10 right-10 font-mono text-[9px] tracking-[0.18em] text-(--phosphor)/35">
          react@19.1.0
        </span>
      </div>

      {/* Radar / schematic target — engineering drawing aesthetic */}
      <svg
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[38%] select-none opacity-[0.11]"
        width="560"
        height="560"
        viewBox="0 0 560 560"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="280" cy="280" r="260" stroke="var(--phosphor)" strokeWidth="1" />
        <circle cx="280" cy="280" r="200" stroke="var(--phosphor)" strokeWidth="0.75" />
        <circle cx="280" cy="280" r="140" stroke="var(--phosphor)" strokeWidth="0.75" />
        <circle cx="280" cy="280" r="80"  stroke="var(--phosphor)" strokeWidth="0.75" />
        <circle cx="280" cy="280" r="20"  stroke="var(--phosphor)" strokeWidth="0.75" />
        {/* Dashed crosshairs */}
        <line x1="280" y1="0"   x2="280" y2="560" stroke="var(--phosphor)" strokeWidth="0.5"  strokeDasharray="3 10" />
        <line x1="0"   y1="280" x2="560" y2="280" stroke="var(--phosphor)" strokeWidth="0.5"  strokeDasharray="3 10" />
        {/* 45° diagonals */}
        <line x1="0"   y1="0"   x2="560" y2="560" stroke="var(--phosphor)" strokeWidth="0.35" strokeDasharray="2 14" />
        <line x1="560" y1="0"   x2="0"   y2="560" stroke="var(--phosphor)" strokeWidth="0.35" strokeDasharray="2 14" />
        {/* Range tick marks at each ring */}
        <line x1="280" y1="56"  x2="290" y2="56"  stroke="var(--phosphor)" strokeWidth="0.5" />
        <line x1="280" y1="80"  x2="290" y2="80"  stroke="var(--phosphor)" strokeWidth="0.5" />
        <line x1="280" y1="140" x2="292" y2="140" stroke="var(--phosphor)" strokeWidth="0.5" />
        <line x1="280" y1="200" x2="292" y2="200" stroke="var(--phosphor)" strokeWidth="0.5" />
        {/* Center pip */}
        <circle cx="280" cy="280" r="3" fill="var(--phosphor)" />
        <circle cx="280" cy="280" r="6" stroke="var(--phosphor)" strokeWidth="0.75" />
      </svg>

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
                       text-[clamp(68px,10vw,132px)]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            alex
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            panteli<span className="blink text-(--phosphor)">_</span>
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
