import React from 'react'
import { Button, Card, Col} from "react-bootstrap";

function Product(props) {
    const {item,onAdd} = props;
    function hdlClick (){
        onAdd(item)
    }

  return (
    <>
            <Col md={4} >
                <Card style={{width:'195px',border:'none'}} >
                    <Card.Img  variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title >$ {item.price}</Card.Title>
                        <Card.Text className=" fw-light">
                        {item.name}
                        </Card.Text>
                        <Button onClick={hdlClick}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
    </>
  )
}

export default Product
