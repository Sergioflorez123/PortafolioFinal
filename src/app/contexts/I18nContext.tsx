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
     'hero.ctaProjects': 'Ver proyectos',
     'hero.ctaCV': 'Descargar CV',
     'about.title': 'Sobre mí',
     'about.text': 'Soy un apasionado desarrollador de software con experiencia en aplicaciones web y móviles. Enfocado en código limpio, escalable y una gran experiencia de usuario.',
     'about.skills': 'Habilidades',
     'projects.title': 'Proyectos',
     'projects.taskManager.title': 'Gestión de Tareas',
     'projects.taskManager.desc': 'Aplicación para gestionar tareas con autenticación y una interfaz moderna.',
     'projects.restaurant.title': 'Reservas Restaurante',
     'projects.restaurant.desc': 'Sistema de reservas online con gestión de disponibilidad.',
     'projects.inventory.title': 'API Inventario',
     'projects.inventory.desc': 'API RESTful para inventarios y productos.',
     'testimonials.title': 'Testimonios',
     'testimonials.quote1': '“Profesional, rápido y con excelente comunicación. El resultado superó nuestras expectativas.”',
     'testimonials.quote2': '“Gran atención al detalle y enfoque en la experiencia del usuario.”',
     'testimonials.clientA': '— Cliente A',
     'testimonials.clientB': '— Cliente B',
     'education.title': 'Educación',
     'contact.title': 'Contacto',
     'contact.form.name': 'Tu nombre',
     'contact.form.email': 'Email',
     'contact.form.message': 'Mensaje',
     'contact.form.send': 'Enviar',
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
     'hero.ctaProjects': 'See projects',
     'hero.ctaCV': 'Download CV',
     'about.title': 'About me',
     'about.text': 'I am a passionate software developer experienced in web and mobile apps. I focus on clean, scalable code and great user experiences.',
     'about.skills': 'Skills',
     'projects.title': 'Projects',
     'projects.taskManager.title': 'Task Manager',
     'projects.taskManager.desc': 'Task management app with authentication and a modern UI.',
     'projects.restaurant.title': 'Restaurant Reservations',
     'projects.restaurant.desc': 'Online reservation system with availability management.',
     'projects.inventory.title': 'Inventory API',
     'projects.inventory.desc': 'RESTful API for inventories and products.',
     'testimonials.title': 'Testimonials',
     'testimonials.quote1': '“Professional, fast and great communication. The result exceeded expectations.”',
     'testimonials.quote2': '“Great attention to detail and focus on user experience.”',
     'testimonials.clientA': '— Client A',
     'testimonials.clientB': '— Client B',
     'education.title': 'Education',
     'contact.title': 'Contact',
     'contact.form.name': 'Your name',
     'contact.form.email': 'Email',
     'contact.form.message': 'Message',
     'contact.form.send': 'Send',
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

