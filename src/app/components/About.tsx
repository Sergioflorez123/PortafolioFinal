'use client';

export default function About() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - About text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-8" style={{
              textShadow: '0 0 20px #a855f7, 0 0 30px #9333ea'
            }}>
              Sobre mí
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Soy un apasionado desarrollador de software y estudiante de ingeniería con experiencia en el desarrollo de aplicaciones web y móviles. Me especializo en crear soluciones tecnológicas innovadoras que resuelven problemas reales del mundo. Mi enfoque se centra en escribir código limpio, escalable y eficiente, siempre buscando las mejores prácticas en el desarrollo de software. Me gusta trabajar en equipo y estoy constantemente aprendiendo nuevas tecnologías para mantenerme actualizado en este campo tan dinámico. Mi objetivo es contribuir al crecimiento de organizaciones mediante el desarrollo de software de alta calidad.
            </p>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-8" style={{
              textShadow: '0 0 20px #a855f7, 0 0 30px #9333ea'
            }}>
              Habilidades
            </h2>
            
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-6 perspective-1000">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative keycap-container-3d"
                  style={{
                    transform: `perspective(1000px) rotateX(${index % 4 * 2 - 3}deg) rotateY(${index % 3 * 3 - 3}deg)`,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.5s ease-out'
                  }}
                  title={skill.name}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 5;
                    const rotateY = (centerX - x) / 5;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1) translateZ(20px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${index % 4 * 2 - 3}deg) rotateY(${index % 3 * 3 - 3}deg) scale(1) translateZ(0px)`;
                  }}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
