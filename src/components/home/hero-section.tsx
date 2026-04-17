"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { PersonalInfo, Currently } from "@/data/cv-data";

type HeroSectionProps = {
  personal: PersonalInfo;
  currently: Currently;
};

export function HeroSection({ personal, currently }: HeroSectionProps) {
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
      className="relative flex min-h-[calc(100svh-56px)] flex-col justify-center overflow-hidden px-6 py-12 sm:px-12 sm:py-16"
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
      <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
        <span className="absolute top-4 left-4 h-6 w-6 border-t border-l border-(--phosphor)/30" />
        <span className="absolute top-4 right-4 h-6 w-6 border-t border-r border-(--phosphor)/30" />
        <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-(--phosphor)/30" />
        <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-(--phosphor)/30" />
      </div>

      <div className="mx-auto w-full max-w-5xl">

        {/* Role label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-10 font-mono text-[11px] uppercase tracking-[0.18em] text-(--phosphor)"
        >
          <span aria-hidden="true">{"// "}</span>{personal.title.toLowerCase().replace(/\s+/g, "_")}
        </motion.p>

        {/* Name — massive monospace, lowercase, blinking cursor */}
        <h1 className="font-display font-semibold leading-[0.88] tracking-[-0.04em] text-heading
                       text-[clamp(44px,12vw,104px)]"
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
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:gap-16">

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
                href="#selected-work"
                className="inline-flex h-10 items-center rounded-sm bg-(--phosphor) px-5 text-[13px] font-semibold tracking-wide text-background transition-opacity duration-150 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--phosphor)"
              >
                Selected Work
              </Link>
              <Link
                href="/contact"
                className="group inline-flex h-10 items-center gap-1.5 rounded-sm border border-(--phosphor)/60 px-5 text-[13px] font-semibold tracking-wide text-foreground transition-colors duration-150 hover:border-(--phosphor) hover:text-(--phosphor) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--phosphor) dark:border-(--phosphor)/50 dark:text-(--phosphor)"
              >
                Get In Touch
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Currently status — replaces weak stats */}
          <motion.aside
            aria-label="Currently"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.24, duration: 0.35, ease: "easeOut" }}
            className="border-l border-(--phosphor)/25 pl-6 md:min-w-[260px]"
          >
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-(--phosphor)">
              <span aria-hidden="true">{"// "}</span>currently
            </p>
            <p className="font-display text-[18px] font-semibold leading-[1.25] text-heading">
              {currently.role}
            </p>
            <p className="mt-1 font-mono text-[12px] text-muted-foreground">
              {currently.company}
            </p>
            <div className="mt-5 flex items-center gap-2.5 border-t border-(--phosphor)/20 pt-4">
              <span className="relative inline-flex size-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--phosphor) opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-(--phosphor)" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-(--phosphor)">
                {currently.availability}
              </span>
            </div>
          </motion.aside>

        </div>
      </div>
    </section>
  );
}
