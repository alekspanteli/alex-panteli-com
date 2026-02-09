"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startProgress = useCallback(() => {
    setIsNavigating(true);
    setVisible(true);
    setProgress(0);

    // Rapidly move to ~30%, then slow down
    let current = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      current += current < 30 ? 8 : current < 60 ? 3 : current < 80 ? 1 : 0.5;
      if (current > 90) current = 90;
      setProgress(current);
    }, 100);
  }, []);

  const completeProgress = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setProgress(100);
    setIsNavigating(false);

    // Fade out after reaching 100%
    setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 300);
  }, []);

  // Complete when route changes
  useEffect(() => {
    if (isNavigating) {
      completeProgress();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

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
    <div className="fixed top-0 left-0 right-0 z-100 h-[2.5px] bg-transparent">
      <div
        className="h-full bg-primary shadow-[0_0_8px_var(--color-primary)] transition-[width] duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
