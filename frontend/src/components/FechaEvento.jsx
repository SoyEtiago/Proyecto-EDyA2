import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const FechaEvento = ({ fechaHoraInicio = 'ayer', fechaHoraFin = 'hoy' }) => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>Fecha de inicio: {fechaHoraInicio}</ListGroup.Item>
      <ListGroup.Item>Fecha de fin: {fechaHoraFin}</ListGroup.Item>
    </ListGroup>
  );
};

export default FechaEvento;
