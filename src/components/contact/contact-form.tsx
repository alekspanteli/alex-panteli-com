"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useRecaptcha } from "@/hooks/use-recaptcha";

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_FORMSPREE_RECAPTCHA_SITE_KEY ?? "";

type Status = "idle" | "submitting" | "success" | "error";

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

    if (elapsedMs < 4000) {
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
      <div className="rounded-xl border border-border/60 bg-card p-6 sm:p-8">
        <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-heading">
          Send a message
        </h3>
        <p className="mt-1 text-[13px] tracking-[-0.01em] text-muted-foreground">
          I&apos;ll get back to you as soon as possible.
        </p>

        <div className="mt-6">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <h4 className="text-[15px] font-semibold tracking-[-0.02em]">Message sent!</h4>
              <p className="text-[13px] text-muted-foreground">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 rounded-lg border-border/60 text-[13px] font-medium shadow-none"
                onClick={() => {
                  recaptcha.resetWidgetId();
                  setStatus("idle");
                  setGuardError(null);
                  startedAtRef.current = Date.now();
                }}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-[12px] font-medium tracking-[-0.005em] text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="h-9 rounded-lg border-border/60 bg-background text-[13px] shadow-none placeholder:text-muted-foreground/40 focus-visible:border-border focus-visible:ring-0"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-[12px] font-medium tracking-[-0.005em] text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="h-9 rounded-lg border-border/60 bg-background text-[13px] shadow-none placeholder:text-muted-foreground/40 focus-visible:border-border focus-visible:ring-0"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject" className="text-[12px] font-medium tracking-[-0.005em] text-muted-foreground">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className="h-9 rounded-lg border-border/60 bg-background text-[13px] shadow-none placeholder:text-muted-foreground/40 focus-visible:border-border focus-visible:ring-0"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-[12px] font-medium tracking-[-0.005em] text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="rounded-lg border-border/60 bg-background text-[13px] shadow-none placeholder:text-muted-foreground/40 focus-visible:border-border focus-visible:ring-0"
                  required
                />
              </div>

              <div className="sr-only" aria-hidden="true">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" autoComplete="off" tabIndex={-1} />
              </div>

              {recaptcha.widget}

              <div aria-live="polite">
                {(status === "error" || guardError) && (
                  <div className="flex items-center gap-2 text-[13px] text-destructive">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {guardError ?? "Something went wrong. Please try again."}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                size="sm"
                className="w-full gap-2 rounded-lg text-[13px] font-medium shadow-none"
                disabled={status === "submitting" || !FORMSPREE_URL}
              >
                <Send className="h-3.5 w-3.5" />
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
