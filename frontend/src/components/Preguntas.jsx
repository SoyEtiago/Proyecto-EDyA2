import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Preguntas = () => {
  return (
    <Card style={{ width: '18rem', margin:'0 auto'}}>
      <Card.Header>Preguntas</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>es gratis?</ListGroup.Item>
        <ListGroup.Item>hay comida?</ListGroup.Item>
        <ListGroup.Item>y si lo hacen en jamundi?</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Preguntas;
