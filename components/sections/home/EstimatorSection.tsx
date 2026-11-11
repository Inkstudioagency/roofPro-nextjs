// EstimatorSection: converted 1:1 from the Astro template (pages/index.astro, section_estimator (calculator behaviour from the inline script is added in Phase 4)).
// Astro compresses template whitespace, so no inter-tag whitespace is emitted.
import Link from "next/link";

export default function EstimatorSection() {
  return (
    <section className="section_estimator" id="section_estimator">
      <div className="section-gap">
        <div className="w-layout-blockcontainer container-main w-container">
          <div className="estimator-wrapper">
            <div className="estimator-info-block">
              <div className="section-title-block max-width-300">
                <h2 className="heading-style-2 text-color-white">Instant <span className="heading-style-2-ht">Estimate</span></h2>
              </div>
              <p className="paragraph-small text-color-white estimator-note">Answer three quick questions and see a ballpark roofing cost before you even call us.</p>
              <ul className="estimator-points">
                <li>No obligation, no spam</li>
                <li>Based on 1,200+ completed roofs</li>
                <li>Takes under 30 seconds</li>
              </ul>
            </div>
            <div className="estimator-card-block">
              <div className="estimator-field">
                <label className="estimator-label" htmlFor="est-type">Roof Type</label>
                <select id="est-type" className="estimator-select">
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              <div className="estimator-field">
                <label className="estimator-label" htmlFor="est-size">Approx. Roof Size</label>
                <input id="est-size" className="estimator-range" type="range" min="800" max="8000" step="100" defaultValue="2000" />
                <div className="estimator-range-value"><span id="est-size-value">2,000</span> sq ft</div>
              </div>
              <div className="estimator-field">
                <label className="estimator-label" htmlFor="est-material">Material</label>
                <select id="est-material" className="estimator-select">
                  <option value="asphalt">Asphalt Shingles</option>
                  <option value="metal">Metal</option>
                  <option value="tile">Tile</option>
                  <option value="flat">Flat / TPO</option>
                </select>
              </div>
              <div className="estimator-field">
                <label className="estimator-label" htmlFor="est-pitch">Roof Pitch</label>
                <select id="est-pitch" className="estimator-select" defaultValue="standard">
                  <option value="low">Low-Slope / Flat</option>
                  <option value="standard">Standard</option>
                  <option value="steep">Steep / Complex</option>
                </select>
              </div>
              <div id="est-result" className="estimator-result">
                <p className="estimator-result-label">Estimated project cost</p>
                <p className="estimator-result-value"><span id="est-low"></span> – <span id="est-high"></span></p>
                <p className="estimator-result-hint" id="est-hint"></p>
              </div>
              <Link href="/contact" id="est-cta" className="primary-button estimator-button w-inline-block">
                <div className="button-text-block">
                  <div className="button-text is-1">Get My Free Quote</div>
                  <div className="button-text is-2">Get My Free Quote</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
