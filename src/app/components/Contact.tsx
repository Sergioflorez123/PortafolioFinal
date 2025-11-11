 'use client';
 
 export default function Contact() {
   return (
     <section id="contacto" className="py-32 px-6 lg:px-8 relative">
       <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-12" style={{
           textShadow: '0 0 20px #14b8a6, 0 0 30px #10b981'
         }}>
           Contacto
         </h2>
 
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <form className="space-y-4 border border-teal-400/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm">
             <input className="w-full bg-transparent border border-teal-400/30 rounded-md px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-teal-300" placeholder="Tu nombre" />
             <input className="w-full bg-transparent border border-teal-400/30 rounded-md px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-teal-300" placeholder="Email" type="email" />
             <textarea className="w-full bg-transparent border border-teal-400/30 rounded-md px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-teal-300" placeholder="Mensaje" rows={5} />
             <button type="submit" className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-md border border-teal-300/60 transition">Enviar</button>
           </form>
 
           <div className="space-y-4">
             <a href="mailto:sergio@example.com" className="block border border-teal-400/30 rounded-lg p-4 text-teal-300 hover:bg-teal-500/10 transition">sergio@example.com</a>
             <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="block border border-teal-400/30 rounded-lg p-4 text-teal-300 hover:bg-teal-500/10 transition">WhatsApp</a>
             <a href="https://www.linkedin.com/in/sergioflorez" target="_blank" rel="noopener noreferrer" className="block border border-teal-400/30 rounded-lg p-4 text-teal-300 hover:bg-teal-500/10 transition">LinkedIn</a>
           </div>
         </div>
       </div>
     </section>
   );
 }

