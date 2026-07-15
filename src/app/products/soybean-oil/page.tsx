"use client";

import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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
        "text": "Jeevan Rekha Soybean Oil is packed under FSSAI-certified quality controls by AB Udyog Pvt. Ltd., a trusted brand with 40+ years of expertise in the edible oil industry in West Bengal."
      }
    }
  ]
};

export default function SoybeanOilPage() {

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

      // Comparison section table
      ScrollTrigger.create({
        trigger: '#comparison', start: 'top 75%', once: true,
        onEnter: () => gsap.to('.compare-table-wrapper', { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' })
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
      <Link href="/products" className="back-to-site" title="All Products">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
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
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Rare plant-based source of Omega-3 ALA (6–8g per 100g)</div>
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>High PUFA profile (52.5–70g) — including Linoleic Acid</div>
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Fortified with Vitamin A (2500 IU) &amp; Vitamin D (450 IU)</div>
        </div>

        <p className="hero-desc">Jeevan Rekha Refined Soybean Oil is one of the very few vegetable oils that delivers a meaningful dose of Alpha-Linolenic Acid (Omega-3 ALA) — 6 to 8 grams per 100g — alongside a rich Omega-6 Linoleic Acid profile scientifically linked to maintaining healthy blood cholesterol. With a high smoke point of ~232°C, natural Tocopherols, and fortified Vitamins A &amp; D, it is engineered to serve every cooking method in the Indian kitchen — from everyday tadkas to festive baking.</p>

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
          <h2 id="applications-heading" className="section-title">Suitable for various<br/>cooking applications</h2>
        </div>
        <p>Soybean oil is the global benchmark for kitchen versatility — and for good reason. Its nearly flavourless character comes from an exceptionally low level of natural colouring pigments, allowing it to act as a pure, transparent medium that amplifies the spices and ingredients you add — not itself.</p>
      </div>

      <div className="feed-grid">
        <article className="feed-card">
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🍛</div>
            <h3 className="feed-card-title">Indian Curries</h3>
            <p className="feed-card-desc">Its near-zero flavour interference means spice-forward curries — built on cumin, coriander, mustard seeds, and turmeric — taste exactly as they should. The oil carries the masala, not the other way around.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="feed-card">
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🍟</div>
            <h3 className="feed-card-title">Deep Frying</h3>
            <p className="feed-card-desc">With a smoke point of ~232°C, it maintains thermal stability well into high-heat frying without producing harmful polar compounds — delivering consistently crisp, dry, non-greasy results.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="feed-card">
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🥗</div>
            <h3 className="feed-card-title">Dressings & Sautéing</h3>
            <p className="feed-card-desc">Its low viscosity at room temperature makes it ideal for cold applications — emulsifying effortlessly into vinaigrettes and adhering evenly to greens without pooling or heaviness.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="feed-card">
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🧁</div>
            <h3 className="feed-card-title">Baking</h3>
            <p className="feed-card-desc">The high proportion of unsaturated fats remains stable in oven heat and integrates seamlessly into batters, yielding consistently moist crumb structure and extended shelf life in baked goods.</p>
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
        <div className="stat-icon">🌿</div>
        <div className="stat-label">ALA Omega-3</div>
        <div className="stat-sub">6–8g per 100g — rare in vegetable oils</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">🔥</div>
        <div className="stat-label">~232°C Smoke Point</div>
        <div className="stat-sub">Stable across all cooking temperatures</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">💚</div>
        <div className="stat-label">Linoleic Acid</div>
        <div className="stat-sub">Clinically shown to support normal blood cholesterol</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">🛡️</div>
        <div className="stat-label">Tocopherols + Vit A & D</div>
        <div className="stat-sub">Natural antioxidant protection + fortified micronutrients</div>
      </div>
    </div>
  </section>

  <section id="nutrition">
    <div className="section-bg-art"></div>
    <div className="nutrition-inner">
      <div className="nutrition-header">
        <h2 className="section-title">Plant-Based Power,<br/>Decoded</h2>
      </div>

      <div className="nutrition-grid">
        <div className="nutri-card nutri-card-dark">
          <div className="nutri-card-label">Refined. Fortified. Ready.</div>
          <div className="nutri-card-title">A Complete Formula</div>
          <p className="nutri-desc">Every drop carries 100% refined soybean oil — the world&rsquo;s most widely consumed edible oil — plus FSSAI-mandated Vitamin A &amp; D fortification and TBHQ antioxidant protection for lasting freshness.</p>
          
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
          <div className="nutri-card-label">Nutritional Facts (Approx. per 100g)</div>
          <div className="nutri-card-title">Highest PUFA Yield</div>
          <p className="nutri-desc">At 52.5–70g of PUFA per 100g, soybean oil ranks among the richest plant-based sources of polyunsaturated fat — with zero cholesterol and a caloric density of 900 Kcal optimal for active households.</p>
          
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
        <h2 className="section-title">Soybean vs. The Rest<br/><em>Where Science Settles the Debate</em></h2>
      </div>

      <div className="compare-table-wrapper">
        <Table className="compare-table">
          <TableHeader>
            <TableRow className="compare-header-row">
              <TableHead className="compare-th compare-feature-header">Features</TableHead>
              <TableHead className="compare-th compare-winner-header">
                <span className="compare-badge">Top Choice</span>
                Soybean Oil
              </TableHead>
              <TableHead className="compare-th">Palm Oil</TableHead>
              <TableHead className="compare-th">Sunflower Oil</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Smoke Point</TableCell>
              <TableCell className="compare-winner-cell" data-label="Soybean Oil"><span className="compare-icon">✦</span> High (Suitable for all cooking)</TableCell>
              <TableCell data-label="Palm Oil">Moderate</TableCell>
              <TableCell data-label="Sunflower Oil">High</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Flavour Profile</TableCell>
              <TableCell className="compare-winner-cell" data-label="Soybean Oil"><span className="compare-icon">✦</span> Extremely Neutral</TableCell>
              <TableCell data-label="Palm Oil">Heavy, noticeable taste</TableCell>
              <TableCell data-label="Sunflower Oil">Neutral</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">PUFA Content</TableCell>
              <TableCell className="compare-winner-cell" data-label="Soybean Oil"><span className="compare-icon">✦</span> High (52.5–70g per 100g)</TableCell>
              <TableCell data-label="Palm Oil">Very Low (~9%)</TableCell>
              <TableCell data-label="Sunflower Oil">High (~65%)</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Omega 3 Source</TableCell>
              <TableCell className="compare-winner-cell" data-label="Soybean Oil"><span className="compare-icon">✦</span> Excellent (ALA 6–8g)</TableCell>
              <TableCell data-label="Palm Oil">Negligible</TableCell>
              <TableCell data-label="Sunflower Oil">Negligible</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Saturated Fat Level</TableCell>
              <TableCell className="compare-winner-cell" data-label="Soybean Oil"><span className="compare-icon">✦</span> Low (20g per 100g)</TableCell>
              <TableCell data-label="Palm Oil">High (~50%)</TableCell>
              <TableCell data-label="Sunflower Oil">Low (~10%)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div className="compare-source">Note: Values are approximate and can vary based on specific refining processes and sourcing.</div>
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
              Why is Soybean Oil considered heart-healthy?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Soybean oil is one of the few common vegetable oils with a measurable Omega-3 (ALA) content — between 6 and 8 grams per 100g. This, combined with high Linoleic Acid (Omega-6) levels, helps maintain a balanced polyunsaturated fatty acid intake. PUFA-rich diets are scientifically associated with healthy LDL cholesterol management. Jeevan Rekha Soybean Oil also contains natural Tocopherols (Vitamin E isomers) that protect cells from oxidative stress.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2" className="faq-accordion-item">
            <AccordionTrigger className="faq-accordion-trigger">
              What does &ldquo;Fortified with Vitamin A &amp; D&rdquo; mean?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              As a refined edible oil, soybean oil is fat-soluble — meaning the vitamins A and D added to Jeevan Rekha Soybean Oil are absorbed efficiently by the body alongside dietary fat. Vitamin A (2500 IU per 100g) is essential for epithelial tissue health, vision, and immune function. Vitamin D (450 IU per 100g) drives calcium and phosphorus absorption, critical for bone density — a particular concern in Indian households with limited sun exposure.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3" className="faq-accordion-item">
            <AccordionTrigger className="faq-accordion-trigger">
              What are the main ingredients in Jeevan Rekha Soybean Oil?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Jeevan Rekha Soybean Oil contains Refined Soybean Oil, Antioxidant TBHQ (E-319) — a permitted food-grade antioxidant that prevents rancidity at high temperatures — and is fortified with Vitamins A and D as mandated by FSSAI. It is packaged and marketed by AB Udyog Pvt. Ltd., a trusted name with 40+ years of expertise in West Bengal&rsquo;s edible oil industry, and is certified free from Argemone Oil adulteration.
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
            Delivering premium refined edible oils rich in Omega 3 &amp; 6 fatty acids, with scientific precision and uncompromising purity.
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
            FSSAI certified. Fortified with Vitamins A &amp; D. Strict lab-controlled packaging and quality checks for guaranteed freshness.
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
