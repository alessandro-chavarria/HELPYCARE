import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faStar, faChevronLeft, faTimes, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import './PaginaDetalleProducto.css';

const CarritoEmergente = ({ onClose }) => {
  const navigate = useNavigate();
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [productosRelacionados, setProductosRelacionados] = useState([]);
  
  useEffect(() => {
    const carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];
    setProductosCarrito(carritoItems);
    
    const total = carritoItems.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    setSubtotal(total);
    
    const todosProductos = JSON.parse(localStorage.getItem('productos')) || [];
    const productosNoEnCarrito = todosProductos.filter(prod => !carritoItems.some(item => item.id === prod.id));
    const relacionados = productosNoEnCarrito.sort(() => 0.5 - Math.random()).slice(0, 2);
    setProductosRelacionados(relacionados);
  }, []);
  
  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    
    const nuevosProductos = productosCarrito.map(item => 
      item.id === id ? {...item, cantidad} : item
    );
    
    setProductosCarrito(nuevosProductos);
    localStorage.setItem('carrito', JSON.stringify(nuevosProductos));
    setSubtotal(nuevosProductos.reduce((sum, item) => sum + (item.precio * item.cantidad), 0));
  };
  
  const eliminarProducto = (id) => {
    const nuevosProductos = productosCarrito.filter(item => item.id !== id);
    setProductosCarrito(nuevosProductos);
    localStorage.setItem('carrito', JSON.stringify(nuevosProductos));
    setSubtotal(nuevosProductos.reduce((sum, item) => sum + (item.precio * item.cantidad), 0));
  };
  
  const finalizarCompra = () => {
    navigate('/finalizar-compra');
    onClose();
  };
  
  return (
    <div className="carrito-overlay">
      <div className="carrito-sidebar">
        <div className="carrito-header">
          <h3>Tu Carrito</h3>
          <button className="btn-cerrar" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        {productosCarrito.length === 0 ? (
          <div className="carrito-vacio">
            <p>No hay productos en tu carrito</p>
            <Link to="/productos" className="btn-seguir-comprando" onClick={onClose}>
              Ver productos
            </Link>
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
                    <h4 className="carrito-producto-nombre">{item.nombre}</h4>
                    <p className="carrito-producto-precio">${item.precio.toFixed(2)}</p>
                    <div className="carrito-cantidad">
                      <button 
                        className="btn-cantidad" 
                        onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <input 
                        type="number" 
                        min="1" 
                        value={item.cantidad} 
                        onChange={(e) => actualizarCantidad(item.id, parseInt(e.target.value) || 1)} 
                      />
                      <button 
                        className="btn-cantidad" 
                        onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                      <button 
                        className="btn-eliminar"
                        onClick={() => eliminarProducto(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="carrito-subtotal">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <button className="btn-finalizar" onClick={finalizarCompra}>
              Finalizar compra
            </button>
          </>
        )}
        
        {productosRelacionados.length > 0 && (
          <div className="productos-recomendados">
            <h4>Productos relacionados</h4>
            <div className="recomendados-grid">
              {productosRelacionados.map(prod => (
                <Link 
                  key={prod.id} 
                  to={`/producto/${prod.id}`} 
                  className="producto-recomendado"
                  onClick={onClose}
                >
                  <img src={prod.imagen} alt={prod.nombre} />
                  <p>${prod.precio.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
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
  
  useEffect(() => {
    const productosData = JSON.parse(localStorage.getItem('productos')) || [];
    const productoEncontrado = productosData.find(p => p.id === parseInt(id));
    
    if (productoEncontrado) {
      setProducto(productoEncontrado);
      
      const relacionados = productosData
        .filter(p => p.id !== parseInt(id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
        
      setProductosRelacionados(relacionados);
    } else {
      navigate('/productos');
    }
  }, [id, navigate]);

  if (!producto) {
    return (
      <div className="pagina-detalle-producto cargando">
        <div className="spinner"></div>
        <p>Cargando producto...</p>
      </div>
    );
  }

  const renderEstrellas = (calificacion) => {
    return [...Array(5)].map((_, i) => (
      <FontAwesomeIcon 
        key={i} 
        icon={faStar} 
        className={`estrella ${i < calificacion ? 'activa' : ''}`}
      />
    ));
  };
  
  const agregarAlCarrito = () => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const indexEnCarrito = carritoActual.findIndex(item => item.id === producto.id);
    
    if (indexEnCarrito >= 0) {
      carritoActual[indexEnCarrito].cantidad += quantity;
    } else {
      carritoActual.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagenes ? producto.imagenes[0] : producto.imagen,
        cantidad: quantity
      });
    }
    
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
    setShowCart(true);
  };
  
  const incrementarCantidad = () => setQuantity(q => q + 1);
  const decrementarCantidad = () => setQuantity(q => q > 1 ? q - 1 : 1);

  return (
    <div className="pagina-detalle-producto">
      <header className="header">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="HelpyCare Logo" className="logo-img" />
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos" className="active">Productos</Link></li>
            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
          </ul>
        </nav>
      </header>

      <div className="breadcrumb">
        <Link to="/productos">
          <FontAwesomeIcon icon={faChevronLeft} /> Volver a productos
        </Link>
      </div>

      <main className="detalle-producto-container">
        <section className="producto-imagenes">
          <div className="imagenes-miniaturas">
            {producto.imagenes && producto.imagenes.map((img, index) => (
              <div 
                key={index} 
                className={`miniatura ${selectedImage === index ? 'seleccionada' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`Vista ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="imagen-principal">
            <img 
              src={producto.imagenes ? producto.imagenes[selectedImage] : producto.imagen} 
              alt={producto.nombre} 
            />
          </div>
        </section>

        <section className="producto-info">
          <div className="producto-info-card">
            <h1>{producto.nombre}</h1>
            
            <div className="producto-rating-container">
              <div className="producto-rating">
                {renderEstrellas(producto.calificacion)}
                <span>({producto.resenas} reseñas)</span>
              </div>
            </div>
            
            <p className="producto-descripcion">{producto.descripcion}</p>
            
            <div className="producto-precio">
              ${producto.precio.toFixed(2)}
            </div>
            
            <div className="cantidad-selector">
              <label>Cantidad:</label>
              <div className="cantidad-controls">
                <button onClick={decrementarCantidad}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
                />
                <button onClick={incrementarCantidad}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            
            <button className="btn-agregar-carrito" onClick={agregarAlCarrito}>
              <FontAwesomeIcon icon={faShoppingCart} /> Añadir al carrito
            </button>
          </div>
        </section>
      </main>

      <section className="seccion-resenas">
        <h2>Valoraciones del producto</h2>
        
        <div className="resenas-contenido">
          <div className="resenas-stats">
            <div className="stats-item">
              <span>5 estrellas</span>
              <div className="rating-bar">
                <div className="bar-fill" style={{ width: producto.calificacion === 5 ? '100%' : '0%' }}></div>
              </div>
            </div>
            {/* Repetir para 4, 3, 2, 1 estrellas */}
          </div>
          
          <div className="resenas-summary">
            <div className="rating-big">
              {producto.calificacion.toFixed(1)}
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>Basado en {producto.resenas} reseñas</p>
          </div>
        </div>
        
        <button className="btn-escribir-resena">Escribir reseña</button>
      </section>

      <section className="productos-relacionados">
        <h2>Productos relacionados</h2>
        <div className="productos-relacionados-grid">
          {productosRelacionados.map(prod => (
            <div key={prod.id} className="producto-relacionado-card">
              <Link to={`/producto/${prod.id}`}>
                <img src={prod.imagen} alt={prod.nombre} />
                <h3>{prod.nombre}</h3>
                <div className="producto-rating">
                  {renderEstrellas(prod.calificacion)}
                  <span>({prod.resenas})</span>
                </div>
                <p className="precio">${prod.precio.toFixed(2)}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {showCart && <CarritoEmergente onClose={() => setShowCart(false)} />}
    </div>
  );
};

export default PaginaDetalleProducto;