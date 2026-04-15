"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0C10",
          fontFamily: "monospace",
          color: "#B8C8D8",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#38BDF8",
              marginBottom: "1rem",
            }}
          >
            {"// fatal_error"}
          </p>
          <h1
            style={{
              fontSize: "clamp(48px, 8vw, 80px)",
              fontWeight: 900,
              letterSpacing: "-3px",
              color: "#D8E4F0",
              lineHeight: 0.9,
              margin: "0 0 1.5rem",
            }}
          >
            500
          </h1>
          <p style={{ fontSize: "15px", color: "#7B90A8", marginBottom: "2rem" }}>
            Something went wrong on our end.
          </p>
          <button
            onClick={reset}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid rgba(56,189,248,0.3)",
              background: "transparent",
              color: "#38BDF8",
              padding: "0.75rem 1.5rem",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
