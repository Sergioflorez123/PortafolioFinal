 'use client';
 
 export default function Education() {
   return (
     <section id="educacion" className="py-32 px-6 lg:px-8 relative">
       <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-12" style={{
           textShadow: '0 0 20px #14b8a6, 0 0 30px #10b981'
         }}>
           Educación
         </h2>
 
         <div className="border border-teal-400/30 rounded-lg p-8 bg-black/40 backdrop-blur-sm">
           <h3 className="text-xl font-semibold text-teal-300">Ingeniería en Software</h3>
           <p className="text-gray-400 mt-1">Universidad Cooperativa de Colombia | 2020 - Actualidad</p>
           <p className="text-gray-300 mt-2">Estudiante: <span className="text-teal-300 font-semibold">Sergio Antonio Florez Salas</span></p>
           <p className="text-gray-300">Promedio: <span className="text-teal-300 font-semibold">4.3/5.0</span></p>
         </div>
       </div>
     </section>
   );
 }

