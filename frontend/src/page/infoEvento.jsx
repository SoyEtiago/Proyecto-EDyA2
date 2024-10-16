import { Card } from "react-bootstrap";
import "../assets/Homepage.css";
import FechaEvento from "../components/FechaEvento";
import LugarEvento from "../components/lugarEvento";
import CommentSystem from "../components/Valoraciones";



const Informacion = (props) => {
  const { nombre = "Pyday", descripcion, organizadorId, tipo, linkOnline, categoria, capacidadAsistentes, precio, fechaHoraInicio, fechaHoraFin, direccion } = props;

  return (
    <>


      <Card style={{ width: "80rem", margin: "0 auto", marginTop: "40px" }}>
        <Card.Header>
          <h2>{nombre}</h2>
        </Card.Header>
        <Card.Body>
          <p>
            El evento hecho por: {organizadorId}. {descripcion}
          </p>
          <p>{linkOnline}</p>
          <p>categoría: {categoria}</p>
        </Card.Body>
        <Card.Footer>
          <div>
            <span>tipo:</span> {tipo}
          </div>
          <div>
            <span>Capacidad:</span> {capacidadAsistentes}
          </div>
          <div>
            <span>Precio:</span> {precio}
          </div>
          <div>
            <span>Fecha:</span>
            <FechaEvento fechaHoraInicio={fechaHoraInicio} fechaHoraFin={fechaHoraFin} />
            <LugarEvento direccion={direccion} />
          </div>
        </Card.Footer>
      </Card>
      <CommentSystem title="Comentarios sobre este evento" />
    </>
  );
};

export default Informacion;
