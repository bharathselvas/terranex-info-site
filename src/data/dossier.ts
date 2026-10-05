/**
 * Content model for the Terranex dossier.
 *
 * Everything a judge reads on this site comes from here, so the prototype /
 * planned distinction can be enforced in one place rather than sprinkled across
 * components. `status` is mandatory on every capability claim.
 */

export type Status = "prototype" | "demonstration" | "planned" | "target";

export const STATUS_META: Record<
  Status,
  { label: string; tone: "navy" | "saffron" | "green" | "slate"; title: string; blurb: string }
> = {
  prototype: {
    label: "PROTOTYPE",
    tone: "navy",
    title: "Demonstrated in the current build",
    blurb: "This is running in the Terranex frontend prototype today.",
  },
  demonstration: {
    label: "DEMONSTRATION",
    tone: "slate",
    title: "Illustrative data",
    blurb: "Rendered with synthetic demonstration data, not government records.",
  },
  planned: {
    label: "PLANNED",
    tone: "saffron",
    title: "Part of the target implementation",
    blurb: "Designed and scoped, not yet connected to a production system.",
  },
  target: {
    label: "TARGET WORKFLOW",
    tone: "green",
    title: "How it behaves in the target system",
    blurb: "The intended production behaviour of this screen.",
  },
};

/* ── Navigation ──────────────────────────────────────────────────────── */

export type NavItem = { id: string; label: string };

export const NAV_ITEMS: NavItem[] = [
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "gis", label: "GIS" },
  { id: "cases", label: "Cases" },
  { id: "documents", label: "Documents" },
  { id: "workflow", label: "Workflow" },
  { id: "architecture", label: "Architecture" },
  { id: "roadmap", label: "Roadmap" },
];

/* ── Section 01 — Hero ────────────────────────────────────────────────── */

export const HERO_META = ["GIS", "CASE MANAGEMENT", "STATUTORY WORKFLOW", "AUDIT TRAIL"];

/* ── Section 02 — The problem ─────────────────────────────────────────── */

export const PROBLEM_CHAIN = [
  "Land Records",
  "Survey / Parcel Data",
  "Owner Verification",
  "Acquisition Case",
  "Documents",
  "Compensation",
  "Rehabilitation & Resettlement",
  "Closure",
];

export type FragmentInput = { label: string; note: string };

export const FRAGMENTATION: FragmentInput[] = [
  { label: "Different Records", note: "Land records, project files and payment ledgers live apart." },
  { label: "Different Offices", note: "National, state, district, tehsil and village each hold part of it." },
  { label: "Different Documents", note: "Notices, awards and reports are filed by whoever created them." },
  { label: "Manual Coordination", note: "Progress is tracked by people, not by a system of record." },
];

export const FRAGMENTATION_CONSEQUENCE = "Fragmented Case Visibility";

/** Problems named in the SIH problem statement, kept factual and terse. */
export const PROBLEM_OUTCOMES = [
  {
    title: "Delays in execution",
    body: "Communication gaps between offices stall a case at every hand-off.",
  },
  {
    title: "Opaque process",
    body: "Landholders cannot see where their file is, so disputes escalate to litigation.",
  },
  {
    title: "No national visibility",
    body: "Progress cannot be monitored consistently across states and districts.",
  },
  {
    title: "Disconnected systems",
    body: "Land records, project planning and payment systems never reconcile.",
  },
];

/* ── Section 03 — Before / after ──────────────────────────────────────── */

export const BEFORE_ITEMS = [
  "Parcel Data",
  "Documents",
  "Case Files",
  "Payments",
  "R&R",
  "Office Records",
];

/* ── Section 04 — At a glance ─────────────────────────────────────────── */

export type Module = {
  id: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  status: Status;
  href: string;
};

