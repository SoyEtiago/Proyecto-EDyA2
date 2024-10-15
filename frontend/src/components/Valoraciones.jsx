import { Card, CardBody, CardFooter } from "react-bootstrap";

function Valoraciones({User ='Balanta tu papa', calificacion=5, comentario= 'Aysssss', fechaHora='ayer'}) {
  return(
    <>
      <Card style={{width:'500px', marginTop:'50px'}}>
        <CardBody>
          <h5>{User}</h5>
          <span>Calificacion:</span> {calificacion}
          <p>{comentario}</p>
        </CardBody>
        <CardFooter>
          <div>
            <span>{fechaHora}</span>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}

export default Valoraciones;
