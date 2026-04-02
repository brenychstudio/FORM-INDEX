import { motion } from "motion/react";
import ContentRefresh from "../components/ui/ContentRefresh";
import SectionPageShell from "./SectionPageShell";
import { assets } from "../data/assets";
import { useLanguage } from "../i18n/LanguageContext";
import { pageCopy } from "../i18n/copy";

const campaignHero = assets.campaignCover ?? assets.campaign01;

const campaignFrames = [
  assets.campaign01,
  assets.campaign02,
  assets.campaign03,
  assets.campaign04,
  assets.campaign05,
  assets.campaign06,
].filter(Boolean);

function CampaignFrame({
  src,
  alt,
  delay = 0,
  ratio = "aspect-[16/10]",
  padded = false,
}: {
  src: string;
  alt?: string;
  delay?: number;
  ratio?: string;
  padded?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.992, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay }}
      className="relative overflow-hidden rounded-[30px] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,245,243,0.94))] shadow-[0_18px_52px_rgba(0,0,0,0.042)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_42%)]" />
      <div className={`relative ${ratio}`}>
        <img
          src={src}
          alt={alt ?? ""}
          className={`h-full w-full ${padded ? "object-contain p-6 md:p-8" : "object-cover"}`}
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

function NoteBlock({
  label,
  text,
  delay = 0,
}: {
  label: string;
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1], delay }}
      className="rounded-[28px] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(252,252,251,0.98),rgba(246,246,244,0.965))] px-6 py-7 shadow-[0_10px_28px_rgba(0,0,0,0.028)]"
    >
      <div className="text-[10px] tracking-[0.24em] text-zinc-400">
        <ContentRefresh trigger={label}>{label}</ContentRefresh>
      </div>
      <p className="mt-4 max-w-[28ch] text-sm leading-7 text-zinc-600">
        <ContentRefresh trigger={text}>{text}</ContentRefresh>
      </p>
    </motion.div>
  );
}

export default function CampaignPage() {
  const { lang } = useLanguage();
  const c = pageCopy.campaign[lang];

  return (
    <SectionPageShell
      eyebrow={c.shell.eyebrow}
      title={c.shell.title}
      intro={c.shell.intro}
      meta={c.shell.meta}
      hero={campaignHero}
      heroFit="cover"
      heroClassName="bg-[linear-gradient(180deg,rgba(248,248,247,0.96),rgba(241,241,239,0.92))]"
    >
      <div className="space-y-16 md:space-y-24">
        <section className="grid gap-10 border-t border-zinc-200/70 pt-10 md:grid-cols-[minmax(0,0.82fr)_minmax(280px,0.58fr)] md:gap-14 md:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[10px] tracking-[0.24em] text-zinc-400">
              <ContentRefresh trigger={c.noteLabel}>{c.noteLabel}</ContentRefresh>
            </div>

            <p className="mt-5 max-w-[36ch] text-[15px] leading-8 text-zinc-600">
              <ContentRefresh trigger={c.noteText}>{c.noteText}</ContentRefresh>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            <div className="rounded-[24px] border border-zinc-200/80 bg-white/96 px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
              <div className="text-[10px] tracking-[0.24em] text-zinc-400">
                <ContentRefresh trigger={c.wideSpreadLabel}>{c.wideSpreadLabel}</ContentRefresh>
              </div>
              <div className="mt-3 text-sm leading-7 text-zinc-600">
                <ContentRefresh trigger={c.wideSpreadText}>{c.wideSpreadText}</ContentRefresh>
              </div>
            </div>

            <div className="rounded-[24px] border border-zinc-200/80 bg-white/96 px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
              <div className="text-[10px] tracking-[0.24em] text-zinc-400">
                <ContentRefresh trigger={c.pacingLabel}>{c.pacingLabel}</ContentRefresh>
              </div>
              <div className="mt-3 text-sm leading-7 text-zinc-600">
                <ContentRefresh trigger={c.pacingText}>{c.pacingText}</ContentRefresh>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="space-y-6 md:space-y-8">
          {campaignFrames[0] ? (
            <CampaignFrame
              src={campaignFrames[0].src}
              alt={campaignFrames[0].alt}
              delay={0}
              ratio="aspect-[16/9]"
            />
          ) : null}

          <div className="grid gap-6 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:gap-8">
            <NoteBlock
              label={c.atmosphereLabel}
              text={c.atmosphereText}
              delay={0.03}
            />

            {campaignFrames[1] ? (
              <CampaignFrame
                src={campaignFrames[1].src}
                alt={campaignFrames[1].alt}
                delay={0.08}
                ratio="aspect-[16/10]"
              />
            ) : null}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 md:gap-8">
          {campaignFrames[2] ? (
            <CampaignFrame
              src={campaignFrames[2].src}
              alt={campaignFrames[2].alt}
              delay={0.02}
              ratio="aspect-[5/6]"
            />
          ) : null}

          {campaignFrames[3] ? (
            <CampaignFrame
              src={campaignFrames[3].src}
              alt={campaignFrames[3].alt}
              delay={0.06}
              ratio="aspect-[5/6]"
            />
          ) : null}
        </section>

        <section className="grid gap-6 md:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] md:gap-8">
          {campaignFrames[4] ? (
            <CampaignFrame
              src={campaignFrames[4].src}
              alt={campaignFrames[4].alt}
              delay={0.02}
              ratio="aspect-[16/10]"
            />
          ) : null}

          <NoteBlock
            label={c.spreadLogicLabel}
            text={c.spreadLogicText}
            delay={0.07}
          />
        </section>

        {campaignFrames[5] ? (
          <section>
            <CampaignFrame
              src={campaignFrames[5].src}
              alt={campaignFrames[5].alt}
              delay={0.04}
              ratio="aspect-[16/9]"
            />
          </section>
        ) : null}
      </div>
    </SectionPageShell>
  );
}
