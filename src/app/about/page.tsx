import Link from 'next/link';
import { Factory, Handshake, ShieldCheck, Microscope, Sprout, Package, Phone, Mail, MapPin, Sparkles, Droplet, Heart, Globe } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from 'next/image';

import factoryEntryImg from '../../../public/factory-entry.webp';


const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AB Udyog Pvt. Ltd.',
  alternateName: 'Jeevan Rekha',
  url: 'https://jeevanrekhafoods.com',
  logo: 'https://jeevanrekhafoods.com/jeevan-rekha-logo.png',
  foundingDate: '1984',
  description: 'AB Udyog Pvt. Ltd. is a manufacturer of premium edible oils — Jeevan Rekha Rice Bran Oil, Kacchi Ghani Mustard Oil, and Soybean Oil — with 40+ years of expertise in West Bengal\'s edible oil industry.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Burdwan Industrial Area',
    addressLocality: 'Burdwan',
    addressRegion: 'West Bengal',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'info@abudyog.in',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Bengali'],
    },
  ],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 200,
  },
  knowsAbout: ['Rice Bran Oil', 'Mustard Oil', 'Edible Oil Refining', 'Solvent Extraction', 'NABL Certification'],
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
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
                  <Image
                    src={factoryEntryImg}
                    alt="Jeevan Rekha Burdwan Refinery Plant Entry"
                    className="object-cover w-full h-full"
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, 520px"
                    priority
                  />
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
              Jeevan Rekha is a brand of AB Udyog Pvt. Ltd., incorporated in February 2019, guided by our philosophy of Purity, Health, and Happiness. While young in incorporation, we bring over 40 years of deep industry experience through our team&apos;s extensive involvement in the Rice Bran sector across India.
            </p>
          </div>

          <div className="history-grid">
            <div className="history-left">
              <div className="history-timeline">
                <div className="tl-item rv">
                  <div className="tl-dot">80s</div>
                  <div className="tl-content">
                    <div className="tl-year">1980s–2010s</div>
                    <div className="tl-title">Four Decades of Rice Bran Expertise</div>
                    <p className="tl-desc">Our founding team spent 40+ years supplying rice bran and its derivatives to solvent extraction units nationwide, building an unmatched understanding of the industry&apos;s entire value chain.</p>
                  </div>
                </div>
                <div className="tl-item rv" data-d="1">
                  <div className="tl-dot" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}>
                    <Image src="/abu_logo.png" alt="AB Udyog Logo" width={32} height={32} style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="tl-content">
                    <div className="tl-year">February 2019</div>
                    <div className="tl-title">AB Udyog Pvt. Ltd. Incorporated</div>
                    <p className="tl-desc">Guided by Purity. Health. Happiness., we incorporated AB Udyog Pvt. Ltd. with a vision to bring world-class edible oils to Indian households under a brand they could trust completely.</p>
                  </div>
                </div>
                <div className="tl-item rv" data-d="2">
                  <div className="tl-dot" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
                    <Image src="/jeevan-rekha-logo-transparent.png" alt="Jeevan Rekha Logo" width={28} height={28} style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="tl-content">
                    <div className="tl-year">Brand Launch</div>
                    <div className="tl-title">Jeevan Rekha is Born</div>
                    <p className="tl-desc">The Jeevan Rekha brand launched with our flagship Rice Bran Oil and Kacchi Ghani Mustard Oil, taking our expertise directly to consumers through transparent, quality-first packaging and distribution.</p>
                  </div>
                </div>
                <div className="tl-item rv" data-d="3">
                  <div className="tl-dot tl-dot-y">Now</div>
                  <div className="tl-content">
                    <div className="tl-year">Present</div>
                    <div className="tl-title">Growing Across India</div>
                    <p className="tl-desc">Today Jeevan Rekha is one of the most trusted rice bran oil suppliers to the snack and namkeen industry, with distribution spanning multiple states and a growing family of products.</p>
                  </div>
                </div>
              </div>
            </div>            <div className="history-right">
              <div className="hist-card rv" style={{ margin: 0, padding: '40px' }}>
                
                {/* Burdwan Processing Section */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div className="hist-card-icon" style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--pl)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
                      <Factory style={{ color: 'var(--p)', width: '22px', height: '22px' }} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--fd)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--bk)', margin: 0 }}>Burdwan Processing Facility</h4>
                      <span style={{ fontSize: '0.8rem', color: 'var(--g60)', fontWeight: 500 }}>Burdwan, West Bengal</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--g60)', marginBottom: '20px' }}>
                    Our flagship facility houses two world-class refining and extraction units operating under strict quality controls to deliver pure, premium edible oils.
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

                {/* Separator Divider */}
                <div style={{ height: '1px', background: 'var(--g10)', margin: '36px 0' }}></div>

                {/* Industrial & Wholesale Supply Section */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div className="hist-card-icon" style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--pl)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
                      <Handshake style={{ color: 'var(--p)', width: '22px', height: '22px' }} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--fd)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--bk)', margin: 0 }}>Industrial & Wholesale Supply</h4>
                      <span style={{ fontSize: '0.8rem', color: 'var(--g60)', fontWeight: 500 }}>Pan-India Supply Network</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--g60)' }}>
                    We supply bulk edible oils and rice bran derivatives to snack manufacturers, food processing plants, and industrial buyers across the country, supported by efficient logistics.
                  </p>
                </div>

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
              <div className="snack-hub">
                {/* Orbit Path & Center */}
                <div className="sh-orbit-path"></div>
                
                <div className="sh-center">
                  <div className="sh-center-glow"></div>
                  <div className="sh-bottle-wrap">
                    <Image
                      src="/jr_rbo.png"
                      alt="Jeevan Rekha Rice Bran Oil"
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 600px) 160px, 160px"
                      priority
                    />
                  </div>
                </div>

                {/* Orbiting Items Wrapper */}
                <div className="sh-orbit-wrapper">

                  <div className="sh-item sh-item-top">
                    <div className="sh-circle">
                      <Image src="/snacks/rice-bran-oil-potato-chips.png" alt="Potato Chips" width={68} height={68} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="sh-label">
                      <span className="sh-label-name">Potato Chips</span>
                      <span className="sh-label-desc">High smoke point keeps chips golden-crisp with zero burnt aftertaste.</span>
                    </div>
                  </div>

                  <div className="sh-item sh-item-tr">
                    <div className="sh-circle">
                      <Image src="/snacks/rice-bran-oil-samosa.png" alt="Samosa" width={68} height={68} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="sh-label">
                      <span className="sh-label-name">Golden Samosa</span>
                      <span className="sh-label-desc">Lower oil absorption keeps pastry crust dry, flaky, and light.</span>
                    </div>
                  </div>

                  <div className="sh-item sh-item-right">
                    <div className="sh-circle">
                      <Image src="/snacks/rice-bran-oil-jalebi.png" alt="Sweet Jalebi" width={68} height={68} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="sh-label">
                      <span className="sh-label-name">Sweet Jalebi</span>
                      <span className="sh-label-desc">Fries evenly at high heat for light, hollow, syrup-filled coils.</span>
                    </div>
                  </div>

                  <div className="sh-item sh-item-br">
                    <div className="sh-circle">
                      <Image src="/snacks/rice-bran-oil-vada-pav.png" alt="Vada Pav" width={68} height={68} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="sh-label">
                      <span className="sh-label-name">Spicy Vada Pav</span>
                      <span className="sh-label-desc">Clean heat transfer for perfectly battered, crispy potato dumplings.</span>
                    </div>
                  </div>

                  <div className="sh-item sh-item-bottom">
                    <div className="sh-circle">
                      <Image src="/snacks/rice-bran-oil-indian-sweets.png" alt="Traditional Sweets" width={68} height={68} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="sh-label">
                      <span className="sh-label-name">Traditional Sweets</span>
                      <span className="sh-label-desc">Neutral taste preserves delicate aromatic milk solids and peda flavors.</span>
                    </div>
                  </div>

                  <div className="sh-item sh-item-bl">
                    <div className="sh-circle">
                      <Image src="/snacks/rice-bran-oil-biryani.png" alt="Clay Pot Biryani" width={68} height={68} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="sh-label">
                      <span className="sh-label-name">Clay Pot Biryani</span>
                      <span className="sh-label-desc">Light texture keeps long-grain rice separate, non-greasy, and aromatic.</span>
                    </div>
                  </div>

                  <div className="sh-item sh-item-left">
                    <div className="sh-circle">
                      <Image src="/snacks/rice-bran-oil-roasted-nuts.png" alt="Roasted Nuts" width={68} height={68} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="sh-label">
                      <span className="sh-label-name">Roasted Nuts</span>
                      <span className="sh-label-desc">Thin coating profile covers almonds and cashews evenly with no grease.</span>
                    </div>
                  </div>

                  <div className="sh-item sh-item-tl">
                    <div className="sh-circle">
                      <Image src="/snacks/rice-bran-oil-pani-puri.png" alt="Crisp Pani Puri" width={68} height={68} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="sh-label">
                      <span className="sh-label-name">Crisp Pani Puri</span>
                      <span className="sh-label-desc">Rapid expansion ensures thin, crisp, and perfectly hollow shells.</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="legacy-content">
              <h2 className="s-h rv" data-d="1">A Trusted Name in<br />the <strong>Rice Bran</strong> <em>Industry</em></h2>
              <p className="body-t rv" data-d="2" style={{ marginTop: '20px' }}>
                Our deep-rooted experience in the rice bran value chain has enabled us to become one of the most reliable suppliers of rice bran and its derivatives in India. We supply to solvent extraction units nationwide and have built long-term relationships based on trust, quality, and our commitment to Purity. Health. Happiness.
              </p>
              <p className="body-t rv" data-d="3">
                We are proud to be one of the major suppliers of rice bran oil to the snack and namkeen industries across India. As a healthy and indigenous alternative to palm oil, rice bran oil is fast becoming the preferred choice for all food manufacturers who value quality and their customers&apos; wellbeing.
              </p>
              <div className="supply-tags rv" data-d="3">
                <span className="supply-tag" style={{ background: 'var(--y)', color: 'var(--pd)', borderColor: 'var(--y)', fontWeight: 700 }}>🌾 Supplier of Choice</span>
                <span className="supply-tag">Snack & Namkeen Industry</span>
                <span className="supply-tag">Food Processing Units</span>
                <span className="supply-tag">Solvent Extraction Units</span>
                <span className="supply-tag">Retail Distribution</span>
              </div>
              <div className="rv" data-d="4" style={{ background: 'var(--g05)', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '14px', border: '1px solid var(--g10)' }}>
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
                    <p>Stripping away the artificial to embrace what&apos;s genuinely good. No additives. No compromise.</p>
                  </div>
                </div>
                <div className="pt-item">
                  <div className="pt-icon pt-health">
                    <Heart />
                  </div>
                  <div className="pt-text">
                    <h4>Health</h4>
                    <p>Vitality flowing through every cell. The energy to pursue what matters. Resilience for life&apos;s challenges.</p>
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
            <p className="body-t rv" data-d="2" style={{ marginTop: '16px', maxWidth: '700px', color: 'var(--g60)' }}>
              We strive to bring pure, healthy happiness to your kitchen without a high price—because quality should be accessible to all, enriching every meal with state-of-the-art technology without any compromise for West Bengal and beyond.
            </p>
          </div>
          <div className="commitment-grid">
            <div className="commitment-card rv" data-d="1">
              <div className="cc-icon"><Globe style={{ color: 'var(--p)', width: '22px', height: '22px' }} /></div>
              <div>
                <h3>Atmanirbhar Sourcing</h3>
                <p>We prioritize sourcing raw materials from local Indian farmers and suppliers, supporting regional agricultural communities and contributing to domestic self-sufficiency.</p>
              </div>
            </div>
            <div className="commitment-card rv" data-d="2">
              <div className="cc-icon"><Microscope style={{ color: 'var(--p)', width: '22px', height: '22px' }} /></div>
              <div>
                <h3>In-House Quality Control</h3>
                <p>We use the same edible oils in our own kitchens that we package for our customers. This direct quality assurance ensures every batch meets our strict standards of purity.</p>
              </div>
            </div>
            <div className="commitment-card rv" data-d="3">
              <div className="cc-icon"><Sprout style={{ color: 'var(--p)', width: '22px', height: '22px' }} /></div>
              <div>
                <h3>Community & Farmer Welfare</h3>
                <p>We work closely with local farming communities in West Bengal, helping sustain reliable agricultural practices and providing fair value for their harvests.</p>
              </div>
            </div>
            <div className="commitment-card rv" data-d="4">
              <div className="cc-icon"><Package style={{ color: 'var(--p)', width: '22px', height: '22px' }} /></div>
              <div>
                <h3>Transparent, Safe Packaging</h3>
                <p>Our packaging process uses tamper-proof seals and clear labeling. Every bottle and container traces back to our Burdwan plant for full safety assurance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip" id="contact">
        <div className="cs-inner">
          <div className="cs-left rv">
            <h2>Let&apos;s Build Something<br /><strong>Together</strong></h2>
            <p>Whether you&apos;re a household, retailer, distributor, or food manufacturer, we&apos;d love to hear from you. Reach out to discuss partnerships, bulk orders, or just to learn more about our oils.</p>
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
                <span className="cn">55/1B, Strand Road, 3rd Floor, Room No. 05, Kolkata - 700006</span>
                <span className="cv">Factory: Dighirkon, Bamunia Road, Uchallan, Burdwan - 713427</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
    </>
  );
}

