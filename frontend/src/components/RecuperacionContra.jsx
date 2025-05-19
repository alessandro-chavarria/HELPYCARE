import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ninoCometa from "../assets/nino-cometa.png";
import "./RecuperacionContra.css"; // Asegúrate de que este archivo CSS exista

export default function RecuperacionContra() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la recuperación de contraseña
    // Por ahora, simplemente redirigimos al login
    navigate("/iniciosesion");
  };

  const handleBack = () => {
    navigate("/iniciosesion");
  };

  return (
    <div className="login-container">
      {/* Botón de flecha para volver */}
      <div className="back-button" onClick={handleBack}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Volver</span>
      </div>

      {/* Formulario de recuperación de contraseña */}
      <div className="login-card">
        <h2>Recuperación de contraseña</h2>
        <p>Ingrese su nueva contraseña</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon-email"></span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          
          <div className="input-group">
            <span className="icon-lock"></span>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Nueva contraseña"
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
      </div>
      
      {/* Contenedor de la imagen */}
      <div className="character-container">
        <img src={ninoCometa} alt="Niño con cometa" className="character" />
      </div>
    </div>
  );
}