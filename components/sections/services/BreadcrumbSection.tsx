// BreadcrumbSection: converted 1:1 from the Astro template (pages/services.astro).
// Astro compresses template whitespace, so no inter-tag whitespace is emitted.
import Link from "next/link";

export default function BreadcrumbSection() {
  return (
    <section className="section_breadcrumb service">
      <div className="section-gap hero">
        <div className="w-layout-blockcontainer container-main w-container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-link-block">
              <Link href="/" className="link-button text-color-white w-inline-block">
                <div className="link-button-icon w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                <div className="button-text">Back to Home</div>
              </Link>
            </div>
            <div className="breadcrumb-content-block is-2">
              <div className="breadcrumb-heading-block">
                <div className="breadcrumb-subtitle-block">
                  <div className="breadcrumb-subtitle">Services</div>
                </div>
                <div className="breadcrumb-title-block">
                  <h1 className="heading-style-2 text-color-white">Construction Services</h1>
                </div>
              </div>
              <div className="breadcrumb-summary-block max-width-300">
                <p className="paragraph-small text-color-white">Professional roofing solutions for every type of building</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
