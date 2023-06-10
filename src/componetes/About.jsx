
import { useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


 
const About = () => {

  
  const [num, setNum] = useState(1);

  const handleclick = () => {
   num > 2 ? setNum(1) :  setNum(num + 1)
  }


  return (
    <>
        <main className="main_about">
             
            <Card style={{ width: '20rem' }} className="card_">
                  <Card.Img variant="top" src={`/${num}.jpg`} />
                  <Card.Body>
                    <Card.Title>Mis vacaciones</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                    <Button onClick={handleclick} variant="primary">Cambiar</Button>
                  </Card.Body>
              </Card>   
        </main> 

    
    </>
  )
}

export default About