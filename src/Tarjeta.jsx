import Card from 'react-bootstrap/Card';

function BasicExample({src, titulo, nombre}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {nombre}
        </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default BasicExample;