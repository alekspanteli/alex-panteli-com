"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useMotionValue, useTransform, motion } from "motion/react";

export function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);
  const progressMV = useMotionValue(0);
  const widthPercent = useTransform(progressMV, (v) => `${v}%`);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isNavigatingRef = useRef(false);

  const startProgress = useCallback(() => {
    isNavigatingRef.current = true;
    setVisible(true);
    progressMV.set(0);

    // Rapidly move to ~30%, then slow down
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const current = progressMV.get();
      const next =
        current < 30 ? current + 8 :
        current < 60 ? current + 3 :
        current < 80 ? current + 1 :
        current + 0.5;
      progressMV.set(Math.min(next, 90));
    }, 100);
  }, [progressMV]);

  const completeProgress = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    isNavigatingRef.current = false;
    progressMV.set(100);

    // Fade out after reaching 100%
    setTimeout(() => {
      setVisible(false);
      progressMV.set(0);
    }, 300);
  }, [progressMV]);

  // Complete when route changes
  useEffect(() => {
    if (isNavigatingRef.current) {
      const id = requestAnimationFrame(() => completeProgress());
      return () => cancelAnimationFrame(id);
    }
  }, [pathname, searchParams, completeProgress]);

  // Intercept link clicks to detect navigation start
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        anchor.getAttribute("target") === "_blank" ||
        href === pathname
      ) {
        return;
      }

      startProgress();
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [pathname, startProgress]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    /* Sits flush at the bottom edge of the 56px navbar */
    <div className="fixed top-14 left-0 right-0 z-[100] h-px bg-(--phosphor)/10">
      <motion.div
        className="h-full bg-(--phosphor)"
        style={{ width: widthPercent }}
      />
    </div>
  );
}
