import React from 'react'
import { Link, useParams } from 'react-router-dom'
import gif from '../Images/Animation - 1715441555400.gif'
function Orders() {
  const {id}=useParams();
  return (
    <div className='orderSuccess'>
    <img src={gif} width="300px"></img>
     <div>
     
      <div style={{color:"#3CB371",fontWeight:"bolder",fontSize:"2rem"}}>Order Placed Successfully 🥳🎉</div>
      <div style={{fontWeight:"bolder",fontSize:"3rem"}}>Your Order Id is {id}</div>
      <div style={{color:"GrayText"}}>You can track your order in My Account! Thank you for shopping with us!</div>
      <div>
        <button style={{color:"rgb(79 70 229 / 1)",border:"3px solid rgb(79 70 229 / 1)",backgroundColor:"white",height:"2.5rem",width:"8rem",borderRadius:"10px"}}><Link to="/project" style={{color:"rgb(79 70 229 / 1)",textDecoration:"none"}}>Go back Home</Link></button>
      </div>
     </div>
     <img width="300px" src={gif}></img>
    </div>
  )
}

export default Orders
