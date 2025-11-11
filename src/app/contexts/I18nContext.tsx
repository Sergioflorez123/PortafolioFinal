 'use client';
 
 import { createContext, useMemo, useState, useEffect } from 'react';
 
 type Lang = 'es' | 'en';
 
 type Dictionary = {
   [K in Lang]: Record<string, string>;
 };
 
 type I18nContextType = {
   lang: Lang;
   setLang: (l: Lang) => void;
   t: (key: string) => string;
 };
 
 const DICT: Dictionary = {
   es: {
     'nav.home': 'Inicio',
     'nav.about': 'Sobre mí',
     'nav.projects': 'Proyectos',
     'nav.testimonials': 'Testimonios',
     'nav.education': 'Educación',
     'nav.contact': 'Contacto',
     'nav.downloadCV': 'Descargar CV',
     'nav.toggleTheme': 'Cambiar tema',
     'hero.title': 'Desarrollador de Software',
     'hero.subtitle': 'Especializado en crear soluciones innovadoras con tecnologías modernas.',
   },
   en: {
     'nav.home': 'Home',
     'nav.about': 'About',
     'nav.projects': 'Projects',
     'nav.testimonials': 'Testimonials',
     'nav.education': 'Education',
     'nav.contact': 'Contact',
     'nav.downloadCV': 'Download CV',
     'nav.toggleTheme': 'Toggle theme',
     'hero.title': 'Software Developer',
     'hero.subtitle': 'Focused on building innovative solutions with modern technologies.',
   },
 };
 
 export const I18nContext = createContext<I18nContextType>({
   lang: 'es',
   setLang: () => {},
   t: (key: string) => DICT['es'][key] ?? key,
 });
 
 export function I18nProvider({ children }: { children: React.ReactNode }) {
   const [lang, setLang] = useState<Lang>('es');
 
   useEffect(() => {
     const stored = typeof window !== 'undefined' ? (localStorage.getItem('lang') as Lang | null) : null;
     if (stored) setLang(stored);
   }, []);
 
   useEffect(() => {
     if (typeof window !== 'undefined') {
       localStorage.setItem('lang', lang);
     }
   }, [lang]);
 
   const t = (key: string) => DICT[lang][key] ?? key;
 
   const value = useMemo(() => ({ lang, setLang, t }), [lang]);
 
   return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
 }

