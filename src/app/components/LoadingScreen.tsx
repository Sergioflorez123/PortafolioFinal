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
          setTimeout(() => setIsLoaded(true), 300);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="text-center space-y-8">
        {/* Glitch text effect */}
        <div className="relative">
          <h1 className="text-5xl font-bold text-blue-400 tracking-wider select-none">
            LOADING
          </h1>
          <div className="absolute inset-0 text-5xl font-bold text-blue-600 blur-sm opacity-50 animate-pulse">
            LOADING
          </div>
        </div>

        {/* Progress bar container */}
        <div className="w-80">
          <div className="h-2 bg-black/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Progress percentage */}
          <div className="mt-4">
            <span className="text-4xl font-mono font-bold text-blue-400 tabular-nums">
              {Math.floor(progress)}
            </span>
            <span className="text-2xl font-mono text-blue-600">%</span>
          </div>
        </div>

        {/* Scanning line effect */}
        <div className="relative w-80 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse [animation-delay:0ms]"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:200ms]"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse [animation-delay:400ms]"></div>
        </div>
      </div>
    </div>
  );
}

