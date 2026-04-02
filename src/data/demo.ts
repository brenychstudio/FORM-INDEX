import type { StageItem } from "./assets";

export const demoItems: StageItem[] = [
  {
    id: "intro",
    indexTitle: "Intro",
    eyebrow: "FORM INDEX",
    title: "Quiet futurism demo",
    description: "Index drives a sticky stage. Sections drive progress.",
    hero: { src: "/demo/hero-01.jpg", alt: "hero 01" },
  },
  {
    id: "materials",
    indexTitle: "Materials",
    eyebrow: "Surface",
    title: "Texture as interface",
    description: "Concept placement — not full-bleed.",
    hero: { src: "/demo/hero-02.jpg", alt: "hero 02" },
  },
  {
    id: "campaign",
    indexTitle: "Campaign",
    eyebrow: "Sequence",
    title: "Crossfade + blur micro-motion",
    description: "Stage switches per active section.",
    hero: { src: "/demo/hero-03.jpg", alt: "hero 03" },
  },
];
