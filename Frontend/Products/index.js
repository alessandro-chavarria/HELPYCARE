import React from 'react';

const ProductsCatalog = () => {
  // Datos de productos de audífonos
  const products = [
    {
      id: 1,
      name: "Audífono retroauricular",
      model: "Modelo AA123",
      price: 519.99,
      imageUrl: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Audífono retroauricular",
      model: "Modelo SB456",
      price: 430.30,
      imageUrl: "/api/placeholder/150/150"
    },
    {
      id: 3,
      name: "Audífono retroauricular",
      model: "Modelo CR789",
      price: 548.47,
      imageUrl: "/api/placeholder/150/150"
    },
    {
      id: 4,
      name: "Audífono de oreja",
      model: "Modelo BT123",
      price: 399.99,
      imageUrl: "/api/placeholder/150/150"
    },
    {
      id: 5,
      name: "Audífono retroauricular",
      model: "Modelo XT532",
      price: 425.75,
      sale: true,
      imageUrl: "/api/placeholder/150/150"
    },
    {
      id: 6,
      name: "Audífono de canal",
      model: "Modelo HS910",
      price: 379.80,
      imageUrl: "/api/placeholder/150/150"
    },
    {
      id: 7,
      name: "Audífono retroauricular",
      model: "Modelo ZX350",
      price: 499.99,
      imageUrl: "/api/placeholder/150/150"
    }
  ];

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
          <a href="#" className="text-white hover:text-blue-100 font-medium">Productos</a>
          <a href="#" className="text-white hover:text-blue-100">Sobre Nosotros</a>
          <div className="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Products grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center hover:shadow-md transition duration-300">
              <div className="w-full flex justify-center mb-2">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="h-32 object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.model}</p>
                <div className="mt-2">
                  {product.sale ? (
                    <div className="relative">
                      <div className="absolute -right-4 -top-4 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                        !
                      </div>
                      <p className="text-purple-600 font-bold">
                        Precio: ${product.price.toFixed(2)}
                      </p>
                    </div>
                  ) : (
                    <p className="text-purple-600 font-bold">
                      Precio: ${product.price.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCatalog;