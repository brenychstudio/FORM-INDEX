import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { collectionItems } from "../../data/collection";
import { stageItems } from "../../data/stage";

type Props = {
  open: boolean;
  onClose: () => void;
};

const statusStyles: Record<string, string> = {
  available: "border-zinc-200 bg-white text-zinc-700",
  made_to_order: "border-zinc-200 bg-white text-zinc-700",
  sold_out: "border-zinc-200 bg-white text-zinc-700",
};

const collectionToStageId: Record<string, string> = {
  "fi-01": "intro",
  "fi-02": "textures",
  "fi-03": "lookbook",
  "fi-04": "product",
  // add more mappings here when you extend the Collection
};

function StatusPill({ status }: { status: string }) {
  const label =
    status === "made_to_order"
      ? "Made to order"
      : status === "sold_out"
      ? "Sold out"
      : "Available";

  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px]",
        "border",
        statusStyles[status] ?? "border-zinc-200 bg-white text-zinc-700",
      ].join(" ")}
    >
      {label}
    </span>
  );
}

const INQUIRE_EMAIL = "info@brenych.com";
const sectionLinks = stageItems.filter((item) => item.href && item.href !== "/");

function buildMailto(itemId: string, itemName: string) {
  const subject = encodeURIComponent(`Collection inquiry — ${itemName}`);
  const body = encodeURIComponent(
    `Hello,\n\nI'm interested in:\n— ${itemName} (${itemId})\n\nSize / availability / details:\n\nThank you.`
  );
  return `mailto:${INQUIRE_EMAIL}?subject=${subject}&body=${body}`;
}

