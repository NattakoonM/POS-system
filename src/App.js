import React, { useState } from 'react';
import {Row,Col, Navbar, Container,  } from 'react-bootstrap';
import Basket from './components/Basket';
import ProductCart from './components/ProductCart';
import products from './components/products';

function App() {

  const [cartItem,setcartItems] = useState([]);
  
  function onAdd (item){
    const idx = cartItem.findIndex(index => index.id === item.id)
    const newCart = [...cartItem];          //clone state
    if (idx !== -1){                        //find item.id
      newCart[idx] = {...newCart[idx],qty : newCart[idx].qty + 1}
      
    }else{
      newCart.push({...item, qty :1} ); //add key qty in Object item by deconstruct (item)=object of item that chosen
    }
    setcartItems(newCart);
    }

  function onRemove(item){
    
    if(item.qty === 1){         //item.qty =1  setcatItem will set state of cartItem 
      const newCart = cartItem.filter( x => x.id !== item.id);   //by filter out that item.id that equal product.id that you choose
      setcartItems(newCart);   //set new state of cartItem that doesn't have that product
    } else{
      setcartItems(       //if item.id >1
        cartItem.map( x => x.id === item.id ? {...item, qty : item.qty -1} : x)
      )
    }
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
            <ProductCart products= {products} onAdd={onAdd}/>
          </Col>
          <Col md={4} sm={6} className='px-0' style={{height:'100vh',backgroundColor:'#B8B8B8'}}>
            <Navbar style={{backgroundColor: '#180E19',height:'8vh'}}>
              
                <Container  className='d-flex justify-content-center'>
                  <Navbar.Brand style={{color:'#FFFDFD'}} className='fs-3'>
                  Cart list
                  </Navbar.Brand>
                </Container>
              
            </Navbar>
                < Basket  cartItem={cartItem} onAdd={onAdd} onRemove={onRemove}/>
          </Col>
        </Row>
      
    </div>
  );
}

export default App;
