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
import { cvData } from "@/data/cv-data";

const socialLinks = [
  { href: `mailto:${cvData.personal.email}`, label: "Email", external: false },
  { href: "https://github.com/alekspanteli", label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/alexpanteli/", label: "LinkedIn", external: true },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="flex h-12 w-12 cursor-pointer items-center justify-center text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--phosphor) md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex w-72 flex-col border-l border-(--phosphor)/10 bg-background p-0"
      >
        <SheetHeader className="border-b border-(--phosphor)/10 px-6 py-4">
          <SheetTitle className="font-display text-[14px] font-bold text-(--phosphor)">
            ap.tsx
          </SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation menu
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col px-4 py-4">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                {...(isActive ? { "aria-current": "page" as const } : {})}
                className={cn(
                  "relative flex min-h-12 items-center px-3 font-mono text-[12px] uppercase tracking-[0.18em] transition-colors duration-150",
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

        <div className="mt-auto border-t border-(--phosphor)/10 px-4 py-4">
          <p className="mb-2 px-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden="true">{"// "}</span>connect
          </p>
          <div className="flex flex-col">
            {socialLinks.map(({ href, label, external }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center px-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-150 hover:text-(--phosphor)"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
