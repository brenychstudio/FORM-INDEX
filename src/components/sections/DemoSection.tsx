import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ContentRefresh from "../ui/ContentRefresh";
import type { StageRouteItem } from "../../data/stage";
import { campaign, lookbook, products, textures } from "../../data/assets";
import { useLanguage } from "../../i18n/LanguageContext";
import { uiCopy } from "../../i18n/copy";

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function getFrames(item: StageRouteItem) {
  switch (item.id) {
    case "intro":
      return [campaign.wideHero[0], campaign.wideHero[1]];
    case "textures":
      return [textures[0], textures[1], textures[2]];
    case "campaign":
      return [campaign.posters[0], campaign.posters[1]];
    case "lookbook":
      return [lookbook.v01_structure[0], lookbook.v01_structure[1]];
    case "product":
      return [products[0], products[1]];
    default:
      return [item.hero];
  }
}

export default function DemoSection({
  item,
  progress = 0,
}: {
  item: StageRouteItem;
  progress?: number;
}) {
  const p = easeOutCubic(clamp01(progress));
  const frames = getFrames(item);
  const { lang } = useLanguage();
  const t = uiCopy[lang];

  const portrait = item.id === "lookbook" || item.id === "product";
  const fitCls = portrait ? "object-contain" : "object-cover";
  const padCls = portrait ? "p-5 md:p-7 lg:p-6" : "";

  const backY = lerp(12, -12, p);
  const midY = lerp(18, -18, p);
  const frontY = lerp(24, -24, p);

  const backScale = lerp(0.992, 1.0, p);
  const midScale = lerp(0.988, 1.0, p);
  const frontScale = lerp(0.984, 1.0, p);

  const backBlur = lerp(1.25, 0, p);
  const midBlur = lerp(2, 0, p);
  const frontBlur = lerp(2.75, 0, p);

  const stackH = portrait
    ? "h-[390px] md:h-[460px] lg:h-[380px]"
    : "h-[315px] md:h-[360px] lg:h-[320px]";

  const backCardBox = portrait
    ? "left-0 top-12 h-[272px] w-[194px] md:top-12 md:h-[340px] md:w-[236px] lg:top-6 lg:h-[300px] lg:w-[210px]"
    : "left-0 top-14 h-[205px] w-[252px] md:top-14 md:h-[250px] md:w-[320px] lg:top-8 lg:h-[210px] lg:w-[250px]";

  const midCardBox = portrait
    ? "left-[104px] top-0 h-[302px] w-[220px] md:left-[124px] md:h-[380px] md:w-[272px] lg:left-[96px] lg:h-[330px] lg:w-[228px]"
    : "left-18 top-7 h-[214px] w-[264px] md:left-[74px] md:top-8 md:h-[270px] md:w-[330px] lg:left-16 lg:top-4 lg:h-[220px] lg:w-[258px]";

  const frontCardBox =
    "absolute left-0 top-0 h-[144px] w-[144px] md:left-0 md:top-0 md:h-[176px] md:w-[176px] lg:-left-1 lg:-top-3 lg:h-[156px] lg:w-[156px]";

  const stackMtCls =
    item.id === "textures" ? "mt-12 lg:mt-10" : "mt-9 lg:mt-8";

  return (
    <section id={item.id} className="scroll-mt-24 pb-24">
      <div className="text-[11px] tracking-[0.24em] text-zinc-500">
        <ContentRefresh trigger={item.eyebrow ?? ""}>{item.eyebrow}</ContentRefresh>
      </div>

      <h2 className="mt-3 text-2xl font-medium tracking-tight text-zinc-950 lg:max-w-[270px]">
        {item.href && item.href !== "/" ? (
          <Link
            to={item.href}
            className="text-left transition-[color,opacity] duration-300 hover:text-zinc-700 hover:opacity-85 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
          >
            <ContentRefresh trigger={item.title}>{item.title}</ContentRefresh>
          </Link>
        ) : (
          <ContentRefresh trigger={item.title}>{item.title}</ContentRefresh>
        )}
      </h2>

      {item.description && (
        <p className="mt-2 max-w-[44ch] text-sm leading-6 text-zinc-600 lg:max-w-[270px]">
          <ContentRefresh trigger={item.description ?? ""}>{item.description}</ContentRefresh>
        </p>
      )}

      <div className="mt-6 h-px w-full bg-zinc-200/70 lg:max-w-[270px]" />

      {item.href && item.href !== "/" && (
        <div className="mt-6 md:mt-10 lg:mt-7">
          <Link
            to={item.href}
            className="relative inline-flex items-center text-[11px] tracking-[0.18em] text-neutral-400 transition-[color,opacity] duration-300 hover:text-neutral-900 hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full"
          >
            <ContentRefresh trigger={`open-page-${item.id}`}>{t.openPage}</ContentRefresh>
          </Link>
        </div>
      )}

      <div className={stackMtCls}>
        <motion.div
          className={[
            "relative mx-auto w-[320px] rounded-[28px] md:w-[420px] lg:mx-0 lg:w-[300px]",
            stackH,
          ].join(" ")}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {frames[0] && (
            <motion.div
              className={[
                "absolute overflow-hidden rounded-[26px] will-change-transform",
                "border border-white/70 bg-white shadow-[0_16px_50px_rgba(0,0,0,0.10)]",
                backCardBox,
                padCls,
              ].join(" ")}
              animate={{ y: backY, scale: backScale }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{ filter: `blur(${backBlur}px)` }}
            >
              <img
                src={frames[0].src}
                alt={frames[0].alt ?? ""}
                className={["h-full w-full", fitCls].join(" ")}
                loading="lazy"
                draggable={false}
              />
            </motion.div>
          )}

          {frames[1] && (
            <motion.div
              className={[
                "absolute overflow-hidden rounded-[26px] will-change-transform",
                "border border-white/70 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.12)]",
                midCardBox,
                padCls,
              ].join(" ")}
              animate={{ y: midY, scale: midScale }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{ filter: `blur(${midBlur}px)` }}
            >
              <img
                src={frames[1].src}
                alt={frames[1].alt ?? ""}
                className={["h-full w-full", fitCls].join(" ")}
                loading="lazy"
                draggable={false}
              />
            </motion.div>
          )}

          {frames[2] && (
            <motion.div
              className={[
                frontCardBox,
                "overflow-hidden rounded-[24px] border border-white/75 bg-white will-change-transform",
                "shadow-[0_18px_70px_rgba(0,0,0,0.14)]",
              ].join(" ")}
              animate={{ y: frontY, scale: frontScale }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{ filter: `blur(${frontBlur}px)` }}
            >
              <img
                src={frames[2].src}
                alt={frames[2].alt ?? ""}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
