import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame } from "@/components/ScreenshotFrame";
import { TRACE_EDGES, TRACE_NODES } from "@/data/dossier";

/**
 * The relationship diagram is drawn in a single SVG coordinate space so the
 * connectors and the node boxes can never drift apart: every box is measured
 * from the same grid the lines are drawn on. Origins are derived from the
 * `col`/`row` grid in `TRACE_NODES`, so the layout has one source of truth.
 */
const BOX_W = 190;
const BOX_H = 52;
const COL_X = (col: number) => 40 + col * 112.5;
const ROW_Y = (row: number) => 8 + row * 100;

/** Node origins in the SVG's user units, derived from the dossier grid. */
const BOX: Record<string, { x: number; y: number }> = Object.fromEntries(
  TRACE_NODES.map((node) => [node.id, { x: COL_X(node.col), y: ROW_Y(node.row) }]),
);

const FILL: Record<string, string> = {
  parcel: "#0F2340",
  case: "#FFFFFF",
  documents: "#FFFFFF",
  ownership: "#FFFFFF",
  compensation: "#ECFDF5",
  rnr: "#ECFDF5",
  audit: "#E67E22",
};

const STROKE: Record<string, string> = {
  parcel: "#0F2340",
  case: "rgba(15,35,64,0.25)",
  documents: "rgba(15,35,64,0.25)",
  ownership: "rgba(15,35,64,0.25)",
  compensation: "rgba(15,122,90,0.4)",
  rnr: "rgba(15,122,90,0.4)",
  audit: "#E67E22",
};

const LABEL_FILL: Record<string, string> = {
  parcel: "#FFFFFF",
  case: "#0F2340",
  documents: "#0F2340",
  ownership: "#0F2340",
  compensation: "#0F7A5A",
  rnr: "#0F7A5A",
  audit: "#FFFFFF",
};

const SUB_FILL: Record<string, string> = {
  parcel: "rgba(255,255,255,0.55)",
  audit: "rgba(255,255,255,0.75)",
  compensation: "rgba(15,122,90,0.65)",
  rnr: "rgba(15,122,90,0.65)",
  case: "#94A3B8",
  documents: "#94A3B8",
  ownership: "#94A3B8",
};

const cx = (id: string) => BOX[id].x + BOX_W / 2;
const bottom = (id: string) => BOX[id].y + BOX_H;
const top = (id: string) => BOX[id].y;

/** Orthogonal connector between two node boxes. */
function link(a: string, b: string) {
  const ax = cx(a);
  const bx = cx(b);
  const ay = bottom(a);
  const by = top(b);
  const mid = (ay + by) / 2;
  if (Math.abs(ax - bx) < 0.5) return `M${ax},${ay} V${by}`;
  const dir = bx > ax ? 1 : -1;
  const shoulder = bx - dir * 16;
  return `M${ax},${ay} V${mid} H${shoulder} V${by}`;
}

