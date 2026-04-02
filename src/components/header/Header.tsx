import { useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import ProjectDrawer from "./ProjectDrawer";
import { useLanguage } from "../../i18n/LanguageContext";
import { uiCopy } from "../../i18n/copy";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang } = useLanguage();
  const t = uiCopy[lang];

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    setOpen(false);

    if (location.pathname === "/" && !location.hash) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (location.pathname === "/" && location.hash) {
      event.preventDefault();
      navigate("/");
      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 60);
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/92">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="text-[11px] tracking-[0.24em] text-zinc-500 transition-[color,opacity] duration-300 hover:text-zinc-900 hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
          >
            {t.formIndex}
          </Link>

          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center rounded-full border border-zinc-200/70 bg-white/72 p-1 shadow-[0_4px_14px_rgba(0,0,0,0.03)]">
              <button
                type="button"
                onClick={() => setLang("en")}
                className="relative rounded-full px-3 py-1.5 text-[11px] tracking-[0.18em] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
              >
                {lang === "en" && (
                  <motion.span
                    layoutId="lang-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.8 }}
                  />
                )}
                <span
                  className={[
                    "relative z-10 transition-colors duration-250",
                    lang === "en" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900",
                  ].join(" ")}
                >
                  EN
                </span>
              </button>

              <button
                type="button"
                onClick={() => setLang("es")}
                className="relative rounded-full px-3 py-1.5 text-[11px] tracking-[0.18em] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
              >
                {lang === "es" && (
                  <motion.span
                    layoutId="lang-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.8 }}
                  />
                )}
                <span
                  className={[
                    "relative z-10 transition-colors duration-250",
                    lang === "es" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900",
                  ].join(" ")}
                >
                  ES
                </span>
              </button>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-sm text-zinc-700 transition-[background-color,border-color,color,transform,opacity] duration-300 hover:border-zinc-300/70 hover:bg-white hover:text-zinc-950 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
            >
              {t.info}
            </button>
          </div>
        </div>
      </header>

      <ProjectDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
