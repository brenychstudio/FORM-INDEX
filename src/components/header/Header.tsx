import { useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProjectDrawer from "./ProjectDrawer";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
            FORM INDEX
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-sm text-zinc-700 transition-[background-color,border-color,color,transform,opacity] duration-300 hover:border-zinc-300/70 hover:bg-white hover:text-zinc-950 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300/70"
          >
            Info
          </button>
        </div>
      </header>

      <ProjectDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
