  import React, { useState, useEffect } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { 
    faShoppingCart, 
    faBars, 
    faEnvelope, 
    faPhone, 
    faSearch, 
    faCreditCard, 
    faCheckCircle, 
    faCalendarAlt,
    faDownload,
    faInfoCircle 
  } from '@fortawesome/free-solid-svg-icons';
  import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
  import logoImg from '../assets/logo.png';
  import audifonoImg from '../assets/audifono1.png';
  import './VentasEmpleado.css';

  const VentasEmpleado = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [filtroEstado, setFiltroEstado] = useState('todos');  
    const [filtroFecha, setFiltroFecha] = useState('todos');
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();

    // Datos de ejemplo para las ventas
    const [ventas, setVentas] = useState([
      {
        id: 1,
        producto: "Audífono Digital Premium",
        cliente: "María González",
        fecha: "10/05/2025",
        metodo: "Tarjeta",
        estado: "Realizado",
        monto: "$299.99",
        imagen: audifonoImg
      },
      {
        id: 2,
        producto: "Audífono Mini Discreto",
        cliente: "Roberto Sánchez",
        fecha: "09/05/2025",
        metodo: "Efectivo",
        estado: "Realizado",
        monto: "$249.99",
        imagen: audifonoImg
      },
      {
        id: 3,
        producto: "Audífono Recargable Plus",
        cliente: "Juan Pérez",
        fecha: "08/05/2025",
        metodo: "Tarjeta",
        estado: "Pendiente",
        monto: "$329.99",
        imagen: audifonoImg
      },
      {
        id: 4,
        producto: "Audífono Digital Premium",
        cliente: "Ana López",
        fecha: "07/05/2025",
        metodo: "Transferencia",
        estado: "Realizado",
        monto: "$299.99",
        imagen: audifonoImg
      }
    ]);

    useEffect(() => {
      // Aquí podrías hacer una llamada a tu API para obtener los datos reales
    }, []);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    // Filtrado de ventas
    const ventasFiltradas = ventas.filter(venta => {
      if (filtroEstado !== 'todos' && venta.estado !== filtroEstado) {
        return false;
      }
      
      if (filtroFecha === 'hoy' && venta.fecha !== '10/05/2025') {
        return false;
      } else if (filtroFecha === 'semana' && !['07/05/2025', '08/05/2025', '09/05/2025', '10/05/2025'].includes(venta.fecha)) {
        return false;
      }
      
      if (busqueda && !venta.cliente.toLowerCase().includes(busqueda.toLowerCase()) &&
          !venta.producto.toLowerCase().includes(busqueda.toLowerCase())) {
        return false;
      }
      
      return true;
    });

    const getEstadoClase = (estado) => {
      switch(estado) {
        case 'Realizado': return 'estado-realizado';
        case 'Pendiente': return 'estado-pendiente';
        case 'Cancelado': return 'estado-cancelado';
        default: return '';
      }
    };

    return (
      <div className="ventas-empleado-container">
        <header className="header">
          <div className="logo">
            <img src={logoImg} alt="HelpyCare Logo" className="logo-img" />
          </div>
          
          <div className="mobile-menu-button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/ventas-empleado" className="active">Ventas</Link></li>
              <li><Link to="/agregar-producto">Agregar Producto</Link></li>
            </ul>
          </nav>
          
          <div className="header-right">
            <Link to="/carrito" className="cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>

        </header>
        <main className="ventas-content">
          <div className="page-header">
            <h1 className="section-title">Gestión de Ventas</h1>
            <div className="header-actions">
              <button className="btn-primary">Nueva Venta</button>
            </div>
          </div>
          
          <div className="filtros-ventas">
            <div className="filtros-grupo">
              <select 
                className="filtro-select" 
                value={filtroEstado} 
                onChange={(e) => setFiltroEstado(e.target.value)}
              >
                <option value="todos">Todos los estados</option>
                <option value="Realizado">Realizados</option>
                <option value="Pendiente">Pendientes</option>
                <option value="Cancelado">Cancelados</option>
              </select>
              
              <select 
                className="filtro-select" 
                value={filtroFecha} 
                onChange={(e) => setFiltroFecha(e.target.value)}
              >
                <option value="todos">Todas las fechas</option>
                <option value="hoy">Hoy</option>
                <option value="semana">Esta semana</option>
                <option value="mes">Este mes</option>
              </select>
            </div>
            
            <div className="buscar-ventas">
              <FontAwesomeIcon icon={faSearch} className="buscar-icono" />
              <input 
                type="text" 
                className="buscar-input" 
                placeholder="Buscar por cliente o producto" 
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </div>
          
          <div className="ventas-grid">
            {ventasFiltradas.length > 0 ? (
              ventasFiltradas.map((venta) => (
                <div key={venta.id} className="venta-card">
                  <div className="venta-imagen">
                    <img src={venta.imagen} alt={venta.producto} />
                  </div>
                  <div className="venta-info">
                    <h3>{venta.producto}</h3>
                    <p className="venta-id">Venta #{venta.id}</p>
                    
                    <div className="venta-detalle">
                      <FontAwesomeIcon icon={faInfoCircle} className="detalle-icono" />
                      <span>Cliente: {venta.cliente}</span>
                    </div>
                    
                    <div className="venta-detalle">
                      <FontAwesomeIcon icon={faCreditCard} className="detalle-icono" />
                      <span>Método: {venta.metodo}</span>
                    </div>
                    
                    <div className="venta-detalle">
                      <FontAwesomeIcon icon={faCalendarAlt} className="detalle-icono" />
                      <span>Fecha: {venta.fecha}</span>
                    </div>
                    
                    <div className="venta-detalle">
                      <FontAwesomeIcon icon={faCheckCircle} className="detalle-icono" />
                      <span>Estado: <span className={getEstadoClase(venta.estado)}>{venta.estado}</span></span>
                    </div>
                    
                    <div className="venta-monto">{venta.monto}</div>
                    
                    <div className="venta-actions">
                      <button className="btn-venta">
                        <FontAwesomeIcon icon={faDownload} /> Factura
                      </button>
                      <button className="btn-detalles">Ver detalles</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No se encontraron ventas con los filtros seleccionados.</p>
              </div>
            )}
          </div>
          
          {ventasFiltradas.length > 0 && (
            <div className="paginacion">
              <div className="pagina-btn">«</div>
              <div className="pagina-actual">1</div>
              <div className="pagina-btn">2</div>
              <div className="pagina-btn">3</div>
              <div className="pagina-btn">»</div>
            </div>
          )}
        </main>

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
              <h3>Enlaces rápidos</h3>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                <li><Link to="/ventas-empleado">Ventas</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Contacto</h3>
              <p><FontAwesomeIcon icon={faPhone} /> +34 91 234 5678</p>
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
  };

  export default VentasEmpleado;