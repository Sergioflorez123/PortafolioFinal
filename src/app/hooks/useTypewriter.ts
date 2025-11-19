'use client';

import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
  words: string[];
  speed?: number; // Velocidad entre caracteres en ms
  delay?: number; // Delay inicial antes de empezar
}

export function useTypewriter({ words, speed = 50, delay = 0 }: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const wordsString = words.join(' ');
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    // Limpiar timers anteriores
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    
    // Reset
    setDisplayedText('');
    setIsComplete(false);
    lastUpdateRef.current = 0;
    
    if (words.length === 0 || wordsString.length === 0) {
      return;
    }

    let currentIndex = 0;
    let lastTime = 0;

    const animate = (timestamp: number) => {
      if (lastTime === 0) {
        lastTime = timestamp;
      }

      const elapsed = timestamp - lastTime;

      if (elapsed >= speed) {
        if (currentIndex < wordsString.length) {
          // Agregar el siguiente carácter, incluyendo espacios
          setDisplayedText(wordsString.slice(0, currentIndex + 1));
          currentIndex++;
          lastTime = timestamp;
        } else {
          setIsComplete(true);
          return;
        }
      }

      if (currentIndex < wordsString.length) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    const startTyping = () => {
      lastTime = 0;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (delay > 0) {
      timeoutRef.current = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [wordsString, speed, delay]);

  return { displayedText, isComplete };
}

