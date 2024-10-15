import Button from 'react-bootstrap/Button';
import { Card, Navbar } from "react-bootstrap";
import '../assets/Homepage.css';
import FechaEvento from '../components/FechaEvento';
import Valoraciones from '../components/Valoraciones';
import LugarEvento from '../components/lugarEvento';
import Preguntas from '../components/Preguntas';

const Informacion = (props) => {
  const { nombre, descripcion, organizadorId, tipo, linkOnline, categoria, capacidadAsistentes, precio, fechaHoraInicio, fechaHoraFin, direccion } = props;
  return (
    <>
      <Navbar style={{ margin: '0 auto' }}>
        <div className="navbar-buttons">
          <input className='search_bar' type="text" placeholder="Buscar eventos" />
          <Button variant="outline-danger" className='search_button'>Buscar</Button>{' '}
          <Button variant="outline-danger" className='button_regis'>Registrarse</Button>{' '}
          <Button variant="outline-danger" className='button_session'>Iniciar sesión</Button>{' '}
        </div>
      </Navbar>
      <Card style={{ width: '80rem', margin: '0 auto', marginTop: '40px' }}>
        <Card.Header>
          <h2>Pyday {nombre}</h2>
        </Card.Header>
        <Card.Body>
          <p>El evento hecho por: {organizadorId}. {descripcion}</p>
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
            <LugarEvento direccion={direccion}/>
          </div>
        </Card.Footer>
      </Card>
      <Valoraciones/>
      <Preguntas/>
    </>
  );
}

export default Informacion;
