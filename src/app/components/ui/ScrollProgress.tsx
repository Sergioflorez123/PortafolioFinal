'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let raf = 0;
    let ticking = false;

    const measure = () => {
      const scrolled = (window.scrollY / height) * 100;
      if (!Number.isFinite(scrolled)) {
        ticking = false;
        return;
      }
      setScrollProgress(scrolled);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(measure);
      }
    };

    const onResize = () => {
      height = document.documentElement.scrollHeight - window.innerHeight;
      onScroll();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 z-50 transition-all duration-150"
      style={{
        background: `linear-gradient(to right, #f59e0b ${scrollProgress}%, transparent ${scrollProgress}%)`,
        boxShadow: scrollProgress > 0 ? '0 2px 10px rgba(245, 158, 11, 0.5)' : 'none'
      }}
    />
  );
}

