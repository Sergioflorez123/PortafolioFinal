'use client';

import { useContext } from 'react';
import { I18nContext } from '../../contexts/I18nContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function Education() {
  const { t } = useContext(I18nContext);
  const { theme } = useContext(ThemeContext);
   return (
     <section id="educacion" className="py-32 px-6 lg:px-8 relative">
       {/* Background glow effect */}
       <div className="absolute inset-0" style={{ 
         background: theme === 'light' 
           ? 'linear-gradient(to bottom, transparent, rgba(245,158,11,0.08), transparent)' 
           : 'linear-gradient(to bottom, transparent, rgba(234,88,12,0.08), transparent)' 
       }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
       <ScrollAnimation animationType="fade-in-up">
          <h2
            className="text-3xl sm:text-4xl font-bold font-mono uppercase tracking-wider mb-8 sm:mb-12"
            style={{
            color: theme === 'light' ? '#0a0a0a' : '#ffffff',
            textShadow: theme === 'light' 
              ? '0 0 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(234, 88, 12, 0.2)'
              : '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
            }}
          >
            {t('education.title')}
          </h2>
        </ScrollAnimation>
 
         <ScrollAnimation animationType="fade-in-up">
        <div className="rounded-lg p-6 sm:p-8 backdrop-blur-sm" style={{ 
         background: theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'var(--surface)', 
         border: theme === 'light' ? '2px solid rgba(245, 158, 11, 0.5)' : '1px solid var(--surface-border)',
         boxShadow: theme === 'light' 
           ? '0 6px 28px rgba(245, 158, 11, 0.3), 0 2px 10px rgba(0, 0, 0, 0.12)' 
           : 'none'
       }}>
          <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>{t('education.degree')}</h3>
          <p className="mt-1" style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af' }}>
            {t('education.institution')} | {t('education.period')}
          </p>
         <p className="mt-2" style={{ color: 'var(--foreground)' }}>
           {t('education.studentLabel')}: <span className="font-semibold" style={{ color: 'var(--accent)' }}>{t('education.studentName')}</span>
         </p>
        </div>
        </ScrollAnimation>
      </div>
    </section>
   );
 }

