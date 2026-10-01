import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { AFTER_CHAIN, BEFORE_CHAIN } from "@/data/dossier";

/** BEFORE: six disconnected silos. */
function BeforePanel() {
  return (
    <div className="h-full rounded-lg border border-rule bg-white p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <h3 className="label-caps text-slate-400">Before — the silos</h3>
        <span className="rounded-sm border border-danger/25 bg-danger/5 px-1.5 py-[3px] font-mono text-[9.5px] uppercase tracking-[0.14em] text-danger">
          Fragmented
        </span>
      </div>
      <ul className="mt-6 grid grid-cols-2 gap-2.5">
        {["Parcel Data", "Documents", "Case Files", "Payments", "R&R", "Office Records"].map(
          (item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-md border border-dashed border-slate-300 bg-slate-50/60 px-3 py-3 text-[12.5px] font-medium text-slate-600"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" aria-hidden />
              {item}
            </li>
          ),
        )}
      </ul>
      <p className="mt-6 border-t border-rule pt-5 text-[12.5px] leading-relaxed text-muted-foreground">
        Each silo has its own owner, its own file format and its own idea of where a case
        currently stands. Reconciling them is manual work, done by people.
      </p>
      <dl className="mt-6 grid gap-px overflow-hidden rounded-md border border-rule bg-rule">
        {[
          { k: "Where is the case now?", v: "Ask the office that holds the file" },
          { k: "Is the award paid?", v: "Ask the payment cell" },
          { k: "Who decided, and when?", v: "Look for a register entry" },
        ].map((row) => (
          <div key={row.k} className="bg-white px-3.5 py-2.5">
            <dt className="text-[12px] font-medium leading-snug text-navy-900">{row.k}</dt>
            <dd className="mt-0.5 text-[11.5px] leading-snug text-muted-foreground">{row.v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-[11.5px] leading-relaxed text-slate-400">
        Three questions that should be one query.
      </p>
    </div>
  );
}

/** AFTER: the same six concerns, resolved through one hub. */
function AfterPanel() {
  return (
    <div className="h-full rounded-lg border-2 border-navy-900/15 bg-navy-50/50 p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <h3 className="label-caps text-navy-900">After — one connected record</h3>
        <span className="rounded-sm border border-success/30 bg-emerald-50 px-1.5 py-[3px] font-mono text-[9.5px] uppercase tracking-[0.14em] text-success">
          Connected
        </span>
      </div>

      <div className="mt-6 diagram-field rounded-md border border-rule p-5">
        <div className="mx-auto max-w-[260px] text-center">
          <div className="rounded-md bg-navy-900 px-4 py-2.5 text-white">
            <span className="label-caps">Terranex</span>
          </div>
        </div>

        {/* hub → three branches */}
        <div className="mx-auto h-5 w-px bg-slate-300" aria-hidden />
        <div className="relative mx-auto h-px w-[74%] bg-slate-300" aria-hidden />
        <div className="grid grid-cols-3 gap-2">
          {["Parcel", "Case", "Documents"].map((item) => (
            <div key={item} className="flex flex-col items-center">
              <div className="h-4 w-px bg-slate-300" aria-hidden />
              <div className="w-full rounded-md border border-navy-900/20 bg-white px-2 py-2.5 text-center shadow-[0_1px_2px_rgba(15,35,64,0.06)]">
                <span className="label-caps text-navy-900">{item}</span>
              </div>
            </div>
          ))}
        </div>

        {/* three → compensation → r&r → audit */}
        <div
          className="mx-auto h-4 w-px bg-slate-300"
          aria-hidden
        />
        <div className="mx-auto flex h-4 w-px items-center">
          <div className="h-px w-[74%] bg-slate-300" aria-hidden />
        </div>
        <div className="grid grid-cols-3">
          <div aria-hidden />
          <div className="flex flex-col items-center">
            <div className="h-4 w-px bg-slate-300" aria-hidden />
            <div className="w-full rounded-md border border-navy-900/20 bg-white px-2 py-2.5 text-center shadow-[0_1px_2px_rgba(15,35,64,0.06)]">
              <span className="label-caps text-navy-900">Compensation</span>
            </div>
            <div className="h-4 w-px bg-slate-300" aria-hidden />
            <div className="w-full rounded-md border border-navy-900/20 bg-white px-2 py-2.5 text-center shadow-[0_1px_2px_rgba(15,35,64,0.06)]">
              <span className="label-caps text-navy-900">R&amp;R</span>
            </div>
          </div>
          <div aria-hidden />
        </div>
        <div className="mx-auto h-4 w-px bg-slate-300" aria-hidden />
        <div className="rounded-md border border-saffron-500/40 bg-saffron-50 px-3 py-2.5 text-center">
          <span className="label-caps text-saffron-600">Audit Trail</span>
        </div>
      </div>

      <p className="mt-6 border-t border-navy-900/10 pt-5 text-[12.5px] leading-relaxed text-muted-foreground">
        One parcel is the primary key. Everything else — the case, the documents, the award, the
        rehabilitation — attaches to it and inherits its history.
      </p>
    </div>
  );
}

export function Solution() {
  return (
    <Section
      id="solution"
      eyebrow="What changes"
      title="From Fragmented Records to One Connected Case."
      deck="Terranex does not replace the existing record systems. It gives them a shared spine: a parcel-centric case that every office writes to and every office can read."
    >
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <BeforePanel />
        </Reveal>
        <Reveal delay={1}>
          <AfterPanel />
        </Reveal>
      </div>

      {/* Before / after consequence chains */}
      <Reveal delay={2}>
        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="rounded-lg border border-rule bg-white p-6">
            <p className="label-caps mb-5 text-slate-400">The chain it replaces</p>
            <ol className="flex flex-col gap-2">
              {BEFORE_CHAIN.map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="label-caps w-5 shrink-0 text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] text-slate-500 line-through decoration-slate-300 decoration-1">
                    {s}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex items-center justify-center py-2 lg:px-2" aria-hidden>
            <ArrowRight className="h-6 w-6 text-saffron-500" />
          </div>

          <div className="rounded-lg border-2 border-navy-900/15 bg-navy-50/50 p-6">
            <p className="label-caps mb-5 text-navy-900">The chain it installs</p>
            <ol className="flex flex-col gap-2">
              {AFTER_CHAIN.map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  <span className="text-[14px] font-medium text-navy-900">{s}</span>
                  <span className="label-caps ml-auto text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
