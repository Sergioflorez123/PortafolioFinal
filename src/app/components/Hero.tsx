'use client';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 relative">
      {/* Neon grid pattern purple only */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.15) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-mono uppercase tracking-wider" style={{
                textShadow: '0 0 20px #a855f7, 0 0 40px #a855f7, 0 0 60px #9333ea, 0 0 80px #9333ea'
              }}>
                Desarrollador de Software
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Especializado en crear soluciones innovadoras con tecnologías modernas. 
                Apasionado por el código limpio y la experiencia del usuario.
              </p>
            </div>

            {/* CTA Button with neon purple effect */}
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white font-mono uppercase tracking-wider bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:to-purple-400 transition-all duration-300 border-2 border-purple-400"
              style={{
                boxShadow: '0 0 30px #a855f7, 0 0 50px #9333ea, inset 0 0 40px rgba(147, 51, 234, 0.4)'
              }}>
              <span className="relative z-10">Ver proyectos</span>
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              {/* Animated glow */}
              <div className="absolute inset-0 bg-purple-500 opacity-50 blur-xl group-hover:opacity-75 transition-opacity"></div>
            </button>

            {/* Decorative neon dots purple */}
            <div className="flex gap-2 pt-4">
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" style={{
                boxShadow: '0 0 15px #a855f7, 0 0 25px #9333ea'
              }}></div>
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" style={{
                boxShadow: '0 0 15px #a855f7, 0 0 25px #9333ea',
                animationDelay: '0.2s'
              }}></div>
              <div className="w-3 h-3 rounded-full bg-purple-300 animate-pulse" style={{
                boxShadow: '0 0 15px #a855f7, 0 0 25px #9333ea',
                animationDelay: '0.4s'
              }}></div>
            </div>
          </div>

          {/* Right - Profile Image with neon purple effect */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer neon glow purple */}
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 rounded-full blur-3xl opacity-70 group-hover:opacity-90 transition duration-300 animate-pulse"></div>
              
              {/* Inner circle with neon border */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-purple-400/60 bg-gradient-to-br from-purple-700 to-purple-900 p-2" style={{
                boxShadow: '0 0 40px #a855f7, 0 0 70px #9333ea, inset 0 0 40px rgba(147, 51, 234, 0.4)'
              }}>
                {/* Placeholder for profile image */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/40 font-mono">S</div>
                </div>
              </div>

              {/* Animated neon rings */}
              <div className="absolute inset-0 border-4 border-purple-400/40 rounded-full animate-ping"></div>
              <div className="absolute inset-0 border-4 border-purple-500/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Neon background elements purple */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{
        boxShadow: '0 0 150px #a855f7'
      }}></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/15 blur-3xl animate-pulse" style={{
        boxShadow: '0 0 150px #9333ea',
        animationDelay: '1s'
      }}></div>
    </section>
  );
}
