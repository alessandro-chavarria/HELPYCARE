import { useState } from 'react';

export default function AgregarMarcas() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  return (
    <div className="page-container">
      <div className="p-4 text-sm text-left">
        Agregar Marcas (Empleado)
      </div>
      
      {/* Barra de navegación */}
      <div className="bg-blue-500 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="text-white font-semibold">HelpyCare</a>
        </div>
        
        <div className="flex space-x-4 text-white">
          <a href="/marcas" className="text-white hover:text-gray-200">Marcas</a>
          <a href="/ventas" className="text-white hover:text-gray-200">Ventas</a>
          <a href="/agregar-producto" className="text-white hover:text-gray-200">Agregar Producto</a>
          <a href="/" className="text-white hover:text-gray-200">Inicio</a>
          <a href="/productos" className="text-white hover:text-gray-200">Productos</a>
          <a href="/nosotros" className="text-white hover:text-gray-200">Sobre Nosotros</a>
        </div>
        
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="flex justify-center p-8">
        <div className="w-full max-w-2xl bg-white rounded-md p-6 border border-gray-300 shadow-lg">
          <h2 className="section-title mb-6">Administración de Marcas</h2>
          
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-800 mb-1">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="descripcion" className="block text-gray-800 mb-1">Descripción:</label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 h-24 text-gray-800"
            />
          </div>
          
          <div className="flex justify-start space-x-2">
            <button className="btn px-4 py-2 rounded">
              AGREGAR MARCA
            </button>
            <button className="btn bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
              ELIMINAR MARCA
            </button>
            <button className="btn bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">
              EDITAR MARCA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}