import React from 'react';

const HelpyCareLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation bar */}
      <nav className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/api/placeholder/120/40" 
            alt="Imagicare Logo" 
            className="mr-2 h-8"
          />
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-blue-100">Inicio</a>
          <a href="#" className="text-white hover:text-blue-100">Productos</a>
          <a href="#" className="text-white hover:text-blue-100">Sobre Nosotros</a>
          <div className="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Main banner */}
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Esto es HelpyCare</h1>
            <p className="text-xl md:text-2xl mb-8">
              "Cuidamos de ti por qué cada oído cuenta"
            </p>
            <div className="flex space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition duration-200">
                Comprar ahora
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-2 rounded-md transition duration-200">
                Ver más
              </button>
            </div>
          </div>
          
          {/* Right content - Hearing aid image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="/api/placeholder/300/400" 
                alt="Audífono HelpyCare" 
                className="max-h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpyCareLanding;