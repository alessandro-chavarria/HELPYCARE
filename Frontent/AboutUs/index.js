import React from 'react';

export default function SobreNosotros() {
  return (
    <div className="flex flex-col h-screen bg-blue-50">
      {/* Barra de navegación */}
      <nav className="flex items-center bg-blue-600 text-white p-2">
        <div className="font-bold text-lg mr-8">WaveCommerce</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-200">Marcas</a>
          <a href="#" className="hover:text-blue-200">Ventas</a>
          <a href="#" className="hover:text-blue-200">Proveedores</a>
          <a href="#" className="hover:text-blue-200">Envíos</a>
          <a href="#" className="hover:text-blue-200">Productos</a>
          <a href="#" className="hover:text-blue-200 font-bold">Sobre Nosotros</a>
        </div>
        <div className="ml-auto">
          <button className="bg-blue-500 p-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Contenido principal */}
      <div className="flex-1 flex flex-col p-6">
        {/* Tarjetas informativas */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="text-gray-800 text-sm mb-4">
              Descubre soluciones tecnológicas de vanguardia para agilizar tus procesos empresariales. Nuestras herramientas están diseñadas para optimizar cada aspecto de tu negocio y maximizar tu potencial comercial.
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600">
                Saber más
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="text-gray-800 text-sm mb-4">
              Garantizamos la rápida implementación de nuestras soluciones con resultados medibles para incrementar la eficiencia de tus procesos internos.
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600">
                Contactar
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="text-gray-800 text-sm mb-4">
              Mejora la colaboración en tu organización con herramientas que facilitan la comunicación entre departamentos, permitiendo un flujo de trabajo más eficiente y productivo. Descubre cómo nuestras soluciones pueden transformar tu ambiente laboral.
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600">
                Ver detalles
              </button>
            </div>
          </div>
        </div>
        
        {/* Información de contacto */}
        <div className="grid grid-cols-2 gap-8">
          {/* Columna izquierda: Información de contacto */}
          <div className="bg-blue-500 rounded-lg shadow-md p-6 text-white">
            <h3 className="font-bold mb-4 text-lg">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@wavecommerce.com</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ciudad Central, Calle Principal 123</span>
              </div>
            </div>
          </div>
          
          {/* Columna derecha: Equipo */}
          <div className="bg-blue-500 rounded-lg shadow-md p-6 text-white">
            <h3 className="font-bold mb-4 text-lg">Conócenos mejor</h3>
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm mb-4">
                  Nuestro equipo está compuesto por profesionales apasionados y experimentados, dedicados a ofrecer soluciones innovadoras que impulsan el crecimiento empresarial.
                </p>
                <button className="bg-white text-blue-600 px-4 py-1 rounded-md text-sm hover:bg-gray-100">
                  Ver equipo
                </button>
              </div>
              <div className="ml-4">
                <img 
                  src="/api/placeholder/120/80" 
                  alt="Equipo" 
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}