import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './PaginaDetalleProducto.css';

const PaginaDetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [producto, setProducto] = useState(null);
  const [productosRelacionados, setProductosRelacionados] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Cargar datos del producto según el ID
  useEffect(() => {
    const productosData = JSON.parse(localStorage.getItem('productos')) || [];
    const productoEncontrado = productosData.find(p => p.id === parseInt(id));
    
    if (productoEncontrado) {
      setProducto(productoEncontrado);
      setSelectedImage(0);
      
      // Generar productos relacionados (excluyendo el producto actual)
      const relacionados = productosData
        .filter(p => p.id !== parseInt(id))
        .sort(() => 0.5 - Math.random()) // Mezclar aleatoriamente
        .slice(0, 2); // Tomar solo 2 productos
        
      setProductosRelacionados(relacionados);
    } else {
      // Si no se encuentra el producto, redirigir a la página de productos
      navigate('/productos');
    }
  }, [id, navigate]);

  // Si el producto aún no se ha cargado, mostrar un mensaje de carga
  if (!producto) {
    return <div className="cargando">Cargando producto...</div>;
  }

  // Función para mostrar estrellas según la calificación
  const renderEstrellas = (calificacion) => {
    const estrellas = [];
    for (let i = 1; i <= 5; i++) {
      estrellas.push(
        <span 
          key={i} 
          className={`estrella ${i <= calificacion ? 'activa' : ''}`}
        >
          ★
        </span>
      );
    }
    return estrellas;
  };
  
  // Función para agregar al carrito
  const agregarAlCarrito = () => {
    // Obtener el carrito actual del localStorage o inicializar uno nuevo
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Verificar si el producto ya está en el carrito
    const indexEnCarrito = carritoActual.findIndex(item => item.id === producto.id);
    
    if (indexEnCarrito >= 0) {
      // Si ya existe, actualizar la cantidad
      carritoActual[indexEnCarrito].cantidad += quantity;
    } else {
      // Si no existe, añadirlo al carrito
      carritoActual.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad: quantity
      });
    }
    
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
    
    // Mostrar el modal del carrito
    setShowCart(true);
  };
  
  // Función para cerrar carrito
  const cerrarCarrito = () => {
    setShowCart(false);
  };

  // Función para incrementar cantidad
  const incrementarCantidad = () => {
    setQuantity(quantity + 1);
  };

  // Función para decrementar cantidad
  const decrementarCantidad = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Función para cambiar la imagen seleccionada
  const cambiarImagen = (index) => {
    setSelectedImage(index);
  };

  // Función para ir a la página de finalizar compra
  const finalizarCompra = () => {
    navigate('/carrito');
  };

  return (
    <div className="pagina-detalle-producto">
      {/* Header */}
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
        
        <div className="carrito-icon">
          <Link to="/carrito">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </Link>
        </div>
      </header>

      {/* Migas de pan */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link> / 
        <Link to="/productos">Productos</Link> / 
        <span>{producto.nombre}</span>
      </div>

      {/* Contenido principal */}
      <div className="detalle-producto-container">
        {/* Imágenes del producto */}
        <div className="producto-imagenes">
          <div className="imagenes-miniaturas">
            {producto.imagenes && producto.imagenes.map((img, index) => (
              <div 
                key={index} 
                className={`miniatura ${selectedImage === index ? 'seleccionada' : ''}`}
                onClick={() => cambiarImagen(index)}
              >
                <img src={img} alt={`${producto.nombre} - imagen ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="imagen-principal">
            <img 
              src={producto.imagenes ? producto.imagenes[selectedImage] : producto.imagen} 
              alt={producto.nombre} 
            />
          </div>
        </div>

        {/* Información del producto */}
        <div className="producto-info">
          <div className="producto-info-card">
            <h1 className="producto-nombre">{producto.nombre}</h1>
            <div className="producto-rating-container">
              <div className="producto-rating">
                {renderEstrellas(producto.calificacion)}
                <span className="resenas">({producto.resenas} reseñas)</span>
              </div>
            </div>
            <p className="producto-descripcion">{producto.descripcion}</p>
            <p className="producto-precio">Precio: $ {producto.precio.toFixed(2)}</p>
            
            <div className="cantidad-selector">
              <span>Cantidad:</span>
              <div className="cantidad-controls">
                <button onClick={decrementarCantidad} className="cantidad-btn">-</button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} 
                  className="cantidad-input"
                />
                <button onClick={incrementarCantidad} className="cantidad-btn">+</button>
              </div>
            </div>
            
            <button className="btn-agregar-carrito" onClick={agregarAlCarrito}>
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      </div>

      {/* Sección de reseñas */}
      <div className="seccion-resenas">
        <div className="resenas-header">
          <h2>Reviews</h2>
          <span className="tab-active">Resumen</span>
        </div>
        
        <div className="resenas-contenido">
          <div className="resenas-stats">
            <div className="stats-item">
              <span className="rating-number">5</span>
              <div className="rating-bar">
                <div className="bar-fill" style={{ width: producto.calificacion === 5 ? '100%' : '0%' }}></div>
              </div>
            </div>
            <div className="stats-item">
              <span className="rating-number">4</span>
              <div className="rating-bar">
                <div className="bar-fill" style={{ width: producto.calificacion === 4 ? '100%' : '0%' }}></div>
              </div>
            </div>
            <div className="stats-item">
              <span className="rating-number">3</span>
              <div className="rating-bar">
                <div className="bar-fill" style={{ width: producto.calificacion === 3 ? '100%' : '0%' }}></div>
              </div>
            </div>
            <div className="stats-item">
              <span className="rating-number">2</span>
              <div className="rating-bar">
                <div className="bar-fill" style={{ width: producto.calificacion === 2 ? '100%' : '0%' }}></div>
              </div>
            </div>
            <div className="stats-item">
              <span className="rating-number">1</span>
              <div className="rating-bar">
                <div className="bar-fill" style={{ width: producto.calificacion === 1 ? '100%' : '0%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="resenas-summary">
            <div className="rating-big">
              <span className="rating-value">{producto.calificacion.toFixed(1)}</span>
              <span className="rating-star">★</span>
            </div>
            <div className="rating-text">Calificación general</div>
            
            <div className="rating-percentage">
              <span className="percentage-value">100%</span>
              <p className="percentage-text">de las personas que calificaron recomiendan este producto.</p>
            </div>
          </div>
        </div>
        
        <div className="resenas-acciones">
          <button className="btn-escribir-resena">Escribe una reseña</button>
          <p className="resenas-disclaimer">
            Las revisiones de productos son administradas por un tercero para verificar la autenticidad y el cumplimiento de nuestras pautas de calificación y revisión
          </p>
        </div>
      </div>

      {/* Sección de productos relacionados */}
      <div className="productos-relacionados-seccion">
        <h2>Productos Relacionados</h2>
        <div className="productos-relacionados-grid">
          {productosRelacionados.map(prod => (
            <div key={prod.id} className="producto-relacionado-card">
              <Link to={`/producto/${prod.id}`}>
                <img src={prod.imagen} alt={prod.nombre} />
                <h3>{prod.nombre}</h3>
                <div className="producto-rating">
                  {renderEstrellas(prod.calificacion)}
                  <span className="resenas">({prod.resenas})</span>
                </div>
                <p className="precio">$ {prod.precio.toFixed(2)}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Carrito de compras (sidebar derecho) */}
      {showCart && (
        <div className="carrito-sidebar-overlay">
          <div className="carrito-sidebar">
            <div className="carrito-header">
              <h3>Carrito de compras</h3>
              <button className="btn-cerrar" onClick={cerrarCarrito}>×</button>
            </div>
            
            <div className="carrito-producto">
              <div className="carrito-producto-imagen">
                <img src={producto.imagen} alt={producto.nombre} />
              </div>
              <div className="carrito-producto-info">
                <p className="carrito-producto-nombre">{producto.nombre}</p>
                <p className="carrito-producto-precio">Precio: $ {producto.precio.toFixed(2)}</p>
                <div className="carrito-cantidad">
                  <button className="btn-decrementar" onClick={decrementarCantidad}>-</button>
                  <input 
                    type="number" 
                    min="1" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} 
                  />
                  <button className="btn-incrementar" onClick={incrementarCantidad}>+</button>
                  <button className="btn-eliminar">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="carrito-subtotal">
              <p>Sub Total: <span>$ {(producto.precio * quantity).toFixed(2)}</span></p>
            </div>
            
            <button className="btn-finalizar" onClick={finalizarCompra}>Finalizar compra</button>
            
            <div className="productos-recomendados">
              <p>Puede Interesarte:</p>
              <div className="recomendados-grid">
                {productosRelacionados.map(prod => (
                  <div key={prod.id} className="producto-recomendado">
                    <Link to={`/producto/${prod.id}`} onClick={cerrarCarrito}>
                      <img src={prod.imagen} alt={prod.nombre} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaginaDetalleProducto;