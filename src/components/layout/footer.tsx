import { cvData } from "@/data/cv-data";

const socialLinks = [
  { href: `mailto:${cvData.personal.email}`, label: "Email", external: false },
  { href: "https://github.com/alekspanteli", label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/alexpanteli/", label: "LinkedIn", external: true },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-(--phosphor)/30 dark:border-(--phosphor)/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-(--phosphor) animate-pulse" aria-hidden="true" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/75 dark:text-muted-foreground">
            &copy; {new Date().getFullYear()} {cvData.personal.name}
          </p>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          {socialLinks.map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              className="inline-flex min-h-11 items-center px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/75 transition-colors duration-150 hover:text-(--phosphor) dark:text-muted-foreground"
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
