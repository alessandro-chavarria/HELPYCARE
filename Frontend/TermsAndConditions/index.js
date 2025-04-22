import React from 'react';

export default function TerminosCondiciones() {
  return (
    <div className="flex flex-col h-screen bg-blue-50">
      {/* Barra de navegación */}
      <nav className="flex items-center bg-blue-600 text-white p-2">
        <div className="font-bold text-lg mr-8">WaveCommerce</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-200">Inicio</a>
          <a href="#" className="hover:text-blue-200">Productos</a>
          <a href="#" className="hover:text-blue-200">Sobre Nosotros</a>
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
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <h1 className="text-xl font-bold mb-4">Términos y Condiciones</h1>
          
          <ol className="list-decimal pl-5 space-y-4 text-sm">
            <li>
              <strong>Aceptación de los Términos</strong>
              <p className="mt-1">
                Al utilizar nuestra plataforma, usted acepta estos nuevos Términos y Condiciones, junto con nuestra Política 
                de Privacidad. Si no está de acuerdo con estos términos, le recomendamos que no utilice nuestros servicios.
              </p>
            </li>
            
            <li>
              <strong>Servicios de HelpyCare</strong>
              <p className="mt-1">
                Nos comprometemos a brindar productos y servicios auditivos para particulares, entregando productos de alta calidad 
                que mejoren la calidad de vida de nuestros clientes. Nuestros servicios incluyen:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Venta de dispositivos auditivos de alta tecnología</li>
                <li>Realizar controles de rutina de aparatos auditivos</li>
                <li>Mantenimiento y reparación de audífonos cuando sea necesario</li>
                <li>Ofrecer asesoría para ajustes, calibraciones y adaptaciones de los audífonos según necesidades específicas</li>
                <li>Proporcionar servicio técnico especializado para garantizar el funcionamiento óptimo de los equipos</li>
                <li>Actualización de software y firmware cuando sea necesario para mejorar la experiencia y desempeño del aparato</li>
              </ul>
            </li>
            
            <li>
              <strong>Registro y Cuenta de Usuario</strong>
              <p className="mt-1">
                Para acceder a nuestros servicios, debe registrarse como usuario, proporcionarnos datos de contacto e información
                relevante para poder ofrecerle el mejor servicio. Es su responsabilidad mantener la confidencialidad de su cuenta y 
                contraseña. Usted acepta la responsabilidad de todas las actividades realizadas desde su cuenta.
              </p>
            </li>
            
            <li>
              <strong>Uso del Sitio Web</strong>
              <p className="mt-1">
                Se compromete a utilizar el sitio web y los servicios de HelpyCare únicamente para fines lícitos y de acuerdo con 
                estos términos. Específicamente se prohíbe el uso del sitio para:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Violar cualquier ley aplicable o regulación</li>
                <li>Realizar actividades fraudulentas, ilegales o ilícitas</li>
                <li>Transmitir cualquier material que sea difamatorio, ofensivo o de naturaleza pornográfica</li>
                <li>Manipular identificadores para ocultar el origen de cualquier contenido</li>
                <li>Intentar acceder a áreas restringidas del sistema informático o la propiedad de HelpyCare o de sus contratistas, 
                proveedores, agentes, representantes o cualquier tercero.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}