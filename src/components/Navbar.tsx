import { useEffect, useRef, useState } from "react";
import { Menu, Shield, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/dossier";

/**
 * Presentation-only grouping of the existing anchors so a judge can see the
 * dossier's structure in the drawer. Same ids, same labels, same order —
 * nothing added, nothing removed.
 */
const NAV_GROUPS: { label: string; ids: string[] }[] = [
  { label: "Overview", ids: ["problem", "solution"] },
  { label: "Platform", ids: ["gis", "cases", "documents"] },
  { label: "Operations", ids: ["workflow"] },
  { label: "Technical", ids: ["architecture", "roadmap"] },
];

const NAV_BY_ID = new Map(NAV_ITEMS.map((item) => [item.id, item]));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  /* Thin shadow once the document has moved off the hero. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently in view. */
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: [0.01, 0.25, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* Drawer: close on Escape, trap focus, lock body scroll, restore focus. */
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const raf = requestAnimationFrame(() => {
      drawerRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    });

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      cancelAnimationFrame(raf);
      toggleRef.current?.focus();
      previouslyFocused?.focus?.();
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // Let the drawer close before the scroll so focus restoration is correct.
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-50 border-b bg-white/92 backdrop-blur-md transition-shadow ${
          scrolled ? "border-rule shadow-[0_1px_12px_rgba(15,35,64,0.09)]" : "border-transparent"
        }`}
      >
        <div className="tricolor-rule" aria-hidden />
        <nav aria-label="Section navigation" className="mx-auto flex h-[58px] max-w-dossier items-center gap-4 px-5 sm:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Terranex — back to top">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-900 text-white">
              <Shield className="h-4 w-4" aria-hidden />
            </span>
            <span className="text-[15px] font-bold tracking-[-0.01em] text-navy-900">TERRANEX</span>
          </a>

          <ul className="ml-auto hidden items-center gap-0.5 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.id);
                  }}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`relative block rounded px-2.5 py-1.5 text-[13px] font-medium transition-colors ${
                    active === item.id
                      ? "text-navy-900"
                      : "text-slate-600 hover:text-navy-900"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-2.5 -bottom-[1px] h-[2px] rounded-full bg-saffron-500 transition-opacity ${
                      active === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <span className="label-caps hidden rounded-sm border border-rule bg-slate-50 px-2 py-1 text-slate-500 xl:inline">
              SIH 2026 · PS 26016
            </span>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-rule text-navy-900 transition-colors hover:bg-slate-50 lg:hidden"
            >
              <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
              {open ? <X className="h-[18px] w-[18px]" aria-hidden /> : <Menu className="h-[18px] w-[18px]" aria-hidden />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open ? (
        <div className="fixed inset-0 z-[55] lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/45 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            ref={drawerRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Section navigation"
            className="absolute inset-y-0 right-0 flex w-[86%] max-w-[340px] flex-col border-l border-rule bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-rule px-5 py-[18px]">
              <span className="text-sm font-bold tracking-tight text-navy-900">TERRANEX</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-rule text-navy-900"
              >
                <span className="sr-only">Close navigation</span>
                <X className="h-[18px] w-[18px]" aria-hidden />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto px-3 py-3">
              {NAV_GROUPS.map((group) => (
                <li key={group.label}>
                  <p className="label-caps px-3 pb-1.5 pt-3 text-slate-400 first:pt-1">
                    {group.label}
                  </p>
                  <ul>
                    {group.ids.map((id) => {
                      const item = NAV_BY_ID.get(id);
                      if (!item) return null;
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              go(item.id);
                            }}
                            className={`flex items-center justify-between rounded-md px-3 py-3 text-[15px] font-medium transition-colors ${
                              active === item.id
                                ? "bg-navy-50 text-navy-900"
                                : "text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            {item.label}
                            {active === item.id ? (
                              <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" aria-hidden />
                            ) : null}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="border-t border-rule px-5 py-4">
              <p className="label-caps text-slate-400">Smart India Hackathon 2026</p>
              <p className="mt-1 text-xs text-slate-500">Problem Statement 26016 · DoLR</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
