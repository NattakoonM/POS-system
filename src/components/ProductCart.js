import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import '../App.css';



function ProductCart(prop){
    const {products} = prop;
    const [pro] = [{...products}]
    for(let i =0; i<6; i++){
        console.log(pro[i])
    }
    return(
        <>
        <div className='text-center mt-5 ' >
            <input type='text' className="mb-5" style={{borderRadius:'9px', borderWidth:'1px',width:'250px',fontFamily:"FontAwesome"}} placeholder="&#xf002;" />
            <span className="mx-2"> Or </span>
            <Button  size="sm" style={{color:'black',backgroundColor:'#D9D9D9',border:"none",borderRadius:'9px'}}>Barcode</Button>
        </div>
        <Container style={{marginTop:'-45px'}}>
          <Row className="text-center" >
           <Col md={4} className='mb-2 d-flex justify-content-center'>
                <Card style={{width:'195px',border:'none'}} >
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title >$ price</Card.Title>
                        <Card.Text className=" fw-light">
                        {pro[0].name}
                        </Card.Text>
                        <Button >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           <Col md={4} className='mb-2 d-flex justify-content-center'>
                <Card style={{width:'195px',border:'none'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title >$ price</Card.Title>
                        <Card.Text className=" fw-light">
                        {pro[1].name}
                        </Card.Text>
                        <Button >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           <Col md={4} className='mb-2 d-flex justify-content-center'>
                <Card style={{width:'195px',border:'none'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title >$ price</Card.Title>
                        <Card.Text className="fw-light">
                        {pro[2].name}
                        </Card.Text>
                        <Button >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           <Col md={4} className='mb-2 d-flex justify-content-center'>
                <Card style={{width:'195px',border:'none'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title >$ price</Card.Title>
                        <Card.Text className="fw-light">
                        {pro[3].name} 
                        </Card.Text>
                        <Button >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           <Col md={4} className='mb-2 d-flex justify-content-center'>
                <Card style={{width:'195px',border:'none'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title >$ price</Card.Title>
                        <Card.Text className="fw-light">
                        {pro[4].name}
                        </Card.Text>
                        <Button >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           <Col md={4} className='mb-2 d-flex justify-content-center'>
                <Card style={{width:'195px',border:'none'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title >$ price</Card.Title>
                        <Card.Text className="fw-light">
                        {pro[5].name}
                        </Card.Text>
                        <Button >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
        
        </>
    )
    
}

export default ProductCart;