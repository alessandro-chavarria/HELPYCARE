import React, { useState } from 'react';
import './RegistroCliente.css';

const RegistroCliente = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    password: '',
    email: '',
    phoneNumber: '',
    dni: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí puedes agregar la lógica para enviar los datos al backend
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <h2>Crear una cuenta</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon user-icon"></span>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <span className="input-icon lock-icon"></span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <span className="input-icon email-icon"></span>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <span className="input-icon phone-icon"></span>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <span className="input-icon id-icon"></span>
            <input
              type="text"
              name="dni"
              placeholder="DNI"
              value={formData.dni}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="btn-container">
            <button type="submit" className="btn-crear">Crear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistroCliente;