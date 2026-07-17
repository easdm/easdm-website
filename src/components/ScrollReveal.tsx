'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-up';
}

export default function ScrollReveal({ children, className = '', animation = 'slide-up' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If browser supports native CSS view timelines, we let CSS handle it.
    if (typeof window !== 'undefined' && window.CSS && window.CSS.supports && window.CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-subject reveal-${animation} ${isVisible ? 'reveal-active' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
