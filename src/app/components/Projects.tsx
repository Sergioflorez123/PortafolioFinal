'use client';

import { useContext } from 'react';
import { I18nContext } from '../contexts/I18nContext';
import { ThemeContext } from '../contexts/ThemeContext';
import ScrollAnimation from './ScrollAnimation';

export default function Projects() {
  const { t } = useContext(I18nContext);
  const { theme } = useContext(ThemeContext);
   return (
     <section id="proyectos" className="py-32 px-6 lg:px-8 relative">
       <div className="max-w-7xl mx-auto">
        <ScrollAnimation animationType="fade-in-up">
          <h2 className="text-4xl font-bold font-mono uppercase tracking-wider mb-12" style={{
            color: theme === 'light' ? '#0a0a0a' : '#ffffff',
            textShadow: theme === 'light' 
              ? '0 0 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(234, 88, 12, 0.2)'
              : '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
          }}>
            {t('projects.title')}
          </h2>
        </ScrollAnimation>
 
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <ScrollAnimation animationType="fade-in-up" delay={0}>
             <div className="group rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
               style={{ 
                 background: 'var(--surface)', 
                 border: '1px solid var(--surface-border)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
               }}>
               {/* Imagen de portada */}
               <div className="relative w-full h-48 overflow-hidden">
                 <img 
                   src="/ticket.png" 
                   alt="Ticket Boarding Pass"
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     const parent = target.parentElement;
                     if (parent) {
                       parent.style.background = 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)';
                       parent.innerHTML = '<div class="flex items-center justify-center h-full text-white text-4xl">✈️</div>';
                     }
                   }}
                 />
               </div>
               <div className="p-6">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                     ✈️
                   </div>
                   <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>{t('projects.ticket.title')}</h3>
                 </div>
                 <p className="text-sm mt-1 mb-3" style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af' }}>Next.js, Tailwind CSS</p>
                 <p className="mt-3 mb-4 text-sm" style={{ color: 'var(--foreground)' }}>{t('projects.ticket.desc')}</p>
                 <div className="flex gap-2 flex-wrap mb-4">
                   <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>Next.js</span>
                   <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>Tailwind CSS</span>
                 </div>
                 {/* Botones de acción */}
                 <div className="flex gap-3 mt-4">
                   <a
                     href="https://ticket-mg4v.vercel.app/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                     style={{ 
                       background: 'rgba(245, 158, 11, 0.15)', 
                       color: 'var(--accent)',
                       border: '1px solid rgba(245, 158, 11, 0.3)'
                     }}
                     onClick={(e) => e.stopPropagation()}
                   >
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                     </svg>
                     <span className="text-sm font-medium">Ver Demo</span>
                   </a>
                   <a
                     href="https://github.com/Sergioflorez123/ticket.git"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                     style={{ 
                       background: 'rgba(245, 158, 11, 0.15)', 
                       color: 'var(--accent)',
                       border: '1px solid rgba(245, 158, 11, 0.3)'
                     }}
                     onClick={(e) => e.stopPropagation()}
                   >
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                       <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                     </svg>
                   </a>
                 </div>
               </div>
             </div>
           </ScrollAnimation>
           <ScrollAnimation animationType="fade-in-up" delay={150}>
             <div className="group rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
               style={{ 
                 background: 'var(--surface)', 
                 border: '1px solid var(--surface-border)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
               }}>
               {/* Imagen de portada */}
               <div className="relative w-full h-48 overflow-hidden">
                 <img 
                   src="/paginanoticias.png" 
                   alt="Página de Noticias"
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     const parent = target.parentElement;
                     if (parent) {
                       parent.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
                       parent.innerHTML = '<div class="flex items-center justify-center h-full text-white text-4xl">📰</div>';
                     }
                   }}
                 />
               </div>
               <div className="p-6">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                     📰
                   </div>
                   <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>{t('projects.news.title')}</h3>
                 </div>
                 <p className="text-sm mt-1 mb-3" style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af' }}>Next.js, Tailwind CSS</p>
                 <p className="mt-3 mb-4 text-sm" style={{ color: 'var(--foreground)' }}>{t('projects.news.desc')}</p>
                 <div className="flex gap-2 flex-wrap mb-4">
                   <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>Next.js</span>
                   <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>Tailwind CSS</span>
                 </div>
                 {/* Botones de acción */}
                 <div className="flex gap-3 mt-4">
                   <a
                     href="https://trabajo-tailwind.vercel.app/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                     style={{ 
                       background: 'rgba(245, 158, 11, 0.15)', 
                       color: 'var(--accent)',
                       border: '1px solid rgba(245, 158, 11, 0.3)'
                     }}
                     onClick={(e) => e.stopPropagation()}
                   >
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                     </svg>
                     <span className="text-sm font-medium">Ver Demo</span>
                   </a>
                   <a
                     href="https://github.com/Sergioflorez123/trabajo-tailwind"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                     style={{ 
                       background: 'rgba(245, 158, 11, 0.15)', 
                       color: 'var(--accent)',
                       border: '1px solid rgba(245, 158, 11, 0.3)'
                     }}
                     onClick={(e) => e.stopPropagation()}
                   >
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                       <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                     </svg>
                   </a>
                 </div>
               </div>
             </div>
           </ScrollAnimation>
         </div>
       </div>
     </section>
   );
 }

