import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame } from "@/components/ScreenshotFrame";
import { StatusTag } from "@/components/StatusTag";
import { SECURITY, SECURITY_DISCLAIMER } from "@/data/dossier";

export function Security() {
  return (
    <Section
      id="security"
      eyebrow="Security & governance"
      title="Built Around Accountability."
      deck="In a statutory land acquisition, the record of who decided what — and when — is the deliverable. Access control and audit are not features added at the end; they are the reason the system holds together."
      tone="white"
    >
      <Reveal>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY.map((item, i) => (
            <li key={item.title} className="flex flex-col bg-white p-6">
              <div className="flex items-start justify-between gap-3">
                <span
                  aria-hidden
                  className="label-caps flex h-6 w-6 items-center justify-center rounded-full border border-rule text-slate-400"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <StatusTag status={item.status} />
              </div>
              <h3 className="mt-4 text-[15.5px] font-semibold leading-snug tracking-[-0.01em] text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2.5 text-pretty text-[13.5px] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={1}>
        <div className="mt-6 rounded-lg border border-saffron-500/30 bg-saffron-50/70 p-5">
          <p className="text-[13px] font-semibold text-navy-900">Scope of this claim</p>
          <p className="mt-2 max-w-4xl text-pretty text-[13px] leading-relaxed text-slate-700">
            {SECURITY_DISCLAIMER}
          </p>
        </div>
      </Reveal>

      {/* Evidence */}
      <Reveal delay={2}>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <BrowserFrame
            src="/screenshots/admin-workflow-config.webp"
            alt="Terranex workflow configuration: the statutory stage sequence with per-stage service-level windows and the roles permitted to act on each stage."
            title="Workflow Configuration"
            note="Stage gates, SLA windows and permitted roles"
            status="prototype"
            url="terranex · workflow config"
          />
          <BrowserFrame
            src="/screenshots/audit-trail-national.webp"
            alt="Terranex national audit trail: events across every jurisdiction with actor, role, stage and source IP, visible from the national administration workspace."
            title="Audit Trail — National"
            note="The same ledger, read from the apex role"
            status="prototype"
            url="terranex · audit trail"
          />
        </div>
      </Reveal>
    </Section>
  );
}
