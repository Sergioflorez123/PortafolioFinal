 'use client';
 
 import { useContext } from 'react';
 import { I18nContext } from '../contexts/I18nContext';
 
 export default function Testimonials() {
   const { t } = useContext(I18nContext);
   return (
     <section id="testimonios" className="py-32 px-6 lg:px-8 relative">
       <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-12" style={{
           textShadow: '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
         }}>
           {t('testimonials.title')}
         </h2>
 
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="rounded-lg p-6 backdrop-blur-sm" style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)' }}>
             <p className="text-gray-300">“Profesional, rápido y con excelente comunicación. El resultado superó nuestras expectativas.”</p>
             <p className="mt-4 font-semibold" style={{ color: 'var(--accent)' }}>— Cliente A</p>
           </div>
           <div className="rounded-lg p-6 backdrop-blur-sm" style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)' }}>
             <p className="text-gray-300">“Gran atención al detalle y enfoque en la experiencia del usuario.”</p>
             <p className="mt-4 font-semibold" style={{ color: 'var(--accent)' }}>— Cliente B</p>
           </div>
         </div>
       </div>
     </section>
   );
 }

