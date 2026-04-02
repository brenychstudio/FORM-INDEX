import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import type { StageRouteItem } from "../../data/stage";
import { useLanguage } from "../../i18n/LanguageContext";
import { uiCopy } from "../../i18n/copy";

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function pad3(n: number) {
  const s = String(n);
  return s.length >= 3 ? s : "0".repeat(3 - s.length) + s;
}

type Props = {
  item?: StageRouteItem;
  progress?: Record<string, number>;
};

export default function StickyStage({ item, progress = {} }: Props) {
  const { lang } = useLanguage();
  const t = uiCopy[lang];
  if (!item) return null;
  const currentItem = item;

  const p = clamp01(progress[currentItem.id] ?? 0);
  const portrait = currentItem.id === "lookbook" || currentItem.id === "product";

  const imgY = lerp(6, -6, p);
  const imgScale = lerp(1.003, 1.0, p);

  const frameMaxW = portrait ? "max-w-[620px]" : "max-w-[760px]";
  const frameH = portrait ? "min(70vh, 680px)" : "min(62vh, 560px)";

  return (
    <div className="mb-8 lg:mb-0 lg:sticky lg:top-16">
      <div className="relative h-[500px] overflow-hidden rounded-[28px] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,247,246,0.94))] shadow-[0_20px_64px_rgba(0,0,0,0.05)] md:h-[620px] md:rounded-[30px] lg:h-[calc(100vh-5rem)] lg:rounded-[32px]">
        <div className="flex items-center justify-between px-4 py-4 md:px-5 md:py-4 lg:px-6 lg:py-5">
          <div className="text-[10px] tracking-[0.24em] text-zinc-400">{t.formIndex}</div>
          <div className="font-mono text-[10px] tabular-nums tracking-[0.24em] text-zinc-400">
            {pad3(Math.round(p * 100))}%
          </div>
        </div>

        <div className="px-4 pb-4 md:px-5 md:pb-5 lg:px-6 lg:pb-6">
          <div className="text-base font-medium tracking-[-0.03em] text-zinc-950 md:text-lg">
            {currentItem.title}
          </div>
          {currentItem.description && (
            <div className="mt-1.5 text-sm leading-7 text-zinc-600 md:text-[15px] md:leading-8">
              {currentItem.description}
            </div>
          )}

          {currentItem.href && currentItem.href !== "/" && (
            <div className="mt-5">
              <Link
                to={currentItem.href}
                className="relative inline-flex items-center text-[10px] tracking-[0.24em] text-zinc-400 transition-[color,opacity] duration-300 hover:text-zinc-900 hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {t.openSection}
              </Link>
            </div>
          )}
        </div>

        <div className="h-px w-full bg-zinc-200/70" />

        <div className="flex h-[calc(100%-152px)] items-center justify-center px-4 md:px-6 lg:px-10">
          <motion.div
            className={[
              "relative w-full overflow-hidden rounded-[26px] border border-zinc-200/60",
              "bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]",
              frameMaxW,
            ].join(" ")}
            style={{ height: frameH }}
            animate={{ y: imgY, scale: imgScale }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                className="absolute inset-0"
                initial={{ opacity: 0, filter: "blur(6px)", transform: "scale(1.012)" }}
                animate={{ opacity: 1, filter: "blur(0px)", transform: "scale(1)" }}
                exit={{ opacity: 0, filter: "blur(4px)", transform: "scale(0.998)" }}
                transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                {portrait ? (
                  <div className="absolute inset-0 bg-white">
                    <div className="absolute inset-0 p-8">
                      <img
                        src={currentItem.hero.src}
                        alt={currentItem.hero.alt ?? ""}
                        className="h-full w-full object-contain"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={currentItem.hero.src}
                    alt={currentItem.hero.alt ?? ""}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                    loading="lazy"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent opacity-90" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
