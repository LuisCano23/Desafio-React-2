import Card from 'react-bootstrap/Card';
import Formulario from './Formulario';
import CardImg from 'react-bootstrap/esm/CardImg';
import SocialMedia from './SocialButton';
import gymderImage from '../img/gymder.png'

function FormRender() {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <CardImg variant="top" src={gymderImage}></CardImg>
        <br />
        <br />
        <Card.Title>Registrate y publicita tu Gym.</Card.Title>
        <br />
        <Card.Text>
          <>

            <Formulario/>

          </>
        </Card.Text>
      </Card.Body>
      <p>!Visíta nuestras redes sociales!</p>
      <SocialMedia/>
    </Card>
  );
}

export default FormRender;