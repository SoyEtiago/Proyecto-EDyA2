//import React from 'react';
import "../assets/Homepage.css";
import { Card } from "react-bootstrap";
import Event from "../components/Event";
import Nav from "../Layouts/Layout";

function HomePage() {
  return (
    <div className="Homepage">
      {/* Sección Principal */}
      <Card className="card_homPa">
        <header className="main-header">
          <h1>MeetUs</h1>
          <p>Encuentra eventos de tu interés, conéctate con personas y participa en actividades locales y en línea.</p>
        </header>
      </Card>

      {/* Lista de eventos cercanos */}
      <section className="nearEvent">
        <h1>Eventos cerca de ti</h1>
        <Event />
      </section>

      <footer className="footer">
        <p>&copy; 2024 MEETUS - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default HomePage;
