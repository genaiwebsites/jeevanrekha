"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Jeevan Rekha Soybean Oil",
  "image": "https://jeevanrekhafoods.com/jr_sbo.png",
  "description": "Light and neutral soybean oil rich in omega-6 linoleic acid, Vitamin E, and phytosterols. Versatile for frying, baking, and everyday cooking. FSSAI certified.",
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
    "url": "https://jeevanrekhafoods.com/products/soybean-oil"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jeevanrekhafoods.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://jeevanrekhafoods.com/products" },
    { "@type": "ListItem", "position": 3, "name": "Soybean Oil", "item": "https://jeevanrekhafoods.com/products/soybean-oil" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Jeevan Rekha Soybean Oil suitable for deep frying?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. With a smoke point around 232°C, Jeevan Rekha Soybean Oil handles high-heat frying without breaking down into harmful compounds."
      }
    },
    {
      "@type": "Question",
      "name": "What are the nutritional benefits of soybean oil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soybean oil is high in omega-6 linoleic acid, Vitamin E tocopherols, and phytosterols, which together support cardiovascular health and healthy cholesterol levels."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Jeevan Rekha Soybean Oil different?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jeevan Rekha Soybean Oil is produced under FSSAI-certified processes by AB Udyog Pvt. Ltd., a manufacturer with 40+ years of expertise in edible oil production in West Bengal."
      }
    }
  ]
};

