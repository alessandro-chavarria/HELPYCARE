import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ninoCometa from "../assets/nino-cometa.png";
import logo from "../assets/logo.png";
import "./InicioSesion.css";

export default function InicioSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "El email es requerido";
    else if (!validateEmail(email)) newErrors.email = "Por favor ingrese un email válido";
    if (!password.trim()) newErrors.password = "La contraseña es requerida";
    else if (password.length < 6) newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:4000'}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password: password.trim() }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate(data.user.role === 'admin' ? "/admin-dashboard" : "/inicio");
      } else {
        setErrors({ submit: data.message || 'Error al iniciar sesión' });
      }
    } catch (error) {
      setErrors({ submit: 'Error de conexión. Por favor intente nuevamente.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoToRegister = () => navigate("/registro-cliente");

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="login-form">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <div className="form-title">
            <h1>Inicio de Sesión</h1>
            <p>Ingrese sus credenciales</p>
          </div>

          <form onSubmit={handleSubmit} className="form-fields">
            {errors.submit && <div className="error-message general-error">{errors.submit}</div>}

            <div className="input-group">
              <div className="input-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#6c757d" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                }}
                className={`input-field ${errors.email ? 'error' : ''}`}
                placeholder="Correo electrónico"
                required
              />
            </div>
            {errors.email && <div className="error-message">{errors.email}</div>}

            <div className="input-group">
              <div className="input-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#6c757d" d="M12,3A4,4 0 0,1 16,7A4,4 0 0,1 12,11A4,4 0 0,1 8,7A4,4 0 0,1 12,3M12,13C16.42,13 20,14.79 20,17V20H4V17C4,14.79 7.58,13 12,13Z" />
                </svg>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
                }}
                className={`input-field ${errors.password ? 'error' : ''}`}
                placeholder="Contraseña"
                required
              />
            </div>
            {errors.password && <div className="error-message">{errors.password}</div>}

            <div className="register-link">
              <span>¿No tienes cuenta? </span>
              <button type="button" onClick={handleGoToRegister} className="register-button">
                Regístrate
              </button>
            </div>

            <div className="forgot-password">
              <a href="/recovery">¿Olvidó su contraseña?</a>
            </div>

            <button type="submit" className={`login-button ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
              {isLoading ? (
                <>
                  Ingresando...
                  <span className="spinner"></span>
                </>
              ) : 'Ingresar'}
            </button>

            <div className="register-note">
              "Recuerda guardar bien tus credenciales"
            </div>
          </form>
        </div>
      </div>

      <div className="image-container">
        <div className="image-wrapper">
          <img src={ninoCometa} alt="Niño con cometa" className="image" />
        </div>
      </div>
    </div>
  );
}