"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo — "AP" monogram in Cormorant italic */}
        <Link
          href="/"
          aria-label="Alex Panteli — Home"
          className="font-display text-[22px] italic font-semibold text-heading transition-opacity duration-200 hover:opacity-50"
        >
          AP
        </Link>

        {/* Center nav links */}
        <div className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-widest transition-colors duration-150",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-px bg-(--cobalt)"
                    aria-hidden="true"
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
