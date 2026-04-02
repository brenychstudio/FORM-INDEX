import type { StageItem } from "./assets";
import { campaign, lookbook, products, textures } from "./assets";
import type { Lang } from "../i18n/LanguageContext";
import { stageCopy } from "../i18n/copy";

export type StageRouteItem = StageItem & {
  href?: string;
};

const stageAssets = {
  intro: { hero: campaign.wideHero[0], href: "/" },
  textures: { hero: textures[0], href: "/textures" },
  campaign: { hero: campaign.wideHero[1], href: "/campaign" },
  lookbook: { hero: lookbook.v01_structure[0], href: "/lookbook" },
  product: { hero: products[0], href: "/product" },
} as const;

export function getStageItems(lang: Lang): StageRouteItem[] {
  return stageCopy[lang].map((item) => ({
    ...item,
    ...stageAssets[item.id as keyof typeof stageAssets],
  })) as StageRouteItem[];
}
