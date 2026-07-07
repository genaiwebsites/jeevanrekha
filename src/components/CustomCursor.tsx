"use client";

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Detect touch device to disable custom cursor completely
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      cursor.style.display = 'none';
      return;
    }

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const animCursor = () => {
      // Smooth interpolation for follower effect
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      cursor.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      animationFrameId = requestAnimationFrame(animCursor);
    };
    animCursor();

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = target.closest('a, button, select, input, textarea, .blog-card, .ps-link, .pcard-home, .wt-card, .hs-card');
      if (isInteractive) {
        cursor.classList.add('hovered');
      } else {
        cursor.classList.remove('hovered');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="cur-follower" ref={cursorRef}></div>
  );
}
