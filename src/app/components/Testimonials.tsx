'use client';

import { useContext } from 'react';
import { I18nContext } from '../contexts/I18nContext';

// Componente de Avatar
function Avatar({ initials, gradient }: { initials: string; gradient: string }) {
  return (
    <div className="relative">
      {/* Resplandor exterior */}
      <div 
        className="absolute inset-0 rounded-full blur-md opacity-60 animate-pulse"
        style={{ background: gradient }}
      ></div>
      {/* Avatar principal */}
      <div 
        className="relative w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl border-2 border-white/20"
        style={{
          background: gradient,
          boxShadow: '0 0 30px rgba(245, 158, 11, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)'
        }}
      >
        {initials}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useContext(I18nContext);
  
  const testimonials = [
    {
      quote: t('testimonials.quote1'),
      client: t('testimonials.client1'),
      initials: 'JO',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)'
    },
    {
      quote: t('testimonials.quote2'),
      client: t('testimonials.client2'),
      initials: 'SS',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
    },
    {
      quote: t('testimonials.quote3'),
      client: t('testimonials.client3'),
      initials: 'WP',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    }
  ];

  return (
    <section id="testimonios" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-12" style={{
          textShadow: '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
        }}>
          {t('testimonials.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" 
              style={{ 
                background: 'var(--surface)', 
                border: '1px solid var(--surface-border)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Avatar centrado arriba */}
              <div className="flex justify-center mb-4">
                <Avatar initials={testimonial.initials} gradient={testimonial.gradient} />
              </div>
              
              {/* Contenido del testimonio */}
              <div className="text-center mb-6">
                <p className="text-sm leading-relaxed italic" style={{ color: 'var(--foreground)' }}>
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Nombre del cliente */}
              <div className="pt-4 border-t text-center" style={{ borderColor: 'var(--surface-border)' }}>
                <p className="font-semibold text-base font-mono" style={{ color: 'var(--accent)' }}>
                  {testimonial.client.replace('— ', '')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

