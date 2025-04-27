import React from 'react';
import './PaginaInicio.css';
import audifono from '../assets/cometa.jpg'; // Asegúrate de tener esta imagen o reemplázala

function PaginaInicio() {
  return (
    <div className="pagina-inicio-container">
      <div className="header">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="HelpyCare Logo" className="logo-img" />
          <span className="logo-text">helpyCare</span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="/" className="active">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="/carrito" className="cart"><i className="fas fa-shopping-cart"></i></a></li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <div className="left-content">
          <h1>Esto es HelpyCare</h1>
          <p className="slogan">"Cuidamos de ti por qué cada año cuenta"</p>
          <div className="buttons">
            <button className="btn-comprar">Comprar ahora</button>
            <button className="btn-ver">Ver más</button>
          </div>
        </div>
        <div className="right-content">
          <img src={audifono} alt="Audífono HelpyCare" className="product-image" />
        </div>
      </div>
    </div>
  );
}

export default PaginaInicio;