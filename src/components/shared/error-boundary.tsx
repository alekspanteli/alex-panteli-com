"use client";

interface ErrorBoundaryProps {
  reset: () => void;
}

export function ErrorBoundary({ reset }: ErrorBoundaryProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-(--phosphor)">
        <span aria-hidden="true">{"// "}</span>error
      </p>
      <h1 className="font-display text-[clamp(48px,8vw,80px)] font-bold leading-[0.9] tracking-[-0.03em] text-heading">
        500
      </h1>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
        Something went wrong. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex cursor-pointer items-center gap-2 border border-(--phosphor)/30 px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-(--phosphor) transition-colors duration-150 hover:border-(--phosphor)/60 hover:bg-(--phosphor)/5"
      >
        Try again
      </button>
    </div>
  );
}
