import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PaginaInicio.css';
import audifono from '../assets/audifono1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faEnvelope, faPhone, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function PaginaInicio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [likedProducts, setLikedProducts] = useState({});
  const location = useLocation();

  const featuredProducts = [
    {
      id: 1,
      name: "Audífono Digital Premium",
      price: 299.99,
      image: audifono,
      description: "Tecnología avanzada para una audición clara y natural"
    },
    {
      id: 2,
      name: "Audífono Mini Discreto",
      price: 249.99,
      image: audifono,
      description: "Diseño pequeño y cómodo para uso diario"
    },
    {
      id: 3,
      name: "Audífono Recargable Plus",
      price: 329.99,
      image: audifono,
      description: "Batería recargable de larga duración"
    },
  ];

  const testimonials = [
    { id: 1, name: "María G.", age: 68, text: "HelpyCare cambió mi vida. Ahora puedo disfrutar de las conversaciones familiares nuevamente." },
    { id: 2, name: "Carlos P.", age: 72, text: "Excelente servicio y productos de calidad. El soporte técnico es increíble." },
    { id: 3, name: "Ana L.", age: 65, text: "Después de probar varias marcas, HelpyCare es sin duda la mejor opción para mí." },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const addToCart = (productId) => {
    setCartCount(cartCount + 1);
    // Guardar en localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productToAdd = featuredProducts.find(p => p.id === productId);
    cart.push(productToAdd);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const toggleLike = (productId) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
    }
  };

  return (
    <div className="pagina-inicio-container">
      <div className="header">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="HelpyCare Logo" className="logo-img" />
          <span className="logo-text"></span>
        </div>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/inicio" className="active" onClick={handleHomeClick}>Inicio</Link></li>
            <li><Link to="/productos" className="">Productos</Link></li>
            <li><Link to="/sobre-nosotros" className="">Sobre Nosotros</Link></li>
            <li><Link to="/ventas-empleado" className="">Ventas</Link></li>
            <li>
              <button
                style={{
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#0056b3";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#2e8bc0";
                }}
              >
                <Link to="/login" className="active" style={{ color: "white", textDecoration: "none" }}>
                  Login
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <div className="left-content">
          <div className="hero-badge">Tecnología  Avanzada</div>
          <h1>Esto es HelpyCare</h1>
          <p className="slogan">"Cuidamos de ti porque cada año cuenta"</p>
          <div className="features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p>Calidad premium garantizada</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p>Tecnología de última generación</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p>Soporte técnico personalizado</p>
            </div>
          </div>
        </div>

        <div className="right-content">
          <div className="product-image-container">
            <img src={audifono} alt="Audífono HelpyCare" className="product-image bounce-animation" />
            <div className="product-badge">¡Nuevo!</div>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"{testimonials[currentTestimonial].text}"</p>
            </div>
            <div className="testimonial-author">
              <p>{testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].age} años</p>
            </div>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="featured-products">
        <h2>Productos destacados</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="quick-add" onClick={() => addToCart(product.id)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Añadir
                  </button>
                  <button 
                    className={`quick-view ${likedProducts[product.id] ? 'liked' : ''}`} 
                    onClick={() => toggleLike(product.id)}
                  >
                    <FontAwesomeIcon 
                      icon={faHeart} 
                      className={likedProducts[product.id] ? 'heart-beat' : ''}
                    />
                  </button>
                </div>
              </div>
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <h3>HelpyCare</h3>
            <p>Mejorando la calidad de vida con tecnología avanzada para la audición.</p>
            <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Contacto</h3>
            <p><FontAwesomeIcon icon={faPhone} /> +503 7698-9070</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> info@helpycare.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HelpyCare. Todos los derechos reservados.</p>
          <div className="footer-links">
            <Link to="/privacidad">Política de Privacidad</Link>
            <Link to="/terminos">Términos y Condiciones</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PaginaInicio;  