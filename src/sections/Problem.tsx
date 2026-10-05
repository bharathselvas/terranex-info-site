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
        <p className="label-caps mb-4 text-slate-400">The chain every acquisition travels</p>
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
        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM_OUTCOMES.map((item, i) => (
            <li key={item.title} className="bg-white p-5">
              <span
                aria-hidden
                className="label-caps flex h-5 w-5 items-center justify-center rounded-full bg-saffron-50 text-saffron-600"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3.5 text-[14.5px] font-semibold leading-snug text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
