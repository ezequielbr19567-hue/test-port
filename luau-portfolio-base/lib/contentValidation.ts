import type { LocalizedText, PortfolioContent } from "@/config/portfolio";

function isLocalizedText(value: unknown): value is LocalizedText {
  if (typeof value === "string") return true;
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return typeof item.en === "string" && typeof item.pt === "string";
}

function isTextList(value: unknown) {
  return Array.isArray(value) && value.every(isLocalizedText);
}

export function isPortfolioContent(value: unknown): value is PortfolioContent {
  if (!value || typeof value !== "object") return false;
  const content = value as Record<string, unknown>;
  const owner = content.owner as Record<string, unknown> | undefined;
  const links = content.links as Record<string, unknown> | undefined;

  if (!owner || !links) return false;
  if (typeof owner.displayName !== "string" || typeof owner.username !== "string") return false;
  if (![owner.status, owner.intro, owner.heroTitleTop, owner.heroTitleAccent, owner.heroTitleBottom, owner.builderPitch, owner.programmerPitch].every(isLocalizedText)) return false;
  if (![links.roblox, links.github, links.discord, links.email].every((item) => typeof item === "string")) return false;
  if (!isTextList(content.builderSkills) || !isTextList(content.programmerSkills)) return false;
  if (!Array.isArray(content.builderProjects) || !Array.isArray(content.programmerProjects)) return false;
  if (!Array.isArray(content.prices) || !Array.isArray(content.media) || !Array.isArray(content.games)) return false;

  return true;
}
