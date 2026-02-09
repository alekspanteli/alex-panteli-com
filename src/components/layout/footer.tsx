import { Github, Linkedin, Mail } from "lucide-react";

import { cvData } from "@/data/cv-data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {cvData.personal.name}
        </p>
        <div className="flex items-center gap-2">
          <a
            href="mailto:alekspanteli@gmail.com"
            className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground/80 ring-1 ring-border/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background hover:ring-foreground/40 hover:shadow-[0_10px_24px_rgba(15,23,42,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:hover:shadow-[0_10px_24px_rgba(0,0,0,0.6)]"
            aria-label="Email"
          >
            <Mail className="size-[18px] transition-transform duration-200 group-hover:scale-105" strokeWidth={1.8} />
          </a>
          <a
            href="https://github.com/alekspanteli"
            className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground/80 ring-1 ring-border/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background hover:ring-foreground/40 hover:shadow-[0_10px_24px_rgba(15,23,42,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:hover:shadow-[0_10px_24px_rgba(0,0,0,0.6)]"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="size-[18px] transition-transform duration-200 group-hover:scale-105" strokeWidth={1.8} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexpanteli/"
            className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground/80 ring-1 ring-border/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-background hover:ring-foreground/40 hover:shadow-[0_10px_24px_rgba(15,23,42,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:hover:shadow-[0_10px_24px_rgba(0,0,0,0.6)]"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="size-[18px] transition-transform duration-200 group-hover:scale-105" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </footer>
  );
}
