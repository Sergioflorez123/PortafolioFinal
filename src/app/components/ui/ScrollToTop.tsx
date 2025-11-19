'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    let ticking = false;

    const measure = () => {
      setIsVisible(window.pageYOffset > 300);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(measure);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
        boxShadow: '0 0 20px rgba(245, 158, 11, 0.6), 0 0 40px rgba(234, 88, 12, 0.4)',
        border: '2px solid rgba(245, 158, 11, 0.5)'
      }}
      aria-label="Scroll to top"
    >
      <svg 
        className="w-6 h-6 text-white" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
}

