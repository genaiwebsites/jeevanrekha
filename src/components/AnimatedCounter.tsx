"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ target, suffix = '', className = '' }: AnimatedCounterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const obj = { val: 0 };
    el.innerText = '0' + suffix;

    const tween = gsap.to(obj, {
      val: target,
      duration: 2.5,
      ease: "power3.out",
      onUpdate: () => {
        if (el) {
          el.innerText = Math.floor(obj.val) + suffix;
        }
      },
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });

    return () => {
      tween.kill();
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
    };
  }, [target, suffix]);

  return <span ref={elementRef} className={className}>0{suffix}</span>;
}
