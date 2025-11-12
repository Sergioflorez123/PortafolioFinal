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
    'about.text': 'Soy un desarrollador web apasionado por crear experiencias digitales modernas, rápidas y funcionales. Me gusta combinar diseño intuitivo con código eficiente para construir proyectos que se sientan naturales al usarse.\n\nTrabajo con tecnologías como HTML, CSS, JavaScript, React y Python, siempre buscando que cada detalle aporte al rendimiento y la experiencia del usuario.\n\nMe motiva aprender constantemente, experimentar con nuevas herramientas y llevar cada proyecto más allá de lo esperado. Creo que el desarrollo no solo trata de escribir código, sino de dar vida a ideas que inspiren y conecten con las personas.',
    'about.skills': 'Habilidades',
     'projects.title': 'Proyectos',
     'projects.taskManager.title': 'Gestión de Tareas',
     'projects.taskManager.desc': 'Aplicación para gestionar tareas con autenticación y una interfaz moderna.',
     'projects.restaurant.title': 'Reservas Restaurante',
     'projects.restaurant.desc': 'Sistema de reservas online con gestión de disponibilidad.',
     'projects.inventory.title': 'API Inventario',
     'projects.inventory.desc': 'API RESTful para inventarios y productos.',
    'testimonials.title': 'Testimonios',
    'testimonials.quote1': 'Doy constancia de la destacada capacidad de Sergio Antonio Flórez Salas en el ámbito de la programación. Su habilidad para transformar ideas complejas en herramientas funcionales es admirable. Tuve la oportunidad de usar uno de sus desarrollos académicos enfocado en la representación visual de funciones, el cual facilitó enormemente la comprensión de conceptos avanzados. Su trabajo combina precisión técnica con una clara orientación a la enseñanza, lo que demuestra su compromiso con la innovación educativa.',
    'testimonials.quote2': 'Deseo resaltar las habilidades de Sergio Antonio Flórez Salas, un programador con una visión práctica y un enfoque orientado a resultados. Sus proyectos evidencian una gran comprensión de la lógica computacional y la optimización de procesos. He utilizado algunas de sus herramientas para análisis y cálculos matemáticos, y puedo afirmar que su desempeño supera las expectativas tanto en diseño como en funcionalidad.',
    'testimonials.quote3': 'Certifico el excelente desempeño de Sergio Antonio Flórez Salas en el área de desarrollo de software. Su creatividad y dominio técnico se reflejan en aplicaciones que integran cálculo, visualización y automatización con gran precisión. Los resultados de su trabajo no solo son útiles en el entorno académico, sino que también aportan valor práctico en el aprendizaje de materias complejas. Sin duda, es un referente de dedicación y profesionalismo.',
    'testimonials.client1': '— Jesika Valentina Oviedo',
    'testimonials.client2': '— Santiago Jhostin Salas',
    'testimonials.client3': '— Wilson Alejandro Pinta',
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
    'about.text': 'I am a web developer passionate about creating modern, fast, and functional digital experiences. I like to combine intuitive design with efficient code to build projects that feel natural to use.\n\nI work with technologies like HTML, CSS, JavaScript, React, and Python, always seeking that every detail contributes to performance and user experience.\n\nI am motivated to constantly learn, experiment with new tools, and take each project beyond what is expected. I believe that development is not just about writing code, but about bringing ideas to life that inspire and connect with people.',
    'about.skills': 'Skills',
     'projects.title': 'Projects',
     'projects.taskManager.title': 'Task Manager',
     'projects.taskManager.desc': 'Task management app with authentication and a modern UI.',
     'projects.restaurant.title': 'Restaurant Reservations',
     'projects.restaurant.desc': 'Online reservation system with availability management.',
     'projects.inventory.title': 'Inventory API',
     'projects.inventory.desc': 'RESTful API for inventories and products.',
    'testimonials.title': 'Testimonials',
    'testimonials.quote1': 'I attest to the outstanding ability of Sergio Antonio Flórez Salas in the field of programming. His ability to transform complex ideas into functional tools is admirable. I had the opportunity to use one of his academic developments focused on the visual representation of functions, which greatly facilitated the understanding of advanced concepts. His work combines technical precision with a clear teaching orientation, demonstrating his commitment to educational innovation.',
    'testimonials.quote2': 'I wish to highlight the skills of Sergio Antonio Flórez Salas, a programmer with a practical vision and a results-oriented approach. His projects demonstrate a great understanding of computational logic and process optimization. I have used some of his tools for analysis and mathematical calculations, and I can affirm that his performance exceeds expectations both in design and functionality.',
    'testimonials.quote3': 'I certify the excellent performance of Sergio Antonio Flórez Salas in the software development area. His creativity and technical mastery are reflected in applications that integrate calculation, visualization and automation with great precision. The results of his work are not only useful in the academic environment, but also provide practical value in learning complex subjects. Without a doubt, he is a reference of dedication and professionalism.',
    'testimonials.client1': '— Jesika Valentina Oviedo',
    'testimonials.client2': '— Santiago Jhostin Salas',
    'testimonials.client3': '— Wilson Alejandro Pinta',
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

