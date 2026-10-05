import { Check, ArrowRight, Info } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame } from "@/components/ScreenshotFrame";
import { StatusTag } from "@/components/StatusTag";
import {
  CAPABILITY_MATRIX,
  DATA_STATEMENT,
  NOT_PRESENT,
  PROTOTYPE_NOW,
  PROTOTYPE_STACK_LINE,
  TARGET_NEXT,
  TARGET_STACK_LINE,
} from "@/data/dossier";

export function PrototypeStatus() {
  return (
    <Section
      id="status"
      eyebrow="Prototype vs implementation"
      title="Where We Are Today. Where We're Going Next."
      deck="A judge should be able to tell exactly what is running and what is designed. This section is the honest boundary between the two."
    >
      {/* ── Capability matrix ── */}
      <Reveal>
        <div className="overflow-hidden rounded-lg border border-rule bg-white shadow-[0_1px_2px_rgba(15,35,64,0.05)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule bg-slate-50/70 px-5 py-4">
            <h3 className="text-[15.5px] font-semibold text-navy-900">What works today</h3>
            <p className="label-caps text-slate-400">Capability · implementation status</p>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-rule">
                <th scope="col" className="label-caps px-5 py-2.5 text-slate-500">
                  Capability
                </th>
                <th
                  scope="col"
                  className="label-caps w-[140px] px-5 py-2.5 text-slate-500 sm:w-[168px]"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule/70">
              {CAPABILITY_MATRIX.map((row) => (
                <tr key={row.capability}>
                  <td className="px-5 py-3 text-[13.5px] leading-snug text-slate-700">
                    {row.capability}
                  </td>
                  <td className="px-5 py-3">
                    <StatusTag status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:gap-6">
        {/* ── Today ── */}
        <Reveal>
          <div className="flex h-full flex-col rounded-lg border-2 border-success/30 bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-rule bg-emerald-50/60 px-5 py-4">
              <h3 className="text-[15.5px] font-semibold text-navy-900">Current Prototype</h3>
              <span className="rounded-sm border border-success/30 bg-white px-1.5 py-[3px] font-mono text-[9.5px] uppercase tracking-[0.14em] text-success">
                Demonstrated
              </span>
            </div>
            <ul className="flex-1 p-5">
              {PROTOTYPE_NOW.map((item) => (
                <li key={item} className="flex gap-3 border-b border-rule/60 py-2.5 last:border-b-0">
                  <span
                    className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success/12"
                    aria-hidden
                  >
                    <Check className="h-2.5 w-2.5 text-success" />
                  </span>
                  <span className="text-[13.5px] leading-relaxed text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="border-t border-rule bg-slate-50/70 px-5 py-3.5 font-mono text-[11px] text-slate-500">
              {PROTOTYPE_STACK_LINE}
            </p>
          </div>
        </Reveal>

        {/* ── Next ── */}
        <Reveal delay={1}>
          <div className="flex h-full flex-col rounded-lg border-2 border-dashed border-saffron-500/45 bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-rule bg-saffron-50/70 px-5 py-4">
              <h3 className="text-[15.5px] font-semibold text-navy-900">Target Implementation</h3>
              <span className="rounded-sm border border-saffron-500/40 bg-white px-1.5 py-[3px] font-mono text-[9.5px] uppercase tracking-[0.14em] text-saffron-600">
                Planned
              </span>
            </div>
            <ul className="flex-1 p-5">
              {TARGET_NEXT.map((item) => (
                <li key={item} className="flex gap-3 border-b border-rule/60 py-2.5 last:border-b-0">
                  <ArrowRight
                    className="mt-[3px] h-4 w-4 shrink-0 text-saffron-500"
                    aria-hidden
                  />
                  <span className="text-[13.5px] leading-relaxed text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="border-t border-rule bg-slate-50/70 px-5 py-3.5 font-mono text-[11px] text-slate-500">
              {TARGET_STACK_LINE}
            </p>
          </div>
        </Reveal>
      </div>

      {/* ── What is deliberately absent ── */}
      <Reveal delay={2}>
        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="rounded-lg border border-rule bg-white p-6">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-navy-900" aria-hidden />
              <p className="label-caps text-navy-900">
                Not present in this build — and not faked
              </p>
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {NOT_PRESENT.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-md border border-rule bg-slate-50/70 px-3 py-2.5 text-[12.5px] text-slate-600"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-3xl text-pretty text-[13px] leading-relaxed text-muted-foreground">
              Every capability on this page that reads as a live action is a demonstration of the
              intended workflow. Where the prototype has no backend, it says so in the interface
              rather than pretending.
            </p>
          </div>

          <BrowserFrame
            src="/screenshots/case-register.webp"
            alt="Terranex acquisition case register: a table of cases with case numbers, project, jurisdiction, stage, area, owners and risk, drawn entirely from the mock data layer."
            title="Case Register"
            note="Rendered from the in-memory store — the honest shape of the prototype"
            status="demonstration"
            url="terranex · cases"
          />
        </div>
      </Reveal>

      <Reveal delay={3}>
        <p className="mt-6 max-w-4xl border-l-2 border-saffron-500 pl-4 text-pretty text-[13px] leading-relaxed text-slate-600">
          <span className="font-semibold text-navy-900">On the data: </span>
          {DATA_STATEMENT}
        </p>
      </Reveal>
    </Section>
  );
}
