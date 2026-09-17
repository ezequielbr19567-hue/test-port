import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Roblox Builder & Luau Developer Portfolio";
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
          background: "#050814",
          color: "#f5f8ff",
          fontFamily: "Arial, sans-serif",
          padding: "74px 86px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 12% 20%, rgba(255,49,69,.34), transparent 33%), radial-gradient(circle at 87% 25%, rgba(84,202,255,.3), transparent 35%), linear-gradient(135deg, #050814 0%, #091224 55%, #050814 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", zIndex: 2, justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24, letterSpacing: 3 }}>
            <div style={{ width: 28, height: 28, transform: "rotate(45deg)", border: "4px solid #54caff", display: "flex" }} />
            ROBLOX STUDIO PORTFOLIO
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 88, lineHeight: 0.92, fontWeight: 900, letterSpacing: -5 }}>BUILDER</div>
            <div style={{ fontSize: 88, lineHeight: 0.92, fontWeight: 900, letterSpacing: -5, color: "#54caff" }}>× LUAU</div>
            <div style={{ fontSize: 30, marginTop: 28, color: "#a9b7d2" }}>Mapas, ambientes e sistemas para experiências Roblox.</div>
          </div>
          <div style={{ display: "flex", gap: 16, fontSize: 20, color: "#dce7fb" }}>
            <span>BUILDING</span><span style={{ color: "#ff3145" }}>•</span><span>SCRIPTING</span><span style={{ color: "#54caff" }}>•</span><span>ROBLOX STUDIO</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
