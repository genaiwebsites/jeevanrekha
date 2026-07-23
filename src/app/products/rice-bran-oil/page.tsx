"use client";

/* Hallmark · macrostructure: Marquee Hero · genre: atmospheric · theme: studied-DNA (source: rice-bran-oil) */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Jeevan Rekha Rice Bran Oil",
  "image": "https://jeevanrekhafoods.com/jr_rbo.png",
  "description": "Physically refined rice bran oil with a 232°C smoke point. Rich in Gamma-Oryzanol, Vitamin E tocotrienols, and natural antioxidants. FSSAI certified.",
  "brand": { "@type": "Brand", "name": "Jeevan Rekha" },
  "manufacturer": {
    "@type": "Organization",
    "name": "AB Udyog Private Limited",
    "url": "https://jeevanrekhafoods.com"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "url": "https://jeevanrekhafoods.com/products/rice-bran-oil"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jeevanrekhafoods.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://jeevanrekhafoods.com/products" },
    { "@type": "ListItem", "position": 3, "name": "Rice Bran Oil", "item": "https://jeevanrekhafoods.com/products/rice-bran-oil" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is rice bran oil considered healthy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rice bran oil contains Gamma-Oryzanol, Vitamin E tocotrienols, and a balanced fatty-acid profile that may help maintain healthy cholesterol levels and support cardiovascular health."
      }
    },
    {
      "@type": "Question",
      "name": "What is the smoke point of Jeevan Rekha Rice Bran Oil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It has a high smoke point of approximately 232°C (450°F), making it excellent for high-heat frying, stir-frying, and deep-frying without producing harmful compounds."
      }
    },
    {
      "@type": "Question",
      "name": "What is physical refining in rice bran oil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Physical refining uses steam distillation instead of chemical solvents to remove free fatty acids, preserving more of the natural antioxidants like Gamma-Oryzanol and Vitamin E."
      }
    }
  ]
};

