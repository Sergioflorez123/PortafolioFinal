 'use client';
 
 import { useContext } from 'react';
 import { I18nContext } from '../contexts/I18nContext';
 
 export default function Projects() {
   const { t } = useContext(I18nContext);
   return (
     <section id="proyectos" className="py-32 px-6 lg:px-8 relative">
       <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-12" style={{
           textShadow: '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
         }}>
           {t('projects.title')}
         </h2>
 
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="rounded-lg p-6 backdrop-blur-sm" style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)' }}>
             <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>{t('projects.taskManager.title')}</h3>
             <p className="text-sm text-gray-400 mt-1">React, Node.js, MongoDB</p>
             <p className="mt-3" style={{ color: 'var(--foreground)' }}>{t('projects.taskManager.desc')}</p>
           </div>
           <div className="rounded-lg p-6 backdrop-blur-sm" style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)' }}>
             <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>{t('projects.restaurant.title')}</h3>
             <p className="text-sm text-gray-400 mt-1">Java, Spring Boot, MySQL</p>
             <p className="mt-3" style={{ color: 'var(--foreground)' }}>{t('projects.restaurant.desc')}</p>
           </div>
           <div className="rounded-lg p-6 backdrop-blur-sm" style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)' }}>
             <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>{t('projects.inventory.title')}</h3>
             <p className="text-sm text-gray-400 mt-1">Python, Django, PostgreSQL</p>
             <p className="mt-3" style={{ color: 'var(--foreground)' }}>{t('projects.inventory.desc')}</p>
           </div>
         </div>
       </div>
     </section>
   );
 }

