"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Products() {
  const [activeTab, setActiveTab] = useState('p-rice');
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    { src: '/banners/product_banner_stock1.jpeg', bgColor: '#030200' },
    { src: '/banners/product_banner_rbo.jpeg', bgColor: '#3A0674' },
    { src: '/banners/product_banner_kgmo.jpeg', bgColor: '#9B0D03' }
  ];

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoplay();
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoplay();
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    resetAutoplay();
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* Scroll-spy: update active tab based on which product block is in view */
  useEffect(() => {
    const ids = ['p-rice', 'p-mustard', 'p-soy'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="view-products" className="view-section active">
      <div className="hero vh-auto" style={{ paddingBottom: '60px', position: 'relative' }}>
        <div className="hero-bg"></div>
        <div className="hero-mesh"></div>
        
        {/* Background Banner Slideshow */}
        <div className="hero-bg-slider">
          {slides.map((slide, i) => (
            <div 
              key={i} 
              className={`hero-bg-slide ${currentSlide === i ? 'active' : ''}`}
              style={{ backgroundColor: slide.bgColor }}
            >
              {/* Image container aligned to the right edge with 2:1 aspect ratio */}
              <div className="slide-image-wrap">
                <img src={slide.src} alt="" className="slide-img" />
                {/* Mask overlaying the image, starting exactly at the left edge of the image */}
                <div 
                  className="slide-image-mask" 
                  style={{ 
                    background: `linear-gradient(to right, ${slide.bgColor} 0%, ${slide.bgColor}f2 10%, ${slide.bgColor}60 25%, transparent 45%)` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="hero-wrap rv">
          <h1 className="h1"><strong>Our</strong> Range of<br/><em>Finest Edible Oils</em></h1>
          <p className="h-desc">Three oils. One standard of uncompromising purity. Each crafted with 40+ years of expertise for hearts that beat healthier and kitchens that cook happier.</p>
        </div>

        {/* Navigation Dots */}
        <div className="slider-dots" style={{ bottom: '30px', left: '56px', transform: 'none' }}>
          {slides.map((_, i) => (
            <button 
              key={i} 
              className={`slider-dot ${currentSlide === i ? 'active' : ''}`} 
              onClick={() => handleDotClick(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="prod-nav">
        <div className="prod-nav-inner">
          <div className="prod-tabs" role="tablist" aria-label="Product navigation">
            <button className={`pt-btn rice ${activeTab === 'p-rice' ? 'act' : ''}`} role="tab" aria-selected={activeTab === 'p-rice'} onClick={() => handleScrollTo('p-rice')}>Rice Bran Oil</button>
            <button className={`pt-btn mustard ${activeTab === 'p-mustard' ? 'act' : ''}`} role="tab" aria-selected={activeTab === 'p-mustard'} onClick={() => handleScrollTo('p-mustard')}>Mustard Oil</button>
            <button className={`pt-btn soy ${activeTab === 'p-soy' ? 'act' : ''}`} role="tab" aria-selected={activeTab === 'p-soy'} onClick={() => handleScrollTo('p-soy')}>Soyabean Oil</button>
          </div>
        </div>
      </div>

      {/* Product 1: Rice Bran */}
      <div className="prod-block" id="p-rice">
        <div className="pb-visual pv-rice rv sl">
          <div className="pb-vis-bg"></div>
          <div className="pb-bottle-scene">
            <img src="/jr_rbo.png" alt="Rice Bran Oil" loading="lazy" />
          </div>
        </div>
        <div className="pb-content rv sr" data-d="1">
          <div className="pb-badge b-rice">❤️ Heart Healthy</div>
          <h2 className="pb-name">Physically Refined Rice Bran Oil</h2>
          <div className="pb-feats">
            <span className="pb-feat">Gamma-Oryzanol</span>
            <span className="pb-feat">232°C Smoke Point</span>
            <span className="pb-feat">Vitamin E Rich</span>
          </div>
          <p className="pb-desc body-t">Physically refined to retain natural antioxidants. With a 232°C smoke point, it&apos;s India&apos;s healthiest choice for high-heat frying and daily cooking.</p>
          <a href="https://rbo-spa.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-p" style={{ width: 'fit-content', marginTop: '30px' }}>Explore Rice Bran Oil</a>
        </div>
      </div>

      {/* Product 2: Mustard */}
      <div className="prod-block reverse" id="p-mustard">
        <div className="pb-visual pv-mustard rv sr">
          <div className="pb-vis-bg"></div>
          <div className="pb-bottle-scene">
            <img src="/jr_kgmo.png" alt="Mustard Oil" loading="lazy" />
          </div>
        </div>
        <div className="pb-content rv sl" data-d="1">
          <div className="pb-badge b-mustard">⭐ Traditional</div>
          <h2 className="pb-name">Kacchi Ghani Mustard Oil</h2>
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
            <img src="/jr_sbo.png" alt="Soyabean Oil" loading="lazy" />
          </div>
        </div>
        <div className="pb-content rv sr" data-d="1">
          <div className="pb-badge b-soy">🌱 All Purpose</div>
          <h2 className="pb-name">Refined Soyabean Oil</h2>
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
              <div className="comp-th comp-th-label">Feature</div>
              <div className="comp-th comp-th-mustard">Mustard Oil</div>
              <div className="comp-th comp-th-rice">Rice Bran</div>
              <div className="comp-th comp-th-soy">Soyabean</div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Method</div>
              <div className="comp-cell"><span className="cv-mustard">Kacchi Ghani</span></div>
              <div className="comp-cell"><span className="cv-rice">Physical Refinery</span></div>
              <div className="comp-cell"><span className="cv-soy">Refined</span></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Smoke Point</div>
              <div className="comp-cell"><span className="cv-mustard">~160°C</span></div>
              <div className="comp-cell"><span className="cv-rice">232°C</span></div>
              <div className="comp-cell"><span className="cv-soy">~240°C</span></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Best For</div>
              <div className="comp-cell comp-cell-sm">Traditional cooking, marinades, hair &amp; skin</div>
              <div className="comp-cell comp-cell-sm">High-heat frying, daily cooking, heart health</div>
              <div className="comp-cell comp-cell-sm">Baking, dressings, all-purpose cooking</div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Gamma-Oryzanol</div>
              <div className="comp-cell"><div className="cc-no">✕</div></div>
              <div className="comp-cell"><div className="cc-yes cc-yes-rice">✓</div></div>
              <div className="comp-cell"><div className="cc-no">✕</div></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Omega-3 Rich</div>
              <div className="comp-cell"><div className="cc-yes cc-yes-mustard">✓</div></div>
              <div className="comp-cell"><div className="cc-yes cc-yes-rice">✓</div></div>
              <div className="comp-cell"><div className="cc-yes cc-yes-soy">✓</div></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Heart Health</div>
              <div className="comp-cell"><div className="cc-yes cc-yes-mustard">✓</div></div>
              <div className="comp-cell"><div className="cc-yes cc-yes-rice">✓</div></div>
              <div className="comp-cell"><div className="cc-yes cc-yes-soy">✓</div></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Anti-inflammatory</div>
              <div className="comp-cell"><div className="cc-yes cc-yes-mustard">✓</div></div>
              <div className="comp-cell"><div className="cc-yes cc-yes-rice">✓</div></div>
              <div className="comp-cell"><div className="cc-no" style={{ opacity: 0.3 }}>-</div></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Neutral Flavour</div>
              <div className="comp-cell"><div className="cc-no">✕</div></div>
              <div className="comp-cell"><div className="cc-yes cc-yes-rice">✓</div></div>
              <div className="comp-cell"><div className="cc-yes cc-yes-soy">✓</div></div>
            </div>
            <div className="comp-row">
              <div className="comp-cell">Vitamin E</div>
              <div className="comp-cell"><div className="cc-yes cc-yes-mustard">✓</div></div>
              <div className="comp-cell"><div className="cc-yes cc-yes-rice">✓</div></div>
              <div className="comp-cell"><div className="cc-yes cc-yes-soy">✓</div></div>
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
