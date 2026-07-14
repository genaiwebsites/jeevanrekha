"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Jeevan Rekha Kacchi Ghani Mustard Oil",
  "image": "https://jeevanrekhafoods.com/jr_kgmo.png",
  "description": "Cold-pressed from premium black mustard seeds, retaining natural omega-3 fatty acids, allyl isothiocyanate, and antioxidants without heat damage. FSSAI certified.",
  "brand": { "@type": "Brand", "name": "Jeevan Rekha" },
  "manufacturer": {
    "@type": "Organization",
    "name": "AB Udyog Private Limited",
    "url": "https://jeevanrekhafoods.com"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR",
    "url": "https://jeevanrekhafoods.com/products/mustard-oil"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jeevanrekhafoods.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://jeevanrekhafoods.com/products" },
    { "@type": "ListItem", "position": 3, "name": "Kacchi Ghani Mustard Oil", "item": "https://jeevanrekhafoods.com/products/mustard-oil" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Kacchi Ghani mustard oil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kacchi Ghani refers to cold-pressing mustard seeds at low temperature, preserving natural omega-3 fatty acids, allyl isothiocyanate, and antioxidants without heat damage."
      }
    },
    {
      "@type": "Question",
      "name": "Is Jeevan Rekha mustard oil safe for cooking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Jeevan Rekha Kacchi Ghani Mustard Oil is FSSAI certified and traditionally used across Indian cuisine for frying, tempering, and marinades."
      }
    },
    {
      "@type": "Question",
      "name": "What are the health benefits of mustard oil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mustard oil is rich in monounsaturated and polyunsaturated fats, omega-3 alpha-linolenic acid, and allyl isothiocyanate, which have anti-inflammatory and antimicrobial properties."
      }
    }
  ]
};

