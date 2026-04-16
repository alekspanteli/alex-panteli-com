"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, X } from "lucide-react";

const STORAGE_KEY = "cookie-consent";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
}

function getStoredPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function savePreferences(prefs: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = getStoredPreferences();
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAcceptAll() {
    savePreferences({ necessary: true, analytics: true });
    setVisible(false);
  }

  function handleSavePreferences() {
    savePreferences({ necessary: true, analytics });
    setVisible(false);
  }

  function handleDeclineAll() {
    savePreferences({ necessary: true, analytics: false });
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Cookie preferences"
          aria-labelledby="cookie-heading"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-(--phosphor)/25 bg-background/95 backdrop-blur-md"
        >
          {showManage ? (
            <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Cookie className="size-4 text-(--phosphor)" />
                  <h2 id="cookie-heading" className="font-mono text-[11px] uppercase tracking-[0.18em] text-(--phosphor)">
                    Manage cookies
                  </h2>
                </div>
                <button
                  onClick={handleDeclineAll}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Close cookie banner"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="flex items-center justify-between gap-3 rounded-sm border border-(--phosphor)/15 px-3 py-2">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Necessary</span>
                    <p className="text-[11px] text-muted-foreground">Required for the site to function</p>
                  </div>
                  <input type="checkbox" checked disabled className="size-4 accent-(--phosphor)" />
                </label>

                <label className="flex cursor-pointer items-center justify-between gap-3 rounded-sm border border-(--phosphor)/15 px-3 py-2 transition-colors hover:bg-accent/30">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Analytics</span>
                    <p className="text-[11px] text-muted-foreground">Help improve the site with anonymous usage data</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="size-4 accent-(--phosphor)"
                  />
                </label>
              </div>

              <div className="flex justify-end gap-2">
                <Button onClick={handleDeclineAll} variant="ghost" size="sm">
                  Decline
                </Button>
                <Button onClick={handleSavePreferences} size="sm">
                  Save Preferences
                </Button>
              </div>
            </div>
          ) : (
            <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-start gap-3">
                <Cookie className="mt-0.5 size-4 shrink-0 text-(--phosphor)" />
                <p id="cookie-heading" className="text-[12px] leading-snug text-muted-foreground">
                  This site uses cookies to analyse traffic and improve your experience.
                </p>
              </div>

              <div className="flex w-full shrink-0 gap-2 sm:w-auto">
                <Button
                  onClick={() => setShowManage(true)}
                  variant="outline"
                  size="sm"
                  className="flex-1 sm:flex-none"
                >
                  <Settings className="size-3.5" />
                  Manage
                </Button>
                <Button onClick={handleAcceptAll} size="sm" className="flex-1 sm:flex-none">
                  Accept All
                </Button>
                <button
                  onClick={handleDeclineAll}
                  className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline-flex sm:items-center"
                  aria-label="Close cookie banner"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
