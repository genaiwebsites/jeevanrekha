"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedCounter from '@/components/AnimatedCounter';

import showcaseImg from '../../public/jr_products_showcase_transparent.png';
import kgmoImg from '../../public/jr_kgmo.png';
import rboImg from '../../public/jr_rbo.png';
import sboImg from '../../public/jr_sbo.png';

const row1Reviews = [
  {
    name: "Subhashis Mukherjee",
    loc: "Salt Lake City, Kolkata",
    txt: "Switched to Jeevan Rekha Rice Bran Oil on my cardiologist's advice. My LDL has dropped noticeably and the food tastes so much lighter.",
    initials: "SM",
    avClass: "av-p"
  },
  {
    name: "Chef Bikramjit Dey",
    loc: "Owner, 'The Golden Wok', Siliguri",
    txt: "We use Jeevan Rekha Soyabean Oil for all our Indo-Chinese stir-fries. It doesn't break down at high flame, holds taste perfectly, and is incredibly cost-effective.",
    initials: "BD",
    avClass: "av-y"
  },
  {
    name: "Rakesh Sharma",
    loc: "Catering Manager, Utsav Banquets, Dhanbad",
    txt: "For our large wedding caterings, Jeevan Rekha Rice Bran Oil is our top choice. The low absorption rate means our pooris and pakoras stay crisp without being greasy.",
    initials: "RS",
    avClass: "av-g"
  },
  {
    name: "Rina Biswas",
    loc: "Ballygunge, Kolkata",
    txt: "The Kacchi Ghani Mustard Oil is extraordinary, with that authentic pungency and deep golden colour making our machher jhol taste just like grandmother's recipe.",
    initials: "RB",
    avClass: "av-y"
  },
  {
    name: "Chef Sneha Maitra",
    loc: "Cloud Kitchen Operator, Guwahati",
    txt: "Using Jeevan Rekha Kacchi Ghani Mustard oil in our cloud kitchen has elevated our traditional Assamese and Bengali dishes. Customers love the strong aroma.",
    initials: "SM",
    avClass: "av-p"
  }
];

const row2Reviews = [
  {
    name: "Animesh Chatterjee",
    loc: "Tollygunge, Kolkata",
    txt: "I run a catering business and switched to Jeevan Rekha bulk packs. The high smoke point means less oil absorption in fried dishes. My clients notice the difference.",
    initials: "AC",
    avClass: "av-g"
  },
  {
    name: "Gurpreet Singh",
    loc: "Owner, Sher-e-Punjab Dhaba, Asansol",
    txt: "For our tandoori marinades and daily curries, we trust only Jeevan Rekha Mustard Oil. Purity is 100%, and the pungency is just right for authentic taste.",
    initials: "GS",
    avClass: "av-p"
  },
  {
    name: "Mrs. Moushumi Sen",
    loc: "Home Baker & Café Owner, Ranchi",
    txt: "Jeevan Rekha Soyabean Oil is so neutral and light. I use it for baking tea cakes and making mayonnaise from scratch. It blends beautifully without any heavy aftertaste.",
    initials: "MS",
    avClass: "av-y"
  },
  {
    name: "Rajesh Patel",
    loc: "F&B Director, Royal Palace Hotel, Durgapur",
    txt: "Switched our entire kitchen operations to Jeevan Rekha Rice Bran Oil 6 months ago. The consistency across batches is excellent, and it saves us oil consumption.",
    initials: "RP",
    avClass: "av-g"
  },
  {
    name: "Tenzing Norbu",
    loc: "Chef, Himalaya Cafe, Gangtok",
    txt: "Our momo fry and chowmein require a very neutral, high smoke point oil. Jeevan Rekha Soyabean Oil works perfectly. Extremely light on the stomach!",
    initials: "TN",
    avClass: "av-p"
  }
];

