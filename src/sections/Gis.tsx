import { useState } from "react";
import { Info } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame, UIFragment } from "@/components/ScreenshotFrame";
import { StatusKey } from "@/components/StatusTag";
import { FlowChain } from "@/components/Flow";
import { GIS_ANNOTATIONS, GIS_LAYERS, GIS_SPINE } from "@/data/dossier";

/**
 * Markers drawn over the screenshot. Positions are percentage-based and derive
 * from `GIS_ANNOTATIONS`, the same array that drives the desktop rail and the
 * mobile list — one source of truth for labels, numbering and coordinates.
 */
function AnnotationMarkers({ activeIndex }: { activeIndex: number | null }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {GIS_ANNOTATIONS.map((pin, i) => (
        <span
          key={pin.id}
          role="img"
          aria-label={`Annotation ${pin.number}: ${pin.label}`}
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
          className={`absolute flex h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white font-mono text-[9px] font-semibold leading-none shadow-[0_2px_6px_rgba(15,35,64,0.45)] transition-transform duration-200 ${
            activeIndex === i
              ? "scale-125 bg-saffron-500 text-white ring-2 ring-saffron-500/40"
              : "bg-navy-900/90 text-white"
          }`}
        >
          {String(pin.number).padStart(2, "0")}
        </span>
      ))}
    </div>
  );
}

export function Gis() {
  const [activePin, setActivePin] = useState<number | null>(null);

  return (
    <Section
      id="gis"
      eyebrow="Module 01 — GIS & parcel intelligence"
      title="See the Land Behind the Case."
      deck="Most land-acquisition software starts at the paperwork. Terranex starts at the ground: which parcels, which boundary, whose record — and only then the file."
    >
      {/* ── Primary GIS panel with annotations ── */}
      <Reveal>
        <div className="relative">
          <div className="lg:pr-[132px]">
            <BrowserFrame
              src="/screenshots/gis-project-alignment.webp"
              alt="Terranex GIS workstation. The map shows a project corridor overlaid on colour-coded cadastral parcels with survey-number labels, alongside layer controls for cadastral parcels, project boundary, administrative boundary, roads and water, acquisition status and blocked cases, and an acquisition-status legend."
              title="GIS Workstation"
              note="Interactive parcel layer with status colouring"
              status="prototype"
              url="terranex · gis workstation"
              overlay={<AnnotationMarkers activeIndex={activePin} />}
            >
              <div className="border-t border-rule bg-slate-50/70 px-4 py-3">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="label-caps text-slate-400">Layers</span>
                  {GIS_LAYERS.map((layer) => (
                    <span key={layer} className="flex items-center gap-1.5 text-[12px] text-slate-600">
                      <span
                        className="h-2.5 w-2.5 rounded-[3px] border border-slate-300 bg-white"
                        aria-hidden
                      />
                      {layer}
                    </span>
                  ))}
                </div>
              </div>
            </BrowserFrame>
          </div>

          {/* Annotation rail — desktop only */}
          <ol
            aria-label="GIS annotation key"
            className="absolute right-0 top-10 hidden w-[124px] flex-col gap-1.5 lg:flex"
          >
            {GIS_ANNOTATIONS.map((pin, i) => (
              <li key={pin.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActivePin(i)}
                  onMouseLeave={() => setActivePin(null)}
                  onFocus={() => setActivePin(i)}
                  onBlur={() => setActivePin(null)}
                  className={`flex w-full items-center gap-1.5 rounded border px-2 py-1.5 text-left transition-colors ${
                    activePin === i
                      ? "border-saffron-500 bg-saffron-50 text-saffron-600"
                      : "border-rule bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`font-mono text-[9px] ${activePin === i ? "text-saffron-600" : "text-slate-400"}`}
                  >
                    {String(pin.number).padStart(2, "0")}
                  </span>
                  <span className="label-caps leading-tight">{pin.label}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* Annotation list — mobile and tablet */}
      <Reveal delay={1}>
        <div className="mt-6 lg:hidden">
          <p className="label-caps mb-3 text-slate-400">What the map is showing</p>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {GIS_ANNOTATIONS.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 rounded-md border border-rule bg-white px-3 py-2.5 text-[12px] text-slate-600"
              >
                <span className="font-mono text-[9px] text-slate-400">
                  {String(item.number).padStart(2, "0")}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ── Explanation + spine ── */}
      <Reveal delay={2}>
        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-pretty text-[15.5px] leading-relaxed text-slate-700">
              Terranex connects geographic parcel context with the administrative case associated
              with it. A boundary on the map is not a picture — it is a row that a case, a set of
              documents, an award and a rehabilitation plan all point at.
            </p>
            <p className="mt-4 text-pretty text-[15.5px] leading-relaxed text-slate-700">
              Selecting a parcel answers the questions an officer actually asks: what is its survey
              number, who is the recorded holder, which case is touching it, how far along is that
              case, is anything blocking it, and is rehabilitation owed on it.
            </p>
            <div className="mt-7 flex flex-wrap items-start gap-5 rounded-lg border border-rule bg-white p-5">
              <StatusKey status="prototype" />
              <StatusKey status="target" />
            </div>
          </div>

          <div>
            <p className="label-caps mb-5 text-slate-400">
              Everything downstream of a parcel
            </p>
            <FlowChain steps={GIS_SPINE} />
            <p className="mt-6 text-[12.5px] leading-relaxed text-muted-foreground">
              The prototype renders parcels from a synthetic cadastral generator and an
              OpenStreetMap basemap. It is a working interface, not a live connection to a
              government land-record service.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── Supporting GIS views ── */}
      <Reveal delay={3}>
        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <BrowserFrame
            src="/screenshots/gis-national-map.webp"
            alt="Terranex national GIS: a map of India with markers for active, on-track and delayed projects, a state-and-UT filter and a risk legend, with a states and union territories summary panel."
            title="National GIS"
            note="Project footprint across states, filtered by risk"
            status="prototype"
            url="terranex · national gis"
          />
          <div className="grid gap-5">
            <UIFragment
              src="/screenshots/case-parcel-register.webp"
              alt="Zoomed view of the Terranex parcel register listing survey numbers, owners, area and acquisition status."
              title="Parcel Register"
              note="Zoomed UI detail"
              status="prototype"
            />
            <div className="rounded-lg border border-rule bg-navy-50/50 p-5">
              <p className="label-caps text-navy-900">Schematic views</p>
              <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600">
                State, R&amp;R and SIA map screens currently render as schematics rather than
                geospatial tiles. They demonstrate the layer model and the legend, and are labelled
                as such wherever they appear in this dossier.
              </p>
              <div className="mt-4 flex items-start gap-2 rounded-md border border-saffron-500/30 bg-saffron-50 px-3 py-2.5">
                <Info className="mt-[1px] h-3.5 w-3.5 shrink-0 text-saffron-600" aria-hidden />
                <p className="text-[12px] leading-relaxed text-saffron-600">
                  No live GIS backend, no real parcel dataset and no government map service are
                  connected in this build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
