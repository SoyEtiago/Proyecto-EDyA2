import { Card } from "react-bootstrap";

const LugarEvento = ({ direccion = 'Calle 25 # 115-85 kilómetro 2 vía Cali-Jamundí Cali, Valle del Cauca, Colombia' }) => {
  return (
    <Card>
      <Card.Body>
        <h5>Dirección del evento:</h5>
        <p>{direccion}</p>
      </Card.Body>
    </Card>
  );
}

export default LugarEvento;
