'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const durationMs = 500; // duración más rápida (~0.5s)

    let raf = 0;
    const step = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(100, (elapsed / durationMs) * 100);
      setProgress(p);
      if (p >= 100) {
        setTimeout(() => setIsLoaded(true), 100);
        cancelAnimationFrame(raf);
        return;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (isLoaded) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black" style={{ minHeight: '100vh', minWidth: '100vw' }}>
      {/* Grid pattern background orange */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 88, 12, 0.15) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Corner frames orange - más pequeños */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2" style={{ borderColor: 'var(--accent-strong)' }}></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2" style={{ borderColor: 'var(--accent-strong)' }}></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2" style={{ borderColor: 'var(--accent-strong)' }}></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2" style={{ borderColor: 'var(--accent-strong)' }}></div>

      <div className="text-center space-y-6 relative z-10 flex flex-col items-center justify-center">
        {/* Holographic text effect orange - más pequeño */}
        <div className="relative">
          <h1 className="text-4xl font-bold tracking-[0.2em] select-none uppercase mb-2" style={{
            color: 'var(--accent)',
            textShadow: '0 0 10px var(--accent), 0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
          }}>
            LOADING
          </h1>
          <div className="absolute inset-0 text-4xl font-bold tracking-[0.2em] uppercase blur-[2px] opacity-70" style={{
            color: 'var(--accent-strong)',
            animation: 'glitch 2s infinite'
          }}>
            LOADING
          </div>
          <div className="absolute inset-0 text-4xl font-bold tracking-[0.2em] uppercase blur-[4px] opacity-50" style={{
            color: 'var(--accent)'
          }}>
            LOADING
          </div>
        </div>

        {/* Enhanced progress bar container - más pequeño */}
        <div className="w-48 space-y-3">
          {/* Progress bar frame */}
          <div className="relative">
            {/* Outer frame */}
            <div className="h-2 bg-black border-2 relative overflow-hidden" style={{ borderColor: 'var(--accent-strong)' }}>
              {/* Inner fill */}
              <div
                className="h-full relative"
                style={{ 
                  background: 'linear-gradient(to right, #f59e0b, #fb923c, #f59e0b)',
                  width: `${progress}%`, 
                  transition: 'width 0.2s ease-out' 
                }}
              >
                {/* Scanning line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 shadow-[0_0_15px_#f59e0b,0_0_30px_#ea580c]"></div>
              </div>
            </div>
            
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: 'var(--accent)' }}></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: 'var(--accent)' }}></div>
          </div>

          {/* Progress percentage with neon orange effect - más pequeño */}
          <div className="mt-3">
            <span className="text-3xl font-mono font-bold tabular-nums" style={{
              color: 'var(--accent)',
              textShadow: '0 0 10px var(--accent), 0 0 20px var(--accent-strong)'
            }}>
              {Math.floor(progress)}
            </span>
            <span className="text-xl font-mono ml-1" style={{ color: 'var(--accent-strong)' }}>%</span>
          </div>

          {/* Scanning line effect orange - más pequeño */}
          <div className="relative w-48 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70">
            <div className="absolute inset-0 animate-pulse" style={{
              background: 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.5), transparent)',
              width: '100%'
            }}></div>
          </div>
        </div>

        {/* Advanced decorative elements orange - más pequeños */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_8px_#f59e0b,0_0_15px_#ea580c]" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_#f59e0b,0_0_15px_#ea580c]" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_8px_#f59e0b,0_0_15px_#ea580c]" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

