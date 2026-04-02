export type Img = { src: string; alt?: string };

// Alias для collection.ts (щоб import type { AssetItem } працював)
export type AssetItem = Img;

const BASE = "/media";
const pad2 = (n: number) => String(n).padStart(2, "0");
const img = (path: string, alt?: string): Img => ({ src: `${BASE}/${path}`, alt });

const seq = (dir: string, prefix: string, from: number, to: number, ext = "png") =>
  Array.from({ length: to - from + 1 }, (_, i) => {
    const n = from + i;
    return img(`${dir}/${prefix}-${pad2(n)}.${ext}`);
  });

export const textures = seq("textures", "tx", 1, 6);
export const products = seq("product", "p", 1, 12);

export const campaign = {
  wideHero: seq("campaign/wide-hero", "wh", 1, 3),
  posters: seq("campaign/posters", "ps", 1, 3),
};

export const lookbook = {
  v01_structure: seq("lookbook/v01-structure", "lb", 1, 6),
  v02_volume: seq("lookbook/v02-volume", "lb", 7, 12),
};

export const assets = {
  campaignCover: img("campaign/wide-hero/wh-01.png", "Campaign cover frame"),

  campaign01: img("campaign/wide-hero/wh-01.png", "Campaign frame 01"),
  campaign02: img("campaign/wide-hero/wh-02.png", "Campaign frame 02"),
  campaign03: img("campaign/wide-hero/wh-03.png", "Campaign frame 03"),
  campaign04: img("campaign/posters/ps-01.png", "Campaign frame 04"),
  campaign05: img("campaign/posters/ps-02.png", "Campaign frame 05"),
  campaign06: img("campaign/posters/ps-03.png", "Campaign frame 06"),

  productCover: img("product/p-01.png", "Product cover frame"),

  product01: img("product/p-01.png", "Product frame 01"),
  product02: img("product/p-02.png", "Product frame 02"),
  product03: img("product/p-03.png", "Product frame 03"),
  product04: img("product/p-04.png", "Product frame 04"),
  product05: img("product/p-05.png", "Product frame 05"),
  product06: img("product/p-06.png", "Product frame 06"),

  texturesCover: img("textures/tx-01.png", "Textures cover frame"),

  textures01: img("textures/tx-01.png", "Texture frame 01"),
  textures02: img("textures/tx-02.png", "Texture frame 02"),
  textures03: img("textures/tx-03.png", "Texture frame 03"),
  textures04: img("textures/tx-04.png", "Texture frame 04"),
  textures05: img("textures/tx-05.png", "Texture frame 05"),
  textures06: img("textures/tx-06.png", "Texture frame 06"),

  lookbookCover: img("lookbook/v01-structure/lb-01.png", "Lookbook cover frame"),

  lookbook01: img("lookbook/v01-structure/lb-01.png", "Lookbook structure 01"),
  lookbook02: img("lookbook/v01-structure/lb-02.png", "Lookbook structure 02"),
  lookbook03: img("lookbook/v01-structure/lb-03.png", "Lookbook structure 03"),
  lookbook04: img("lookbook/v01-structure/lb-04.png", "Lookbook structure 04"),
  lookbook05: img("lookbook/v01-structure/lb-05.png", "Lookbook structure 05"),
  lookbook06: img("lookbook/v01-structure/lb-06.png", "Lookbook structure 06"),

  lookbook07: img("lookbook/v02-volume/lb-07.png", "Lookbook volume 07"),
  lookbook08: img("lookbook/v02-volume/lb-08.png", "Lookbook volume 08"),
  lookbook09: img("lookbook/v02-volume/lb-09.png", "Lookbook volume 09"),
  lookbook10: img("lookbook/v02-volume/lb-10.png", "Lookbook volume 10"),
  lookbook11: img("lookbook/v02-volume/lb-11.png", "Lookbook volume 11"),
  lookbook12: img("lookbook/v02-volume/lb-12.png", "Lookbook volume 12"),
} as const;

export type StageItem = {
  id: string;
  indexTitle: string;
  eyebrow?: string;
  title: string;
  description?: string;
  hero: Img;
  href?: "/" | "/lookbook" | "/campaign" | "/product" | "/textures";
};
