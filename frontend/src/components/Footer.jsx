import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-title">HelpyCare</h3>
          <p>Cuidamos de ti por qué cada año cuenta.</p>
          <p>© {new Date().getFullYear()} HelpyCare. Todos los derechos reservados.</p>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Enlaces rápidos</h3>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link to="/terminos">Términos y Condiciones</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Contacto</h3>
          <ul className="footer-links">
            <li>Email: contacto@helpycare.com</li>
            <li>Teléfono: +1 234 567 890</li>
            <li>Dirección: Av. Principal #123</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Síguenos</h3>
          <ul className="footer-links">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;