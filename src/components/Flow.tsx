/**
 * A vertical chain of stages with connector arrows.
 * Used for the problem statement, the case lifecycle and the field workflow.
 */
export function FlowChain({
  steps,
  orientation = "vertical",
  tone = "light",
  numbered = false,
  className = "",
}: {
  steps: string[];
  orientation?: "vertical" | "horizontal";
  tone?: "light" | "dark";
  /** Prefix each stage with its 01-based position — used where the order itself is the message. */
  numbered?: boolean;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <ol
      className={`flex ${orientation === "vertical" ? "flex-col" : "flex-row flex-wrap"} gap-0 ${className}`}
    >
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <li
            key={step}
            className={`relative flex items-center ${
              orientation === "vertical" ? "w-full flex-col" : "flex-1 flex-col min-w-[112px]"
            }`}
          >
            <div
              className={`label-caps flex items-center justify-center gap-2.5 rounded-md border px-3 py-2.5 text-center leading-tight ${
                dark
                  ? "border-white/15 bg-white/5 text-white/85"
                  : "border-rule bg-white text-navy-900 shadow-[0_1px_2px_rgba(15,35,64,0.05)]"
              } ${orientation === "vertical" ? "w-full" : "w-full"}`}
            >
              {numbered ? (
                <span
                  aria-hidden
                  className={`font-mono text-[9px] font-semibold tracking-[0.1em] ${
                    dark ? "text-saffron-500" : "text-saffron-600"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              ) : null}
              {step}
            </div>
            {!last ? (
              <span
                aria-hidden
                className={`flex items-center justify-center ${
                  orientation === "vertical" ? "h-7 w-full flex-col" : "h-7 w-full flex-col"
                }`}
              >
                <span
                  className={`block ${orientation === "vertical" ? "h-4 w-px" : "h-px w-full"} ${
                    dark ? "bg-white/20" : "bg-slate-300"
                  }`}
                />
                <span
                  className={`-mt-[2px] block h-1.5 w-1.5 rotate-45 border-r border-b ${
                    dark ? "border-white/30" : "border-slate-400"
                  } ${orientation === "vertical" ? "rotate-45" : "rotate-45"}`}
                />
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

/**
 * The Terranex backbone: Parcel → Case → … → Audit as a numbered visual chain.
 *
 * Desktop renders one connected row with a continuous spine behind the nodes.
 * Small screens get a horizontal snap-scroll strip instead of a squashed row,
 * so every stage stays legible and nothing pushes the document sideways.
 */
export function BackboneChain({
  steps,
  tone = "light",
  className = "",
}: {
  steps: string[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <ol
      aria-label="The Terranex backbone"
      className={`chain-scroll -mx-1 flex snap-x snap-mandatory gap-0 overflow-x-auto px-1 pb-1 lg:mx-0 lg:snap-none lg:overflow-visible lg:px-0 ${className}`}
    >
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <li
            key={step}
            className="flex min-w-[128px] flex-1 snap-start items-stretch sm:min-w-[140px] lg:min-w-0"
          >
            <div className="flex w-full flex-col items-center">
              <span
                aria-hidden
                className={`flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[10px] font-semibold ${
                  dark
                    ? "border-saffron-500/50 bg-saffron-500/10 text-saffron-500"
                    : "border-navy-900/25 bg-navy-50 text-navy-900"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`label-caps mt-2.5 rounded-md border px-2.5 py-2 text-center leading-snug ${
                  dark
                    ? "border-white/15 bg-white/5 text-white/90"
                    : "border-rule bg-white text-navy-900 shadow-[0_1px_2px_rgba(15,35,64,0.06)]"
                }`}
              >
                {step}
              </span>
            </div>
            {!last ? (
              <span aria-hidden className="flex w-4 shrink-0 items-center justify-center sm:w-6">
                <span className={`h-px w-full ${dark ? "bg-white/25" : "bg-slate-300"}`} />
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

/**
 * The "several inputs, one outcome" collapse diagram used in the problem
 * section — four disjoint sources converging on a single broken state.
 */
export function ConvergeDiagram({
  inputs,
  outcome,
  className = "",
}: {
  inputs: { label: string; note: string }[];
  outcome: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,340px)] lg:items-center ${className}`}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {inputs.map((item, i) => (
          <li
            key={item.label}
            className="rounded-md border border-rule bg-white p-4 shadow-[0_1px_2px_rgba(15,35,64,0.05)]"
          >
            <div className="flex items-start gap-2.5">
              <span
                aria-hidden
                className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 font-mono text-[10px] font-semibold text-slate-500"
              >
                {i + 1}
              </span>
              <div>
                <p className="text-[13.5px] font-semibold leading-snug text-navy-900">{item.label}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{item.note}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="hidden items-center justify-center lg:flex" aria-hidden>
        <svg width="56" height="20" viewBox="0 0 56 20" fill="none">
          <path d="M0 10h44" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M40 5l6 5-6 5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="lg:pl-0">
        <div className="rounded-lg border-2 border-dashed border-danger/40 bg-danger/[0.035] p-5 text-center">
          <p className="label-caps text-danger">Outcome</p>
          <p className="mt-2 text-balance text-lg font-semibold leading-snug text-navy-900">
            {outcome}
          </p>
        </div>
      </div>
    </div>
  );
}
