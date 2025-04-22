import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-center text-xl font-medium mb-6">Crear una cuenta</h2>
        <h3 className="text-center text-lg font-medium mb-6">Empleado</h3>
        
        <form className="space-y-4">
          <div>
            <input type="text" placeholder="Nombre" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <div>
            <input type="text" placeholder="Apellido" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <div>
            <input type="email" placeholder="Correo electrónico" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <div>
            <input type="password" placeholder="Contraseña" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <div>
            <input type="password" placeholder="Confirmar contraseña" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <div>
            <input type="tel" placeholder="Teléfono" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          
          <div className="pt-2">
            <button 
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;