'use client';

import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuración optimizada para móvil - partículas solo en Hero
    const particleCount = window.innerWidth < 768 ? 25 : 40; // Menos partículas en móvil
    const heroHeight = window.innerHeight * 1.2; // Altura aproximada del Hero
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const resize = () => {
      if (typeof window !== 'undefined') {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resize);
    }

    // Crear partículas
    if (typeof window !== 'undefined') {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    }

    let animationFrameId: number;
    let lastTime = 0;
    const targetFPS = 30; // Reducir FPS para móvil
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        // Solo dibujar en el área del Hero (primeros 120vh)
        const scrollY = typeof window !== 'undefined' ? window.scrollY || 0 : 0;
        const visibleHeight = Math.min(heroHeight, canvas.height);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Actualizar y dibujar partículas solo en Hero
        particles.forEach((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Rebote en los bordes horizontales
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          
          // Rebote en el borde superior y mantener dentro del Hero
          if (particle.y <= 0) particle.vy *= -1;
          if (particle.y >= visibleHeight) {
            particle.y = visibleHeight;
            particle.vy *= -1;
          }

          // Mantener dentro del canvas
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
          particle.y = Math.max(0, Math.min(visibleHeight, particle.y));

          // Solo dibujar si está en el área visible del Hero
          if (particle.y <= visibleHeight && scrollY < heroHeight) {
            // Dibujar partícula
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(245, 158, 11, 0.4)';
            ctx.fill();
          }
        });

        // Conectar partículas cercanas (solo en desktop y dentro del Hero)
        if (typeof window !== 'undefined' && window.innerWidth >= 768 && scrollY < heroHeight) {
          particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach((otherParticle) => {
              // Solo conectar si ambas están en el Hero
              if (particle.y <= visibleHeight && otherParticle.y <= visibleHeight) {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(otherParticle.x, otherParticle.y);
                  ctx.strokeStyle = `rgba(245, 158, 11, ${0.2 * (1 - distance / 120)})`;
                  ctx.lineWidth = 0.5;
                  ctx.stroke();
                }
              }
            });
          });
        }

        lastTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resize);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}

