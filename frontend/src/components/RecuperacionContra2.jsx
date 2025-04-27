import React, { useState } from 'react';
import './LoginPage.css';
import cheerleaderImg from '../assets/cheerleader.png';

const LoginPage = () => {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Código ingresado:', code);
    // Aquí puedes agregar la lógica para validar el código
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Ingrese el código</h2>
        <p>Se requiere un código válido para seguir navegando.</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Escriba el código"
            required
          />
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>
      
      <div className="character-container">
        <img src={cheerleaderImg} alt="Cheerleader character" className="cheerleader" />
      </div>
    </div>
  );
};

export default LoginPage;