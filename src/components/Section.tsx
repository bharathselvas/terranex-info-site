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
      <div className="mx-auto w-full max-w-dossier px-5 py-24 sm:px-8 sm:py-32 lg:py-36">
        <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {eyebrow ? (
            <p className={`label-caps mb-6 flex items-center gap-3 ${eyebrowColor} ${centered ? "justify-center" : ""}`}>
              <span aria-hidden className={`h-px w-10 shrink-0 ${tone === "dark" ? "bg-saffron-500/70" : "bg-saffron-500/60"}`} />
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-heading`}
            className={`type-section text-balance ${titleColor}`}
          >
            {title}
          </h2>
          {deck ? (
            <p className={`type-body text-pretty mt-6 max-w-2xl ${deckColor}`}>
              {deck}
            </p>
          ) : null}
        </header>
        <div className={centered ? "mt-16" : "mt-16 sm:mt-20"}>{children}</div>
      </div>
    </section>
  );
}
