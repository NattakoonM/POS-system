import { Button, Card, Col, Container, Row } from "react-bootstrap";
import '../App.css';
function ProductCart(){
    return(
        <>
        <div className='text-center mt-5 ' >
            <input type='text' className="mb-5" style={{borderRadius:'9px', borderWidth:'1px',width:'250px',fontFamily:"FontAwesome"}} placeholder="&#xf002;" />
            <span className="mx-2"> Or </span>
            <Button  size="sm" style={{color:'black',backgroundColor:'#D9D9D9',border:"none",borderRadius:'9px'}}>Barcode</Button>
        </div>
        <Container className="mt-2">
          <Row >
           <Col md={4} className='mb-2'>
                <Card style={{width:'195px'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title className="text-center">$ price</Card.Title>
                        <Card.Text className="text-center">
                        detail
                        </Card.Text>
                        <Button >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           <Col md={4}>
                <Card style={{width:'195px'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title className="text-center">$ price</Card.Title>
                        <Card.Text className="text-center">
                        detail
                        </Card.Text>
                        <Button >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           <Col md={4}>
                <Card style={{width:'195px'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title className="text-center">$ price</Card.Title>
                        <Card.Text className="text-center">
                        detail
                        </Card.Text>
                        <Button >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           <Col md={4}>
                <Card style={{width:'195px'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title className="text-center">$ price</Card.Title>
                        <Card.Text className="text-center">
                        detail 
                        </Card.Text>
                        <Button >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           <Col md={4}>
                <Card style={{width:'195px'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title className="text-center">$ price</Card.Title>
                        <Card.Text className="text-center">
                        detail
                        </Card.Text>
                        <Button >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
           <Col md={4}>
                <Card style={{width:'195px'}}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/hamburger-isolated-white-background-food-photo_370059-5711.jpg"></Card.Img>
                    <Card.Body>
                        <Card.Title className="text-center">$ price</Card.Title>
                        <Card.Text className="text-center">
                        detail 
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