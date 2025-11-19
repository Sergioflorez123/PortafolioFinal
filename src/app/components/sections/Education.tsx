'use client';

import Image from 'next/image';
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
          <div className="flex justify-center mb-10">
            <div
              className="relative rounded-full overflow-hidden border-4 shadow-xl"
              style={{
                width: '220px',
                height: '220px',
                borderColor: theme === 'light' ? 'rgba(245,158,11,0.6)' : 'var(--accent)',
                boxShadow:
                  theme === 'light'
                    ? '0 10px 35px rgba(245,158,11,0.35)'
                    : '0 10px 35px rgba(0,0,0,0.6)',
              }}
            >
              <Image
                src="/sergio.jpg"
                alt="Sergio Antonio Florez Salas"
                fill
                sizes="(max-width: 640px) 220px, 260px"
                priority
                className="object-cover"
              />
            </div>
          </div>
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
           <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>Ingeniería en Software</h3>
           <p className="mt-1" style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af' }}>Universidad Cooperativa de Colombia | 2025 - Actualidad</p>
          <p className="mt-2" style={{ color: 'var(--foreground)' }}>Estudiante: <span className="font-semibold" style={{ color: 'var(--accent)' }}>Sergio Antonio Florez Salas</span></p>
        </div>
        </ScrollAnimation>
      </div>
    </section>
   );
 }

