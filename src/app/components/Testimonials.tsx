'use client';

import { useContext } from 'react';
import { I18nContext } from '../contexts/I18nContext';

// Componente de Avatar 3D estilo cartoon
function Avatar3D({ type }: { type: 'jesika' | 'santiago' | 'wilson' }) {
  const avatars = {
    jesika: (
      <svg viewBox="0 0 200 200" className="w-24 h-24">
        {/* Fondo */}
        <rect width="200" height="200" fill="#60A5FA" rx="20"/>
        
        {/* Cuerpo - Suéter rosa */}
        <ellipse cx="100" cy="160" rx="50" ry="35" fill="#EC4899" opacity="0.9"/>
        <path d="M 60 140 Q 60 120 80 120 L 120 120 Q 140 120 140 140 L 140 160 Q 140 180 120 180 L 80 180 Q 60 180 60 160 Z" fill="#EC4899"/>
        
        {/* Cuello */}
        <ellipse cx="100" cy="130" rx="25" ry="15" fill="#FED7AA"/>
        
        {/* Cara */}
        <ellipse cx="100" cy="90" rx="45" ry="50" fill="#FED7AA"/>
        
        {/* Mejillas rosadas */}
        <ellipse cx="75" cy="100" rx="8" ry="10" fill="#FCA5A5" opacity="0.6"/>
        <ellipse cx="125" cy="100" rx="8" ry="10" fill="#FCA5A5" opacity="0.6"/>
        
        {/* Trenza izquierda */}
        <path d="M 55 70 Q 40 80 35 100 Q 30 120 35 140 Q 40 160 50 170" stroke="#1F2937" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <path d="M 50 100 Q 45 120 50 140" stroke="#1F2937" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="150" r="6" fill="#60A5FA"/>
        
        {/* Trenza derecha */}
        <path d="M 145 70 Q 160 80 165 100 Q 170 120 165 140 Q 160 160 150 170" stroke="#1F2937" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <path d="M 150 100 Q 155 120 150 140" stroke="#1F2937" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <circle cx="160" cy="150" r="6" fill="#60A5FA"/>
        
        {/* Cabello superior */}
        <ellipse cx="100" cy="60" rx="50" ry="25" fill="#1F2937"/>
        
        {/* Ojos */}
        <circle cx="85" cy="85" r="8" fill="#1F2937"/>
        <circle cx="115" cy="85" r="8" fill="#1F2937"/>
        <circle cx="87" cy="83" r="3" fill="#FFFFFF"/>
        <circle cx="117" cy="83" r="3" fill="#FFFFFF"/>
        
        {/* Cejas */}
        <path d="M 75 75 Q 85 70 90 75" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M 110 75 Q 120 70 125 75" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round"/>
        
        {/* Nariz */}
        <ellipse cx="100" cy="95" rx="3" ry="5" fill="#FCA5A5" opacity="0.4"/>
        
        {/* Boca - sonrisa suave */}
        <path d="M 90 105 Q 100 110 110 105" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        
        {/* Orejas */}
        <ellipse cx="60" cy="95" rx="6" ry="10" fill="#FED7AA"/>
        <ellipse cx="140" cy="95" rx="6" ry="10" fill="#FED7AA"/>
      </svg>
    ),
    santiago: (
      <svg viewBox="0 0 200 200" className="w-24 h-24">
        {/* Fondo */}
        <rect width="200" height="200" fill="#3B82F6" rx="20"/>
        
        {/* Cuerpo - Camisa azul */}
        <ellipse cx="100" cy="160" rx="50" ry="35" fill="#2563EB" opacity="0.9"/>
        <path d="M 60 140 Q 60 120 80 120 L 120 120 Q 140 120 140 140 L 140 160 Q 140 180 120 180 L 80 180 Q 60 180 60 160 Z" fill="#2563EB"/>
        
        {/* Cuello */}
        <ellipse cx="100" cy="130" rx="25" ry="15" fill="#FED7AA"/>
        
        {/* Cara */}
        <ellipse cx="100" cy="90" rx="45" ry="50" fill="#FED7AA"/>
        
        {/* Mejillas rosadas */}
        <ellipse cx="75" cy="100" rx="8" ry="10" fill="#FCA5A5" opacity="0.5"/>
        <ellipse cx="125" cy="100" rx="8" ry="10" fill="#FCA5A5" opacity="0.5"/>
        
        {/* Cabello corto */}
        <ellipse cx="100" cy="55" rx="50" ry="30" fill="#1F2937"/>
        <path d="M 50 60 Q 45 50 50 45 Q 55 40 60 45" stroke="#1F2937" strokeWidth="4" fill="#1F2937"/>
        <path d="M 150 60 Q 155 50 150 45 Q 145 40 140 45" stroke="#1F2937" strokeWidth="4" fill="#1F2937"/>
        <path d="M 70 50 Q 80 45 90 50 Q 100 45 110 50 Q 120 45 130 50" stroke="#1F2937" strokeWidth="5" fill="none" strokeLinecap="round"/>
        
        {/* Ojos */}
        <circle cx="85" cy="85" r="8" fill="#1F2937"/>
        <circle cx="115" cy="85" r="8" fill="#1F2937"/>
        <circle cx="87" cy="83" r="3" fill="#FFFFFF"/>
        <circle cx="117" cy="83" r="3" fill="#FFFFFF"/>
        
        {/* Cejas */}
        <path d="M 75 75 Q 85 70 90 75" stroke="#1F2937" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <path d="M 110 75 Q 120 70 125 75" stroke="#1F2937" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        
        {/* Nariz */}
        <ellipse cx="100" cy="95" rx="3" ry="5" fill="#FCA5A5" opacity="0.4"/>
        
        {/* Boca - sonrisa */}
        <path d="M 90 105 Q 100 112 110 105" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        
        {/* Orejas */}
        <ellipse cx="60" cy="95" rx="6" ry="10" fill="#FED7AA"/>
        <ellipse cx="140" cy="95" rx="6" ry="10" fill="#FED7AA"/>
      </svg>
    ),
    wilson: (
      <svg viewBox="0 0 200 200" className="w-24 h-24">
        {/* Fondo */}
        <rect width="200" height="200" fill="#10B981" rx="20"/>
        
        {/* Cuerpo - Camisa verde */}
        <ellipse cx="100" cy="160" rx="50" ry="35" fill="#059669" opacity="0.9"/>
        <path d="M 60 140 Q 60 120 80 120 L 120 120 Q 140 120 140 140 L 140 160 Q 140 180 120 180 L 80 180 Q 60 180 60 160 Z" fill="#059669"/>
        
        {/* Cuello */}
        <ellipse cx="100" cy="130" rx="25" ry="15" fill="#FED7AA"/>
        
        {/* Cara */}
        <ellipse cx="100" cy="90" rx="45" ry="50" fill="#FED7AA"/>
        
        {/* Mejillas rosadas */}
        <ellipse cx="75" cy="100" rx="8" ry="10" fill="#FCA5A5" opacity="0.5"/>
        <ellipse cx="125" cy="100" rx="8" ry="10" fill="#FCA5A5" opacity="0.5"/>
        
        {/* Cabello con ondas */}
        <ellipse cx="100" cy="55" rx="50" ry="30" fill="#1F2937"/>
        <path d="M 50 60 Q 45 50 50 45 Q 55 40 60 45 Q 65 50 70 45" stroke="#1F2937" strokeWidth="4" fill="#1F2937"/>
        <path d="M 150 60 Q 155 50 150 45 Q 145 40 140 45 Q 135 50 130 45" stroke="#1F2937" strokeWidth="4" fill="#1F2937"/>
        <path d="M 70 50 Q 80 45 90 52 Q 100 45 110 52 Q 120 45 130 50" stroke="#1F2937" strokeWidth="5" fill="none" strokeLinecap="round"/>
        
        {/* Ojos */}
        <circle cx="85" cy="85" r="8" fill="#1F2937"/>
        <circle cx="115" cy="85" r="8" fill="#1F2937"/>
        <circle cx="87" cy="83" r="3" fill="#FFFFFF"/>
        <circle cx="117" cy="83" r="3" fill="#FFFFFF"/>
        
        {/* Cejas */}
        <path d="M 75 75 Q 85 70 90 75" stroke="#1F2937" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <path d="M 110 75 Q 120 70 125 75" stroke="#1F2937" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        
        {/* Nariz */}
        <ellipse cx="100" cy="95" rx="3" ry="5" fill="#FCA5A5" opacity="0.4"/>
        
        {/* Boca - sonrisa amplia */}
        <path d="M 88 105 Q 100 115 112 105" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        
        {/* Orejas */}
        <ellipse cx="60" cy="95" rx="6" ry="10" fill="#FED7AA"/>
        <ellipse cx="140" cy="95" rx="6" ry="10" fill="#FED7AA"/>
      </svg>
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
              {/* Avatar 3D centrado arriba */}
              <div className="flex justify-center mb-4">
                <Avatar3D type={testimonial.avatarType} />
              </div>
              
              {/* Contenido del testimonio */}
              <div className="text-center mb-6">
                <p className="text-sm leading-relaxed italic" style={{ color: 'var(--foreground)' }}>
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Nombre del cliente */}
              <div className={`border-t text-center ${testimonial.avatarType === 'santiago' ? 'pt-5' : 'pt-4'}`} style={{ borderColor: 'var(--surface-border)' }}>
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

