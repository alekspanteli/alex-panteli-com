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
    <header className="sticky top-0 z-50 border-b border-(--phosphor)/10 bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto grid h-14 max-w-6xl grid-cols-3 items-center px-6">

        {/* Left: logo */}
        <Link
          href="/"
          aria-label="Alex Panteli — Home"
          className="font-display font-bold text-[14px] tracking-tight text-(--phosphor) transition-opacity duration-200 hover:opacity-70 justify-self-start"
        >
          ap.tsx
        </Link>

        {/* Center: nav links — truly centered */}
        <div className="hidden items-center justify-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors duration-150",
                  isActive
                    ? "bg-(--phosphor)/8 text-(--phosphor)"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute inset-x-3 bottom-0 h-px bg-(--phosphor)/60"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-1 justify-self-end">
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
