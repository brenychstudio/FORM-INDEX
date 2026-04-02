import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { Img } from "../data/assets";
import { getPageLinks, homeHref, sectionForPath } from "../app/navigation";
import { useLanguage } from "../i18n/LanguageContext";
import { uiCopy } from "../i18n/copy";

type SectionPageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  meta?: string;
  hero: Img;
  heroAlt?: string;
  heroFit?: "cover" | "contain";
  heroClassName?: string;
  children?: ReactNode;
};

export default function SectionPageShell({
  eyebrow,
  title,
  intro,
  meta,
  hero,
  heroAlt,
  heroFit = "cover",
  heroClassName,
  children,
}: SectionPageShellProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = uiCopy[lang];

  const currentSection = sectionForPath(location.pathname);
  const backHref = homeHref(currentSection);
  const siblingPages = getPageLinks(lang).filter((item) => item.href !== location.pathname);

  function handleBackToIndex(event: React.MouseEvent<HTMLAnchorElement>) {
    const targetHash = currentSection === "intro" ? "" : `#${currentSection}`;

    if (location.pathname === "/" && location.hash === targetHash) {
      event.preventDefault();

      if (!targetHash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const el = document.getElementById(currentSection);
      if (!el) return;

      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
      return;
    }

    if (location.pathname === "/" && location.hash !== targetHash) {
      event.preventDefault();
      navigate(backHref);
    }
  }

  const fitClass =
    heroFit === "contain"
      ? "object-contain p-8 md:p-12 lg:p-14"
      : "object-cover";

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-10 md:py-16 lg:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        <section className="border-b border-zinc-200/70 pb-6 md:pb-7">
          <div className="flex items-center justify-between gap-4">
            <Link
              to={backHref}
              onClick={handleBackToIndex}
              className="text-[10px] tracking-[0.22em] text-zinc-400 transition hover:text-zinc-800"
            >
              {t.backToIndex}
            </Link>

            <div className="hidden text-[10px] tracking-[0.24em] text-zinc-400 md:block">
              {t.formIndex}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 md:mt-7">
            {siblingPages.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="rounded-full border border-zinc-200/80 bg-white/75 px-3 py-1.5 text-[10px] tracking-[0.18em] text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="pt-10 md:pt-14">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.56fr)] md:gap-10 lg:gap-14">
            <div>
              <div className="text-[10px] tracking-[0.26em] text-zinc-400">
                {eyebrow}
              </div>

              <h1 className="mt-5 max-w-[10ch] text-4xl font-medium tracking-[-0.05em] text-zinc-950 md:text-6xl lg:text-[4.5rem] lg:leading-[0.94]">
                {title}
              </h1>
            </div>

            <div className="md:pt-1 lg:pt-2">
              <p className="max-w-[34ch] text-sm leading-7 text-zinc-600 md:text-[15px] md:leading-8">
                {intro}
              </p>

              {meta ? (
                <div className="mt-6 text-[10px] tracking-[0.24em] text-zinc-400">
                  {meta}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="mt-10 md:mt-14 lg:mt-16">
          <div className="relative overflow-hidden rounded-[32px] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,247,246,0.94))] shadow-[0_22px_72px_rgba(0,0,0,0.05)] md:rounded-[36px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_42%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />

            <motion.div
              initial={{ opacity: 0, scale: 0.988, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
              className={["relative aspect-[16/10] md:aspect-[16/9]", heroClassName]
                .filter(Boolean)
                .join(" ")}
            >
              <img
                src={hero.src}
                alt={heroAlt ?? hero.alt ?? ""}
                className={`h-full w-full ${fitClass}`}
                draggable={false}
              />
            </motion.div>
          </div>
        </section>

        {children ? (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="mt-12 md:mt-16 lg:mt-[4.5rem]"
          >
            {children}
          </motion.section>
        ) : null}
      </motion.div>
    </main>
  );
}
