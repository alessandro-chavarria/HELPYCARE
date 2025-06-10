import React, { useState } from 'react';
import { User, Lock, Mail, Phone, CreditCard, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Asegúrate de tener esta imagen
import './RegistroCliente.css';

const RegistroCliente = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    password: '',
    email: '',
    phoneNumber: '',
    dni: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Cliente registrado exitosamente');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setMessage(data.message || 'Error al registrar cliente');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error de conexión con el servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <h2>Crear una cuenta</h2>

        {message && (
          <div className={`message ${message.includes('exitosamente') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="form-fields">
          {/* Nombre */}
          <div className="input-group">
            <div className="input-icon">
              <User size={24} />
            </div>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <div className="input-icon">
              <Mail size={24} />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <div className="input-icon">
              <Lock size={24} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Teléfono */}
          <div className="input-group">
            <div className="input-icon">
              <Phone size={24} />
            </div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Número de teléfono"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          {/* DNI */}
          <div className="input-group">
            <div className="input-icon">
              <CreditCard size={24} />
            </div>
            <input
              type="text"
              name="dni"
              placeholder="DNI / DUI"
              value={formData.dni}
              onChange={handleChange}
              required
            />
          </div>

          {/* Botón */}
          <div className="btn-container">
            <button
              type="submit"
              className={`btn-crear ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Creando cuenta...
                </>
              ) : (
                'Crear cuenta'
              )}
            </button>
          </div>
        </form>

        {/* Enlaces adicionales */}
        <div className="login-link">
          <p>¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegistroCliente;