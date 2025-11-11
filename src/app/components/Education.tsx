 'use client';
 
 import { useContext } from 'react';
 import { I18nContext } from '../contexts/I18nContext';
 
 export default function Education() {
   const { t } = useContext(I18nContext);
   return (
     <section id="educacion" className="py-32 px-6 lg:px-8 relative">
       <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-12" style={{
           textShadow: '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
         }}>
           {t('education.title')}
         </h2>
 
         <div className="rounded-lg p-8 backdrop-blur-sm" style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)' }}>
           <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>Ingeniería en Software</h3>
           <p className="text-gray-400 mt-1">Universidad Cooperativa de Colombia | 2020 - Actualidad</p>
           <p className="text-gray-300 mt-2">Estudiante: <span className="font-semibold" style={{ color: 'var(--accent)' }}>Sergio Antonio Florez Salas</span></p>
           <p className="text-gray-300">Promedio: <span className="font-semibold" style={{ color: 'var(--accent)' }}>4.3/5.0</span></p>
         </div>
       </div>
     </section>
   );
 }

