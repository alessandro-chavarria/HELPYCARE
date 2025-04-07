import React from 'react';

const PasswordRecoveryVisual = () => {
  return (
    <div className="flex h-screen bg-blue-500">
      {/* Form side */}
      <div className="flex-1 flex justify-center items-center p-8">
        <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-1">Recuperación de contraseña</h2>
          <p className="text-sm text-gray-500 text-center mb-6">Ingrese su correo electrónico</p>
          
          <div className="mb-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          
          <div className="mb-4">
            <input
              type="text"
              placeholder="Código de verificación"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          
          <button 
            className="w-full py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition"
          >
            Recuperar
          </button>
        </div>
      </div>
      
      {/* Illustration side */}
      <div className="flex-1 flex justify-center items-center bg-blue-500 relative">
        <div className="bg-white h-5/6 w-5/6 rounded-full absolute"></div>
        <div className="relative z-10">
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Kite */}
            <path d="M180 90 L220 50 L260 90 L220 130 Z" fill="#ff6b6b" stroke="#333" strokeWidth="2"/>
            <path d="M180 90 L220 130 L220 50 Z" fill="#4ecdc4" stroke="#333" strokeWidth="2"/>
            <path d="M220 130 L260 90 L220 50 Z" fill="#ffe66d" stroke="#333" strokeWidth="2"/>
            <path d="M220 50 L180 90 L260 90 Z" fill="#1a535c" stroke="#333" strokeWidth="2"/>
            
            {/* Kite strings */}
            <path d="M220 130 L210 170 L230 190" stroke="#f25f5c" strokeWidth="2" strokeDasharray="4 2"/>
            <path d="M220 130 L230 170 L240 200" stroke="#f25f5c" strokeWidth="2" strokeDasharray="4 2"/>
            <path d="M210 170 L200 210" stroke="#f25f5c" strokeWidth="2" strokeDasharray="4 2"/>
            <path d="M230 170 L220 210" stroke="#f25f5c" strokeWidth="2" strokeDasharray="4 2"/>
            
            {/* Character - simplified */}
            <circle cx="160" cy="230" r="25" fill="#8d5524"/> {/* head */}
            <rect x="150" y="255" width="20" height="40" fill="#ff8a5b"/> {/* body */}
            <rect x="140" y="275" width="40" height="25" fill="#57cc99"/> {/* shorts */}
            <path d="M145 270 L125 250" stroke="#8d5524" strokeWidth="8" strokeLinecap="round"/> {/* left arm */}
            <path d="M175 270 L200 240" stroke="#8d5524" strokeWidth="8" strokeLinecap="round"/> {/* right arm flying kite */}
            <path d="M150 300 L145 320" stroke="#8d5524" strokeWidth="8" strokeLinecap="round"/> {/* left leg */}
            <path d="M170 300 L175 320" stroke="#8d5524" strokeWidth="8" strokeLinecap="round"/> {/* right leg */}
            
            {/* Face - simplified */}
            <circle cx="152" cy="225" r="3" fill="white"/> {/* left eye */}
            <circle cx="152" cy="225" r="1.5" fill="black"/> {/* left pupil */}
            <circle cx="168" cy="225" r="3" fill="white"/> {/* right eye */}
            <circle cx="168" cy="225" r="1.5" fill="black"/> {/* right pupil */}
            <path d="M155 235 L165 235" stroke="black" strokeWidth="1.5"/> {/* mouth */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecoveryVisual;