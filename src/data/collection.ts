import type { Img } from "./assets";
import { products, campaign, lookbook, textures } from "./assets";
import type { Lang } from "../i18n/LanguageContext";
import { collectionCopy } from "../i18n/copy";

export type CollectionStatus = "available" | "made_to_order" | "sold_out";

export type CollectionItem = {
  id: string;
  name: string;
  note?: string;
  price: string;
  status: CollectionStatus;
  thumb: Img;
};

const thumbs: Record<string, Img> = {
  "fi-01": campaign.wideHero[0],
  "fi-02": textures[0],
  "fi-03": lookbook.v01_structure[0],
  "fi-04": products[0],
};

export function getCollectionItems(lang: Lang): CollectionItem[] {
  return collectionCopy[lang].map((item) => ({
    ...item,
    thumb: thumbs[item.id],
  })) as CollectionItem[];
}
