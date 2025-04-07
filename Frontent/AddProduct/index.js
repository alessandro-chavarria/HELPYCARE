import React, { useState } from 'react';

export default function AgregarProducto() {
  const [imagen, setImagen] = useState(null);
  const [campos, setCampos] = useState({
    nombre: '',
    precio: '',
    stock: '',
    marca: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampos({
      ...campos,
      [name]: value
    });
  };

  const handleImagenClick = () => {
    document.getElementById('subirImagen').click();
  };

  const handleImagenChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagen(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del producto:', { ...campos, imagen });
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
        <div className="bg-white rounded shadow-md p-6 w-full max-w-4xl flex">
          {/* Sección izquierda: Imagen del producto */}
          <div className="w-1/2 pr-6 flex flex-col items-center">
            <div className="text-sm font-medium mb-2">Subir Imagen</div>
            
            <div 
              className="border-2 border-gray-300 border-dashed rounded-md h-64 w-64 flex flex-col justify-center items-center cursor-pointer mb-4"
              onClick={handleImagenClick}
            >
              {imagen ? (
                <img src={imagen} alt="Vista previa" className="max-h-60 max-w-60" />
              ) : (
                <div className="text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
              )}
              <input 
                type="file" 
                id="subirImagen" 
                className="hidden" 
                accept="image/*" 
                onChange={handleImagenChange} 
              />
            </div>
            
            <button 
              type="button" 
              className="bg-black text-white py-2 px-4 rounded w-64 text-sm"
              onClick={handleImagenClick}
            >
              Click para seleccionar imagen
            </button>
          </div>
          
          {/* Sección derecha: Formulario */}
          <div className="w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={campos.nombre}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-1"
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="precio" className="block text-sm font-medium text-gray-700 mb-1">Precio:</label>
                <input
                  type="text"
                  id="precio"
                  name="precio"
                  value={campos.precio}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-1"
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">Stock:</label>
                <input
                  type="text"
                  id="stock"
                  name="stock"
                  value={campos.stock}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-1"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="marca" className="block text-sm font-medium text-gray-700 mb-1">Marca:</label>
                <input
                  type="text"
                  id="marca"
                  name="marca"
                  value={campos.marca}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-1"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <button
                  type="submit"
                  className="bg-white border border-gray-300 px-4 py-1 rounded text-gray-800 hover:bg-blue-500 hover:text-white text-sm"
                >
                  GUARDAR PRODUCTO
                </button>
                <button
                  type="button"
                  className="bg-white border border-gray-300 px-4 py-1 rounded text-gray-800 hover:bg-blue-500 hover:text-white text-sm"
                >
                  EDITAR PRODUCTO
                </button>
                <button
                  type="button"
                  className="bg-white border border-gray-300 px-4 py-1 rounded text-gray-800 hover:bg-blue-500 hover:text-white text-sm"
                >
                  ELIMINAR PRODUCTO
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}