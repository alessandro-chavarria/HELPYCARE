import React, { useState } from 'react';

export default function DetalleProducto() {
  const [cantidad, setCantidad] = useState(1);

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    console.log(`Producto agregado al carrito. Cantidad: ${cantidad}`);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Barra de navegación */}
      <nav className="flex items-center bg-blue-600 text-white p-2">
        <div className="font-bold text-lg mr-8">WaveCommerce</div>
        <div className="flex-1"></div>
        <div className="mr-4">
          <button className="bg-white text-blue-600 px-4 py-1 rounded text-sm">
            Carrito de compras
          </button>
        </div>
        <div>
          <button className="bg-transparent p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Contenido principal */}
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-4xl flex flex-col">
          {/* Breadcrumbs */}
          <div className="p-4 text-sm text-gray-600 border-b">
            <span className="cursor-pointer hover:text-blue-600">Inicio</span> / 
            <span className="cursor-pointer hover:text-blue-600"> Audífonos</span> / 
            <span className="cursor-pointer hover:text-blue-600"> Audífono específico</span>
          </div>
          
          {/* Contenido principal */}
          <div className="flex p-4">
            {/* Columna izquierda: Imagen del producto */}
            <div className="w-1/2 pr-4 flex justify-center">
              <img 
                src="/api/placeholder/300/300" 
                alt="Audífono" 
                className="object-contain h-64"
              />
            </div>
            
            {/* Columna derecha: Detalles y opción de compra */}
            <div className="w-1/2">
              <div className="flex mb-4">
                <div className="flex-1">
                  <h2 className="text-md font-medium">Audífono BTE Recargable</h2>
                  <h3 className="text-sm text-gray-600">Modelo: XR-2500</h3>
                </div>
                <div>
                  <button className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="bg-red-600 text-white rounded-full px-3 py-1 text-xs">
                  $ 149.00
                </div>
              </div>
              
              <div className="mb-6">
                <button 
                  onClick={agregarAlCarrito}
                  className="bg-black text-white rounded-md px-6 py-2 w-full hover:bg-gray-800"
                >
                  Finalizar compra
                </button>
              </div>
              
              {/* Valoración */}
              <div className="border-t pt-4">
                <div className="mb-1">Reseñas</div>
                <div className="flex items-center mb-1">
                  <div className="text-yellow-500 mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="inline-block">
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="font-bold">5.0 ★</div>
                </div>
                
                {/* Barras de progreso */}
                <div className="space-y-1 mb-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center text-xs">
                      <span className="w-4 text-right mr-2">{rating}</span>
                      <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`bg-yellow-500 h-full rounded-full ${rating === 5 ? 'w-full' : 'w-0'}`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center font-bold">
                  100%
                </div>
                <div className="text-center text-xs text-gray-500">
                  Recomendación
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}