'use client';

import { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'fade-in-up' | 'slide-left' | 'slide-right';
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animationType = 'fade-in-up',
  delay = 0
}: ScrollAnimationProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const animationClasses = {
    'fade-in': 'scroll-fade-in',
    'fade-in-up': 'scroll-fade-in-up',
    'slide-left': 'scroll-slide-left',
    'slide-right': 'scroll-slide-right',
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationClasses[animationType]} ${isInView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

