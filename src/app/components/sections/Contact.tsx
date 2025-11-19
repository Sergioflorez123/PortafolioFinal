'use client';

import { useContext } from 'react';
import { I18nContext } from '../../contexts/I18nContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import ScrollAnimation from '../ui/ScrollAnimation';

export default function Contact() {
  const { t } = useContext(I18nContext);
  const { theme } = useContext(ThemeContext);
   return (
     <section id="contacto" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
       <div className="max-w-7xl mx-auto">
        <ScrollAnimation animationType="fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono uppercase tracking-wider mb-8 sm:mb-12" style={{
            color: theme === 'light' ? '#0a0a0a' : '#ffffff',
            textShadow: theme === 'light' 
              ? '0 0 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(234, 88, 12, 0.2)'
              : '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
          }}>
            {t('contact.title')}
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 gap-10">
          <ScrollAnimation animationType="fade-in-up">
            <div className="space-y-4">
              <div className="rounded-lg p-4 backdrop-blur-sm" style={{ 
                background: 'var(--surface)', 
                border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid var(--surface-border)',
                boxShadow: theme === 'light' ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none'
              }}>
                <p className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>Sergio Flórez</p>
              </div>
              <a href="mailto:sergioflorez043@gmail.com" className="block rounded-lg p-4 transition" style={{ 
                border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid var(--surface-border)', 
                color: 'var(--accent)',
                background: theme === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
                boxShadow: theme === 'light' ? '0 1px 3px rgba(0, 0, 0, 0.08)' : 'none'
              }}>sergioflorez043@gmail.com</a>
              <a href="https://github.com/Sergioflorez123" target="_blank" rel="noopener noreferrer" className="block rounded-lg p-4 transition" style={{ 
                border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid var(--surface-border)', 
                color: 'var(--accent)',
                background: theme === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
                boxShadow: theme === 'light' ? '0 1px 3px rgba(0, 0, 0, 0.08)' : 'none'
              }}>GitHub</a>
              <a href="https://www.linkedin.com/in/sergio-a-florez-florez-2919b8366/" target="_blank" rel="noopener noreferrer" className="block rounded-lg p-4 transition" style={{ 
                border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid var(--surface-border)', 
                color: 'var(--accent)',
                background: theme === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
                boxShadow: theme === 'light' ? '0 1px 3px rgba(0, 0, 0, 0.08)' : 'none'
              }}>LinkedIn</a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
   );
 }

