import React, { useState } from 'react';
import './RegistroEmpleado.css';

const RegistroEmpleado = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    password: '',
    email: '',
    phoneNumber: '',
    dni: '',
    genero: '',
    fechaNacimiento: ''
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
          <div className="logo">
            <span className="house-icon"></span>
            <span className="heart-icon"></span>
          </div>
        </div>
        <h2>Crear una cuenta Empleado</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
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
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
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
            <input
              type="text"
              name="dni"
              placeholder="DNI"
              value={formData.dni}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>Género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          
          <div className="input-group">
            <input
              type="date"
              name="fechaNacimiento"
              placeholder="Fecha de nacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn-crear">Crear</button>
        </form>
      </div>
    </div>
  );
};

export default RegistroEmpleado;