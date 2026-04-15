"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-70"
        >
          <Image
            src="/logo.svg"
            alt="Alex Panteli"
            width={72}
            height={24}
            sizes="72px"
            className="transition-[filter] duration-200 dark:brightness-0 dark:invert"
          />
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
                  "relative rounded-md px-3 py-1.5 text-[13px] font-medium tracking-[-0.01em] transition-colors duration-150",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-px bg-(--green)"
                    aria-hidden="true"
                  />
                )}
                <span className="relative">{link.label}</span>
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
