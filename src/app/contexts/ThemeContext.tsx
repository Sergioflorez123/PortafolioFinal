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
     const stored = typeof window !== 'undefined' ? (localStorage.getItem('theme') as Theme | null) : null;
     if (stored) setTheme(stored);
   }, []);
 
   useEffect(() => {
     if (typeof document !== 'undefined') {
       document.documentElement.setAttribute('data-theme', theme);
       localStorage.setItem('theme', theme);
     }
   }, [theme]);
 
   const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
 
   const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
 
   return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
 }

