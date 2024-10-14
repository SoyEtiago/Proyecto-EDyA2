import { Card } from 'react-bootstrap';
import '../assets/Eventcard.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Event = ({ name, descripcion, fecha, lugar, hora }) => {
  return (
    <Card className="cardEvent">
      <Card.Header>
        <h2 className='CE_title'>{name}</h2>
      </Card.Header>
      <Card.Body>
        <p className='CE_description'>{descripcion}</p>
      </Card.Body>
      <Card.Footer>
        <div>
          <span className='CE_span'>Hora:</span> {hora}
        </div>
        <div>
          <span className='CE_span'>Fecha:</span> {fecha}
        </div>
        <div>
          <span className='CE_span'>Lugar:</span> {lugar}
        </div>
      </Card.Footer>
    </Card>
  );
};

Event.defaultProps = {
  name: 'PyDay - Cali',
  descripcion: 'En este día la comunidad de Python vendrá a Cali para darnos una demostración de sus nuevas tecnologías',
  fecha: '19/10/24',
  lugar: 'Universidad Autónoma del occidente',
  hora: '8:00 am',
};

export default Event;
