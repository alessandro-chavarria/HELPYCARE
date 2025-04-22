import React, { useState } from 'react';

export default function MarcaForm() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de marca:', { nombre, descripcion });
  };

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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">Descripción:</label>
              <textarea
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 h-32"
              ></textarea>
            </div>
            
            <div className="flex justify-start space-x-2">
              <button
                type="submit"
                className="login-button bg-gray-200 px-4 py-2 rounded text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                AGREGAR MARCA
              </button>
              <button
                type="button"
                className="login-button bg-gray-200 px-4 py-2 rounded text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                ELIMINAR MARCA
              </button>
              <button
                type="button"
                className="login-button bg-gray-200 px-4 py-2 rounded text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                EDITAR MARCA
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}