'use client';

import { useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('Inicio');

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'CV', href: '#cv' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-purple-500/30" style={{
      boxShadow: '0 2px 30px rgba(147, 51, 234, 0.3)'
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" style={{
              boxShadow: '0 0 15px #a855f7, 0 0 30px #a855f7, 0 0 45px #9333ea'
            }}></div>
            <span className="text-white font-semibold text-lg font-mono tracking-wider" style={{
              textShadow: '0 0 15px #ffffff'
            }}>SERGIO FLÓREZ</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name)}
                className={`text-sm font-medium font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeSection === item.name
                    ? 'text-purple-400'
                    : 'text-gray-400 hover:text-purple-400'
                }`}
                style={activeSection === item.name ? {
                  textShadow: '0 0 15px #a855f7, 0 0 25px #9333ea',
                  transform: 'scale(1.05)'
                } : {}}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
