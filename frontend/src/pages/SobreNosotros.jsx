import React from 'react';
import { Link } from 'react-router-dom';
import './SobreNosotros.css';

const SobreNosotros = () => {
  return (
    <div className="sobre-nosotros-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="HelpyCare Logo" className="logo-img" />
          <span></span>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li><Link to="/" className="active">Inicio</Link></li>
            <li><Link to="/productos" className="active">Productos</Link></li>
            <li><Link to="/sobre-nosotros" className="active">Sobre Nosotros</Link></li>
            <li><Link to="/ventas-empleado" className="active">Ventas</Link></li>
          </ul>
        </nav>
        
       
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
              <img src="/assets/pareja-ancianos.png" alt="Pareja de ancianos" />
            </div>
          </div>

      {/* Sección de contacto - centrada como solicitaste */}
      <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '30px'
          }}> 
      
              
              <div className="terminos" style={{marginTop: '15px'}}>
                <Link to="/terminos" style={{color: '#6698e8', textDecoration: 'none'}}>Términos y Condiciones</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SobreNosotros;