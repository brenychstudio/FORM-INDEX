import { useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/78 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="text-[11px] tracking-[0.24em] text-zinc-500 transition-[color,opacity] duration-300 hover:text-zinc-900 hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
          >
            {t.formIndex}
          </Link>

          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-full border border-zinc-200/70 bg-white/70 p-1">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={[
                  "rounded-full px-2.5 py-1 text-[11px] tracking-[0.18em] transition-[background-color,color,opacity] duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70",
                  lang === "en"
                    ? "bg-white text-zinc-900 shadow-[0_1px_6px_rgba(0,0,0,0.05)]"
                    : "text-zinc-500 hover:text-zinc-900",
                ].join(" ")}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => setLang("es")}
                className={[
                  "rounded-full px-2.5 py-1 text-[11px] tracking-[0.18em] transition-[background-color,color,opacity] duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70",
                  lang === "es"
                    ? "bg-white text-zinc-900 shadow-[0_1px_6px_rgba(0,0,0,0.05)]"
                    : "text-zinc-500 hover:text-zinc-900",
                ].join(" ")}
              >
                ES
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
