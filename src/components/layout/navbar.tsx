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
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={80}
            height={28}
            className="transition-[filter] duration-200 dark:brightness-0 dark:invert"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group rounded-md px-3 py-1.5 text-[14px] font-medium transition-colors duration-200",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="relative">
                  {link.label}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-[5px] h-[2px] w-full origin-left bg-foreground transition-transform duration-300 ease-out",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