export default function SoybeanOilPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = "Refined Soybean Oil | Jeevan Rekha";
      const prevTheme = document.documentElement.getAttribute("data-theme");
      document.documentElement.setAttribute("data-theme", "colorful");

      gsap.registerPlugin(ScrollTrigger);

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
        trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true,
        onUpdate: (self) => {
          const prog = self.progress;
          gsap.set('#productWrap', { y: prog * -80 });
        }
      });

      // Batch ScrollTrigger on .feed-card
      ScrollTrigger.batch('.feed-card', {
        onEnter: (cards) => {
          gsap.to(cards, { y: 0, opacity: 1, stagger: 0.14, duration: 1.0, ease: 'expo.out' });
        }, start: 'top 88%', once: true
      });

      // Batch ScrollTrigger on .stat-item
      ScrollTrigger.batch('.stat-item', {
        onEnter: (cards) => gsap.to(cards, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'expo.out' }),
        start: 'top 85%', once: true
      });

      // Nutrition section cards
      gsap.set('.nutri-card', { opacity: 0, y: 30 });
      ScrollTrigger.create({
        trigger: '#nutrition', start: 'top 75%', once: true,
        onEnter: () => gsap.to('.nutri-card', { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'expo.out' })
      });

      // Comparison section grid
      ScrollTrigger.create({
        trigger: '#comparison', start: 'top 75%', once: true,
        onEnter: () => gsap.to('.compare-grid', { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' })
      });

      // Infinite Spin
      gsap.to('.hero-ring', { rotation: 360, duration: 60, repeat: -1, ease: 'linear', transformOrigin: "50% 50%" });

      return () => {
        if (prevTheme) {
          document.documentElement.setAttribute("data-theme", prevTheme);
        } else {
          document.documentElement.removeAttribute("data-theme");
        }
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
      <div className="soybean-page-container">
        

  <nav id="nav" role="navigation">
    <div className="nav-logo">
      <img src="/jeevan-rekha-logo.png" alt="Jeevan Rekha — Premium Edible Oils" style={{height: '44px', width: 'auto', objectFit: 'contain'}} />
    </div>
    
    <ul className="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#applications">Cuisines</a></li>
      <li><a href="#nutrition">Nutrition</a></li>
      <li><a href="#comparison">Compare</a></li>
    </ul>

    <div className="nav-spacer">
      <Link href="/products" className="back-to-site" title="Back to Jeevan Rekha">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        All Products
      </Link>
    </div>
  </nav>

  <section id="hero" aria-label="Hero">
    <div className="section-bg-art"></div>
    
    <svg className="hero-ring" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="400" cy="400" r="360" stroke="var(--gold)" strokeWidth="1" strokeDasharray="6 30" opacity="0.4"/>
      <circle cx="400" cy="400" r="260" stroke="var(--green-muted)" strokeWidth="1.5" strokeDasharray="4 20" opacity="0.5"/>
      <circle cx="400" cy="400" r="160" stroke="var(--gold)" strokeWidth="0.5" strokeDasharray="2 12" opacity="0.3"/>
      
      <g stroke="var(--gold)" strokeWidth="1.5" opacity="0.7">
        <path d="M 600,200 C 615,210 615,230 600,240 C 585,230 585,210 600,200 Z" transform="rotate(45 600 220)"/>
        <path d="M 200,600 C 215,610 215,630 200,640 C 185,630 185,610 200,600 Z" transform="rotate(-30 200 620)"/>
      </g>
    </svg>

    <div className="hero-inner">
      <div className="hero-text-col">
        <h1 className="hero-title">Jeevan Rekha<br/><em>Soybean Oil</em></h1>
        
        <div className="hero-taglines">
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Contains Omega 3 & 6 fatty acids</div>
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Contains Vitamin D & A</div>
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Linoleic Acid helps maintain normal blood cholesterol</div>
        </div>

        <p className="hero-desc">Discover the purity of Jeevan Rekha Refined Soybean Oil. Naturally rich in Omega 3 & 6 fatty acids and Linoleic Acid to help maintain normal blood cholesterol levels. Fortified with Vitamins A & D, and packed with natural anti-oxidants (Tocopherols), it offers a high smoke point perfectly suitable for all your varied cooking applications.</p>

        <a className="hero-cta" href="#nutrition">
          <span className="cta-text">Explore Benefits</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </a>
      </div>

      <div className="hero-product-col">
        <div className="hero-product-wrap" id="productWrap">
          <img className="hero-product-img" src="/jr_sbo.png" alt="Jeevan Rekha Soybean Oil Pouch"  />

          <div className="hero-product-fallback" style={{display: 'none', width: '280px', height: '380px', background: 'linear-gradient(145deg,var(--beige),var(--beige-mid))', borderRadius: '16px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', boxShadow: '0 24px 48px rgba(0,0,0,0.12)', position: 'relative', zIndex: 2}}>
            <div style={{fontFamily: 'var(--serif)', fontSize: '3rem', fontWeight: 300, color: 'var(--text-dark)', lineHeight: 1, textAlign: 'center'}}>Jeevan<br />Rekha</div>
            <div style={{fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)'}}>Soybean Oil</div>
          </div>

          <div className="pill-orbit-ring">
            <div className="pill-anchor top-left">
              <div className="data-pill" aria-label="Free from Argemone Oil">
                <span className="data-pill-icon" aria-hidden="true">✦</span>
                <span><span className="data-pill-label">No Argemone</span> <span className="data-pill-sub">Oil</span></span>
              </div>
            </div>
            <div className="pill-anchor top-right">
              <div className="data-pill" aria-label="Fortified A & D">
                <span className="data-pill-icon" aria-hidden="true">☀️</span>
                <span><span className="data-pill-label">Fortified</span> <span className="data-pill-sub">Vit A&D</span></span>
              </div>
            </div>
            <div className="pill-anchor bot-left">
              <div className="data-pill" aria-label="Linoleic Acid">
                <span className="data-pill-icon" aria-hidden="true">❤️</span>
                <span><span className="data-pill-label">Linoleic</span> <span className="data-pill-sub">Acid</span></span>
              </div>
            </div>
            <div className="pill-anchor bot-right">
              <div className="data-pill" aria-label="High Smoke Point">
                <span className="data-pill-icon" aria-hidden="true">🔥</span>
                <span><span className="data-pill-label">High Smoke</span> <span className="data-pill-sub">Point</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div id="about-strip" aria-hidden="true">
    <div className="strip-marquee-track" id="marqueeTrack">
      <span className="strip-item">Fortified with Vitamin A & D</span>
      <span className="strip-item">Contains Omega 3 & 6 fatty acids</span>
      <span className="strip-item">Free from Argemone Oil</span>
      <span className="strip-item">High Smoke Point</span>
      <span className="strip-item">Natural anti-oxidants (Tocopherols)</span>
      <span className="strip-item">Fortified with Vitamin A & D</span>
      <span className="strip-item">Contains Omega 3 & 6 fatty acids</span>
      <span className="strip-item">Free from Argemone Oil</span>
      <span className="strip-item">High Smoke Point</span>
      <span className="strip-item">Natural anti-oxidants (Tocopherols)</span>
    </div>
  </div>

  <section id="applications" aria-labelledby="applications-heading">
    <div className="section-bg-art"></div>
    <div className="applications-inner">
      <div className="applications-header">
        <div>
          <div className="section-label">Unmatched Versatility</div>
          <h2 id="applications-heading" className="section-title">Suitable for various<br/>cooking applications</h2>
        </div>
        <p>Jeevan Rekha Soybean Oil is celebrated for its incredibly light texture and high smoke point. It naturally adapts to your cooking without overpowering the dish, making it the ultimate everyday oil for diverse culinary needs.</p>
      </div>

      <div className="feed-grid">
        <article className="feed-card">
          <div className="feed-card-number">01</div>
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🍛</div>
            <h3 className="feed-card-title">Indian Curries</h3>
            <p className="feed-card-desc">Its odourless and neutral profile ensures that the authentic aromas and complex flavours of traditional Indian spices shine through brilliantly.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="feed-card">
          <div className="feed-card-number">02</div>
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🍟</div>
            <h3 className="feed-card-title">Deep Frying</h3>
            <p className="feed-card-desc">Boasting a high smoke point, it guarantees crispier, non-greasy fried foods while maintaining complete thermal stability.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="feed-card">
          <div className="feed-card-number">03</div>
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🥗</div>
            <h3 className="feed-card-title">Dressings & Sautéing</h3>
            <p className="feed-card-desc">The extremely light consistency makes it perfect for tossing fresh salads or quickly sautéing vegetables, helping them retain vibrant colours and snap.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="feed-card">
          <div className="feed-card-number">04</div>
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🧁</div>
            <h3 className="feed-card-title">Baking</h3>
            <p className="feed-card-desc">A superb alternative to solid fats. It lends a superior moistness and tender crumb to cakes and pastries without altering the intended taste.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="core-philosophy">
    <div className="section-bg-art"></div>
    <div className="stats-inner">
      <div className="stat-item">
        <div className="stat-icon">🌱</div>
        <div className="stat-label">Omega 3 & 6</div>
        <div className="stat-sub">Rich in essential ALA (6-8g) and Omega 6</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">🔥</div>
        <div className="stat-label">High Smoke Point</div>
        <div className="stat-sub">Stable for various cooking applications</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">⚖️</div>
        <div className="stat-label">Linoleic Acid</div>
        <div className="stat-sub">Helps to maintain normal blood cholesterol levels</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">✨</div>
        <div className="stat-label">Natural Antioxidants</div>
        <div className="stat-sub">Contains Tocopherols and Fortified Vit A & D</div>
      </div>
    </div>
  </section>

  <section id="nutrition">
    <div className="section-bg-art"></div>
    <div className="nutrition-inner">
      <div className="nutrition-header">
        <div className="section-label">Nutritional Purity</div>
        <h2 className="section-title">The Foundation<br/>of Health</h2>
      </div>

      <div className="nutrition-grid">
        <div className="nutri-card nutri-card-dark">
          <div className="nutri-card-label">Pure Ingredients</div>
          <div className="nutri-card-title">Meticulously Refined</div>
          <p className="nutri-desc">A premium formulation crafted to deliver a naturally balanced fatty acid profile that actively supports long-term heart health and family wellness.</p>
          
          <ul className="nutri-list">
            <li className="nutri-list-item">
              <span className="nutri-icon">✨</span> Refined Soybean Oil
            </li>
            <li className="nutri-list-item">
              <span className="nutri-icon">🛡️</span> Antioxidant TBHQ (E 319)
            </li>
            <li className="nutri-list-item">
              <span className="nutri-icon">☀️</span> Vitamin A and Vitamin D
            </li>
          </ul>
        </div>

        <div className="nutri-card nutri-card-light">
          <div className="nutri-card-label">Nutritional Information (Approx per 100g)</div>
          <div className="nutri-card-title">Vital Dietary Payback</div>
          <p className="nutri-desc">Naturally abundant in heart-healthy unsaturated fats while remaining completely free from cholesterol, supporting an active lifestyle.</p>
          
          <ul className="nutri-list">
            <li className="nutri-list-item">Polyunsaturated Fatty Acids (PUFA) <span className="nutri-val">52.5 - 70g</span></li>
            <li className="nutri-list-item">Monounsaturated Fatty Acids (MUFA) <span className="nutri-val">17 - 30g</span></li>
            <li className="nutri-list-item">Saturated Fat <span className="nutri-val">20g</span></li>
            <li className="nutri-list-item">Omega 3 (ALA) / Omega 6 <span className="nutri-val">6-8g / 48-60g</span></li>
            <li className="nutri-list-item">Added Vitamin A / D <span className="nutri-val">2500 IU / 450 IU</span></li>
            <li className="nutri-list-item">Energy / Cholesterol <span className="nutri-val">900 Kcal / 0 mg</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* COMPARATIVE STUDY */}
  <section id="comparison">
    <div className="section-bg-art"></div>
    <div className="comparison-inner">
      <div className="advantage-header">
        <div className="section-label">Fact Check</div>
        <h2 className="section-title">Know Your Cooking Oil<br/><em>A Comparative Study</em></h2>
      </div>

      <div className="compare-grid">
        <div className="cg-row cg-header-row">
          <div className="cg-cell">Features</div>
          <div className="cg-cell cg-header-winner">
            <span className="cg-badge">Top Choice</span>
            Soybean Oil
          </div>
          <div className="cg-cell">Palm Oil</div>
          <div className="cg-cell">Sunflower Oil</div>
        </div>

        <div className="cg-row">
          <div className="cg-cell cg-feature">Smoke Point</div>
          <div className="cg-cell cg-winner" data-label="Soybean Oil"><span className="cg-icon">✦</span> High (Suitable for all cooking)</div>
          <div className="cg-cell" data-label="Palm Oil">Moderate</div>
          <div className="cg-cell" data-label="Sunflower Oil">High</div>
        </div>

        <div className="cg-row">
          <div className="cg-cell cg-feature">Flavour Profile</div>
          <div className="cg-cell cg-winner" data-label="Soybean Oil"><span className="cg-icon">✦</span> Extremely Neutral</div>
          <div className="cg-cell" data-label="Palm Oil">Heavy, noticeable taste</div>
          <div className="cg-cell" data-label="Sunflower Oil">Neutral</div>
        </div>

        <div className="cg-row">
          <div className="cg-cell cg-feature">PUFA Content</div>
          <div className="cg-cell cg-winner" data-label="Soybean Oil"><span className="cg-icon">✦</span> High (52.5 - 70g per 100g)</div>
          <div className="cg-cell" data-label="Palm Oil">Very Low (~9%)</div>
          <div className="cg-cell" data-label="Sunflower Oil">High (~65%)</div>
        </div>

        <div className="cg-row">
          <div className="cg-cell cg-feature">Omega 3 Source</div>
          <div className="cg-cell cg-winner" data-label="Soybean Oil"><span className="cg-icon">✦</span> Excellent source (ALA 6-8g)</div>
          <div className="cg-cell" data-label="Palm Oil">Negligible</div>
          <div className="cg-cell" data-label="Sunflower Oil">Negligible</div>
        </div>

        <div className="cg-row">
          <div className="cg-cell cg-feature">Saturated Fat Level</div>
          <div className="cg-cell cg-winner" data-label="Soybean Oil"><span className="cg-icon">✦</span> Low (20g per 100g)</div>
          <div className="cg-cell" data-label="Palm Oil">High (~50%)</div>
          <div className="cg-cell" data-label="Sunflower Oil">Low (~10%)</div>
        </div>
      </div>
      
      <div className="compare-source">Note: Values are approximate and can vary based on specific refining processes and sourcing.</div>
    </div>
  </section>

  {/* INTERACTIVE FAQ ACCORDION */}
  <section id="faq">
     <div className="faq-inner">
      <div className="faq-left">
        <div className="section-label">Discover More</div>
        <h2 className="section-title">Frequently Asked Questions</h2>
      </div>

      <div className="faq-right">
        <div className="faq-list">
          <div className={`faq-item ${openFaq === 0 ? "active" : ""}`}>
            <button className="faq-btn" onClick={ () => toggleFaq(0) }>
              Why is Soybean Oil considered heart-healthy? <span className="faq-icon">+</span>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                <p>Jeevan Rekha Soybean oil contains mostly polyunsaturated fats (PUFAs) and monounsaturated fats (MUFAs). It is a rare, excellent source of Alpha-Linolenic Acid (Omega-3) and Linoleic Acid (Omega-6), which helps maintain normal blood cholesterol levels. It is also packed with natural anti-oxidants (Tocopherols).</p>
              </div>
            </div>
          </div>

          <div className={`faq-item ${openFaq === 1 ? "active" : ""}`}>
            <button className="faq-btn" onClick={ () => toggleFaq(1) }>
              What does "Fortified with Vitamin A & D" mean? <span className="faq-icon">+</span>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                <p>Jeevan Rekha Soybean Oil is enriched with essential fat-soluble vitamins. It contains added Vitamin A (2500 IU per 100g), which supports healthy vision and immunity, and Vitamin D (450 IU per 100g), which is crucial for strong bones and calcium absorption.</p>
              </div>
            </div>
          </div>

          <div className={`faq-item ${openFaq === 2 ? "active" : ""}`}>
            <button className="faq-btn" onClick={ () => toggleFaq(2) }>
              What are the main ingredients in Jeevan Rekha Soybean Oil? <span className="faq-icon">+</span>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                <p>The product contains 100% pure Refined Soybean Oil, Antioxidant TBHQ (E 319) to maintain freshness and stability during high-heat cooking, and is fortified with Vitamin A and Vitamin D. It is strictly free from Argemone Oil.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer id="footer">
    <div className="footer-brand">
      <div className="footer-logo-wrap">
        <img src="/jeevan-rekha-logo-white.png" alt="Jeevan Rekha — Premium Edible Oils" style={{height: '48px', width: 'auto', objectFit: 'contain'}} />
      </div>
    </div>
    <div className="footer-tagline-center">"At the heart of every healthy meal."</div>
    <div className="footer-copy">&copy; <a href="https://abudyog.in/" target="_blank" rel="noopener noreferrer" className="ab-link">AB Udyog</a>. All rights reserved.</div>
  </footer>

  

      </div>
    </>
  );
}
