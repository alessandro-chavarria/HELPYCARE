import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ninoCometa from "../assets/nino-cometa.png";
import "./RecuperacionContra.css";

export default function RecuperacionContra() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar la recuperación de contraseña
    navigate("/iniciosesion");
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="login-form">
          <div className="form-title">
            <h1>Recuperación de contraseña</h1>
            <p>Ingrese su nueva contraseña</p>
          </div>

          <form onSubmit={handleSubmit} className="form-fields">
            <div className="input-group">
              <div className="input-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#6c757d" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                required
              />
            </div>

            <div className="input-group">
              <div className="input-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#6c757d" d="M12,3A4,4 0 0,1 16,7A4,4 0 0,1 12,11A4,4 0 0,1 8,7A4,4 0 0,1 12,3M12,13C16.42,13 20,14.79 20,17V20H4V17C4,14.79 7.58,13 12,13Z"/>
                </svg>
              </div>
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
      </div>

      <div className="image-container">
        <div className="image-wrapper">
          <img src={ninoCometa} alt="Niño con cometa" className="image" />
        </div>
      </div>
    </div>
  );
}