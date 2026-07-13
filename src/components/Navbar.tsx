"use client";

import Image from 'next/image';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  if (pathname.startsWith('/products/mustard-oil') || pathname.startsWith('/products/rice-bran-oil') || pathname.startsWith('/products/soybean-oil')) {
    return null;
  }

  // Determine if we should force solid styling based on the path
  const isLightPage = pathname === '/blogs' || pathname.startsWith('/blogs/');

  const navClass = [
    scrolled ? 'scrolled' : '',
    isLightPage ? 'force-solid' : ''
  ].filter(Boolean).join(' ');

  const getLinkClass = (path: string) => {
    if (path === '/') {
      return pathname === '/' ? 'active' : '';
    }
    return pathname.startsWith(path) ? 'active' : '';
  };

  return (
    <nav id="nav" className={navClass}>
      <div className="nav-bg"></div>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image src="/jeevan-rekha-logo.png" alt="Jeevan Rekha Logo - Premium Edible Oils" width={400} height={120} priority />
        </Link>
        <ul className={`nav-links ${isMobileOpen ? 'nav-open' : ''}`} id="navL">
          <li><Link href="/" id="link-home" className={getLinkClass('/')}>Home</Link></li>
          <li><Link href="/products" id="link-products" className={getLinkClass('/products')}>Products</Link></li>
          <li><Link href="/manufacturing" id="link-manufacturing" className={getLinkClass('/manufacturing')}>Manufacturing</Link></li>
          <li><Link href="/about" id="link-about" className={getLinkClass('/about')}>About Us</Link></li>
          <li><Link href="/blogs" id="link-blogs" className={pathname.startsWith('/blogs') ? 'active' : ''}>Blogs</Link></li>
          <li><Link href="/contact" id="link-contact" className={getLinkClass('/contact')}>Contact</Link></li>
        </ul>
        
        <div className="nav-cta-wrap">

          <div 
            className="mobile-toggle" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsMobileOpen(!isMobileOpen);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
            aria-controls="navL"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
