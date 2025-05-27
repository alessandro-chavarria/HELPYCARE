import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const BienvenidaPage = () => {
  return (
    <div className="page-container">
      <NavBar />
      
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <span className="tech-badge">Tecnología Avanzada</span>
            <h1>Esto es HelpyCare</h1>
            <p className="tagline">"Cuidamos de ti por qué cada año cuenta"</p>
            
            <div className="features">
              <div className="feature">
                <div className="feature-icon">✓</div>
                <span className="feature-text">Calidad premium garantizada</span>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <span className="feature-text">Tecnología de última generación</span>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <span className="feature-text">Soporte técnico personalizado</span>
              </div>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <Link to="/productos">
                <button className="btn">Ver Productos</button>
              </Link>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src="https://via.placeholder.com/450x400/e3f2fd/0078b4?text=Audífono+HelpyCare" 
              alt="Audífono HelpyCare" 
              className="hero-img"
            />
            <span className="new-badge">¡Nuevo!</span>
          </div>
        </div>
      </section>
      
      <section className="content-section">
        <h2 className="section-title">Nuestros productos</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Descubre nuestra línea de productos diseñados para mejorar tu calidad de vida
          con la más alta tecnología y diseños ergonómicos.
        </p>
        
        <div className="product-grid">
          {/* Ejemplo de tarjetas de producto */}
          {[1, 2, 3].map((item) => (
            <div className="product-card" key={item}>
              <img 
                src={`https://via.placeholder.com/300x200/e3f2fd/0078b4?text=Producto+${item}`}
                alt={`Producto ${item}`}
                className="product-image"
              />
              <div className="product-info">
                <h3>Audífono Modelo Pro {item}</h3>
                <p>Tecnología avanzada para una experiencia auditiva superior.</p>
                <Link to={`/producto/${item}`}>
                  <button className="btn" style={{ marginTop: '1rem' }}>Ver detalles</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BienvenidaPage;