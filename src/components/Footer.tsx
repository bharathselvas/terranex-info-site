import { Shield } from "lucide-react";
import { NAV_ITEMS } from "@/data/dossier";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-[#F7F8FA]">
      <div className="mx-auto w-full max-w-dossier px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-900 text-white">
                <Shield className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-[15px] font-bold tracking-[-0.01em] text-navy-900">TERRANEX</span>
            </div>
            <p className="mt-4 max-w-sm text-pretty text-[13px] leading-relaxed text-slate-600">
              Every Parcel. Every Case. One Traceable Workflow. A parcel-centric orchestration layer
              for land acquisition under the RFCTLARR Act, 2013.
            </p>
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-slate-500">
              SIH 2026 · Problem Statement 26016
              <br />
              Department of Land Resources · Government of India
            </p>
          </div>

          {/* Section index */}
          <nav aria-label="Footer navigation">
            <p className="label-caps text-slate-500">This document</p>
            <ul className="mt-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[13px] text-slate-600 transition-colors hover:text-navy-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Method note */}
          <div>
            <p className="label-caps text-slate-500">What you are looking at</p>
            <p className="mt-4 text-[13px] leading-relaxed text-slate-600">
              An interactive dossier built from the working Terranex prototype. Every screenshot
              on this page is a real screen from that application, captured at the current build.
            </p>
            <p className="mt-3 text-[12px] leading-relaxed text-slate-500">
              All parcels, survey numbers, owners, amounts and events shown are synthetic
              demonstration data. Not government records, and not connected to any live system.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
          <p className="font-mono text-[11px] text-slate-500">
            Terranex — land acquisition orchestration
          </p>
          <p className="font-mono text-[11px] text-slate-500">
            React · TypeScript · Tailwind · Leaflet
          </p>
        </div>
      </div>
    </footer>
  );
}
