import { ArrowUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { VISION_COMPOSITE } from "@/data/dossier";

export function FinalVision() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="relative scroll-mt-20 overflow-hidden bg-navy-900 text-white"
    >
      <div className="dossier-grid absolute inset-0 opacity-[0.18]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(80%_100%_at_50%_120%,rgba(230,126,34,0.20),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-dossier px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="label-caps text-saffron-500">Final vision</p>
            <h2
              id="vision-heading"
              className="mt-5 text-balance text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.028em]"
            >
              Every Parcel. Every Case. One Traceable Workflow.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-navy-100/85 sm:text-[17px]">
              Terranex is designed to connect the information, people and workflows behind land
              acquisition into one transparent digital system.
            </p>
          </div>
        </Reveal>

        {/* ── Composite ── */}
        <Reveal delay={1}>
          <ul className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6">
            {VISION_COMPOSITE.map((item) => (
              <li
                key={item.src}
                className="group relative overflow-hidden rounded-lg border border-white/12 bg-navy-950"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.src.includes("mobile-") ? 780 : 1680}
                  height={item.src.includes("mobile-") ? 1688 : 1056}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[4/3] w-full object-cover object-top opacity-85 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                />
                <span
                  className="absolute inset-x-0 bottom-0 flex items-center bg-gradient-to-t from-navy-950 via-navy-950/85 to-transparent px-3 pb-2.5 pt-6"
                >
                  <span className="label-caps text-white/85">{item.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ── CTA ── */}
        <Reveal delay={2}>
          <div className="mt-16 flex flex-col items-center gap-6">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-[14.5px] font-semibold text-navy-900 transition-colors hover:bg-saffron-500 hover:text-white"
            >
              Explore Terranex Again
              <ArrowUp
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
            <p className="max-w-2xl text-center text-[12.5px] leading-relaxed text-white/65">
              Frontend prototype · Synthetic demonstration data · SIH 2026 Problem Statement 26016 ·
              Department of Land Resources
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
