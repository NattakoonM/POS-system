import React,{useState} from 'react';
import {Row,Col, Navbar, Container,  } from 'react-bootstrap';
import ProductCart from './components/ProductCart';
import products from './components/products';

function App() {
  const [cartItems,setCartItems] = useState([]);
  
  function onAdd(product){
    const newCart = [...cartItems];
    const idx = cartItems.findIndex( item => item.id === product.id)
    if(idx !== -1){
      newCart[idx] = {...newCart[idx],qty : newCart[idx].qty + 1}
    }else{
      newCart.push({...product,qty:1})
    }
    setCartItems(newCart)
  }









  return (
    <div >
      
        <Row  >
          <Col md={8} sm={6} className='pe-0' style={{height:'100vh' }}  >
            <Navbar style={{backgroundColor: '#2E3B4C',height:'8vh'}} >
              
                <Container  className='d-flex justify-content-center'>
                  <Navbar.Brand style={{color:'#FFFDFD'}} className='fs-1'>
                  Product list
                  </Navbar.Brand>
                </Container>
            
            </Navbar>
            <ProductCart products= {products}/>
          </Col>
          <Col md={4} sm={6} className='px-0' style={{height:'100vh',backgroundColor:'#B8B8B8'}}>
            <Navbar style={{backgroundColor: '#180E19',height:'8vh'}}>
              
                <Container  className='d-flex justify-content-center'>
                  <Navbar.Brand style={{color:'#FFFDFD'}} className='fs-3'>
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
