'use client';

import { useContext } from 'react';
import { I18nContext } from '../../contexts/I18nContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import ScrollAnimation from '../ui/ScrollAnimation';

// Componente de Avatar con imagen real
function Avatar3D({ type }: { type: 'jesika' | 'santiago' | 'wilson' }) {
  const avatars = {
    jesika: (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-pink-300/60 shadow-lg bg-gradient-to-br from-pink-400 to-pink-600">
        <img 
          src="/jesika.jpg" 
          alt="Jesika Valentina Oviedo"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
    ),
    santiago: (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-blue-300/60 shadow-lg bg-gradient-to-br from-blue-400 to-blue-600">
        <img 
          src="/santiago.jpg" 
          alt="Santiago"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
    ),
    wilson: (
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-green-300/60 shadow-lg bg-gradient-to-br from-green-400 to-green-600">
        <img 
          src="/wilson.jpg" 
          alt="Wilson Alejandro Pinta"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
    )
  };

  return (
    <div className="relative">
      {/* Resplandor exterior */}
      <div 
        className="absolute inset-0 rounded-2xl blur-lg opacity-50 animate-pulse"
        style={{ 
          background: type === 'jesika' ? 'linear-gradient(135deg, #EC4899, #F59E0B)' :
                     type === 'santiago' ? 'linear-gradient(135deg, #3B82F6, #2563EB)' :
                     'linear-gradient(135deg, #10B981, #059669)'
        }}
      ></div>
      {/* Avatar SVG */}
      <div className="relative drop-shadow-2xl">
        {avatars[type]}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useContext(I18nContext);
  const { theme } = useContext(ThemeContext);
  
  const testimonials = [
    {
      quote: t('testimonials.quote1'),
      client: t('testimonials.client1'),
      avatarType: 'jesika' as const
    },
    {
      quote: t('testimonials.quote2'),
      client: t('testimonials.client2'),
      avatarType: 'santiago' as const
    },
    {
      quote: t('testimonials.quote3'),
      client: t('testimonials.client3'),
      avatarType: 'wilson' as const
    }
  ];

  return (
    <section id="testimonios" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animationType="fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono uppercase tracking-wider mb-8 sm:mb-12" style={{
            color: theme === 'light' ? '#0a0a0a' : '#ffffff',
            textShadow: theme === 'light' 
              ? '0 0 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(234, 88, 12, 0.2)'
              : '0 0 20px var(--accent), 0 0 30px var(--accent-strong)'
          }}>
            {t('testimonials.title')}
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} animationType="fade-in-up" delay={index * 150}>
            <div 
              key={index}
              className="rounded-lg p-4 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col h-full" 
              style={{ 
                background: 'var(--surface)', 
                border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid var(--surface-border)',
                boxShadow: theme === 'light' 
                  ? '0 4px 20px rgba(0, 0, 0, 0.15)' 
                  : '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Avatar 3D centrado arriba */}
              <div className="flex justify-center mb-4 sm:mb-5">
                <Avatar3D type={testimonial.avatarType} />
              </div>
              
              {/* Contenido del testimonio */}
              <div className="text-center mb-4 sm:mb-6 flex-grow flex flex-col justify-center">
                <p className="text-xs sm:text-sm leading-relaxed italic" style={{ color: 'var(--foreground)' }}>
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Nombre del cliente */}
              <div className="border-t text-center pt-3 sm:pt-4 mt-auto" style={{ borderColor: 'var(--surface-border)' }}>
                <p className="font-semibold text-sm sm:text-base font-mono" style={{ color: 'var(--accent)' }}>
                  {testimonial.client.replace('— ', '')}
                </p>
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

