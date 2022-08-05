import React from 'react';
import {Row,Col, Navbar, } from 'react-bootstrap';

function App() {
  return (
    <div >
      
        <Row  >
          <Col md={8} sm={6} className='pe-0' style={{height:'100vh' }}  >
            <Navbar style={{backgroundColor: '#2E3B4C',color:'#FFFDFD',height:'8vh'}} >Product list</Navbar>
          </Col>
          <Col md={4} sm={6} className='px-0' style={{height:'100vh',backgroundColor:'#B8B8B8'}}>
            <Navbar style={{backgroundColor: '#180E19',color:'#FFFDFD',height:'8vh'}} >Cart list</Navbar>
          </Col>
        </Row>
      
    </div>
  );
}

export default App;
