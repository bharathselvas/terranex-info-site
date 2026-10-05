import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ConvergeDiagram, FlowChain } from "@/components/Flow";
import {
  FRAGMENTATION,
  FRAGMENTATION_CONSEQUENCE,
  PROBLEM_CHAIN,
  PROBLEM_OUTCOMES,
} from "@/data/dossier";

export function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="The problem"
      title="Land Acquisition Is Not One Process."
      deck="Under the RFCTLARR Act, 2013 an acquisition passes through seventeen statutory stages, six tiers of office and several disconnected record systems. The work is one process. The paperwork is many."
    >
      <Reveal>
        <dl className="grid gap-10 border-y border-rule py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "17", label: "statutory stages", note: "RFCTLARR Act, 2013" },
            { value: "6", label: "tiers of office", note: "National → village" },
            { value: "Multiple", label: "record systems", note: "Never reconciled" },
            { value: "1", label: "connected acquisition case", note: "What Terranex builds" },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-[clamp(3rem,5vw,4rem)] font-bold leading-none tracking-[-0.03em] text-navy-900">
                {m.value}
              </p>
              <p className="mt-2 text-[18px] font-semibold tracking-[-0.01em] text-navy-900">
                {m.label}
              </p>
              <p className="label-caps mt-3 text-slate-400">{m.note}</p>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={1}>
        <p className="label-caps mb-4 mt-16 text-slate-400">The chain every acquisition travels</p>
        <FlowChain steps={PROBLEM_CHAIN} numbered />
      </Reveal>

      <Reveal delay={1}>
        <div className="mt-16 hairline pt-12">
          <p className="label-caps mb-6 text-slate-400">
            Why the chain breaks — four separate failures, compounding
          </p>
          <ConvergeDiagram inputs={FRAGMENTATION} outcome={FRAGMENTATION_CONSEQUENCE} />
        </div>
      </Reveal>

      <Reveal delay={2}>
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM_OUTCOMES.map((item, i) => (
            <li key={item.title} className="border-t-2 border-navy-900/15 pt-5">
              <span
                aria-hidden
                className="font-mono text-[11px] font-semibold tracking-[0.14em] text-saffron-600"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="type-card-title mt-3 text-navy-900">
                {item.title}
              </h3>
              <p className="type-body mt-2 text-[16px] text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
