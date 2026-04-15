"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="flex h-7 w-7 cursor-pointer items-center justify-center text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-(--phosphor) md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-64 border-l border-(--phosphor)/10 bg-background p-0"
      >
        <SheetHeader className="border-b border-(--phosphor)/10 px-6 py-4">
          <SheetTitle className="font-display text-[14px] font-bold text-(--phosphor)">
            ap.tsx
          </SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation menu
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col px-4 py-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                {...(isActive ? { "aria-current": "page" as const } : {})}
                className={cn(
                  "relative px-3 py-3 font-mono text-[11px] uppercase tracking-widest transition-colors duration-150",
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
        </nav>
      </SheetContent>
    </Sheet>
  );
}
