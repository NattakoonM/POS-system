
import { useState } from "react";
import { Button,Row} from "react-bootstrap";
import '../App.css';
import Product from "./Product";



function ProductCart(props){
    const {products,onAdd, cartItem,onAdded} = props;
    const [query,setQuery] = useState('');
    // console.log(products.filter(i => i.name.toLowerCase().includes(query)));

    return(
        <>
        {/* search */}
        <div className='text-center mt-5 ' >
            <input type='text' className="mb-5" style={{borderRadius:'9px', borderWidth:'1px',width:'250px',fontFamily:"FontAwesome"}} placeholder="&#xf002;" onChange={e => setQuery(e.target.value)}/>
            <span className="mx-2"> Or </span>
            <Button  size="sm" style={{color:'black',backgroundColor:'#D9D9D9',border:"none",borderRadius:'9px'}} className='shadow-none'>Barcode</Button>
        </div>

        {/* product */}
        <Row className="text-center" >
          
            {products.filter(i => i.name.toLowerCase().includes(query))
            .map(item => {
                return <Product key={item.id} item={item} onAdd={onAdd} cartItem={cartItem} onAdded={onAdded}/>
            })}
         
        </Row>
        </>
    )
    
}

export default ProductCart;