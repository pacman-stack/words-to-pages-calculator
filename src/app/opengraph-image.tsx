import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Word to Pages — Free Online Calculator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 16,
            background: "rgba(255,255,255,0.1)",
            marginBottom: 24,
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: 12,
          }}
        >
          Word to Pages
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 40,
          }}
        >
          Free Online Words to Pages Calculator
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["14+ Fonts", "6–72pt Sizes", "Google Fonts", "Instant Results"].map(
            (feature) => (
              <div
                key={feature}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 18,
                }}
              >
                {feature}
              </div>
            )
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 20,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          wordtopages.com
        </div>
      </div>
    ),
    { ...size }
  );
}
