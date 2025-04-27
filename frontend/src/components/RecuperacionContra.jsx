import React, { useState } from 'react';
import './RecuperacionContra.css';
import cometa from '../assets/cometa.png'; // Asegúrate de tener esta imagen

const RecuperacionContra = () => {
  const [email, setEmail] = useState('');
  const [nuevaContrasena, setNuevaContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Nueva contraseña:', nuevaContrasena);
    // Aquí puedes agregar la lógica para validar y procesar la recuperación
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Recuperación de contraseña</h2>
        <p>Ingrese su nueva contraseña</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="icon-email"></i>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          
          <div className="input-group">
            <i className="icon-lock"></i>
            <input
              type="password"
              value={nuevaContrasena}
              onChange={(e) => setNuevaContrasena(e.target.value)}
              placeholder="Nueva contraseña"
              required
            />
          </div>
          
          <button type="submit" className="login-button">Ingresar</button>
        </form>
      </div>
      
      <div className="character-container">
        <img src={cometa} alt="Niño con cometa" className="character" />
      </div>
    </div>
  );
};

export default RecuperacionContra;