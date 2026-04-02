import { motion } from "motion/react";
import SectionPageShell from "./SectionPageShell";
import { assets } from "../data/assets";

const lookbookHero = assets.lookbookCover ?? assets.lookbook01;

const volumeOne = [
  assets.lookbook01,
  assets.lookbook02,
  assets.lookbook03,
  assets.lookbook04,
  assets.lookbook05,
  assets.lookbook06,
].filter(Boolean);

const volumeTwo = [
  assets.lookbook07,
  assets.lookbook08,
  assets.lookbook09,
  assets.lookbook10,
  assets.lookbook11,
  assets.lookbook12,
].filter(Boolean);

function PortraitCard({
  src,
  alt,
  delay = 0,
  padded = true,
}: {
  src: string;
  alt?: string;
  delay?: number;
  padded?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
      className="relative overflow-hidden rounded-[30px] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,245,243,0.94))] shadow-[0_18px_52px_rgba(0,0,0,0.042)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_40%)]" />
      <div className="relative aspect-[4/5]">
        <img
          src={src}
          alt={alt ?? ""}
          className={`h-full w-full object-contain ${padded ? "p-6 md:p-8" : ""}`}
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

function VolumeHeader({
  label,
  title,
  note,
}: {
  label: string;
  title: string;
  note: string;
}) {
  return (
    <div className="grid gap-8 border-t border-zinc-200/70 pt-10 md:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.56fr)] md:gap-10 md:pt-14">
      <div>
        <div className="text-[10px] tracking-[0.24em] text-zinc-400">{label}</div>
        <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-zinc-950 md:text-4xl">
          {title}
        </h2>
      </div>

      <div>
        <p className="max-w-[34ch] text-sm leading-7 text-zinc-600 md:text-[15px] md:leading-8">
          {note}
        </p>
      </div>
    </div>
  );
}

export default function LookbookPage() {
  return (
    <SectionPageShell
      eyebrow="LOOKBOOK"
      title="Lookbook volumes"
      intro="Two distinct editorial sets build the lookbook layer: one studies structure and silhouette discipline, the other opens into softer volume and quieter spacing. Together they should feel like a composed publication, not a standard gallery."
      meta="V01 Structure / V02 Volume / portrait-led editorial sequencing"
      hero={lookbookHero}
      heroFit="contain"
      heroClassName="bg-[linear-gradient(180deg,rgba(250,250,249,0.96),rgba(242,242,240,0.92))]"
    >
      <div className="space-y-16 md:space-y-24">
        <section className="grid gap-10 border-t border-zinc-200/70 pt-10 md:grid-cols-[minmax(0,0.82fr)_minmax(280px,0.58fr)] md:gap-14 md:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[10px] tracking-[0.24em] text-zinc-400">
              EDITORIAL PRINCIPLE
            </div>

            <p className="mt-5 max-w-[34ch] text-[15px] leading-8 text-zinc-600">
              The lookbook should not read as one flat archive. It is split into two curated
              movements: a stricter structural study and a softer volume study. This separation
              gives the page hierarchy, rhythm, and a more publication-like feeling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            <div className="rounded-[24px] border border-zinc-200/80 bg-white/96 px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
              <div className="text-[10px] tracking-[0.24em] text-zinc-400">V01 / STRUCTURE</div>
              <div className="mt-3 text-sm leading-7 text-zinc-600">
                Sharper silhouette discipline, cleaner containment, editorial restraint.
              </div>
            </div>

            <div className="rounded-[24px] border border-zinc-200/80 bg-white/96 px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
              <div className="text-[10px] tracking-[0.24em] text-zinc-400">V02 / VOLUME</div>
              <div className="mt-3 text-sm leading-7 text-zinc-600">
                Softer massing, looser spacing, quieter atmosphere and drift.
              </div>
            </div>
          </motion.div>
        </section>

        <section className="space-y-8 md:space-y-10">
          <VolumeHeader
            label="V01"
            title="Structure"
            note="The first set is more restrained and architectural. Frames should feel upright, measured, and clean, with enough air around the body to emphasize silhouette logic rather than spectacle."
          />

          <div className="grid gap-6 md:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] md:gap-8">
            {volumeOne[0] ? (
              <PortraitCard
                src={volumeOne[0].src}
                alt={volumeOne[0].alt}
                delay={0}
              />
            ) : null}

            <div className="grid gap-6">
              {volumeOne[1] ? (
                <PortraitCard
                  src={volumeOne[1].src}
                  alt={volumeOne[1].alt}
                  delay={0.05}
                />
              ) : null}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="rounded-[28px] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(252,252,251,0.98),rgba(246,246,244,0.965))] px-6 py-7 shadow-[0_10px_28px_rgba(0,0,0,0.028)]"
              >
                <div className="text-[10px] tracking-[0.24em] text-zinc-400">STRUCTURE NOTE</div>
                <p className="mt-4 max-w-[26ch] text-sm leading-7 text-zinc-600">
                  The companion column acts as a pause and keeps the page from becoming just a list
                  of verticals. It preserves editorial cadence.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {volumeOne[2] ? (
              <PortraitCard src={volumeOne[2].src} alt={volumeOne[2].alt} delay={0.03} />
            ) : null}
            {volumeOne[3] ? (
              <PortraitCard src={volumeOne[3].src} alt={volumeOne[3].alt} delay={0.06} />
            ) : null}
            {volumeOne[4] ? (
              <PortraitCard src={volumeOne[4].src} alt={volumeOne[4].alt} delay={0.09} />
            ) : null}
          </div>

          {volumeOne[5] ? (
            <div className="grid gap-6 md:grid-cols-[minmax(260px,0.38fr)_minmax(0,0.62fr)] md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[28px] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(252,252,251,0.98),rgba(246,246,244,0.965))] px-6 py-7 shadow-[0_10px_28px_rgba(0,0,0,0.028)]"
              >
                <div className="text-[10px] tracking-[0.24em] text-zinc-400">SEQUENCE</div>
                <p className="mt-4 max-w-[26ch] text-sm leading-7 text-zinc-600">
                  Volume one closes with a calmer continuation rather than a climax. The feeling
                  should stay composed, measured, and architectural.
                </p>
              </motion.div>

              <PortraitCard
                src={volumeOne[5].src}
                alt={volumeOne[5].alt}
                delay={0.06}
              />
            </div>
          ) : null}
        </section>

        <section className="space-y-8 md:space-y-10">
          <VolumeHeader
            label="V02"
            title="Volume"
            note="The second set opens the system slightly. There is still restraint, but the shapes carry more softness and mass. The page should feel quieter, fuller, and more atmospheric."
          />

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {volumeTwo[0] ? (
              <PortraitCard src={volumeTwo[0].src} alt={volumeTwo[0].alt} delay={0} />
            ) : null}
            {volumeTwo[1] ? (
              <PortraitCard src={volumeTwo[1].src} alt={volumeTwo[1].alt} delay={0.05} />
            ) : null}
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[28px] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(252,252,251,0.98),rgba(246,246,244,0.965))] px-6 py-7 shadow-[0_10px_28px_rgba(0,0,0,0.028)]"
            >
              <div className="text-[10px] tracking-[0.24em] text-zinc-400">VOLUME NOTE</div>
              <p className="mt-4 max-w-[26ch] text-sm leading-7 text-zinc-600">
                This block should feel less structural and slightly more atmospheric, while keeping
                the same quiet editorial discipline.
              </p>
            </motion.div>

            {volumeTwo[2] ? (
              <PortraitCard src={volumeTwo[2].src} alt={volumeTwo[2].alt} delay={0.05} />
            ) : null}
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {volumeTwo[3] ? (
              <PortraitCard src={volumeTwo[3].src} alt={volumeTwo[3].alt} delay={0.03} />
            ) : null}
            {volumeTwo[4] ? (
              <PortraitCard src={volumeTwo[4].src} alt={volumeTwo[4].alt} delay={0.06} />
            ) : null}
            {volumeTwo[5] ? (
              <PortraitCard src={volumeTwo[5].src} alt={volumeTwo[5].alt} delay={0.09} />
            ) : null}
          </div>
        </section>
      </div>
    </SectionPageShell>
  );
}
