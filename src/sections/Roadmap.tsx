import { Check, CircleDot, Circle } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PHASES, ROADMAP_NOTE } from "@/data/dossier";
import type { LucideIcon } from "lucide-react";

const STATE_META: Record<
  string,
  { icon: LucideIcon; chip: string; ring: string; dot: string }
> = {
  done: {
    icon: Check,
    chip: "border-success/35 bg-emerald-50 text-success",
    ring: "border-success/45",
    dot: "bg-success",
  },
  active: {
    icon: CircleDot,
    chip: "border-saffron-500/45 bg-saffron-50 text-saffron-600",
    ring: "border-saffron-500/60",
    dot: "bg-saffron-500",
  },
  next: {
    icon: Circle,
    chip: "border-rule bg-slate-50 text-slate-500",
    ring: "border-rule",
    dot: "bg-slate-300",
  },
};

export function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="Implementation roadmap"
      title="From Prototype to Public Infrastructure."
      deck="Five phases. Each one removes a class of mock — first the data, then the integrations, then the scale. The sequence is fixed by what has to exist before what."
      tone="white"
    >
      <Reveal>
        <ol className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule md:grid-cols-5">
          {PHASES.map((phase, i) => {
            const meta = STATE_META[phase.state];
            const Icon = meta.icon;
            return (
              <li key={phase.id} className="flex flex-col bg-white p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="label-caps text-slate-400">{phase.id.replace("phase-", "P")}</span>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border ${meta.ring} ${meta.chip}`}
                  >
                    <Icon className="h-3 w-3" aria-hidden />
                  </span>
                </div>

                <h3 className="mt-4 text-[19px] font-semibold leading-none tracking-[-0.02em] text-navy-900">
                  {phase.name}
                </h3>
                <p className="mt-3 text-pretty text-[12.5px] leading-relaxed text-muted-foreground">
                  {phase.body}
                </p>

                <ul className="mt-4 flex flex-1 flex-col gap-1.5 border-t border-rule pt-4">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[12px] leading-snug text-slate-600">
                      <span className={`mt-[6px] h-1 w-1 shrink-0 rounded-full ${meta.dot}`} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Connector between phases, desktop only */}
                {i < PHASES.length - 1 ? (
                  <span
                    aria-hidden
                    className="mt-5 hidden h-px w-full bg-gradient-to-r from-navy-900/25 to-transparent md:block"
                  />
                ) : null}
              </li>
            );
          })}
        </ol>
      </Reveal>

      {/* Phase rail — a second, at-a-glance reading of the same sequence. */}
      <Reveal delay={1}>
        <div className="mt-8 overflow-x-auto">
          <ol className="flex min-w-[720px] items-center gap-0 rounded-lg border border-rule bg-slate-50/60 px-6 py-5">
            {PHASES.map((phase, i) => {
              const meta = STATE_META[phase.state];
              return (
                <li key={phase.id} className="flex flex-1 items-center gap-0">
                  <div className="flex min-w-0 flex-col items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${meta.dot} ${phase.state === "active" ? "ring-4 ring-saffron-500/20" : ""}`}
                      aria-hidden
                    />
                    <span className="label-caps whitespace-nowrap text-navy-900">{phase.name}</span>
                  </div>
                  {i < PHASES.length - 1 ? (
                    <span className="mx-2 h-px flex-1 bg-slate-300" aria-hidden />
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </Reveal>

      <Reveal delay={2}>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { k: "Done", v: "The interface, the role model and the 17-stage workflow are built and demonstrable." },
            { k: "In progress", v: "Replacing in-memory stores with a real API and a PostGIS-backed database." },
            { k: "Not started", v: "Pilot, integration and scale — all gated on data-access agreements." },
          ].map((row) => (
            <div key={row.k} className="rounded-lg border border-rule bg-white p-5">
              <p className="label-caps text-saffron-600">{row.k}</p>
              <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600">{row.v}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-[12.5px] leading-relaxed text-muted-foreground">
          {ROADMAP_NOTE}
        </p>
      </Reveal>
    </Section>
  );
}
