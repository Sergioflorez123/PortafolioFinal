'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
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

