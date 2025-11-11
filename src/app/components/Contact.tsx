 'use client';
 
 import { useContext } from 'react';
 import { I18nContext } from '../contexts/I18nContext';
 
 export default function Contact() {
   const { t } = useContext(I18nContext);
   return (
     <section id="contacto" className="py-32 px-6 lg:px-8 relative">
       <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-12" style={{
           textShadow: '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
         }}>
           {t('contact.title')}
         </h2>
 
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <form className="space-y-4 rounded-lg p-6 backdrop-blur-sm" style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)' }}>
             <input className="w-full bg-transparent rounded-md px-4 py-3 text-[color:var(--foreground)] placeholder-gray-500 focus:outline-none" placeholder={t('contact.form.name')} style={{ border: '1px solid var(--surface-border)' }} />
             <input className="w-full bg-transparent rounded-md px-4 py-3 text-[color:var(--foreground)] placeholder-gray-500 focus:outline-none" placeholder={t('contact.form.email')} type="email" style={{ border: '1px solid var(--surface-border)' }} />
             <textarea className="w-full bg-transparent rounded-md px-4 py-3 text-[color:var(--foreground)] placeholder-gray-500 focus:outline-none" placeholder={t('contact.form.message')} rows={5} style={{ border: '1px solid var(--surface-border)' }} />
             <button type="submit" className="px-6 py-3 text-white rounded-md transition" style={{ background: 'linear-gradient(to right, #f59e0b, #ea580c)', border: '1px solid var(--surface-border)' }}>{t('contact.form.send')}</button>
           </form>
 
           <div className="space-y-4">
             <a href="mailto:sergio@example.com" className="block rounded-lg p-4 transition" style={{ border: '1px solid var(--surface-border)', color: 'var(--accent)' }}>sergio@example.com</a>
             <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="block rounded-lg p-4 transition" style={{ border: '1px solid var(--surface-border)', color: 'var(--accent)' }}>WhatsApp</a>
             <a href="https://www.linkedin.com/in/sergioflorez" target="_blank" rel="noopener noreferrer" className="block rounded-lg p-4 transition" style={{ border: '1px solid var(--surface-border)', color: 'var(--accent)' }}>LinkedIn</a>
           </div>
         </div>
       </div>
     </section>
   );
 }

