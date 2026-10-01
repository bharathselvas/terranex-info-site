import type { ReactNode } from "react";
import { Lock, Minus, Square } from "lucide-react";
import { StatusTag, type StatusTagProps } from "./StatusTag";
import { DESKTOP_SHOT, MOBILE_SHOT } from "@/data/dossier";

/* ── Chrome ───────────────────────────────────────────────────────────── */

function ChromeBar({ url, tone = "light" }: { url: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div
      className={`flex items-center gap-3 border-b px-3 py-2 sm:px-4 ${
        dark ? "border-white/10 bg-navy-950" : "border-rule bg-[#F7F8FA]"
      }`}
    >
      <span className="flex shrink-0 items-center gap-1.5" aria-hidden>
        <span className={`block h-2.5 w-2.5 rounded-full ${dark ? "bg-white/25" : "bg-[#E4E7EC]"}`} />
        <span className={`block h-2.5 w-2.5 rounded-full ${dark ? "bg-white/25" : "bg-[#E4E7EC]"}`} />
        <span className={`block h-2.5 w-2.5 rounded-full ${dark ? "bg-white/25" : "bg-[#E4E7EC]"}`} />
      </span>
      <span
        className={`flex min-w-0 flex-1 items-center gap-1.5 truncate rounded-[5px] border px-2 py-[3px] font-mono text-[10px] ${
          dark ? "border-white/10 bg-white/5 text-white/70" : "border-rule bg-white text-slate-400"
        }`}
      >
        <Lock className="h-[9px] w-[9px] shrink-0" aria-hidden />
        <span className="truncate">{url}</span>
      </span>
    </div>
  );
}

/* ── Shared caption bar ───────────────────────────────────────────────── */

function Caption({
  title,
  note,
  status,
  tone = "light",
}: {
  title: string;
  note?: string;
  status?: StatusTagProps["status"];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <figcaption
      className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t px-3 py-2.5 sm:px-4 ${
        dark ? "border-white/10 bg-navy-950" : "border-rule bg-white"
      }`}
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <Square
          className={`h-2.5 w-2.5 shrink-0 ${dark ? "fill-saffron-500 text-saffron-500" : "fill-navy-900 text-navy-900"}`}
          aria-hidden
        />
        <span
          className={`truncate label-caps ${dark ? "text-white/80" : "text-navy-900"}`}
        >
          {title}
        </span>
        {note ? (
          <span
            className={`hidden truncate text-[11.5px] sm:inline ${dark ? "text-white/70" : "text-muted-foreground"}`}
          >
            {note}
          </span>
        ) : null}
      </span>
      {status ? <StatusTag status={status} /> : null}
    </figcaption>
  );
}

/* ── Browser frame ────────────────────────────────────────────────────── */

export function BrowserFrame({
  src,
  alt,
  title,
  note,
  status,
  url,
  eager = false,
  className = "",
  frameTone = "light",
  children,
}: {
  src: string;
  alt: string;
  title: string;
  note?: string;
  status?: StatusTagProps["status"];
  url?: string;
  eager?: boolean;
  className?: string;
  frameTone?: "light" | "dark";
  children?: ReactNode;
}) {
  return (
    <figure
      className={`group overflow-hidden rounded-lg border border-rule bg-white shadow-[0_1px_2px_rgba(15,35,64,0.05),0_12px_32px_-16px_rgba(15,35,64,0.28)] ${className}`}
    >
      <ChromeBar url={url ?? "terranex.gov.in / workspace"} tone={frameTone} />
      <div className="bg-white">
        <img
          src={src}
          alt={alt}
          width={DESKTOP_SHOT.w}
          height={DESKTOP_SHOT.h}
          loading={eager ? "eager" : "lazy"}
          decoding={eager ? "sync" : "async"}
          fetchPriority={eager ? "high" : "auto"}
          className="block h-auto w-full"
        />
        {children}
      </div>
      <Caption title={title} note={note} status={status} tone={frameTone} />
    </figure>
  );
}

/* ── Phone frame ──────────────────────────────────────────────────────── */

export function PhoneFrame({
  src,
  alt,
  title,
  status,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  title: string;
  status?: StatusTagProps["status"];
  className?: string;
  eager?: boolean;
}) {
  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <div className="relative w-full max-w-[260px] rounded-[26px] border border-navy-900/15 bg-navy-900 p-[7px] shadow-[0_18px_40px_-18px_rgba(15,35,64,0.55)]">
        <span className="absolute left-1/2 top-[13px] z-10 h-[5px] w-[52px] -translate-x-1/2 rounded-full bg-navy-950/80" aria-hidden />
        <div className="overflow-hidden rounded-[20px] bg-white">
          <img
            src={src}
            alt={alt}
            width={MOBILE_SHOT.w}
            height={MOBILE_SHOT.h}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className="block h-auto w-full"
          />
        </div>
      </div>
      <figcaption className="mt-3 flex max-w-[260px] items-center justify-center gap-2">
        <span className="label-caps truncate text-navy-900">{title}</span>
        {status ? <StatusTag status={status} /> : null}
      </figcaption>
    </figure>
  );
}

/* ── Zoomed UI fragment ───────────────────────────────────────────────── */

/**
 * A deliberately enlarged crop of the interface. Used sparingly, where a
 * judge needs to read fine detail that would be illegible in a full screen.
 */
export function UIFragment({
  src,
  alt,
  title,
  note,
  status,
  focus = "center",
  className = "",
}: {
  src: string;
  alt: string;
  title: string;
  note?: string;
  status?: StatusTagProps["status"];
  focus?: string;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-lg border border-rule bg-white shadow-[0_1px_2px_rgba(15,35,64,0.05),0_10px_26px_-16px_rgba(15,35,64,0.3)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-rule bg-[#F7F8FA] px-3 py-2">
        <Minus className="h-2.5 w-2.5 text-slate-300" aria-hidden />
        <span className="label-caps truncate text-navy-900">{title}</span>
      </div>
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={DESKTOP_SHOT.w}
          height={DESKTOP_SHOT.h}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
          style={{ clipPath: focus }}
        />
      </div>
      <Caption title={title} note={note} status={status} />
    </figure>
  );
}

/* ── Full-width product panel (no chrome, maximum presence) ───────────── */

export function ProductPanel({
  src,
  alt,
  title,
  note,
  status,
  eager = false,
  className = "",
  children,
}: {
  src: string;
  alt: string;
  title: string;
  note?: string;
  status?: StatusTagProps["status"];
  eager?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-rule bg-white shadow-[0_2px_4px_rgba(15,35,64,0.05),0_24px_60px_-28px_rgba(15,35,64,0.4)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={DESKTOP_SHOT.w}
        height={DESKTOP_SHOT.h}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "sync" : "async"}
        fetchPriority={eager ? "high" : "auto"}
        className="block h-auto w-full"
      />
      {children}
      <Caption title={title} note={note} status={status} />
    </figure>
  );
}
