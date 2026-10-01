import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { AFTER_CHAIN, BEFORE_CHAIN } from "@/data/dossier";

function Chain({
  steps,
  variant,
}: {
  steps: string[];
  variant: "before" | "after";
}) {
  const before = variant === "before";
  return (
    <div
      className={`rounded-lg border p-6 sm:p-7 ${
        before ? "border-rule bg-white" : "border-2 border-navy-900/15 bg-navy-50/50"
      }`}
    >
      <p className={`label-caps ${before ? "text-slate-400" : "text-navy-900"}`}>
        {before ? "Before" : "With Terranex"}
      </p>
      <ol className="mt-5 flex flex-col">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-3">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[9.5px] font-semibold ${
                before
                  ? "border border-slate-300 bg-slate-50 text-slate-400"
                  : "bg-navy-900 text-white"
              }`}
              aria-hidden
            >
              {i + 1}
            </span>
            <span
              className={`text-[14.5px] ${
                before
                  ? "text-slate-500 line-through decoration-slate-300"
                  : "font-medium text-navy-900"
              }`}
            >
              {s}
            </span>
            {i < steps.length - 1 ? (
              <span
                className={`ml-2.5 h-4 w-px ${before ? "bg-slate-200" : "bg-navy-900/20"}`}
                aria-hidden
              />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function WhyTerranex() {
  return (
    <Section
      id="why"
      eyebrow="Why Terranex"
      title="The Change Is Structural, Not Cosmetic."
      deck="No throughput figures and no percentage improvements are claimed here, because none have been measured. What can be shown is the shape of the system before and after — and that shape determines everything downstream."
    >
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-6">
          <Chain steps={BEFORE_CHAIN} variant="before" />
          <div className="flex items-center justify-center py-1 lg:px-2" aria-hidden>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-saffron-500/40 bg-saffron-50">
              <ArrowRight className="h-4.5 w-4.5 text-saffron-600" />
            </span>
          </div>
          <Chain steps={AFTER_CHAIN} variant="after" />
        </div>
      </Reveal>

      <Reveal delay={1}>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              k: "A case cannot be lost",
              v: "It is a record with a number, not a file moving between desks.",
            },
            {
              k: "A stage cannot be skipped",
              v: "The evidence its gate requires must be present first.",
            },
            {
              k: "A decision cannot be unattributed",
              v: "Every action writes an actor, a role, a jurisdiction and a time.",
            },
            {
              k: "An office cannot work blind",
              v: "A citizen, a collector and a payment officer read the same parcel.",
            },
          ].map((item) => (
            <div key={item.k} className="bg-white p-6">
              <p className="text-[15px] font-semibold leading-snug text-navy-900">{item.k}</p>
              <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={2}>
        <p className="mt-10 max-w-3xl text-pretty text-[15px] leading-relaxed text-slate-700">
          Under the RFCTLARR Act, 2013 an acquisition is not permitted to be indefinite. The Act
          sets limits on how long each step may take. Terranex exists to make those limits
          observable — to show, at any moment, which case is where, who holds it, and how much of
          its statutory window is left.
        </p>
      </Reveal>
    </Section>
  );
}
