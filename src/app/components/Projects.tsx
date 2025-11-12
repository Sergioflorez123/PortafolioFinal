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
 
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <ScrollAnimation animationType="fade-in-up" delay={0}>
             <div className="group rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" 
               style={{ 
                 background: 'var(--surface)', 
                 border: '1px solid var(--surface-border)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
               }}>
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                   ⚛️
                 </div>
                 <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>{t('projects.taskManager.title')}</h3>
               </div>
               <p className="text-sm mt-1 mb-3" style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af' }}>React, Node.js, MongoDB</p>
               <p className="mt-3 mb-4" style={{ color: 'var(--foreground)' }}>{t('projects.taskManager.desc')}</p>
               <div className="flex gap-2 flex-wrap">
                 <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>React</span>
                 <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>Node.js</span>
                 <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>MongoDB</span>
               </div>
             </div>
           </ScrollAnimation>
           <ScrollAnimation animationType="fade-in-up" delay={150}>
             <div className="group rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" 
               style={{ 
                 background: 'var(--surface)', 
                 border: '1px solid var(--surface-border)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
               }}>
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                   🍽️
                 </div>
                 <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>{t('projects.restaurant.title')}</h3>
               </div>
               <p className="text-sm mt-1 mb-3" style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af' }}>Java, Spring Boot, MySQL</p>
               <p className="mt-3 mb-4" style={{ color: 'var(--foreground)' }}>{t('projects.restaurant.desc')}</p>
               <div className="flex gap-2 flex-wrap">
                 <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>Java</span>
                 <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>Spring Boot</span>
                 <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>MySQL</span>
               </div>
             </div>
           </ScrollAnimation>
           <ScrollAnimation animationType="fade-in-up" delay={300}>
             <div className="group rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" 
               style={{ 
                 background: 'var(--surface)', 
                 border: '1px solid var(--surface-border)',
                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
               }}>
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl" style={{ background: 'rgba(245, 158, 11, 0.2)' }}>
                   📦
                 </div>
                 <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>{t('projects.inventory.title')}</h3>
               </div>
               <p className="text-sm mt-1 mb-3" style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af' }}>Python, Django, PostgreSQL</p>
               <p className="mt-3 mb-4" style={{ color: 'var(--foreground)' }}>{t('projects.inventory.desc')}</p>
               <div className="flex gap-2 flex-wrap">
                 <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>Python</span>
                 <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>Django</span>
                 <span className="px-2 py-1 text-xs rounded" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)' }}>PostgreSQL</span>
               </div>
             </div>
           </ScrollAnimation>
         </div>
       </div>
     </section>
   );
 }

