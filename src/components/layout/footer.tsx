import { Github, Linkedin, Mail } from "lucide-react";

import { cvData } from "@/data/cv-data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {cvData.personal.name}
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:alekspanteli@gmail.com"
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="https://github.com/alekspanteli"
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexpanteli/"
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
