"use client";

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="view-contact" className="view-section active">
      <div className="hero vh-auto" style={{ background: 'var(--w)', paddingBottom: '60px', borderBottom: '1px solid var(--g10)' }}>
        <div className="hero-wrap grid-2">
          <div className="hero-left rv">
            <div className="kicker"><div className="k-bar"></div><span className="k-txt">Get in Touch</span></div>
            <h1 className="s-h" style={{ fontSize: '4rem', marginBottom: '20px' }}>We'd Love to<br/><strong>Hear From</strong> <em>You</em></h1>
            <p className="body-t">Whether you're a household customer, a distributor, a food manufacturer, or a retail partner — our team is ready to assist.</p>
          </div>
          <div className="hero-right rv sr" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div className="office-card" style={{ width: '100%', border: 'none', background: 'var(--off)', padding: '24px' }}>
               <h4 style={{ fontFamily: 'var(--fd)', fontSize: '1.4rem', color: 'var(--p)', marginBottom: '12px' }}>Quick Connect</h4>
               <p className="body-t" style={{ marginBottom: '8px' }}><strong>Call:</strong> +91 74392 89709</p>
               <p className="body-t"><strong>Email:</strong> info@abudyog.in</p>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-main">
        <div className="wrap">
          <div className="contact-grid">
            {/* FORM */}
            <div className="form-wrap rv sl">
              <h3 className="s-h" style={{ fontSize: '2rem', marginBottom: '24px' }}>Write to Us</h3>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="fname">Full Name *</label>
                  <input type="text" id="fname" required placeholder="Rajiv Sharma" />
                </div>
                <div className="field">
                  <label htmlFor="femail">Email Address *</label>
                  <input type="email" id="femail" required placeholder="rajiv@example.com" />
                </div>
                <div className="field">
                  <label htmlFor="finterest">Product of Interest</label>
                  <select id="finterest">
                    <option>General Enquiry</option>
                    <option>Mustard Oil</option>
                    <option>Rice Bran Oil</option>
                    <option>Soyabean Oil</option>
                    <option>Bulk / Trade Supply</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="fmessage">Message *</label>
                  <textarea id="fmessage" rows={4} required placeholder="Tell us about your requirement..."></textarea>
                </div>

                {status !== 'success' && (
                  <button 
                    type="submit" 
                    className="btn-p" 
                    id="form-btn" 
                    style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1, pointerEvents: status === 'sending' ? 'none' : 'auto' }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                )}
                
                {status === 'success' && (
                  <div id="form-success" style={{ display: 'block', marginTop: '20px', padding: '16px', background: 'var(--pl)', borderRadius: '12px', color: 'var(--p)', fontWeight: 600, textAlign: 'center' }}>
                    ✓ Message Sent Successfully. We will contact you soon!
                  </div>
                )}
              </form>
            </div>

            {/* INFO */}
            <div className="info-panel rv sr">
              <div className="office-card">
                <div className="office-map"></div>
                <div className="office-body">
                  <h4 style={{ fontFamily: 'var(--fd)', fontSize: '1.4rem', color: 'var(--bk)', marginBottom: '16px' }}>Corporate Office</h4>
                  <div className="office-row">
                    <div style={{ color: 'var(--p)', fontSize: '1.2rem' }}>📍</div>
                    <p className="body-t" style={{ fontSize: '.85rem', lineHeight: 1.5 }}>55/1B, Strand Road, 3rd Floor, Room 05<br/>Kolkata – 700006, West Bengal</p>
                  </div>
                </div>
              </div>

              <div className="office-card">
                 <div className="office-body">
                  <h4 style={{ fontFamily: 'var(--fd)', fontSize: '1.4rem', color: 'var(--bk)', marginBottom: '16px' }}>Manufacturing Plant</h4>
                  <div className="office-row">
                    <div style={{ color: 'var(--p)', fontSize: '1.2rem' }}>🏭</div>
                    <p className="body-t" style={{ fontSize: '.85rem', lineHeight: 1.5 }}>Dighirkon, Bamunia Road, Uchallan<br/>Burdwan – 713427, West Bengal<br/><br/><em>Visits by appointment only.</em></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section className="factory-section">
        <div className="wrap">
          <div className="factory-grid">
            <div className="rv sl">
              <div className="kicker"><div className="k-bar"></div><span className="k-txt">Manufacturing Plant</span></div>
              <h2 className="s-h">Visit Our <strong>Burdwan</strong><br/><em>Facility</em></h2>
              <p className="body-t" style={{ marginTop: '16px' }}>Trade partners, institutional buyers, and authorised visitors are welcome to tour our state-of-the-art facility by appointment.</p>
              <div className="factory-address">
                <h4 style={{ fontSize: '1rem', color: 'var(--p)' }}>Book a Visit</h4>
                <p className="body-t" style={{ fontSize: '.85rem' }}>Call +91 74392 89709 or email info@abudyog.in<br/>Available Mon - Fri.</p>
              </div>
            </div>
            <div className="rv sr" style={{ background: 'linear-gradient(145deg, var(--p), var(--pd))', padding: '40px', borderRadius: '24px', color: 'var(--w)', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ fontFamily: 'var(--fd)', fontSize: '4rem', color: 'var(--y)', lineHeight: 1 }}>300<span style={{ fontSize: '2rem' }}>T</span></div>
              <p style={{ fontSize: '.9rem', opacity: .7, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>Daily Solvent Extraction</p>
              <div style={{ fontFamily: 'var(--fd)', fontSize: '4rem', color: 'var(--w)', lineHeight: 1 }}>150<span style={{ fontSize: '2rem' }}>T</span></div>
              <p style={{ fontSize: '.9rem', opacity: .7, textTransform: 'uppercase', letterSpacing: '1px' }}>Daily Physical Refinery</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="wrap">
          <div className="kicker rv"><div className="k-bar"></div><span className="k-txt">Frequently Asked</span></div>
          <h2 className="s-h rv" data-d="1">Common <strong>Questions</strong></h2>
          <div className="faq-grid">
            <div className="faq-item rv">
              <div className="faq-q"><div className="faq-icon">Q</div><div style={{ fontFamily: 'var(--fd)', fontSize: '1.1rem', fontWeight: 700 }}>Where can I buy Jeevan Rekha oils?</div></div>
              <p className="body-t" style={{ fontSize: '.85rem' }}>Jeevan Rekha oils are available at select retail stores across West Bengal. We're continuously expanding our retail presence.</p>
            </div>
            <div className="faq-item rv" data-d="1">
              <div className="faq-q"><div className="faq-icon">Q</div><div style={{ fontFamily: 'var(--fd)', fontSize: '1.1rem', fontWeight: 700 }}>Do you offer bulk or trade pricing?</div></div>
              <p className="body-t" style={{ fontSize: '.85rem' }}>Yes. We supply to restaurants, food manufacturers, caterers, and institutional buyers at trade pricing. Enquire above.</p>
            </div>
            <div className="faq-item rv" data-d="2">
              <div className="faq-q"><div className="faq-icon">Q</div><div style={{ fontFamily: 'var(--fd)', fontSize: '1.1rem', fontWeight: 700 }}>Are your oils FSSAI certified?</div></div>
              <p className="body-t" style={{ fontSize: '.85rem' }}>Yes. All oils are manufactured under a valid FSSAI licence and every production batch is independently lab-tested.</p>
            </div>
            <div className="faq-item rv" data-d="3">
              <div className="faq-q"><div className="faq-icon">Q</div><div style={{ fontFamily: 'var(--fd)', fontSize: '1.1rem', fontWeight: 700 }}>What pack sizes are available?</div></div>
              <p className="body-t" style={{ fontSize: '.85rem' }}>Consumer packs are available in 500ml, 1L, 2L, and 5L. For trade buyers, we offer 15L tins and bulk packaging.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
