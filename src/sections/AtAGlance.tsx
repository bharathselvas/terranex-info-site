import { ArrowUpRight, FileText, Layers, Map as MapIcon, ScrollText, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { MODULES } from "@/data/dossier";

const ICONS: Record<string, LucideIcon> = {
  gis: MapIcon,
  cases: Layers,
  documents: FileText,
  compensation: Wallet,
  audit: ScrollText,
};

export function AtAGlance() {
  return (
    <Section
      id="modules"
      eyebrow="Terranex at a glance"
      title="One System. Multiple Workflows."
      deck="Five capabilities, one underlying record. They are not separate products that happen to talk — they are different views of the same parcel."
      tone="white"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((mod, i) => {
          const Icon = ICONS[mod.id] ?? Layers;
          // The first card carries the hero-adjacent screenshot, so give it more room.
          const wide = i === 0;
          return (
            <Reveal
              key={mod.id}
              delay={i}
              className={wide ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-rule bg-white transition-shadow hover:shadow-[0_2px_4px_rgba(15,35,64,0.05),0_18px_40px_-22px_rgba(15,35,64,0.35)]">
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
                      <Icon className="h-[18px] w-[18px]" aria-hidden />
                    </span>
                    <span className="label-caps text-slate-400">0{i + 1}</span>
                  </div>

                  <h3 className="mt-5 text-[17px] font-semibold leading-snug tracking-[-0.01em] text-navy-900">
                    {mod.title}
                  </h3>
                  <p className="mt-2.5 text-pretty text-[13.5px] leading-relaxed text-muted-foreground">
                    {mod.body}
                  </p>

                  <a
                    href={mod.href}
                    className="mt-5 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-navy-900 underline decoration-saffron-500 decoration-2 underline-offset-4 transition-colors hover:text-saffron-600"
                  >
                    See this module
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>

                <div className="relative border-t border-rule bg-slate-50/70">
                  <img
                    src={mod.image}
                    alt={mod.imageAlt}
                    width={1680}
                    height={1056}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                    style={
                      wide
                        ? { aspectRatio: "16 / 7", objectPosition: "center top" }
                        : { aspectRatio: "16 / 9", objectPosition: "center top" }
                    }
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/95 to-transparent"
                  />
                </div>
              </article>
            </Reveal>
          );
        })}

        {/* Closing cell keeps the grid balanced at 6 columns. */}
        <Reveal delay={5}>
          <article className="flex h-full flex-col justify-between rounded-lg border-2 border-dashed border-navy-900/20 bg-navy-50/40 p-6">
            <div>
              <p className="label-caps text-navy-900">The point</p>
              <p className="mt-3 text-pretty text-[15px] font-medium leading-relaxed text-navy-900">
                A judge can pick any one of these screens and trace it back to the same parcel
                that every other screen is describing.
              </p>
            </div>
            <p className="mt-6 border-t border-navy-900/10 pt-4 text-[12.5px] leading-relaxed text-muted-foreground">
              All five are implemented in the current frontend prototype. What sits behind them —
              database, APIs, government integrations — is specified, not running.
            </p>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
