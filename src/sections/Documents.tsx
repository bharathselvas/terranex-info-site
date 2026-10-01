import { Info } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame, UIFragment } from "@/components/ScreenshotFrame";
import { StatusTag } from "@/components/StatusTag";
import { FlowChain } from "@/components/Flow";
import { DOCUMENT_FLOW, DOCUMENT_STATES } from "@/data/dossier";

export function Documents() {
  return (
    <Section
      id="documents"
      eyebrow="Module 03 — Document intelligence"
      title="Documents Stop Being Attachments. They Become Evidence."
      deck="A notice filed in a folder cannot be defended in an audit. Terranex binds each document to the case, the parcel, the stage and the officer who produced it — so it can be found, and so its absence is visible."
    >
      {/* ── The vault ── */}
      <Reveal>
        <BrowserFrame
          src="/screenshots/document-vault.webp"
          alt="Terranex document vault listing eight files with the case each belongs to, the statutory stage it was uploaded at, the uploading officer and their role, the date, and a Verified or Pending status."
          title="Stage-Gated Document Vault"
          note="Every file tied to a case, a stage and an uploader"
          status="prototype"
          url="terranex · documents"
        />
      </Reveal>

      {/* ── Flow ── */}
      <Reveal delay={1}>
        <div className="mt-16">
          <p className="label-caps mb-5 text-slate-400">How a document becomes evidence</p>
          <FlowChain steps={DOCUMENT_FLOW} />
        </div>
      </Reveal>

      {/* ── Step detail ── */}
      <Reveal delay={2}>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-5">
          {DOCUMENT_STATES.map((step) => (
            <li key={step.step} className="flex flex-col bg-white p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="label-caps text-saffron-600">{step.step}</span>
                <StatusTag status={step.status} withTitle={false} />
              </div>
              <h3 className="mt-3 text-[14.5px] font-semibold leading-snug text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* ── Detail + honesty note ── */}
      <Reveal delay={3}>
        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6">
          <UIFragment
            src="/screenshots/document-repository.webp"
            alt="Terranex national document repository: statutory documents held centrally, organised by category, with the department that issued each one."
            title="Document Repository"
            note="National repository view"
            status="prototype"
          />
          <UIFragment
            src="/screenshots/document-case-vault.webp"
            alt="Terranex district document vault filtered to documents belonging to a single acquisition case."
            title="Case Document Vault"
            note="Scoped to one case"
            status="prototype"
          />
        </div>
      </Reveal>

      <Reveal delay={4}>
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-saffron-500/30 bg-saffron-50/70 p-5">
          <Info className="mt-[2px] h-4 w-4 shrink-0 text-saffron-600" aria-hidden />
          <div>
            <p className="text-[13.5px] font-semibold text-navy-900">
              What this build does not do
            </p>
            <p className="mt-2 text-pretty text-[13px] leading-relaxed text-slate-700">
              There is no OCR, no automated field extraction, no AI classification and no
              tamper-evident sealing in the current prototype. Documents are records with metadata
              and a state — the workflow is demonstrated, the intelligence is not. Content-level
              verification and retention enforcement are part of the target implementation.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
