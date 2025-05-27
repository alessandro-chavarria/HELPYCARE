import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import ninoCometa from "../assets/nino-cometa.png";
import "./InicioSesion.css"; // Importamos el archivo CSS

export default function InicioSesion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegación

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
    // Aquí normalmente validarías las credenciales
    // Por ahora simplemente navegamos a la página de inicio
    navigate("/inicio");
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
            {/* Campo de usuario */}
            <div className="input-group">
              <div className="input-icon">
                <span>👤</span>
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
                placeholder="Usuario"
                required
              />
            </div>

            {/* Campo de contraseña */}
            <div className="input-group">
              <div className="input-icon">
                <span>🔒</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Contraseña"
                required
              />
            </div>

            {/* Enlace de olvidó contraseña */}
            <div className="forgot-password">
              <a href="/recovery">¿Olvidó su contraseña?</a>
            </div>

            {/* Botón de inicio de sesión */}
            <button type="submit" className="login-button">
              Ingresar
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