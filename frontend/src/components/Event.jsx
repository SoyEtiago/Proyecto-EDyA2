import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../assets/Eventcard.css';


const Event = ({ nombre, descripcion, organizadorId, tipo, fechaHoraInicio, fechaHoraFin, lugar, precio, valoraciones }) => {
  return (
    <Card className="cardEvent">
      <Card.Header>
        <h2 className='CE_title'>{nombre}</h2>
      </Card.Header>
      <Card.Body>
        <p className='CE_description'>El evento hecho por: {organizadorId}.
          {descripcion}</p>
      </Card.Body>
      <Card.Footer>
        <div>
          <span className='CE_span'>tipo:</span> {tipo}
        </div>
        <div>
          <span className='CE_span'>Hora inicio:</span> {fechaHoraInicio}
        </div>
        <div>
          <span className='CE_span'>Hora fin:</span> {fechaHoraFin}
        </div>
        <div>
          <span className='CE_span'>Lugar:</span> {lugar}
        </div>
        <div>
          <span className='CE_span'>Precio:</span> {precio}
        </div>
        <div>
          <span className='CE_span'>Valoracion:</span> {valoraciones}
        </div>
      </Card.Footer>
      <Button variant="outline-danger">Info Evento</Button>{' '}
    </Card>
  );
};

Event.defaultProps = {
  nombre: 'PyDay - Cali',
  organizadorId: 'PyDay',
  tipo: 'presencial',
  descripcion: 'En este día la comunidad de Python vendrá a Cali para darnos una demostración de sus nuevas tecnologías',
  fechaHoraInicio: '8am, 19/10/24',
  fechaHoraFin: '5pm, 19/10/24',
  lugar: 'Universidad Autónoma del occidente',
  precio: 'no aplica',
  valoraciones: 'Excelente',
};

export default Event;
