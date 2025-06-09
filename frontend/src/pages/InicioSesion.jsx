  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import ninoCometa from "../assets/nino-cometa.png";
  import "./InicioSesion.css";

  export default function InicioSesion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Función para validar email
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Función para validar formulario
    const validateForm = () => {
      const newErrors = {};

      if (!email.trim()) {
        newErrors.email = "El email es requerido";
      } else if (!validateEmail(email)) {
        newErrors.email = "Por favor ingrese un email válido";
      }

      if (!password.trim()) {
        newErrors.password = "La contraseña es requerida";
      } else if (password.length < 6) {
        newErrors.password = "La contraseña debe tener al menos 6 caracteres";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!validateForm()) {
        return;
      }

      setIsLoading(true);

      try {
        // Aquí harías la petición a tu backend
        const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:4000'}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password.trim()
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Guardar token en localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          
          // Redirigir según el tipo de usuario
          if (data.user.role === 'admin') {
            navigate("/admin-dashboard");
          } else {
            navigate("/inicio");
          }
        } else {
          setErrors({ submit: data.message || 'Error al iniciar sesión' });
        }
      } catch (error) {
        console.error('Error de conexión:', error);
        setErrors({ submit: 'Error de conexión. Por favor intente nuevamente.' });
      } finally {
        setIsLoading(false);
      }
    };

    // Función para navegar al registro
    const handleGoToRegister = () => {
      navigate("/registro-cliente");
    };

    return (
      <div className="login-container">
        {/* Lado izquierdo - Formulario de inicio de sesión */}
        <div className="form-container">
          <div className="login-form">
            <div className="form-title">
              <h1>Inicio de Sesión</h1>
              <p>Ingrese sus credenciales</p>
            </div>

            <form onSubmit={handleSubmit} className="form-fields">
              {/* Error general */}
              {errors.submit && (
                <div className="error-message general-error">
                  {errors.submit}
                </div>
              )}

              {/* Campo de email */}
              <div className="input-group">
                <div className="input-icon">
                  <span>📧</span>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) {
                      setErrors(prev => ({ ...prev, email: '' }));
                    }
                  }}
                  className={`input-field ${errors.email ? 'error' : ''}`}
                  placeholder="Correo electrónico"
                  required
                />
              </div>
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}

              {/* Campo de contraseña */}
              <div className="input-group">
                <div className="input-icon">
                  <span>🔒</span>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) {
                      setErrors(prev => ({ ...prev, password: '' }));
                    }
                  }}
                  className={`input-field ${errors.password ? 'error' : ''}`}
                  placeholder="Contraseña"
                  required
                />
              </div>
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}

              {/* Enlace de registro */}
              <div className="register-link">
                <span>¿No tienes cuenta? </span>
                <button 
                  type="button" 
                  onClick={handleGoToRegister}
                  className="register-button"
                >
                  Regístrate
                </button>
              </div>

              {/* Enlace de olvidó contraseña */}
              <div className="forgot-password">
                <a href="/recovery">¿Olvidó su contraseña?</a>
              </div>

              {/* Botón de inicio de sesión */}
              <button 
                type="submit" 
                className={`login-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Ingresando...' : 'Ingresar'}
              </button>

              {/* Nota de registro */}
              <div className="register-note">
                "Recuerda registrarte como empleado, sino eres un cliente"
              </div>
            </form>
          </div>
        </div>

        {/* Lado derecho - Ilustración */}
        <div className="image-container">
          <div className="image-wrapper">
            <div className="image-bg"></div>
            <img src={ninoCometa} alt="Niño con cometa" className="image" />
          </div>
        </div>
      </div>
    );
  }