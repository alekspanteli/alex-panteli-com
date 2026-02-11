"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";


const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_FORMSPREE_RECAPTCHA_SITE_KEY ?? "";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [guardError, setGuardError] = useState<string | null>(null);
  const startedAtRef = useRef<number>(0);

  useEffect(() => {
    if (startedAtRef.current === 0) {
      startedAtRef.current = Date.now();
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
        if (typeof window !== "undefined") {
          const grecaptcha = (window as typeof window & { grecaptcha?: { reset: () => void } }).grecaptcha;
          grecaptcha?.reset();
        }
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
      transition={{ delay: 0.15, duration: 0.4 }}
    >
      {RECAPTCHA_SITE_KEY && (
        <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      )}
      <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
        <h3 className="text-[18px] font-semibold tracking-tight">Send a message</h3>
        <p className="mt-1 text-[14px] text-muted-foreground">I&apos;ll get back to you as soon as possible.</p>

        <div className="mt-6">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-12 text-center">
              <CheckCircle2 className="h-10 w-10 text-green-500" />
              <h4 className="text-[18px] font-semibold">Message sent!</h4>
              <p className="text-[14px] text-muted-foreground">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <Button
                variant="outline"
                className="mt-3 rounded-lg"
                onClick={() => {
                  setStatus("idle");
                  setGuardError(null);
                  startedAtRef.current = Date.now();
                }}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[14px]">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="rounded-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[14px]">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-[14px]">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className="rounded-lg"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[14px]">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="rounded-lg"
                  required
                />
              </div>

              <div className="sr-only" aria-hidden="true">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" autoComplete="off" tabIndex={-1} />
              </div>

              {RECAPTCHA_SITE_KEY ? (
                <div className="flex justify-center">
                  <div className="g-recaptcha" data-sitekey={RECAPTCHA_SITE_KEY} />
                </div>
              ) : (
                <div className="text-[14px] text-muted-foreground">
                  CAPTCHA is enabled in Formspree, but the site key is missing.
                </div>
              )}

              <div aria-live="polite">
                {(status === "error" || guardError) && (
                  <div className="flex items-center gap-2 text-[14px] text-destructive">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {guardError ?? "Something went wrong. Please try again."}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="h-11 w-full gap-2 rounded-lg text-[14px] font-medium"
                disabled={status === "submitting" || !FORMSPREE_URL}
              >
                <Send className="h-4 w-4" />
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
