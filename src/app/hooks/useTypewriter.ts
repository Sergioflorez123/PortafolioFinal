'use client';

import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
  words: string[];
  speed?: number; // Velocidad entre palabras en ms
  delay?: number; // Delay inicial antes de empezar
}

export function useTypewriter({ words, speed = 150, delay = 0 }: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wordsString = words.join(' ');

  useEffect(() => {
    // Limpiar timers anteriores
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    // Reset
    setDisplayedText('');
    setIsComplete(false);
    
    if (words.length === 0) {
      return;
    }

    const currentIndexRef = { current: 0 };

    const startTyping = () => {
      intervalRef.current = setInterval(() => {
        if (currentIndexRef.current < words.length) {
          const newText = words.slice(0, currentIndexRef.current + 1).join(' ');
          setDisplayedText(newText);
          currentIndexRef.current++;
        } else {
          setIsComplete(true);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      }, speed);
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
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [wordsString, speed, delay, words.length]);

  return { displayedText, isComplete };
}

