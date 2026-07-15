"use client";

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Custom404() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'About Us', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  const [currentPath, setCurrentPath] = useState('');
  const [suggestion, setSuggestion] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      setCurrentPath(path);
      const cleanPath = path.toLowerCase().replace(/^\/|\/$/g, '');
      const matched = navLinks.find(link => link.path.slice(1).toLowerCase() === cleanPath);
      if (matched) {
        setSuggestion(matched);
      }
    }
  }, []);

  // --- INTERACTIVE CENTREPIECE STATE ("Kacchi Ghani Viscosity Scrub") ---
  const beakerRef = useRef<HTMLDivElement>(null);
  const scrubberRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrubberTop, setScrubberTop] = useState(0);

  const maxScrub = 150 - 44; // Scrubber height - handle height
  const viscosityPercent = Math.round((scrubberTop / maxScrub) * 100);

  let currentBlend = { color: '', status: '', pungency: '' };

  if (viscosityPercent <= 15) {
    currentBlend = { color: '#fef7e1', status: 'Viscosity: Light', pungency: 'Character: Mellow (Soybean Blend)' };
  } else if (viscosityPercent >= 85) {
    currentBlend = { color: '#a67c00', status: 'Viscosity: Heavy', pungency: 'Character: Robust (Traditional Blend)' };
  } else {
    currentBlend = { color: '#e2b13c', status: 'Viscosity: Ideal', pungency: 'Character: Rich & Pungent (Pure Kacchi Ghani)' };
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartY(e.clientY - scrubberTop);
    if (scrubberRef.current) {
      scrubberRef.current.setPointerCapture(e.pointerId);
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    let newTop = e.clientY - startY;
    newTop = Math.max(0, Math.min(newTop, maxScrub));
    setScrubberTop(newTop);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (scrubberRef.current) {
      scrubberRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) {
      window.location.href = `https://www.google.com/search?q=site:jeevanrekhafoods.com+${encodeURIComponent(query)}`;
    }
  };

  const reportBrokenLink = () => {
    if (typeof window !== 'undefined') {
      const subject = encodeURIComponent(`Broken Link Report: ${currentPath} on Jeevan Rekha`);
      const body = encodeURIComponent(`Hello Jeevan Rekha Team,\n\nI just hit a 404 error on your site. The broken link was:\n${window.location.href}\n\nThis happened on: ${new Date().toLocaleString()}\n\nPlease fix it!\n\nA Lost Visitor`);
      window.location.href = `mailto:care@jeevanrekha.net?subject=${subject}&body=${body}`;
    }
  };

  return (
    <>
      <Head>
        <title>Page Not Found | Jeevan Rekha | Purity. Health. Happiness.</title>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="jr-404-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--off)', color: 'var(--bk)' }}>
        
        {/* HERO SECTION / BANNER */}
        <section className="hero vh-auto" style={{ padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
          <div className="hero-bg" />
          <div className="hero-mesh" />
          <div className="hero-grid" />
          
          <div className="hero-wrap text-center" style={{ position: 'relative', zIndex: 5 }}>
            <div className="kicker" style={{ justifyContent: 'center', marginBottom: '8px' }}>
              <span className="k-bar" />
              <span className="k-txt" style={{ color: 'var(--y)' }}>Error Code 404</span>
              <span className="k-bar" />
            </div>
            <h1 className="h1" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: '24px 0', textShadow: '0 4px 12px rgba(0,0,0,0.3)', textAlign: 'center' }}>
              <span className="h1-a" style={{ color: 'var(--w)' }}>This page did not</span>
              <span className="h1-b" style={{ color: 'var(--y)', fontStyle: 'italic' }}>quite jell.</span>
            </h1>
            <p className="h-desc" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', margin: '0 auto 32px', textAlign: 'center', maxWidth: '600px' }}>
              We couldn&rsquo;t find <code style={{ color: 'var(--y)', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '6px', fontSize: '0.95em', wordBreak: 'break-all' }}>{currentPath || '/unknown'}</code>. It might have spilled.
            </p>
          </div>
        </section>

        {/* BENTO GRID CONTENT SECTION */}
        <section className="why" style={{ flex: 1, padding: '60px 0', background: 'var(--off)' }}>
          <div className="wrap">
            <div className="bento-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px' }}>
              
              {/* LEFT COLUMN: INTERACTIVE VISCOSITY LAB BEAKER */}
              <div className="wcard" style={{ gridColumn: 'span 7', cursor: 'default' }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div className="kicker">
                    <span className="k-bar" />
                    <span className="k-txt" style={{ color: 'var(--p)' }}>Lab Test</span>
                  </div>
                  <h3 className="s-h" style={{ fontSize: '1.8rem', marginBottom: '12px', color: 'var(--bk)' }}>Test for Kacchi Ghani Purity</h3>
                  <p className="body-t" style={{ marginBottom: '24px', color: 'var(--g60)' }}>Use the rod to scrub the oil in our beaker. Pure cold-pressed Kacchi Ghani exhibits ideal golden density and traditional pungency.</p>
                  
                  {/* Interactive Beaker Visual container */}
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                    <div id="jr-oil-viscosity-beaker" style={{
                      width: '240px',
                      height: '300px',
                      background: 'var(--w)',
                      borderRadius: '24px',
                      border: '3px solid var(--g10)',
                      boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.05), var(--shadow-sm)',
                      position: 'relative',
                      overflow: 'hidden',
                      touchAction: 'none'
                    }}>
                      <div id="jr-oil-liquid" style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0, backgroundColor: currentBlend.color, transition: 'background-color 0.2s ease' }}>
                        {/* Interactive Bubbles */}
                        {[...Array(5)].map((_, i) => (
                          <div key={i} style={{
                            width: `${6 + (viscosityPercent / 12)}px`,
                            height: `${6 + (viscosityPercent / 12)}px`,
                            backgroundColor: 'rgba(255,255,255,0.45)',
                            borderRadius: '50%',
                            position: 'absolute',
                            bottom: `${15 + (i * 18)}%`,
                            left: `${25 + (i * 13)}%`,
                            transition: 'width 0.2s, height 0.2s'
                          }} />
                        ))}
                      </div>

                      {/* Scrubber slider track & handle */}
                      <div 
                        ref={scrubberRef}
                        style={{
                          width: '16px',
                          height: '150px',
                          background: 'linear-gradient(180deg, var(--w) 0%, rgba(255,255,255,0.3) 100%)',
                          border: '1px solid rgba(16,11,40,0.1)',
                          borderRadius: '20px',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          cursor: isDragging ? 'grabbing' : 'grab',
                          zIndex: 10,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                          transform: `translate(-50%, calc(-50% + ${scrubberTop - (maxScrub / 2)}px))`
                        }}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onPointerCancel={onPointerUp}
                      >
                        <div style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: 'var(--bk)',
                          borderRadius: '50%',
                          position: 'absolute',
                          top: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          border: '3px solid var(--y)',
                          boxShadow: '0 0 12px var(--y)'
                        }} />
                      </div>

                      {/* Display readout */}
                      <div style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '16px',
                        right: '16px',
                        background: 'rgba(255,255,255,0.92)',
                        padding: '10px 12px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        border: '1px solid var(--g10)'
                      }}>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: 'var(--bk)' }}>{currentBlend.status}</p>
                        <p style={{ margin: '2px 0 0 0', fontSize: '0.78rem', color: 'var(--g60)' }}>{currentBlend.pungency}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: RECOVERY PATHWAYS & SITE LINKS */}
              <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                
                {/* SEARCH WIDGET */}
                <div className="wcard" style={{ flex: 'none', cursor: 'default' }}>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div className="kicker">
                      <span className="k-bar" />
                      <span className="k-txt" style={{ color: 'var(--p)' }}>Finder</span>
                    </div>
                    <h3 className="s-h" style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--bk)' }}>Looking for something specific?</h3>
                    <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '12px' }}>
                      <input 
                        type="search" 
                        name="search" 
                        placeholder="e.g., Rice Bran Oil..." 
                        aria-label="Search website"
                        style={{
                          flex: 1,
                          padding: '14px 20px',
                          borderRadius: '50px',
                          border: '1.5px solid var(--g20)',
                          background: 'var(--off)',
                          color: 'var(--bk)',
                          fontFamily: 'var(--fb)',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }} 
                      />
                      <button className="btn-p" type="submit" style={{ padding: '14px 24px', fontSize: '0.8rem' }}>Search</button>
                    </form>
                  </div>
                </div>

                {/* SUGGESTION / RECOVERY NAV LINKS */}
                <div className="wcard" style={{ flex: 1, cursor: 'default', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    {suggestion && (
                      <div style={{ background: 'var(--g05)', border: '1px solid var(--g10)', padding: '16px', borderRadius: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '1.6rem' }}>💡</span>
                        <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--g60)' }}>
                          Were you looking for the <Link href={suggestion.path} style={{ color: 'var(--p)', fontWeight: 700, textDecoration: 'underline' }}>{suggestion.name}</Link> page?
                        </p>
                      </div>
                    )}

                    <h4 className="s-h" style={{ fontSize: '1.3rem', marginBottom: '20px', color: 'var(--bk)' }}>Quick Navigation</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {[
                        { name: 'Our Cooking Oils', path: '/products', label: 'Browse our pure and light product catalog.' },
                        { name: 'Manufacturing Standards', path: '/manufacturing', label: 'How we refine with physical purity.' },
                        { name: 'Contact Distribution', path: '/contact', label: 'Trade inquiries and customer support.' }
                      ].map((item, idx) => (
                        <div key={idx} style={{ borderBottom: '1px solid var(--g05)', paddingBottom: '12px' }}>
                          <Link href={item.path} style={{ color: 'var(--p)', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }} className="ab-link">
                            {item.name}
                          </Link>
                          <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: 'var(--g60)' }}>{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* REPORT LINK */}
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <p className="body-t" style={{ fontSize: '0.88rem' }}>
                Think this is a mistake? <button onClick={reportBrokenLink} style={{ color: 'var(--p)', fontWeight: 700, textDecoration: 'underline', border: 'none', background: 'none', cursor: 'pointer', font: 'inherit' }}>Report the broken link</button> and we will fix it.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
