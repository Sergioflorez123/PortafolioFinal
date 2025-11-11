'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        // Incremento acelerado al inicio, más lento al final
        const increment = prev < 20 ? 2 : prev < 70 ? 1.5 : 1;
        return prev + increment;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (isLoaded) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Grid pattern background orange */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 88, 12, 0.15) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Corner frames orange */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2" style={{ borderColor: 'var(--accent-strong)' }}></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2" style={{ borderColor: 'var(--accent-strong)' }}></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2" style={{ borderColor: 'var(--accent-strong)' }}></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2" style={{ borderColor: 'var(--accent-strong)' }}></div>

      <div className="text-center space-y-10 relative z-10">
        {/* Holographic text effect orange */}
        <div className="relative">
          <h1 className="text-7xl font-bold tracking-[0.3em] select-none uppercase mb-2" style={{
            color: 'var(--accent)',
            textShadow: '0 0 10px var(--accent), 0 0 20px var(--accent), 0 0 30px var(--accent), 0 0 40px var(--accent-strong), 0 0 70px var(--accent-strong)'
          }}>
            LOADING
          </h1>
          <div className="absolute inset-0 text-7xl font-bold tracking-[0.3em] uppercase blur-[2px] opacity-70" style={{
            color: 'var(--accent-strong)',
            animation: 'glitch 2s infinite'
          }}>
            LOADING
          </div>
          <div className="absolute inset-0 text-7xl font-bold tracking-[0.3em] uppercase blur-[4px] opacity-50" style={{
            color: 'var(--accent)'
          }}>
            LOADING
          </div>
        </div>

        {/* Enhanced progress bar container purple */}
        <div className="w-96 space-y-4">
          {/* Progress bar frame */}
          <div className="relative">
            {/* Outer frame */}
            <div className="h-3 bg-black border-2 relative overflow-hidden" style={{ borderColor: 'var(--accent-strong)' }}>
              {/* Inner fill */}
              <div
                className="h-full relative"
                style={{ background: 'linear-gradient(to right, #f59e0b, #fb923c, #f59e0b)' }}
                style={{ width: `${progress}%`, transition: 'width 0.3s ease-out' }}
              >
                {/* Scanning line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 shadow-[0_0_20px_#f59e0b,0_0_40px_#ea580c]"></div>
              </div>
            </div>
            
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: 'var(--accent)' }}></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: 'var(--accent)' }}></div>
          </div>

          {/* Progress percentage with neon orange effect */}
          <div className="mt-6">
            <span className="text-6xl font-mono font-bold tabular-nums" style={{
              color: 'var(--accent)',
              textShadow: '0 0 10px var(--accent), 0 0 20px var(--accent-strong)'
            }}>
              {Math.floor(progress)}
            </span>
            <span className="text-4xl font-mono ml-2" style={{ color: 'var(--accent-strong)' }}>%</span>
          </div>

          {/* Scanning line effect orange */}
          <div className="relative w-96 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70">
            <div className="absolute inset-0 animate-pulse" style={{
              background: 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.5), transparent)',
              width: '100%'
            }}></div>
          </div>
        </div>

        {/* Advanced decorative elements orange */}
        <div className="flex justify-center gap-3">
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse shadow-[0_0_10px_#f59e0b,0_0_20px_#ea580c]" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_#f59e0b,0_0_20px_#ea580c]" style={{ animationDelay: '200ms' }}></div>
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse shadow-[0_0_10px_#f59e0b,0_0_20px_#ea580c]" style={{ animationDelay: '400ms' }}></div>
        </div>

        {/* Tech lines orange */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-orange-500 to-transparent opacity-30"></div>
          <div className="absolute top-0 left-3/4 w-px h-32 bg-gradient-to-b from-orange-500 to-transparent opacity-30"></div>
        </div>
      </div>
    </div>
  );
}

