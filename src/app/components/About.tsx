'use client';

export default function About() {
  const skills = [
    { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-amber-600' },
    { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-600' },
    { name: 'SQL', icon: '💾', color: 'from-cyan-500 to-blue-600' },
    { name: 'Angular', icon: '🅰️', color: 'from-red-500 to-pink-600' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-600 to-gray-800' },
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
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
            
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative overflow-hidden rounded-lg border-2 border-purple-500/30 bg-black/40 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    boxShadow: '0 4px 6px rgba(168, 85, 247, 0.1)'
                  }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative p-6 text-center space-y-3">
                    <div className="text-5xl animate-bounce group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-white font-semibold text-lg font-mono">{skill.name}</h3>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-lg transition-all duration-300" style={{
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
                  }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