export default function ProjectDrawer({ open, onClose }: Props) {
  const [tab, setTab] = useState<"collection" | "info">("collection");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!open) return;
    setTab("collection");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const tabs = useMemo(
    () => [
      { id: "collection" as const, label: "Collection" },
      { id: "info" as const, label: "Info" },
    ],
    []
  );

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* overlay */}
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-white/28 backdrop-blur-[6px] transition-opacity duration-300"
          />

          {/* panel */}
          <motion.aside
            className="absolute right-0 top-0 h-full w-[min(92vw,520px)] overflow-hidden rounded-l-[24px] border-l border-neutral-200/70 bg-white/62 backdrop-blur-xl shadow-[0_18px_48px_rgba(0,0,0,0.06)]"
            initial={{ x: 28, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 24, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-full flex-col">
              {/* header */}
              <div className="px-6 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] tracking-[0.22em] text-zinc-500">
                      FORM INDEX
                    </div>
                    <div className="mt-2 text-lg font-medium text-zinc-950">
                      Selected pieces
                    </div>
                    <div className="mt-1 text-sm text-zinc-600">
                      Inquiry-only. No checkout.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-zinc-200/70 bg-white/65 px-3 py-1.5 text-sm text-zinc-700 transition-[background-color,border-color,color,transform,opacity] duration-300 hover:border-zinc-300/70 hover:bg-white hover:text-zinc-950 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
                  >
                    Close
                  </button>
                </div>

                {/* tabs */}
                <div className="mt-5 inline-flex rounded-full border border-zinc-200/70 bg-white/55 p-1">
                  {tabs.map((t) => {
                    const active = tab === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTab(t.id)}
                        className={[
                          "rounded-full px-3 py-1.5 text-xs transition-[background-color,color,opacity,transform,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70",
                          active
                            ? "bg-white text-zinc-900 shadow-[0_1px_6px_rgba(0,0,0,0.05)]"
                            : "text-zinc-600 hover:text-zinc-900 hover:opacity-90 hover:translate-y-[-1px]",
                        ].join(" ")}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-zinc-200/60" />

              {/* body */}
              <div className="flex-1 overflow-auto px-6 py-6">
                {tab === "collection" ? (
                  <>
                    <ul className="space-y-3">
                      {collectionItems.map((it) => {
                        const targetId = collectionToStageId[it.id];
                        const navigable = Boolean(targetId);

                        function closeAndScroll() {
                          if (!targetId) return;

                          onClose();

                          const targetHash = targetId === "intro" ? "" : `#${targetId}`;
                          const targetHref = targetId === "intro" ? "/" : `/${targetHash}`;

                          if (location.pathname === "/" && location.hash === targetHash) {
                            window.setTimeout(() => {
                              const el = document.getElementById(targetId);
                              if (!el) return;

                              const top = el.getBoundingClientRect().top + window.scrollY - 96;
                              window.scrollTo({ top, behavior: "smooth" });
                            }, 60);

                            return;
                          }

                          navigate(targetHref);
                        }

                        return (
                          <li key={it.id}>
                            <div
                              role={navigable ? "button" : undefined}
                              tabIndex={navigable ? 0 : undefined}
                              onClick={navigable ? closeAndScroll : undefined}
                              onKeyDown={
                                navigable
                                  ? (e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        closeAndScroll();
                                      }
                                    }
                                  : undefined
                              }
                              className={[
                                "rounded-2xl border border-zinc-200/70 bg-white/55 p-3 transition-[background-color,border-color,transform,opacity,box-shadow] duration-300",
                                navigable
                                  ? "cursor-pointer hover:border-zinc-300/70 hover:bg-white/72 hover:translate-y-[-1px] hover:shadow-[0_8px_22px_rgba(0,0,0,0.04)]"
                                  : "",
                              ].join(" ")}
                            >
                              <div className="flex gap-4">
                                <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-white/70 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.03)]">
                                  <img
                                    src={it.thumb.src}
                                    alt=""
                                    className="h-full w-full object-cover"
                                    draggable={false}
                                    loading="lazy"
                                  />
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                      <div className="truncate text-sm font-medium text-zinc-950">
                                        {it.name}
                                      </div>
                                      <div className="mt-0.5 text-xs text-zinc-600">
                                        {it.note ?? "—"}
                                      </div>
                                    </div>

                                    <div className="shrink-0 text-xs tabular-nums text-zinc-600">
                                      {it.price}
                                    </div>
                                  </div>

                                  <div className="mt-2 flex items-center justify-between">
                                    <StatusPill status={it.status} />

                                    <a
                                      href={buildMailto(it.id, it.name)}
                                      onClick={(e) => e.stopPropagation()}
                                      className={[
                                        "inline-flex items-center rounded-full px-3 py-1 text-xs",
                                        "border border-zinc-200/80 bg-white/72 text-zinc-800",
                                        "transition-[background-color,border-color,color,transform,opacity] duration-300",
                                        "hover:border-zinc-300/70 hover:bg-white hover:text-zinc-950 hover:translate-y-[-1px]",
                                        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70",
                                      ].join(" ")}
                                    >
                                      Inquire
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-6 rounded-2xl border border-zinc-200/70 bg-white/45 p-5 md:p-6">
                      <div className="text-[11px] tracking-[0.22em] text-zinc-500">
                        NOTE
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        This is a curated preview. For sizing, availability and
                        custom requests — use “Inquire”.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-zinc-200/70 bg-white/45 p-5 md:p-6">
                      <div className="text-[11px] tracking-[0.22em] text-zinc-500">
                        INFO
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        A quiet futurism capsule: material studies, editorial
                        silhouettes, and controlled motion language.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-200/70 bg-white/45 p-5 md:p-6">
                      <div className="text-[11px] tracking-[0.22em] text-zinc-500">
                        PAGES
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {sectionLinks.map((item) => (
                          <Link
                            key={item.id}
                            to={item.href!}
                            onClick={() => onClose()}
                            className="rounded-full border border-zinc-200/80 bg-white/72 px-3 py-1.5 text-[11px] tracking-[0.18em] text-zinc-600 transition-[background-color,border-color,color,transform,opacity] duration-300 hover:border-zinc-300/70 hover:bg-white hover:text-zinc-900 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
                          >
                            {item.indexTitle}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-zinc-200/70 bg-white/45 p-5 md:p-6">
                      <div className="text-[11px] tracking-[0.22em] text-zinc-500">
                        CONTACT
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        For inquiries:{" "}
                        <a
                          className="underline decoration-zinc-300 underline-offset-4 transition-[color,opacity,text-decoration-color] duration-300 hover:text-zinc-900 hover:decoration-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
                          href={`mailto:${INQUIRE_EMAIL}`}
                        >
                          {INQUIRE_EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
