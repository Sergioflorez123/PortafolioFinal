'use client';

import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <footer className="py-8 px-6 lg:px-8 border-t" style={{ borderColor: 'var(--surface-border)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-sm font-mono ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Sergio Antonio Flórez Salas. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{
              background: 'var(--accent)',
              boxShadow: '0 0 10px var(--accent)'
            }}></div>
            <p className={`text-sm font-mono ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
              Desarrollado con Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

