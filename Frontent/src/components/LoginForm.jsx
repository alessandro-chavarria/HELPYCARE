// Frontend/Login/src/components/LoginForm.jsx
import React, { useState } from 'react';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', { email, password, rememberMe });
    // Aquí agregarías la lógica de autenticación
  };
  
  return (
    <div className="login-container">
      <div className="login-form-card">
        <h1 className="login-title">Inicio de Sesión</h1>
        <p className="login-subtitle">Ingrese sus credenciales</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              required
            />
          </div>
          
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
          </div>
          
          <div className="remember-forgot">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Recordar contraseña</span>
            </label>
            <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>
          </div>
          
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
      </div>
      
      <div className="illustration-container">
        {/* Aquí iría la imagen del niño con la cometa */}
      </div>
    </div>
  );
};

export default LoginForm;