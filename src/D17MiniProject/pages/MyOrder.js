import React, { useContext } from 'react'
import { useOrderContext } from '../context/OrderContext'
import MyOrderItem from '../components/MyOrderItem';

function MyOrder() {
    const {order}=useOrderContext();
  return (
    <div>
     {order.length>0 ? <div>
        <h2 style={{textDecoration:"underline",textAlign:"center"}}>My Orders</h2>
        <div className='myOrderDiv'>
        {
            order.map(item=> <MyOrderItem item={item}/>)
        }
        </div>
      </div>:<center><h2>No Orders..</h2></center>}
    </div>
  )
}

export default MyOrder
