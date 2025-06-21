import React, { useState } from 'react';
import { ShoppingCart, User } from 'lucide-react';
import './AgregarMarca.css'; // Cambiado de AgregarMarcas.css a AgregarMarca.css

const AgregarMarcasScreen = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleAgregarMarca = () => {
    console.log('Agregar marca:', { nombre, descripcion });
    // Aquí iría la lógica para agregar la marca
  };

  const handleEliminarMarca = () => {
    console.log('Eliminar marca');
    // Aquí iría la lógica para eliminar la marca
  };

  const handleEditarMarca = () => {
    console.log('Editar marca');
    // Aquí iría la lógica para editar la marca
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="user-info">
            <User className="user-icon" />
            <span>Agregar Marcas (Empleado)</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="navbar">
        <div className="navbar-content">
          <div className="logo-section">
            <div className="logo">
              <span>HC</span>
            </div>
            <span className="brand-name">helpycore</span>
          </div>
          
          <nav className="nav-menu">
            <a href="#" className="nav-link">Marcas</a>
            <a href="#" className="nav-link">Ventas</a>
            <a href="#" className="nav-link">Agregar Producto</a>
            <a href="#" className="nav-link">Inicio</a>
            <a href="#" className="nav-link">Productos</a>
            <a href="#" className="nav-link">Sobre Nosotros</a>
          </nav>
          <ShoppingCart className="cart-icon" />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="form-container">
          <div className="form-card">
            {/* Nombre Field */}
            <div className="form-group">
              <label className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="form-input"
                placeholder="Ingrese el nombre de la marca"
              />
            </div>

            {/* Descripción Field */}
            <div className="form-group">
              <label className="form-label">
                Descripción:
              </label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                rows={6}
                className="form-textarea"
                placeholder="Ingrese la descripción de la marca"
              />
            </div>

            {/* Action Buttons */}
            <div className="buttons-container">
              <button
                onClick={handleAgregarMarca}
                className="btn btn-primary"
              >
                AGREGAR MARCA
              </button>
              
              <button
                onClick={handleEliminarMarca}
                className="btn btn-secondary"
              >
                ELIMINAR MARCA
              </button>
              
              <button
                onClick={handleEditarMarca}
                className="btn btn-tertiary"
              >
                EDITAR MARCA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarMarcasScreen;