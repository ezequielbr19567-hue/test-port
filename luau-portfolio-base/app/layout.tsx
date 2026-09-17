import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./v15.css";

function resolveSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "";
  if (!raw) return null;
  return (raw.startsWith("http://") || raw.startsWith("https://") ? raw : `https://${raw}`).replace(/\/$/, "");
}

const resolvedSiteUrl = resolveSiteUrl();

export const metadata: Metadata = {
  ...(resolvedSiteUrl ? { metadataBase: new URL(resolvedSiteUrl), alternates: { canonical: "/" } } : {}),
  title: {
    default: "Simohayna — Roblox Builder & Luau Developer",
    template: "%s — Simohayna",
  },
  description:
    "Portfólio de Ezequiel (Simohayna): Builder e desenvolvedor Luau para Roblox Studio, com foco em mapas, ambientes e sistemas sob medida.",
  applicationName: "Simohayna Portfolio",
  keywords: [
    "Roblox Builder",
    "Roblox Studio",
    "Luau Developer",
    "Roblox Developer",
    "Map Builder",
    "Roblox Scripting",
    "Portfolio Roblox",
  ],
  authors: [{ name: "Ezequiel (Simohayna)" }],
  creator: "Ezequiel (Simohayna)",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    title: "Simohayna — Roblox Builder & Luau Developer",
    description: "Mapas, ambientes e sistemas em Luau para experiências Roblox, por Ezequiel (Simohayna).",
    siteName: "Simohayna Portfolio",
    ...(resolvedSiteUrl ? { url: resolvedSiteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Simohayna — Roblox Builder & Luau Developer",
    description: "Mapas, ambientes e sistemas em Luau para experiências Roblox, por Ezequiel (Simohayna).",
  },
  category: "portfolio",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0c0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
