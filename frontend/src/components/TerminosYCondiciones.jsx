import React from 'react';
import { Link } from 'react-router-dom';
import './TerminosYCondiciones.css';

const TerminosYCondiciones = () => {
  return (
    <div className="terminos-container">
      {/* Header - igual al que tienes en SobreNosotros */}
      <header className="header">
        <div className="logo">
          <img src="/assets/logo.png" alt="helpycare" />
          <span></span>
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
      <div className="terminos-main">
        <div className="terminos-header">
          <h1>Terminos y Condiciones</h1>
        </div>

        <div className="terminos-content">
          <section className="terminos-section">
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al utilizar los servicios de HelpyCare, usted acepta estar sujeto a estos Términos y Condiciones, junto con nuestra Política 
              de Privacidad, que regula el uso de nuestro sitio web y servicios. Estos términos pueden ser modificados en cualquier 
              momento, por lo que le recomendamos que los revise periódicamente.
            </p>
          </section>
          
          <section className="terminos-section">
            <h2>2. Servicios de HelpyCare</h2>
            <p>
              HelpyCare es una tienda online dedicada a la venta de audífonos retro auriculares, ofreciendo productos de alta calidad 
              con diseños clásicos y tecnología moderna. En nuestro sitio web podrá:
            </p>
            <ul>
              <li>Explorar una amplia variedad de audífonos retro auriculares de diferentes marcas y modelos.</li>
              <li>Realizar compras en línea de nuestros productos.</li>
              <li>Consultar las especificaciones, precios y disponibilidad de los audífonos retro auriculares.</li>
              <li>Recibir soporte al cliente para resolver dudas relacionadas con productos, compras o envíos.</li>
            </ul>
            <p>
              Al acceder a nuestro sitio web, usted acepta realizar sus compras de acuerdo con las políticas de compra y devolución de
              HelpyCare.
            </p>
          </section>
          
          <section className="terminos-section">
            <h2>3. Registro y Cuenta de Usuario</h2>
            <p>
              Para realizar compras en nuestro sitio, es necesario crear una cuenta. Al registrarse, usted se compromete a proporcionar
              información precisa, actualizada y completa. Es su responsabilidad mantener la confidencialidad de su cuenta y la
              contraseña. Usted es responsable de todas las actividades que ocurran bajo su cuenta, ya sea autorizadas o no.
            </p>
          </section>
          
          <section className="terminos-section">
            <h2>4. Uso del Sitio Web</h2>
            <p>
              Usted se compromete a utilizar el sitio web y los servicios de HelpyCare únicamente para fines lícitos y de acuerdo con
              todos los términos establecidos en este acuerdo. Queda estrictamente prohibido:
            </p>
            <ul>
              <li>Utilizar el sitio web de manera que pueda dañar, deshabilitar, sobrecargar o perjudicar su funcionamiento.</li>
              <li>Realizar actividades fraudulentas, abusivas o ilegales.</li>
              <li>Modificar, distribuir o reproducir el contenido del sitio sin autorización previa.</li>
            </ul>
          </section>
          
          <section className="terminos-section">
            <h2>5. Propiedad Intelectual</h2>
            <p>
              Todo el contenido del sitio web de HelpyCare, incluyendo pero no limitándose a textos, gráficos, logotipos, imágenes, y
              software, está protegido por derechos de propiedad intelectual y es propiedad de HelpyCare o de sus licenciantes. Usted
              no podrá usar, reproducir ni distribuir ninguno de estos materiales sin nuestro consentimiento expreso.
            </p>
          </section>
          
          <section className="terminos-section">
            <h2>6. Política de Privacidad</h2>
            <p>
              El uso de la información recopilada a través de nuestro sitio web se rige por nuestra Política de Privacidad. 
              Al utilizar nuestro sitio, usted consiente la recopilación y uso de esta información según lo establecido en nuestra Política.
            </p>
          </section>
          
          <section className="terminos-section">
            <h2>7. Garantías y Devoluciones</h2>
            <p>
              HelpyCare ofrece garantías sobre sus productos conforme a la legislación vigente. Si no está satisfecho con su compra, 
              puede solicitar un reembolso o cambio según nuestra política de devoluciones disponible en nuestro sitio web.
            </p>
          </section>
          
          <section className="terminos-section">
            <h2>8. Limitación de Responsabilidad</h2>
            <p>
              HelpyCare no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o 
              la imposibilidad de usar nuestros servicios o productos.
            </p>
          </section>
          
          <section className="terminos-section">
            <h2>9. Legislación Aplicable</h2>
            <p>
              Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes vigentes, y cualquier disputa 
              relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales competentes.
            </p>
          </section>
          
          <section className="terminos-section">
            <h2>10. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través de:
              <br />
              Email: HelpyCare@gmail.com
              <br />
              Teléfono: (123) 456-7890
            </p>
          </section>
        </div>
        
        {/* Sección de contacto - similar a la que tienes en SobreNosotros */}
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
            <Link to="/sobre-nosotros">Volver a Sobre Nosotros</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminosYCondiciones;