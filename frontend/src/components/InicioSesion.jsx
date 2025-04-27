import React, { useState } from 'react';
import './InicioSesion.css';
import ninoCometa from '../assets/nino-cometa.png'; // Asegúrate de tener esta imagen

const InicioSesion = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', usuario);
    console.log('Contraseña:', password);
    // Aquí puedes agregar la lógica para validar credenciales
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-card">
          <h2>Inicio de Sesión</h2>
          <p>Ingrese sus credenciales</p>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="icon-user"></i>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Usuario"
                required
              />
            </div>
            
            <div className="input-group">
              <i className="icon-lock"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
              />
            </div>
            
            <div className="forgot-password">
              <a href="#">¿Olvidó su contraseña? <br/>No puede crear una cuenta. Regístrese.</a>
            </div>
            
            <button type="submit" className="login-button">Ingresar</button>
          </form>
        </div>
        
        <div className="character-container">
          <img src={ninoCometa} alt="Niño con cometa" className="character" />
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;