import React from 'react';
import {Row,Col, Navbar, Container,  } from 'react-bootstrap';

function App() {
  return (
    <div >
      
        <Row  >
          <Col md={8} sm={6} className='pe-0' style={{height:'100vh' }}  >
            <Navbar style={{backgroundColor: '#2E3B4C',height:'8vh'}} >
              
                <Container  className='d-flex justify-content-center'>
                  <Navbar.Brand style={{color:'#FFFDFD'}}>
                  Product list
                  </Navbar.Brand>
                </Container>
            
            </Navbar>
          </Col>
          <Col md={4} sm={6} className='px-0' style={{height:'100vh',backgroundColor:'#B8B8B8'}}>
            <Navbar style={{backgroundColor: '#180E19',height:'8vh'}}>
              
                <Container  className='d-flex justify-content-center'>
                  <Navbar.Brand style={{color:'#FFFDFD'}}>
                  Cart list
                  </Navbar.Brand>
                </Container>
              
            </Navbar>
          </Col>
        </Row>
      
    </div>
  );
}

export default App;
