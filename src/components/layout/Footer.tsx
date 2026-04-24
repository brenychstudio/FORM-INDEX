import { useLanguage } from "../../i18n/LanguageContext";
import { uiCopy } from "../../i18n/copy";
import ContentRefresh from "../ui/ContentRefresh";

export default function Footer() {
  const { lang } = useLanguage();
  const t = uiCopy[lang];

  return (
    <footer className="mt-32 border-t border-zinc-200/60">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-8 text-[11px] tracking-[0.18em] text-zinc-500 md:flex-row md:items-center md:justify-between">
        <div className="text-zinc-500">
          <ContentRefresh trigger={t.formIndex}>{t.formIndex}</ContentRefresh>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-zinc-400">
          <a
            href="mailto:info@brenych.com"
            className="transition-[color,opacity] duration-300 hover:text-zinc-800 hover:opacity-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
          >
            EMAIL
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="transition-[color,opacity] duration-300 hover:text-zinc-800 hover:opacity-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
          >
            INSTAGRAM
          </a>

          <a
            href="https://brenychstudio.com/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 transition-[color,opacity] duration-300 hover:text-zinc-800 hover:opacity-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
            aria-label="Design and development by brenychstudio"
          >
            Design & development — brenychstudio
          </a>

          <span className="text-zinc-400">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
