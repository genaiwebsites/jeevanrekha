import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Home() {
  return (
    <section id="view-home" className="view-section active">
      <div className="hero vh-100">
        <div className="hero-bg"></div>
        <div className="hero-mesh"></div>
        <div className="hero-grid"></div>
        <div className="hero-orb orb1"></div>
        <div className="hero-orb orb2"></div>
        
        <div className="hero-wrap grid-2">
          <div className="hero-left">
            <div className="h-eyebrow rv"><span className="pulse"></span><span className="eyebrow-t">India's Premium Edible Oils · Est. 2019</span></div>
            <h1 className="h1 rv" data-d="1">
              <span className="h1-a">Nature's Finest</span>
              <span className="h1-b">in Every Drop</span>
              <span className="h1-c">of Purity</span>
            </h1>
            <p className="h-desc rv" data-d="2">From premium <strong>Kacchi Ghani Mustard</strong> to heart-healthy <strong>Rice Bran Oil</strong> — 40+ years of mastery in every bottle. Pure. Indigenous. Trusted.</p>
            <div className="h-btns rv" data-d="3">
              <Link href="/products" className="btn-y">Explore Range</Link>
              <Link href="/about" className="btn-outline">Our Story</Link>
            </div>
          </div>
          <div className="hero-right rv" data-d="2">
            <div className="h-scene">
              <div className="s-glow"></div>
              <div className="s-ring sr1"></div>
              <div className="s-ring sr2"></div>
              <div className="bottle-wrap">
                <svg width="180" height="380" viewBox="0 0 200 400" fill="none">
                  <path d="M66 80 C66 66 74 58 82 54 L118 54 C126 58 134 66 134 80 L148 152 C156 168 160 184 160 200 L160 346 C160 360 149 370 136 370 L64 370 C51 370 40 360 40 346 L40 200 C40 184 44 168 52 152 Z" fill="url(#bg1)"/>
                  <rect x="50" y="212" width="100" height="116" rx="5" fill="#FEDC06"/>
                  <text x="100" y="260" fontFamily="Georgia,serif" fontSize="18" fontWeight="bold" fill="#2D1660" textAnchor="middle">Jeevan Rekha</text>
                  <text x="100" y="280" fontFamily="Georgia,serif" fontSize="14" fontStyle="italic" fill="#2D1660" textAnchor="middle">Premium Oil</text>
                  <rect x="76" y="40" width="48" height="18" rx="9" fill="#FFE84D"/>
                  <defs><linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7540C8"/><stop offset="100%" stopColor="#160840"/></linearGradient></defs>
                </svg>
              </div>
              <div className="d-chip dc-a"><div className="dc-n">254°C</div><div className="dc-l">Smoke Point</div></div>
              <div className="d-chip dc-b"><div className="dc-n">γ-Oryzanol</div><div className="dc-l">Antioxidant</div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-t">
          <span className="ti">Kacchi Ghani Mustard Oil <span className="ti-sep">◆</span></span>
          <span className="ti">Rice Bran Oil <span className="ti-sep">◆</span></span>
          <span className="ti">Soyabean Oil <span className="ti-sep">◆</span></span>
          <span className="ti">FSSAI Certified <span className="ti-sep">◆</span></span>
          <span className="ti">Purity · Health · Happiness <span className="ti-sep">◆</span></span>
          <span className="ti">Burdwan, West Bengal <span className="ti-sep">◆</span></span>
          <span className="ti">Kacchi Ghani Mustard Oil <span className="ti-sep">◆</span></span>
          <span className="ti">Rice Bran Oil <span className="ti-sep">◆</span></span>
          <span className="ti">Soyabean Oil <span className="ti-sep">◆</span></span>
        </div>
      </div>

      {/* Why Choose */}
      <section className="why">
        <div className="wrap">
          <div className="why-top">
            <div>
              <div className="kicker rv"><div className="k-bar"></div><span className="k-txt">Why Jeevan Rekha</span></div>
              <h2 className="s-h rv" data-d="1">Built on <em>Science</em>,<br/>Trusted by <strong>India</strong></h2>
            </div>
            <p className="body-t rv" data-d="2">Four decades of industry knowledge meet state-of-the-art technology at our Burdwan plant — delivering oils as nutritious as they are delicious, batch after batch.</p>
          </div>
          <div className="why-grid">
            <div className="wcard rv">
              <div className="wc-bg-n">01</div>
              <div className="wc-ico"><svg viewBox="0 0 28 28"><path d="M14 2C7.4 2 2 7.4 2 14s5.4 12 12 12 12-5.4 12-12S20.6 2 14 2zm-1 5h2v7l5 3-1 1.8-6-3.5V7z"/></svg></div>
              <h3>State-of-Art Manufacturing</h3>
              <p>Our Burdwan facility houses a 300 TPD Solvent Extraction Plant and 150 TPD Physical Refinery — operating to the highest hygiene and quality standards.</p>
            </div>
            <div className="wcard rv" data-d="1">
              <div className="wc-bg-n">02</div>
              <div className="wc-ico"><svg viewBox="0 0 28 28"><path d="M12 2L3 7v5c0 5.6 3.8 10.9 9 12.3C17.2 22.9 21 17.6 21 12V7L12 2zm0 3.2L19 8.7V12c0 4.4-3 8.5-7 9.9-4-1.4-7-5.5-7-9.9V8.7L12 5.2z"/></svg></div>
              <h3>Authentic Sourcing</h3>
              <p>With 40+ years in the value chain, we partner directly with trusted suppliers across India — relationships built on quality and transparency.</p>
            </div>
            <div className="wcard rv" data-d="2">
              <div className="wc-bg-n">03</div>
              <div className="wc-ico"><svg viewBox="0 0 28 28"><path d="M14 2C7.4 2 2 7.4 2 14s5.4 12 12 12 12-5.4 12-12S20.6 2 14 2zm4.3 8.7L14 18.6l-4.3-4.3 1.4-1.4 2.9 2.9 2.9-5.8 1.8.9-.4.8z"/></svg></div>
              <h3>Atmanirbhar Bharat</h3>
              <p>We proudly support Make-in-India. We use the same oil in-house that we deliver to customers — genuine quality that makes us a preferred supplier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE PRODUCTS SHOWCASE */}
      <section className="prods-home">
        <div className="phd-top">
          <h2 className="phd-title rv">Three Oils. <em>One Standard</em> of Excellence.</h2>
          <Link href="/products" className="phd-btn rv" data-d="1">VIEW ALL PRODUCTS</Link>
        </div>

        <div className="pgrid-home">
          {/* Mustard */}
          <Link href="/products#p-mustard" className="pcard-home rv">
            <div className="pch-bg bg-m"></div>
            <div className="particles"><div className="p-dot"></div><div className="p-dot"></div><div className="p-dot"></div></div>
            <div className="pch-content">
              <img src="/jr_kgmo.png" alt="Mustard Oil" />
              <h3 className="pch-title">Mustard Oil</h3>
            </div>
          </Link>
          {/* Rice Bran */}
          <Link href="/products#p-rice" className="pcard-home rv" data-d="1">
            <div className="pch-bg bg-r"></div>
            <div className="particles"><div className="p-dot"></div><div className="p-dot"></div><div className="p-dot"></div></div>
            <div className="pch-content">
              <img src="/jr_rbo.png" alt="Rice Bran Oil" />
              <h3 className="pch-title">Rice Bran Oil</h3>
            </div>
          </Link>
          {/* Soyabean */}
          <Link href="/products#p-soy" className="pcard-home rv" data-d="2">
            <div className="pch-bg bg-s"></div>
            <div className="particles"><div className="p-dot"></div><div className="p-dot"></div><div className="p-dot"></div></div>
            <div className="pch-content">
              <img src="/jr_sbo.png" alt="Soyabean Oil" />
              <h3 className="pch-title">Soyabean Oil</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="home-stats">
        <div className="wrap">
          <div className="hs-grid">
            <div className="hs-card rv">
              <div className="hs-num">
                <AnimatedCounter target={300} suffix=" TPD" />
              </div>
              <div className="hs-label">Solvent Extraction</div>
            </div>
            <div className="hs-card rv" data-d="1">
              <div className="hs-num">
                <AnimatedCounter target={150} suffix=" TPD" />
              </div>
              <div className="hs-label">Physical Refinery</div>
            </div>
            <div className="hs-card rv" data-d="2">
              <div className="hs-num">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <div className="hs-label">Retail Partners</div>
            </div>
            <div className="hs-card rv" data-d="3">
              <div className="hs-num">
                <AnimatedCounter target={40} suffix="+" />
              </div>
              <div className="hs-label">Years of Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="phil">
        <div className="wrap">
          <div className="phil-grid">
            <div className="rv sl">
              <div className="phil-vis-card">
                <div className="pvc-grid"></div>
                <div className="pvc-glow"></div>
                <span className="p-qmark">"</span>
                <div className="p-quote">Purity. Health. Happiness.<br/><em>Each flows into the next</em><br/>in an unbroken circle.</div>
                <div className="p-sig">The Jeevan Rekha Promise</div>
              </div>
            </div>
            <div className="rv sr">
              <div className="kicker"><div className="k-bar"></div><span className="k-txt">Our Philosophy</span></div>
              <h2 className="s-h" style={{ marginBottom: '26px' }}>When you choose <em>pure</em>,<br/>you choose <strong>life itself</strong></h2>
              <p className="body-t" style={{ marginBottom: '20px' }}>When we strip away the artificial and embrace what's genuine, our lives transform. A pure existence creates the foundation for true health that no medicine can replicate.</p>
              <p className="body-t" style={{ marginBottom: '30px' }}>Health is vitality flowing through every cell. From health springs happiness: a deeper contentment that radiates from within.</p>
              <Link href="/about" className="btn-p">Read Our Full Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bens">
        <div className="wrap">
          <div className="ben-top">
            <div>
              <div className="kicker rv"><div className="k-bar"></div><span className="k-txt k-txt-lt">Health &amp; Nutrition</span></div>
              <h2 className="s-h rv light" data-d="1">Every Drop,<br/><em>a Dose of</em> <span style={{ color: 'var(--y)' }}>Vitality</span></h2>
            </div>
            <p className="body-t light rv" data-d="2">Jeevan Rekha oils are crafted to nourish your body while delivering authentic Indian taste. Each oil carries a precise balance of flavour, nutrition, and high-heat performance.</p>
          </div>
          <div className="ben-grid">
            <div className="bcard rv">
              <div className="b-ico"><svg viewBox="0 0 28 28"><path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3zm-1 15.6l-4.2-4.2 1.4-1.4 2.8 2.8 5.8-5.8 1.4 1.4L13 18.6z"/></svg></div>
              <h4>Heart Protection</h4>
              <p>Balanced Omega-3, 6 &amp; 9 fatty acids. Rice Bran Oil's Gamma-Oryzanol actively reduces LDL cholesterol.</p>
              <span className="b-tag">Rice Bran Oil</span>
            </div>
            <div className="bcard rv" data-d="1">
              <div className="b-ico"><svg viewBox="0 0 28 28"><path d="M14 2L4 7v7c0 6.5 4.3 12.6 10 14 5.7-1.4 10-7.5 10-14V7L14 2zm0 3.5L21.5 8V14c0 5-3.2 9.7-8 11.2-4.8-1.5-8-6.2-8-11.2V8l8-4.5z"/></svg></div>
              <h4>Antioxidant Power</h4>
              <p>Vitamin E tocopherols and Gamma-Oryzanol neutralise free radicals — protecting cells from oxidative stress.</p>
              <span className="b-tag">All Oils</span>
            </div>
            <div className="bcard rv" data-d="2">
              <div className="b-ico"><svg viewBox="0 0 28 28"><path d="M14 2C7.4 2 2 7.4 2 14s5.4 12 12 12 12-5.4 12-12S20.6 2 14 2zm1 6v6.6l4.5 2.7-1.1 1.7-5.4-3.3V8h2z"/></svg></div>
              <h4>254°C Smoke Point</h4>
              <p>Remarkable smoke point enables safe, high-heat frying. Less oil breakdown, more nutrition retained.</p>
              <span className="b-tag">Rice Bran Oil</span>
            </div>
            <div className="bcard rv" data-d="3">
              <div className="b-ico"><svg viewBox="0 0 28 28"><path d="M14 3C9 3 5 7 5 12c0 6.5 9 15 9 15s9-8.5 9-15c0-5-4-9-9-9zm0 12a3 3 0 110-6 3 3 0 010 6z"/></svg></div>
              <h4>Anti-inflammatory</h4>
              <p>Mustard Oil's allyl isothiocyanate and Omega-3 fatty acids provide powerful benefits for joints and gut.</p>
              <span className="b-tag">Mustard Oil</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certs */}
      <div className="certs">
        <div className="certs-row">
          <div className="cert rv"><div className="cert-ico"><svg viewBox="0 0 22 22"><path d="M11 2L3 6v5c0 5.3 3.4 10.2 8 11.7C16.6 21.2 20 16.3 20 11V6L11 2zm-1 14.1L5.6 11.7l1.4-1.4L10 13.3l5-5 1.4 1.4L10 16.1z"/></svg></div><div className="cert-t"><strong>FSSAI Certified</strong><span>Food Safety Standards Authority</span></div></div>
          <div className="cert rv" data-d="1"><div className="cert-ico"><svg viewBox="0 0 22 22"><path d="M11 2C6 2 2 6 2 11s4 9 9 9 9-4 9-9-4-9-9-9zm4 13l-4-2.3V6h2v5.7l3.5 2L15 15z"/></svg></div><div className="cert-t"><strong>Kacchi Ghani</strong><span>Traditional Cold Press</span></div></div>
          <div className="cert rv" data-d="2"><div className="cert-ico"><svg viewBox="0 0 22 22"><path d="M11 1L3 5v6c0 5.6 3.4 10.7 8 12 4.6-1.3 8-6.4 8-12V5L11 1z"/></svg></div><div className="cert-t"><strong>Lab Tested</strong><span>Every Single Batch</span></div></div>
          <div className="cert rv" data-d="3"><div className="cert-ico"><svg viewBox="0 0 22 22"><path d="M11 2a9 9 0 100 18A9 9 0 0011 2zm0 16a7 7 0 110-14 7 7 0 010 14zm-1-9v6l5-3-5-3z"/></svg></div><div className="cert-t"><strong>Make in India</strong><span>Manufactured at Burdwan</span></div></div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="testi">
        <div className="wrap">
          <div className="testi-hd">
            <div className="kicker rv"><div className="k-bar"></div><span className="k-txt">What Families Say</span></div>
            <h2 className="s-h rv" data-d="1" style={{ marginTop: '16px' }}>Trusted by <em>Thousands</em><br/>Across <strong>India</strong></h2>
          </div>
          <div className="tgrid">
            <div className="tc rv"><div className="t-qm">"</div><div className="t-stars">★★★★★</div><p className="t-txt">Switched to Jeevan Rekha Rice Bran Oil on my cardiologist's advice. My LDL has dropped noticeably and the food tastes so much lighter.</p><div className="t-auth"><div className="t-av av-p">SM</div><div><div className="t-name">Subhashis Mukherjee</div><div className="t-loc">Salt Lake City, Kolkata</div></div></div></div>
            <div className="tc rv" data-d="1"><div className="t-qm">"</div><div className="t-stars">★★★★★</div><p className="t-txt">The Kacchi Ghani Mustard Oil is extraordinary — that authentic pungency and deep golden colour makes our machher jhol taste just like grandmother's recipe.</p><div className="t-auth"><div className="t-av av-y">RB</div><div><div className="t-name">Rina Biswas</div><div className="t-loc">Ballygunge, Kolkata</div></div></div></div>
            <div className="tc rv" data-d="2"><div className="t-qm">"</div><div className="t-stars">★★★★★</div><p className="t-txt">I run a catering business and switched to Jeevan Rekha bulk packs. The high smoke point means less oil absorption in fried dishes. My clients notice the difference.</p><div className="t-auth"><div className="t-av av-g">AC</div><div><div className="t-name">Animesh Chatterjee</div><div className="t-loc">Tollygunge, Kolkata</div></div></div></div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-strip cta-yellow">
        <div className="cta-inner">
          <div className="rv sl">
            <h2 className="s-h">Ready to Cook<br/>the <em>Jeevan Rekha Way?</em></h2>
            <p className="body-t" style={{ marginTop: '16px' }}>Join thousands of Indian families who've made the switch to purer, healthier cooking.</p>
          </div>
          <div className="rv sr" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-p">Enquire Now</Link>
            <Link href="/products" className="btn-outline dark">View Products</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
