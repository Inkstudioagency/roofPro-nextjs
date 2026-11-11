// CtaTwoSection: converted 1:1 from the Astro template (section_cta-two in pages/services.astro and pages/services/[slug].astro — identical).
// Astro compresses template whitespace, so no inter-tag whitespace is emitted.
import Link from "next/link";

export default function CtaTwoSection() {
  return (
    <section className="section_cta-two">
      <div className="section-gap">
        <div className="w-layout-blockcontainer container-main w-container">
          <div className="cta-two-wrapper">
            <div className="cta-two-content-block">
              <div className="cta-title-block max-width-380 mobile-full">
                <h2 className="heading-style-2 text-color-white">Ready to Get <span className="heading-style-2-wht">Started?</span></h2>
              </div>
              <div className="cta-summary-block">
                <p className="paragraph-small text-color-white _80">Contact us today for a free consultation and quote for your roofing project.</p>
              </div>
            </div>
            <div className="cta-two-button-block">
              <Link href="/contact" className="white-button is-2 w-inline-block">
                <div className="button-text-block varient-3">
                  <div className="button-text is-1 varient-4">Get Free Inspection</div>
                  <div className="button-text is-2 varient-5">Get Free Inspection</div>
                </div>
              </Link>
              <a data-wf--secondary-button--variant="varient-2" href="tel:+(555)1234-5678" className="secondary-button w-variant-85a64691-fa29-aa50-59ed-622e1687be9b w-inline-block">
                <div className="button-text-block">
                  <div className="button-text is-1">Call Now</div>
                  <div className="button-text is-2">Call Now</div>
                </div>
                <div className="button-icon-block">
                  <div className="button-icon is-1 w-embed"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4113_220)"><path d="M17 6.99951L7 16.9995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 6.99951H17V15.9995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_4113_220"><rect width="24" height="24" fill="currentColor" transform="matrix(-1 0 0 1 24 0)"></rect></clipPath></defs></svg></div>
                  <div className="button-icon is-2 w-embed"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4113_220)"><path d="M17 6.99951L7 16.9995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 6.99951H17V15.9995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_4113_220"><rect width="24" height="24" fill="currentColor" transform="matrix(-1 0 0 1 24 0)"></rect></clipPath></defs></svg></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
