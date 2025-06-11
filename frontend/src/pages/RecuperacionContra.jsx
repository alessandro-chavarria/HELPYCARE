import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ninoCometa from "../assets/nino-cometa.png";
import "./RecuperacionContra.css";

export default function RecuperacionContra() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1); // 1: Solicitar código, 2: Ingresar código y nueva contraseña
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (step === 1) {
      if (!email.trim()) newErrors.email = "El email es requerido";
      else if (!validateEmail(email)) newErrors.email = "Por favor ingrese un email válido";
    } else {
      if (!code.trim()) newErrors.code = "El código es requerido";
      if (!password.trim()) newErrors.password = "La contraseña es requerida";
      else if (password.length < 6) newErrors.password = "La contraseña debe tener al menos 6 caracteres";
      if (password !== confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRequestCode = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      // Simular envío de código
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStep(2);
    } catch (error) {
      setErrors({ submit: 'Error al enviar el código. Por favor intente nuevamente.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      // Simular cambio de contraseña
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate("/iniciosesion");
    } catch (error) {
      setErrors({ submit: 'Error al cambiar la contraseña. Por favor intente nuevamente.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="login-form">
          {/* Flecha de regreso */}
          <Link to="/iniciosesion" className="back-arrow">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="#3b82f6" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
          </Link>

          <div className="form-title">
            <h1>{step === 1 ? "Recuperar contraseña" : "Restablecer contraseña"}</h1>
            <p>
              {step === 1 
                ? "Ingresa tu correo electrónico para recibir un código de verificación" 
                : "Ingresa el código recibido y tu nueva contraseña"}
            </p>
          </div>

          {errors.submit && <div className="error-message general-error">{errors.submit}</div>}

          <form onSubmit={step === 1 ? handleRequestCode : handleResetPassword} className="form-fields">
            {step === 1 ? (
              <div className="input-group">
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#6c757d" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
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
            ) : (
              <>
                <div className="input-group">
                  <div className="input-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#6c757d" d="M12,3A4,4 0 0,1 16,7A4,4 0 0,1 12,11A4,4 0 0,1 8,7A4,4 0 0,1 12,3M12,13C16.42,13 20,14.79 20,17V20H4V17C4,14.79 7.58,13 12,13Z"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      if (errors.code) setErrors(prev => ({ ...prev, code: '' }));
                    }}
                    className={`input-field ${errors.code ? 'error' : ''}`}
                    placeholder="Código de verificación"
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
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
                    }}
                    className={`input-field ${errors.password ? 'error' : ''}`}
                    placeholder="Nueva contraseña"
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
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (errors.confirmPassword) setErrors(prev => ({ ...prev, confirmPassword: '' }));
                    }}
                    className={`input-field ${errors.confirmPassword ? 'error' : ''}`}
                    placeholder="Confirmar nueva contraseña"
                    required
                  />
                </div>
              </>
            )}
            
            {errors.email && <div className="error-message">{errors.email}</div>}
            {errors.code && <div className="error-message">{errors.code}</div>}
            {errors.password && <div className="error-message">{errors.password}</div>}
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}

            <button 
              type="submit" 
              className={`login-button ${isLoading ? 'loading' : ''}`} 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  {step === 1 ? "Enviando código..." : "Restableciendo..."}
                  <span className="spinner"></span>
                </>
              ) : step === 1 ? "Enviar código" : "Restablecer contraseña"}
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