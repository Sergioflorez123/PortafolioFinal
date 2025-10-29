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

            {/* Social Media Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/sergioflorez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                style={{
                  boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(236, 72, 153, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(236, 72, 153, 0.5)';
                }}
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.533.96-.896 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.534-1.379-.896-.42-.419-.69-.824-.9-1.38-.165-.42-.359-1.06-.413-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.421-2.234.21-.57.533-.96.896-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 transition-all duration-300"
                style={{
                  boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(34, 197, 94, 0.5)';
                }}
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.239-.39a9.85 9.85 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@sergioflorez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-black to-gray-800 hover:from-gray-900 hover:to-gray-700 transition-all duration-300"
                style={{
                  boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 0, 0, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
                }}
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/sergioflorez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
                style={{
                  boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(37, 99, 235, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(37, 99, 235, 0.5)';
                }}
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

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
