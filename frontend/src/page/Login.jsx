import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password, "Remember me:", rememberMe);

    // Aquí podrías agregar tu lógica de autenticación real
    if (email && password) {
      onLogin(true); // Actualiza el estado de inicio de sesión en App.jsx
      navigate('/'); // Redirige a la página de inicio
    } else {
      alert('Por favor, ingresa tus credenciales.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Inicia sesión</h2>
        <p>¿Aún no eres miembro? <a href="/register">Regístrate</a></p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
            <a href="/forgot-password" className="forgot-password-link">He olvidado la contraseña</a>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Mantener la sesión iniciada</label>
          </div>
          <div className="form-group captcha">
            <input type="checkbox" id="recaptcha" required />
            <label htmlFor="recaptcha">No soy un robot</label>
          </div>
          <button type="submit" className="login-btn">Inicia sesión</button>
        </form>
        <div className="login-with">
          <p>O inicia sesión con:</p>
          <div className="social-login">
            <button className="facebook-btn">
              <FontAwesomeIcon icon={faFacebookF} /> Inicia sesión con Facebook
            </button>
            <button className="google-btn">
              <FontAwesomeIcon icon={faGoogle} /> Inicia sesión con Google
            </button>
            <button className="apple-btn">
              <FontAwesomeIcon icon={faApple} /> Inicia sesión con Apple
            </button>
          </div>
        </div>
        <a href="/help" className="help-link">¿Problemas para iniciar sesión?</a>
      </div>
    </div>
  );
}

export default Login;