export const MODULES: Module[] = [
  {
    id: "gis",
    title: "GIS & Parcel Intelligence",
    body: "Locate and understand the affected parcels before anything else happens.",
    image: "/screenshots/gis-project-alignment.webp",
    imageAlt: "Terranex GIS view showing project footprint and parcel boundary layers",
    status: "prototype",
    href: "#gis",
  },
  {
    id: "cases",
    title: "Case Management",
    body: "Track an acquisition case from initiation to closure against statutory stages.",
    image: "/screenshots/case-pipeline.webp",
    imageAlt: "Terranex project pipeline showing acquisition cases across statutory stages",
    status: "prototype",
    href: "#cases",
  },
  {
    id: "documents",
    title: "Document Intelligence",
    body: "Connect each document to the exact case, parcel and stage it supports.",
    image: "/screenshots/document-vault.webp",
    imageAlt: "Terranex document vault listing files linked to cases, stages and uploaders",
    status: "prototype",
    href: "#documents",
  },
  {
    id: "compensation",
    title: "Compensation & R&R",
    body: "Track downstream obligations — awards, payment and rehabilitation — as status, not paperwork.",
    image: "/screenshots/case-rehabilitation.webp",
    imageAlt: "Terranex rehabilitation and resettlement tracking screen",
    status: "prototype",
    href: "#workflow",
  },
  {
    id: "audit",
    title: "Auditability",
    body: "Maintain a traceable history of who did what, to which case, at which stage.",
    image: "/screenshots/audit-trail.webp",
    imageAlt: "Terranex audit ledger listing timestamped events with actor, role, stage and IP",
    status: "prototype",
    href: "#auditability",
  },
];

/* ── Section 05 — GIS ─────────────────────────────────────────────────── */

/**
 * The single source of truth for the GIS screenshot annotations.
 *
 * Every presentation — the desktop annotation rail, the markers drawn over the
 * screenshot, and the mobile list — derives from this array, so the numbering
 * can never drift between them. `number` is the visible index; `x`/`y` are the
 * marker position over the screenshot as a percentage of its width and height.
 */
export type GisAnnotation = {
  id: string;
  number: number;
  label: string;
  x: number;
  y: number;
};

export const GIS_ANNOTATIONS: GisAnnotation[] = [
  { id: "parcel-boundary", number: 1, label: "Parcel Boundary", x: 46, y: 34 },
  { id: "survey-number", number: 2, label: "Survey Number", x: 30, y: 52 },
  { id: "acquisition-status", number: 3, label: "Acquisition Status", x: 68, y: 22 },
  { id: "owner-record", number: 4, label: "Owner / Record", x: 55, y: 82 },
  { id: "case-link", number: 5, label: "Case Link", x: 72, y: 62 },
  { id: "rnr-status", number: 6, label: "R&R Status", x: 18, y: 70 },
];

export const GIS_SPINE = ["Parcel", "Case", "Documents", "Compensation", "R&R"];

export const GIS_LAYERS = [
  "Cadastral Parcels",
  "Project Boundary",
  "Administrative Boundary",
  "Roads & Water",
  "Acquisition Status",
  "Blocked Cases",
];

/* ── Section 06 — Case management ─────────────────────────────────────── */

export const CASE_LIFECYCLE = [
  "Initiated",
  "Verification",
  "Notice",
  "Acquisition",
  "Compensation",
  "R&R",
  "Closed",
];

export const CASE_COMPOSITION = [
  { label: "Parcel", note: "Survey number, area, land use" },
  { label: "Owner / Record", note: "Recorded holder and record reference" },
  { label: "Documents", note: "Every file, with uploader and stage" },
  { label: "Notices", note: "u/s 11(1) and 19(1) instruments" },
  { label: "Compensation", note: "Assessment, award, sanction" },
  { label: "R&R", note: "Entitlements and site readiness" },
  { label: "Actions", note: "The current decision on the case" },
  { label: "Audit History", note: "Every mutation, with actor and IP" },
];

/**
 * The 17 statutory stages as modelled in the prototype. Labels are condensed
 * from the prototype's own stepper; references are the governing provisions.
 */
export const STATUTORY_STAGES = [
  { label: "Project Proposal", ref: "RFCTLARR §4" },
  { label: "Land Requirement", ref: "RFCTLARR §4(1)" },
  { label: "GIS Land Identification", ref: "DoLR GIS Guidelines 2023" },
  { label: "Submission", ref: "RFCTLARR §6" },
  { label: "Scrutiny", ref: "RFCTLARR §7" },
  { label: "Social Impact Assessment", ref: "RFCTLARR §6" },
  { label: "11(1) Notice", ref: "RFCTLARR §11(1)" },
  { label: "Public Disclosure", ref: "RFCTLARR §11(2)" },
  { label: "Objections & Hearing", ref: "RFCTLARR §15" },
  { label: "19(1) Declaration", ref: "RFCTLARR §19(1)" },
  { label: "Field Verification", ref: "RFCTLARR §18" },
  { label: "Compensation Assessment", ref: "RFCTLARR §26–30" },
  { label: "Award Enquiry", ref: "RFCTLARR §23 / §37" },
  { label: "Payment", ref: "RFCTLARR §37" },
  { label: "Possession", ref: "RFCTLARR §37" },
  { label: "R&R", ref: "RFCTLARR §37 & Schedule II" },
  { label: "Closed", ref: "—" },
];

export const CASE_LIFECYCLE_GROUPS = [
  { key: "initiation", label: "Initiation", stages: [0, 1, 2, 3] },
  { key: "assessment", label: "Assessment", stages: [4, 5] },
  { key: "notification", label: "Notification", stages: [6, 7, 8] },
  { key: "adjudication", label: "Adjudication", stages: [9, 10] },
  { key: "settlement", label: "Settlement", stages: [11, 12, 13, 14] },
  { key: "closure", label: "Closure", stages: [15, 16] },
];

/* ── Section 07 — Documents ───────────────────────────────────────────── */

export const DOCUMENT_FLOW = [
  "Upload",
  "Extract / Review",
  "Verify",
  "Link to Parcel",
  "Link to Case",
  "Audit",
];

export const DOCUMENT_STATES = [
  {
    step: "01",
    title: "Upload",
    body: "An officer attaches a file to the case it belongs to, at the stage it belongs to.",
    status: "prototype" as Status,
  },
  {
    step: "02",
    title: "Record metadata",
    body: "Filename, size, uploader, role and date are captured with the file.",
    status: "prototype" as Status,
  },
  {
    step: "03",
    title: "Verification state",
    body: "Each document carries an explicit Verified or Pending state in the vault.",
    status: "prototype" as Status,
  },
  {
    step: "04",
    title: "Link to parcel & case",
    body: "The file is attached to a survey number and a case, not left in a folder.",
    status: "prototype" as Status,
  },
  {
    step: "05",
    title: "Retain and audit",
    body: "Retention, immutability and audit linkage are enforced server-side in the target build.",
    status: "planned" as Status,
  },
];

/* ── Section 08 — Roles ───────────────────────────────────────────────── */

export type RoleCard = {
  id: string;
  role: string;
  short: string;
  scope: string;
  responsibility: string;
  image: string;
  imageAlt: string;
  status: Status;
};

export const ROLES: RoleCard[] = [
  {
    id: "national_admin",
    role: "National Admin / DoLR",
    short: "DoLR Admin",
    scope: "National",
    responsibility:
      "Apex oversight across all states and union territories — monitoring, audit and governance of the acquisition pipeline.",
    image: "/screenshots/admin-dashboard.webp",
    imageAlt: "Terranex national overview dashboard for the Department of Land Resources",
    status: "prototype",
  },
  {
    id: "ministry_nodal",
    role: "Ministry Nodal Officer",
    short: "Ministry Nodal",
    scope: "Ministry",
    responsibility:
      "Sponsoring ministry — sanctions projects and monitors them, for example MoRTH or MoD.",
    image: "/screenshots/ministry-dashboard.webp",
    imageAlt: "Terranex ministry nodal officer dashboard",
    status: "prototype",
  },
  {
    id: "requiring_org",
    role: "Requiring Organization",
    short: "Requiring Org",
    scope: "Project",
    responsibility:
      "Project proponent — NHAI, Railways, state PWD — submits land requirements and tracks its own projects only.",
    image: "/screenshots/ro-dashboard.webp",
    imageAlt: "Terranex requiring organisation project dashboard",
    status: "prototype",
  },
  {
    id: "state_nodal",
    role: "State Nodal Officer",
    short: "State Nodal",
    scope: "State",
    responsibility:
      "State revenue department — coordinates acquisition across every district and watches statutory timelines.",
    image: "/screenshots/state-dashboard.webp",
    imageAlt: "Terranex state nodal officer dashboard",
    status: "prototype",
  },
  {
    id: "collector_cala",
    role: "District Collector / CALA",
    short: "Collector / CALA",
    scope: "District",
    responsibility:
      "Competent Authority and statutory decision-maker — issues notices, hears objections, declares awards.",
    image: "/screenshots/case-dashboard.webp",
    imageAlt: "Terranex District Collector command centre with pending queues and statutory timelines",
    status: "prototype",
  },
  {
    id: "tehsil_sdo",
    role: "Tehsil / Sub-Divisional Officer",
    short: "Tehsil / SDO",
    scope: "Tehsil",
    responsibility:
      "Sub-divisional scrutiny, hearings and village-level coordination within the tehsil.",
    image: "/screenshots/tehsil-parcel-register.webp",
    imageAlt: "Terranex tehsil parcel register",
    status: "prototype",
  },
  {
    id: "field_officer",
    role: "Field Officer / VAO",
    short: "Field Officer",
    scope: "Village",
    responsibility:
      "Ground-level verification, measurement, panchnama and GPS evidence capture.",
    image: "/screenshots/mobile-field-capture.webp",
    imageAlt: "Terranex field officer mobile evidence capture screen",
    status: "prototype",
  },
  {
    id: "sia_expert",
    role: "SIA Expert Group",
    short: "SIA Expert",
    scope: "District",
    responsibility:
      "Independent Social Impact Assessment team — assessment, public consultation and mitigation.",
    image: "/screenshots/sia-gram-sabha.webp",
    imageAlt: "Terranex SIA expert gram sabha public consultation screen",
    status: "prototype",
  },
  {
    id: "rnr_officer",
    role: "R&R Officer",
    short: "R&R Officer",
    scope: "District",
    responsibility:
      "Rehabilitation and resettlement entitlements, colony development and site readiness.",
    image: "/screenshots/rr-dashboard.webp",
    imageAlt: "Terranex rehabilitation and resettlement officer dashboard",
    status: "prototype",
  },
  {
    id: "finance_officer",
    role: "Finance / Payment Officer",
    short: "Finance Officer",
    scope: "District",
    responsibility:
      "Compensation computation, award sanction and disbursement through the payment queue.",
    image: "/screenshots/finance-dashboard.webp",
    imageAlt: "Terranex finance officer compensation dashboard",
    status: "prototype",
  },
  {
    id: "citizen",
    role: "Citizen / Landowner",
    short: "Citizen",
    scope: "Own holdings",
    responsibility:
      "Affected landholder — sees notices, files objections and tracks compensation for their own parcel.",
    image: "/screenshots/citizen-case-status.webp",
    imageAlt: "Terranex citizen portal showing personal case status and timeline",
    status: "prototype",
  },
];

export const ROLE_SCOPE_NOTE =
  "National → State → District → Tehsil → Village. Jurisdiction, not a login, decides what a user can see.";

/* ── Section 09 — End-to-end journey ─────────────────────────────────── */

export type JourneyStep = {
  n: string;
  title: string;
  body: string;
  who: string;
  image: string;
  imageAlt: string;
  status: Status;
};

export const JOURNEY: JourneyStep[] = [
  {
    n: "01",
    title: "Parcel Identified",
    body: "The project footprint is drawn against the cadastral layer, and the affected parcels become a concrete list with survey numbers.",
    who: "Collector / CALA, Field Officer",
    image: "/screenshots/gis-project-alignment.webp",
    imageAlt: "Terranex project GIS with parcel and alignment layers",
    status: "prototype",
  },
  {
    n: "02",
    title: "Case Created",
    body: "Parcels are grouped into an acquisition case with a case number, a jurisdiction and an assigned competent authority.",
    who: "Requiring Organization, Collector",
    image: "/screenshots/case-register.webp",
    imageAlt: "Terranex acquisition case register",
    status: "prototype",
  },
  {
    n: "03",
    title: "Records Verified",
    body: "Recorded ownership is checked against the parcel register and discrepancies are raised as a task, not a phone call.",
    who: "Tehsil / SDO, Field Officer",
    image: "/screenshots/tehsil-parcel-register.webp",
    imageAlt: "Terranex tehsil parcel register used for ownership verification",
    status: "prototype",
  },
  {
    n: "04",
    title: "Documents Linked",
    body: "The proposal, the GIS report and the field evidence are attached to the case, each tagged with its stage and uploader.",
    who: "All roles, scoped to their stage",
    image: "/screenshots/document-vault.webp",
    imageAlt: "Terranex document vault with files linked to cases and stages",
    status: "prototype",
  },
  {
    n: "05",
    title: "Notice & Acquisition",
    body: "u/s 11(1) notice is generated, objections are heard, and the 19(1) declaration is issued — each step dated and attributable.",
    who: "Collector / CALA, Tehsil / SDO",
    image: "/screenshots/case-declarations.webp",
    imageAlt: "Terranex declaration management screen",
    status: "prototype",
  },
  {
    n: "06",
    title: "Field Verification",
    body: "The field officer measures the parcel on the ground, verifies the owner and captures GPS-tagged evidence.",
    who: "Field Officer / VAO",
    image: "/screenshots/case-field-verification.webp",
    imageAlt: "Terranex field verification tracking screen",
    status: "prototype",
  },
  {
    n: "07",
    title: "Compensation",
    body: "Assessment is computed per parcel, the award enquiry runs, and the finance officer sanctions the payment.",
    who: "Collector / CALA, Finance Officer",
    image: "/screenshots/case-compensation.webp",
    imageAlt: "Terranex compensation management screen with per-parcel status",
    status: "prototype",
  },
  {
    n: "08",
    title: "R&R",
    body: "Entitlements, housing, livelihood and site readiness are tracked as their own workflow, not folded into payment.",
    who: "R&R Officer",
    image: "/screenshots/case-rehabilitation.webp",
    imageAlt: "Terranex rehabilitation and resettlement tracking screen",
    status: "prototype",
  },
  {
    n: "09",
    title: "Case Closed",
    body: "Possession is handed over and the case closes — with the full history still attached to the parcel.",
    who: "Collector / CALA",
    image: "/screenshots/case-possession.webp",
    imageAlt: "Terranex possession handover screen",
    status: "prototype",
  },
  {
    n: "10",
    title: "Audit Trail",
    body: "Every action above is written once to the shared ledger: actor, role, jurisdiction, stage, timestamp, IP.",
    who: "Auditable by all roles",
    image: "/screenshots/audit-trail.webp",
    imageAlt: "Terranex shared audit ledger",
    status: "prototype",
  },
];

/* ── Section 10 — Traceability ────────────────────────────────────────── */

export type TraceNode = { id: string; label: string; sub?: string; col: number; row: number };

export const TRACE_NODES: TraceNode[] = [
  { id: "parcel", label: "PARCEL", sub: "survey no · area · land use", col: 2, row: 0 },
  { id: "case", label: "CASE", sub: "case no · stage · owner", col: 0, row: 1 },
  { id: "documents", label: "DOCUMENTS", sub: "file · uploader · state", col: 2, row: 1 },
  { id: "ownership", label: "OWNERSHIP", sub: "recorded holder", col: 4, row: 1 },
  { id: "compensation", label: "COMPENSATION", sub: "assessment · award", col: 0, row: 2 },
  { id: "rnr", label: "R&R", sub: "entitlements · site", col: 4, row: 2 },
  { id: "audit", label: "AUDIT TRAIL", sub: "actor · role · time · IP", col: 2, row: 3 },
];

export const TRACE_EDGES: [string, string][] = [
  ["parcel", "case"],
  ["parcel", "documents"],
  ["parcel", "ownership"],
  ["case", "compensation"],
  ["case", "rnr"],
  ["compensation", "audit"],
  ["rnr", "audit"],
];

/* ── Section 11 — Auditability ────────────────────────────────────────── */

export type AuditEvent = {
  time: string;
  title: string;
  actor: string;
  role: string;
  stage: string;
  kind: "create" | "link" | "document" | "verify" | "notice" | "money" | "rnr" | "close";
};

export const AUDIT_EVENTS: AuditEvent[] = [
  { time: "09:42", title: "Case created", actor: "Shri. A. Deshmukh", role: "requiring org", stage: "project proposal", kind: "create" },
  { time: "10:13", title: "Parcel linked to case", actor: "Dr. Suhas Diwase", role: "collector cala", stage: "gis identification", kind: "link" },
  { time: "11:07", title: "Document uploaded", actor: "Shri. M. Kamble", role: "field officer", stage: "field verification", kind: "document" },
  { time: "11:22", title: "Verification completed", actor: "Smt. Kavita Patil", role: "tehsil sdo", stage: "field verification", kind: "verify" },
  { time: "12:04", title: "Notice generated", actor: "Dr. Suhas Diwase", role: "collector cala", stage: "preliminary notification", kind: "notice" },
  { time: "14:36", title: "Compensation updated", actor: "Smt. R. Kulkarni", role: "finance officer", stage: "compensation", kind: "money" },
  { time: "16:10", title: "R&R status changed", actor: "Smt. Asha Khedkar", role: "r&r officer", stage: "r_and_r", kind: "rnr" },
  { time: "17:02", title: "Case advanced", actor: "Dr. Suhas Diwase", role: "collector cala", stage: "closed", kind: "close" },
];

