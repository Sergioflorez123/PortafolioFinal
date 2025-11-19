'use client';

import { useContext } from 'react';
import { I18nContext } from '../contexts/I18nContext';
import { ThemeContext } from '../contexts/ThemeContext';
import ScrollAnimation from './ScrollAnimation';

// Componente para renderizar el logo de cada tecnología
function SkillLogo({ name, theme }: { name: string; theme: 'light' | 'dark' }) {
  const logos: Record<string, JSX.Element> = {
    HTML: (
      <svg viewBox="0 0 452 520" className="h-full w-full">
        <path fill="#E34F26" d="M41 460L0 0h451l-41 460-185 52" />
        <path fill="#EF652A" d="M226 472l149-41 35-394H226" />
        <path fill="#EBEBEB" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" />
        <path fill="#FFF" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
      </svg>
    ),
    CSS: (
      <svg viewBox="0 0 452 520" className="h-full w-full">
        <path fill="#0C73B8" d="M41 460L0 0h451l-41 460-185 52" />
        <path fill="#30A9DC" d="M226 472l149-41 35-394H226" />
        <path fill="#EBEBEB" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z" />
        <path fill="#FFF" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z" />
      </svg>
    ),
    JavaScript: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#F7DF1E] p-2">
        <span className="text-2xl sm:text-3xl font-bold text-black">JS</span>
      </div>
    ),
    React: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-full w-full">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
    'Next.js': (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
        <span className="text-2xl sm:text-3xl font-bold text-white">N</span>
      </div>
    ),
    'Node.js': (
      <svg viewBox="0 0 256 289" className="h-full w-full">
        <path fill="#539E43" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.26 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571z"/>
      </svg>
    ),
    Python: (
      <svg viewBox="0 0 256 255" className="h-full w-full">
        <defs>
          <linearGradient id="pyYellow" x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%">
            <stop offset="0%" stopColor="#387EB8"/>
            <stop offset="100%" stopColor="#366994"/>
          </linearGradient>
          <linearGradient id="pyBlue" x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%">
            <stop offset="0%" stopColor="#FFE052"/>
            <stop offset="100%" stopColor="#FFC331"/>
          </linearGradient>
        </defs>
        <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#pyYellow)"/>
        <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#pyBlue)"/>
      </svg>
    ),
    Django: (
      <svg viewBox="0 0 256 326" className="h-full w-full">
        <path fill="#0C4B33" d="M114.784 0h53.278v244.191c-27.29 5.162-47.38 7.193-69.117 7.193-64.99 0-99.085-29.37-99.085-85.67 0-54.493 36.912-89.96 94.333-89.96 8.877 0 15.636.85 20.591 2.544V0zm0 144.615c-4.702-2.014-10.024-2.73-17.095-2.73-25.758 0-40.61 15.93-40.61 43.81 0 27.116 14.17 41.58 39.646 41.58 5.674 0 9.953-.51 18.059-2.034V144.615zM253.29 76.312c-23.528 0-41.163 10.651-53.007 29.7l-3.363-23.528h-46.515v241.915l53.278-10.6.032-59.045c12.246 8.1 30.215 16.28 52.48 16.28 52.795 0 88.303-40.06 88.303-108.977 0-69.375-33.069-115.745-90.888-115.745h-.32zm-12.6 189.936c-11.774 0-18.727-4.17-23.528-10.043l-.128-87.178c5.29-6.43 13.136-11.06 23.666-11.06 24.045 0 40.643 26.536 40.643 53.948.032 28.16-16.083 54.334-40.652 54.334z"/>
      </svg>
    ),
    TypeScript: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#3178C6] p-2">
        <span className="text-2xl sm:text-3xl font-bold text-white">TS</span>
      </div>
    ),
    GitHub: (
      <svg viewBox="0 0 128 128" className="h-full w-full">
        <path fill="#181717" fillRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.3 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.34-7.125-20.34-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.543-3.902 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.705-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19 4.817-1.338 9.983-2.009 15.115-2.033 5.132.024 10.302.695 15.128 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.592 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.262-30.622 41.262-57.294C124.388 32.14 97.35 5.104 64 5.104z" clipRule="evenodd"/>
      </svg>
    ),
  };

  return logos[name] || <span>{name}</span>;
}

export default function About() {
  const { t } = useContext(I18nContext);
  const { theme } = useContext(ThemeContext);
  const skills = [
    { name: 'HTML', url: null },
    { name: 'CSS', url: null },
    { name: 'JavaScript', url: null },
    { name: 'React', url: null },
    { name: 'Next.js', url: null },
    { name: 'Node.js', url: null },
    { name: 'Python', url: null },
    { name: 'Django', url: null },
    { name: 'TypeScript', url: null },
    { name: 'GitHub', url: 'https://github.com/Sergioflorez123' },
  ];

  return (
    <section id="sobre-mi" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(234,88,12,0.08), transparent)' }}></div>

      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animationType="fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono uppercase tracking-wider mb-8 sm:mb-12" style={{
            color: theme === 'light' ? '#0a0a0a' : '#ffffff',
            textShadow: theme === 'light' 
              ? '0 0 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(234, 88, 12, 0.2)'
              : '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
          }}>
            {t('about.title')}
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:items-start">
          {/* Left side - About text */}
          <ScrollAnimation animationType="slide-left" className="space-y-6">
            <div className="text-base sm:text-lg leading-relaxed space-y-4" style={{ color: 'var(--foreground)' }}>
              {t('about.text').split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </ScrollAnimation>

          {/* Right side - Skills */}
          <ScrollAnimation animationType="slide-right" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-mono uppercase tracking-wider -mt-6 sm:-mt-8 mb-6 sm:mb-8" style={{
              color: theme === 'light' ? '#0a0a0a' : '#ffffff',
              textShadow: theme === 'light' 
                ? '0 0 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(234, 88, 12, 0.2)'
                : '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
            }}>
              {t('about.skills')}
            </h2>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => {
                const SkillCard = (
                  <div
                    key={skill.name}
                    className={`flex flex-col items-center justify-center gap-3 rounded-2xl p-4 sm:p-6 transition-shadow ${
                      skill.url ? 'cursor-pointer hover:shadow-md' : ''
                    }`}
                    style={{
                      background: theme === 'light' ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
                      border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: theme === 'light' 
                        ? '0 1px 3px rgba(0, 0, 0, 0.1)' 
                        : '0 2px 8px rgba(0, 0, 0, 0.3)'
                    }}
                    title={skill.name}
                  >
                    <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center">
                      <SkillLogo name={skill.name} theme={theme} />
                    </div>
                    <span 
                      className="text-base sm:text-lg md:text-xl font-semibold text-center"
                      style={{ 
                        color: theme === 'light' ? '#111827' : '#e5e7eb',
                        letterSpacing: '0.025em'
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                );

                return skill.url ? (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {SkillCard}
                  </a>
                ) : (
                  SkillCard
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
