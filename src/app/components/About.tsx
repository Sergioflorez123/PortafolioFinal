'use client';

import { useContext, useRef } from 'react';
import { I18nContext } from '../contexts/I18nContext';
import { ThemeContext } from '../contexts/ThemeContext';
import ScrollAnimation from './ScrollAnimation';

export default function About() {
  const { t } = useContext(I18nContext);
  const { theme } = useContext(ThemeContext);
  const rafRefs = useRef<Map<string, number | null>>(new Map());
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
            
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-6 perspective-1000">
              {skills.map((skill, index) => {
                const baseTransform = `perspective(1000px) rotateX(${index % 4 * 2 - 3}deg) rotateY(${index % 3 * 3 - 3}deg)`;
                
                const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                  const rafId = rafRefs.current.get(skill.name);
                  if (rafId) return; // Skip if animation frame is pending
                  
                  const element = e.currentTarget;
                  const mouseX = e.clientX;
                  const mouseY = e.clientY;
                  
                  const newRafId = requestAnimationFrame(() => {
                    if (!element) return;
                    const rect = element.getBoundingClientRect();
                    const x = mouseX - rect.left;
                    const y = mouseY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 5;
                    const rotateY = (centerX - x) / 5;
                    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1) translateZ(20px)`;
                    rafRefs.current.set(skill.name, null);
                  });
                  rafRefs.current.set(skill.name, newRafId);
                };
                
                const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
                  const rafId = rafRefs.current.get(skill.name);
                  if (rafId) {
                    cancelAnimationFrame(rafId);
                    rafRefs.current.set(skill.name, null);
                  }
                  e.currentTarget.style.transform = `${baseTransform} scale(1) translateZ(0px)`;
                };
                
                return (
                <div
                  key={skill.name}
                  className="group relative keycap-container-3d"
                  style={{
                    transform: baseTransform,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s ease-out',
                    willChange: 'transform'
                  }}
                  title={skill.name}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Top face - Logo */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center keycap-top"
                    style={{
                      background: skill.bgColor,
                      transform: 'translateZ(12px)',
                      clipPath: 'inset(0 round 8px)',
                      boxShadow: '0 0 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <div className="text-5xl font-bold text-white drop-shadow-2xl">
                      {skill.icon}
                    </div>
                  </div>

                  {/* Right face */}
                  <div 
                    className="absolute inset-0 keycap-right"
                    style={{
                      background: `linear-gradient(to left, rgba(0, 0, 0, 0.4), ${skill.bgColor})`,
                      transform: 'rotateY(90deg) translateZ(12px)',
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                    }}
                  ></div>

                  {/* Left face */}
                  <div 
                    className="absolute inset-0 keycap-left"
                    style={{
                      background: `linear-gradient(to right, rgba(0, 0, 0, 0.4), ${skill.bgColor})`,
                      transform: 'rotateY(-90deg) translateZ(12px)',
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                    }}
                  ></div>

                  {/* Bottom face */}
                  <div 
                    className="absolute inset-0 keycap-bottom"
                    style={{
                      background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), ${skill.bgColor})`,
                      transform: 'rotateX(90deg) translateZ(12px)',
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                    }}
                  ></div>

                  {/* Back face */}
                  <div 
                    className="absolute inset-0 keycap-back"
                    style={{
                      background: skill.bgColor,
                      transform: 'translateZ(-12px)',
                      clipPath: 'inset(0 round 8px)',
                      opacity: 0.3
                    }}
                  ></div>

                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, ${skill.bgColor}40, transparent 70%)`,
                      transform: 'translateZ(20px)',
                      pointerEvents: 'none',
                      filter: 'blur(20px)'
                    }}
                  ></div>
                </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
