import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame } from "@/components/ScreenshotFrame";
import { StatusTag } from "@/components/StatusTag";
import { ARCH_LAYERS, STACK } from "@/data/dossier";

export function Architecture() {
  return (
    <Section
      id="architecture"
      eyebrow="System architecture"
      title="Designed to Scale Beyond the Prototype."
      deck="The interface is finished. The infrastructure is specified. Below is the target system Terranex is built to become — a layered design where identity, workflow and geometry are each owned by one layer, and where access control spans all of them."
    >
      {/* ── The architecture diagram ── */}
      <Reveal>
        <figure className="overflow-hidden rounded-xl border border-rule bg-white shadow-[0_2px_4px_rgba(15,35,64,0.05),0_24px_60px_-28px_rgba(15,35,64,0.4)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule bg-[#F7F8FA] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="label-caps text-navy-900">Terranex — target architecture</span>
            </div>
            <StatusTag status="target" />
          </div>

          {/* Wide diagram: scrollable rather than squashed on small screens. */}
          <div className="overflow-x-auto bg-white p-3 sm:p-5">
            <img
              src="/architecture/system-architecture.webp"
              alt="Terranex target architecture diagram. Five tiers of users — government officials, project authorities, administrators, field officers and citizens — sit above a web portal and a field officer mobile app. The application tier contains project and organisation management, parcel and acquisition case management, workflow and task engine, GIS and spatial services, field verification and evidence, notifications and work queue, and audit and reporting, with a primary flow running project to parcel to acquisition case to workflow tasks to field evidence to decision to audit. A security and access column applies authentication, RBAC, hierarchy-aware authorisation and project-scoped access across all services. Below, PostgreSQL with PostGIS holds operational and spatial data, a document and object store holds documents, field evidence and photos, and an integration layer adapts DILRMP/ULPIN, state land records, Bhoomi Rashi, PFMS and PM Gati Shakti."
              width={1800}
              height={1182}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full min-w-[880px]"
            />
            <p className="mt-2 text-center font-mono text-[10px] text-slate-400 sm:hidden">
              Scroll the diagram horizontally to read it
            </p>
          </div>

          <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-rule bg-white px-4 py-2.5">
            <span className="label-caps text-navy-900">System architecture</span>
            <span className="text-[11.5px] text-muted-foreground">
              Working diagram — retains the project&apos;s earlier working name
              &ldquo;Bhoomi Setu&rdquo; on the application tier
            </span>
          </figcaption>
        </figure>
      </Reveal>

      {/* ── Layer stack ── */}
      <Reveal delay={1}>
        <div className="mt-14">
          <p className="label-caps mb-5 text-slate-400">The layers, and what runs in each today</p>
          <ol className="flex flex-col gap-px overflow-hidden rounded-lg border border-rule bg-rule">
            {ARCH_LAYERS.map((layer, i) => (
              <li
                key={layer.label}
                className="grid gap-3 bg-white px-5 py-4 sm:grid-cols-[minmax(0,190px)_minmax(0,1fr)_auto] sm:items-center sm:gap-5"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 font-mono text-[10px] font-semibold text-white"
                  >
                    {i + 1}
                  </span>
                  <span className="text-[14.5px] font-semibold text-navy-900">{layer.label}</span>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-rule bg-slate-50 px-2 py-1 font-mono text-[11px] text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="shrink-0">
                  <StatusTag status={layer.status} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* ── Stack + integration registry ── */}
      <Reveal delay={2}>
        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          <div>
            <p className="label-caps mb-5 text-slate-400">Technology, honestly attributed</p>
            <dl className="overflow-hidden rounded-lg border border-rule">
              {STACK.map((row) => (
                <div
                  key={row.layer}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-rule px-4 py-3 last:border-b-0"
                >
                  <dt className="label-caps w-[92px] shrink-0 text-slate-400">{row.layer}</dt>
                  <dd className="font-mono text-[12px] text-navy-900">{row.tech}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[12.5px] leading-relaxed text-muted-foreground">
              Everything in the left column is in the running prototype. The right-most row is the
              target datastore and is not connected.
            </p>
          </div>

          <BrowserFrame
            src="/screenshots/admin-integrations.webp"
            alt="Terranex system integrations registry: six adapters — DILRMP/ULPIN, PFMS, e-Gazette, PM Gati Shakti, State Land Records and Bhoomi/Bhoomi Rashi — each with a connection state, record counts, last-sync and configuration actions."
            title="Integration Registry"
            note="The adapters the target system will use, modelled in the prototype"
            status="demonstration"
            url="terranex · integrations"
          />
        </div>
      </Reveal>

      <Reveal delay={3}>
        <p className="mt-8 max-w-4xl text-pretty text-[13px] leading-relaxed text-muted-foreground">
          The integration registry above is modelled in the interface with synthetic record counts
          and sync timestamps. No DILRMP, PFMS, PM Gati Shakti, e-Gazette or state land-record
          service is contacted by this build, and Terranex is by design a consumer of those systems
          rather than a replacement for them.
        </p>
      </Reveal>
    </Section>
  );
}