export default function Home() {
  const bgRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isDesktop = window.innerWidth > 768;
    
    const handleResize = () => {
      isDesktop = window.innerWidth > 768;
      if (!isDesktop) {
        if (bgRef.current) bgRef.current.style.transform = '';
        if (copyRef.current) {
          copyRef.current.style.transform = '';
          copyRef.current.style.opacity = '';
        }
        if (meshRef.current) {
          meshRef.current.style.transform = '';
          meshRef.current.style.opacity = '';
        }
      }
    };
    
    let ticking = false;
    const handleScroll = () => {
      if (!isDesktop) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          
          if (scrollY < viewportHeight) {
            // Background mesh: moves slow, grows slightly, fades out
            if (meshRef.current) {
              meshRef.current.style.transform = `translateY(${scrollY * 0.12}px) scale(${1 + scrollY * 0.0001})`;
              meshRef.current.style.opacity = String(Math.max(0, 1 - scrollY / (viewportHeight * 0.8)));
            }
            // Product image: translates slower to appear physically deeper in the background
            if (bgRef.current) {
              bgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
            }
            // Copy text: floats up faster to overlap the depth layer, fading away gracefully
            if (copyRef.current) {
              copyRef.current.style.transform = `translateY(${scrollY * 0.42}px)`;
              copyRef.current.style.opacity = String(Math.max(0, 1 - scrollY / (viewportHeight * 0.65)));
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="view-home" className="view-section active">
      <div className="hero home-hero">
        <div className="hero-bg"></div>
        <div className="hero-mesh home-hero-mesh" ref={meshRef}></div>
        {/* Desktop: absolutely positioned background div — hidden on mobile via CSS */}
        <div className="home-hero-img home-hero-img-bg" aria-hidden="true" ref={bgRef}>
          <Image
            src={showcaseImg}
            alt="Jeevan Rekha product range"
            priority
            className="pointer-events-none"
            style={{ width: '100%', height: 'auto', position: 'absolute', bottom: 0, left: 0 }}
            sizes="(max-width: 768px) 1px, 100vw"
          />
        </div>
        {/* Copy block: text + buttons */}
        <div className="hero-wrap home-hero-copy rv" ref={copyRef}>
          <h1 className="h1">
            Pure Choice. <em>Healthy Life.</em> Happy Home.
          </h1>
          <p className="h-desc">
            Premium edible oils crafted with 40+ years of rice bran expertise.
          </p>
          <div className="h-btns">
            <Link href="/products" className="btn-y">Explore Range</Link>
            <Link href="/about" className="btn-outline">Our Story</Link>
          </div>
        </div>
        {/* Mobile only: inline product image — sits below copy as flex sibling, fills remaining height */}
        <Image
          src={showcaseImg}
          alt="Jeevan Rekha product range"
          priority
          className="home-hero-img-mobile"
          sizes="(max-width: 768px) 100vw, 1px"
        />
      </div>



      {/* Why Choose */}
      <section className="why">
        <div className="wrap">
          <div className="why-top">
            <div>
              <h2 className="s-h rv" data-d="1">Built on <em>Science</em>,<br/>Trusted by <strong>India</strong></h2>
            </div>
            <p className="body-t rv" data-d="2">Four decades of industry knowledge meet state-of-the-art technology at our Burdwan plant, delivering oils as nutritious as they are delicious, batch after batch.</p>
          </div>
          <div className="why-grid bento-why-grid">
            {/* Tile 1: Manufacturing (2 cols on desktop) */}
            <div className="wcard rv wcard-2col">
              <div className="wc-ico"><svg viewBox="0 0 28 28"><path d="M14 2C7.4 2 2 7.4 2 14s5.4 12 12 12 12-5.4 12-12S20.6 2 14 2zm-1 5h2v7l5 3-1 1.8-6-3.5V7z"/></svg></div>
              <h3>State-of-Art Manufacturing</h3>
              <p>Our Burdwan facility houses a 300 TPD Solvent Extraction Plant and 150 TPD Physical Refinery, operating to the highest hygiene and quality standards.</p>
            </div>
            
            {/* Tile 2: 40+ Years Stat (1 col on desktop) */}
            <div className="wcard rv wcard-stat">
              <div className="hs-num">
                <AnimatedCounter target={40} suffix="+" />
              </div>
              <div className="hs-label">Years of Expertise</div>
              <p className="wcard-stat-desc">Four decades of trusted presence in India's edible oil value chain.</p>
            </div>

            {/* Tile 3: Capacity Stat (1 col on desktop) */}
            <div className="wcard rv wcard-stat" data-d="1">
              <div className="hs-num">
                <AnimatedCounter target={150} suffix=" TPD" />
              </div>
              <div className="hs-label">Refinery Capacity</div>
              <p className="wcard-stat-desc">Ensuring a steady, reliable supply of physically refined oil.</p>
            </div>

            {/* Tile 4: Sourcing (1 col on desktop) */}
            <div className="wcard rv" data-d="2">
              <div className="wc-ico"><svg viewBox="0 0 28 28"><path d="M12 2L3 7v5c0 5.6 3.8 10.9 9 12.3C17.2 22.9 21 17.6 21 12V7L12 2zm0 3.2L19 8.7V12c0 4.4-3 8.5-7 9.9-4-1.4-7-5.5-7-9.9V8.7L12 5.2z"/></svg></div>
              <h3>Authentic Sourcing</h3>
              <p>With 40+ years in the value chain, we partner directly with trusted suppliers across India; these relationships are built on quality and transparency.</p>
            </div>

            {/* Tile 5: Atmanirbhar (1 col on desktop) */}
            <div className="wcard rv" data-d="3">
              <div className="wc-ico"><svg viewBox="0 0 28 28"><path d="M14 2C7.4 2 2 7.4 2 14s5.4 12 12 12 12-5.4 12-12S20.6 2 14 2zm4.3 8.7L14 18.6l-4.3-4.3 1.4-1.4 2.9 2.9 2.9-5.8 1.8.9-.4.8z"/></svg></div>
              <h3>Atmanirbhar Bharat</h3>
              <p>Supporting Make-in-India with NABL-accredited labs and an active network of over 500+ retail partners nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE PRODUCTS SHOWCASE */}
      <section className="prods-home">
        <div className="phd-top">
          <h2 className="phd-title rv">Three Oils. <em>One Standard</em> of Excellence.</h2>
        </div>

        <div className="pgrid-home">
          {/* Mustard */}
          <Link href="/products#p-mustard" className="pcard-home rv">
            <div className="pch-bg bg-m"></div>
            <div className="particles"><div className="p-dot"></div><div className="p-dot"></div><div className="p-dot"></div></div>
            <div className="pch-img-wrap">
              <Image
                src={kgmoImg}
                alt="Mustard Oil"
                className="pch-btl-img"
                sizes="(max-width: 768px) 100vw, 340px"
              />
            </div>
            <div className="pch-body">
              <div className="pch-badge b-mustard">Traditional</div>
              <h3 className="pch-title">Kacchi Ghani Mustard Oil</h3>
              <p className="pch-desc">Naturally pungent, rich in allyl isothiocyanate and monounsaturated fats. The authentic soul of Indian cooking.</p>
              <div className="pch-link" style={{ color: 'var(--y)' }}>Explore Product <span className="pch-arrow">→</span></div>
            </div>
          </Link>
          {/* Rice Bran */}
          <Link href="/products#p-rice" className="pcard-home rv" data-d="1">
            <div className="pch-bg bg-r"></div>
            <div className="particles"><div className="p-dot"></div><div className="p-dot"></div><div className="p-dot"></div></div>
            <div className="pch-img-wrap">
              <Image
                src={rboImg}
                alt="Rice Bran Oil"
                className="pch-btl-img"
                sizes="(max-width: 768px) 100vw, 340px"
              />
            </div>
            <div className="pch-body">
              <div className="pch-badge b-rice">Heart Healthy</div>
              <h3 className="pch-title">Rice Bran Oil</h3>
              <p className="pch-desc">Physically refined, Vitamin E and Gamma-Oryzanol rich. Ideal for high-heat Indian cooking without compromise.</p>
              <div className="pch-link" style={{ color: 'var(--r-plumlt)' }}>Explore Product <span className="pch-arrow">→</span></div>
            </div>
          </Link>
          {/* Soyabean */}
          <Link href="/products#p-soy" className="pcard-home rv" data-d="2">
            <div className="pch-bg bg-s"></div>
            <div className="particles"><div className="p-dot"></div><div className="p-dot"></div><div className="p-dot"></div></div>
            <div className="pch-img-wrap">
              <Image
                src={sboImg}
                alt="Soyabean Oil"
                className="pch-btl-img"
                sizes="(max-width: 768px) 100vw, 340px"
              />
            </div>
            <div className="pch-body">
              <div className="pch-badge b-soy">All Purpose</div>
              <h3 className="pch-title">Soyabean Oil</h3>
              <p className="pch-desc">Neutral-flavoured, packed with Omega-3 fatty acids. Perfect for baking, dressings, and everyday light cooking.</p>
              <div className="pch-link" style={{ color: 'var(--s-jadelt)' }}>Explore Product <span className="pch-arrow">→</span></div>
            </div>
          </Link>
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
                <span className="p-qmark">&quot;</span>
                <div className="p-quote">Purity. Health. Happiness.<br/><em>Each flows into the next</em><br/>in an unbroken circle.</div>
                <div className="p-sig">The Jeevan Rekha Promise</div>
              </div>
            </div>
            <div className="rv sr">
              <h2 className="s-h" style={{ marginBottom: '26px' }}>When you choose <em>pure</em>,<br/>you choose <strong>life itself</strong></h2>
              <p className="body-t" style={{ marginBottom: '20px' }}>When we strip away the artificial and embrace what&apos;s genuine, our lives transform. A pure existence creates the foundation for true health that no medicine can replicate.</p>
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

              <h2 className="s-h rv light" data-d="1">Every Drop,<br/><em>a Dose of</em> <span style={{ color: 'var(--y)' }}>Vitality</span></h2>
            </div>
            <p className="body-t light rv" data-d="2">Jeevan Rekha oils are crafted to nourish your body while delivering authentic Indian taste. Each oil carries a precise balance of flavour, nutrition, and high-heat performance.</p>
          </div>
          <div className="ben-grid">
            <div className="bcard rv">
              <div className="b-ico"><svg viewBox="0 0 28 28"><path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3zm-1 15.6l-4.2-4.2 1.4-1.4 2.8 2.8 5.8-5.8 1.4 1.4L13 18.6z"/></svg></div>
              <h4>Heart Protection</h4>
              <p>Balanced Omega-3, 6 &amp; 9 fatty acids. Rice Bran Oil&apos;s Gamma-Oryzanol actively reduces LDL cholesterol.</p>
              <span className="b-tag">Rice Bran Oil</span>
            </div>
            <div className="bcard rv" data-d="1">
              <div className="b-ico"><svg viewBox="0 0 28 28"><path d="M14 2L4 7v7c0 6.5 4.3 12.6 10 14 5.7-1.4 10-7.5 10-14V7L14 2zm0 3.5L21.5 8V14c0 5-3.2 9.7-8 11.2-4.8-1.5-8-6.2-8-11.2V8l8-4.5z"/></svg></div>
              <h4>Antioxidant Power</h4>
              <p>Vitamin E tocopherols and Gamma-Oryzanol neutralise free radicals, protecting cells from oxidative stress.</p>
              <span className="b-tag">All Oils</span>
            </div>
            <div className="bcard rv" data-d="2">
              <div className="b-ico"><svg viewBox="0 0 28 28"><path d="M14 2C7.4 2 2 7.4 2 14s5.4 12 12 12 12-5.4 12-12S20.6 2 14 2zm1 6v6.6l4.5 2.7-1.1 1.7-5.4-3.3V8h2z"/></svg></div>
              <h4>232°C Smoke Point</h4>
              <p>Remarkable smoke point enables safe, high-heat frying. Less oil breakdown, more nutrition retained.</p>
              <span className="b-tag">Rice Bran Oil</span>
            </div>
            <div className="bcard rv" data-d="3">
              <div className="b-ico"><svg viewBox="0 0 28 28"><path d="M14 3C9 3 5 7 5 12c0 6.5 9 15 9 15s9-8.5 9-15c0-5-4-9-9-9zm0 12a3 3 0 110-6 3 3 0 010 6z"/></svg></div>
              <h4>Anti-inflammatory</h4>
              <p>Mustard Oil&apos;s allyl isothiocyanate and Omega-3 fatty acids provide powerful benefits for joints and gut.</p>
              <span className="b-tag">Mustard Oil</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certs */}
      <div className="certs">
        <div className="certs-row">
          <div className="cert rv">
            <div className="cert-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px', stroke: 'var(--y)' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className="cert-t">
              <strong>FSSAI Certified</strong>
              <span>Central License Compliance</span>
            </div>
          </div>
          
          <div className="cert rv" data-d="1">
            <div className="cert-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px', stroke: 'var(--y)' }}>
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className="cert-t">
              <strong>HACCP Certified</strong>
              <span>Global Food Safety Standards</span>
            </div>
          </div>
          
          <div className="cert rv" data-d="2">
            <div className="cert-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px', stroke: 'var(--y)' }}>
                <circle cx="12" cy="8" r="7"/>
                <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>
              </svg>
            </div>
            <div className="cert-t">
              <strong>ISO 9001:2015</strong>
              <span>Quality Management Systems</span>
            </div>
          </div>
          
          <div className="cert rv" data-d="3">
            <div className="cert-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px', stroke: 'var(--y)' }}>
                <path d="M2 20h20"/>
                <path d="M5 17V8l4 4V8l4 4V8l6 5v4H5z"/>
              </svg>
            </div>
            <div className="cert-t">
              <strong>Make in India</strong>
              <span>Domestic Economic Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="testi">
        <div className="wrap">
          <div className="testi-hd">
            <h2 className="s-h rv" data-d="1">Trusted by <em>Thousands</em><br/>Across <strong>India</strong></h2>
          </div>
        </div>
        
        <div className="testi-marquee-wrap">
          {/* Row 1: Flowing Left */}
          <div className="marquee-container">
            <div className="marquee-track-l">
              {row1Reviews.map((rev, i) => (
                <div key={`r1-${i}`} className="tc">
                  <p className="t-txt"><span className="t-qm">&quot;</span> {rev.txt}</p>
                  <div className="t-auth">
                    <div className={`t-av ${rev.avClass}`}>{rev.initials}</div>
                    <div>
                      <div className="t-name">{rev.name}</div>
                      <div className="t-loc">{rev.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
              {row1Reviews.map((rev, i) => (
                <div key={`r1-dup-${i}`} className="tc" aria-hidden="true">
                  <p className="t-txt"><span className="t-qm">&quot;</span> {rev.txt}</p>
                  <div className="t-auth">
                    <div className={`t-av ${rev.avClass}`}>{rev.initials}</div>
                    <div>
                      <div className="t-name">{rev.name}</div>
                      <div className="t-loc">{rev.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Flowing Right */}
          <div className="marquee-container" style={{ marginTop: '24px' }}>
            <div className="marquee-track-r">
              {row2Reviews.map((rev, i) => (
                <div key={`r2-${i}`} className="tc">
                  <p className="t-txt"><span className="t-qm">&quot;</span> {rev.txt}</p>
                  <div className="t-auth">
                    <div className={`t-av ${rev.avClass}`}>{rev.initials}</div>
                    <div>
                      <div className="t-name">{rev.name}</div>
                      <div className="t-loc">{rev.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
              {row2Reviews.map((rev, i) => (
                <div key={`r2-dup-${i}`} className="tc" aria-hidden="true">
                  <p className="t-txt"><span className="t-qm">&quot;</span> {rev.txt}</p>
                  <div className="t-auth">
                    <div className={`t-av ${rev.avClass}`}>{rev.initials}</div>
                    <div>
                      <div className="t-name">{rev.name}</div>
                      <div className="t-loc">{rev.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="cta-strip cta-yellow">
        <div className="cta-inner">
          <div className="rv sl">
            <h2 className="s-h">Ready to Cook<br/>the <em>Jeevan Rekha Way?</em></h2>
            <p className="body-t" style={{ marginTop: '16px' }}>Join thousands of Indian families who&apos;ve made the switch to purer, healthier cooking.</p>
          </div>
          <div className="cta-btn-group rv sr">
            <Link href="/contact" className="btn-p">Enquire Now</Link>
            <Link href="/products" className="btn-outline dark">View Products</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
