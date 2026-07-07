"use client";

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { MapPin, Mail, Phone, Clock, Check } from 'lucide-react';

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

        {/* Decorative SVG - communication lines */}
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
            Whether you&apos;re a household cook, a distributor, or a food manufacturer, <strong>we&apos;re here</strong>. Reach out for retail enquiries, bulk orders, trade partnerships, or simply to learn more about our oils.
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

          <h2 className="ci-heading rv" data-d="1">
            We&apos;re Always <em>Here</em> to <strong>Help You</strong>
          </h2>
          <p className="ci-desc rv" data-d="2">
            From your first enquiry to long-term partnership, our team responds promptly and personally. We supply to households, retailers, distributors and food manufacturers across India.
          </p>
        </div>
        <div className="cm-inner">
          {/* LEFT: Info panel */}
          <div className="ci-left">
            <div className="contact-sidebar-card">
              <div className="sidebar-section">
                <h3 className="contact-card-title">Corporate Head Office</h3>
                <div className="contact-detail-list">
                  <div className="contact-detail-item">
                    <span className="contact-detail-icon"><MapPin size={16} /></span>
                    <div>
                      <div className="contact-detail-label">Address</div>
                      <div className="contact-detail-value">55/1B, Strand Road, 3rd Floor, Room 05<br />Kolkata – 700006, West Bengal</div>
                    </div>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-detail-icon"><Mail size={16} /></span>
                    <div>
                      <div className="contact-detail-label">Email</div>
                      <div className="contact-detail-value">info@abudyog.in</div>
                    </div>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-detail-icon"><Phone size={16} /></span>
                    <div>
                      <div className="contact-detail-label">Phone</div>
                      <div className="contact-detail-value">+91 74392 89709</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-divider"></div>

              <div className="sidebar-section">
                <h3 className="contact-card-title">Business Hours</h3>
                <div className="business-hours-list">
                  <div className="hours-row-item">
                    <span className="hours-day">Monday – Friday</span>
                    <span className="hours-time">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="hours-row-item">
                    <span className="hours-day">Saturday</span>
                    <span className="hours-time">9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="hours-row-item">
                    <span className="hours-day">Sunday &amp; Holidays</span>
                    <span className="hours-time closed">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="ci-right">
            <div className="contact-form-container" id="formCard">
              {status !== 'success' && (
                <>
                  <h3 className="contact-form-title">Send us a Message</h3>
                  <p className="contact-form-sub">
                    Fill in the details below and our team will get back to you within 24 hours. We look forward to connecting with you.
                  </p>

                  <form id="contactForm" onSubmit={handleSubmit} noValidate>
                    {/* Full Name & Company */}
                    <div className="field-grid">
                      <div className={`form-field ${errors.fname ? 'error' : ''}`}>
                        <label className="field-label" htmlFor="fname">Full Name <span>*</span></label>
                        <input 
                          type="text" 
                          id="fname" 
                          name="fname" 
                          className={`field-input ${errors.fname ? 'error' : ''}`} 
                          placeholder="Your full name" 
                          required 
                        />
                      </div>
                      <div className="form-field">
                        <label className="field-label" htmlFor="company">Company Name</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          className="field-input" 
                          placeholder="ABC Foods Pvt. Ltd." 
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="field-grid">
                      <div className={`form-field ${errors.email ? 'error' : ''}`}>
                        <label className="field-label" htmlFor="email">Email Address <span>*</span></label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          className={`field-input ${errors.email ? 'error' : ''}`} 
                          placeholder="rahul@company.com" 
                          required 
                        />
                      </div>
                      <div className="form-field">
                        <label className="field-label" htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" className="field-input" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    {/* Enquiry Type & Product */}
                    <div className="field-grid">
                      <div className={`form-field ${errors.enquiry ? 'error' : ''}`}>
                        <label className="field-label" htmlFor="enquiry">Enquiry Type <span>*</span></label>
                        <select 
                          id="enquiry" 
                          name="enquiry" 
                          className={`field-select ${errors.enquiry ? 'error' : ''}`} 
                          value={selectedEnquiry}
                          onChange={(e) => setSelectedEnquiry(e.target.value)}
                          required
                        >
                          <option value="" disabled>Select type</option>
                          <option value="retail">🛒 Retail Order</option>
                          <option value="bulk">📦 Bulk / B2B</option>
                          <option value="distribution">🚚 Distribution</option>
                          <option value="partnership">🤝 Partnership</option>
                          <option value="other">General Enquiry</option>
                        </select>
                      </div>
                      <div className="form-field">
                        <label className="field-label" htmlFor="product">Product of Interest</label>
                        <select id="product" name="product" className="field-select" defaultValue="">
                          <option value="" disabled>Select product</option>
                          <option value="mustard">Kacchi Ghani Mustard Oil</option>
                          <option value="rice-bran">Rice Bran Oil</option>
                          <option value="rice-bran-lite">Rice Bran Oil Lite</option>
                          <option value="soyabean">Soyabean Oil</option>
                          <option value="all">All / Multiple Products</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className={`form-field ${errors.message ? 'error' : ''}`}>
                      <label className="field-label" htmlFor="message">Your Message <span>*</span></label>
                      <textarea 
                        id="message" 
                        name="message" 
                        className={`field-textarea ${errors.message ? 'error' : ''}`} 
                        placeholder="Tell us about your requirements..." 
                        required 
                      />
                    </div>

                    <button type="submit" className="form-btn" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                      <svg viewBox="0 0 18 18" fill="none" width="16" height="16">
                        <path d="M3.75 9h10.5M9.75 4.5L14.25 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <p className="privacy-note">We respect your privacy. Read our <a href="https://jeevanrekhafoods.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
                  </form>
                </>
              )}

              {/* Success state */}
              {status === 'success' && (
                <div className="form-success-panel" id="formSuccess">
                  <div className="success-icon-badge">
                    <svg viewBox="0 0 32 32" width="24" height="24">
                      <path d="M6 16l7 7L26 9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="success-title">Message Sent Successfully</h4>
                  <p className="success-desc">
                    Thank you for reaching out. A representative from Jeevan Rekha Foods will get back to you within 24 hours.
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
            <div className="factory-left">

              <h2 className="ci-heading" style={{ marginTop: '14px', marginBottom: '16px' }}>
                Visit Our <em>Burdwan</em> <strong>Production Facility</strong>
              </h2>
              <p className="ci-desc">
                Our state-of-the-art processing plant in Burdwan, West Bengal is where Jeevan Rekha oils are manufactured. Institutional buyers, distributors, and trade partners are welcome to tour our facility by appointment.
              </p>

              <div className="plant-info-list">
                <div className="plant-info-item">
                  <span className="plant-info-icon"><MapPin size={16} /></span>
                  <div>
                    <div className="plant-info-label">Factory Address</div>
                    <div className="plant-info-value">Dighirkon, Bamunia Road, Uchallan, Burdwan – 713427, West Bengal</div>
                  </div>
                </div>
                <div className="plant-info-item">
                  <span className="plant-info-icon"><Phone size={16} /></span>
                  <div>
                    <div className="plant-info-label">Book a Visit</div>
                    <div className="plant-info-value">Call +91 74392 89709 or email info@abudyog.in (Mon–Fri)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="factory-right">
              <div className="plant-capacity-card">
                <div className="plant-capacity-header">
                  <span className="capacity-eyebrow">Established 2019</span>
                  <h3 className="capacity-title">Refinery Processing Capacity</h3>
                </div>
                <div className="capacity-stats-grid">
                  <div className="capacity-stat-box">
                    <div className="stat-value">300<span className="stat-unit">TPD</span></div>
                    <div className="stat-label">Solvent Extraction Capacity</div>
                  </div>
                  <div className="capacity-stat-box">
                    <div className="stat-value">150<span className="stat-unit">TPD</span></div>
                    <div className="stat-label">Physical Refining Capacity</div>
                  </div>
                </div>
                <div className="plant-capabilities-list">
                  <h4 className="capabilities-title">Plant Capabilities</h4>
                  <div className="capability-items">
                    <div className="capability-item">
                      <Check size={14} color="var(--p)" strokeWidth={3} />
                      <span>Multi-stage physical refining without caustic soda</span>
                    </div>
                    <div className="capability-item">
                      <Check size={14} color="var(--p)" strokeWidth={3} />
                      <span>Fully automated continuous workflow systems</span>
                    </div>
                    <div className="capability-item">
                      <Check size={14} color="var(--p)" strokeWidth={3} />
                      <span>Enzymatic degumming for enhanced nutrient retention</span>
                    </div>
                    <div className="capability-item">
                      <Check size={14} color="var(--p)" strokeWidth={3} />
                      <span>State-of-the-art quality control and testing lab</span>
                    </div>
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

            <h2 className="faq-h">Got <em>Questions?</em><br />We&apos;ve Got <strong>Answers.</strong></h2>
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
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Yes, we are one of India&apos;s major suppliers of rice bran oil to the snack and namkeen industry. We offer bulk supply, long-term contracts, and customised packaging. Contact us at <a href="mailto:info@abudyog.in">info@abudyog.in</a> for trade enquiries.
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
                <div className="faq-a">
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
                <div className="faq-a">
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
                <div className="faq-a">
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
                <div className="faq-a">
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
                <div className="faq-a">
                  <div className="faq-a-inner">
                    Rice Bran Oil has a 232°C smoke point, neutral flavour, and is rich in Gamma-Oryzanol, which is ideal for high-heat frying and health-focused cooking. Mustard Oil is cold-pressed (Kacchi Ghani), naturally pungent, and traditional to Indian cuisine with strong anti-inflammatory properties. See our Products page for a full comparison.
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
