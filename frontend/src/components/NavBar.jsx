import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
        document.body.style.paddingTop = '70px';
        document.querySelector('.navbar-container').style.backgroundColor = 'rgba(46, 139, 192, 0.98)';
      } else {
        setScrolled(false);
        document.body.style.paddingTop = '0';
        document.querySelector('.navbar-container').style.backgroundColor = 'rgba(46, 139, 192, 0.9)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuActive(false);
  }, [location]);

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="HelpyCare Logo" className="logo" />
            <span className="brand-name">HelpyCare</span>
          </Link>
        </div>

        <div className={`nav-links ${menuActive ? 'active' : ''}`}>
          <Link to="/inicio" className="nav-link">Inicio</Link>
          <Link to="/productos" className="nav-link">Productos</Link>
          <Link to="/sobre-nosotros" className="nav-link">Sobre Nosotros</Link>
          <Link to="/ventas-empleado" className="nav-link">Ventas</Link>
          <div className="nav-actions">
            <Link to="/login" className="btn-login">Iniciar Sesión</Link>
          </div>
        </div>

        <button 
          className={`mobile-menu-button ${menuActive ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;