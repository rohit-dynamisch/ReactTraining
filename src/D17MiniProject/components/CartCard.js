import React from 'react'
import { useCartContext } from '../context/CartContext'

function CartCard({item}) {
  const {removeFromCart}=useCartContext();
  return (
    <div className='cartItem'>
      <div className='cartItemImage'>
      <img src={item.thumbnail}></img>
      </div>
      <div className='cartItemInfo'>
      <p>{item.title}</p>
      <p>{item.brand}</p>
      <p>{item.category}</p>
      <select>
        <option>1</option>
      </select>
      </div>
      <div className='cartItemPrice'>
      <p>{item.price}</p>
      <p>{item.discountPercentage}</p>
      <p  onClick={()=>removeFromCart(item.id)}>Remove</p>
      </div>
    </div>
  )
}

export default CartCard
