"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2, AlertCircle, RotateCcw } from "lucide-react";
import { useRecaptcha } from "@/hooks/use-recaptcha";
import { cn } from "@/lib/utils";

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_FORMSPREE_RECAPTCHA_SITE_KEY ?? "";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "h-11 rounded-none border-x-0 border-t-0 border-b-2 border-foreground/25 bg-foreground/[0.03] px-3 font-mono text-[13px] text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:border-(--phosphor) focus-visible:bg-foreground/[0.06] focus-visible:ring-1 focus-visible:ring-(--phosphor)/60 focus-visible:outline-none transition-colors duration-150 dark:border-foreground/15 dark:bg-foreground/[0.02] dark:focus-visible:bg-foreground/[0.04]";

const labelClass =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/85";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [guardError, setGuardError] = useState<string | null>(null);
  const startedAtRef = useRef(Date.now());
  const recaptcha = useRecaptcha(RECAPTCHA_SITE_KEY);

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setGuardError(null);

    if (!FORMSPREE_URL) {
      setGuardError("Contact form is not configured.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const honey = (data.get("company") ?? "").toString().trim();
    const elapsedMs = Date.now() - startedAtRef.current;

    if (honey.length > 0) {
      setGuardError("Please remove the extra field before submitting.");
      return;
    }

    if (elapsedMs < 2500) {
      setGuardError("Please take a moment before submitting.");
      return;
    }

    if (RECAPTCHA_SITE_KEY) {
      const token = (data.get("g-recaptcha-response") ?? "").toString().trim();
      if (!token) {
        setGuardError("Please complete the CAPTCHA check.");
        return;
      }
    }

    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        startedAtRef.current = Date.now();
        recaptcha.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
    >
      {recaptcha.script}

      {/* Terminal panel — top accent bar + sharp border */}
      <div className="border border-(--phosphor)/15 border-t-2 border-t-(--phosphor)/50 bg-card">

        {/* Panel header */}
        <div className="flex items-center gap-2 border-b border-(--phosphor)/10 px-6 py-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-(--phosphor)">
            <span aria-hidden="true">{"// "}</span>send_message
          </span>
        </div>

        <div className="p-6 sm:p-8">
          {status === "success" ? (
            <div role="status" className="flex flex-col items-start gap-4 py-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-(--phosphor)" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-(--phosphor)">
                  Message transmitted
                </span>
              </div>
              <p className="font-mono text-[13px] text-muted-foreground">
                &gt; Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => {
                  recaptcha.resetWidgetId();
                  setStatus("idle");
                  setGuardError(null);
                  startedAtRef.current = Date.now();
                }}
                className="mt-2 inline-flex cursor-pointer items-center gap-2.5 border border-(--phosphor)/40 bg-transparent px-5 py-2.5 font-mono text-[11px] lowercase tracking-[0.14em] text-(--phosphor) transition-colors duration-150 hover:bg-(--phosphor) hover:text-background"
              >
                <RotateCcw className="size-3.5" aria-hidden="true" />
                <span>
                  <span className="text-(--phosphor)/60 group-hover:text-background/60">$</span> send_another
                </span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Name</label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    spellCheck={false}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  autoComplete="off"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <Textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  rows={5}
                  className={cn(inputClass, "h-auto resize-none")}
                  required
                />
              </div>

              {/* Honeypot — hidden from everyone, bots fill it in */}
              <div aria-hidden="true" style={{ display: "none" }}>
                <label htmlFor="company">Company</label>
                <Input id="company" name="company" autoComplete="off" tabIndex={-1} />
              </div>

              {recaptcha.widget}

              <div aria-live="polite">
                {(status === "error" || guardError) && (
                  <div className="flex items-center gap-2 font-mono text-[12px] text-destructive">
                    <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
                    {guardError ?? "Something went wrong. Please try again."}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || !FORMSPREE_URL}
                aria-busy={status === "submitting"}
                className="group inline-flex w-full cursor-pointer items-center justify-between gap-4 border border-(--phosphor) bg-(--phosphor) px-6 py-4 font-mono text-[12px] lowercase tracking-[0.14em] text-background transition-colors duration-150 hover:bg-transparent hover:text-(--phosphor) disabled:cursor-not-allowed disabled:border-(--phosphor)/30 disabled:bg-(--phosphor)/30 disabled:hover:bg-(--phosphor)/30 disabled:hover:text-background sm:w-auto sm:self-start sm:px-8"
              >
                <span className="flex items-center gap-2">
                  <span className="opacity-60">$</span>
                  <span>
                    {status === "submitting" ? "transmitting" : "send_message"}
                    {status === "submitting" && (
                      <span className="blink" aria-hidden="true">_</span>
                    )}
                  </span>
                </span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
