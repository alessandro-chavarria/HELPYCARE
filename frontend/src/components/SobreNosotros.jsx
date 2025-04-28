import React from 'react';
import { Link } from 'react-router-dom';
import './SobreNosotros.css';

const SobreNosotros = () => {
  return (
    <div className="sobre-nosotros-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/assets/logo.png" alt="helpycare" />
          <span>helpycare</span>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
          </ul>
        </nav>
        
        <div className="carrito-icon">
          <Link to="/carrito">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </Link>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="sobre-nosotros-main">
        <div className="sobre-nosotros-header">
          <h1>Sobre Nosotros</h1>
        </div>

        <div className="sobre-nosotros-content">
          {/* Secciones de información */}
          <div className="info-sections">
            <div className="info-section">
              <div className="section-header">
                <h2>MISIÓN</h2>
              </div>
              <div className="section-content">
                <p>
                  Proporcionar soluciones auditivas accesibles y de alta calidad para adultos mayores, 
                  mejorando su calidad de vida a través de una experiencia de compra en línea sencilla y personalizada.
                </p>
              </div>
            </div>

            <div className="info-section">
              <div className="section-header">
                <h2>VISIÓN</h2>
              </div>
              <div className="section-content">
                <p>
                  Convertirse en la tienda en línea líder en el sector de dispositivos auditivos para adultos mayores.
                </p>
              </div>
            </div>

            <div className="info-section">
              <div className="section-header">
                <h2>NUESTRA HISTORIA</h2>
              </div>
              <div className="section-content">
                <p>
                  HelpyCare nace como una solución innovadora para el mercado de dispositivos auditivos, 
                  desarrollada con el stack MERN. La tienda busca ofrecer una plataforma moderna y accesible 
                  para adultos mayores que necesitan mejorar su audición.
                </p>
              </div>
            </div>
          </div>

          {/* Sección de valores */}
          <div className="valores-section">
            <div className="section-header">
              <h2>NUESTROS VALORES</h2>
            </div>
            <div className="valores-grid">
              <div className="valor-item">
                <div className="valor-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Empatía</h3>
                <p>Entendemos las necesidades específicas de nuestros clientes y nos esforzamos por brindar soluciones adaptadas a ellos.</p>
              </div>
              <div className="valor-item">
                <div className="valor-icon">
                  <i className="fas fa-medal"></i>
                </div>
                <h3>Calidad</h3>
                <p>Nos comprometemos a ofrecer productos de la más alta calidad que mejoren realmente la calidad de vida.</p>
              </div>
              <div className="valor-item">
                <div className="valor-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Inclusión</h3>
                <p>Creamos experiencias digitales accesibles para todos, sin importar su nivel de habilidad tecnológica.</p>
              </div>
              <div className="valor-item">
                <div className="valor-icon">
                  <i className="fas fa-headphones"></i>
                </div>
                <h3>Servicio</h3>
                <p>Brindamos atención personalizada y soporte continuo antes, durante y después de la compra.</p>
              </div>
            </div>
          </div>

          {/* Sección de equipo */}
          <div className="equipo-section">
            <div className="section-header">
              <h2>NUESTRO EQUIPO</h2>
            </div>
            <div className="equipo-grid">
              <div className="equipo-item">
                <div className="equipo-img">
                  <img src="/assets/team/team1.png" alt="" />
                </div>
                <h3>Enrique Chavarria</h3>
                
              </div>
              <div className="equipo-item">
                <div className="equipo-img">
                  <img src="/assets/team/team2.png" alt="" />
                </div>
                <h3>Carlos Henriquez</h3>
                
              </div>
              <div className="equipo-item">
                <div className="equipo-img">
                  <img src="/assets/team/team3.png" alt="" />
                </div>
                <h3>Gabriel Garcia</h3>
                
              </div>
            </div>
          </div>

          {/* Sección de mensaje */}
          <div className="mensaje-section">
            <div className="mensaje-content">
              <h2>"Cuidamos de ti porque cada año cuenta"</h2>
              <p>
                En HelpyCare entendemos la importancia de una buena audición en la calidad de vida. 
                Nos dedicamos a brindar soluciones que permitan a nuestros usuarios disfrutar plenamente 
                de cada momento y cada conversación.
              </p>
            </div>
            <div className="mensaje-img">
              <img src="/assets/ilustracion-personas.png" alt="Ilustración" />
            </div>
          </div>

          {/* Sección de contacto */}
          <div className="contacto-section">
            <button className="btn-contacto">CONTÁCTANOS</button>
            <div className="redes-sociales">
              <a href="" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/assets/social/instagram.png" alt="Instagram" />
                <span>HelpyCare</span>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/assets/social/facebook.png" alt="Facebook" />
                <span>HelpyCare</span>
              </a>
              <a href="" className="social-icon">
                <img src="/assets/social/gmail.png" alt="Email" />
                <span>HelpyCare@gmail.com</span>
              </a>
            </div>
            <div className="terminos">
              <Link to="/terminos">Términos y Condiciones</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;