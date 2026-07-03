import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

// Social-share card (LinkedIn/Twitter/WhatsApp link previews).
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#fafafa",
              color: "#0a0a0a",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            SK
          </div>
          <div style={{ fontSize: "26px", color: "#a1a1a1" }}>
            {`${profile.username}.dev`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "84px", fontWeight: 700, letterSpacing: "-2px" }}>
            {profile.name}
          </div>
          <div style={{ marginTop: "16px", fontSize: "38px", color: "#a1a1a1" }}>
            {profile.role}
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "30px",
              lineHeight: 1.35,
              maxWidth: "900px",
              color: "#d4d4d4",
            }}
          >
            {profile.tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          {["Kafka", "Spark", "TensorFlow", "FastAPI", "Docker"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                border: "1px solid #333333",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "24px",
                color: "#a1a1a1",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
