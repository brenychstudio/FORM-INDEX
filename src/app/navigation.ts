import type { Lang } from "../i18n/LanguageContext";
import { pageLabels } from "../i18n/copy";

export type HomeSectionId =
  | "intro"
  | "textures"
  | "campaign"
  | "lookbook"
  | "product";

export const routeToSection: Record<string, HomeSectionId> = {
  "/": "intro",
  "/textures": "textures",
  "/campaign": "campaign",
  "/lookbook": "lookbook",
  "/product": "product",
};

export function getPageLinks(lang: Lang) {
  const labels = pageLabels[lang];
  return [
    { id: "textures" as const, label: labels.textures, href: "/textures" },
    { id: "campaign" as const, label: labels.campaign, href: "/campaign" },
    { id: "lookbook" as const, label: labels.lookbook, href: "/lookbook" },
    { id: "product" as const, label: labels.product, href: "/product" },
  ];
}

export function sectionForPath(pathname: string): HomeSectionId {
  return routeToSection[pathname] ?? "intro";
}

export function homeHref(sectionId: HomeSectionId) {
  return sectionId === "intro" ? "/" : `/#${sectionId}`;
}
