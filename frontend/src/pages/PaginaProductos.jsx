import React from 'react';
import { Link } from 'react-router-dom';
import './PaginaProductos.css';
import audifono from '../assets/audifono1.png';

const PaginaProductos = () => {
  // Datos de los productos que se muestran en la imagen
  const productos = [
    {
      id: 1,
      nombre: "Audífono Amplificador",
      imagen: audifono,
      calificacion: 5,
      resenas: 8,
      precio: 51.50,
      descripcion: "Audífono amplificador de sonido para mejor audición.",
      imagenes: [
        audifono,
        audifono,
        audifono,
        audifono,
      ]
    },
    {
      id: 2,
      nombre: "Audífono Amplificador Recargable",
      imagen: audifono,
      calificacion: 4,
      resenas: 3,
      precio: 40.58,
      descripcion: "Audífono amplificador recargable con batería de larga duración.",
      imagenes: [
        audifono,
        audifono,
      ]
    },
    {
      id: 3,
      nombre: "Audífo amplificador beurer",
      imagen: audifono,
      calificacion: 4,
      resenas: 5,
      precio: 38.41,
      descripcion: "Audífono amplificador de la marca Beurer con tecnología alemana.",
      imagenes: [
        audifono,
        audifono,
      ]
    },
    {
      id: 4,
      nombre: "Audífono de sonido HA20",
      imagen: audifono,
      calificacion: 4,
      resenas: 8,
      precio: 81.50,
      descripcion: "Audífono de sonido modelo HA20 con ajuste automático de volumen.",
      imagenes: [
        audifono,
        audifono,
      ]
    },
    {
      id: 5,
      nombre: "Audífono de sonido HA50 Recargable",
      imagen: audifono,
      calificacion: 5,
      resenas: 4,
      precio: 37.50,
      descripcion: "Audífono de sonido HA50 recargable con tecnología de reducción de ruido.",
      imagenes: [
        audifono,
        audifono,
      ]
    },
    {
      id: 6,
      nombre: "Audífono de sonido HA50 Recargable",
      imagen: audifono,
      calificacion: 5,
      resenas: 4,
      precio: 25.50,
      descripcion: "Audífono económico de sonido HA50 recargable para uso diario.",
      imagenes: [
        audifono,
        audifono,
      ]
    }
  ];


  
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