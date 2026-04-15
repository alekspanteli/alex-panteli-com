"use client";

import { ErrorBoundary } from "@/components/shared/error-boundary";

export default function ContactError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorBoundary reset={reset} />;
}
