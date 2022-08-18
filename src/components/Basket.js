
import { useState } from 'react';
import { Button,  ButtonGroup,  Card } from 'react-bootstrap'
import Payment from './Payment';

function Basket(props) {
   const {cartItem, onAdd, onRemove} = props;
   const itemsPrice = cartItem.reduce((a,c) => a += c.price* c.qty,0);  //itemsPrixce is totol price in cartItem
   const tax = Number((itemsPrice * 0.07).toFixed(2));
   const netCost = itemsPrice + tax  ;
   const [disCount, setDiscount] = useState('0');
   
   
   const [discountPercent,setDiscountPercent] = useState(0)
   function hdlClickPercent(){
        setDiscountPercent (Number((netCost*(disCount/100)).toFixed(2)))
      //   console.log(discountPercent)
   }

   const [discountCash,setDiscountCash] = useState(0)
   function hdlClickCash(){
      setDiscountCash (disCount)
   }
   
   let trueDiscount;
   if (discountCash === 0){
      trueDiscount = discountPercent;
   }else{
      trueDiscount = discountCash;
   }

  
   const netNetCost = Number((netCost-trueDiscount)).toFixed(2)


  return (
   <>
      {/* check cartlength if not have item show cart empty*/}
      <div>{cartItem.length === 0 && <span>Cart empty</span>}</div>   

      <div style={{width:'300px'}} >
      {cartItem.map(item => {
        
         return( <Card  key={item.id} style={{height:'45px',width:'420px',borderRadius:'20px',marginTop:'5px',marginLeft:'30px',backgroundColor:'#B8B8B8'}}>
            <Card.Body className ='d-flex justify-content-between' style={{fontWeight:'500', marginTop:'-7px'}}>
              
              { `    ${item.name}` }
              
               <div style={{display:'flex',justifyContent:'space-between', marginTop:'-5.5px',width:'160px'}}>
                  <Button onClick={() => onAdd(item)} style={{borderRadius:'100%',backgroundColor:'#003049',border:'none',fontWeight:'bold'}}>+</Button>
                  <span style={{marginTop:'7.5px',fontWeight:'500'}}> {item.qty} </span>
                  <Button onClick={() => onRemove(item)} style={{borderRadius:'100%',backgroundColor:'#003049',border:'none',fontWeight:'bold'}}>-</Button>
               </div>
            </Card.Body>
         </Card>)
      })}
      </div>

     
      
   
  
   {/* total price */}
      <div style={{display:'flex',justifyContent:'flex-end',marginRight:'40px',fontStyle:'italic'}}><small>Total price:{`$ ${Number(itemsPrice.toFixed(2))} `}</small></div>
      <div style={{width:'80%',marginTop:'5px',borderTop:'1px solid',margin:'auto'}} ></div>  

   {/* discount */}
   <div>
      <div className='mt-2 input-group d-flex justify-content-between' style={{fontStyle:'italic'}}>
         <span style={{marginLeft:'50px'}}><small>Discount</small></span>
        
        
            <ButtonGroup>
               <button  onClick={hdlClickPercent}  className="btn btn-outline-secondary" type="radio" style={{borderRadius:'50%',border:'1px solid black',color:'black'}}>%</button>
               <button onClick={hdlClickCash}  className="btn  btn-outline-secondary" type="radio" style={{borderRadius:'48%',marginLeft:'10px',border:'1px solid black',color:'black'}}>$</button>
            </ButtonGroup>
         <input type={'number'} onChange={e => setDiscount(Number(e.target.value))} placeholder='inser here' name='discount' style={{marginRight:'50px',width:'117.5px',height:'38.5px',borderRadius:'20px',backgroundColor:'#B8B8B8',textAlign:'center'}}></input>
      </div>
      
   {/* tax */}
      <div className='d-flex justify-content-between' style={{marginLeft:'50px',fontStyle:'italic'}}>
        <span>tax</span>
        <span>7%</span>
        <span style={{marginRight:'50px'}}><small>{`  tax : $ ${tax} `}</small></span>
     
      </div>

      {/* netprice */}
      <div style={{display:'flex',marginLeft:'30px',fontStyle:'italic',justifyContent:'space-between'}}>
         <small>{`price & tax :  $${Number(netCost.toFixed(2))} ` }</small>
         <small >{`discount: $${trueDiscount}`}</small>
         <small style={{marginRight:'40px'}}><b>{`net cost: $${netNetCost}`} </b></small>
         
      </div>
      
     



  
      <div style={{width:'80%',marginTop:'5px',borderTop:'1px solid',margin:'auto'}} ></div>  
   </div>

   <Payment netNetCost={netNetCost}/>
   </>
  )
}

export default Basket

  