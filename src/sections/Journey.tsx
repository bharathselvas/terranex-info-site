import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame } from "@/components/ScreenshotFrame";
import { StatusTag } from "@/components/StatusTag";
import { JOURNEY } from "@/data/dossier";

export function Journey() {
  return (
    <Section
      id="workflow"
      eyebrow="End-to-end"
      title="From Parcel Identification to Case Closure."
      deck="Ten steps, five roles, one record. This is the section to read if you only read one — every screen below belongs to the same case, and the case belongs to the same parcel."
    >
      <div className="relative">
        {/* Spine — a single rule running the length of the journey on desktop. */}
        <div
          aria-hidden
          className="absolute left-[15px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-navy-200 via-slate-200 to-transparent lg:block"
        />

        <ol className="space-y-12 lg:space-y-16">
          {JOURNEY.map((step, i) => (
            <Reveal key={step.n} as="li" delay={i % 3} className="relative lg:pl-14">
              {/* Node marker on the spine */}
              <span
                aria-hidden
                className="absolute left-0 top-1 hidden h-[31px] w-[31px] items-center justify-center rounded-full border-2 border-white bg-navy-900 font-mono text-[10.5px] font-semibold text-white shadow-[0_0_0_1px_rgba(15,35,64,0.16)] lg:flex"
              >
                {step.n}
              </span>

              <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="label-caps text-saffron-600 lg:hidden">{step.n}</span>
                <h3 className="text-[19px] font-semibold leading-tight tracking-[-0.015em] text-navy-900 sm:text-[22px]">
                  {step.title}
                </h3>
                <StatusTag status={step.status} />
              </div>

              <div
                className={`grid gap-6 ${
                  i % 2 === 0
                    ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.28fr)] lg:items-start"
                    : "lg:grid-cols-[minmax(0,1.28fr)_minmax(0,1fr)] lg:items-start"
                }`}
              >
                {/* Text half */}
                <div className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                  <p className="text-pretty text-[15px] leading-relaxed text-slate-700">
                    {step.body}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-rule bg-slate-50 px-3 py-2">
                    <span className="label-caps text-slate-400">Responsible</span>
                    <span className="text-[12.5px] font-medium text-navy-900">{step.who}</span>
                  </div>
                </div>

                {/* Screenshot half */}
                <div className={i % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                  <BrowserFrame
                    src={step.image}
                    alt={step.imageAlt}
                    title={step.title}
                    note={`Step ${step.n} of ${JOURNEY.length}`}
                    status={step.status}
                    url={`terranex · ${step.title.toLowerCase()}`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
