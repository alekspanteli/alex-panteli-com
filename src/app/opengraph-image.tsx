import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = SITE_CONFIG.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              fontWeight: 700,
              color: "white",
            }}
          >
            AP
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              {SITE_CONFIG.name}
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#94a3b8",
                letterSpacing: "0.02em",
              }}
            >
              Senior Frontend Developer
            </div>
            <div
              style={{
                fontSize: 18,
                color: "#64748b",
                marginTop: "8px",
              }}
            >
              React &bull; TypeScript &bull; Next.js
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "#475569",
          }}
        >
          alexpanteli.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
