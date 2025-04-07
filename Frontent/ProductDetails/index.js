import React from 'react';

const ProductDetailWithReviews = () => {
  // Datos de reseñas
  const reviews = [
    {
      id: 1,
      name: "José Martín",
      rating: 5,
      date: "En 14 resultados útil",
      helpful: {positive: 10, negative: 1},
      verified: true,
      comment: "Excelente para mi abuela, cumple con todo lo que promete, realmente funciona! Mi familiar está contento y no le cuesta nada utilizarlo."
    },
    {
      id: 2,
      name: "Erika García",
      rating: 3,
      date: "En 14 resultados útil",
      helpful: {positive: 7, negative: 0},
      verified: true,
      comment: "Funciona bien pero se escucha un poco de interferencia."
    },
    {
      id: 3,
      name: "Miguel Villalba",
      rating: 5,
      date: "En 14 resultados útil",
      helpful: {positive: 4, negative: 0},
      verified: true,
      comment: "Muy buena calidad de sonido, mi papá está encantado."
    },
    {
      id: 4,
      name: "Esperanza H.",
      rating: 4,
      date: "En 14 resultados útil",
      helpful: {positive: 5, negative: 0},
      verified: true,
      comment: "Buen producto, buena atención en línea, y lo recomiendo."
    },
    {
      id: 5,
      name: "Javier López",
      rating: 5,
      date: "En 14 resultados útil",
      helpful: {positive: 3, negative: 0},
      verified: true,
      comment: "Excelente, fácil de utilizar y de muy buena calidad."
    }
  ];

  // Función para renderizar estrellas
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-yellow-400 ${i < rating ? 'font-bold' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

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
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-2">
        <div className="text-sm">
          <a href="#" className="text-gray-500 hover:text-blue-500">Inicio</a> / 
          <a href="#" className="text-gray-500 hover:text-blue-500"> Productos</a> / 
          <span className="text-gray-700"> Audífono amplificador</span>
        </div>
      </div>
      
      {/* Product detail */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row">
          {/* Product images */}
          <div className="md:w-1/2 p-4">
            <div className="mb-4">
              <img 
                src="/api/placeholder/400/300" 
                alt="Audífono amplificador" 
                className="mx-auto h-64 object-contain"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <img src="/api/placeholder/70/70" alt="Vista 1" className="w-16 h-16 border rounded object-contain" />
              <img src="/api/placeholder/70/70" alt="Vista 2" className="w-16 h-16 border rounded object-contain" />
              <img src="/api/placeholder/70/70" alt="Vista 3" className="w-16 h-16 border rounded object-contain" />
              <img src="/api/placeholder/70/70" alt="Vista 4" className="w-16 h-16 border rounded object-contain" />
            </div>
          </div>
          
          {/* Product info */}
          <div className="md:w-1/2 p-4">
            <div className="border rounded-lg p-4">
              <h1 className="text-lg font-bold mb-1">Audífono Amplificador</h1>
              <p className="text-sm font-medium text-purple-700 mb-4">Modelo R 212 DC</p>
              
              <div className="flex items-center mb-2">
                <button className="px-2 py-1 border rounded">-</button>
                <span className="mx-2">1</span>
                <button className="px-2 py-1 border rounded">+</button>
                <button className="ml-4 bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700">
                  AGREGAR AL CARRITO
                </button>
              </div>
              
              <div className="mt-4">
                <p className="font-bold">PRODUCTO:</p>
                <p className="text-sm mb-2">AUDÍFONO AMPLIFICADOR RETROAURICULAR INVISIBLE CON APLICADOR VOLUMEN Y SWITCH ON/OFF</p>
                
                <p className="font-bold mt-4">CARACTERÍSTICAS:</p>
                <ul className="text-sm list-disc pl-5">
                  <li>SONIDO DIGITAL MEJORADO</li>
                  <li>AJUSTE CÓMODO</li>
                  <li>FÁCIL DE USAR</li>
                  <li>INCLUYE PILAS</li>
                  <li>INCLUYE KIT CON 6 MOLDES DE ADAPTACIÓN QUE SE AJUSTAN AL TAMAÑO DEL CANAL AUDITIVO</li>
                  <li>MEJORA NIVEL DE COMUNICACIÓN</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ratings */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">Reseñas</h2>
          
          <div className="flex mb-4">
            <div className="w-1/2">
              <div className="flex items-center mb-2">
                <span className="w-8">5</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-yellow-400 h-full rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-8">4</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-yellow-400 h-full rounded-full" style={{width: '10%'}}></div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-8">3</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-yellow-400 h-full rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-8">2</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-yellow-400 h-full rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-8">1</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-yellow-400 h-full rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="w-1/2 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold">5.0 ★</div>
              <div className="text-sm text-gray-600">Promedio</div>
              <div className="mt-2 font-bold text-xl">100%</div>
              <div className="text-sm text-gray-600">Recomendado</div>
            </div>
          </div>
          
          {/* User Reviews */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Comentarios de usuarios</h3>
            
            <div className="max-h-96 overflow-y-auto pr-2">
              {reviews.map(review => (
                <div key={review.id} className="border-b py-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                      {review.name.charAt(0)}
                    </span>
                    <div>
                      <div className="font-medium">{review.name}</div>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                  </div>
                  
                  {review.verified && (
                    <div className="flex items-center text-xs text-green-600 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Compra verificada
                    </div>
                  )}
                  
                  <div className="text-sm mb-2">{review.comment}</div>
                  
                  <div className="text-xs text-gray-500 mb-1">{review.date}</div>
                  
                  <div className="flex items-center text-sm">
                    <button className="flex items-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      {review.helpful.positive}
                    </button>
                    <button className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2" />
                      </svg>
                      {review.helpful.negative}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mt-4">
            <p>Los resultados de productos son proporcionados por un proveedor independiente. Si compras algo, podremos obtener una comisión de afiliados.</p>
          </div>
        </div>
      </div>
      
      {/* Chat button floating */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailWithReviews;