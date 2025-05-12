import { useState } from 'react';

export default function AgregarProducto() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [marca, setMarca] = useState('');
  const [descripcion, setDescripcion] = useState('');

  return (
    <div className="page-container">
      <div className="p-4 text-sm text-left">
        Agregar Producto (Empleado)
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
        <div className="w-full max-w-4xl bg-white rounded-md p-6 flex shadow-lg">
          <h2 className="section-title absolute -top-8 left-0 right-0 text-center">Administración de Productos</h2>
          
          {/* Sección izquierda - Subir imágenes */}
          <div className="w-1/2 pr-8 flex flex-col items-center">
            <div className="text-gray-800 mb-4 font-medium">Subir Imágenes</div>
            <div className="border-2 border-gray-400 rounded-md p-8 flex flex-col items-center justify-center hover:border-blue-500 cursor-pointer transition duration-300">
              <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17V11M9 11H3M9 11L9 5M15 7V13M15 13H21M15 13V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mt-4 w-full">
              <div className="bg-black text-white py-2 px-4 rounded-full text-center text-sm">
                Escribir descripción del producto
              </div>
            </div>
          </div>
          
          {/* Sección derecha - Detalles del producto */}
          <div className="w-1/2 border border-gray-300 rounded-md p-4">
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-gray-800 mb-1">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-1 text-gray-800"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="precio" className="block text-red-500 mb-1">Precio:</label>
              <input
                type="text"
                id="precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-1 text-gray-800"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="stock" className="block text-gray-800 mb-1">Stock:</label>
              <input
                type="text"
                id="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-1 text-gray-800"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="marca" className="block text-gray-800 mb-1">Marca:</label>
              <input
                type="text"
                id="marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-1 text-gray-800"
              />
            </div>
            
            <div className="flex flex-col items-end mt-6 space-y-2">
              <button className="btn bg-red-500 hover:bg-red-600 px-4 py-1 rounded w-40">
                ELIMINAR PRODUCTO
              </button>
              <button className="btn bg-yellow-500 hover:bg-yellow-600 px-4 py-1 rounded w-40">
                EDITAR PRODUCTO
              </button>
              <button className="btn px-4 py-1 rounded w-40">
                AGREGAR PRODUCTO
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Añadimos el footer consistente con BienvenidaPage */}
      <footer className="footer">
        <p>© 2025 HelpyCare - Todos los derechos reservados</p>
        <p>Tecnología al servicio del cuidado</p>
      </footer>
    </div>
  );
}