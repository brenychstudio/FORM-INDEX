import { useEffect, useMemo, useRef, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const key = useMemo(() => sectionIds.join("|"), [sectionIds]);
  const sectionIdsRef = useRef(sectionIds);
  sectionIdsRef.current = sectionIds;

  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const activeRef = useRef(activeId);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    activeRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    if (!sectionIdsRef.current.length) return;

    if (!activeRef.current && sectionIdsRef.current[0]) {
      setActiveId(sectionIdsRef.current[0]);
      activeRef.current = sectionIdsRef.current[0];
    }

    const getEl = (id: string) => document.getElementById(id);

    const compute = () => {
      const vh = window.innerHeight || 1;
      const focusY = vh * 0.42;
      const hysteresisPx = vh * 0.08;
      const scrollTop = window.scrollY || window.pageYOffset || 0;
      const docHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight || 0;
      const viewportBottom = scrollTop + vh;

      // force the last section when user reaches the bottom zone
      if (docHeight > 0 && viewportBottom >= docHeight - 24) {
        const lastId = sectionIdsRef.current[sectionIdsRef.current.length - 1];
        if (lastId && activeRef.current !== lastId) {
          activeRef.current = lastId;
          setActiveId(lastId);
        }
        return;
      }

      let bestId = activeRef.current || sectionIdsRef.current[0];
      let bestDist = Number.POSITIVE_INFINITY;

      for (const id of sectionIdsRef.current) {
        const el = getEl(id);
        if (!el) continue;

        const r = el.getBoundingClientRect();

        const dist =
          focusY < r.top
            ? r.top - focusY
            : focusY > r.bottom
              ? focusY - r.bottom
              : 0;

        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }

      const currentId = activeRef.current;
      if (!currentId) {
        activeRef.current = bestId;
        setActiveId(bestId);
        return;
      }

      if (bestId === currentId) return;

      const currentEl = getEl(currentId);
      if (!currentEl) {
        activeRef.current = bestId;
        setActiveId(bestId);
        return;
      }

      const cr = currentEl.getBoundingClientRect();
      const currentDist =
        focusY < cr.top
          ? cr.top - focusY
          : focusY > cr.bottom
            ? focusY - cr.bottom
            : 0;

      if (bestDist + hysteresisPx < currentDist) {
        activeRef.current = bestId;
        setActiveId(bestId);
      }
    };

    const onScrollResize = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;
        compute();
      });
    };

    compute();

    window.addEventListener("scroll", onScrollResize, { passive: true });
    window.addEventListener("resize", onScrollResize);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      window.removeEventListener("scroll", onScrollResize);
      window.removeEventListener("resize", onScrollResize);
    };
  }, [key]);

  return activeId;
}
