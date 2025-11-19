 'use client';
 
import { createContext, useMemo, useState, useEffect } from 'react';
import rawContent from '../i18n/content.json';

type Lang = 'es' | 'en';

type Dictionary = {
  [K in Lang]: Record<string, string>;
};

type ProjectLinkKey = 'ticket' | 'news' | 'calculator';

type ProjectLinks = Record<ProjectLinkKey, { demo: string; repo: string }>;

type LinksConfig = {
  social: {
    instagram: string;
    github: string;
    tiktok: string;
    linkedin: string;
  };
  projects: ProjectLinks;
  contact: {
    email: string;
  };
  assets: {
    cv: string;
  };
};
 
 type I18nContextType = {
   lang: Lang;
   setLang: (l: Lang) => void;
   t: (key: string) => string;
 };
 
const content = rawContent as {
  translations: Dictionary;
  links: LinksConfig;
};

const DICT: Dictionary = content.translations;

export const LINKS: LinksConfig = content.links;
 
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

