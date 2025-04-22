import React from 'react';

const CodeVerificationVisual = () => {
  return (
    <div className="flex h-screen bg-blue-500">
      {/* Form side */}
      <div className="flex-1 flex justify-center items-center p-8">
        <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-1">Ingrese el código</h2>
          <p className="text-sm text-gray-500 text-center mb-6">El código se ha enviado a su correo electrónico</p>
          
          <div className="mb-4">
            <input
              type="text"
              placeholder="Código de verificación"
              className="w-full p-3 border border-gray-300 rounded-md text-center"
            />
          </div>
          
          <div className="mb-4 text-center">
            <a href="#" className="text-blue-500 text-sm hover:underline">Reenviar código</a>
          </div>
          
          <button 
            className="w-full py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition"
          >
            Verificar
          </button>
        </div>
      </div>
      
      {/* Illustration side */}
      <div className="flex-1 flex justify-center items-center bg-blue-500 relative">
        <div className="bg-white h-5/6 w-5/6 rounded-full absolute"></div>
        <div className="relative z-10">
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Character - cheerleader */}
            <circle cx="160" cy="230" r="25" fill="#8d5524"/> {/* head */}
            
            {/* Hair with ponytail */}
            <path d="M135 220 C130 200, 140 190, 160 190 C180 190, 190 200, 185 220" fill="#663300" />
            <path d="M175 215 C185 205, 195 220, 205 260 C210 280, 190 290, 185 270 C182 255, 180 240, 175 215" fill="#663300" />
            
            {/* Hair bow */}
            <path d="M185 205 C190 200, 200 205, 195 210 C190 215, 180 210, 185 205" fill="#ff66cc" />
            <path d="M195 205 C200 200, 210 205, 205 210 C200 215, 190 210, 195 205" fill="#ff66cc" />
            <circle cx="190" cy="207" r="3" fill="#ff33cc" />
            
            {/* Body */}
            <rect x="150" y="255" width="20" height="35" fill="#ff9966"/> {/* torso */}
            
            {/* Cheerleader outfit */}
            <rect x="140" y="275" width="40" height="20" fill="#66ff99"/> {/* skirt base */}
            <path d="M140 275 L130 295" fill="#66ff99" stroke="#66ff99" strokeWidth="2" /> {/* skirt pleat */}
            <path d="M150 275 L145 295" fill="#66ff99" stroke="#66ff99" strokeWidth="2" /> {/* skirt pleat */}
            <path d="M160 275 L160 295" fill="#66ff99" stroke="#66ff99" strokeWidth="2" /> {/* skirt pleat */}
            <path d="M170 275 L175 295" fill="#66ff99" stroke="#66ff99" strokeWidth="2" /> {/* skirt pleat */}
            <path d="M180 275 L190 295" fill="#66ff99" stroke="#66ff99" strokeWidth="2" /> {/* skirt pleat */}
            
            {/* Pom poms */}
            <circle cx="115" cy="235" r="20" fill="#ff6666" />
            <circle cx="110" cy="230" r="3" fill="#ff3333" />
            <circle cx="120" cy="230" r="3" fill="#ff3333" />
            <circle cx="115" cy="225" r="3" fill="#ff3333" />
            <circle cx="110" cy="240" r="3" fill="#ff3333" />
            <circle cx="120" cy="240" r="3" fill="#ff3333" />
            <circle cx="115" cy="245" r="3" fill="#ff3333" />
            
            <circle cx="205" cy="235" r="20" fill="#ff6666" />
            <circle cx="200" cy="230" r="3" fill="#ff3333" />
            <circle cx="210" cy="230" r="3" fill="#ff3333" />
            <circle cx="205" cy="225" r="3" fill="#ff3333" />
            <circle cx="200" cy="240" r="3" fill="#ff3333" />
            <circle cx="210" cy="240" r="3" fill="#ff3333" />
            <circle cx="205" cy="245" r="3" fill="#ff3333" />
            
            {/* Arms */}
            <path d="M150 260 L115 235" stroke="#8d5524" strokeWidth="6" strokeLinecap="round"/> {/* left arm */}
            <path d="M170 260 L205 235" stroke="#8d5524" strokeWidth="6" strokeLinecap="round"/> {/* right arm */}
            
            {/* Legs */}
            <path d="M150 295 L145 320" stroke="#8d5524" strokeWidth="6" strokeLinecap="round"/> {/* left leg */}
            <path d="M170 295 L175 320" stroke="#8d5524" strokeWidth="6" strokeLinecap="round"/> {/* right leg */}
            
            {/* Shoes */}
            <rect x="140" y="317" width="10" height="5" fill="#cc66ff" rx="2" />
            <rect x="170" y="317" width="10" height="5" fill="#cc66ff" rx="2" />
            
            {/* Face */}
            <circle cx="152" cy="225" r="3" fill="white"/> {/* left eye */}
            <circle cx="152" cy="225" r="1.5" fill="black"/> {/* left pupil */}
            <circle cx="168" cy="225" r="3" fill="white"/> {/* right eye */}
            <circle cx="168" cy="225" r="1.5" fill="black"/> {/* right pupil */}
            <path d="M155 238 C158 241, 162 241, 165 238" stroke="black" strokeWidth="1.5" fill="none"/> {/* smile */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CodeVerificationVisual;