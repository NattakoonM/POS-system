import creditCart from '../Icons/Frame.svg'
import cash from '../Icons/Frame-2.svg'
import mobileBanking from '../Icons/Frame-3.svg'
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function Payment(props){
    const {netNetCost} = props;
    const [creditValue,setCreditvalue] = useState(0);
    const [mobileValue , setMobileValue] = useState(0);
    const resultCash = Number((netNetCost - creditValue- mobileValue).toFixed(2))
    const [submit,setSubmit] = useState({});
    

        useEffect(()=>{
            const payment = {
            "id": uuidv4(),
            "creditCard": creditValue,
            "mobileBanking": mobileValue,
            "cash": resultCash,
            "time":Date()}
            axios.post('http://localhost:8080/transaction',payment)
            .then(res => res.data)
        },[submit])
    

    return(
    <div className='ms-2'> 
        {/* creditCart */}
        <div className='d-flex justify-content-between mt-1' >
            <div style={{border:'none',height:'50px',marginTop:'10px',width:'148px',marginLeft:'50px',display:'flex',justifyContent:'center',borderRadius:'5px',backgroundColor:'#003049',color:'white'}} >
                <div >
                    <img src={creditCart} alt='creditCart' style={{marginLeft:'10px'}}/><br/>
                    <span style={{fontSize:'11px'}}>Credit card</span>
                </div>
            </div>
            <input onChange={e => setCreditvalue(Number(e.target.value))} placeholder='$' style={{border:'1px solid',height:'50px',width:'100px',marginTop:'10px',marginRight:'100px',borderRadius:'20px',textAlign:'center'}}></input>
        </div>   

        {/* mobileBangking     */}
        <div className='d-flex justify-content-between'>     
            <div style={{border:'none',height:'50px',marginTop:'10px',width:'148px',marginLeft:'50px',display:'flex',justifyContent:'center',borderRadius:'5px',backgroundColor:'#003049',color:'white'}}>
                <div>
                    <img src={mobileBanking} alt='mobileBangking' style={{marginLeft:'30px',marginTop:'5px'}}/><br/>
                    <span style={{fontSize:'11px'}}>Mobile 
                    Banking
                    </span>
                </div>
            </div>
            <input  onChange={e => setMobileValue(Number(e.target.value))} placeholder='$' style={{border:'1px solid',height:'50px',width:'100px',marginTop:'10px',marginRight:'100px',borderRadius:'20px',textAlign:'center'}}></input>
         
        </div> 

        {/* cash */}
        <div className='d-flex justify-content-between'>    
            <div style={{border:'none',height:'50px',marginTop:'10px',width:'148px',marginLeft:'50px',display:'flex',justifyContent:'center',borderRadius:'5px',backgroundColor:'#003049',color:'white'}}>
                <div>
                    <img src={cash} alt='cash'/><br/>
                    <span style={{fontSize:'11px'}}>Cash</span>
                </div>
            </div>
            <input value={resultCash} placeholder='$' style={{border:'1px solid',height:'50px',width:'100px',marginTop:'10px',marginRight:'100px',borderRadius:'20px',textAlign:'center'}} ></input>
        </div> 

        
        

        {/* submit */}
        <div className='d-flex justify-content-center mt-4'>
            <Button onClick={e => {
                setSubmit(e)
                alert("purchase successfully")
                window.location.reload(false)
            }
                } style={{borderColor:'#003049',backgroundColor:'#B8B8B8',fontWeight:'bold',color:'#003049'}}>Submit</Button>
        </div>
    </div>

    )

}

export default Payment;