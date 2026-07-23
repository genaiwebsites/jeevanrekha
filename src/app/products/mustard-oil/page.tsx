"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "155.00",
    "highPrice": "750.00",
    "offerCount": "2",
    "offers": [
      {
        "@type": "Offer",
        "name": "1-Litre Pouch",
        "price": "155.00",
        "priceCurrency": "INR",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "url": "https://www.flipkart.com/jeevanrekha-premium-kacchi-ghani-pure-mustard-oil-pouch/p/itmdf9320ba020dc?pid=EDOHNCJQRZPPFJJN",
        "seller": { "@type": "Organization", "name": "Flipkart" }
      },
      {
        "@type": "Offer",
        "name": "5-Litre Jar",
        "price": "750.00",
        "priceCurrency": "INR",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "url": "https://www.flipkart.com/jeevanrekha-premium-kacchi-ghani-pure-mustard-oil-5-litre-jar/p/itme5ca42178f49c?pid=EDOHNMWAXPY4HCF8",
        "seller": { "@type": "Organization", "name": "Flipkart" }
      }
    ]
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = "Kacchi Ghani Mustard Oil | Jeevan Rekha";
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

      // Batch ScrollTrigger on .benefit-card
      ScrollTrigger.batch('.benefit-card', {
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

      // Quality section cards
      gsap.set('.quality-card', { opacity: 0, y: 30 });
      ScrollTrigger.create({
        trigger: '#quality', start: 'top 75%', once: true,
        onEnter: () => gsap.to('.quality-card', { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'expo.out' })
      });

      // Comparison section table
      ScrollTrigger.create({
        trigger: '#comparison', start: 'top 75%', once: true,
        onEnter: () => gsap.to('.compare-table-wrapper', { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' })
      });

      // Infinite Spin
      gsap.to(".hero-ring", { rotate: "+=360", duration: 80, repeat: -1, ease: "none" });

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
      <div className="mustard-page-container">
        

  <nav id="nav" role="navigation">
    <div className="nav-logo">
      <img src="/jeevan-rekha-logo.png" alt="Jeevan Rekha — Premium Edible Oils" style={{height: '44px', width: 'auto', objectFit: 'contain'}} />
    </div>
    
    <ul className="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#benefits">Benefits</a></li>
      <li><a href="#nutrition">Nutrition</a></li>
      <li><a href="#comparison">Compare</a></li>
    </ul>

    <div className="nav-spacer">
      <Link href="/products" className="back-to-site" title="All Products">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
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
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Cold-pressed extraction from premium Brassica juncea seeds</div>
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Naturally rich in Monounsaturated Fatty Acids (MUFA ~60%)</div>
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Bioactive Allyl Isothiocyanate (AITC) for authentic pungency</div>
        </div>

        <p className="hero-desc">Jeevan Rekha Kacchi Ghani Mustard Oil is crafted from selected bold mustard seeds, cold-pressed at low temperatures to fully retain its natural Allyl Isothiocyanate (AITC) content, essential fatty acids, and Vitamin E. Known for its intense aroma, rich golden hue, and thermal stability (smoke point ~250°C), it is the definitive choice for authentic regional cooking, preservation, and tempering.</p>

        <a className="hero-cta" href="#benefits">
          <span className="cta-text">Discover the Oil</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </a>
      </div>

      <div className="hero-product-col">
        <div className="hero-product-wrap" id="productWrap">
          <Image className="hero-product-img"
                 src="/jr_kgmo.png"
                 alt="Jeevan Rekha Kachi Ghani Mustard Oil Pouch"
                 width={400}
                 height={600}
                 priority
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

  <div id="about-strip" aria-hidden="true">
    <div className="strip-marquee-track" id="marqueeTrack">
      <span className="strip-item">Kacchi Ghani Cold-Pressed</span>
      <span className="strip-item">High Pungency AITC</span>
      <span className="strip-item">Rich in MUFA (~60%)</span>
      <span className="strip-item">Cold-Pressed under 50°C</span>
      <span className="strip-item">Zero Argemone Oil Adulteration</span>
      <span className="strip-item">Fortified with Vitamin A &amp; D</span>
      <span className="strip-item">Kacchi Ghani Cold-Pressed</span>
      <span className="strip-item">High Pungency AITC</span>
      <span className="strip-item">Rich in MUFA (~60%)</span>
      <span className="strip-item">Cold-Pressed under 50°C</span>
      <span className="strip-item">Zero Argemone Oil Adulteration</span>
      <span className="strip-item">Fortified with Vitamin A &amp; D</span>
    </div>
  </div>

  <section id="benefits" aria-labelledby="benefits-heading">
    <div className="section-bg-art" style={{transform: 'scaleY(-1)'}}></div>
    
    <div className="applications-inner">
      <div className="applications-header">
        <div>
          <h2 id="benefits-heading" className="section-title">Suitable for various<br/>cooking applications</h2>
        </div>
        <p>Jeevan Rekha Kacchi Ghani Mustard Oil is celebrated for its intense aroma, high smoke point, and natural preservative qualities. It is uniquely suited for traditional high-heat cooking and pickling.</p>
      </div>

      <div className="benefits-grid">
        <article className="benefit-card">
          <div className="benefit-card-content">
            <div className="benefit-icon">🌶️</div>
            <h3>Pungent Aroma &amp; Tadka</h3>
            <p>The natural concentration of Allyl Isothiocyanate (AITC) provides a sharp, pungent bite that is crucial for authentic mustard-based curries, bhartas, and slow-cooked dishes.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="benefit-card">
          <div className="benefit-card-content">
            <div className="benefit-icon">🔥</div>
            <h3>High-Heat Tempering</h3>
            <p>With a smoke point of ~250°C, it remains thermally stable during deep frying and tempering, preventing fat breakdown and keeping food crisp and nutritious.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="benefit-card">
          <div className="benefit-card-content">
            <div className="benefit-icon">🏺</div>
            <h3>Pickling &amp; Preservation</h3>
            <p>Its natural anti-microbial properties make it the perfect medium for preserving traditional Indian pickles, keeping spices fresh and extending shelf life.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="benefit-card">
          <div className="benefit-card-content">
            <div className="benefit-icon">🌿</div>
            <h3>Cold-Pressed Integrity</h3>
            <p>Cold-pressed using wooden presses below 50°C, it fully retains natural Tocopherols (Vitamin E), lecithin, and essential lipids without any solvent treatment.</p>
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
        <div className="stat-icon">🔥</div>
        <div className="stat-label">~250°C Smoke Point</div>
        <div className="stat-sub">Superior heat tolerance for deep frying</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">🥑</div>
        <div className="stat-label">MUFA (~60%)</div>
        <div className="stat-sub">Rich in heart-friendly monounsaturated fats</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">🌶️</div>
        <div className="stat-label">Natural Pungency</div>
        <div className="stat-sub">Contains bioactive Allyl Isothiocyanate</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">🛡️</div>
        <div className="stat-label">Tocopherols (Vit E)</div>
        <div className="stat-sub">Natural antioxidants + Vitamin A &amp; D</div>
      </div>
    </div>
  </section>

  {/* COMPARATIVE STUDY */}
  <section id="comparison">
    <div className="section-bg-art"></div>
    <div className="comparison-inner">
      <div className="advantage-header">
        <h2 className="section-title">Mustard vs. Refined Oils<br/><em>Where Science Settles the Debate</em></h2>
      </div>

      <div className="compare-table-wrapper">
        <Table className="compare-table">
          <TableHeader>
            <TableRow className="compare-header-row">
              <TableHead className="compare-th compare-feature-header">Features</TableHead>
              <TableHead className="compare-th compare-winner-header">
                <span className="compare-badge">Top Choice</span>
                Kacchi Ghani Mustard
              </TableHead>
              <TableHead className="compare-th">Palm Oil</TableHead>
              <TableHead className="compare-th">Refined Oils</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Extraction Process</TableCell>
              <TableCell className="compare-winner-cell" data-label="Mustard Oil"><span className="compare-icon">✦</span> Cold-Pressed (under 50°C)</TableCell>
              <TableCell data-label="Palm Oil">Chemical solvent extraction</TableCell>
              <TableCell data-label="Refined Oils">High-temperature refining</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Smoke Point</TableCell>
              <TableCell className="compare-winner-cell" data-label="Mustard Oil"><span className="compare-icon">✦</span> High (~250°C)</TableCell>
              <TableCell data-label="Palm Oil">Moderate (~235°C)</TableCell>
              <TableCell data-label="Refined Oils">Varies (~230°C)</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">MUFA Content</TableCell>
              <TableCell className="compare-winner-cell" data-label="Mustard Oil"><span className="compare-icon">✦</span> Rich (~60g per 100g)</TableCell>
              <TableCell data-label="Palm Oil">Moderate (~39g)</TableCell>
              <TableCell data-label="Refined Oils">Low (~20g)</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">AITC Bioactives</TableCell>
              <TableCell className="compare-winner-cell" data-label="Mustard Oil"><span className="compare-icon">✦</span> High (Natural pungency)</TableCell>
              <TableCell data-label="Palm Oil">None</TableCell>
              <TableCell data-label="Refined Oils">Strips during heating</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Saturated Fats</TableCell>
              <TableCell className="compare-winner-cell" data-label="Mustard Oil"><span className="compare-icon">✦</span> Low (~12g per 100g)</TableCell>
              <TableCell data-label="Palm Oil">Very High (~50g)</TableCell>
              <TableCell data-label="Refined Oils">Varies (~15-20g)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div className="compare-source">Note: Values are approximate and based on standard nutritional profiles of cold-pressed vs refined oils.</div>
    </div>
  </section>

  {/* NUTRITION */}
  <section id="nutrition">
    <div className="section-bg-art"></div>
    <div className="nutrition-inner">
      <div className="nutrition-header">
        <h2 className="section-title">Cold-Pressed Power,<br/>Decoded</h2>
      </div>

      <div className="nutrition-grid">
        <div className="nutri-card nutri-card-dark">
          <div className="nutri-card-label">Pure Extraction. Fortified.</div>
          <div className="nutri-card-title">Traditional Kacchi Ghani</div>
          <p className="nutri-desc">Every drop is cold-pressed below 50&deg;C from premium bold mustard seeds, fortified with Vitamin A &amp; D to support everyday wellness and FSSAI safety compliance.</p>
          
          <ul className="nutri-list">
            <li className="nutri-list-item">
              <span className="nutri-icon">✨</span> 100% Pure Mustard Oil
            </li>
            <li className="nutri-list-item">
              <span className="nutri-icon">🛡️</span> Rich in Natural Bioactives (AITC)
            </li>
            <li className="nutri-list-item">
              <span className="nutri-icon">☀️</span> Fortified with Vitamin A &amp; D
            </li>
          </ul>
        </div>

        <div className="nutri-card nutri-card-light">
          <div className="nutri-card-label">Nutritional Facts (Approx. per 100g)</div>
          <div className="nutri-card-title">Naturally MUFA Rich</div>
          <p className="nutri-desc">Jeevan Rekha Mustard Oil provides an excellent balance of monounsaturated fats (MUFA ~60g) and natural antioxidants (Tocopherols), with zero cholesterol.</p>
          
          <ul className="nutri-list">
            <li className="nutri-list-item">Monounsaturated Fatty Acids (MUFA) <span className="nutri-val">58 - 62g</span></li>
            <li className="nutri-list-item">Polyunsaturated Fatty Acids (PUFA) <span className="nutri-val">15 - 18g</span></li>
            <li className="nutri-list-item">Saturated Fat <span className="nutri-val">11 - 13g</span></li>
            <li className="nutri-list-item">Natural Vitamin E (Tocopherols) <span className="nutri-val">~30mg</span></li>
            <li className="nutri-list-item">Added Vitamin A / D <span className="nutri-val">2500 IU / 450 IU</span></li>
            <li className="nutri-list-item">Energy / Cholesterol <span className="nutri-val">900 Kcal / 0 mg</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* QUALITY */}
  <section id="quality" aria-labelledby="quality-heading">
    <div className="applications-inner">
      <div className="applications-header">
        <div>
          <h2 id="quality-heading" className="section-title">Crafted for<br /><em>Absolute Purity</em></h2>
        </div>
        <p>Jeevan Rekha Mustard Oil is selected and packed under strict quality control and laboratory testing to ensure zero contamination.</p>
      </div>

      <div className="quality-grid">
        <article className="quality-card">
          <div className="quality-icon">🧪</div>
          <h3>Lab-Verified Batches</h3>
          <p>Every single batch undergoes chromatography testing to guarantee a zero-adulteration profile and confirm the natural presence of Allyl Isothiocyanate (AITC).</p>
        </article>
        <article className="quality-card">
          <div className="quality-icon">🌾</div>
          <h3>First-Press Extraction</h3>
          <p>We process only premium black mustard seeds in wooden press systems, avoiding high-temperature friction to prevent erucic acid breakdown or oil oxidation.</p>
        </article>
        <article className="quality-card">
          <div className="quality-icon">🏛️</div>
          <h3>FSSAI Compliant</h3>
          <p>Fully certified and fortified according to the Food Safety and Standards Authority of India (FSSAI) guidelines, ensuring standard-compliant safety.</p>
        </article>
      </div>
    </div>
  </section>

  {/* INTERACTIVE FAQ ACCORDION */}
  <section id="faq">
    <div className="faq-inner">
      <div className="faq-left">
        <h2 className="section-title">Frequently Asked Questions</h2>
      </div>

      <div className="faq-right">
        <Accordion className="faq-accordion-container">
          <AccordionItem value="faq-1" className="faq-accordion-item">
            <AccordionTrigger className="faq-accordion-trigger">
              Why is Kacchi Ghani Mustard Oil pungent?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Mustard seeds naturally contain sinigrin and the myrosinase enzyme. When seeds are cold-pressed (Kacchi Ghani) in the presence of water/moisture, they react to release Allyl Isothiocyanate (AITC). This compound is volatile and responsible for the signature sharp aroma and pungent taste that enhances traditional Indian dishes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2" className="faq-accordion-item">
            <AccordionTrigger className="faq-accordion-trigger">
              How does cold-pressing differ from refining?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Refined vegetable oils undergo high-temperature extraction (200&deg;C+), chemical neutralization, and bleaching, which strip away natural pigments, antioxidants, and nutrients. Cold-pressed Kacchi Ghani Mustard Oil is mechanically pressed under 50&deg;C, preserving all natural Vitamin E (Tocopherols), aroma, and essential fatty acids.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3" className="faq-accordion-item">
            <AccordionTrigger className="faq-accordion-trigger">
              What does Vitamin A &amp; D fortification accomplish?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Under FSSAI guidelines, edible oils are fortified to combat micronutrient deficiencies. Fortifying Jeevan Rekha Kacchi Ghani Mustard Oil ensures that fat-soluble Vitamin A (for eye health and immunity) and Vitamin D (for calcium absorption and skeletal strength) are delivered in a stable, easily absorbed form.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>

  <footer id="footer">
    <div className="footer-inner-wrap">
      <div className="footer-top">
        <div className="footer-brand-col">
          <Link href="/" title="Jeevan Rekha Home" className="footer-logo-link">
            <img src="/jeevan-rekha-logo-white.png" alt="Jeevan Rekha — Premium Edible Oils" style={{height: '48px', width: 'auto', objectFit: 'contain'}} />
          </Link>
          <p className="footer-brand-desc">
            AB Udyog Pvt. Ltd. delivers premium cold-pressed Kacchi Ghani Mustard Oil, backed by 40+ years of trust and quality.
          </p>
        </div>

        <div className="footer-nav-col">
          <h4 className="footer-col-title">Navigation</h4>
          <div className="footer-links-list">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/manufacturing">Manufacturing</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-info-col">
          <h4 className="footer-col-title">Quality Assured</h4>
          <p className="footer-info-text">
            FSSAI certified. Fortified with Vitamins A &amp; D. High AITC pungency value with zero adulteration.
          </p>
        </div>
      </div>
    </div>

    <div className="footer-bottom-strip">
      <div className="footer-bottom-inner">
        <p className="footer-copy">&copy; <a href="https://abudyog.in/" target="_blank" rel="noopener noreferrer" className="ab-link">AB Udyog</a>. All rights reserved.</p>
        <div className="footer-tagline-center">&ldquo;At the heart of every healthy meal.&rdquo;</div>
      </div>
    </div>
  </footer>

  

      </div>
    </>
  );
}
