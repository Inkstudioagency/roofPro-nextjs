// MaterialsSection: converted 1:1 from the Astro template (pages/index.astro, section_materials — tab behaviour: components/interactive/MaterialsTabs).
// Astro compresses template whitespace, so no inter-tag whitespace is emitted.

export default function MaterialsSection() {
  return (
    <section className="section_materials">
      <div className="section-gap">
        <div className="w-layout-blockcontainer container-main w-container">
          <div className="materials-wrapper">
            <div className="section-heading-block bottom-space-between">
              <div className="section-title-block max-width-300">
                <h2 className="heading-style-2">Roofing <span className="heading-style-2-ht">Materials</span></h2>
              </div>
              <div className="section-summary-block max-width-500">
                <p className="paragraph-small">Compare systems and pick the roof that fits your home, budget, and climate</p>
              </div>
            </div>
            <div className="materials-content-block">
              <div className="materials-tab-list" role="tablist">
                <button type="button" className="materials-tab is-active" data-material="asphalt" role="tab" aria-selected="true">Asphalt Shingles</button>
                <button type="button" className="materials-tab" data-material="metal" role="tab" aria-selected="false">Metal Roofing</button>
                <button type="button" className="materials-tab" data-material="tile" role="tab" aria-selected="false">Tile</button>
                <button type="button" className="materials-tab" data-material="flat" role="tab" aria-selected="false">Flat &amp; TPO</button>
              </div>
              <div className="materials-panel-block">
                <div className="materials-panel is-active" data-panel="asphalt">
                  <img src="/images/6a5717b9f45479999f4faad3_work-main-image-1.jpg" loading="lazy" alt="asphalt-shingle-roof" className="materials-panel-image" />
                  <div className="materials-panel-content">
                    <h3 className="label-xlarge">Asphalt Shingles</h3>
                    <p className="paragraph-xsmall">Our most popular system — a reliable, budget-friendly roof backed by a manufacturer warranty.</p>
                    <div className="materials-spec-row"><span>Lifespan</span><span>20–30 years</span></div>
                    <div className="materials-spec-row"><span>Avg. cost</span><span>$</span></div>
                    <div className="materials-spec-row"><span>Best for</span><span>Most homes, fast install</span></div>
                  </div>
                </div>
                <div className="materials-panel" data-panel="metal">
                  <img src="/images/6a5717b9f45479999f4faad1_work-main-image-2.jpg" loading="lazy" alt="metal-roof" className="materials-panel-image" />
                  <div className="materials-panel-content">
                    <h3 className="label-xlarge">Metal Roofing</h3>
                    <p className="paragraph-xsmall">Lightweight, fire-resistant panels that shed snow and rain and hold up to severe weather.</p>
                    <div className="materials-spec-row"><span>Lifespan</span><span>40–70 years</span></div>
                    <div className="materials-spec-row"><span>Avg. cost</span><span>$$$</span></div>
                    <div className="materials-spec-row"><span>Best for</span><span>Storm-prone, energy savings</span></div>
                  </div>
                </div>
                <div className="materials-panel" data-panel="tile">
                  <img src="/images/6a5717b9f45479999f4faacf_work-main-image-3.jpg" loading="lazy" alt="tile-roof" className="materials-panel-image" />
                  <div className="materials-panel-content">
                    <h3 className="label-xlarge">Tile</h3>
                    <p className="paragraph-xsmall">Clay or concrete tile built to last generations, with the classic profile buyers love.</p>
                    <div className="materials-spec-row"><span>Lifespan</span><span>50+ years</span></div>
                    <div className="materials-spec-row"><span>Avg. cost</span><span>$$$$</span></div>
                    <div className="materials-spec-row"><span>Best for</span><span>Hot climates, resale value</span></div>
                  </div>
                </div>
                <div className="materials-panel" data-panel="flat">
                  <img src="/images/6a5717b9f45479999f4faaa8_work-main-image-4.jpg" loading="lazy" alt="flat-tpo-roof" className="materials-panel-image" />
                  <div className="materials-panel-content">
                    <h3 className="label-xlarge">Flat &amp; TPO</h3>
                    <p className="paragraph-xsmall">Seamless membrane roofing for low-slope commercial and residential additions.</p>
                    <div className="materials-spec-row"><span>Lifespan</span><span>20–30 years</span></div>
                    <div className="materials-spec-row"><span>Avg. cost</span><span>$$</span></div>
                    <div className="materials-spec-row"><span>Best for</span><span>Commercial, extensions</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
