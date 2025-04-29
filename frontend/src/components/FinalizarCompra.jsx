import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FinalizarCompra.css';

const FinalizarCompra = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [metodoPago, setMetodoPago] = useState('tarjeta');
  const [direccionEnvio, setDireccionEnvio] = useState('');
  const [formaPago, setFormaPago] = useState({
    numeroTarjeta: '',
    nombre: '',
    fechaExpiracion: '',
    cvv: ''
  });

  // Cargar productos del carrito
  useEffect(() => {
    const carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];
    setProductos(carritoItems);
    
    // Calcular total
    const totalCompra = carritoItems.reduce(
      (sum, item) => sum + (item.precio * item.cantidad), 0
    );
    setTotal(totalCompra);
  }, []);

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormaPago({
      ...formaPago,
      [name]: value
    });
  };

  // Cambiar método de pago
  const cambiarMetodoPago = (metodo) => {
    setMetodoPago(metodo);
  };

  // Completar la compra
  const completarCompra = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de procesamiento de pago
    // Como esto es solo visual, simplemente mostraremos una alerta
    alert('¡Compra realizada con éxito!');
    // Limpiar el carrito
    localStorage.setItem('carrito', JSON.stringify([]));
    // Redirigir a la página de inicio
    navigate('/');
  };

  return (
    <div className="finalizar-compra-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
        <img src="/src/assets/logo.png" alt="HelpyCare Logo" className="logo-img" />
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

      {/* Migas de pan */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link> / 
        <Link to="/carrito">Carrito</Link> / 
        <span>Finalizar Compra</span>
      </div>

      <h1>Ingresa Datos de pago</h1>

      <div className="checkout-container">
        <div className="checkout-left">
          {/* Resumen de productos */}
          <div className="checkout-products">
            <h2>Resumen de compra</h2>
            {productos.map((item, index) => (
              <div key={index} className="checkout-product-item">
                <div className="checkout-product-image">
                  <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="checkout-product-info">
                  <h3>{item.nombre}</h3>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio unitario: ${item.precio.toFixed(2)}</p>
                  <p>Subtotal: ${(item.precio * item.cantidad).toFixed(2)}</p>
                </div>
              </div>
            ))}

            <div className="checkout-totals">
              <div className="checkout-total-row">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="checkout-total-row">
                <span>Envío:</span>
                <span>$5.00</span>
              </div>
              <div className="checkout-total-row total">
                <span>Total:</span>
                <span>${(total + 5).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-right">
          {/* Formulario de pago */}
          <div className="checkout-payment">
            <h2>Método de pago</h2>
            
            <div className="payment-methods">
              <div 
                className={`payment-method ${metodoPago === 'tarjeta' ? 'selected' : ''}`}
                onClick={() => cambiarMetodoPago('tarjeta')}
              >
                <div className="radio-btn">
                  <div className={`radio-inner ${metodoPago === 'tarjeta' ? 'active' : ''}`}></div>
                </div>
                <span>Tarjeta</span>
                <div className="card-logos">
                  <img src="/assets/visa.png" alt="Visa" />
                  <img src="/assets/mastercard.png" alt="Mastercard" />
                  <img src="/assets/amex.png" alt="American Express" />
                  <img src="/assets/discover.png" alt="Discover" />
                  <img src="/assets/dinersclub.png" alt="Diners Club" />
                  <img src="/assets/jcb.png" alt="JCB" />
                </div>
              </div>
            </div>

            <form onSubmit={completarCompra} className="payment-form">
              <div className="form-secure">
                <span className="secure-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M12 2C9.85 2 8.07 3.67 8 5.82V6H4v14h16V6h-4V5.82C15.93 3.67 14.15 2 12 2zM12 4c1.1 0 2 .9 2 2v2h-4V6c0-1.1.9-2 2-2z"/>
                  </svg>
                </span>
                <span>Conexión segura</span>
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  id="numeroTarjeta" 
                  name="numeroTarjeta" 
                  placeholder="Número de tarjeta"
                  value={formaPago.numeroTarjeta}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    placeholder="Nombre en la tarjeta"
                    value={formaPago.nombre}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    id="fechaExpiracion" 
                    name="fechaExpiracion" 
                    placeholder="MM/AA"
                    value={formaPago.fechaExpiracion}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    id="cvv" 
                    name="cvv" 
                    placeholder="CVV"
                    value={formaPago.cvv}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="direccion-envio">
                <h3>Dirección de Envío</h3>
                <div className="form-group">
                  <input 
                    type="text" 
                    id="direccion" 
                    name="direccion" 
                    placeholder="Dirección completa"
                    value={direccionEnvio}
                    onChange={(e) => setDireccionEnvio(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="direccion-actual">
                  <p>ace oesd, cdcdcd, 123asesd, San Salvador, San Salvador 1101, El Salvador</p>
                  <button type="button" className="btn-editar">Editar</button>
                </div>
              </div>

              <button type="submit" className="btn-guardar">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalizarCompra;