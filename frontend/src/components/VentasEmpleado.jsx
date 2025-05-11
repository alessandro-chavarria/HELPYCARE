import React, { useState, useEffect } from 'react';
import './VentasEmpleado.css';

const VentasEmpleado = () => {
  // Datos de ejemplo para las ventas
  const [ventas, setVentas] = useState([
    {
      id: 1,
      metodo: 'Tarjeta',
      estado: 'Realizado',
      imagen: '/audifono.png' // Ajusta la ruta a tu imagen de producto
    },
    {
      id: 2,
      metodo: 'Tarjeta',
      estado: 'Realizado',
      imagen: '/audifono.png' // Ajusta la ruta a tu imagen de producto
    }
  ]);

  // En un caso real, podrías cargar los datos desde una API
  useEffect(() => {
    // Aquí podrías hacer una llamada a tu API para obtener los datos reales
    // Ejemplo: fetch('/api/ventas').then(res => res.json()).then(data => setVentas(data));
  }, []);

  return (
    <div className="ventas-empleado-container">
      <header className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="HelpyCare" />
          <span>helpycare</span>
        </div>
        <nav className="navbar-menu">
          <a href="#" className="navbar-link">Marcas</a>
          <a href="#" className="navbar-link active">Ventas</a>
          <a href="#" className="navbar-link">Agregar Producto</a>
          <a href="#" className="navbar-link">Inicio</a>
          <a href="#" className="navbar-link">Productos</a>
          <a href="#" className="navbar-link">Sobre Nosotros</a>
        </nav>
        <div className="navbar-cart">
          <a href="#" className="cart-icon">
            <span className="cart-svg">🛒</span>
          </a>
        </div>
      </header>

      <main className="ventas-content">
        {ventas.map((venta) => (
          <div key={venta.id} className="venta-card">
            <div className="venta-imagen">
              <img src={venta.imagen} alt={`Producto de venta #${venta.id}`} />
            </div>
            <div className="venta-info">
              <h3>Venta #{venta.id}</h3>
              <p className="venta-detalle">Metodo de pago: {venta.metodo}</p>
              <p className="venta-detalle">Estado: {venta.estado}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default VentasEmpleado;