export const AUDIT_FIELDS = [
  "Timestamp",
  "Actor",
  "Role",
  "Jurisdiction",
  "Case",
  "Stage transition",
  "Source IP",
];

/* ── Section 12 — Mobile / field ──────────────────────────────────────── */

export const FIELD_FLOW = [
  "Field Officer",
  "Parcel Lookup",
  "Field Verification",
  "Document Capture",
  "Status Update",
  "Central Case",
];

export type FieldCapture = { src: string; alt: string; title: string };

export const FIELD_CAPTURES: FieldCapture[] = [
  { src: "/screenshots/mobile-field-home.webp", alt: "Terranex field officer mobile home screen with assigned and completed task counts", title: "Assigned work" },
  { src: "/screenshots/mobile-field-map.webp", alt: "Terranex field map view listing assigned parcels with status", title: "Parcel lookup" },
  { src: "/screenshots/mobile-field-owner-verify.webp", alt: "Terranex field officer owner verification screen", title: "Owner verify" },
  { src: "/screenshots/mobile-field-capture.webp", alt: "Terranex field evidence photo capture screen", title: "Evidence capture" },
  { src: "/screenshots/mobile-field-gps.webp", alt: "Terranex field GPS capture screen", title: "GPS capture" },
  { src: "/screenshots/mobile-field-assets.webp", alt: "Terranex field measurement and asset details screen", title: "Measurements" },
];

export const FIELD_ON_DEVICE = [
  "Home dashboard with derived case counts and today's tasks",
  "Case list scoped to the officer's jurisdiction, with search and status filters",
  "Case dossier — parcel, landowner on record, tasks, map, timeline, documents, evidence",
  "9-step verification wizard with local auto-save",
  "GPS fix and photo evidence attached to the parcel",
  "Sync Center with pending / synced / failed counts, SYNC NOW and a retry schedule",
];

/**
 * Dossier concept → actual fo-app screen.
 *
 * Screen names use the application's own terminology (tabs Home · Cases · Map ·
 * Sync · More, plus the 9-step verification wizard). Every row is implemented in
 * the Flutter field-officer client against its mock backend; production sign-in,
 * device rollout, the live sync endpoint and real record/GIS integrations are
 * not. No row is mapped where no screen exists.
 */
export type FieldAppMapRow = { concept: string; app: string };

export const FIELD_APP_MAP: FieldAppMapRow[] = [
  { concept: "Field Officer Login", app: "Prototype sign-in gate — pre-filled demo officer, enters offline, no credential check" },
  { concept: "Assigned Cases", app: "Home dashboard + Cases tab — derived counts, today's tasks, search and status filters" },
  { concept: "Case Details", app: "Case dossier — parcel, acquisition, landowner on record, tasks, timeline, documents, evidence" },
  { concept: "Parcel / GIS", app: "Map tab — parcel chips, WKT boundary over map tiles, officer marker, OPEN CASE" },
  { concept: "Documents", app: "Documents screen — ALL / VERIFIED / PENDING / MISSING filters with preview, per case" },
  { concept: "Field Capture", app: "9-step wizard — Location, Parcel, Land Use, Structures, Cultivation, Occupant, Documents, Evidence, Review & declaration" },
  { concept: "Sync / Offline", app: "Sync Center — on-device queue with pending / synced / failed counts, SYNC NOW and backoff retry" },
  { concept: "Notifications", app: "Notifications inbox — unread badges with MARK ALL READ" },
  { concept: "Profile / Settings", app: "More tab — officer profile and server URL config" },
];

/* ── Section 13 — Architecture ────────────────────────────────────────── */

export type ArchLayer = { label: string; items: string[]; status: Status };

export const ARCH_LAYERS: ArchLayer[] = [
  { label: "Client", items: ["Web portal", "Field officer mobile app", "Citizen portal"], status: "prototype" },
  { label: "Application", items: ["Role-based workspaces", "Workflow & task engine", "GIS & spatial services"], status: "prototype" },
  { label: "API / Services", items: ["Case service", "Document service", "Auth & RBAC", "Workflow service"], status: "planned" },
  { label: "Data", items: ["PostgreSQL", "PostGIS parcel geometry", "Audit ledger"], status: "planned" },
  { label: "Document Storage", items: ["Controlled document repository", "Field evidence & photos"], status: "planned" },
  { label: "Integration", items: ["DILRMP / ULPIN", "State land records", "PFMS", "PM Gati Shakti", "Bhoomi Rashi"], status: "planned" },
];

