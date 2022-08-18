import React from 'react'
import { Button, Card, Col} from "react-bootstrap";



function Product(props) {
    const {item,onAdded} = props;

  
    function hdlClick (){
        onAdded(item)
    }

  return (
    <>
            <Col md={4} className='d-flex justify-content-center'>
                <Card style={{width:'195px',border:'none'}} >
                    <Card.Img  variant="top" src={item.image}></Card.Img>
                    <Card.Body>
                        <Card.Title >$ {item.price}</Card.Title>
                        <Card.Text className=" fw-light">
                        {item.name}
                        </Card.Text>
                        <Button onClick={hdlClick} style={{backgroundColor:'#003049',border:'none'}}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
    </>
  )
}

export default Product
