import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './PaginaDetalleProducto.css';


// Componente CarritoEmergente
const CarritoEmergente = ({ onClose }) => {
  const navigate = useNavigate();
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [productosRelacionados, setProductosRelacionados] = useState([]);
  
  // Cargar productos del carrito y productos relacionados
  useEffect(() => {
    // Cargar productos del carrito
    const carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];
    setProductosCarrito(carritoItems);
    
    // Calcular subtotal
    const total = carritoItems.reduce(
      (sum, item) => sum + (item.precio * item.cantidad), 0
    );
    setSubtotal(total);
    
    // Cargar productos relacionados
    const todosProductos = JSON.parse(localStorage.getItem('productos')) || [];
    if (carritoItems.length > 0) {
      // Filtrar productos que no están en el carrito
      const productosNoEnCarrito = todosProductos.filter(
        prod => !carritoItems.some(item => item.id === prod.id)
      );
      
      // Tomar 2 productos aleatorios
      const relacionados = productosNoEnCarrito
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
      
      setProductosRelacionados(relacionados);
    } else {
      // Si no hay productos en el carrito, mostrar productos aleatorios
      const relacionados = todosProductos
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
      
      setProductosRelacionados(relacionados);
    }
  }, []);
  
  // Actualizar cantidad de un producto
  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    
    const nuevosProductos = productosCarrito.map(item => {
      if (item.id === id) {
        return {...item, cantidad: cantidad};
      }
      return item;
    });
    
    setProductosCarrito(nuevosProductos);
    
    // Actualizar localStorage
    localStorage.setItem('carrito', JSON.stringify(nuevosProductos));
    
    // Recalcular subtotal
    const total = nuevosProductos.reduce(
      (sum, item) => sum + (item.precio * item.cantidad), 0
    );
    setSubtotal(total);
  };
  
  // Eliminar producto del carrito
  const eliminarProducto = (id) => {
    const nuevosProductos = productosCarrito.filter(item => item.id !== id);
    setProductosCarrito(nuevosProductos);
    
    // Actualizar localStorage
    localStorage.setItem('carrito', JSON.stringify(nuevosProductos));
    
    // Recalcular subtotal
    const total = nuevosProductos.reduce(
      (sum, item) => sum + (item.precio * item.cantidad), 0
    );
    setSubtotal(total);
  };
  
  // Función para finalizar compra - REDIRECCIÓN DIRECTA
  const finalizarCompra = () => {
    navigate('/finalizar-compra');
    onClose(); // Cerrar el carrito al navegar
  };
  
  return (
    <div className="carrito-sidebar-overlay">
      <div className="carrito-sidebar">
        <div className="carrito-header">
          <h3>Carrito de compras</h3>
          <button className="btn-cerrar" onClick={onClose}>×</button>
        </div>
        
        {productosCarrito.length === 0 ? (
          <div className="carrito-vacio">
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="carrito-productos-lista">
              {productosCarrito.map(item => (
                <div key={item.id} className="carrito-producto">
                  <div className="carrito-producto-imagen">
                    <img src={item.imagen} alt={item.nombre} />
                  </div>
                  <div className="carrito-producto-info">
                    <p className="carrito-producto-nombre">{item.nombre}</p>
                    <p className="carrito-producto-precio">Precio: $ {item.precio.toFixed(2)}</p>
                    <div className="carrito-cantidad">
                      <button 
                        className="btn-decrementar" 
                        onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        min="1" 
                        value={item.cantidad} 
                        onChange={(e) => actualizarCantidad(item.id, parseInt(e.target.value) || 1)} 
                      />
                      <button 
                        className="btn-incrementar" 
                        onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                      >
                        +
                      </button>
                      <button 
                        className="btn-eliminar"
                        onClick={() => eliminarProducto(item.id)}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20">
                          <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="carrito-subtotal">
              <p>Sub Total: <span>$ {subtotal.toFixed(2)}</span></p>
            </div>
            
            <button className="btn-finalizar" onClick={finalizarCompra}>Finalizar compra</button>
          </>
        )}
        
        <div className="productos-recomendados">
          <p>Puede Interesarte:</p>
          <div className="recomendados-grid">
            {productosRelacionados.map(prod => (
              <div key={prod.id} className="producto-recomendado">
                <Link to={`/producto/${prod.id}`} onClick={onClose}>
                  <img src={prod.imagen} alt={prod.nombre} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
  
  // Función para agregar al carrito (actualizada)
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
        imagen: producto.imagenes ? producto.imagenes[0] : producto.imagen,
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

  return (
    <div className="pagina-detalle-producto">
      {/* Header */}
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
          </ul>
        </nav>
        
       
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

      {/* Carrito de compras (lado derecho) - Actualizado para navegar directamente */}
      {showCart && (
        <CarritoEmergente onClose={cerrarCarrito} />
      )}
    </div>
  );
};

export default PaginaDetalleProducto;