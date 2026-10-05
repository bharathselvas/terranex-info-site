import type { ReactNode } from "react";

type Align = "left" | "center";

/**
 * Consistent section chrome: anchor target, eyebrow, heading, deck and a rule.
 * Every band on the page uses this so the 18 sections read as one document.
 */
export function Section({
  id,
  eyebrow,
  title,
  deck,
  children,
  align = "left",
  tone = "light",
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  deck?: ReactNode;
  children: ReactNode;
  align?: Align;
  tone?: "light" | "white" | "dark" | "tint";
  className?: string;
}) {
  const centered = align === "center";
  const bg =
    tone === "dark"
      ? "bg-navy-900 text-white"
      : tone === "white"
        ? "bg-white"
        : tone === "tint"
          ? "bg-navy-50/60"
          : "bg-[#FAFBFC]";

  const titleColor = tone === "dark" ? "text-white" : "text-navy-900";
  const deckColor = tone === "dark" ? "text-navy-100/80" : "text-slate-600";
  const eyebrowColor = tone === "dark" ? "text-saffron-500" : "text-saffron-600";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-20 border-b border-rule ${bg} ${className}`}
    >
      <div className="mx-auto w-full max-w-dossier px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {eyebrow ? (
            <p className={`label-caps mb-5 flex items-center gap-3 ${eyebrowColor} ${centered ? "justify-center" : ""}`}>
              <span aria-hidden className={`h-px w-8 shrink-0 ${tone === "dark" ? "bg-saffron-500/70" : "bg-saffron-500/60"}`} />
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-heading`}
            className={`text-balance text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.022em] ${titleColor}`}
          >
            {title}
          </h2>
          {deck ? (
            <p className={`mt-5 text-pretty text-[15px] leading-relaxed sm:text-base ${deckColor}`}>
              {deck}
            </p>
          ) : null}
        </header>
        <div className={centered ? "mt-14" : "mt-14 sm:mt-16"}>{children}</div>
      </div>
    </section>
  );
}
