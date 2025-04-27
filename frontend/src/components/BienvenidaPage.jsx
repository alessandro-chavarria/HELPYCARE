import React from 'react';
import './BienvenidaPage.css';
import pareja from '../assets/pareja-ancianos.png'; // Asegúrate de tener esta imagen

const BienvenidaPage = () => {
  const handleIniciarSesion = () => {
    console.log('Redirigiendo a inicio de sesión');
    // Aquí puedes agregar la navegación a la página de inicio de sesión
    // Por ejemplo: navigate('/login') si usas react-router
  };

  const handleRegistrarse = () => {
    console.log('Redirigiendo a registro');
    // Aquí puedes agregar la navegación a la página de registro
    // Por ejemplo: navigate('/register') si usas react-router
  };

  return (
    <div className="bienvenida-background">
      <div className="bienvenida-container">
        <div className="content-area">
          <h1 className="bienvenida-title">
            Bienvenido a<br />
            <span className="app-name">HELPYCARE</span>
          </h1>
          
          <div className="buttons-container">
            <button 
              className="action-button primary-button"
              onClick={handleIniciarSesion}
            >
              INICIAR SESIÓN
            </button>
            
            <button 
              className="action-button secondary-button"
              onClick={handleRegistrarse}
            >
              REGISTRARSE
            </button>
          </div>
        </div>
        
        <div className="characters-container">
          <img src={pareja} alt="Pareja de ancianos" className="characters" />
        </div>
      </div>
    </div>
  );
};

export default BienvenidaPage;