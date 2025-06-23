"use client";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Page() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark"); // <--- Cambia aquí
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <main className="min-h-screen dark:bg-gray-900 bg-gray-100 ">
      <h1 className="text-center text-2xl font-bold mb-4">Hello World, My Name Is Lucas Del Valle</h1>
      <div className="mx-auto w-fit p-4 bg-gray-200 dark:bg-gray-800 rounded-xl transition-colors duration-300">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={400}
          height={400}
        />
      </div>
      <div className="flex justify-center mt-6">
          <button 
            onClick={() => setDark((d) => !d)}
            className="mx-auto mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
            View Projects {dark ? "dia" : "noche"}
          </button>
      </div>
      <p className="text-center mt-4">
        I am a software engineer with a passion for building web applications.
        This is my portfolio website, built with Next.js and Tailwind CSS.
    </p>
  </main>
  );
}
