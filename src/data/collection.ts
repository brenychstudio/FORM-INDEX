// src/data/collection.ts

import type { Img } from "./assets";
import { products, campaign, lookbook, textures } from "./assets";

export type CollectionStatus = "available" | "made_to_order" | "sold_out";

export type CollectionItem = {
  id: string;
  name: string;
  note?: string;
  price: string;
  status: CollectionStatus;
  thumb: Img;
};

export const collectionItems: CollectionItem[] = [
  {
    id: "fi-01",
    name: "Quiet Futurism Coat",
    note: "Limited run / editorial piece",
    price: "€420",
    status: "made_to_order",
    thumb: campaign.wideHero[0],
  },
  {
    id: "fi-02",
    name: "Surface Study Set",
    note: "Material-first silhouette",
    price: "€260",
    status: "available",
    thumb: textures[0],
  },
  {
    id: "fi-03",
    name: "Lookbook Volume 01",
    note: "Seasonal capsule",
    price: "€180",
    status: "available",
    thumb: lookbook.v01_structure[0],
  },
  {
    id: "fi-04",
    name: "Product Detail Piece",
    note: "Close-up / craft focus",
    price: "€140",
    status: "sold_out",
    thumb: products[0],
  },
];