function TraceDiagram() {
  return (
    <div className="rounded-xl border border-rule bg-white p-5 shadow-[0_1px_2px_rgba(15,35,64,0.05)] sm:p-8">
      <svg
        viewBox="0 0 720 380"
        className="mx-auto block h-auto w-full max-w-[760px]"
        role="presentation"
        focusable="false"
      >
        {/* Connectors first so the node boxes sit on top of them. */}
        <g fill="none" stroke="#CBD5E1" strokeWidth="1.5">
          {TRACE_EDGES.map(([a, b]) => (
            <path key={`${a}-${b}`} d={link(a, b)} />
          ))}
        </g>

        {TRACE_NODES.map((node) => {
          const box = BOX[node.id];
          if (!box) return null;
          return (
            <g key={node.id}>
              <rect
                x={box.x}
                y={box.y}
                width={BOX_W}
                height={BOX_H}
                rx="7"
                fill={FILL[node.id]}
                stroke={STROKE[node.id]}
                strokeWidth="1"
              />
              <text
                x={cx(node.id)}
                y={box.y + 21}
                textAnchor="middle"
                fill={LABEL_FILL[node.id]}
                style={{
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  fontSize: 10.5,
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                }}
              >
                {node.label}
              </text>
              {node.sub ? (
                <text
                  x={cx(node.id)}
                  y={box.y + 37}
                  textAnchor="middle"
                  fill={SUB_FILL[node.id]}
                  style={{ fontFamily: '"JetBrains Mono", ui-monospace, monospace', fontSize: 9.5 }}
                >
                  {node.sub}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>

      <p className="sr-only">
        A parcel connects to a case, to documents and to ownership. The case connects to
        compensation and to rehabilitation and resettlement. Both compensation and rehabilitation
        write into the audit trail.
      </p>
    </div>
  );
}

function TraceList() {
  return (
    <ul className="grid gap-2.5 md:hidden">
      {TRACE_NODES.map((node) => (
        <li key={node.id} className="rounded-md border border-rule bg-white px-4 py-3">
          <p className="label-caps text-navy-900">{node.label}</p>
          {node.sub ? (
            <p className="mt-1 font-mono text-[11px] text-muted-foreground">{node.sub}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function Traceability() {
  return (
    <Section
      id="traceability"
      eyebrow="Data model"
      title="Everything Connects Back to the Parcel."
      deck="This is the whole idea in one picture. The parcel is the anchor; the case, the documents, the ownership record, the compensation and the rehabilitation all hang off it, and every one of them writes to the same audit trail."
      tone="white"
    >
      <Reveal>
        <div className="hidden md:block">
          <TraceDiagram />
        </div>
        <div className="md:hidden">
          <TraceList />
        </div>
      </Reveal>

      {/* Relationship table — the same model in a form that is always legible. */}
      <Reveal delay={1}>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <caption className="sr-only">
              Relationships between entities in the Terranex data model
            </caption>
            <thead>
              <tr className="border-b border-navy-900/15">
                <th scope="col" className="label-caps py-2.5 pr-4 text-slate-400">
                  From
                </th>
                <th scope="col" className="label-caps py-2.5 pr-4 text-slate-400">
                  To
                </th>
                <th scope="col" className="label-caps py-2.5 text-slate-400">
                  Relationship
                </th>
              </tr>
            </thead>
            <tbody>
              {TRACE_EDGES.map(([from, to]) => {
                const f = TRACE_NODES.find((n) => n.id === from);
                const t = TRACE_NODES.find((n) => n.id === to);
                return (
                  <tr key={`${from}-${to}`} className="border-b border-rule/70">
                    <th scope="row" className="py-3 pr-4 text-[13px] font-semibold text-navy-900">
                      {f?.label}
                    </th>
                    <td className="py-3 pr-4">
                      <span className="text-[13px] text-slate-600">{t?.label}</span>
                    </td>
                    <td className="py-3 text-[13px] text-muted-foreground">
                      {from === "parcel"
                        ? "Identifies the parcel, its record and the files attached to it"
                        : to === "audit"
                          ? "Writes a dated, attributed event"
                          : "Holds the case obligations"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* Proof: the same parcel seen through three different screens */}
      <Reveal delay={2}>
        <div className="mt-14">
          <p className="label-caps mb-5 text-slate-400">
            One parcel, three views — the same record behind each screen
          </p>
          <div className="grid gap-5 lg:grid-cols-3">
            <BrowserFrame
              src="/screenshots/citizen-parcel-map.webp"
              alt="Terranex citizen parcel map: an affected landholder's own parcel on the map, with the acquisition status and a link to the case."
              title="Citizen — my parcel"
              note="What the landholder sees"
              status="prototype"
              url="terranex · citizen / my land"
            />
            <BrowserFrame
              src="/screenshots/case-parcel-register.webp"
              alt="Terranex parcel register showing survey numbers, recorded owners, area, land use and per-parcel acquisition status."
              title="Officer — parcel register"
              note="What the district office sees"
              status="prototype"
              url="terranex · parcel register"
            />
            <BrowserFrame
              src="/screenshots/case-compensation.webp"
              alt="Terranex compensation management: per-parcel compensation status with under review, draft and payment pending states."
              title="Finance — compensation"
              note="What the payment queue sees"
              status="prototype"
              url="terranex · compensation"
            />
          </div>
          <p className="mt-5 max-w-3xl text-[12.5px] leading-relaxed text-muted-foreground">
            Three offices, three roles, three completely different interfaces — reading the same
            parcel. That is what the central node buys.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}