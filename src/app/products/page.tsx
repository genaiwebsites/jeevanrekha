"use client";

import Link from 'next/link';
import { Flame, Heart, Sprout } from 'lucide-react';

export default function Products() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="view-products" className="view-section active">
      <div className="hero vh-auto" style={{ paddingBottom: '60px' }}>
        <div className="hero-bg"></div>
        <div className="hero-mesh"></div>
        <div className="hero-wrap rv">
          <div className="h-eyebrow"><span className="pulse"></span><span className="eyebrow-t">Our Collection</span></div>
          <h1 className="h1"><strong>Our</strong> Range of<br/><em>Finest Edible Oils</em></h1>
          <p className="h-desc">Three oils. One standard of uncompromising purity. Each crafted with 40+ years of expertise for hearts that beat healthier and kitchens that cook happier.</p>
        </div>
      </div>

      <div className="prod-nav">
        <div className="prod-nav-inner">
          <div className="prod-tabs">
            <button className="pt-btn rice act" onClick={() => handleScrollTo('p-rice')}>Rice Bran Oil</button>
            <button className="pt-btn mustard" onClick={() => handleScrollTo('p-mustard')}>Mustard Oil</button>
            <button className="pt-btn soy" onClick={() => handleScrollTo('p-soy')}>Soyabean Oil</button>
          </div>
        </div>
      </div>

      {/* Product 1: Rice Bran */}
      <div className="prod-block" id="p-rice">
        <div className="pb-visual pv-rice rv sl">
          <div className="pb-vis-bg"></div>
          <div className="pb-bottle-scene">
            <img src="/jr_rbo.png" alt="Rice Bran Oil" />
          </div>
        </div>
        <div className="pb-content rv sr" data-d="1">
          <div className="pb-badge b-rice">❤️ Heart Healthy</div>
          <h2 className="pb-name">Physically Refined <em>Rice Bran Oil</em></h2>
          <div className="pb-feats">
            <span className="pb-feat">Gamma-Oryzanol</span>
            <span className="pb-feat">232°C Smoke Point</span>
            <span className="pb-feat">Vitamin E Rich</span>
          </div>
          <p className="pb-desc body-t">Physically refined to retain natural antioxidants. With a 232°C smoke point, it's India's healthiest choice for high-heat frying and daily cooking.</p>
          <a href="https://rbo-spa.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-p" style={{ width: 'fit-content', marginTop: '30px' }}>Explore Rice Bran Oil</a>
        </div>
      </div>

      {/* Product 2: Mustard */}
      <div className="prod-block reverse" id="p-mustard">
        <div className="pb-visual pv-mustard rv sr">
          <div className="pb-vis-bg"></div>
          <div className="pb-bottle-scene">
            <img src="/jr_kgmo.png" alt="Mustard Oil" />
          </div>
        </div>
        <div className="pb-content rv sl" data-d="1">
          <div className="pb-badge b-mustard">⭐ Traditional</div>
          <h2 className="pb-name">Kacchi Ghani <em>Mustard Oil</em></h2>
          <div className="pb-feats">
            <span className="pb-feat">Cold Pressed</span>
            <span className="pb-feat">Heart Friendly</span>
            <span className="pb-feat">Anti-inflammatory</span>
          </div>
          <p className="pb-desc body-t">Traditional cold-pressed from premium black mustard seeds, prepared with no heat and no chemicals for pure nature. The authentic soul of every Indian kitchen.</p>
          <a href="https://kgmo-spa.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-red" style={{ width: 'fit-content', marginTop: '30px' }}>Explore Mustard Oil</a>
        </div>
      </div>

      {/* Product 3: Soyabean */}
      <div className="prod-block" id="p-soy">
        <div className="pb-visual pv-soy rv sl">
          <div className="pb-vis-bg"></div>
          <div className="pb-bottle-scene">
            <img src="/jr_sbo.png" alt="Soyabean Oil" />
          </div>
        </div>
        <div className="pb-content rv sr" data-d="1">
          <div className="pb-badge b-soy">🌱 All Purpose</div>
          <h2 className="pb-name">Refined <em>Soyabean Oil</em></h2>
          <div className="pb-feats">
            <span className="pb-feat">Omega-3 Rich</span>
            <span className="pb-feat">Neutral Flavour</span>
            <span className="pb-feat">Baking Friendly</span>
          </div>
          <p className="pb-desc body-t">Light, neutral-flavoured and packed with Omega-3 fatty acids. A versatile all-purpose oil for baking, dressings, and light cooking.</p>
          <a href="https://sbo-spa.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-green" style={{ width: 'fit-content', marginTop: '30px' }}>Explore Soyabean Oil</a>
        </div>
      </div>

      {/* Comparison Table */}
      <section className="comparison">
        <div className="wrap">
          <h2 className="s-h rv light" style={{ marginBottom: '40px' }}>Which Oil is <em>Right for You?</em></h2>
          <div className="comp-table rv">
            <div className="comp-header">
              <div className="comp-th" style={{ textAlign: 'left' }}>Feature</div>
              <div className="comp-th" style={{ color: 'var(--y)' }}>Mustard Oil</div>
              <div className="comp-th" style={{ color: 'var(--r-plumlt)' }}>Rice Bran</div>
              <div className="comp-th" style={{ color: 'var(--s-jadelt)' }}>Soyabean</div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Method</div>
              <div className="comp-cell"><span style={{ color: 'var(--y)' }}>Kacchi Ghani</span></div>
              <div className="comp-cell"><span style={{ color: 'var(--r-plumlt)' }}>Physical Refinery</span></div>
              <div className="comp-cell"><span style={{ color: 'var(--s-jadelt)' }}>Refined</span></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Smoke Point</div>
              <div className="comp-cell"><span style={{ color: 'var(--y)' }}>~160°C</span></div>
              <div className="comp-cell"><span style={{ color: 'var(--r-plumlt)' }}>232°C</span></div>
              <div className="comp-cell"><span style={{ color: 'var(--s-jadelt)' }}>~240°C</span></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Best For</div>
              <div className="comp-cell" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>Traditional cooking, marinades, hair & skin</div>
              <div className="comp-cell" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>High-heat frying, daily cooking, heart health</div>
              <div className="comp-cell" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>Baking, dressings, all-purpose cooking</div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Gamma-Oryzanol</div>
              <div className="comp-cell"><div className="cc-no">✕</div></div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--r-plumlt)', background: 'rgba(160,130,255,.12)' }}>✓</div></div>
              <div className="comp-cell"><div className="cc-no">✕</div></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Omega-3 Rich</div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--y)' }}>✓</div></div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--r-plumlt)', background: 'rgba(160,130,255,.12)' }}>✓</div></div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--s-jadelt)', background: 'rgba(100,200,100,.12)' }}>✓</div></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Heart Health</div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--y)' }}>✓</div></div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--r-plumlt)', background: 'rgba(160,130,255,.12)' }}>✓</div></div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--s-jadelt)', background: 'rgba(100,200,100,.12)' }}>✓</div></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Anti-inflammatory</div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--y)' }}>✓</div></div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--r-plumlt)', background: 'rgba(160,130,255,.12)' }}>✓</div></div>
              <div className="comp-cell"><div className="cc-no" style={{ opacity: 0.3 }}>-</div></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Neutral Flavour</div>
              <div className="comp-cell"><div className="cc-no">✕</div></div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--r-plumlt)', background: 'rgba(160,130,255,.12)' }}>✓</div></div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--s-jadelt)', background: 'rgba(100,200,100,.12)' }}>✓</div></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Vitamin E</div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--y)' }}>✓</div></div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--r-plumlt)', background: 'rgba(160,130,255,.12)' }}>✓</div></div>
              <div className="comp-cell"><div className="cc-yes" style={{ color: 'var(--s-jadelt)', background: 'rgba(100,200,100,.12)' }}>✓</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Each (Three Cards) */}
      <section className="why-three">
        <div className="wrap">
          <h2 className="s-h rv" data-d="1">One Brand. <em>Every Kitchen.</em><br/><strong>Every Need.</strong></h2>
          <div className="wt-grid">
            <div className="wt-card rv" onClick={() => handleScrollTo('p-mustard')}>
              <div className="wt-top">
                <div className="wt-ico" style={{ background: 'linear-gradient(135deg,#FFD740,#9B6200)' }}><Flame style={{ width: '28px', height: '28px', color: '#fff' }} /></div>
              </div>
              <h3 className="wt-name">Mustard Oil</h3>
              <p className="wt-desc">For the authentic Indian cook. Traditional pungency, uncompromised nutrition. Perfect for Bengali cuisine and marinades.</p>
            </div>
            <div className="wt-card rv" data-d="1" onClick={() => handleScrollTo('p-rice')}>
              <div className="wt-top">
                <div className="wt-ico" style={{ background: 'linear-gradient(135deg,var(--p),var(--pm))' }}><Heart style={{ width: '28px', height: '28px', color: '#fff' }} /></div>
              </div>
              <h3 className="wt-name">Rice Bran Oil</h3>
              <p className="wt-desc">For health-conscious families and professional kitchens. The gold standard of edible oils, being light, nutritious, and perfect for high-heat cooking.</p>
            </div>
            <div className="wt-card rv" data-d="2" onClick={() => handleScrollTo('p-soy')}>
              <div className="wt-top">
                <div className="wt-ico" style={{ background: 'linear-gradient(135deg,#4CAF50,#1B5E20)' }}><Sprout style={{ width: '28px', height: '28px', color: '#fff' }} /></div>
              </div>
              <h3 className="wt-name">Soyabean Oil</h3>
              <p className="wt-desc">For everyday cooking, baking, and dressings. A light, budget-friendly Omega-3 rich oil that works across every cuisine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS CTA (B2B Focused) */}
      <section className="cta-strip cta-yellow">
        <div className="cta-inner">
          <div className="rv sl">
            <h2 className="s-h">Need Bulk Supply for<br/><em>Your Business?</em></h2>
            <p style={{ marginTop: '16px', color: 'var(--p)', fontSize: '0.97rem', lineHeight: 1.86, maxWidth: '420px' }}>Join 500+ retail partners and snack manufacturers who trust our consistent quality, high-volume capacity, and competitive trade pricing.</p>
          </div>
          <div className="rv sr" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-p">Trade Enquiry</Link>
            <Link href="/contact" className="btn-outline dark">Contact Sales</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
