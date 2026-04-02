import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getStageItems } from "../data/stage";
import { useActiveSection } from "../hooks/useActiveSection";
import { useSectionProgress } from "../hooks/useSectionProgress";
import IndexNav from "../components/index/IndexNav";
import StickyStage from "../components/stage/StickyStage";
import DemoSection from "../components/sections/DemoSection";
import { useLanguage } from "../i18n/LanguageContext";

export default function Home() {
  const location = useLocation();
  const { lang } = useLanguage();

  const stageItems = useMemo(() => getStageItems(lang), [lang]);
  const ids = useMemo(() => stageItems.map((it) => it.id), [stageItems]);

  const activeId = useActiveSection(ids);
  const progress = useSectionProgress(ids);
  const activeItem = stageItems.find((x) => x.id === activeId) ?? stageItems[0];

  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = location.hash.replace("#", "");

    const timer = window.setTimeout(() => {
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      const el = document.getElementById(hash);
      if (!el) return;

      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <main className="mx-auto max-w-[1200px] px-6 pb-24 pt-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[344px_1fr]">
        <div className="lg:pr-3">
          <IndexNav items={stageItems} activeId={activeId} progress={progress} />

          <div className="mt-10 lg:mt-8">
            {stageItems.map((it) => (
              <DemoSection
                key={it.id}
                item={it}
                progress={progress[it.id] ?? 0}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block lg:pl-2">
          <StickyStage item={activeItem} progress={progress} />
        </div>
      </div>
    </main>
  );
}
