//import React from 'react';
import Button from 'react-bootstrap/Button';
import '../assets/Homepage.css'
import { Card, Navbar } from "react-bootstrap";
import Event from '../components/Event';

function HomePage() {
  return (
    <div className="Homepage">
      <Navbar>
          <div className="navbar-buttons">
            <input className='search_bar'type="text" placeholder="Buscar eventos" />
            <Button variant="outline-danger" className='search_button'>Buscar</Button>{' '}
            <Button variant="outline-danger" className='button_regis'>Registrarse</Button>{' '}
            <Button variant="outline-danger" className='button_session'>Iniciar sesion</Button>{' '}
          </div>
      </Navbar>
      {/* Sección Principal */}
      <Card className='card_homPa'>
        <header className="main-header">
          <h1 >MeetUs</h1>
          <p>
            Encuentra eventos de tu interés, conéctate con personas y participa en actividades locales y en línea.
          </p>
        </header>
      </Card>

      {/* Lista de eventos cercanos */}
      <section className="nearEvent">
        <h1>Eventos cerca de ti</h1>
        <Event/>
      </section>


      <footer className="footer">
        <p>&copy; 2024 MEETUS - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default HomePage;
