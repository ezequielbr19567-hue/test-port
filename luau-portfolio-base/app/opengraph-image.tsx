import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Simohayna — Roblox Builder & Luau Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#0b0c0f",
          color: "#f5f8ff",
          fontFamily: "Arial, sans-serif",
          padding: "72px 82px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(135deg, #0b0c0f 0%, #10141a 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", zIndex: 2, justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, letterSpacing: 2.6 }}>
            <div style={{ width: 12, height: 12, background: "#7aa7ff", display: "flex" }} />
            EZEQUIEL / SIMOHAYNA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 82, lineHeight: 0.94, fontWeight: 800, letterSpacing: -4 }}>ROBLOX BUILDER</div>
            <div style={{ fontSize: 82, lineHeight: 0.94, fontWeight: 800, letterSpacing: -4, color: "#8db4ff" }}>+ LUAU DEVELOPER</div>
            <div style={{ fontSize: 28, marginTop: 30, color: "#a7acb6" }}>Mapas, ambientes e sistemas com intenção.</div>
          </div>
          <div style={{ display: "flex", gap: 16, fontSize: 20, color: "#dce7fb" }}>
            <span>BUILDING</span><span style={{ color: "#59616f" }}>•</span><span>LUAU</span><span style={{ color: "#59616f" }}>•</span><span>ROBLOX STUDIO</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
