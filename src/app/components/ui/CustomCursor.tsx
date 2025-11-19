'use client';

import { useEffect, useState, useRef } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number; time: number }>>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number; time: number }>>([]);
  const { theme } = useContext(ThemeContext);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Verificar si es desktop
    const checkDesktop = () => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth >= 768);
      }
    };
    
    if (typeof window !== 'undefined') {
      checkDesktop();
      window.addEventListener('resize', checkDesktop);
    }

    let trailId = 0;
    let rippleId = 0;
    const trailLength = 10;
    let lastUpdate = 0;

    const updateCursor = (e: MouseEvent) => {
      if (typeof window === 'undefined' || window.innerWidth < 768) return;
      
      const now = Date.now();
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Agregar punto al trail con throttling
      if (now - lastUpdate > 10) {
        setTrail(prev => {
          const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++, time: now }];
          return newTrail.slice(-trailLength);
        });
        lastUpdate = now;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      if (typeof window === 'undefined' || window.innerWidth < 768) return;
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        // Crear ripple al entrar
        setRipples(prev => [...prev, { x: e.clientX, y: e.clientY, id: rippleId++, time: Date.now() }]);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (typeof window === 'undefined' || window.innerWidth < 768) return;
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (typeof window === 'undefined' || window.innerWidth < 768) return;
      // Crear ripple al hacer click
      setRipples(prev => [...prev, { x: e.clientX, y: e.clientY, id: rippleId++, time: Date.now() }]);
    };

    // Solo en desktop
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      document.addEventListener('mousemove', updateCursor, { passive: true });
      document.addEventListener('mouseenter', handleMouseEnter, true);
      document.addEventListener('mouseleave', handleMouseLeave, true);
      document.addEventListener('click', handleClick, true);
    }

    // Limpiar ripples antiguos
    const cleanupRipples = () => {
      setRipples(prev => prev.filter(ripple => Date.now() - ripple.time < 600));
    };

    const interval = setInterval(cleanupRipples, 100);

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkDesktop);
        document.removeEventListener('mousemove', updateCursor);
        document.removeEventListener('mouseenter', handleMouseEnter, true);
        document.removeEventListener('mouseleave', handleMouseLeave, true);
        document.removeEventListener('click', handleClick, true);
      }
      clearInterval(interval);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // No mostrar en móvil
  if (!isDesktop) {
    return null;
  }

  return (
    <>
      {/* Cursor principal con efecto de pulso */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)',
        }}
      >
        {/* Cursor interno brillante */}
        <div
          className={`rounded-full absolute inset-0 transition-all duration-300 ${
            isHovering ? 'w-10 h-10' : 'w-5 h-5'
          }`}
          style={{
            background: `radial-gradient(circle, 
              ${theme === 'light' ? 'rgba(245, 158, 11, 1)' : 'rgba(245, 158, 11, 1)'}, 
              ${theme === 'light' ? 'rgba(234, 88, 12, 0.9)' : 'rgba(234, 88, 12, 0.9)'})`,
            boxShadow: isHovering
              ? '0 0 25px rgba(245, 158, 11, 1), 0 0 50px rgba(234, 88, 12, 0.8), 0 0 75px rgba(245, 158, 11, 0.6)'
              : '0 0 15px rgba(245, 158, 11, 0.9), 0 0 30px rgba(234, 88, 12, 0.7), 0 0 45px rgba(245, 158, 11, 0.5)',
            border: `2px solid ${theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)'}`,
            animation: 'cursorPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
        
        {/* Anillo exterior animado */}
        <div
          className={`absolute rounded-full transition-all duration-300 ${
            isHovering ? 'w-16 h-16' : 'w-8 h-8'
          }`}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            border: `2px solid ${theme === 'light' ? 'rgba(245, 158, 11, 0.4)' : 'rgba(245, 158, 11, 0.5)'}`,
            animation: 'cursorSpin 3s linear infinite',
          }}
        />
      </div>

      {/* Trail de partículas mejorado */}
      {trail.map((point, index) => {
        const progress = index / trail.length;
        const size = 4 + (1 - progress) * 6;
        const opacity = progress * 0.8;
        const scale = 0.3 + progress * 0.7;
        
        return (
          <div
            key={point.id}
            className="fixed pointer-events-none z-[9998] rounded-full"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, 
                rgba(245, 158, 11, ${opacity}), 
                rgba(234, 88, 12, ${opacity * 0.7}))`,
              boxShadow: `0 0 ${size * 2}px rgba(245, 158, 11, ${opacity * 0.5})`,
              transition: 'all 0.1s ease-out',
            }}
          />
        );
      })}

      {/* Ripples (ondas) al hacer click o hover */}
      {ripples.map((ripple) => {
        const age = Date.now() - ripple.time;
        const progress = Math.min(age / 600, 1);
        const size = progress * 100;
        const opacity = 1 - progress;
        
        return (
          <div
            key={ripple.id}
            className="fixed pointer-events-none z-[9997] rounded-full"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              transform: 'translate(-50%, -50%)',
              width: `${size}px`,
              height: `${size}px`,
              border: `2px solid rgba(245, 158, 11, ${opacity * 0.6})`,
              boxShadow: `0 0 ${size}px rgba(245, 158, 11, ${opacity * 0.4})`,
              transition: 'all 0.05s linear',
            }}
          />
        );
      })}
      
    </>
  );
}

