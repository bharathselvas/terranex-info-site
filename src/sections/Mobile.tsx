import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PhoneFrame, BrowserFrame } from "@/components/ScreenshotFrame";
import { StatusTag } from "@/components/StatusTag";
import { FlowChain } from "@/components/Flow";
import { FIELD_APP_MAP, FIELD_CAPTURES, FIELD_FLOW, FIELD_ON_DEVICE, HERO_META } from "@/data/dossier";

/**
 * One case-centric system, two operational surfaces. Every label comes from
 * dossier data: the web surface reuses HERO_META, the field surface reuses
 * FIELD_FLOW, and both converge on the shared case.
 */
function SurfacesDuo() {
  const field = FIELD_FLOW.slice(1, 5);
  return (
    <div className="grid items-stretch gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      <div className="rounded-lg border border-rule bg-slate-50/60 p-5">
        <p className="label-caps text-navy-900">Web platform</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {HERO_META.map((item) => (
            <li
              key={item}
              className="rounded-sm border border-navy-900/15 bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-navy-900"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center rounded-lg border border-saffron-500/40 bg-saffron-50 px-5 py-3">
        <span className="label-caps whitespace-nowrap text-saffron-600">Shared case</span>
      </div>
      <div className="rounded-lg border border-rule bg-slate-50/60 p-5">
        <p className="label-caps text-navy-900">Field mobile</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {field.map((item) => (
            <li
              key={item}
              className="rounded-sm border border-navy-900/15 bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-navy-900"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Mobile() {
  return (
    <Section
      id="mobile"
      eyebrow="Field operations"
      title="The Workflow Doesn't Stop at the Office."
      deck="Most of the evidence in a land acquisition is produced in a village, by someone holding a phone. Terranex gives the field officer the same case the Collector is looking at — and sends the result back to it."
      tone="white"
    >
      <Reveal>
        <SurfacesDuo />
      </Reveal>
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-14">
        {/* ── Phone set ── */}
        <Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
            {FIELD_CAPTURES.map((shot, i) => (
              <PhoneFrame
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                title={shot.title}
                status="prototype"
                eager={i === 0}
                className={i === 0 ? "col-span-2 sm:col-span-3" : ""}
              />
            ))}
          </div>
        </Reveal>

        {/* ── Explanation ── */}
        <Reveal delay={1}>
          <p className="label-caps mb-5 text-slate-400">The field loop</p>
          <FlowChain steps={FIELD_FLOW} numbered />

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-rule bg-white p-5">
              <p className="label-caps text-navy-900">What runs on the device</p>
              <ul className="mt-3 flex flex-col gap-2">
                {FIELD_ON_DEVICE.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-700">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-rule bg-white p-5">
              <p className="label-caps text-navy-900">What the app actually contains</p>
              <dl className="mt-3 flex flex-col gap-3">
                {FIELD_APP_MAP.map((row) => (
                  <div key={row.concept} className="flex flex-col gap-1 border-b border-rule/60 pb-3 last:border-b-0 last:pb-0">
                    <dt className="text-[12.5px] font-semibold text-navy-900">{row.concept}</dt>
                    <dd className="font-mono text-[11.5px] leading-relaxed text-slate-600">{row.app}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-lg border border-saffron-500/30 bg-saffron-50/70 p-5">
              <div className="flex items-center gap-2.5">
                <StatusTag status="prototype" />
                <StatusTag status="planned" />
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-700">
                The field loop above is implemented in the Terranex Flutter field-officer
                app — an offline-first client with a local store, a 9-step verification
                wizard, GPS and photo evidence, and a Sync Center queue with retry —
                running against synthetic demonstration data with its mock backend on.
                It is a working client, not a deployed service. Production sign-in,
                government device rollout, the live sync endpoint and real record/GIS
                integrations belong to the target build.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── The loop closing back on the central case ── */}
      <Reveal delay={2}>
        <div className="mt-16 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-center">
          <div>
            <p className="label-caps text-slate-400">Where the field work lands</p>
            <h3 className="mt-3 text-balance text-[21px] font-semibold leading-tight tracking-[-0.018em] text-navy-900 sm:text-[24px]">
              Evidence from a village becomes a stage on the central case.
            </h3>
            <p className="mt-4 text-pretty text-[14.5px] leading-relaxed text-slate-700">
              A field verification submitted on a phone is not an email and not a scanned file
              sitting in a register. It is a submission against a specific case at a specific
              stage, attributed to the officer who made it — and it is what lets the next stage
              open.
            </p>
          </div>
          <BrowserFrame
            src="/screenshots/case-field-verification.webp"
            alt="Terranex field verification tracking: cases by verification status with the assigned field officer, submission dates and outstanding counts."
            title="Field Verification"
            note="The office view of what the field team submitted"
            status="prototype"
            url="terranex · field verification"
          />
        </div>
      </Reveal>
    </Section>
  );
}
