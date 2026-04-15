"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Stable placeholder — same size so layout doesn't shift
  if (!mounted) {
    return <div className="h-7 w-7" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-7 w-7 cursor-pointer items-center justify-center text-muted-foreground transition-colors duration-150 hover:text-(--phosphor) focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-(--phosphor)"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Moon className="h-4 w-4" strokeWidth={1.6} />
      ) : (
        <Sun className="h-4 w-4" strokeWidth={1.6} />
      )}
    </button>
  );
}
