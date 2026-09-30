import { STATUS_META } from "@/data/dossier";
import type { StatusTagProps } from "./StatusTagProps";

export type { StatusTagProps };

const TONE: Record<string, string> = {
  navy: "border-navy-900/25 bg-navy-50 text-navy-900",
  saffron: "border-saffron-500/35 bg-saffron-50 text-saffron-600",
  green: "border-success/30 bg-emerald-50 text-success",
  slate: "border-slate-300 bg-slate-50 text-slate-600",
};

/**
 * The honesty primitive.
 *
 * Every capability claim on this site carries one of these. It is deliberately
 * small and quiet — a badge, not a disclaimer banner.
 */
export function StatusTag({ status, className = "", withTitle = true }: StatusTagProps) {
  const meta = STATUS_META[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-1.5 py-[3px] font-mono text-[9.5px] font-medium uppercase leading-none tracking-[0.14em] ${TONE[meta.tone]} ${className}`}
      title={withTitle ? `${meta.title} — ${meta.blurb}` : undefined}
    >
      {meta.label}
    </span>
  );
}

export function StatusKey({ status }: { status: Status }) {
  const meta = STATUS_META[status];
  return (
    <div className="flex flex-col gap-1">
      <StatusTag status={status} />
      <p className="text-xs leading-snug text-muted-foreground">{meta.blurb}</p>
    </div>
  );
}
