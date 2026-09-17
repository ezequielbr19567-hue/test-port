import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./v14.css";

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
    default: "Roblox Builder & Luau Developer | Portfolio",
    template: "%s | Roblox Portfolio",
  },
  description:
    "Portfolio de Builder e Programador Luau para Roblox Studio: mapas, ambientes, sistemas, interfaces e experiências sob medida.",
  applicationName: "Roblox Builder & Luau Portfolio",
  keywords: [
    "Roblox Builder",
    "Roblox Studio",
    "Luau Developer",
    "Roblox Developer",
    "Map Builder",
    "Roblox Scripting",
    "Portfolio Roblox",
  ],
  authors: [{ name: "Roblox Builder & Luau Developer" }],
  creator: "Roblox Builder & Luau Developer",
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
    title: "Roblox Builder & Luau Developer",
    description: "Mapas, ambientes e sistemas em Luau para experiências Roblox.",
    siteName: "Roblox Portfolio",
    ...(resolvedSiteUrl ? { url: resolvedSiteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Roblox Builder & Luau Developer",
    description: "Mapas, ambientes e sistemas em Luau para experiências Roblox.",
  },
  category: "portfolio",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050814",
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
