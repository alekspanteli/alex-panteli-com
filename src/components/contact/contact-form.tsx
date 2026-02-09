"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/xaqdnolv";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
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
                onClick={() => setStatus("idle")}
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

              {status === "error" && (
                <div className="flex items-center gap-2 text-[14px] text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  Something went wrong. Please try again.
                </div>
              )}

              <Button
                type="submit"
                className="h-11 w-full gap-2 rounded-lg text-[14px] font-medium"
                disabled={status === "submitting"}
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
