import { ImageResponse } from "next/og";

export const alt = "Alex Panteli — Senior Frontend Developer | React & Next.js";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// AXIOM dark palette — CSS vars can't be used in next/og (Satori), hardcoded tokens
const BG      = "#0A0C10";
const PHOSPHOR = "#38BDF8";
const HEADING = "#D8E4F0";
const MUTED   = "#4A6070";
const BORDER  = "rgba(56,189,248,0.12)";
const MONO    = "'Courier New', Courier, monospace";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: BG,
          fontFamily: MONO,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Dot grid ─────────────────────────────────────────── */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill={PHOSPHOR} fillOpacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* ── Vertical scan column lines ────────────────────────── */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          {[120, 240, 360, 480, 600, 720, 840, 960, 1080].map((x) => (
            <line
              key={x}
              x1={x}
              y1="0"
              x2={x}
              y2="630"
              stroke={PHOSPHOR}
              strokeOpacity="0.04"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* ── Ambient phosphor glow — left ─────────────────────── */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-80px",
            transform: "translateY(-50%)",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${PHOSPHOR}18 0%, transparent 70%)`,
            display: "flex",
          }}
        />

        {/* ── HUD corner brackets ───────────────────────────────── */}
        {/* top-left */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            width: 28,
            height: 28,
            borderTop: `1.5px solid ${PHOSPHOR}60`,
            borderLeft: `1.5px solid ${PHOSPHOR}60`,
            display: "flex",
          }}
        />
        {/* top-right */}
        <div
          style={{
            position: "absolute",
            top: 28,
            right: 28,
            width: 28,
            height: 28,
            borderTop: `1.5px solid ${PHOSPHOR}60`,
            borderRight: `1.5px solid ${PHOSPHOR}60`,
            display: "flex",
          }}
        />
        {/* bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 28,
            width: 28,
            height: 28,
            borderBottom: `1.5px solid ${PHOSPHOR}60`,
            borderLeft: `1.5px solid ${PHOSPHOR}60`,
            display: "flex",
          }}
        />
        {/* bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 28,
            width: 28,
            height: 28,
            borderBottom: `1.5px solid ${PHOSPHOR}60`,
            borderRight: `1.5px solid ${PHOSPHOR}60`,
            display: "flex",
          }}
        />

        {/* ── Oscilloscope signal trace — bottom ───────────────── */}
        <svg
          style={{
            position: "absolute",
            bottom: 70,
            left: 0,
            width: "100%",
            height: 40,
            opacity: 0.1,
          }}
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="20" x2="1200" y2="20" stroke={PHOSPHOR} strokeWidth="0.5" strokeDasharray="4 10" />
          <path
            d="M0,20 L160,20 L170,20 Q175,6 183,5 Q191,4 196,20 L340,20 L356,20 Q360,26 367,27 Q374,28 378,20 L520,20 L534,20 Q538,9 548,7 Q558,5 568,7 Q578,9 582,20 L720,20 L734,20 Q738,24 746,25 Q754,26 758,20 L900,20 L916,20 Q920,11 930,9 Q940,7 950,9 Q960,11 964,20 L1080,20 L1090,20 Q1094,25 1102,26 Q1110,27 1116,20 L1200,20"
            stroke={PHOSPHOR}
            strokeWidth="1.5"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>

        {/* ── Main content layout ───────────────────────────────── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "52px 72px",
          }}
        >
          {/* Top row: >_ logo + telemetry */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* >_ mark — mirrors favicon */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="32" height="32" viewBox="0 0 100 100">
                <polyline
                  points="12,16 56,50 12,84"
                  stroke={PHOSPHOR}
                  strokeWidth="14"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="62" y="67" width="27" height="11" rx="5" fill={PHOSPHOR} />
              </svg>
              <span
                style={{
                  fontSize: 13,
                  color: PHOSPHOR,
                  letterSpacing: "0.18em",
                  display: "flex",
                }}
              >
                ap.tsx
              </span>
            </div>

            {/* Telemetry */}
            <span
              style={{
                fontSize: 11,
                color: MUTED,
                letterSpacing: "0.14em",
                display: "flex",
              }}
            >
              BUILD: PASSING
            </span>
          </div>

          {/* Centre: role + name */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {/* Role label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              {/* > prompt */}
              <svg width="14" height="14" viewBox="0 0 100 100">
                <polyline
                  points="12,16 56,50 12,84"
                  stroke={PHOSPHOR}
                  strokeWidth="16"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontSize: 13,
                  color: PHOSPHOR,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  display: "flex",
                }}
              >
                senior_frontend_developer
              </span>
            </div>

            {/* Name — massive monospace */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
                lineHeight: 0.88,
              }}
            >
              <span
                style={{
                  fontSize: 118,
                  fontWeight: 900,
                  color: HEADING,
                  letterSpacing: "-4px",
                  display: "flex",
                }}
              >
                alex
              </span>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "0px" }}>
                <span
                  style={{
                    fontSize: 118,
                    fontWeight: 900,
                    color: HEADING,
                    letterSpacing: "-4px",
                    display: "flex",
                  }}
                >
                  panteli
                </span>
                {/* Blinking cursor — static in OG */}
                <span
                  style={{
                    fontSize: 118,
                    fontWeight: 900,
                    color: PHOSPHOR,
                    letterSpacing: "-4px",
                    display: "flex",
                    marginBottom: "4px",
                  }}
                >
                  _
                </span>
              </div>
            </div>
          </div>

          {/* Bottom: divider + tech + URL */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {/* Phosphor rule */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: BORDER,
                display: "flex",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontSize: 15,
                  color: MUTED,
                  letterSpacing: "0.04em",
                  display: "flex",
                  gap: "24px",
                }}
              >
                React · TypeScript · Next.js · Design Systems
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: `${PHOSPHOR}90`,
                  letterSpacing: "0.12em",
                  display: "flex",
                }}
              >
                alexpanteli.com
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
