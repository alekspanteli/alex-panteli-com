import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Alex Panteli — Senior Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const avatarData = await readFile(
    join(process.cwd(), "public", "avatar3.png")
  );
  const avatarBase64 = `data:image/png;base64,${avatarData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 48,
          }}
        >
          <img
            src={avatarBase64}
            width={220}
            height={220}
            style={{
              borderRadius: "50%",
              border: "4px solid rgba(148, 163, 184, 0.3)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: "#f1f5f9",
                letterSpacing: "-0.02em",
              }}
            >
              Alex Panteli
            </div>
            <div
              style={{
                fontSize: 28,
                color: "#94a3b8",
                fontWeight: 400,
              }}
            >
              Senior Frontend Developer
            </div>

          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