export const STACK = [
  { layer: "Framework", tech: "React 18 · TypeScript · Vite" },
  { layer: "Styling", tech: "Tailwind CSS · Radix UI" },
  { layer: "State", tech: "Zustand (prototype) → API client" },
  { layer: "Routing", tech: "React Router 6" },
  { layer: "GIS", tech: "Leaflet · React-Leaflet" },
  { layer: "Charts", tech: "Recharts" },
  { layer: "Icons", tech: "Lucide React" },
  { layer: "Target data", tech: "PostgreSQL + PostGIS" },
];

/* ── Section 14 — Security & governance ───────────────────────────────── */

export const SECURITY = [
  {
    title: "Role-Based Access",
    body: "Eleven roles, each with its own workspace. A user only reaches the navigation and actions relevant to their responsibility.",
    status: "prototype" as Status,
  },
  {
    title: "Jurisdiction Scoping",
    body: "Visibility is bounded by scope — national, state, district, tehsil, village or a single project — not by preference.",
    status: "prototype" as Status,
  },
  {
    title: "Server-Side Authorization",
    body: "Identity and role decisions are enforced by the backend on every request, not trusted to the client — specified for the target build and not yet connected.",
    status: "planned" as Status,
  },
  {
    title: "Audit Trail",
    body: "State-changing actions write one event carrying actor, role, jurisdiction, stage and source IP. The event structure and the audit history run in the prototype; tamper-proof retention does not.",
    status: "prototype" as Status,
  },
  {
    title: "Controlled Documents",
    body: "Files stay attached to the case and access context that permits them, rather than sitting in a shared folder.",
    status: "prototype" as Status,
  },
  {
    title: "Stage Gates",
    body: "A stage cannot be advanced until the evidence its gate requires is present on the case.",
    status: "prototype" as Status,
  },
];

export const SECURITY_DISCLAIMER =
  "No security certification is claimed. The controls above describe the access model designed and implemented in the prototype, and the enforcement points planned for the backend. Audit events are represented and displayed today; server-side retention and immutability of those events belong to the target implementation.";

/* ── Section 15 — Prototype vs implementation ─────────────────────────── */

export const PROTOTYPE_NOW = [
  "Role-based UI across 11 roles and 284 screens",
  "Jurisdiction-scoped workspaces and navigation",
  "GIS interface with interactive parcel layers",
  "Case management with a 17-stage statutory pipeline",
  "Document vault linked to case, stage and uploader",
  "Shared audit ledger with actor, role and IP",
  "Citizen portal for notices, objections and status",
  "End-to-end workflow demonstration on synthetic data",
];

export const TARGET_NEXT = [
  "Backend API and workflow engine replacing in-memory stores",
  "PostgreSQL with PostGIS for parcel geometry and cases",
  "Production land and parcel datasets",
  "Server-side authentication and authorization",
  "Controlled document storage with retention rules",
  "DILRMP / ULPIN ownership integration",
  "PFMS sanction and disbursement integration",
  "PM Gati Shakti alignment ingestion",
  "Field mobile deployment to government devices against the production sync endpoint",
];

export const DATA_STATEMENT =
  "Every figure, parcel boundary, survey number, owner and monetary value shown in this dossier is synthetic demonstration data. None of it is a government record.";

/** Stack summary lines shown under the two PrototypeStatus columns. */
export const PROTOTYPE_STACK_LINE =
  "React 18 + TypeScript + Vite · Zustand in-memory stores · Leaflet · Recharts";
export const TARGET_STACK_LINE = "PostgreSQL + PostGIS · API layer · server-side RBAC · object storage";

/** What this build deliberately does not contain. */
export const NOT_PRESENT = [
  "No login or authentication",
  "No backend or live database",
  "No API calls of any kind",
  "No live GIS or parcel service",
  "No payment processing",
  "No government system connection",
  "No real-time data or analytics",
  "No AI, OCR or chat assistant",
];

/**
 * The capability matrix: one row per judge-relevant capability, classified with
 * the same `Status` vocabulary used everywhere else on the site.
 */
export type CapabilityRow = { capability: string; status: Status };

