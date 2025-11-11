 'use client';
 
 export default function Projects() {
   return (
     <section id="proyectos" className="py-32 px-6 lg:px-8 relative">
       <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-12" style={{
           textShadow: '0 0 20px #14b8a6, 0 0 30px #10b981'
         }}>
           Proyectos
         </h2>
 
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="border border-teal-400/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm">
             <h3 className="text-xl font-semibold text-teal-300">Gestión de Tareas</h3>
             <p className="text-sm text-gray-400 mt-1">React, Node.js, MongoDB</p>
             <p className="text-gray-300 mt-3">App para gestionar tareas con autenticación y UI moderna.</p>
           </div>
           <div className="border border-teal-400/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm">
             <h3 className="text-xl font-semibold text-teal-300">Reservas Restaurante</h3>
             <p className="text-sm text-gray-400 mt-1">Java, Spring Boot, MySQL</p>
             <p className="text-gray-300 mt-3">Sistema de reservas online con gestión de disponibilidad.</p>
           </div>
           <div className="border border-teal-400/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm">
             <h3 className="text-xl font-semibold text-teal-300">API Inventario</h3>
             <p className="text-sm text-gray-400 mt-1">Python, Django, PostgreSQL</p>
             <p className="text-gray-300 mt-3">API RESTful para inventarios y productos.</p>
           </div>
         </div>
       </div>
     </section>
   );
 }

