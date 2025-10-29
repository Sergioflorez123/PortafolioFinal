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
                  className="group relative keycap-wrapper"
                  style={{
                    transform: `rotateX(${index % 2 === 0 ? '2deg' : '-2deg'}) rotateY(${index % 3 === 0 ? '3deg' : index % 3 === 1 ? '-3deg' : '0deg'})`,
                    transformStyle: 'preserve-3d'
                  }}
                  title={skill.name}
                >
                  {/* Keycap with isometric 3D effect */}
                  <div
                    className="keycap isometric-3d relative cursor-pointer"
                    style={{
                      background: skill.bgColor,
                      transform: 'rotateX(0deg) translateY(0px)',
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transformStyle: 'preserve-3d'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'rotateX(12deg) translateY(-8px) translateZ(10px)';
                      e.currentTarget.style.filter = 'brightness(1.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'rotateX(0deg) translateY(0px)';
                      e.currentTarget.style.filter = 'brightness(1)';
                    }}
                  >
                    {/* Top face - Solo logo */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center p-2"
                      style={{
                        background: skill.bgColor,
                        zIndex: 3
                      }}
                    >
                      <div className="text-5xl font-bold text-white drop-shadow-lg">
                        {skill.icon}
                      </div>
                    </div>

                    {/* Right face - side */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))`,
                        clipPath: 'polygon(100% 0, 100% 100%, 85% 100%)',
                        zIndex: 1
                      }}
                    ></div>

                    {/* Bottom face */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))`,
                        clipPath: 'polygon(0 100%, 85% 100%, 100% 100%)',
                        zIndex: 1
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
