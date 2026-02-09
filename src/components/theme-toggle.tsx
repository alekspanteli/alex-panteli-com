"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="group relative rounded-full bg-muted/70 text-foreground/80 ring-1 ring-border/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground hover:ring-border/80 hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)] focus-visible:ring-2 focus-visible:ring-ring dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
        >
          <Sun
            className="h-5 w-5 scale-100 rotate-0 transition-all duration-200 group-hover:scale-105 dark:scale-0 dark:-rotate-90"
            strokeWidth={1.6}
          />
          <Moon
            className="absolute h-5 w-5 scale-0 rotate-90 transition-all duration-200 group-hover:scale-105 dark:scale-100 dark:rotate-0"
            strokeWidth={1.6}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
