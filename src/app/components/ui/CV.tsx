'use client';

import { useState } from 'react';

export default function CV() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section id="cv" className="py-32 px-6 lg:px-8 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white font-mono uppercase tracking-wider mb-16 text-center" style={{
          textShadow: '0 0 20px #a855f7, 0 0 30px #9333ea'
        }}>
          CV
        </h2>

        <div className="space-y-12">
          {/* Habilidades Técnicas */}
          <div className="border border-purple-500/30 rounded-lg p-8 bg-black/40 backdrop-blur-sm" style={{
            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.2)'
          }}>
            <button
              onClick={() => toggleSection('skills')}
              className="w-full flex items-center justify-between group"
            >
              <h3 className="text-3xl font-bold text-white font-mono uppercase tracking-wider flex items-center gap-3" style={{
                textShadow: '0 0 15px #a855f7'
              }}>
                <span>Habilidades</span>
                <span className="text-cyan-400 hover:text-purple-400 transition-colors">
                  <a href="#inicio" className="text-sm font-normal">Inicio</a>
                </span>
              </h3>
              <svg
                className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${activeSection === 'skills' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeSection === 'skills' && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {/* Lenguajes */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-purple-400 font-mono uppercase tracking-wider">Lenguajes de programación</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> JavaScript (React)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Python
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> C/C++
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> SQL
                    </li>
                  </ul>
                </div>

                {/* Frameworks */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-purple-400 font-mono uppercase tracking-wider">Frameworks y herramientas</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> React
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Node.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Spring Boot
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Django
                    </li>
                  </ul>
                </div>

                {/* Bases de datos */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-purple-400 font-mono uppercase tracking-wider">Bases de datos</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> MySQL
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> MongoDB
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Firebase
                    </li>
                  </ul>
                </div>

                {/* Control de versiones */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-purple-400 font-mono uppercase tracking-wider">Control de versiones</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Git
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> GitHub / GitLab
                    </li>
                  </ul>
                </div>

                {/* Metodologías */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-purple-400 font-mono uppercase tracking-wider">Metodologías</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Agile
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> SCRUM
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> DevOps
                    </li>
                  </ul>
                </div>

                {/* Otros */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-purple-400 font-mono uppercase tracking-wider">Otros</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Docker
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> APIs RESTful
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Linux
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Educación */}
          <div className="border border-purple-500/30 rounded-lg p-8 bg-black/40 backdrop-blur-sm" style={{
            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.2)'
          }}>
            <button
              onClick={() => toggleSection('education')}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-3xl font-bold text-white font-mono uppercase tracking-wider" style={{
                textShadow: '0 0 15px #a855f7'
              }}>
                Educación
              </h3>
              <svg
                className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${activeSection === 'education' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeSection === 'education' && (
              <div className="mt-8 space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-purple-400">Ingeniería en Software</h4>
                  <p className="text-gray-400">Universidad Cooperativa de Colombia | 2020 - Actualidad</p>
                  <p className="text-gray-300 font-mono">Estudiante: <span className="text-purple-400 font-bold">Sergio Antonio Florez Salas</span></p>
                  <p className="text-gray-300 font-mono">Promedio: <span className="text-purple-400 font-bold">4.3/5.0</span></p>
                </div>
              </div>
            )}
          </div>

          {/* Proyectos */}
          <div className="border border-purple-500/30 rounded-lg p-8 bg-black/40 backdrop-blur-sm" style={{
            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.2)'
          }}>
            <button
              onClick={() => toggleSection('projects')}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-3xl font-bold text-white font-mono uppercase tracking-wider" style={{
                textShadow: '0 0 15px #a855f7'
              }}>
                Proyectos
              </h3>
              <svg
                className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${activeSection === 'projects' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeSection === 'projects' && (
              <div className="mt-8 space-y-8 animate-fade-in">
                <div className="border-l-4 border-purple-400 pl-6 space-y-2">
                  <h4 className="text-xl font-semibold text-purple-400">Aplicación Web de Gestión de Tareas</h4>
                  <p className="text-sm text-gray-400 font-mono">Tecnologías: React, Node.js, MongoDB</p>
                  <p className="text-gray-300">Creación de una aplicación para gestionar tareas diarias, donde los usuarios pueden agregar, eliminar y marcar tareas como completadas. Implementé autenticación de usuarios con JWT y una interfaz de usuario moderna con React.</p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6 space-y-2">
                  <h4 className="text-xl font-semibold text-purple-400">Sistema de Reservas para Restaurante</h4>
                  <p className="text-sm text-gray-400 font-mono">Tecnologías: Java, Spring Boot, MySQL</p>
                  <p className="text-gray-300">Desarrollo de un sistema de reservas para un restaurante, permitiendo a los usuarios hacer reservas online, ver disponibilidad y gestionar sus datos personales.</p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6 space-y-2">
                  <h4 className="text-xl font-semibold text-purple-400">API RESTful para Gestión de Inventario</h4>
                  <p className="text-sm text-gray-400 font-mono">Tecnologías: Python, Django, PostgreSQL</p>
                  <p className="text-gray-300">Creación de una API RESTful que permite gestionar inventarios, agregar nuevos productos, modificar y eliminar artículos. Esta API interactúa con una base de datos PostgreSQL.</p>
                </div>
              </div>
            )}
          </div>

          {/* Experiencia */}
          <div className="border border-purple-500/30 rounded-lg p-8 bg-black/40 backdrop-blur-sm" style={{
            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.2)'
          }}>
            <button
              onClick={() => toggleSection('experience')}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-3xl font-bold text-white font-mono uppercase tracking-wider" style={{
                textShadow: '0 0 15px #a855f7'
              }}>
                Experiencia
              </h3>
              <svg
                className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${activeSection === 'experience' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeSection === 'experience' && (
              <div className="mt-8 space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-purple-400">Desarrollador Web Interno</h4>
                  <p className="text-sm text-gray-400 font-mono">Freelance | Febrero 2023 - Actualidad</p>
                  <p className="text-gray-300">Desarrollo de pequeñas aplicaciones web para clientes locales. Me encargo de la creación de interfaces de usuario en React y la integración de servicios backend en Node.js. Trabajo con clientes para implementar soluciones sencillas y efectivas.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-purple-400">Asistente en el Departamento de Tecnología</h4>
                  <p className="text-sm text-gray-400 font-mono">Universidad Cooperativa de Colombia | Agosto 2022 - Enero 2023</p>
                  <p className="text-gray-300">Como parte de una pasantía, asistí en el desarrollo de proyectos internos para la universidad, incluyendo la mejora de interfaces en sitios web existentes y la automatización de ciertos procesos administrativos con Python.</p>
                </div>
              </div>
            )}
          </div>

          {/* Certificaciones */}
          <div className="border border-purple-500/30 rounded-lg p-8 bg-black/40 backdrop-blur-sm" style={{
            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.2)'
          }}>
            <button
              onClick={() => toggleSection('certifications')}
              className="w-full flex items-center justify-between"
            >
              <h3 className="text-3xl font-bold text-white font-mono uppercase tracking-wider" style={{
                textShadow: '0 0 15px #a855f7'
              }}>
                Certificaciones
              </h3>
              <svg
                className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${activeSection === 'certifications' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeSection === 'certifications' && (
              <div className="mt-8 space-y-4 animate-fade-in">
                <div className="border-l-4 border-purple-400 pl-6 space-y-1">
                  <h4 className="text-xl font-semibold text-purple-400">Desarrollo de Aplicaciones Web con React</h4>
                  <p className="text-gray-400 font-mono">Coursera | 2023</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-6 space-y-1">
                  <h4 className="text-xl font-semibold text-purple-400">Fundamentos de Python</h4>
                  <p className="text-gray-400 font-mono">Udemy | 2023</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
