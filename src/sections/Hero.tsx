import { ArrowDown, ArrowRight, Network } from "lucide-react";
import { CONCEPTUAL_CHAIN, FIELD_FLOW, HERO_META } from "@/data/dossier";
import { BrowserFrame } from "@/components/ScreenshotFrame";
import { BackboneChain } from "@/components/Flow";
import { Reveal } from "@/components/Reveal";

/** Existing anchors only — the fastest honest path through the dossier. */
const JUDGE_PATH = [
  { href: "#problem", label: "Problem", note: "Why it matters" },
  { href: "#gis", label: "GIS", note: "Parcel first" },
  { href: "#cases", label: "Cases", note: "The dossier" },
  { href: "#mobile", label: "Field", note: "Mobile app" },
  { href: "#status", label: "Readiness", note: "Built vs planned" },
];

/** One case-centric system, two operational surfaces — labels only, from dossier data. */
function DuoStrip() {
  const web = HERO_META;
  const field = FIELD_FLOW.slice(1, 5);
  return (
    <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-stretch">
      <div className="rounded-lg border border-white/12 bg-white/[0.04] p-4">
        <p className="label-caps text-saffron-500">Web platform</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {web.map((item) => (
            <li
              key={item}
              className="rounded-sm border border-white/12 bg-white/[0.05] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-2 rounded-lg border border-saffron-500/30 bg-saffron-500/10 px-4 py-3 sm:flex-col sm:gap-1">
        <span aria-hidden className="hidden h-6 w-px bg-saffron-500/50 sm:block" />
        <span className="label-caps whitespace-nowrap text-white">Shared case</span>
        <span aria-hidden className="hidden h-6 w-px bg-saffron-500/50 sm:block" />
      </div>
      <div className="rounded-lg border border-white/12 bg-white/[0.04] p-4">
        <p className="label-caps text-saffron-500">Field mobile</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {field.map((item) => (
            <li
              key={item}
              className="rounded-sm border border-white/12 bg-white/[0.05] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900 text-white">
      <div className="dossier-grid absolute inset-0 opacity-[0.22]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(110%_85%_at_50%_-10%,rgba(230,126,34,0.16),transparent_62%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-dossier px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.06fr)] lg:gap-14">
          {/* ── Copy ── */}
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="label-caps rounded-sm border border-white/15 bg-white/5 px-2 py-1 text-saffron-500">
                  SIH 2026 · Problem Statement 26016
                </span>
                <span className="label-caps rounded-sm border border-white/15 bg-white/5 px-2 py-1 text-white/70">
                  Interactive product dossier
                </span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="mt-7 text-[clamp(2.1rem,5.2vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
                <span className="block text-white/65">TERRANEX</span>
                <span className="mt-3 block text-balance">One Connected Workflow for Land Acquisition.</span>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 max-w-xl text-pretty text-[15.5px] leading-relaxed text-navy-100/85 sm:text-[17px]">
                Terranex connects parcels, cases, documents, compensation and rehabilitation
                workflows into one traceable digital system.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <ul className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2">
                {HERO_META.map((item, i) => (
                  <li key={item} className="flex items-center gap-2">
                    {i > 0 ? (
                      <span className="text-saffron-500" aria-hidden>
                        •
                      </span>
                    ) : null}
                    <span className="label-caps text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#problem"
                  className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-[14px] font-semibold text-navy-900 transition-colors hover:bg-saffron-500 hover:text-white"
                >
                  Explore the System
                  <ArrowDown
                    className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                    aria-hidden
                  />
                </a>
                <a
                  href="#architecture"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-[14px] font-semibold text-white/85 transition-colors hover:border-white/45 hover:text-white"
                >
                  <Network className="h-4 w-4" aria-hidden />
                  View Architecture
                </a>
              </div>
            </Reveal>

            <Reveal delay={5}>
              <p className="mt-8 max-w-md border-l-2 border-white/15 pl-3.5 text-[12.5px] leading-relaxed text-white/70">
                All screens shown are functional frontend prototypes using synthetic demonstration
                data. Government datasets, persistent backend services and production integrations
                are part of the target implementation unless explicitly marked otherwise.
              </p>
            </Reveal>
          </div>

          {/* ── Product ── */}
          <Reveal delay={2} className="relative">
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(60%_50%_at_50%_0%,rgba(230,126,34,0.20),transparent_70%)] blur-2xl"
              aria-hidden
            />
            <BrowserFrame
              eager
              src="/screenshots/hero-dashboard.webp"
              alt="Terranex GIS workstation: an interactive map of the NH-47 Package 03 corridor with 236 colour-coded acquisition parcels, a survey-number label on a selected parcel, layer controls, an acquisition-status legend, and a parcel statistics header."
              title="GIS Workstation"
              note="Parcel boundaries, survey numbers, acquisition status"
              status="prototype"
              url="terranex · gis workstation"
              frameTone="dark"
              className="border-white/12 bg-navy-950 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.7)]"
            />
          </Reveal>
        </div>

        {/* ── The backbone: the central visual story of the dossier ── */}
        <Reveal delay={3}>
          <div className="mt-14 rounded-xl border border-white/12 bg-navy-950/70 p-5 sm:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="label-caps text-saffron-500">The Terranex backbone</p>
              <p className="font-mono text-[10.5px] text-white/50">
                Parcel → Case → Stage → Documents → Compensation → R&amp;R → Audit
              </p>
            </div>
            <BackboneChain steps={CONCEPTUAL_CHAIN} tone="dark" className="mt-6" />
          </div>
        </Reveal>

        {/* ── Two surfaces, one shared case + the 60-second path ── */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <Reveal delay={4}>
            <DuoStrip />
          </Reveal>
          <Reveal delay={5}>
            <nav
              aria-label="Understand Terranex in 60 seconds"
              className="h-full rounded-lg border border-white/12 bg-white/[0.04] p-4"
            >
              <p className="label-caps flex items-center gap-2 text-white/85">
                Understand Terranex in 60 seconds
                <ArrowDown className="h-3.5 w-3.5 text-saffron-500" aria-hidden />
              </p>
              <ol className="mt-3 flex flex-col gap-1">
                {JUDGE_PATH.map((step, i) => (
                  <li key={step.href}>
                    <a
                      href={step.href}
                      className="group flex items-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-white/[0.06]"
                    >
                      <span aria-hidden className="font-mono text-[10px] text-saffron-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13.5px] font-medium text-white/90 group-hover:text-white">
                        {step.label}
                      </span>
                      <span className="text-[12px] text-white/50">{step.note}</span>
                      <ArrowRight
                        className="ml-auto h-3.5 w-3.5 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:text-saffron-500"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
