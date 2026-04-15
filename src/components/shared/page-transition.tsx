"use client";

import { motion, useReducedMotion } from "motion/react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
    >
      {/* Dot matrix — fades from top-center, dims into content */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern id="page-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--phosphor)" fillOpacity="0.16" />
          </pattern>
          <linearGradient id="page-dot-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="white" stopOpacity="0.9" />
            <stop offset="40%"  stopColor="white" stopOpacity="0.3" />
            <stop offset="75%"  stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="page-dot-mask">
            <rect width="100%" height="100%" fill="url(#page-dot-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#page-dots)" mask="url(#page-dot-mask)" />
      </svg>

      {/* HUD corner brackets — top only (bottom clips into footer) */}
      <div className="pointer-events-none absolute inset-x-0 top-0" aria-hidden="true">
        <span className="absolute top-4 left-4 h-5 w-5 border-t border-l border-(--phosphor)/20" />
        <span className="absolute top-4 right-4 h-5 w-5 border-t border-r border-(--phosphor)/20" />
      </div>

      {children}
    </motion.div>
  );
}