export const CAPABILITY_MATRIX: CapabilityRow[] = [
  { capability: "Role-based interface across 11 roles", status: "prototype" },
  { capability: "GIS parcel visualization", status: "prototype" },
  { capability: "Acquisition case workflow", status: "prototype" },
  { capability: "Document linking to case, stage and uploader", status: "prototype" },
  { capability: "Audit history interface", status: "prototype" },
  { capability: "17-stage statutory workflow model", status: "prototype" },
  { capability: "Mobile field workflow", status: "prototype" },
  { capability: "Persistent backend services", status: "planned" },
  { capability: "PostGIS persistence", status: "planned" },
  { capability: "Government system integrations", status: "planned" },
  { capability: "Production authentication", status: "planned" },
  { capability: "Real government datasets", status: "planned" },
];

/* ── Section 16 — Roadmap ─────────────────────────────────────────────── */

export type Phase = {
  id: string;
  name: string;
  body: string;
  items: string[];
  state: "done" | "active" | "next";
};

export const PHASES: Phase[] = [
  {
    id: "phase-01",
    name: "Prototype",
    body: "Validate the workflow and the interface with the people who will actually use it.",
    items: ["11 role workspaces", "17-stage case model", "GIS, cases, documents, audit"],
    state: "done",
  },
  {
    id: "phase-02",
    name: "MVP",
    body: "Replace every mock with a real service, and put the data in a database.",
    items: ["Backend API", "PostgreSQL + PostGIS", "Server-side RBAC", "Document storage"],
    state: "active",
  },
  {
    id: "phase-03",
    name: "Pilot",
    body: "Run the workflow end to end for one real district with real files.",
    items: ["Single district", "Real land records", "Statutory instruments", "Field officers on device"],
    state: "next",
  },
  {
    id: "phase-04",
    name: "Integration",
    body: "Reconcile with the systems that already hold the data.",
    items: ["DILRMP / ULPIN", "PFMS", "PM Gati Shakti", "Bhoomi Rashi"],
    state: "next",
  },
  {
    id: "phase-05",
    name: "Scale",
    body: "Extend the same model across districts and states.",
    items: ["Multi-district", "Multi-state", "National monitoring", "Citizen transparency"],
    state: "next",
  },
];

export const ROADMAP_NOTE =
  "Phases describe sequence, not calendar. Durations are set by data-access agreements and statutory rollout, not by the team.";

/* ── Section 17 — Why Terranex ────────────────────────────────────────── */

export const BEFORE_CHAIN = [
  "Fragmented Information",
  "Manual Coordination",
  "Limited Visibility",
  "Difficult Traceability",
];

export const AFTER_CHAIN = [
  "Connected Parcel",
  "Connected Case",
  "Connected Documents",
  "Connected Workflow",
  "Traceable History",
];

/**
 * The conceptual backbone of Terranex: the parcel is the spatial anchor and
 * every other record hangs off it, in order.
 */
export const CONCEPTUAL_CHAIN = [
  "GIS Parcel",
  "Survey Number",
  "Owner / Record",
  "Acquisition Case",
  "Statutory Stage",
  "Documents",
  "Compensation",
  "R&R",
  "Audit Trail",
];

export const CONCEPTUAL_CHAIN_LEAD =
  "A parcel becomes the spatial anchor for the entire acquisition case.";

export const CONCEPTUAL_CHAIN_NOTE =
  "Statutory stages govern the case's progression. Documents, compensation and rehabilitation stay attached to it as obligations, and every action on it lands in the audit history.";

/* ── Section 18 — Final vision ────────────────────────────────────────── */

export const VISION_COMPOSITE = [
  { src: "/screenshots/gis-project-alignment.webp", alt: "Terranex GIS parcel and alignment view", label: "GIS" },
  { src: "/screenshots/case-dashboard.webp", alt: "Terranex case command centre", label: "Cases" },
  { src: "/screenshots/document-vault.webp", alt: "Terranex document vault", label: "Documents" },
  { src: "/screenshots/mobile-field-capture.webp", alt: "Terranex field officer mobile capture", label: "Field" },
  { src: "/screenshots/audit-trail.webp", alt: "Terranex audit ledger", label: "Audit" },
  { src: "/screenshots/admin-integrations.webp", alt: "Terranex system integration registry", label: "Integrations" },
];

/* ── Screenshot dimensions (intrinsic, for CLS-free layout) ──────────── */

export const DESKTOP_SHOT = { w: 1680, h: 1056 };
export const MOBILE_SHOT = { w: 780, h: 1688 };
