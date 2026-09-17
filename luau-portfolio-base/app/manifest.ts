import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ezequiel — Roblox Builder & Luau Developer",
    short_name: "Ezequiel",
    description: "Portfólio de Ezequiel (Simohayna), Builder e desenvolvedor Luau para Roblox Studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0c0f",
    theme_color: "#0b0c0f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
