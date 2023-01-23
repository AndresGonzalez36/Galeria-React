import Badge from 'react-bootstrap/Badge';

const Footer = (props) => {
  return (
    <div><h1><Badge bg="primary">
    {props.texto}
  </Badge>{' '}</h1></div>
  )
}

export default Footer