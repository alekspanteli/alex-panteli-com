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
  const [analytics, setAnalytics] = useState(true);

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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-xl border bg-background/95 p-5 shadow-lg backdrop-blur-md sm:bottom-6 sm:right-6"
        >
          <button
            onClick={handleDeclineAll}
            className="absolute right-3 top-3 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Close cookie banner"
          >
            <X className="size-4" />
          </button>

          <div className="mb-3 flex items-center gap-2">
            <Cookie className="size-5 text-primary" />
            <h3 className="font-display text-sm font-semibold">
              Cookie Preferences
            </h3>
          </div>

          <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
            This site uses cookies to analyse traffic and improve your
            experience. You can choose which cookies to allow.
          </p>

          {showManage ? (
            <div className="space-y-3">
              <label className="flex items-center justify-between rounded-lg border px-3 py-2">
                <div>
                  <span className="text-xs font-medium">Necessary</span>
                  <p className="text-[11px] text-muted-foreground">
                    Required for the site to function
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="size-4 accent-primary"
                />
              </label>

              <label className="flex cursor-pointer items-center justify-between rounded-lg border px-3 py-2 transition-colors hover:bg-accent/50">
                <div>
                  <span className="text-xs font-medium">Analytics</span>
                  <p className="text-[11px] text-muted-foreground">
                    Help improve the site with anonymous usage data
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="size-4 accent-primary"
                />
              </label>

              <Button
                onClick={handleSavePreferences}
                size="sm"
                className="w-full"
              >
                Save Preferences
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleAcceptAll} size="sm" className="flex-1">
                Accept All
              </Button>
              <Button
                onClick={() => setShowManage(true)}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                <Settings className="size-3.5" />
                Manage
              </Button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
