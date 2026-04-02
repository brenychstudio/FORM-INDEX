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

export const pageLinks = [
  { id: "textures" as const, label: "Textures", href: "/textures" },
  { id: "campaign" as const, label: "Campaign", href: "/campaign" },
  { id: "lookbook" as const, label: "Lookbook", href: "/lookbook" },
  { id: "product" as const, label: "Product", href: "/product" },
];

export function sectionForPath(pathname: string): HomeSectionId {
  return routeToSection[pathname] ?? "intro";
}

export function homeHref(sectionId: HomeSectionId) {
  return sectionId === "intro" ? "/" : `/#${sectionId}`;
}
