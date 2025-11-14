'use client';

import { useContext } from 'react';
import { I18nContext } from '../contexts/I18nContext';
import { ThemeContext } from '../contexts/ThemeContext';
import ScrollAnimation from './ScrollAnimation';

export default function About() {
  const { t } = useContext(I18nContext);
  const { theme } = useContext(ThemeContext);
  const skills = [
    { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-amber-600', bgColor: '#fbbf24' },
    { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-600', bgColor: '#dc2626' },
    { name: 'SQL', icon: '💾', color: 'from-cyan-500 to-blue-600', bgColor: '#06b6d4' },
    { name: 'Angular', icon: '🅰️', color: 'from-red-500 to-pink-600', bgColor: '#ef4444' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-600 to-gray-800', bgColor: '#1f2937' },
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-500', bgColor: '#0891b2' },
    { name: 'JavaScript', icon: '△', color: 'from-yellow-400 to-yellow-600', bgColor: '#facc15' },
    { name: 'Node.js', icon: '⬢', color: 'from-green-500 to-green-700', bgColor: '#22c55e' },
    { name: 'MySQL', icon: '🐬', color: 'from-blue-500 to-blue-700', bgColor: '#2563eb' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-800', bgColor: '#16a34a' },
  ];

  return (
    <section id="sobre-mi" className="py-32 px-6 lg:px-8 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(234,88,12,0.08), transparent)' }}></div>

      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animationType="fade-in-up">
          <h2 className="text-4xl font-bold font-mono uppercase tracking-wider mb-12" style={{
            color: theme === 'light' ? '#0a0a0a' : '#ffffff',
            textShadow: theme === 'light' 
              ? '0 0 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(234, 88, 12, 0.2)'
              : '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
          }}>
            {t('about.title')}
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - About text */}
          <ScrollAnimation animationType="slide-left" className="space-y-6">
            <div className="text-lg leading-relaxed space-y-4" style={{ color: 'var(--foreground)' }}>
              {t('about.text').split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </ScrollAnimation>

          {/* Right side - Skills */}
          <ScrollAnimation animationType="slide-right" className="space-y-6">
            <h2 className="text-4xl font-bold font-mono uppercase tracking-wider mb-8" style={{
              color: theme === 'light' ? '#0a0a0a' : '#ffffff',
              textShadow: theme === 'light' 
                ? '0 0 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(234, 88, 12, 0.2)'
                : '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
            }}>
              {t('about.skills')}
            </h2>
            
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative flex items-center justify-center rounded-lg p-4"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--surface-border)'
                  }}
                  title={skill.name}
                >
                  <span className="text-4xl" style={{ color: 'var(--foreground)' }}>
                    {skill.icon}
                  </span>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
