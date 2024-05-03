import React from 'react'
import { useCartContext } from '../context/CartContext'
import CartCard from '../components/CartCard';

function Cart() {
    const {cart}=useCartContext();
  return (
    <div className='cartContainer'>
    {/* <center><h3>Shopping Cart</h3></center> */}
    {cart.length>0 ? <div className='cartDiv'>
      {
        cart.length>0 && cart.map(item=><CartCard item={item}/>)
      }
      </div>
      :
      <h2>Cart is Empty</h2>
      }
    </div>
  )
}

export default Cart