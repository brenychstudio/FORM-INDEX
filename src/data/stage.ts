import type { StageItem } from "./assets";
import { campaign, lookbook, products, textures } from "./assets";

export type StageRouteItem = StageItem & {
  href?: string;
};

export const stageItems: StageRouteItem[] = [
  {
    id: "intro",
    indexTitle: "Intro",
    eyebrow: "FORM INDEX",
    title: "Quiet futurism demo",
    description: "Index drives a sticky stage. Scroll drives state.",
    hero: campaign.wideHero[0],
    href: "/",
  },
  {
    id: "textures",
    indexTitle: "Textures",
    eyebrow: "Material library",
    title: "Surface studies",
    description: "Controlled motion, editorial spacing.",
    hero: textures[0],
    href: "/textures",
  },
  {
    id: "campaign",
    indexTitle: "Campaign",
    eyebrow: "Wide hero / Posters",
    title: "Campaign system",
    description: "Crossfade + blur micro-motion.",
    hero: campaign.wideHero[1],
    href: "/campaign",
  },
  {
    id: "lookbook",
    indexTitle: "Lookbook",
    eyebrow: "V01 / V02",
    title: "Lookbook volumes",
    description: "Concept placement, not full-bleed.",
    hero: lookbook.v01_structure[0],
    href: "/lookbook",
  },
  {
    id: "product",
    indexTitle: "Product",
    eyebrow: "Detail set",
    title: "Product images",
    description: "Close-ups + whitespace.",
    hero: products[0],
    href: "/product",
  },
];
