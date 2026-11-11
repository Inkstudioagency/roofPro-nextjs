import type { Metadata } from "next";
import WebflowPage from "@/components/webflow/WebflowPage";
import BreadcrumbSection from "@/components/sections/about/BreadcrumbSection";
import OurStorySection from "@/components/sections/about/OurStorySection";
import OurPurposeSection from "@/components/sections/about/OurPurposeSection";
import ProjectResultSection from "@/components/sections/about/ProjectResultSection";
import CoreValuesSection from "@/components/sections/about/CoreValuesSection";
import OurTeamSection from "@/components/sections/about/OurTeamSection";
import ProcessSection from "@/components/sections/about/ProcessSection";
import { pageMetadata } from "@/lib/site";

// Astro: src/pages/about.astro (raw Webflow body, sections in original order).
export const metadata: Metadata = pageMetadata({ title: "About || Roofing Services Website Template" });

export default function AboutPage() {
  return (
    <>
      <WebflowPage page="about" />
      <main className="main-wrapper">{" "}
        <BreadcrumbSection />{" "}
        <OurStorySection />{" "}
        <OurPurposeSection />{" "}
        <ProjectResultSection />{" "}
        <CoreValuesSection />{" "}
        <OurTeamSection />{" "}
        <ProcessSection />{" "}
      </main>
    </>
  );
}
