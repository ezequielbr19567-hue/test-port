import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Roblox Builder & Luau Portfolio",
    short_name: "Roblox Portfolio",
    description: "Portfolio de Builder e Programador Luau para Roblox Studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#050814",
    theme_color: "#050814",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
