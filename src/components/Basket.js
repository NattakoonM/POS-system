import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Basket(props) {
   const {cartItem, onAdd, onRemove} = props;
   const itemsPrice = cartItem.reduce((a,c) => a += c.price* c.qty,0);  //itemsPrixce is totol price in cartItem
   const tax = Number((itemsPrice * 0.07).toFixed(2));
   const netCost = itemsPrice + tax ;
  

  return (
   <>
      {/* check cartlength if not have item show cart empty*/}
      <div>{cartItem.length === 0 && <span>Cart empty</span>}</div>   

      <div style={{width:'300px'}} >
      {cartItem.map(item => {
        
         return( <Card  key={item.id}>
            <Card.Body className ='d-flex justify-content-between'>
                {item.name}
               <div >
                  <Button onClick={() => onAdd(item)}>+</Button>
                  <span> {item.qty} </span>
                  <Button onClick={() => onRemove(item)}>-</Button>
               </div>
            </Card.Body>
         </Card>)
      })}
      </div>

     
      
   
  
   {/* total price */}
      <span >Total price:{`$ ${itemsPrice} `}</span>
       <hr/>

   {/* discount */}
      <div className='d-flex'>
         <span>Discount</span>
         <Button>%</Button>
         <Button>Bath</Button>
         <input placeholder='inser here'></input>
         <span>Bath</span>
      </div>

   {/* tax */}
      <div className='d-flex'>
         
         
         <span>{`  tax : $ ${tax} `}</span>
      </div>
      <span>net cost : {`$ ${netCost}`}</span>
   </>
  )
}

export default Basket

  