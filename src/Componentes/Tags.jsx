import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Tags = ({variant,textButon})  =>{
  return (
    <Button variant={variant}><Badge bg={variant}>{textButon}</Badge></Button>
  );
}
export default Tags;