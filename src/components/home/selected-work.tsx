"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cvData } from "@/data/cv-data";

export function SelectedWork() {
  return (
    <section
      id="selected-work"
      aria-label="Selected Work"
      className="border-t border-(--phosphor)/25 px-6 py-24 sm:px-12 lg:py-28 dark:border-(--phosphor)/15"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-(--phosphor)">
            Selected Work
          </p>
          <h2 className="font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.035em] text-heading sm:text-[42px]">
            <span className="mr-3 text-(--phosphor)" aria-hidden="true">{"// "}</span>case_studies
          </h2>
        </motion.div>

        <ul className="divide-y divide-(--phosphor)/20">
          {cvData.projects.map((project, i) => {
            const Wrapper = project.href ? "a" : "div";
            return (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Wrapper
                  {...(project.href
                    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group grid gap-4 py-8 md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-8"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-(--phosphor)">
                    <span className="text-muted-foreground mr-2" aria-hidden="true">
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    {project.context}
                  </p>

                  <div>
                    <h3 className="font-display text-[22px] font-bold leading-[1.2] tracking-[-0.025em] text-heading transition-colors duration-150 group-hover:text-(--phosphor)">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.65] text-muted-foreground">
                      {project.outcome}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="font-mono text-[11px] uppercase tracking-[0.14em] text-(--phosphor)/80"
                        >
                          · {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.href && (
                    <ArrowUpRight
                      className="hidden size-5 shrink-0 self-center text-(--phosphor)/70 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-(--phosphor) md:block"
                      aria-hidden="true"
                    />
                  )}
                </Wrapper>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-start">
          <Link
            href="/experience"
            className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-(--phosphor) transition-opacity duration-150 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--phosphor)"
          >
            Full experience
            <ArrowUpRight className="size-3.5 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
