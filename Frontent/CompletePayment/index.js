import React, { useState } from 'react';

export default function FinalizarPago() {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [nombreTitular, setNombreTitular] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Procesando pago:', { numeroTarjeta, nombreTitular, fechaExpiracion, cvv });
  };

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
      <div className="flex-1 flex justify-center items-center p-6">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-lg">
          {/* Detalles del producto */}
          <div className="flex mb-6">
            <div className="mr-4">
              <img 
                src="/api/placeholder/80/80" 
                alt="Audífono" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-medium text-lg">Ingreso Datos de pago</h2>
              <p className="text-sm text-gray-600 mb-2">
                Por favor ingrese los datos solicitados para procesar su compra. Los campos marcados con * son obligatorios.
              </p>
              <div className="text-red-600 font-bold">
                Precio: $149.00
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-sm mr-2">1</span>
                <div className="flex flex-col">
                  <button className="text-xs mb-1 bg-gray-200 px-2 rounded">+</button>
                  <button className="text-xs bg-gray-200 px-2 rounded">-</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Métodos de pago */}
          <div className="mb-4">
            <div className="text-sm font-medium mb-2">Método de pago:</div>
            <div className="flex space-x-2 mb-4">
              <img src="/api/placeholder/30/20" alt="Visa" className="h-5" />
              <img src="/api/placeholder/30/20" alt="Mastercard" className="h-5" />
              <img src="/api/placeholder/30/20" alt="Amex" className="h-5" />
              <img src="/api/placeholder/30/20" alt="Discover" className="h-5" />
              <img src="/api/placeholder/30/20" alt="PayPal" className="h-5" />
              <img src="/api/placeholder/30/20" alt="Other" className="h-5" />
            </div>
          </div>
          
          {/* Formulario de tarjeta */}
          <form onSubmit={handleSubmit}>
            {/* Número de tarjeta */}
            <div className="mb-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Número de tarjeta"
                  value={numeroTarjeta}
                  onChange={(e) => setNumeroTarjeta(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-l-md p-2 text-sm"
                />
                <div className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-md px-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Nombre del titular */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nombre del titular"
                value={nombreTitular}
                onChange={(e) => setNombreTitular(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
            
            {/* Fecha y CVV */}
            <div className="flex mb-6">
              <input
                type="text"
                placeholder="MM/YY"
                value={fechaExpiracion}
                onChange={(e) => setFechaExpiracion(e.target.value)}
                className="w-1/2 border border-gray-300 rounded-l-md p-2 text-sm"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-1/2 border border-l-0 border-gray-300 rounded-r-md p-2 text-sm"
              />
            </div>
            
            {/* Nota de seguridad */}
            <div className="text-xs text-gray-500 mb-6 text-center">
              <p>Sus datos están seguros. | Operado por Stripe, Inc.</p>
              <p>La información de su tarjeta está protegida con cifrado SSL de 256 bits</p>
            </div>
            
            {/* Botón de pago */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white py-2 px-8 rounded-md hover:bg-gray-800"
              >
                FINALIZAR PAGO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}