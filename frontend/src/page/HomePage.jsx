import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="navbar-logo">TuLogo</div>
        <div className="navbar-search">
          <input type="text" placeholder="Buscar eventos" />
          <button className="search-btn">Buscar</button>
        </div>
        <div className="navbar-buttons">
          <button className="login-btn" onClick={() => navigate('/login')}>Iniciar sesión</button>
          <button className="register-btn">Registrarse</button>
        </div>
      </nav>

      {/* Sección Principal */}
      <header className="main-header">
        <h1>La plataforma de las personas: donde los intereses se convierten en amistades</h1>
        <p>
          Encuentra eventos de tu interés, conéctate con personas y participa en actividades locales y en línea.
        </p>
        <button className="primary-btn">Unirse ahora</button>
      </header>

      {/* Lista de eventos cercanos */}
      <section className="events-nearby">
        <h2>Eventos cerca de ti</h2>
        <div className="events-container">
          <div className="event-card">
            <img src="ruta-del-evento1.jpg" alt="Evento 1" />
            <h3>Evento 1</h3>
            <p>Detalles del evento 1</p>
          </div>
          <div className="event-card">
            <img src="ruta-del-evento2.jpg" alt="Evento 2" />
            <h3>Evento 2</h3>
            <p>Detalles del evento 2</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 TuPlataforma - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default HomePage;
