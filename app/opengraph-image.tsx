import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MacroByte | SME Bookkeeping Malaysia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Logo wordmark */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#3b82f6" }}>Macro</span>Byte
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            fontWeight: 600,
            color: "#94a3b8",
            maxWidth: 640,
            lineHeight: 1.4,
          }}
        >
          Monthly bookkeeping for Malaysian SMEs
        </div>

        {/* Accent line */}
        <div
          style={{
            marginTop: 40,
            width: 80,
            height: 5,
            background: "#3b82f6",
            borderRadius: 99,
          }}
        />

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 20,
            color: "#475569",
            fontWeight: 600,
          }}
        >
          macrobyte.my
        </div>
      </div>
    ),
    { ...size }
  );
}
