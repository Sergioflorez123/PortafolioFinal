 'use client';
 
 import { createContext, useEffect, useMemo, useState } from 'react';
 
 type Theme = 'light' | 'dark';
 
 type ThemeContextType = {
   theme: Theme;
   toggleTheme: () => void;
 };
 
 export const ThemeContext = createContext<ThemeContextType>({
   theme: 'dark',
   toggleTheme: () => {},
 });
 
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const applySystemTheme = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    applySystemTheme();
    mediaQuery.addEventListener('change', applySystemTheme);

    return () => mediaQuery.removeEventListener('change', applySystemTheme);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
 
   const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
 
   return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
 }

