// ServiceSection: converted 1:1 from the Astro template (pages/index.astro, section_service (variant base) with the CMS service cards).
// Astro compresses template whitespace, so no inter-tag whitespace is emitted.
import ServiceCards from "@/components/cards/ServiceCards";
import type { Service } from "@/types/service";

export default function ServiceSection({ services }: { services: Service[] }) {
  return (
    <section data-wf--section-service--variant="base" className="section_service">
      <div className="section-gap">
        <div className="w-layout-blockcontainer container-main w-container">
          <div className="service-wrapper">
            <div className="service-heading-block">
              <div className="section-title-block">
                <h2 className="heading-style-2">Construction <span className="heading-style-2-ht">Services</span></h2>
              </div>
              <div className="section-summary-block top-space-lg mobile-sm">
                <p className="paragraph-small">Professional roofing solutions for every type of building</p>
              </div>
            </div>
            <div data-w-id="40031a16-0ef6-ea08-1a16-c5b8c6ec1c26" className="service-content-block">
              <ServiceCards services={services} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
