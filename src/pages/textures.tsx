import { motion } from "motion/react";
import SectionPageShell from "./SectionPageShell";
import { assets } from "../data/assets";
import { useLanguage } from "../i18n/LanguageContext";
import { pageCopy } from "../i18n/copy";

const texturesHero = assets.texturesCover ?? assets.textures01;

const textureFrames = [
  assets.textures01,
  assets.textures02,
  assets.textures03,
  assets.textures04,
  assets.textures05,
  assets.textures06,
].filter(Boolean);

function TextureCard({
  src,
  alt,
  delay = 0,
  ratio = "aspect-[16/10]",
}: {
  src: string;
  alt?: string;
  delay?: number;
  ratio?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.992, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.76, ease: [0.22, 1, 0.36, 1], delay }}
      className="relative overflow-hidden rounded-[30px] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,244,242,0.95))] shadow-[0_18px_52px_rgba(0,0,0,0.042)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_42%)]" />
      <div className={`relative ${ratio}`}>
        <img
          src={src}
          alt={alt ?? ""}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

function TextureNote({
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay }}
      className="rounded-[28px] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(252,252,251,0.98),rgba(246,246,244,0.965))] px-6 py-7 shadow-[0_10px_28px_rgba(0,0,0,0.028)]"
    >
      <div className="text-[10px] tracking-[0.24em] text-zinc-400">{label}</div>
      <p className="mt-4 max-w-[28ch] text-sm leading-7 text-zinc-600">
        {text}
      </p>
    </motion.div>
  );
}

export default function TexturesPage() {
  const { lang } = useLanguage();
  const c = pageCopy.textures[lang];

  return (
    <SectionPageShell
      eyebrow={c.shell.eyebrow}
      title={c.shell.title}
      intro={c.shell.intro}
      meta={c.shell.meta}
      hero={texturesHero}
      heroFit="cover"
      heroClassName="bg-[linear-gradient(180deg,rgba(248,248,247,0.96),rgba(241,241,239,0.93))]"
    >
      <div className="space-y-16 md:space-y-24">
        <section className="grid gap-10 border-t border-zinc-200/70 pt-10 md:grid-cols-[minmax(0,0.82fr)_minmax(280px,0.58fr)] md:gap-14 md:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[10px] tracking-[0.24em] text-zinc-400">
              {c.noteLabel}
            </div>

            <p className="mt-5 max-w-[36ch] text-[15px] leading-8 text-zinc-600">
              {c.noteText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            <div className="rounded-[24px] border border-zinc-200/80 bg-white/96 px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
              <div className="text-[10px] tracking-[0.24em] text-zinc-400">{c.grainLabel}</div>
              <div className="mt-3 text-sm leading-7 text-zinc-600">
                {c.grainText}
              </div>
            </div>

            <div className="rounded-[24px] border border-zinc-200/80 bg-white/96 px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
              <div className="text-[10px] tracking-[0.24em] text-zinc-400">{c.foldLabel}</div>
              <div className="mt-3 text-sm leading-7 text-zinc-600">
                {c.foldText}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid gap-6 md:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] md:gap-8">
          {textureFrames[0] ? (
            <TextureCard
              src={textureFrames[0].src}
              alt={textureFrames[0].alt}
              delay={0}
              ratio="aspect-[16/10]"
            />
          ) : null}

          <div className="grid gap-6">
            {textureFrames[1] ? (
              <TextureCard
                src={textureFrames[1].src}
                alt={textureFrames[1].alt}
                delay={0.05}
                ratio="aspect-[4/5]"
              />
            ) : null}

            <TextureNote
              label={c.observationLabel}
              text={c.observationText}
              delay={0.08}
            />
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 md:gap-8">
          {textureFrames[2] ? (
            <TextureCard
              src={textureFrames[2].src}
              alt={textureFrames[2].alt}
              delay={0.03}
              ratio="aspect-[5/6]"
            />
          ) : null}

          {textureFrames[3] ? (
            <TextureCard
              src={textureFrames[3].src}
              alt={textureFrames[3].alt}
              delay={0.06}
              ratio="aspect-[5/6]"
            />
          ) : null}
        </section>

        <section className="grid gap-6 md:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] md:gap-8">
          <TextureNote
            label={c.softFieldLabel}
            text={c.softFieldText}
            delay={0.03}
          />

          {textureFrames[4] ? (
            <TextureCard
              src={textureFrames[4].src}
              alt={textureFrames[4].alt}
              delay={0.08}
              ratio="aspect-[16/10]"
            />
          ) : null}
        </section>

        {textureFrames[5] ? (
          <section>
            <TextureCard
              src={textureFrames[5].src}
              alt={textureFrames[5].alt}
              delay={0.05}
              ratio="aspect-[16/9]"
            />
          </section>
        ) : null}
      </div>
    </SectionPageShell>
  );
}
