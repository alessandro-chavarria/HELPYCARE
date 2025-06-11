import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const BienvenidaPage = () => {
  return (
    <div className="page-container">
      <NavBar />
      
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <h1>Esto es HelpyCare</h1>
              <p className="hero-subtitle">La cabeza de un sistema completo</p>
              <p className="hero-description">
                Puede ser utilizado por procesos de seguridad y salud.
              </p>
              
              <div className="hero-cta">
                <Link to="/productos" className="cta-button">Ver más</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Eliminado para simplificar según la imagen */}

        {/* Products Section - Eliminado para simplificar según la imagen */}
      </main>
      
      <Footer />
    </div>
  );
};

export default BienvenidaPage;