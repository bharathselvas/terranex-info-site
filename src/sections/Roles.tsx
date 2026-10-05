import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame } from "@/components/ScreenshotFrame";
import { StatusTag } from "@/components/StatusTag";
import { ROLES, ROLE_SCOPE_NOTE } from "@/data/dossier";

export function Roles() {
  return (
    <Section
      id="roles"
      eyebrow="Module 04 — Role-based workflow"
      title="The Same System. Different Responsibilities."
      deck="Terranex models eleven roles across the administrative hierarchy. Each one gets its own workspace, its own navigation and its own view of the same cases — because a Collector and a Finance Officer should never be looking at the same screen."
      tone="white"
    >
      {/* ── Role gallery ── */}
      <Reveal>
        <BrowserFrame
          src="/screenshots/role-gallery.webp"
          alt="Terranex role gallery: eleven role cards — National Admin, Ministry Nodal, Requiring Organization, State Nodal, Collector/CALA, Tehsil/SDO, Field Officer, SIA Expert, R&R Officer, Finance Officer and Citizen — each showing its jurisdiction scope, a one-line responsibility and an enter-workspace action."
          title="Role Gallery"
          note="Eleven roles, one shared set of cases and parcels"
          status="prototype"
          url="terranex · select role"
        />
      </Reveal>

      {/* ── Scope note ── */}
      <Reveal delay={1}>
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-lg border border-rule bg-navy-50/50 px-5 py-4">
          <span className="label-caps text-navy-900">Jurisdiction model</span>
          <span className="text-[13.5px] text-slate-700">{ROLE_SCOPE_NOTE}</span>
        </div>
      </Reveal>

      {/* ── Role cards ── */}
      <Reveal delay={2}>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((role, i) => (
            <li
              key={role.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-rule bg-white transition-shadow hover:shadow-[0_2px_4px_rgba(15,35,64,0.05),0_16px_36px_-22px_rgba(15,35,64,0.35)]"
            >
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[15px] font-semibold leading-snug tracking-[-0.01em] text-navy-900">
                    {role.role}
                  </h3>
                  <div className="flex shrink-0 flex-col items-end gap-1.5">
                    <span className="label-caps rounded-sm border border-rule bg-slate-50 px-1.5 py-[3px] text-slate-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <StatusTag status={role.status} />
                  </div>
                </div>
                <p className="mt-2.5 text-pretty text-[13px] leading-relaxed text-muted-foreground">
                  {role.responsibility}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-sm border border-navy-900/15 bg-navy-50 px-1.5 py-[3px] font-mono text-[10px] text-navy-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy-900" aria-hidden />
                    {role.scope}
                  </span>
                  <span className="label-caps text-slate-400">{role.short}</span>
                </div>
              </div>
              {/* Every card crops to the same ratio so the grid stays level —
                  the field officer's phone screen is a different shape from
                  the desktop workspaces and would otherwise set the row height. */}
              <div className="relative mt-auto border-t border-rule bg-slate-50/70">
                <img
                  src={role.image}
                  alt={role.imageAlt}
                  width={role.image.includes("mobile-") ? 780 : 1680}
                  height={role.image.includes("mobile-") ? 1688 : 1056}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white/95 to-transparent"
                />
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* ── Hierarchy evidence ── */}
      <Reveal delay={3}>
        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <BrowserFrame
            src="/screenshots/admin-hierarchy.webp"
            alt="Terranex organisation and jurisdiction hierarchy tree: Department of Land Resources at the top, then ministries, state revenue departments, district collectors, tehsil officers and field posts, each with entity counts."
            title="Jurisdiction Hierarchy"
            note="National → Ministry → State → District → Tehsil → Field"
            status="prototype"
            url="terranex · hierarchy"
          />
          <BrowserFrame
            src="/screenshots/admin-users-roles.webp"
            alt="Terranex users and roles administration showing role assignments and jurisdiction scopes across the eleven roles."
            title="Users & Roles"
            note="Role assignment and scope administration"
            status="prototype"
            url="terranex · users & roles"
          />
        </div>
      </Reveal>
    </Section>
  );
}
