import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PhoneFrame, BrowserFrame } from "@/components/ScreenshotFrame";
import { StatusTag } from "@/components/StatusTag";
import { FlowChain } from "@/components/Flow";
import { FIELD_CAPTURES, FIELD_FLOW } from "@/data/dossier";

export function Mobile() {
  return (
    <Section
      id="mobile"
      eyebrow="Field operations"
      title="The Workflow Doesn't Stop at the Office."
      deck="Most of the evidence in a land acquisition is produced in a village, by someone holding a phone. Terranex gives the field officer the same case the Collector is looking at — and sends the result back to it."
      tone="white"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-14">
        {/* ── Phone set ── */}
        <Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
            {FIELD_CAPTURES.map((shot, i) => (
              <PhoneFrame
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                title={
                  [
                    "Assigned work",
                    "Parcel lookup",
                    "Owner verify",
                    "Evidence capture",
                    "GPS capture",
                    "Measurements",
                  ][i] ?? "Field screen"
                }
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
          <FlowChain steps={FIELD_FLOW} />

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-rule bg-white p-5">
              <p className="label-caps text-navy-900">What runs on the device</p>
              <ul className="mt-3 flex flex-col gap-2">
                {[
                  "Assigned task list scoped to the officer's circle",
                  "Parcel lookup by survey number, parcel ID, case or village",
                  "Owner verification against the recorded holding",
                  "Photo capture and GPS coordinates attached to the parcel",
                  "Measurement and observation recording",
                  "Sync status, with pending records visible to the officer",
                ].map((item) => (
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

            <div className="rounded-lg border border-saffron-500/30 bg-saffron-50/70 p-5">
              <div className="flex items-center gap-2.5">
                <StatusTag status="prototype" />
                <StatusTag status="planned" />
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-700">
                The field screens shown here are the Flutter field-officer application, running
                against synthetic demonstration data. It is a working client, not a deployed
                service. Offline capture and durable background sync are designed and specified,
                and are not yet implemented — the prototype shows the sync state, not a working
                offline queue.
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