export default function RiceBranOilPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = "Physically Refined Rice Bran Oil | Jeevan Rekha";
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
      <div className="rice-bran-page-container">
        

  <nav id="nav" role="navigation">
    <div className="nav-logo">
      <Link href="/" title="Jeevan Rekha Home" className="nav-logo-link">
        <img src="/jeevan-rekha-logo.png"
             alt="Jeevan Rekha — Premium Edible Oils"
             style={{height: '44px', width: 'auto', objectFit: 'contain'}} />
      </Link>
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
    
    {/* Sparse, Minimalist Constellation-style Orbit Ring */}
    <svg className="hero-ring" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="400" cy="400" r="360" stroke="var(--gold)" strokeWidth="1" strokeDasharray="6 30" opacity="0.3"/>
      <circle cx="400" cy="400" r="260" stroke="var(--green-muted)" strokeWidth="1" strokeDasharray="4 20" opacity="0.3"/>
      <circle cx="400" cy="400" r="160" stroke="var(--gold)" strokeWidth="0.5" strokeDasharray="2 12" opacity="0.2"/>
      
      <g stroke="var(--gold)" strokeWidth="1.5" opacity="0.6">
        <path d="M 600,200 C 615,210 615,230 600,240 C 585,230 585,210 600,200 Z" transform="rotate(45 600 220)"/>
        <path d="M 200,600 C 215,610 215,630 200,640 C 185,630 185,610 200,600 Z" transform="rotate(-30 200 620)"/>
        <path d="M 250,250 C 265,260 265,280 250,290 C 235,280 235,260 250,250 Z" transform="rotate(15 250 270)"/>
        <path d="M 650,550 C 665,560 665,580 650,590 C 635,580 635,560 650,550 Z" transform="rotate(75 650 570)"/>
      </g>

      <g stroke="var(--gold)" strokeWidth="1" opacity="0.5">
        <path d="M 400,40 L 400,60 M 390,50 L 410,50"/>
        <path d="M 740,400 L 760,400 M 750,390 L 750,410"/>
        <path d="M 400,740 L 400,760 M 390,750 L 410,750"/>
        <path d="M 40,400 L 60,400 M 50,390 L 50,410"/>
      </g>
    </svg>

    <div className="hero-inner">
      <div className="hero-text-col">
        <h1 className="hero-title">Jeevan Rekha<br/><em>Rice Bran Oil</em></h1>
        
        <div className="hero-taglines">
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Good Cholesterol</div>
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Rich in Omega 3 & 6</div>
          <div className="hero-tagline-item"><span className="hero-tagline-dot"></span>Minimal Absorption</div>
        </div>

        <p className="hero-desc">Discover the goodness of 100% pure, premium Rice Bran Oil by Jeevan Rekha Foods — crafted to enrich Indian cooking with natural flavour and health in every drop. Choose Jeevan Rekha to bring home the benefits of Rice Bran Oil, and serve up delicious, heart-friendly meals your family will love every day.</p>

        {/* Redesigned Solid Box Button */}
        <a className="hero-cta" href="#nutrition">
          <span className="cta-text">Enquire Now</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </a>
      </div>

      <div className="hero-product-col">
        <div className="hero-product-wrap" id="productWrap">
          <Image className="hero-product-img"
                 src="/jr_rbo.png"
                 alt="Jeevan Rekha Rice Bran Oil Pouch"
                 width={400}
                 height={600}
                 priority
                  />

          <div className="hero-product-fallback" style={{display: 'none', width: '280px', height: '380px', background: 'linear-gradient(145deg,var(--beige),var(--beige-mid))', borderRadius: '16px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', boxShadow: '0 24px 48px rgba(0,0,0,0.12)', position: 'relative', zIndex: 2}}>
            <div style={{fontFamily: 'var(--serif)', fontSize: '3rem', fontWeight: 300, color: 'var(--text-dark)', lineHeight: 1, textAlign: 'center'}}>Jeevan<br />Rekha</div>
            <div style={{fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)'}}>Rice Bran Oil</div>
          </div>

          <div className="pill-orbit-ring">
            <div className="pill-anchor top-left">
              <div className="data-pill" aria-label="FSSAI Certified">
                <span className="data-pill-icon" aria-hidden="true">✦</span>
                <span><span className="data-pill-label">FSSAI</span> <span className="data-pill-sub">Certified</span></span>
              </div>
            </div>
            <div className="pill-anchor top-right">
              <div className="data-pill" aria-label="Lab Tested">
                <span className="data-pill-icon" aria-hidden="true">🔬</span>
                <span><span className="data-pill-label">Lab</span> <span className="data-pill-sub">Tested</span></span>
              </div>
            </div>
            <div className="pill-anchor bot-left">
              <div className="data-pill" aria-label="No Argemone Oil">
                <span className="data-pill-icon" aria-hidden="true">🚫</span>
                <span><span className="data-pill-label">No Argemone</span> <span className="data-pill-sub">Oil</span></span>
              </div>
            </div>
            <div className="pill-anchor bot-right">
              <div className="data-pill" aria-label="Made in India">
                <span className="data-pill-icon" aria-hidden="true">🇮🇳</span>
                <span><span className="data-pill-label">Made in</span> <span className="data-pill-sub">India</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div id="about-strip" aria-hidden="true">
    <div className="strip-marquee-track" id="marqueeTrack">
      <span className="strip-item">Lab Tested</span>
      <span className="strip-item">No Argemone Oil</span>
      <span className="strip-item">FSSAI Certified</span>
      <span className="strip-item">Well Knit Supply Chain</span>
      <span className="strip-item">Manufactured in India</span>
      <span className="strip-item">Lab Tested</span>
      <span className="strip-item">No Argemone Oil</span>
      <span className="strip-item">FSSAI Certified</span>
      <span className="strip-item">Well Knit Supply Chain</span>
      <span className="strip-item">Manufactured in India</span>
    </div>
  </div>

  <section id="applications" aria-labelledby="applications-heading">
    <div className="section-bg-art"></div>
    <div className="applications-inner">
      <div className="applications-header">
        <div>
          <h2 id="applications-heading" className="section-title">Ideal for<br/>Every Cuisine</h2>
        </div>
        <p>Jeevan Rekha Rice Bran Oil delivers optimal performance across all cooking methods — a single premium ingredient that elevates the taste and health quotient of your everyday meals.</p>
      </div>

      <div className="feed-grid">
        <article className="feed-card">
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🍛</div>
            <h3 className="feed-card-title">Everyday Cuisine</h3>
            <p className="feed-card-desc">Perfect for high-heat tadkas, rich curries, and daily sautéing. Blends seamlessly with traditional spices without leaving a greasy residue.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="feed-card">
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🍟</div>
            <h3 className="feed-card-title">Crisp Deep Frying</h3>
            <p className="feed-card-desc">Stable up to 450°F (232°C). Guarantees crispy pooris and pakoras that absorb up to 15% less oil while preventing harmful free radicals.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="feed-card">
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🥘</div>
            <h3 className="feed-card-title">Nutrient Sautéing</h3>
            <p className="feed-card-desc">Maintains molecular stability under heat, allowing vegetables and paneer to retain their natural vitamins, vibrant colors, and crisp textures.</p>
            <div className="feed-card-bar"><div className="feed-card-bar-fill"></div></div>
          </div>
        </article>

        <article className="feed-card">
          <div className="feed-card-content">
            <div className="feed-card-icon-wrap">🥖</div>
            <h3 className="feed-card-title">Light Baking</h3>
            <p className="feed-card-desc">A light, neutral fat alternative that replaces butter. Ideal for soft breads, moist cakes, and cookies, cutting saturated fats by 70%.</p>
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
        <div className="stat-icon">✨</div>
        <div className="stat-label">100% Physically Refined</div>
        <div className="stat-sub">Zero blend or preservatives for absolute purity</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">🔥</div>
        <div className="stat-label">Perfect High Smoke Point</div>
        <div className="stat-sub">Stable for all types of frying and baking</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">❤️</div>
        <div className="stat-label">Abundant Gamma Oryzanol</div>
        <div className="stat-sub">Lowers Bad Cholesterol, builds Good Cholesterol</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">⚖️</div>
        <div className="stat-label">Ideal SFA MUFA PUFA Ratio</div>
        <div className="stat-sub">Reduces inflammation and improves heart health</div>
      </div>
    </div>
  </section>

  <section id="nutrition">
    <div className="section-bg-art"></div>
    <div className="nutrition-inner">
      <div className="nutrition-header">
        <h2 className="section-title">The Foundation<br/>of Health</h2>
      </div>

      <div className="nutrition-grid">
        {/* Dark Asymmetrical Card */}
        <div className="nutri-card nutri-card-dark">
          <div className="nutri-card-label">Purity Guaranteed</div>
          <div className="nutri-card-title">Dietician’s Recommended Ingredients</div>
          <p className="nutri-desc">Nutritional synergy of ingredients of the highest quality that perfectly complement your recipes and nourish your body.</p>
          
          <ul className="nutri-list">
            <li className="nutri-list-item">
              <span className="nutri-icon">✨</span> Physically Refined Rice Bran Oil
            </li>
            <li className="nutri-list-item">
              <span className="nutri-icon">🛡️</span> Permitted Antioxidants
            </li>
            <li className="nutri-list-item" style={{borderBottom: 'none', paddingBottom: 0}}>
              <span className="nutri-icon">☀️</span> Vitamin A, Vitamin D & E
            </li>
          </ul>
        </div>

        {/* Light Asymmetrical Card */}
        <div className="nutri-card nutri-card-light">
          <div className="nutri-card-label">What You Gain</div>
          <div className="nutri-card-title">Valuable Nutritional Payback</div>
          <p className="nutri-desc">A naturally balanced fatty acid profile that actively promotes better long-term immunity and overall well-being.</p>
          
          <ul className="nutri-list">
            <li className="nutri-list-item">Poly Unsaturated Fatty Acid <span className="nutri-val">PUFA</span></li>
            <li className="nutri-list-item">Mono Unsaturated Fatty Acid <span className="nutri-val">MUFA</span></li>
            <li className="nutri-list-item">Tocopherols & Tocotrienols <span className="nutri-val">500 MG</span></li>
            <li className="nutri-list-item">Energy <span className="nutri-val">900 KCL</span></li>
            <li className="nutri-list-item">Cholesterol <span className="nutri-val">0</span></li>
            <li className="nutri-list-item">Gamma Oryzanol <span className="nutri-val">1000 MG</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* COMPARATIVE STUDY (BORDERLESS UI) */}
  <section id="comparison">
    <div className="section-bg-art"></div>
    <div className="comparison-inner">
      <div className="advantage-header">
        <h2 className="section-title">Know Your Cooking Oil<br/><em>A Comparative Study</em></h2>
      </div>

      <div className="compare-table-wrapper">
        <Table className="compare-table">
          <TableHeader>
            <TableRow className="compare-header-row">
              <TableHead className="compare-th compare-feature-header">Features</TableHead>
              <TableHead className="compare-th compare-winner-header">
                <span className="compare-badge">Top Choice</span>
                Rice Bran Oil
              </TableHead>
              <TableHead className="compare-th">Palm Oil</TableHead>
              <TableHead className="compare-th">Soybean Oil</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Smoke Point</TableCell>
              <TableCell className="compare-winner-cell" data-label="Rice Bran Oil"><span className="compare-icon">✦</span> High (450°F / 232°C)</TableCell>
              <TableCell data-label="Palm Oil">Moderate</TableCell>
              <TableCell data-label="Soybean Oil">High</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Stability</TableCell>
              <TableCell className="compare-winner-cell" data-label="Rice Bran Oil"><span className="compare-icon">✦</span> High oxidative stability</TableCell>
              <TableCell data-label="Palm Oil">Moderate</TableCell>
              <TableCell data-label="Soybean Oil">Less stable</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Gamma Oryzanol</TableCell>
              <TableCell className="compare-winner-cell" data-label="Rice Bran Oil"><span className="compare-icon">✦</span> Abundant (up to 1000 MG)</TableCell>
              <TableCell data-label="Palm Oil">Zero</TableCell>
              <TableCell data-label="Soybean Oil">Zero</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Cholesterol Mgmt</TableCell>
              <TableCell className="compare-winner-cell" data-label="Rice Bran Oil"><span className="compare-icon">✦</span> Reduces LDL, maintains HDL</TableCell>
              <TableCell data-label="Palm Oil">Increases Bad LDL</TableCell>
              <TableCell data-label="Soybean Oil">Neutral Effect</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Fatty Acid Profile</TableCell>
              <TableCell className="compare-winner-cell" data-label="Rice Bran Oil"><span className="compare-icon">✦</span> Ideal balanced ratio</TableCell>
              <TableCell data-label="Palm Oil">High in saturated fats</TableCell>
              <TableCell data-label="Soybean Oil">High polyunsaturated fats</TableCell>
            </TableRow>
            <TableRow className="compare-body-row">
              <TableCell className="compare-feature-cell">Antioxidants</TableCell>
              <TableCell className="compare-winner-cell" data-label="Rice Bran Oil"><span className="compare-icon">✦</span> Rich (Oryzanol, Tocopherols)</TableCell>
              <TableCell data-label="Palm Oil">Low (Extensively refined)</TableCell>
              <TableCell data-label="Soybean Oil">Lacks unique composition</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div className="compare-source">Source: Food Science and Technology Department, AL-Azhar University | Centre for Food Safety | Dr. Lily SUEN, Scientific Officer</div>
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
              How is Jeevan Rekha Rice Bran Oil produced?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Jeevan Rekha Rice Bran Oil is extracted from the nutrient-dense inner husk of organically sourced paddy. Our state-of-the-art physical refining process removes impurities and free fatty acids naturally, without using any chemicals. This preserves the oil’s rich content of Gamma Oryzanol, vitamins, and natural antioxidants.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2" className="faq-accordion-item">
            <AccordionTrigger className="faq-accordion-trigger">
              What pack sizes are available?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              To serve both home kitchens and professional catering, we package Jeevan Rekha Rice Bran Oil in food-grade, airtight containers. It is available in 1-litre Lite Pouches, 1-litre Bottles, and 5-litre Tins, preserving the freshness and dietary properties of the oil from light and oxidation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3" className="faq-accordion-item">
            <AccordionTrigger className="faq-accordion-trigger">
              Where can consumers purchase it?
            </AccordionTrigger>
            <AccordionContent className="faq-accordion-content">
              Jeevan Rekha Rice Bran Oil operates on a direct-to-consumer model. You can purchase it directly from our official factory outlets, our website, or major e-commerce platforms like Amazon, Flipkart, and JioMart. We bypass retail distributors to ensure you receive fresh stock directly from the source.
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
            Crafting premium physically refined edible oils with scientific precision and uncompromising purity.
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
          <h4 className="footer-col-title">Purity Certified</h4>
          <p className="footer-info-text">
            100% physically refined under strict lab control. Direct delivery from factory to consumer for absolute freshness.
          </p>
        </div>
      </div>
    </div>

    <div className="footer-bottom-strip">
      <div className="footer-bottom-inner">
        <p className="footer-copy">&copy; <a href="https://abudyog.in/" target="_blank" rel="noopener noreferrer" className="ab-link">AB Udyog</a>. All rights reserved.</p>
        <div className="footer-tagline-center">“Purity. Health. Happiness.”</div>
      </div>
    </div>
  </footer>

  

      </div>
    </>
  );
}
