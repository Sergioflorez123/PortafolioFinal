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
       <div className="max-w-7xl mx-auto">
        <ScrollAnimation animationType="fade-in-up">
          <h2 className="text-4xl font-bold font-mono uppercase tracking-wider mb-12" style={{
            color: theme === 'light' ? '#0a0a0a' : '#ffffff',
            textShadow: theme === 'light' 
              ? '0 0 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(234, 88, 12, 0.2)'
              : '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
          }}>
            {t('education.title')}
          </h2>
        </ScrollAnimation>
 
         <ScrollAnimation animationType="fade-in-up">
        <div className="rounded-lg p-8 backdrop-blur-sm" style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)' }}>
           <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>Ingeniería en Software</h3>
           <p className="mt-1" style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af' }}>Universidad Cooperativa de Colombia | 2025 - Actualidad</p>
          <p className="mt-2" style={{ color: 'var(--foreground)' }}>Estudiante: <span className="font-semibold" style={{ color: 'var(--accent)' }}>Sergio Antonio Florez Salas</span></p>
        </div>
        </ScrollAnimation>
      </div>
    </section>
   );
 }

