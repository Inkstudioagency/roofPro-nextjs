import type { Metadata } from "next";
import WebflowPage from "@/components/webflow/WebflowPage";
import OurWorkSection from "@/components/cards/OurWorkSection";
import HeroSection from "@/components/sections/home/HeroSection";
import LogoSection from "@/components/sections/home/LogoSection";
import ServiceSection from "@/components/sections/home/ServiceSection";
import MaterialsSection from "@/components/sections/home/MaterialsSection";
import AboutSection from "@/components/sections/home/AboutSection";
import ExpertiseSection from "@/components/sections/home/ExpertiseSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import WhyChooseSection from "@/components/sections/home/WhyChooseSection";
import GallerySection from "@/components/sections/home/GallerySection";
import EstimatorSection from "@/components/sections/home/EstimatorSection";
import PricingSection from "@/components/sections/home/PricingSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import FaqSection from "@/components/sections/home/FaqSection";
import CtaSection from "@/components/sections/home/CtaSection";
import MaterialsTabs from "@/components/interactive/MaterialsTabs";
import ExpertiseAccordion from "@/components/interactive/ExpertiseAccordion";
import BeforeAfterGallery from "@/components/interactive/BeforeAfterGallery";
import { getServices, getWorks } from "@/lib/content";
import { DEFAULT_TITLE, pageMetadata } from "@/lib/site";

// Astro: src/pages/index.astro. The raw Webflow body is split around its two
// CMS sections (Services, Works), which render from CMS data; the Materials,
// Before & After, Estimator and Pricing sections come from the Astro template.
// The {" "} nodes reproduce the whitespace of the raw Webflow segments exactly
// (template parts are whitespace-compressed by Astro). MaterialsTabs,
// ExpertiseAccordion and BeforeAfterGallery render nothing: they sit where the
// Astro inline <script>s were and run the same code after hydration (the
// Estimator's script is ported into EstimatorSection itself).
export const metadata: Metadata = pageMetadata({ title: DEFAULT_TITLE });

export default async function Home() {
  const [services, works] = await Promise.all([getServices(), getWorks()]);
  return (
    <>
      <WebflowPage page="index" />
      <main className="main-wrapper">{" "}
        <HeroSection />{" "}
        <LogoSection />{" "}
        <ServiceSection services={services} />
        <MaterialsSection />
        <MaterialsTabs />
        <AboutSection />{" "}
        <ExpertiseSection />{" "}
        <ProcessSection />{" "}
        <WhyChooseSection />{" "}
        <ExpertiseAccordion />
        <GallerySection />
        <BeforeAfterGallery />
        <OurWorkSection works={works} />
        <EstimatorSection />
        <PricingSection />
        <TestimonialSection />{" "}
        <FaqSection />{" "}
        <CtaSection />{" "}
      </main>
    </>
  );
}
