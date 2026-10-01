import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Hero } from "@/sections/Hero";
import { Problem } from "@/sections/Problem";
import { Solution } from "@/sections/Solution";
import { AtAGlance } from "@/sections/AtAGlance";
import { Gis } from "@/sections/Gis";
import { Cases } from "@/sections/Cases";
import { Documents } from "@/sections/Documents";
import { Roles } from "@/sections/Roles";
import { Journey } from "@/sections/Journey";
import { Traceability } from "@/sections/Traceability";
import { Auditability } from "@/sections/Auditability";
import { Mobile } from "@/sections/Mobile";
import { Architecture } from "@/sections/Architecture";
import { Security } from "@/sections/Security";
import { PrototypeStatus } from "@/sections/PrototypeStatus";
import { Roadmap } from "@/sections/Roadmap";
import { WhyTerranex } from "@/sections/WhyTerranex";
import { FinalVision } from "@/sections/FinalVision";

/**
 * The dossier is a single narrative document. Sections are rendered in the
 * order a judge should read them: problem → solution → modules → workflow →
 * traceability → governance → architecture → roadmap → vision.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <AtAGlance />
        <Gis />
        <Cases />
        <Documents />
        <Roles />
        <Journey />
        <Traceability />
        <Auditability />
        <Mobile />
        <Architecture />
        <Security />
        <PrototypeStatus />
        <Roadmap />
        <WhyTerranex />
        <FinalVision />
      </main>
      <Footer />
    </>
  );
}
