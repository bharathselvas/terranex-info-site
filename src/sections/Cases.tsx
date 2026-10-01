import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame, UIFragment } from "@/components/ScreenshotFrame";
import { FlowChain } from "@/components/Flow";
import {
  CASE_COMPOSITION,
  CASE_LIFECYCLE,
  CASE_LIFECYCLE_GROUPS,
  STATUTORY_STAGES,
} from "@/data/dossier";

const GROUP_COLOR: Record<string, string> = {
  initiation: "bg-navy-900",
  assessment: "bg-navy-700",
  notification: "bg-info",
  adjudication: "bg-[#7C5CBF]",
  settlement: "bg-success",
  closure: "bg-slate-400",
};

export function Cases() {
  return (
    <Section
      id="cases"
      eyebrow="Module 02 — Case management"
      title="Every Parcel Has a Case. Every Case Has a Story."
      deck="A case is the unit of work. It carries the parcels, the parties, the statutory stage, the money and the decisions — and it never loses its history as it moves between offices."
      tone="white"
    >
      {/* ── Command centre ── */}
      <Reveal>
        <BrowserFrame
          src="/screenshots/case-dashboard.webp"
          alt="Terranex District Collector command centre: active projects with risk flags, requires-decision queues, statutory timelines breaching and approaching, a delayed-projects distribution chart, and grievance counts."
          title="Collector Command Centre"
          note="District-level work queue and statutory deadline monitoring"
          status="prototype"
          url="terranex · collector / command centre"
        />
      </Reveal>

      {/* ── Lifecycle ── */}
      <Reveal delay={1}>
        <div className="mt-16">
          <p className="label-caps mb-5 text-slate-400">The case lifecycle</p>
          <FlowChain steps={CASE_LIFECYCLE} />
        </div>
      </Reveal>

      {/* ── 17 statutory stages, grouped ── */}
      <Reveal delay={2}>
        <div className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label-caps text-slate-400">The seventeen statutory stages</p>
              <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-muted-foreground">
                The pipeline is not a generic kanban. Each stage carries the provision of the
                RFCTLARR Act, 2013 that governs it, a service-level window, and the roles allowed
                to act on it.
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
              {CASE_LIFECYCLE_GROUPS.map((g) => (
                <li key={g.key} className="flex items-center gap-1.5">
                  <span
                    className={`h-2 w-2 rounded-[2px] ${GROUP_COLOR[g.key]}`}
                    aria-hidden
                  />
                  <span className="label-caps text-slate-500">{g.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <ol className="mt-6 grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {STATUTORY_STAGES.map((stage, i) => {
              const group = CASE_LIFECYCLE_GROUPS.find((g) => g.stages.includes(i))?.key ?? "closure";
              return (
                <li
                  key={stage.label}
                  className="flex items-start gap-3 bg-white px-4 py-3.5 transition-colors hover:bg-slate-50/70"
                >
                  <span
                    className={`mt-[5px] h-2 w-2 shrink-0 rounded-[2px] ${GROUP_COLOR[group]}`}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="label-caps text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-0.5 text-[13.5px] font-medium leading-snug text-navy-900">
                      {stage.label}
                    </p>
                    <p className="mt-0.5 font-mono text-[10.5px] leading-snug text-muted-foreground">
                      {stage.ref}
                    </p>
                  </div>
                </li>
              );
            })}
            {/* 17 stages leaves one cell short of a full row — close it with a
                summary rather than an empty slot. */}
            <li className="flex items-center justify-center bg-navy-50/60 px-4 py-3.5">
              <p className="text-center text-[12.5px] leading-snug text-navy-900">
                Each stage carries its own
                <span className="block text-[11px] text-slate-600">
                  statutory reference, SLA and permitted roles
                </span>
              </p>
            </li>
          </ol>
        </div>
      </Reveal>

      {/* ── Case anatomy ── */}
      <Reveal delay={3}>
        <div className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8">
          <BrowserFrame
            src="/screenshots/case-detail.webp"
            alt="Terranex acquisition case detail for case LA/MH/PN/HAV/2025-26/0184, showing the statutory stage stepper with the current stage marked, case metadata including area, sanctioned amount and SLA due date, a table of five parcels with owners and assessed compensation, and a preview of the audit trail."
            title="Case Detail"
            note="Case no. LA/MH/PN/HAV/2025-26/0184 — parcels, owners, stage and audit in one record"
            status="prototype"
            url="terranex · case detail"
          />

          <div>
            <p className="label-caps mb-5 text-slate-400">What a case contains</p>
            <ul className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-1">
              {CASE_COMPOSITION.map((item) => (
                <li key={item.label} className="flex items-baseline gap-3 bg-white px-4 py-3">
                  <span className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-saffron-500" aria-hidden />
                  <span className="text-[13.5px] font-semibold text-navy-900">{item.label}</span>
                  <span className="ml-auto text-right text-[12px] text-muted-foreground">
                    {item.note}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12.5px] leading-relaxed text-muted-foreground">
              Because these hang off one record, a hand-off between two offices does not copy data
              — it moves the case. The next officer opens the same thing the previous one closed.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── Statutory timeline evidence ── */}
      <Reveal delay={4}>
        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <BrowserFrame
            src="/screenshots/case-statutory-timeline.webp"
            alt="Terranex statutory lifecycle timelines: a Gantt-style view of acquisition cases against the seventeen statutory stages, colour-coded by the time remaining against each stage's service-level window."
            title="Statutory Timeline"
            note="Every case against every stage, with SLA headroom"
            status="prototype"
            url="terranex · statutory timeline"
          />
          <div className="grid content-start gap-5">
            <UIFragment
              src="/screenshots/case-pipeline.webp"
              alt="Zoomed view of the Terranex project pipeline showing cases distributed across statutory stages."
              title="Project Pipeline"
              note="Zoomed UI detail"
              status="prototype"
            />
            <div className="rounded-lg border border-rule bg-white p-5">
              <p className="label-caps text-navy-900">Why stages matter</p>
              <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600">
                A stage is not a label. In the prototype it carries a statutory reference, a
                service-level window in days, and the set of roles permitted to act on it. Advancing
                a stage is a gated action that writes an audit event.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
