'use client';

import { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { I18nContext } from '../contexts/I18nContext';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('Inicio');
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, setLang, t } = useContext(I18nContext);

  const navItems = [
    { name: t('nav.home'), href: '#inicio' },
    { name: t('nav.about'), href: '#sobre-mi' },
    { name: t('nav.projects'), href: '#proyectos' },
    { name: t('nav.testimonials'), href: '#testimonios' },
    { name: t('nav.education'), href: '#educacion' },
    { name: t('nav.contact'), href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md" style={{
      background: 'var(--nav-bg)',
      borderBottom: '1px solid var(--surface-border)',
      boxShadow: '0 2px 30px rgba(234, 88, 12, 0.25)'
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full animate-pulse" style={{
              background: 'var(--accent)',
              boxShadow: '0 0 15px var(--accent), 0 0 30px var(--accent-strong)'
            }}></div>
            <span className="text-white font-semibold text-lg font-mono tracking-wider" style={{
              textShadow: '0 0 15px #ffffff'
            }}>SERGIO FLÓREZ</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name)}
                className={`text-sm font-medium font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeSection === item.name
                    ? 'text-amber-300'
                    : 'text-gray-300 hover:text-amber-300'
                }`}
                style={activeSection === item.name ? {
                  textShadow: '0 0 15px var(--accent), 0 0 25px var(--accent-strong)',
                  transform: 'scale(1.05)'
                } : {}}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Controles: Tema e Idioma */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-9 h-9 rounded-md transition"
              title={t('nav.toggleTheme')}
              style={{
                color: 'var(--accent)',
                border: '1px solid var(--surface-border)',
                background: 'transparent'
              }}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21.64 13a9 9 0 01-11.31-11.31A9 9 0 1021.64 13z"/></svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.48 14.32l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM1 13h3v-2H1v2zm19 0h3v-2h-3v2zM4.95 19.07l1.41 1.41 1.8-1.79-1.41-1.41-1.8 1.79zM17.66 6.34l1.41-1.41-1.79-1.8-1.41 1.41 1.79 1.8zM12 4a1 1 0 011-1h0a1 1 0 00-1-1 1 1 0 010 2zm0 16a1 1 0 011 1h0a1 1 0 00-1 1 1 1 0 010-2zm0-13a5 5 0 100 10 5 5 0 000-10z"/></svg>
              )}
            </button>

            <select
              aria-label="Cambiar idioma"
              value={lang}
              onChange={(e) => setLang(e.target.value as 'es' | 'en')}
              className="bg-transparent rounded-md px-2 py-1 text-sm font-mono uppercase tracking-wider transition"
              style={{
                color: 'var(--accent)',
                border: '1px solid var(--surface-border)'
              }}
            >
              <option className="bg-black text-white" value="es">ES</option>
              <option className="bg-black text-white" value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
