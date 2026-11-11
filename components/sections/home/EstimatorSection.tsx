"use client";

// EstimatorSection: converted 1:1 from the Astro template (pages/index.astro,
// section_estimator) with the behaviour of its inline <script> ported to React
// state. Rates, multipliers, rounding, formatting and the CTA URL are identical
// to the original script; the CTA is a next/link whose href carries the same
// query string the script wrote (/contact ignores it, as on the Astro site).
// Astro compresses template whitespace, so no inter-tag whitespace is emitted.
import { useState } from "react";
import Link from "next/link";

const RATE: Record<string, number> = { asphalt: 4.5, metal: 9, tile: 11, flat: 6.5 };
const RATE_LABEL: Record<string, string> = { asphalt: "Asphalt Shingles", metal: "Metal", tile: "Tile", flat: "Flat / TPO" };
const TYPE_MULT: Record<string, number> = { residential: 1, commercial: 1.15, industrial: 1.3 };
const PITCH_MULT: Record<string, number> = { low: 0.95, standard: 1, steep: 1.2 };
const TYPE_LABEL: Record<string, string> = { residential: "Residential", commercial: "Commercial", industrial: "Industrial" };

function formatMoney(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export default function EstimatorSection() {
  // Initial values = the exported form defaults (residential, 2000 sq ft, asphalt, standard).
  const [type, setType] = useState("residential");
  const [sizeRaw, setSizeRaw] = useState("2000");
  const [material, setMaterial] = useState("asphalt");
  const [pitch, setPitch] = useState("standard");

  // recalc() from the original script
  const size = Number(sizeRaw);
  const rate = RATE[material] || RATE.asphalt;
  const typeMult = TYPE_MULT[type] || 1;
  const pitchMult = PITCH_MULT[pitch] || 1;
  const base = size * rate * typeMult * pitchMult;
  const low = Math.round(base * 0.9);
  const high = Math.round(base * 1.15);
  const hint = TYPE_LABEL[type] + " · " + RATE_LABEL[material] + " · " + size.toLocaleString("en-US") + " sq ft";
  const ctaHref =
    "/contact?roofType=" + encodeURIComponent(type) +
    "&material=" + encodeURIComponent(material) +
    "&pitch=" + encodeURIComponent(pitch) +
    "&size=" + encodeURIComponent(size) +
    "&estimateLow=" + low +
    "&estimateHigh=" + high;

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
                <select id="est-type" className="estimator-select" value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              <div className="estimator-field">
                <label className="estimator-label" htmlFor="est-size">Approx. Roof Size</label>
                <input id="est-size" className="estimator-range" type="range" min="800" max="8000" step="100" value={sizeRaw} onChange={(e) => setSizeRaw(e.target.value)} />
                <div className="estimator-range-value"><span id="est-size-value">{size.toLocaleString("en-US")}</span> sq ft</div>
              </div>
              <div className="estimator-field">
                <label className="estimator-label" htmlFor="est-material">Material</label>
                <select id="est-material" className="estimator-select" value={material} onChange={(e) => setMaterial(e.target.value)}>
                  <option value="asphalt">Asphalt Shingles</option>
                  <option value="metal">Metal</option>
                  <option value="tile">Tile</option>
                  <option value="flat">Flat / TPO</option>
                </select>
              </div>
              <div className="estimator-field">
                <label className="estimator-label" htmlFor="est-pitch">Roof Pitch</label>
                <select id="est-pitch" className="estimator-select" value={pitch} onChange={(e) => setPitch(e.target.value)}>
                  <option value="low">Low-Slope / Flat</option>
                  <option value="standard">Standard</option>
                  <option value="steep">Steep / Complex</option>
                </select>
              </div>
              <div id="est-result" className="estimator-result">
                <p className="estimator-result-label">Estimated project cost</p>
                <p className="estimator-result-value"><span id="est-low">{formatMoney(low)}</span> – <span id="est-high">{formatMoney(high)}</span></p>
                <p className="estimator-result-hint" id="est-hint">{hint}</p>
              </div>
              <Link href={ctaHref} id="est-cta" className="primary-button estimator-button w-inline-block">
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
