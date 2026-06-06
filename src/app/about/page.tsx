import Link from 'next/link';

export default function About() {
  return (
    <section id="view-about" className="view-section active">
      <div className="hero vh-auto">
        <div className="hero-bg"></div>
        <div className="hero-mesh"></div>
        <div className="hero-grid"></div>
        <div className="hero-wrap grid-2">
          <div className="hero-left rv">
            <div className="h-eyebrow"><span className="pulse"></span><span className="eyebrow-t">AB Udyog Pvt. Ltd.</span></div>
            <h1 className="h1">Four Decades of<br/><span style={{ fontWeight: 700 }}>Pure Purpose</span>,<br/><span style={{ fontStyle: 'italic', color: 'var(--y)' }}>One Mission</span></h1>
            <p className="h-desc">Founded in 2019 but grounded in 40+ years of industry expertise, we exist to deliver edible oils of uncompromising purity to every Indian household.</p>
          </div>
        </div>
      </div>
      
      <section className="history-section">
        <div className="wrap">
          <div className="history-grid">
            <div>
              <div className="kicker rv"><div className="k-bar"></div><span className="k-txt">The History</span></div>
              <h2 className="s-h rv" data-d="1">Where We<br/><strong>Come From</strong></h2>
              <p className="body-t rv" data-d="2" style={{ marginTop: '20px' }}>Guided by our philosophy of Purity, Health, and Happiness, we bring over 40 years of deep industry experience through our team's extensive involvement in the Indian agricultural sector.</p>
              
              <div className="history-timeline">
                <div className="tl-item rv">
                  <div className="tl-dot">80s</div>
                  <div className="tl-content">
                    <div className="tl-year">1980s–2010s</div>
                    <div className="tl-title">Decades of Expertise</div>
                    <p className="tl-desc">Our founding team spent 40+ years supplying derivatives to extraction units nationwide, building an unmatched understanding of the value chain.</p>
                  </div>
                </div>
                <div className="tl-item rv" data-d="1">
                  <div className="tl-dot" style={{ background: 'var(--y)', color: 'var(--pd)' }}>19</div>
                  <div className="tl-content">
                    <div className="tl-year">February 2019</div>
                    <div className="tl-title">AB Udyog Incorporated</div>
                    <p className="tl-desc">We incorporated with a vision to bring world-class edible oils directly to Indian households under a brand they could trust completely.</p>
                  </div>
                </div>
                <div className="tl-item rv" data-d="2">
                  <div className="tl-dot">JR</div>
                  <div className="tl-content">
                    <div className="tl-year">Present</div>
                    <div className="tl-title">Growing Across India</div>
                    <p className="tl-desc">Today Jeevan Rekha is one of the most trusted suppliers, with distribution spanning multiple states and a growing family of products.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rv sr">
              <div className="hist-card">
                <div className="hist-card-icon">🏭</div>
                <h4>State-of-Art Manufacturing</h4>
                <p className="body-t">Our flagship facility in Burdwan houses world-class processing units operating to the highest hygiene and quality standards.</p>
              </div>
              <div className="capacity-card">
                <h4 style={{ fontFamily: 'var(--fd)', fontSize: '1.4rem', marginBottom: '16px' }}>Production Capacity</h4>
                <div className="cap-row">
                  <div className="cap-item"><div className="cap-num">300 TPD</div><div style={{ fontSize: '.7rem', marginTop: '4px' }}>Solvent Extraction</div></div>
                  <div className="cap-item"><div className="cap-num">150 TPD</div><div style={{ fontSize: '.7rem', marginTop: '4px' }}>Physical Refinery</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="legacy-section">
        <div className="wrap">
          <div className="legacy-grid">
            <div className="rv sl">
              <div className="legacy-main-card">
                <div className="lmc-quote">"Our deep-rooted experience has made us one of India's most <em>reliable suppliers</em>."</div>
                <div className="lmc-stats">
                  <div className="lmc-stat"><div className="lmc-stat-n">40+</div><div className="lmc-stat-l">Years in Industry</div></div>
                  <div className="lmc-stat"><div className="lmc-stat-n">100%</div><div className="lmc-stat-l">Indigenous</div></div>
                  <div className="lmc-stat"><div className="lmc-stat-n">∞</div><div className="lmc-stat-l">Trust, Always</div></div>
                </div>
              </div>
            </div>
            <div className="rv sr">
              <div className="kicker"><div className="k-bar"></div><span className="k-txt">The Legacy</span></div>
              <h2 className="s-h">A Trusted Name in<br/>the <strong>Rice Bran</strong> <em>Industry</em></h2>
              <p className="body-t" style={{ marginTop: '20px' }}>We supply to solvent extraction units nationwide and have built long-term relationships based on trust, quality, and our commitment to Purity. Health. Happiness.</p>
              <div className="supply-tags">
                <span className="supply-tag">Snack Industry</span>
                <span className="supply-tag">Namkeen Manufacturers</span>
                <span className="supply-tag">Food Processing Units</span>
                <span className="supply-tag">Retail Distribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="commitment-section" style={{ background: 'var(--off)' }}>
        <div className="wrap">
          <div className="kicker rv"><div className="k-bar"></div><span className="k-txt">Our Promise</span></div>
          <h2 className="s-h rv" data-d="1" style={{ marginBottom: '48px' }}>How We Deliver on<br/>Our <strong>Commitment</strong></h2>
          <div className="commit-grid">
            <div className="commit-card rv" style={{ background: 'var(--w)' }}>
              <div className="cc-icon">🇮🇳</div>
              <h3>Atmanirbhar Bharat</h3>
              <p className="body-t">We fully utilize local resources before considering imported alternatives, contributing to India's self-sufficiency.</p>
            </div>
            <div className="commit-card rv" data-d="1" style={{ background: 'var(--p)', color: 'var(--w)', borderColor: 'var(--p)' }}>
              <div className="cc-icon" style={{ background: 'rgba(255,255,255,.1)', color: 'var(--y)' }}>🔬</div>
              <h3 style={{ color: 'var(--w)' }}>In-House Quality</h3>
              <p className="body-t" style={{ color: 'rgba(255,255,255,.7)' }}>We use the same oil in-house that we deliver to our customers. We stand behind every batch because we cook with it ourselves.</p>
            </div>
            <div className="commit-card rv" data-d="2" style={{ background: 'var(--y)', borderColor: 'var(--y)' }}>
              <div className="cc-icon" style={{ background: 'rgba(0,0,0,.05)', color: 'var(--p)' }}>🌱</div>
              <h3>Community Welfare</h3>
              <p className="body-t" style={{ color: 'rgba(0,0,0,.7)' }}>We invest in the communities and farmers that make our products possible, creating sustainable livelihoods.</p>
            </div>
            <div className="commit-card rv" data-d="3" style={{ background: 'var(--w)' }}>
              <div className="cc-icon">📦</div>
              <h3>Safe Packaging</h3>
              <p className="body-t">Each unit is hygienically packed, tamper-proof sealed, and clearly labelled ensuring full transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="cta-strip cta-plum">
        <div className="cta-inner">
          <div className="rv sl">
            <h2 className="s-h">Partner with a<br/><em>Legacy of Purity</em></h2>
            <p className="body-t" style={{ marginTop: '16px' }}>Discover how 40+ years of expertise translates into consistent quality that India trusts.</p>
          </div>
          <div className="rv sr" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-y">Get in Touch</Link>
            <Link href="/products" className="btn-outline">Explore Range</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
