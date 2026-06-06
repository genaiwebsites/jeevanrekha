"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Set a slight timeout to ensure page content is fully mounted in the DOM
    const timer = setTimeout(() => {
      const rvEls = document.querySelectorAll('.rv');
      if (rvEls.length === 0) return;

      // Reset visibility classes so they fade in again
      rvEls.forEach(el => {
        el.classList.remove('vis');
      });

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('vis');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      rvEls.forEach(el => {
        observer.observe(el);
      });

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
