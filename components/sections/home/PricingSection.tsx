// PricingSection: converted 1:1 from the Astro template (pages/index.astro, section_pricing).
// Astro compresses template whitespace, so no inter-tag whitespace is emitted.
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="section_pricing">
      <div className="section-gap">
        <div className="w-layout-blockcontainer container-main w-container">
          <div className="pricing-wrapper">
            <div className="section-heading-block center-align">
              <div className="section-title-block">
                <h2 className="heading-style-2 text-align-center">Pricing <span className="heading-style-2-ht">Plans</span></h2>
              </div>
              <div className="section-summary-block max-width-500 top-space-lg">
                <p className="paragraph-small text-align-center">Transparent starting prices — final cost depends on roof size and a free on-site inspection</p>
              </div>
            </div>
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-name">Essential Repair</div>
                <p className="pricing-desc">Minor leaks, storm damage spot-repair, and routine maintenance</p>
                <div className="pricing-price-row">
                  <span className="pricing-price">$450</span>
                  <span className="pricing-price-note">starting price</span>
                </div>
                <ul className="pricing-features">
                  <li><span className="pricing-check"></span>Free inspection &amp; diagnosis</li>
                  <li><span className="pricing-check"></span>Leak &amp; flashing repair</li>
                  <li><span className="pricing-check"></span>Debris &amp; gutter clearing</li>
                  <li><span className="pricing-check"></span>1-year workmanship warranty</li>
                </ul>
                <Link href="/contact" className="secondary-button pricing-cta w-inline-block">
                  <div className="button-text-block">
                    <div className="button-text is-1">Book a Repair</div>
                    <div className="button-text is-2">Book a Repair</div>
                  </div>
                </Link>
              </div>
              <div className="pricing-card is-popular">
                <div className="pricing-badge">Most Popular</div>
                <div className="pricing-name">Full Replacement</div>
                <p className="pricing-desc">Complete tear-off and re-roof with your choice of premium materials</p>
                <div className="pricing-price-row">
                  <span className="pricing-price">$8,500</span>
                  <span className="pricing-price-note">starting price</span>
                </div>
                <ul className="pricing-features">
                  <li><span className="pricing-check"></span>Full tear-off &amp; disposal</li>
                  <li><span className="pricing-check"></span>Asphalt, metal, or tile options</li>
                  <li><span className="pricing-check"></span>Certified installation crew</li>
                  <li><span className="pricing-check"></span>25-year material warranty</li>
                  <li><span className="pricing-check"></span>Dedicated project coordinator</li>
                </ul>
                <Link href="/contact" className="primary-button pricing-cta w-inline-block">
                  <div className="button-text-block">
                    <div className="button-text is-1">Get a Full Quote</div>
                    <div className="button-text is-2">Get a Full Quote</div>
                  </div>
                </Link>
              </div>
              <div className="pricing-card">
                <div className="pricing-name">Premium Protection</div>
                <p className="pricing-desc">An ongoing maintenance plan that catches problems before they leak</p>
                <div className="pricing-price-row">
                  <span className="pricing-price">$450</span>
                  <span className="pricing-price-note">per year</span>
                </div>
                <ul className="pricing-features">
                  <li><span className="pricing-check"></span>Bi-annual inspections</li>
                  <li><span className="pricing-check"></span>Priority emergency response</li>
                  <li><span className="pricing-check"></span>Gutter &amp; drainage checks</li>
                  <li><span className="pricing-check"></span>15% off any repair work</li>
                </ul>
                <Link href="/contact" className="secondary-button pricing-cta w-inline-block">
                  <div className="button-text-block">
                    <div className="button-text is-1">Join the Plan</div>
                    <div className="button-text is-2">Join the Plan</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
