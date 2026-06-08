"use client";

import { useState, useEffect } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [selectedEnquiry, setSelectedEnquiry] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Entrance animations and scroll parallax
  useEffect(() => {
    // GSAP timeline for page hero entrance
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('#phH1', { y: 60, opacity: 0, duration: 1.1 }, 0.3)
        .from('#phLead', { y: 28, opacity: 0, duration: 0.9 }, 0.54);
    });

    // Parallax scroll event for ph-grid
    const handleScroll = () => {
      const g = document.querySelector('.ph-grid') as HTMLElement;
      if (g) {
        g.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newErrors: Record<string, boolean> = {};
    let hasError = false;

    // Validate radio (enquiry type)
    if (!selectedEnquiry) {
      newErrors.enquiry = true;
      hasError = true;
    }

    // Validate fields
    const fname = formData.get('fname') as string;
    if (!fname?.trim()) {
      newErrors.fname = true;
      hasError = true;
    }

    const email = formData.get('email') as string;
    if (!email?.trim()) {
      newErrors.email = true;
      hasError = true;
    }

    const message = formData.get('message') as string;
    if (!message?.trim()) {
      newErrors.message = true;
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('sending');

    // Simulate sending form submission
    setTimeout(() => {
      setStatus('success');
      form.reset();
      setSelectedEnquiry('');

      // Scroll to the card containing the form
      const card = document.getElementById('formCard');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 1800);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="view-contact" className="view-section active">
      {/* ══ PAGE HERO ══ */}
      <div className="page-hero" id="phero">
        <div className="ph-mesh"></div>
        <div className="ph-grid"></div>
        <div className="ph-orb orb-a"></div>
        <div className="ph-orb orb-b"></div>

        {/* Decorative SVG — communication lines */}
        <svg 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', opacity: 0.12 }} 
          viewBox="0 0 1440 520" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lineG1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FEDC06" stopOpacity="0" />
              <stop offset="50%" stopColor="#FEDC06" stopOpacity="1" />
              <stop offset="100%" stopColor="#FEDC06" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineG2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A898D4" stopOpacity="0" />
              <stop offset="50%" stopColor="#A898D4" stopOpacity="1" />
              <stop offset="100%" stopColor="#A898D4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="120" x2="1440" y2="120" stroke="url(#lineG2)" strokeWidth="1" />
          <line x1="0" y1="240" x2="1440" y2="240" stroke="url(#lineG1)" strokeWidth="1" />
          <line x1="0" y1="380" x2="1440" y2="380" stroke="url(#lineG2)" strokeWidth="0.7" />
          <circle cx="200" cy="120" r="3" fill="#FEDC06" opacity="0.8" />
          <circle cx="600" cy="240" r="3" fill="#A898D4" opacity="0.8" />
          <circle cx="1000" cy="120" r="2.5" fill="#FEDC06" opacity="0.6" />
          <circle cx="1200" cy="380" r="3" fill="#A898D4" opacity="0.7" />
          <circle cx="400" cy="380" r="2" fill="#FEDC06" opacity="0.5" />
          <line x1="200" y1="120" x2="600" y2="240" stroke="rgba(168,152,212,0.3)" strokeWidth="0.8" strokeDasharray="4 8" />
          <line x1="600" y1="240" x2="1000" y2="120" stroke="rgba(254,220,6,0.25)" strokeWidth="0.8" strokeDasharray="4 8" />
          <line x1="1000" y1="120" x2="1200" y2="380" stroke="rgba(168,152,212,0.25)" strokeWidth="0.8" strokeDasharray="4 8" />
          <line x1="400" y1="380" x2="600" y2="240" stroke="rgba(254,220,6,0.2)" strokeWidth="0.8" strokeDasharray="4 8" />
        </svg>

        <div className="ph-inner" id="phInner">
          <h1 className="ph-h1" id="phH1">
            <strong>Let&apos;s Start a</strong><br />
            <em>Conversation</em>
          </h1>
          <p className="ph-lead" id="phLead">
            Whether you&apos;re a household cook, a distributor, or a food manufacturer — <strong>we&apos;re here</strong>. Reach out for retail enquiries, bulk orders, trade partnerships, or simply to learn more about our oils.
          </p>
        </div>
        <div className="ph-accent"></div>
      </div>

      {/* ══ QUICK CONTACT STRIP ══ */}
      <div className="qc-strip">
        <div className="qc-inner">
          <a href="tel:+917439289709" className="qc-item rv">
            <div className="qc-ico ico-p">
              <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </div>
            <div>
              <div className="qc-label">Phone</div>
              <div className="qc-value">+91 74392 89709</div>
              <div className="qc-sub">Mon–Sat · 9am–6pm</div>
            </div>
          </a>
          <a href="mailto:info@abudyog.in" className="qc-item rv" data-d="1">
            <div className="qc-ico ico-m">
              <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div>
              <div className="qc-label">Email</div>
              <div className="qc-value">info@abudyog.in</div>
              <div className="qc-sub">Response within 24 hrs</div>
            </div>
          </a>
          <a href="https://web.whatsapp.com/send?phone=+917439289709" target="_blank" rel="noopener noreferrer" className="qc-item rv" data-d="2">
            <div className="qc-ico ico-w">
              <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.4.3-.6.1-.2 0-.4 0-.5-.1-.2-.7-1.6-1-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.5.2-1 .1-1.2-.1-.2-.3-.2-.5-.3z" />
                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5-1.4c1.5.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.2-.5-4.5-1.3l-.3-.2-3 .8.8-2.9-.2-.3C3.7 15.1 3 13.6 3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9z" />
              </svg>
            </div>
            <div>
              <div className="qc-label">WhatsApp</div>
              <div className="qc-value">Chat with Us</div>
              <div className="qc-sub">Quick responses</div>
            </div>
          </a>
          <div className="qc-item rv" data-d="3">
            <div className="qc-ico ico-l">
              <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
              </svg>
            </div>
            <div>
              <div className="qc-label">Head Office</div>
              <div className="qc-value">Strand Road, Kolkata</div>
              <div className="qc-sub">700006, West Bengal</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ MAIN CONTACT SECTION ══ */}
      <section className="contact-main">
        <div className="cm-header">
          <div className="section-label rv">
            <div className="sl-bar"></div>
            <span className="sl-text">Get in Touch</span>
          </div>
          <h2 className="ci-heading rv" data-d="1">
            We&apos;re Always <em>Here</em> to <strong>Help You</strong>
          </h2>
          <p className="ci-desc rv" data-d="2">
            From your first enquiry to long-term partnership — our team responds promptly and personally. We supply to households, retailers, distributors and food manufacturers across India.
          </p>
        </div>
        <div className="cm-inner">
          {/* LEFT: Info panel */}
          <div className="ci-left">
            {/* Office Locations & Business Hours */}
            <div className="rv ci-left-stack-wrapper" data-d="3">
              <div className="office-stack">
                {/* Office Card with styled SVG Map */}
                <div className="office-card-map">
                  <div className="office-map">
                    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 480 180" preserveAspectRatio="xMidYMid slice" fill="none">
                      <line x1="0" y1="60" x2="480" y2="60" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                      <line x1="0" y1="120" x2="480" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                      <line x1="80" y1="0" x2="80" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                      <line x1="200" y1="0" x2="200" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                      <line x1="320" y1="0" x2="320" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                      <line x1="400" y1="0" x2="400" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                      <path d="M0 90 Q60 70 120 95 Q180 120 240 95 Q300 70 360 95 Q420 120 480 95" stroke="rgba(255,255,255,0.15)" strokeWidth="12" fill="none" />
                      <rect x="88" y="68" width="40" height="28" rx="3" fill="rgba(255,255,255,0.06)" />
                      <rect x="140" y="70" width="28" height="22" rx="3" fill="rgba(255,255,255,0.06)" />
                      <rect x="208" y="66" width="50" height="32" rx="3" fill="rgba(255,255,255,0.06)" />
                      <rect x="330" y="70" width="38" height="26" rx="3" fill="rgba(255,255,255,0.06)" />
                      <text x="240" y="55" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">STRAND ROAD</text>
                    </svg>
                    <div className="map-chip mc-1">Kolkata 700006</div>
                    <div className="map-chip mc-2">West Bengal, India</div>
                    <div className="map-pin">
                      <div className="map-pin-head"></div>
                      <div className="map-pin-tail"></div>
                    </div>
                  </div>
                  <div className="office-body">
                    <div className="office-title">Corporate Head Office</div>
                    <div className="office-rows">
                      <div className="office-row">
                        <div className="or-dot">
                          <svg viewBox="0 0 14 14" fill="none"><path d="M7 1.5C4.515 1.5 2.5 3.515 2.5 6C2.5 9 7 12.5 7 12.5C7 12.5 11.5 9 11.5 6C11.5 3.515 9.485 1.5 7 1.5Z" stroke="#4B2685" strokeWidth="1.4" /><circle cx="7" cy="6" r="1.5" stroke="#4B2685" strokeWidth="1.2" /></svg>
                        </div>
                        <div>
                          <div className="or-label">Address</div>
                          <div className="or-val">55/1B, Strand Road, 3rd Floor, Room 05<br />Kolkata – 700006, West Bengal</div>
                        </div>
                      </div>
                      <div className="office-row">
                        <div className="or-dot">
                          <svg viewBox="0 0 14 14" fill="none"><rect x="2" y="3" width="10" height="8" rx="1" stroke="#4B2685" strokeWidth="1.4" /><path d="M2 5.5L7 8.5L12 5.5" stroke="#4B2685" strokeWidth="1.2" strokeLinecap="round" /></svg>
                        </div>
                        <div>
                          <div className="or-label">Email</div>
                          <div className="or-val">info@abudyog.in</div>
                        </div>
                      </div>
                      <div className="office-row">
                        <div className="or-dot">
                          <svg viewBox="0 0 14 14" fill="none"><path d="M3.5 2H2.5C2.224 2 2 2.224 2 2.5C2 7.851 6.149 12 11.5 12C11.776 12 12 11.776 12 11.5V10.5L10 8.5L8.5 10C7.5 9.5 5.5 7.5 5 6.5L6.5 5L4.5 3L3.5 2Z" stroke="#4B2685" strokeWidth="1.4" strokeLinejoin="round" /></svg>
                        </div>
                        <div>
                          <div className="or-label">Phone</div>
                          <div className="or-val">+91 74392 89709</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
 
                {/* Business Hours Card */}
                <div className="hours-card-simple">
                  <div className="hours-header-simple">
                    <div className="hours-icon-badge">
                      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                        <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
                        <path d="M12 6v6l4 2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="office-title" style={{ marginBottom: 0 }}>Business Hours</div>
                  </div>
                  <div className="hours-rows">
                    <div className="hr-row">
                      <span className="hr-day">Monday – Friday</span>
                      <span className="hr-time">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="hr-row">
                      <span className="hr-day">Saturday</span>
                      <span className="hr-time">9:00 AM – 2:00 PM</span>
                    </div>
                    <div className="hr-row">
                      <span className="hr-day">Sunday</span>
                      <span className="hr-time hr-closed">Closed</span>
                    </div>
                    <div className="hr-row">
                      <span className="hr-day">Public Holidays</span>
                      <span className="hr-time hr-closed">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="ci-right rv sr" data-d="1">
            <div className="form-card" id="formCard">
              {status !== 'success' && (
                <>
                  <h2 className="form-heading">Send us a <em>Message</em></h2>
                  <p className="form-sub">
                    Fill in the details below and our team will get back to you within 24 hours. We look forward to connecting with you.
                  </p>

                  <form id="contactForm" onSubmit={handleSubmit} noValidate>
                    {/* Enquiry type */}
                    <div className={`form-group ${errors.enquiry ? 'error' : ''}`}>
                      <label className="form-label" htmlFor="enquiry">Enquiry Type <span>*</span></label>
                      <select 
                        id="enquiry" 
                        name="enquiry" 
                        className={`form-select ${errors.enquiry ? 'error' : ''}`} 
                        value={selectedEnquiry}
                        onChange={(e) => setSelectedEnquiry(e.target.value)}
                        required
                      >
                        <option value="" disabled>Select enquiry type</option>
                        <option value="retail">🛒 Retail Order</option>
                        <option value="bulk">📦 Bulk / B2B</option>
                        <option value="distribution">🚚 Distribution</option>
                        <option value="partnership">🤝 Partnership</option>
                        <option value="media">📰 Media</option>
                        <option value="other">💬 General</option>
                      </select>
                    </div>

                    <div className="form-row">
                      <div className={`form-group ${errors.fname ? 'error' : ''}`}>
                        <label className="form-label" htmlFor="fname">First Name <span>*</span></label>
                        <input 
                          type="text" 
                          id="fname" 
                          name="fname" 
                          className={`form-input ${errors.fname ? 'error' : ''}`} 
                          placeholder="Rahul" 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="lname">Last Name <span>*</span></label>
                        <input type="text" id="lname" name="lname" className="form-input" placeholder="Sharma" />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className={`form-group ${errors.email ? 'error' : ''}`}>
                        <label className="form-label" htmlFor="email">Email Address <span>*</span></label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          className={`form-input ${errors.email ? 'error' : ''}`} 
                          placeholder="rahul@company.com" 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" className="form-input" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="company">Company / Organisation</label>
                        <input type="text" id="company" name="company" className="form-input" placeholder="ABC Foods Pvt. Ltd." />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="product">Product of Interest</label>
                        <select id="product" name="product" className="form-select" defaultValue="">
                          <option value="" disabled>Select a product</option>
                          <option value="mustard">Kacchi Ghani Mustard Oil</option>
                          <option value="rice-bran">Rice Bran Oil</option>
                          <option value="rice-bran-lite">Rice Bran Oil Lite</option>
                          <option value="soyabean">Soyabean Oil</option>
                          <option value="all">All / Multiple Products</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className={`form-group full ${errors.message ? 'error' : ''}`}>
                        <label className="form-label" htmlFor="message">Your Message <span>*</span></label>
                        <textarea 
                          id="message" 
                          name="message" 
                          className={`form-textarea ${errors.message ? 'error' : ''}`} 
                          placeholder="Tell us about your requirements — quantity, frequency, specific questions..." 
                          required 
                        />
                      </div>
                    </div>

                    <button type="submit" className="form-submit" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                      <svg viewBox="0 0 18 18" fill="none" width="18" height="18">
                        <path d="M3.75 9h10.5M9.75 4.5L14.25 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <p className="submit-note">We respect your privacy. Read our <a href="https://jeevanrekhafoods.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
                  </form>
                </>
              )}

              {/* Success state */}
              {status === 'success' && (
                <div className="form-success" id="formSuccess" style={{ display: 'block' }}>
                  <div className="success-ico">
                    <svg viewBox="0 0 32 32" width="32" height="32">
                      <path d="M6 16l7 7L26 9" fill="none" stroke="var(--y)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="success-h">Message Sent!</h3>
                  <p className="success-p">
                    Thank you for reaching out to Jeevan Rekha Foods. Our team will get back to you within 24 hours. We look forward to connecting with you.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FACTORY SECTION ══ */}
      <section className="factory-section">
        <div className="wrap">
          <div className="factory-grid">
            <div className="factory-left rv sl">
              <div className="label">Manufacturing Plant</div>
              <h2 className="heading" style={{ marginTop: '14px', marginBottom: '16px' }}>
                Visit Our <b>Burdwan</b><br />
                Production <em>Facility</em>
              </h2>
              <p className="prose">
                Our state-of-the-art processing plant in Burdwan, West Bengal is where Jeevan Rekha oils are born. Trade partners, institutional buyers, and authorised visitors are welcome to tour our facility by appointment.
              </p>

              <div className="factory-address" style={{ marginTop: '28px' }}>
                <div className="fa-row">
                  <div className="fa-ico">
                    <svg viewBox="0 0 16 16" fill="none"><path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6C3.5 9 8 14.5 8 14.5C8 14.5 12.5 9 12.5 6C12.5 3.515 10.485 1.5 8 1.5Z" stroke="#4B2685" strokeWidth="1.4" /><circle cx="8" cy="6" r="1.5" stroke="#4B2685" strokeWidth="1.2" /></svg>
                  </div>
                  <div>
                    <div className="fa-label">Factory Address</div>
                    <div className="fa-val">Dighirkon, Bamunia Road, Uchallan<br />Burdwan – 713427, West Bengal</div>
                  </div>
                </div>
                <div style={{ height: '1px', background: 'var(--g10)' }}></div>
                <div className="fa-row">
                  <div className="fa-ico">
                    <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="#4B2685" strokeWidth="1.4" /><line x1="8" y1="5" x2="8" y2="8.5" stroke="#4B2685" strokeWidth="1.4" strokeLinecap="round" /><line x1="8" y1="8.5" x2="10" y2="10" stroke="#4B2685" strokeWidth="1.4" strokeLinecap="round" /></svg>
                  </div>
                  <div>
                    <div className="fa-label">Visit Hours</div>
                    <div className="fa-val">By appointment only — Monday to Friday</div>
                  </div>
                </div>
                <div style={{ height: '1px', background: 'var(--g10)' }}></div>
                <div className="fa-row">
                  <div className="fa-ico">
                    <svg viewBox="0 0 16 16" fill="none"><path d="M3.5 2H2.5C2.224 2 2 2.224 2 2.5C2 7.851 6.149 12 11.5 12C11.776 12 12 11.776 12 11.5V10.5L10 8.5L8.5 10C7.5 9.5 5.5 7.5 5 6.5L6.5 5L4.5 3L3.5 2Z" stroke="#4B2685" strokeWidth="1.4" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <div className="fa-label">Book a Visit</div>
                    <div className="fa-val">Call +91 74392 89709 or email info@abudyog.in</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="factory-visual rv sr">
              <svg className="factory-svg" viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="fp" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="40" x2="40" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                </pattern>
                <rect width="480" height="380" fill="url(#fp)" />
                <rect x="60" y="180" width="360" height="140" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                <polyline points="60,180 120,140 180,180 240,140 300,180 360,140 420,180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                <rect x="130" y="100" width="20" height="80" rx="2" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <rect x="240" y="90" width="24" height="90" rx="2" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <rect x="340" y="105" width="18" height="75" rx="2" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <path d="M140 100 Q148 82 138 68 Q128 54 136 42" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M252 90 Q262 72 250 58 Q238 44 248 30" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M349 105 Q357 88 347 74 Q337 60 345 48" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <rect x="90" y="210" width="32" height="24" rx="2" fill="rgba(254,220,6,0.15)" stroke="rgba(254,220,6,0.3)" strokeWidth="1" />
                <rect x="140" y="210" width="32" height="24" rx="2" fill="rgba(254,220,6,0.1)" stroke="rgba(254,220,6,0.2)" strokeWidth="1" />
                <rect x="280" y="210" width="32" height="24" rx="2" fill="rgba(254,220,6,0.1)" stroke="rgba(254,220,6,0.2)" strokeWidth="1" />
                <rect x="330" y="210" width="32" height="24" rx="2" fill="rgba(254,220,6,0.15)" stroke="rgba(254,220,6,0.3)" strokeWidth="1" />
                <rect x="210" y="250" width="60" height="70" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                <line x1="40" y1="320" x2="440" y2="320" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                <circle cx="380" cy="100" r="52" fill="rgba(254,220,6,0.08)" stroke="rgba(254,220,6,0.2)" strokeWidth="1.5" />
                <text x="380" y="94" textAnchor="middle" fontFamily="serif" fontSize="10" fill="rgba(254,220,6,0.7)" fontWeight="700">BURDWAN</text>
                <text x="380" y="108" textAnchor="middle" fontFamily="serif" fontSize="8" fill="rgba(254,220,6,0.5)">PLANT</text>
              </svg>

              <div className="fv-top">
                <div className="fv-badge">Manufacturing Facility · Est. 2019</div>
              </div>
              <div className="fv-bottom">
                <div className="fv-stats">
                  <div className="fv-stat">
                    <div className="fv-num">300<span style={{ fontSize: '1.1rem' }}>T</span></div>
                    <div className="fv-lbl">Solvent Extraction Daily</div>
                  </div>
                  <div className="fv-stat">
                    <div className="fv-num">150<span style={{ fontSize: '1.1rem' }}>T</span></div>
                    <div className="fv-lbl">Physical Refinery Daily</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="faq">
        <div className="faq-inner">
          <div className="faq-left rv sl">
            <div className="faq-sl">
              <div className="faq-sl-bar"></div>
              <span className="faq-sl-t">Common Questions</span>
            </div>
            <h2 className="faq-h">Got <em>Questions?</em><br />We&apos;ve Got Answers.</h2>
            <p className="faq-p">
              Everything you need to know about our products, ordering, and distribution. Can&apos;t find what you&apos;re looking for? Just ask us directly.
            </p>
            <a href="tel:+917439289709" className="faq-contact-cta">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M13.5 11c-.5-.1-1.2-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.2.1-.4 0-.2-.1-1-.4-1.9-1.1-.7-.6-1.1-1.3-1.2-1.5-.1-.2 0-.4.1-.4l.3-.4c.1-.1.1-.3.2-.4 0-.1 0-.3 0-.4-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.5c-.1 0-.4.1-.6.3-.2.2-.7.7-.7 1.7s.8 2.1.9 2.2c.1.1 1.5 2.3 3.7 3.2.5.2.9.4 1.2.4.5.2 1 .1 1.3-.1.4-.2 1.3-.5 1.5-1 .1-.4.1-.7 0-.9-.1-.1-.2-.1-.4-.2z" />
              </svg>
              Call Us Directly
            </a>
          </div>
          <div className="faq-right rv sr" data-d="1">
            <div className="faq-list">
              <div className={`faq-item ${openFaqIndex === 0 ? 'open' : ''}`}>
                <button type="button" className="faq-q" onClick={() => toggleFaq(0)}>
                  Do you supply in bulk for food manufacturers?
                  <div className="faq-q-arrow">
                    <svg viewBox="0 0 14 14" width="14" height="14">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaqIndex === 0 ? '500px' : '0' }}>
                  <div className="faq-a-inner">
                    Yes — we are one of India&apos;s major suppliers of rice bran oil to the snack and namkeen industry. We offer bulk supply, long-term contracts, and customised packaging. Contact us at <a href="mailto:info@abudyog.in">info@abudyog.in</a> for trade enquiries.
                  </div>
                </div>
              </div>
              <div className={`faq-item ${openFaqIndex === 1 ? 'open' : ''}`}>
                <button type="button" className="faq-q" onClick={() => toggleFaq(1)}>
                  What are the available pack sizes for retail?
                  <div className="faq-q-arrow">
                    <svg viewBox="0 0 14 14" width="14" height="14">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaqIndex === 1 ? '500px' : '0' }}>
                  <div className="faq-a-inner">
                    Our oils are available in consumer packs of 500ml, 1L, 2L, 5L and bulk packaging for trade customers. We offer tamper-proof, hygienically sealed bottles clearly labelled for full transparency.
                  </div>
                </div>
              </div>
              <div className={`faq-item ${openFaqIndex === 2 ? 'open' : ''}`}>
                <button type="button" className="faq-q" onClick={() => toggleFaq(2)}>
                  Where are your products available for purchase?
                  <div className="faq-q-arrow">
                    <svg viewBox="0 0 14 14" width="14" height="14">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaqIndex === 2 ? '500px' : '0' }}>
                  <div className="faq-a-inner">
                    Jeevan Rekha oils are available across 500+ retail partners in West Bengal and pan-India. You can also purchase directly through our website at <a href="https://jeevanrekhafoods.com" target="_blank" rel="noopener noreferrer">jeevanrekhafoods.com</a> or reach out to us for nearby distributor info.
                  </div>
                </div>
              </div>
              <div className={`faq-item ${openFaqIndex === 3 ? 'open' : ''}`}>
                <button type="button" className="faq-q" onClick={() => toggleFaq(3)}>
                  Are your oils FSSAI certified?
                  <div className="faq-q-arrow">
                    <svg viewBox="0 0 14 14" width="14" height="14">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaqIndex === 3 ? '500px' : '0' }}>
                  <div className="faq-a-inner">
                    Absolutely. All Jeevan Rekha products are FSSAI certified and lab-tested every batch. We operate under stringent quality and food safety standards at our Burdwan plant, and each unit is tamper-proof sealed with full labelling compliance.
                  </div>
                </div>
              </div>
              <div className={`faq-item ${openFaqIndex === 4 ? 'open' : ''}`}>
                <button type="button" className="faq-q" onClick={() => toggleFaq(4)}>
                  Can I become a distributor for Jeevan Rekha?
                  <div className="faq-q-arrow">
                    <svg viewBox="0 0 14 14" width="14" height="14">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaqIndex === 4 ? '500px' : '0' }}>
                  <div className="faq-a-inner">
                    Yes! We&apos;re actively expanding our distribution network across India. If you&apos;re interested in becoming a distributor or trade partner, please fill in the contact form above selecting &quot;Distribution&quot; as your enquiry type, or email us at <a href="mailto:info@abudyog.in">info@abudyog.in</a>.
                  </div>
                </div>
              </div>
              <div className={`faq-item ${openFaqIndex === 5 ? 'open' : ''}`}>
                <button type="button" className="faq-q" onClick={() => toggleFaq(5)}>
                  What is the difference between Rice Bran Oil and Mustard Oil?
                  <div className="faq-q-arrow">
                    <svg viewBox="0 0 14 14" width="14" height="14">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaqIndex === 5 ? '500px' : '0' }}>
                  <div className="faq-a-inner">
                    Rice Bran Oil has a 254°C smoke point, neutral flavour, and is rich in Gamma-Oryzanol — ideal for high-heat frying and health-focused cooking. Mustard Oil is cold-pressed (Kacchi Ghani), naturally pungent, and traditional to Indian cuisine with strong anti-inflammatory properties. See our Products page for a full comparison.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}
