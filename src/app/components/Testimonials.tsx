 'use client';
 
 export default function Testimonials() {
   return (
     <section id="testimonios" className="py-32 px-6 lg:px-8 relative">
       <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-12" style={{
           textShadow: '0 0 20px #14b8a6, 0 0 30px #10b981'
         }}>
           Testimonios
         </h2>
 
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="border border-teal-400/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm">
             <p className="text-gray-300">“Profesional, rápido y con excelente comunicación. El resultado superó nuestras expectativas.”</p>
             <p className="mt-4 text-teal-300 font-semibold">— Cliente A</p>
           </div>
           <div className="border border-teal-400/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm">
             <p className="text-gray-300">“Gran atención al detalle y enfoque en la experiencia del usuario.”</p>
             <p className="mt-4 text-teal-300 font-semibold">— Cliente B</p>
           </div>
         </div>
       </div>
     </section>
   );
 }

