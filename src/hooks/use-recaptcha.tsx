"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import Script from "next/script";

type GrecaptchaApi = {
  render: (el: HTMLElement, opts: { sitekey: string }) => number;
  reset: (widgetId?: number) => void;
};

type WindowWithRecaptcha = typeof window & {
  __onRecaptchaReady?: () => void;
  grecaptcha?: GrecaptchaApi;
};

function getGrecaptcha(): GrecaptchaApi | undefined {
  return (window as WindowWithRecaptcha).grecaptcha;
}

export function useRecaptcha(siteKey: string) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);
  const scriptReadyRef = useRef(false);

  const renderWidget = useCallback(() => {
    const el = elRef.current;
    if (!el || widgetIdRef.current !== null || !siteKey) return;
    const api = getGrecaptcha();
    if (!api?.render) return;
    widgetIdRef.current = api.render(el, { sitekey: siteKey });
  }, [siteKey]);

  const callbackRef = useCallback(
    (node: HTMLDivElement | null) => {
      elRef.current = node;
      if (node && scriptReadyRef.current) {
        renderWidget();
      }
    },
    [renderWidget],
  );

  useEffect(() => {
    if (!siteKey) return;

    const win = window as WindowWithRecaptcha;

    // Google calls this global when the reCAPTCHA API is fully ready
    win.__onRecaptchaReady = () => {
      scriptReadyRef.current = true;
      renderWidget();
    };

    // If the API already loaded (e.g. navigating back to this page), render immediately
    if (win.grecaptcha?.render) {
      scriptReadyRef.current = true;
      renderWidget();
    }

    return () => {
      delete win.__onRecaptchaReady;
    };
  }, [siteKey, renderWidget]);

  const reset = useCallback(() => {
    const api = getGrecaptcha();
    if (api && widgetIdRef.current !== null) {
      api.reset(widgetIdRef.current);
    }
  }, []);

  const resetWidgetId = useCallback(() => {
    widgetIdRef.current = null;
  }, []);

  const script: ReactNode = siteKey ? (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=explicit&onload=__onRecaptchaReady`}
      strategy="afterInteractive"
    />
  ) : null;

  const widget: ReactNode = siteKey ? (
    <div className="flex justify-center">
      <div ref={callbackRef} />
    </div>
  ) : null;

  return { script, widget, reset, resetWidgetId };
}
