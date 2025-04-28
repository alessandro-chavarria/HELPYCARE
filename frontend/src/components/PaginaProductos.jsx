import React from 'react';
import { Link } from 'react-router-dom';
import './PaginaProductos.css';

const PaginaProductos = () => {
  // Datos de los productos que se muestran en la imagen
  const productos = [
    {
      id: 1,
      nombre: "Audífono Amplificador",
      imagen: "/assets/audifonos/audifono1.png",
      calificacion: 5,
      resenas: 8,
      precio: 51.50,
      descripcion: "Audífono amplificador de sonido para mejor audición.",
      imagenes: [
        "/assets/audifonos/audifono1.png",
        "/assets/audifonos/audifono1-2.png",
        "/assets/audifonos/audifono1-3.png",
        "/assets/audifonos/audifono1-4.png",
      ]
    },
    {
      id: 2,
      nombre: "Audífono Amplificador Recargable",
      imagen: "/assets/audifonos/audifono2.png",
      calificacion: 4,
      resenas: 3,
      precio: 40.58,
      descripcion: "Audífono amplificador recargable con batería de larga duración.",
      imagenes: [
        "/assets/audifonos/audifono2.png",
        "/assets/audifonos/audifono2.png",
      ]
    },
    {
      id: 3,
      nombre: "Audífo amplificador beurer",
      imagen: "/assets/audifonos/audifono3.png",
      calificacion: 4,
      resenas: 5,
      precio: 38.41,
      descripcion: "Audífono amplificador de la marca Beurer con tecnología alemana.",
      imagenes: [
        "/assets/audifonos/audifono3.png",
        "/assets/audifonos/audifono3.png",
      ]
    },
    {
      id: 4,
      nombre: "Audífono de sonido HA20",
      imagen: "/assets/audifonos/audifono4.png",
      calificacion: 4,
      resenas: 8,
      precio: 81.50,
      descripcion: "Audífono de sonido modelo HA20 con ajuste automático de volumen.",
      imagenes: [
        "/assets/audifonos/audifono4.png",
        "/assets/audifonos/audifono4.png",
      ]
    },
    {
      id: 5,
      nombre: "Audífono de sonido HA50 Recargable",
      imagen: "/assets/audifonos/audifono5.png",
      calificacion: 5,
      resenas: 4,
      precio: 37.50,
      descripcion: "Audífono de sonido HA50 recargable con tecnología de reducción de ruido.",
      imagenes: [
        "/assets/audifonos/audifono5.png",
        "/assets/audifonos/audifono5.png",
      ]
    },
    {
      id: 6,
      nombre: "Audífono de sonido HA50 Recargable",
      imagen: "/assets/audifonos/audifono6.png",
      calificacion: 5,
      resenas: 4,
      precio: 25.50,
      descripcion: "Audífono económico de sonido HA50 recargable para uso diario.",
      imagenes: [
        "/assets/audifonos/audifono6.png",
        "/assets/audifonos/audifono6.png",
      ]
    }
  ];

  // Guardar los productos en localStorage para acceder desde PaginaDetalleProducto
  React.useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productos));
  }, []);

  // componente para las estrellas
  const Estrellas = ({ calificacion }) => {
    return (
      <div className="estrellas">
        {[...Array(5)].map((_, index) => (
          <span 
            key={index} 
            className={`estrella ${index < calificacion ? 'activa' : ''}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  // Componente para las cards
  const ProductoCard = ({ producto }) => {
    return (
      <div className="producto-card">
        <Link to={`/producto/${producto.id}`}>
          <div className="producto-imagen">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
          <div className="producto-nombre">{producto.nombre}</div>
          <div className="producto-rating">
            <Estrellas calificacion={producto.calificacion} />
            <span className="resenas">({producto.resenas})</span>
          </div>
          <div className="producto-precio">
            {producto.id === 1 || producto.id === 4 ? (
              <span>Precio: $ {producto.precio.toFixed(2)}</span>
            ) : (
              <span>$ {producto.precio.toFixed(2)}</span>
            )}
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="pagina-productos">
      {/* Header/Navigation Bar */}
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
        
        <div className="carrito">
          <Link to="/carrito">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </Link>
        </div>
      </header>
      {/* Products Grid */}
      <div className="productos-container">
        <div className="productos-grid">
          {productos.map(producto => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginaProductos;