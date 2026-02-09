import { Github, Linkedin, Mail } from "lucide-react";

import { cvData } from "@/data/cv-data";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <a
            href="mailto:alekspanteli@gmail.com"
            className="transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="https://github.com/alekspanteli"
            className="transition-colors hover:text-foreground"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexpanteli/"
            className="transition-colors hover:text-foreground"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="size-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground/70">
          &copy; {new Date().getFullYear()} {cvData.personal.name}
        </p>
      </div>
    </footer>
  );
}
