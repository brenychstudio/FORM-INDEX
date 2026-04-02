import type { StageItem } from "../../data/assets";
import { useLanguage } from "../../i18n/LanguageContext";
import { uiCopy } from "../../i18n/copy";

type ProgressMap = Partial<Record<string, number>>;

type Props = {
  items: StageItem[];
  activeId: string;
  progress: ProgressMap;
};

export default function IndexNav({ items, activeId, progress }: Props) {
  const { lang } = useLanguage();
  const t = uiCopy[lang];

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <div className="lg:sticky lg:top-16 lg:z-40">
      <div className="mb-3 text-[10px] tracking-[0.22em] text-zinc-500 md:mb-4 md:text-xs lg:mb-3">
        {t.index}
      </div>

      <div className="rounded-[24px] border border-zinc-200/70 bg-white/72 shadow-[0_10px_28px_rgba(0,0,0,0.035)] backdrop-blur-sm md:rounded-[26px] lg:max-w-[292px] lg:rounded-[15px]">
        <ul className="grid gap-2 p-3 md:p-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-1 lg:px-2.5 lg:py-1">
          {items.map((it) => {
            const isActive = it.id === activeId;
            const p = progress[it.id] ?? 0;

            return (
              <li key={it.id} className="group">
                <button
                  type="button"
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => scrollToSection(it.id)}
                  className={[
                    "flex w-full items-center gap-3 text-left transition-[background-color,border-color,opacity,transform] duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70 md:rounded-[18px] md:py-4",
                    "rounded-[16px] border border-zinc-200/60 px-3 py-3",
                    "lg:rounded-[10px] lg:px-3.5 lg:py-[7px]",
                    isActive
                      ? "bg-zinc-50/80"
                      : "bg-white/70 hover:bg-zinc-50/55 hover:border-zinc-300/70 hover:opacity-95 hover:translate-y-[-1px]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full transition-colors",
                      isActive
                        ? "bg-zinc-900"
                        : "bg-zinc-300 group-hover:bg-zinc-500",
                    ].join(" ")}
                  />

                  <span
                    className={[
                      "min-w-0 truncate text-sm",
                      isActive ? "text-zinc-950" : "text-zinc-700",
                    ].join(" ")}
                  >
                    {it.indexTitle}
                  </span>

                  {isActive ? (
                    <span className="ml-auto text-[11px] tabular-nums text-zinc-400">
                      {Math.round(p * 100)}%
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
