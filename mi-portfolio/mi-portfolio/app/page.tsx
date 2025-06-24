"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";

export default function Page() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Cargar preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <>
      {/* Navbar */}
      <Navbar dark={dark} setDark={setDark} />
      
      {/* Contenido principal */}
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        {/* Sección Inicio */}
        <section id="inicio" className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
              Hello World, My Name Is
              <span className="block text-blue-600 dark:text-blue-400 mt-2">
                Lucas Del Valle
              </span>
            </h1>
            
            <div className="mx-auto w-fit p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl transition-colors duration-300 mb-8">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>
            
            

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#proyectos"
                className="px-8 py-3 border-2 border-gray-700 dark:border-gray-100 text-gray-700 dark:text-gray-100 dark:bg-gray-100 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 shadow-lg"
              >
                Ver mis proyectos
              </a>
              <a 
                href="#contacto"
                className="px-8 py-3 border-2 border-blue-800 dark:border-blue-400 text-blue-800 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors duration-300"
              >
                Contáctame
              </a>
            </div>
          </div>
        </section>

        {/* Secciones placeholder para los links de la navbar */}
        <section id="sobre-mi" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sobre mí</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              I am a software engineering student with a passion for building web applications.
              Currently studying at UADE and learning modern web technologies.
            </p>
          </div>
        </section>

        <section id="proyectos" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Proyectos</h2>
            <p className="text-gray-700 dark:text-gray-300">Aquí van a ir tus proyectos</p>

          </div>
        </section>

        <section id="habilidades" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Habilidades</h2>
            <p className="text-gray-700 dark:text-gray-300">Tus tecnologías y skills</p>
          </div>
        </section>

        <section id="contacto" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contacto</h2>
            <p className="text-gray-700 dark:text-gray-300">Formulario de contacto</p>
          </div>
        </section>
      </main>
    </>
  );
}