export default function MustardOilPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = "Kacchi Ghani Mustard Oil | Jeevan Rekha";
      const prevTheme = document.documentElement.getAttribute("data-theme");
      document.documentElement.setAttribute("data-theme", "colorful");

      gsap.registerPlugin(ScrollTrigger);

      // Standard Fade-up Observer
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible') });
      }, { threshold: 0.12 });
      document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

      // Scroll triggered scrolled nav
      ScrollTrigger.create({
        trigger: document.body,
        start: '100px top',
        onEnter: () => document.getElementById('nav')?.classList.add('scrolled'),
        onLeaveBack: () => document.getElementById('nav')?.classList.remove('scrolled'),
      });

      // Hero Entrance Animations
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.to('.hero-ring', { opacity: 1, duration: 3 }, 0);
      tl.fromTo('.hero-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.1 }, 0.3);
      tl.fromTo('.hero-tagline-item', { opacity: 0, y: 16 }, { opacity: 1, y: 0, stagger: 0.12, duration: 0.7 }, 0.8);
      tl.fromTo('.hero-desc', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, 1.0);
      tl.fromTo('.hero-cta', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 }, 1.2);
      tl.fromTo('#productWrap', { opacity: 0, scale: 0.88, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.4 }, 0.3);
      tl.fromTo('.data-pill', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, stagger: 0.15, duration: 0.7, ease: 'back.out(1.5)' }, 1.0);

      // Parallax scroll effect
      ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const prog = self.progress;
          gsap.set("#productWrap", { y: prog * -80 });
          gsap.set(".hero-ring", { rotate: 15 + prog * 40 });
        }
      });

      // Infinite Spin
      gsap.to(".hero-ring", { rotate: "+=360", duration: 80, repeat: -1, ease: "none" });

      return () => {
        if (prevTheme) {
          document.documentElement.setAttribute("data-theme", prevTheme);
        } else {
          document.documentElement.removeAttribute("data-theme");
        }
        obs.disconnect();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mustard-page-container">
        

  {/* NAV */}
  <nav id="nav" role="navigation">
    <div className="nav-logo">
      <img src="/jeevan-rekha-logo.png" alt="Jeevan Rekha — Premium Edible Oils" style={{height: '44px', width: 'auto', objectFit: 'contain'}} />
    </div>
    
    <ul className="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#benefits">Benefits</a></li>
      <li><a href="#advantage">Advantage</a></li>
      <li><a href="#nutrition">Nutrition</a></li>
      <li><a href="#quality">Quality</a></li>
    </ul>

    <div className="nav-spacer">
      <Link href="/products" className="back-to-site" title="Back to Jeevan Rekha">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        All Products
      </Link>
    </div>
  </nav>

  {/* HERO */}
  <section id="hero" aria-label="Hero">
    <div className="section-bg-art"></div>
    
    <svg className="hero-ring" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{stroke: 'var(--hero-ring-stroke)'}}>
      <circle cx="400" cy="400" r="380" style={{stroke: 'var(--hero-ring-accent)'}} strokeWidth="0.8" strokeDasharray="6 18"/>
      <circle cx="400" cy="400" r="340" strokeWidth="0.5" strokeDasharray="3 14" opacity="0.4"/>
      <circle cx="400" cy="400" r="300" style={{stroke: 'var(--hero-ring-accent)'}} strokeWidth="0.3" opacity="0.3"/>
      <g style={{stroke: 'var(--hero-ring-accent)'}} strokeWidth="1.2" opacity="0.6">
        <line x1="400" y1="18" x2="400" y2="36"/> <line x1="391" y1="27" x2="409" y2="27"/>
        <line x1="400" y1="764" x2="400" y2="782"/> <line x1="391" y1="773" x2="409" y2="773"/>
        <line x1="18" y1="400" x2="36" y2="400"/> <line x1="27" y1="391" x2="27" y2="409"/>
        <line x1="764" y1="400" x2="782" y2="400"/> <line x1="773" y1="391" x2="773" y2="409"/>
      </g>
    </svg>

    <div className="hero-inner">
      <div className="hero-text-col">
        <h1 className="hero-title">Jeevan Rekha<br/><em>Mustard Oil</em></h1>

        <div className="hero-taglines">
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Kachi Ghani Cold-Pressed</div>
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Rich in Natural Antioxidants</div>
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Cholesterol Free &amp; FSSAI Certified</div>
        </div>

        <p className="hero-desc">Experience the authentic pungency and richness of Jeevan Rekha Kachi Ghani Mustard Oil — cold-pressed the traditional way to preserve every drop of natural flavour, Omega-3 fatty acids, and natural antioxidants. The trusted choice of Indian kitchens for generations.</p>

        <a className="hero-cta" href="#benefits">
          <span className="cta-text">Discover the Oil</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </a>
      </div>

      <div className="hero-product-col">
        <div className="hero-product-wrap" id="productWrap">
          <img className="hero-product-img"
               src="/jr_kgmo.png"
               alt="Jeevan Rekha Kachi Ghani Mustard Oil Pouch"
                />

          <div className="hero-product-fallback" style={{display: 'none', width: '280px', height: '380px', background: 'linear-gradient(145deg,var(--beige),var(--beige-mid))', borderRadius: '16px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', boxShadow: '0 24px 48px rgba(0,0,0,0.12)', position: 'relative', zIndex: 2}}>
            <div style={{fontFamily: 'var(--fd)', fontSize: '3rem', fontWeight: 300, color: 'var(--text-dark)', lineHeight: 1, textAlign: 'center'}}>Jeevan<br />Rekha</div>
            <div style={{fontFamily: 'var(--fb)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)'}}>Mustard Oil</div>
          </div>

          <div className="pill-orbit-ring">
            <div className="pill-anchor top-left">
              <div className="data-pill" aria-label="Cold Pressed">
                <span className="data-pill-icon" aria-hidden="true">✦</span>
                <span><span className="data-pill-label">Cold Pressed</span> <span className="data-pill-sub">Kachi Ghani</span></span>
              </div>
            </div>
            <div className="pill-anchor top-right">
              <div className="data-pill" aria-label="High Smoke Point">
                <span className="data-pill-icon" aria-hidden="true">⬡</span>
                <span><span className="data-pill-label">~250°C</span> <span className="data-pill-sub">Smoke Point</span></span>
              </div>
            </div>
            <div className="pill-anchor bot-left">
              <div className="data-pill" aria-label="Pure & Natural">
                <span className="data-pill-icon" aria-hidden="true">◑</span>
                <span><span className="data-pill-label">Pure</span> <span className="data-pill-sub">No Additives</span></span>
              </div>
            </div>
            <div className="pill-anchor bot-right">
              <div className="data-pill" aria-label="Lab Tested">
                <span className="data-pill-icon" aria-hidden="true">↑</span>
                <span><span className="data-pill-label">Certified</span> <span className="data-pill-sub">Lab Tested</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* TICKER MARQUEE */}
  <div id="about-strip" aria-hidden="true">
    <div className="strip-marquee-track" id="marqueeTrack">
      <span className="strip-item">Kachi Ghani Mustard Oil</span>
      <span className="strip-item">FSSAI Certified</span>
      <span className="strip-item">Omega-3 PUFA Rich</span>
      <span className="strip-item">Natural Antioxidants</span>
      <span className="strip-item">Cholesterol Free</span>
      <span className="strip-item">Manufactured in India</span>
      <span className="strip-item">Kachi Ghani Mustard Oil</span>
      <span className="strip-item">FSSAI Certified</span>
      <span className="strip-item">Omega-3 PUFA Rich</span>
      <span className="strip-item">Natural Antioxidants</span>
      <span className="strip-item">Cholesterol Free</span>
      <span className="strip-item">Manufactured in India</span>
    </div>
  </div>

  {/* BENEFITS */}
  <section id="benefits">
    <div className="section-bg-art" style={{transform: 'scaleY(-1)'}}></div>
    <div className="section-label">Core Benefits</div>
    <h2 className="section-title">Pure Goodness,<br /><em>Every Drop</em></h2>
    <div className="benefits-grid">
      <div className="benefit-card fade-up">
        <div className="benefit-num">01</div>
        <div className="benefit-icon">🌶️</div>
        <h3>Distinct Flavour</h3>
        <p>A strong, pungent character from allyl isothiocyanate adds an unmistakable depth to Indian cuisine — from curries to pickles.</p>
      </div>
      <div className="benefit-card fade-up delay-1">
        <div className="benefit-num">02</div>
        <div className="benefit-icon">❤️</div>
        <h3>Heart Health</h3>
        <p>Rich in monounsaturated and polyunsaturated fats, Jeevan Rekha Mustard Oil helps reduce the risk of cardiovascular disease.</p>
      </div>
      <div className="benefit-card fade-up delay-2">
        <div className="benefit-num">03</div>
        <div className="benefit-icon">🛡️</div>
        <h3>Natural Antioxidants</h3>
        <p>Contains Vitamin E and natural antioxidants that protect cells from free radical damage, promoting skin and hair health.</p>
      </div>
      <div className="benefit-card fade-up delay-3">
        <div className="benefit-num">04</div>
        <div className="benefit-icon">🍳</div>
        <h3>Versatile Cooking</h3>
        <p>High smoke point of ~250°C makes it ideal for frying, sautéing, and tempering — without losing nutritional value at high heat.</p>
      </div>
    </div>
  </section>

  {/* STATS */}
  <div id="stats">
    <div className="section-bg-art" style={{opacity: '0.2'}}></div>
    <div className="stat fade-up">
      <span className="stat-num" id="s1">250°C</span>
      <div className="stat-label">Smoke Point</div>
    </div>
    <div className="stat fade-up delay-1">
      <span className="stat-num" id="s2">36g</span>
      <div className="stat-label">Mono Unsaturated Fat</div>
    </div>
    <div className="stat fade-up delay-2">
      <span className="stat-num" id="s3">900</span>
      <div className="stat-label">kcal Energy / 100g</div>
    </div>
    <div className="stat fade-up delay-3">
      <span className="stat-num" id="s4">0g</span>
      <div className="stat-label">Cholesterol</div>
    </div>
  </div>

  {/* ADVANTAGE */}
  <section id="advantage">
    <div className="section-label">The Advantage</div>
    <h2 className="section-title">Why Mustard Oil<br /><em>Outperforms</em></h2>
    <div className="compare-grid">
      <div className="compare-card winner fade-up">
        <div className="compare-header">
          <h3>Jeevan Rekha</h3>
          <span className="compare-badge">✦ Best Choice</span>
        </div>
        <div className="compare-body">
          <div className="compare-row winner">
            <div className="cicon">🔥</div>
            <div>
              <h4>High Smoke Point ~250°C</h4>
              <p>Perfect for high-heat Indian cooking without breaking down or losing nutritional value.</p>
            </div>
          </div>
          <div className="compare-row winner">
            <div className="cicon">💪</div>
            <div>
              <h4>Balanced Fatty Acid Profile</h4>
              <p>High in omega-3, omega-6, and monounsaturated fats — a complete and heart-friendly profile.</p>
            </div>
          </div>
          <div className="compare-row winner">
            <div className="cicon">✨</div>
            <div>
              <h4>Rich Natural Antioxidants</h4>
              <p>Vitamin E and natural compounds from the cold press process, retained fully in extraction.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="compare-card loser fade-up delay-2">
        <div className="compare-header">
          <h3>Other Refined Oils</h3>
          <span className="compare-badge">Standard Option</span>
        </div>
        <div className="compare-body">
          <div className="compare-row loser">
            <div className="cicon">⚠️</div>
            <div>
              <h4>Palm Oil ~235°C</h4>
              <p>Slightly lower smoke point, high in saturated fat — a known risk factor for bad cholesterol.</p>
            </div>
          </div>
          <div className="compare-row loser">
            <div className="cicon">📉</div>
            <div>
              <h4>Soybean Oil ~230°C</h4>
              <p>Moderate smoke point, prone to forming trans fats at higher temperatures.</p>
            </div>
          </div>
          <div className="compare-row loser">
            <div className="cicon">🔬</div>
            <div>
              <h4>Low Natural Antioxidants</h4>
              <p>Extensive refining strips away natural antioxidants and beneficial compounds.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* NUTRITION */}
  <section id="nutrition">
    <div className="section-bg-art"></div>
    <div className="section-label">Nutritional Value</div>
    <h2 className="section-title">Dietician's<br /><em>Recommended</em></h2>
    <div className="nutrition-layout">
      <div className="nutrition-intro">
        <p>Jeevan Rekha Mustard Oil is extracted using the Kachi Ghani (cold press) method — the first press of the finest mustard seeds. This ensures all natural goodness is retained without heat-induced degradation.</p>
        <div className="ingredients-list">
          <div className="ingredient fade-up">
            <div className="ingredient-icon">🌿</div>
            <div>
              <h4>Kachi Ghani Cold-Pressed</h4>
              <p>First press extraction preserving maximum nutrients</p>
            </div>
          </div>
          <div className="ingredient fade-up delay-1">
            <div className="ingredient-icon">🐟</div>
            <div>
              <h4>Best Source of Omega-3</h4>
              <p>Supports cardiovascular health and reduces inflammation</p>
            </div>
          </div>
          <div className="ingredient fade-up delay-2">
            <div className="ingredient-icon">☀️</div>
            <div>
              <h4>Loaded with Vitamins A, D &amp; E</h4>
              <p>Essential fat-soluble vitamins for immunity and skin health</p>
            </div>
          </div>
        </div>
      </div>
      <div className="nutrition-facts fade-up delay-2">
        <div className="nf-title">Nutrition Facts</div>
        <div className="nf-serving">Serving size: 100g | Per 100g of product</div>
        <div className="nf-row"><span className="nf-label nf-bold">Energy</span><span className="nf-value">900 kcal</span></div>
        <div className="nf-row"><span className="nf-label nf-bold">Total Fat</span><span className="nf-value">100g</span></div>
        <div className="nf-row" style={{paddingLeft: '1rem'}}><span className="nf-label">Saturated Fat</span><span className="nf-value">12g</span></div>
        <div className="nf-row" style={{paddingLeft: '1rem'}}><span className="nf-label">Mono Unsaturated Fat</span><span className="nf-value">36g</span></div>
        <div className="nf-row" style={{paddingLeft: '1rem'}}><span className="nf-label">Poly Unsaturated Fat</span><span className="nf-value">16g</span></div>
        <div className="nf-row" style={{paddingLeft: '1rem'}}><span className="nf-label">Trans Fat (Max)</span><span className="nf-value">1g</span></div>
        <div className="nf-row"><span className="nf-label nf-bold">Carbohydrates</span><span className="nf-value">0g</span></div>
        <div className="nf-row"><span className="nf-label nf-bold">Protein</span><span className="nf-value">0g</span></div>
        <div className="nf-row"><span className="nf-label nf-bold">Cholesterol</span><span className="nf-value" style={{color: '#A3C9A0'}}>0g</span></div>
      </div>
    </div>
  </section>

  {/* QUALITY */}
  <section id="quality">
    <div className="section-label">What Makes It Premium</div>
    <h2 className="section-title">Crafted for<br /><em>Purity</em></h2>
    <div className="quality-grid">
      <div className="quality-card fade-up">
        <div className="quality-icon">🧪</div>
        <h3>Lab Tested Every Batch</h3>
        <p>Every production batch is independently lab-tested to verify purity, fatty acid profile, and absence of adulterants before dispatch.</p>
      </div>
      <div className="quality-card fade-up delay-1">
        <div className="quality-icon">🌾</div>
        <h3>First-Press Kachi Ghani</h3>
        <p>Cold-pressed using traditional stone grinding techniques, preserving the natural aroma, flavour, and nutritional integrity of mustard seeds.</p>
      </div>
      <div className="quality-card fade-up delay-2">
        <div className="quality-icon">🏛️</div>
        <h3>FSSAI Certified</h3>
        <p>Fully compliant with India's Food Safety and Standards Authority regulations — your assurance of safe, authentic, quality cooking oil.</p>
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section id="faq">
    <div className="section-bg-art" style={{transform: 'rotate(180deg)'}}></div>
    <div className="section-label">Questions</div>
    <h2 className="section-title">Frequently<br /><em>Asked</em></h2>
    <div className="faq-list">
      <div className={`faq-item fade-up ${openFaq === 0 ? "open" : ""}`}>
        <div className="faq-q" onClick={ () => toggleFaq(0) }>
          What are the health benefits of mustard oil?
          <div className="faq-icon">+</div>
        </div>
        <div className="faq-a">Mustard oil is rich in monounsaturated fats, omega-3 fatty acids, and antioxidants, which can support heart health, reduce inflammation, and promote skin and hair health. Its anti-inflammatory properties also make it beneficial as a massage oil for joint pain.</div>
      </div>
      <div className={`faq-item fade-up ${openFaq === 1 ? "open" : ""}`}>
        <div className="faq-q" onClick={ () => toggleFaq(1) }>
          Why does mustard oil have a strong smell and taste?
          <div className="faq-icon">+</div>
        </div>
        <div className="faq-a">Mustard oil has a pungent aroma and flavour due to compounds like allyl isothiocyanate. This unique taste enhances flavours in cooking, particularly in spicy and savoury dishes — it is this character that makes it irreplaceable in traditional Indian cuisine.</div>
      </div>
      <div className={`faq-item fade-up ${openFaq === 2 ? "open" : ""}`}>
        <div className="faq-q" onClick={ () => toggleFaq(2) }>
          What is mustard oil's smoke point?
          <div className="faq-icon">+</div>
        </div>
        <div className="faq-a">Mustard oil has a high smoke point of around 250°C (482°F). This makes it suitable for high-heat cooking methods like frying, sautéing, and deep-frying without breaking down or forming harmful compounds.</div>
      </div>
      <div className={`faq-item fade-up ${openFaq === 3 ? "open" : ""}`}>
        <div className="faq-q" onClick={ () => toggleFaq(3) }>
          How should mustard oil be stored?
          <div className="faq-icon">+</div>
        </div>
        <div className="faq-a">Store mustard oil in a cool, dark place, ideally in an airtight container to prevent it from going rancid and to preserve its flavour and nutritional value. Jeevan Rekha packages its oil in airtight, food-grade containers that protect it from light and air.</div>
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer id="footer">
    <div className="footer-left">
      <img src="/jeevan-rekha-logo.png" alt="Jeevan Rekha — Premium Edible Oils" className="footer-logo" />
      <div className="footer-address">
        <a href="https://abudyog.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>AB Udyog Pvt. Ltd.</a><br />
        55/1B, Strand Road, 3rd Floor, Kolkata – 700006
      </div>
      <div className="footer-copy">&copy; 2026 <a href="https://abudyog.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>AB Udyog Pvt. Ltd.</a> All rights reserved.</div>
    </div>
    
    <div className="footer-center">
      <div className="footer-tagline-center">"Pure Mustard Oil — Kachi Ghani Cold Pressed."</div>
    </div>
    
    <div className="footer-right">
      <div className="footer-contact">
        <span>(+91) 74392 89709</span>
        <a href="mailto:info@abudyog.in">info@abudyog.in</a>
      </div>
      <div className="footer-social">
        <a href="https://www.instagram.com/jeevanrekhafoods/">INSTAGRAM</a>
        <a href="https://www.facebook.com/JeevanRekhaFoods/">FACEBOOK</a>
        <a href="https://www.linkedin.com/company/jeevanrekha/">LINKEDIN</a>
      </div>
    </div>
  </footer>

  

      </div>
    </>
  );
}
