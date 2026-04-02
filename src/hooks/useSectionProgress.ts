import { useEffect, useMemo, useRef, useState } from "react";

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

type ProgressMap = Record<string, number>;

export function useSectionProgress(ids: string[]) {
  const key = useMemo(() => ids.join("|"), [ids.join("|")]);
  const idsRef = useRef(ids);

  idsRef.current = ids;

  const [progress, setProgress] = useState<ProgressMap>(() => {
    const init: ProgressMap = {};
    for (const id of ids) init[id] = 0;
    return init;
  });

  const targetRef = useRef<ProgressMap>({});
  const currentRef = useRef<ProgressMap>({});
  const rafRef = useRef<number | null>(null);

  const SMOOTH = 0.08;
  const EPS = 0.001;

  useEffect(() => {
    const init: ProgressMap = {};
    for (const id of idsRef.current) init[id] = 0;

    targetRef.current = init;
    currentRef.current = init;
    setProgress(init);
  }, [key]);

  useEffect(() => {
    function computeTarget() {
      const vh = window.innerHeight || 1;
      const startLine = vh * 0.65;
      const endLine = vh * 0.25;

      const next: ProgressMap = {};

      for (const id of idsRef.current) {
        const el = document.getElementById(id);

        if (!el) {
          next[id] = 0;
          continue;
        }

        const r = el.getBoundingClientRect();
        const denom = r.height + (startLine - endLine);
        const p = denom > 0 ? (startLine - r.top) / denom : 0;

        next[id] = clamp01(p);
      }

      targetRef.current = next;
    }

    function step() {
      const nextMap: ProgressMap = {};
      let shouldContinue = false;

      for (const id of idsRef.current) {
        const a = currentRef.current[id] ?? 0;
        const b = targetRef.current[id] ?? 0;
        const v = a + (b - a) * SMOOTH;

        nextMap[id] = v;

        if (Math.abs(b - v) > EPS) {
          shouldContinue = true;
        }
      }

      currentRef.current = nextMap;
      setProgress(nextMap);

      if (shouldContinue) {
        rafRef.current = window.requestAnimationFrame(step);
      } else {
        rafRef.current = null;
      }
    }

    function update() {
      computeTarget();

      if (rafRef.current == null) {
        rafRef.current = window.requestAnimationFrame(step);
      }
    }

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);

      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [key]);

  return progress;
}
