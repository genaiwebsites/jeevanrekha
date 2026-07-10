import Link from 'next/link';
import { Factory, Handshake, ShieldCheck, Microscope, Sprout, Package, Phone, Mail, MapPin, Sparkles, Droplet, Heart, Globe } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function About() {
  return (
    <section id="view-about" className="view-section active">
      {/* PAGE HERO */}
      <div className="hero vh-100">
        <div className="hero-bg"></div>
        <div className="hero-mesh"></div>

        <div className="hero-wrap grid-2">
          <div className="hero-left rv">
            <h1 className="h1">
              <span className="h1-a">Our Heritage.</span>
              <span className="h1-b">Our Standard.</span>
              <span className="h1-c">Our Promise.</span>
            </h1>
            <p className="h-desc">
              AB Udyog Pvt. Ltd. combines generations of agricultural trust with state-of-the-art refining. Discover our journey of pure purpose in Burdwan, West Bengal.
            </p>
            <div className="h-btns" style={{ display: 'flex', gap: '12px' }}>
              <Link href="/products" className="btn-y">Explore Our Oils →</Link>
              <Link href="#contact" className="btn-outline">Get in Touch</Link>
            </div>
          </div>

          <div className="hero-right rv" data-d="2" style={{ width: '100%', maxWidth: '520px', position: 'relative' }}>
            {/* Ambient background glow for visual depth */}
            <div className="s-glow" style={{ opacity: 0.4, width: '450px', height: '450px', pointerEvents: 'none' }}></div>
            
            <div className="refinery-spec-card">
              <div className="refinery-spec-img-wrap">
                <AspectRatio ratio={16/10}>
                  <img src="/factory1.webp" alt="Jeevan Rekha Burdwan Plant" loading="lazy" />
                </AspectRatio>
              </div>
              
              <div className="refinery-spec-grid">
                <div className="refinery-spec-cell">
                  <div className="refinery-spec-label">LOCATION</div>
                  <div className="refinery-spec-value">Burdwan</div>
                  <div className="refinery-spec-desc" style={{ position: 'relative', color: 'var(--y)' }}>
                    <span className="flex h-1.5 w-1.5" style={{ position: 'absolute', left: '-12px', top: '50%', transform: 'translateY(-50%)' }}>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--y)' }}></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: 'var(--y)' }}></span>
                    </span>
                    150 TPD active refinery
                  </div>
                </div>
                
                <div className="refinery-spec-cell">
                  <div className="refinery-spec-label">ESTABLISHED</div>
                  <div className="refinery-spec-value">2019</div>
                  <div className="refinery-spec-desc" style={{ color: 'var(--y)' }}>AB Udyog Pvt. Ltd.</div>
                </div>
                
                <div className="refinery-spec-cell">
                  <div className="refinery-spec-label">EXPERTISE</div>
                  <div className="refinery-spec-value">40+ Years</div>
                  <div className="refinery-spec-desc" style={{ color: 'var(--y)' }}>Rice bran pioneers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HISTORY SECTION */}
      <section className="history-section">
        <div className="wrap">
          <div className="history-intro" style={{ marginBottom: '56px', maxWidth: '800px' }}>
            <h2 className="s-h rv" data-d="1">Where We<br /><strong>Come From</strong></h2>
            <p className="body-t rv" data-d="2" style={{ marginTop: '20px', fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--g60)' }}>
              Jeevan Rekha is a brand of AB Udyog Pvt. Ltd., incorporated in February 2019, guided by our philosophy of Purity, Health, and Happiness. While young in incorporation, we bring over 40 years of deep industry experience through our team's extensive involvement in the Rice Bran sector across India.
            </p>
          </div>

          <div className="history-grid">
            <div className="history-left">
              <div className="history-timeline" style={{ marginTop: '0px' }}>
                <div className="tl-item rv">
                  <div className="tl-dot">80s</div>
                  <div className="tl-content">
                    <div className="tl-year">1980s–2010s</div>
                    <div className="tl-title">Four Decades of Rice Bran Expertise</div>
                    <p className="tl-desc">Our founding team spent 40+ years supplying rice bran and its derivatives to solvent extraction units nationwide, building an unmatched understanding of the industry's entire value chain.</p>
                  </div>
                </div>
                <div className="tl-item rv" data-d="1">
                  <div className="tl-dot" style={{ background: 'var(--y)', color: 'var(--pd)' }}>19</div>
                  <div className="tl-content">
                    <div className="tl-year">February 2019</div>
                    <div className="tl-title">AB Udyog Pvt. Ltd. Incorporated</div>
                    <p className="tl-desc">Guided by Purity. Health. Happiness., we incorporated AB Udyog Pvt. Ltd. with a vision to bring world-class edible oils to Indian households under a brand they could trust completely.</p>
                  </div>
                </div>
                <div className="tl-item rv" data-d="2">
                  <div className="tl-dot">JR</div>
                  <div className="tl-content">
                    <div className="tl-year">Brand Launch</div>
                    <div className="tl-title">Jeevan Rekha Foods is Born</div>
                    <p className="tl-desc">The Jeevan Rekha brand launched with our flagship Rice Bran Oil and Kacchi Ghani Mustard Oil, taking our expertise directly to consumers through transparent, quality-first packaging and distribution.</p>
                  </div>
                </div>
                <div className="tl-item rv" data-d="3">
                  <div className="tl-dot" style={{ background: 'var(--y)', color: 'var(--pd)' }}>Now</div>
                  <div className="tl-content">
                    <div className="tl-year">Present</div>
                    <div className="tl-title">Growing Across India</div>
                    <p className="tl-desc">Today Jeevan Rekha is one of the most trusted rice bran oil suppliers to the snack and namkeen industry, with distribution spanning multiple states and a growing family of products.</p>
                  </div>
                </div>
              </div>
            </div>            <div className="history-right" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="hist-card rv">
                <div className="hist-card-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div className="hist-card-icon" style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--pl)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Factory style={{ color: 'var(--p)', width: '22px', height: '22px' }} />
                  </div>
                  <div className="hist-card-num" style={{ textAlign: 'right', fontFamily: 'var(--fd)', fontWeight: 700, fontStyle: 'italic', fontSize: '1.8rem', color: 'var(--p)', lineHeight: 1 }}>
                    Burdwan<br />
                    <span style={{ fontSize: '0.85rem', color: 'var(--g60)', fontStyle: 'normal', fontWeight: 500 }}>West Bengal</span>
                  </div>
                </div>
                <h4 style={{ fontFamily: 'var(--fd)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--bk)', marginBottom: '8px' }}>Burdwan Processing Facility</h4>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--g60)', marginBottom: '20px' }}>
                  Our flagship facility in the Dighirkon area houses two world-class refining and extraction units operating under strict quality controls to deliver pure, premium edible oils.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ background: 'var(--g05)', border: '1px solid var(--g10)', borderRadius: '12px', padding: '14px' }}>
                    <div style={{ fontFamily: 'var(--fd)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--p)', fontStyle: 'italic', lineHeight: 1 }}>300 TPD</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--g60)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '6px', fontWeight: 600 }}>Solvent Extraction</div>
                  </div>
                  <div style={{ background: 'var(--g05)', border: '1px solid var(--g10)', borderRadius: '12px', padding: '14px' }}>
                    <div style={{ fontFamily: 'var(--fd)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--p)', fontStyle: 'italic', lineHeight: 1 }}>150 TPD</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--g60)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '6px', fontWeight: 600 }}>Physical Refinery</div>
                  </div>
                </div>
              </div>

              <div className="hist-card rv" data-d="1">
                <div className="hist-card-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div className="hist-card-icon" style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--pl)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Handshake style={{ color: 'var(--p)', width: '22px', height: '22px' }} />
                  </div>
                  <div className="hist-card-num" style={{ textAlign: 'right', fontFamily: 'var(--fd)', fontWeight: 700, fontStyle: 'italic', fontSize: '1.8rem', color: 'var(--p)', lineHeight: 1 }}>
                    Pan-India<br />
                    <span style={{ fontSize: '0.85rem', color: 'var(--g60)', fontStyle: 'normal', fontWeight: 500 }}>Supply Network</span>
                  </div>
                </div>
                <h4 style={{ fontFamily: 'var(--fd)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--bk)', marginBottom: '8px' }}>Industrial & Wholesale Supply</h4>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--g60)' }}>
                  We supply bulk edible oils and rice bran derivatives to snack manufacturers, food processing plants, and industrial buyers across the country, supported by efficient logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGACY SECTION */}
      <section className="legacy-section">
        <div className="wrap">
          <div className="legacy-grid">
            <div className="legacy-visual rv">
              <div className="legacy-main-card">
                <div className="lmc-top">
                  <div className="lmc-quote">"Our deep-rooted experience in the rice bran value chain has made us one of India's most <em>reliable suppliers</em> of rice bran and its derivatives."</div>
                  <div className="lmc-divider"></div>
                  <div className="lmc-stats">
                    <div className="lmc-stat">
                      <div className="lmc-stat-n">40+</div>
                      <div className="lmc-stat-l">Years in Industry</div>
                    </div>
                    <div className="lmc-stat">
                      <div className="lmc-stat-n">100%</div>
                      <div className="lmc-stat-l">Indigenous</div>
                    </div>
                    <div className="lmc-stat">
                      <div className="lmc-stat-n">∞</div>
                      <div className="lmc-stat-l">Trust, Always</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="legacy-float">
                <div className="lf-icon">🌾</div>
                <div className="lf-text">
                  <div className="lfn">Supplier of Choice</div>
                  <div className="lfl">Snack & Namkeen Industry</div>
                </div>
              </div>
            </div>

            <div className="legacy-content">
              <h2 className="s-h rv" data-d="1">A Trusted Name in<br />the <strong>Rice Bran</strong> <em>Industry</em></h2>
              <p className="body-t rv" data-d="2" style={{ marginTop: '20px' }}>
                Our deep-rooted experience in the rice bran value chain has enabled us to become one of the most reliable suppliers of rice bran and its derivatives in India. We supply to solvent extraction units nationwide and have built long-term relationships based on trust, quality, and our commitment to Purity. Health. Happiness.
              </p>
              <p className="body-t rv" data-d="3">
                We are proud to be one of the major suppliers of rice bran oil to the snack and namkeen industries across India. As a healthy and indigenous alternative to palm oil, rice bran oil is fast becoming the preferred choice for all food manufacturers who value quality and their customers' wellbeing.
              </p>
              <div className="supply-tags rv" data-d="3">
                <span className="supply-tag">Snack Industry</span>
                <span className="supply-tag">Namkeen Manufacturers</span>
                <span className="supply-tag">Food Processing Units</span>
                <span className="supply-tag">Solvent Extraction Units</span>
                <span className="supply-tag">Retail Distribution</span>
              </div>
              <div className="rv" data-d="4" style={{ background: 'var(--g05)', borderRadius: '24px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '14px', border: '1px solid var(--g10)' }}>
                <div style={{ color: 'var(--p)' }}><ShieldCheck style={{ width: '24px', height: '24px' }} /></div>
                <p className="body-t" style={{ fontSize: '0.82rem', lineHeight: '1.65' }}>
                  Each unit of Jeevan Rekha oil is <strong style={{ color: 'var(--bk)' }}>hygienically packed, tamper-proof sealed</strong>, and clearly labelled for full transparency, safety, and quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="phil-section">
        <div className="wrap">
          <div className="phil-banner rv">
            <div className="pb-left">
              <h2 className="headline" style={{ fontFamily: 'var(--fd)', fontWeight: 300, lineHeight: 1.1, color: 'var(--w)' }}>
                Purity. <b style={{ color: 'var(--y)' }}>Health.</b><br />Happiness.
              </h2>
            </div>
            <div className="pb-right">
              <div className="phil-trinity">
                <div className="pt-item">
                  <div className="pt-icon pt-purity">
                    <Droplet />
                  </div>
                  <div className="pt-text">
                    <h4>Purity</h4>
                    <p>Stripping away the artificial to embrace what's genuinely good. No additives. No compromise.</p>
                  </div>
                </div>
                <div className="pt-item">
                  <div className="pt-icon pt-health">
                    <Heart />
                  </div>
                  <div className="pt-text">
                    <h4>Health</h4>
                    <p>Vitality flowing through every cell. The energy to pursue what matters. Resilience for life's challenges.</p>
                  </div>
                </div>
                <div className="pt-item">
                  <div className="pt-icon pt-happiness">
                    <Sparkles />
                  </div>
                  <div className="pt-text">
                    <h4>Happiness</h4>
                    <p>Not the fleeting kind, but a deeper contentment that radiates from within when body and mind are nourished.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="commitment-section">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '48px' }}>
            <h2 className="s-h rv" data-d="1">How We Deliver on<br />Our <strong>Promise</strong> to India</h2>
          </div>
          <div className="commitment-grid">
            <div className="commitment-card cc-light rv" data-d="1">
              <div className="cc-icon cc-icon-bg"><Globe style={{ color: 'var(--p)' }} /></div>
              <h3>Atmanirbhar Bharat Commitment</h3>
              <p>We proudly support the vision of Atmanirbhar Bharat and the Make-in-India initiative. At AB Udyog, we believe in fully utilising local resources before considering imported alternatives, contributing to India's self-sufficiency and economic strength.</p>
              <div className="cc-tag cct-w">Make in India →</div>
            </div>
            <div className="commitment-card cc-light rv" data-d="2">
              <div className="cc-icon cc-icon-bg"><Microscope style={{ color: 'var(--p)' }} /></div>
              <h3>In-House Quality Assurance</h3>
              <p>We use the same rice bran oil in-house that we deliver to our customers. This genuine approach ensures authenticity and quality at every step; we stand behind every batch because we cook with it ourselves.</p>
              <div className="cc-tag cct-w">Zero Compromise →</div>
            </div>
            <div className="commitment-card cc-light rv" data-d="3">
              <div className="cc-icon cc-icon-bg"><Sprout style={{ color: 'var(--p)' }} /></div>
              <h3>Community & Farmer Welfare</h3>
              <p>We invest in the communities and rice farmers that make our products possible, creating sustainable livelihoods and building an agricultural ecosystem that benefits everyone in the value chain.</p>
              <div className="cc-tag cct-w">CSR Initiatives →</div>
            </div>
            <div className="commitment-card cc-light rv" data-d="4">
              <div className="cc-icon cc-icon-bg"><Package style={{ color: 'var(--p)' }} /></div>
              <h3>Transparent, Safe Packaging</h3>
              <p>Each unit of Jeevan Rekha oil is hygienically packed, tamper-proof sealed, and clearly labelled, ensuring full transparency, safety, and consistent quality from our plant in Burdwan to your kitchen across India.</p>
              <div className="cc-tag cct-w">Food Safety First →</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip" id="contact">
        <div className="cs-inner">
          <div className="cs-left rv">
            <h2>Let's Build Something<br /><strong>Together</strong></h2>
            <p>Whether you're a household, retailer, distributor, or food manufacturer, we'd love to hear from you. Reach out to discuss partnerships, bulk orders, or just to learn more about our oils.</p>
          </div>
          <div className="cs-right rv" data-d="2">
            <a href="tel:+917439289709" className="cs-contact-item">
              <div className="cs-ico"><Phone style={{ width: '18px', height: '18px', color: 'var(--pd)' }} /></div>
              <div className="cs-ctext">
                <span className="cn">+91 74392 89709</span>
                <span className="cv">Call us, Mon to Sat, 9am–6pm</span>
              </div>
            </a>
            <a href="mailto:info@abudyog.in" className="cs-contact-item">
              <div className="cs-ico"><Mail style={{ width: '18px', height: '18px', color: 'var(--pd)' }} /></div>
              <div className="cs-ctext">
                <span className="cn">info@abudyog.in</span>
                <span className="cv">We respond within 24 hours</span>
              </div>
            </a>
            <div className="cs-contact-item" style={{ cursor: 'default' }}>
              <div className="cs-ico"><MapPin style={{ width: '18px', height: '18px', color: 'var(--pd)' }} /></div>
              <div className="cs-ctext">
                <span className="cn">55/1B, Strand Road, Kolkata 700006</span>
                <span className="cv">Factory: Dighirkon, Burdwan 713427</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
