import { Github, Linkedin, Mail } from "lucide-react";

import { cvData } from "@/data/cv-data";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {cvData.personal.name}. All rights
          reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:alekspanteli@gmail.com"
            className="rounded-full p-2 transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="https://github.com/alekspanteli"
            className="rounded-full p-2 transition-colors hover:text-foreground"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexpanteli/"
            className="rounded-full p-2 transition-colors hover:text-foreground"
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
