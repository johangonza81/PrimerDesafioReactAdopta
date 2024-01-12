import { Button } from 'bootstrap';
import Tags from './Tags';
import Card from 'react-bootstrap/Card';

const MyCard =({img,name,descripcion,variant,textButon}) => {
  return (
    <Card className='cardContainer'>
      <Card.Img  variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Tags variant={variant} textButon={textButon}/>
      </Card.Body>
       
        
      
    </Card>
  );
}

export default MyCard;