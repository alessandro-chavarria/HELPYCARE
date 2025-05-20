import { useState } from 'react';
import { Link } from 'react-router-dom';
 import logo from '../assets/logo.png';

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">

            <h1 style={{ color: 'white', margin: 0 }}>HelpyCare</h1>
          </Link>
        </div>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`nav-links ${menuActive ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/productos" className="nav-link">Productos</Link>
          <Link to="/sobre-nosotros" className="nav-link">Sobre Nosotros</Link>
          <Link to="/login" className="nav-link">Iniciar Sesión</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;