import { Fingerprint } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame } from "@/components/ScreenshotFrame";
import { StatusTag } from "@/components/StatusTag";
import { AUDIT_EVENTS, AUDIT_FIELDS } from "@/data/dossier";

const KIND_STYLE: Record<string, { dot: string; label: string }> = {
  create: { dot: "bg-navy-900", label: "Create" },
  link: { dot: "bg-navy-600", label: "Link" },
  document: { dot: "bg-slate-400", label: "Document" },
  verify: { dot: "bg-success", label: "Verification" },
  notice: { dot: "bg-info", label: "Notice" },
  money: { dot: "bg-warning", label: "Compensation" },
  rnr: { dot: "bg-[#2A9D8F]", label: "R&R" },
  close: { dot: "bg-saffron-500", label: "Closure" },
};

function AuditTimeline() {
  return (
    <ol className="relative flex flex-col">
      {AUDIT_EVENTS.map((event, i) => {
        const style = KIND_STYLE[event.kind];
        return (
          <li key={`${event.time}-${event.title}`} className="relative flex gap-4 pb-5 last:pb-0">
            {/* Rail + node */}
            <div className="relative flex shrink-0 flex-col items-center">
              <span
                className={`mt-[5px] h-[9px] w-[9px] shrink-0 rounded-full ring-4 ring-white ${style.dot}`}
                aria-hidden
              />
              {i < AUDIT_EVENTS.length - 1 ? (
                <span className="mt-1 w-px flex-1 bg-slate-200" aria-hidden />
              ) : null}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1 pb-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-[12px] font-medium tabular-nums text-navy-900">
                  {event.time}
                </span>
                <span className="text-[14px] font-medium leading-snug text-navy-900">
                  {event.title}
                </span>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} aria-hidden />
                <span className="text-[12.5px] text-slate-600">{event.actor}</span>
                <span className="font-mono text-[10.5px] text-slate-400">{event.role}</span>
              </div>
              <p className="mt-1 font-mono text-[10.5px] text-slate-400">
                stage: {event.stage}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function Auditability() {
  return (
    <Section
      id="auditability"
      eyebrow="Module 05 — Auditability"
      title="A Case History You Can Follow."
      deck="Every state-changing action writes one event. Not a summary, not a daily digest — one attributed record per action, written at the moment it happens."
    >
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-8">
          {/* Timeline */}
          <div className="rounded-lg border border-rule bg-white p-6 shadow-[0_1px_2px_rgba(15,35,64,0.05)]">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="label-caps text-slate-400">Illustrative day · case-001</p>
                <p className="mt-1.5 text-[15px] font-semibold tracking-[-0.01em] text-navy-900">
                  Eight actions, one working day
                </p>
              </div>
              <StatusTag status="demonstration" />
            </div>
            <AuditTimeline />
          </div>

          {/* Fields + real ledger */}
          <div className="grid content-start gap-5">
            <div className="rounded-lg border border-rule bg-navy-50/50 p-6">
              <div className="flex items-center gap-2">
                <Fingerprint className="h-4 w-4 text-navy-900" aria-hidden />
                <p className="label-caps text-navy-900">Recorded on every event</p>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {AUDIT_FIELDS.map((field) => (
                  <li
                    key={field}
                    className="rounded-sm border border-navy-900/15 bg-white px-2 py-1 font-mono text-[10.5px] text-navy-900"
                  >
                    {field}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[12.5px] leading-relaxed text-slate-600">
                Actor and role come from the session. Jurisdiction and case come from the record
                being changed. The stage transition is stored explicitly, so a case&apos;s history
                can be reconstructed without replaying anything.
              </p>
            </div>

            <BrowserFrame
              src="/screenshots/audit-trail.webp"
              alt="Terranex shared audit ledger: ten events, each with a timestamp, the case it belongs to, the actor and their role, a plain-language action description with the stage transition, the stage badge, and the source IP address."
              title="Shared Audit Ledger"
              note="The same ledger is visible to every role, scoped by jurisdiction"
              status="prototype"
              url="terranex · audit"
            />
          </div>
        </div>
      </Reveal>

      {/* Legend for the event kinds used above */}
      <Reveal delay={1}>
        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {Object.entries(KIND_STYLE).map(([key, style]) => (
            <li key={key} className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${style.dot}`} aria-hidden />
              <span className="label-caps text-slate-400">{style.label}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={2}>
        <div className="mt-10 rounded-lg border border-rule bg-white p-6">
          <div className="flex flex-wrap items-center gap-3">
            <StatusTag status="demonstration" />
            <p className="text-[13.5px] font-semibold text-navy-900">
              These are interface states, not production events
            </p>
          </div>
          <p className="mt-3 max-w-3xl text-pretty text-[13px] leading-relaxed text-muted-foreground">
            The ledger above is generated by the prototype&apos;s mock data layer. The events, the
            officers and the IP addresses are synthetic. What is demonstrated is the shape of the
            record and the fact that every mutation in the interface writes to it. Cryptographic
            immutability and long-term retention are part of the target implementation, and no
            claim is made about them here.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
