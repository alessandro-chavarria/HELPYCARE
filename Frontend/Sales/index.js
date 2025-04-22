import React, { useState } from 'react';

export default function Ventas() {
  // Datos de muestra para las ventas
  const [ventas, setVentas] = useState([
    {
      id: 1,
      nombreProducto: "Modelo de oreja: Tejera",
      estado: "Realizado",
      imagen: "/api/placeholder/48/48"
    },
    {
      id: 2,
      nombreProducto: "Modelo de oreja: Tejera",
      estado: "Realizado",
      imagen: "/api/placeholder/48/48"
    }
  ]);

  return (
    <div className="flex flex-col h-screen bg-blue-50">
      {/* Barra de navegación */}
      <nav className="flex items-center bg-blue-600 text-white p-2">
        <div className="font-bold text-lg mr-8">WaveCommerce</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-200">Marcas</a>
          <a href="#" className="hover:text-blue-200 font-bold">Ventas</a>
          <a href="#" className="hover:text-blue-200">Proveedores</a>
          <a href="#" className="hover:text-blue-200">Envíos</a>
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
      <div className="flex-1 flex flex-col items-center p-6">
        <div className="w-full max-w-3xl">
          {/* Lista de ventas */}
          {ventas.map((venta) => (
            <div 
              key={venta.id} 
              className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center"
            >
              <div className="mr-4">
                <img 
                  src={venta.imagen} 
                  alt={venta.nombreProducto} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-800">
                  Venta #{venta.id}
                </div>
                <div className="text-sm text-gray-600">
                  {venta.nombreProducto}
                </div>
                <div className="text-sm text-gray-600">
                  Estado: {venta.estado}
                </div>
              </div>
            </div>
          ))}
          
          {/* Botón para agregar nueva venta */}
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Agregar Nueva Venta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}