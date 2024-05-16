import React, { useEffect, useState } from "react";
import { useOrderContext } from "../context/OrderContext";

function AllOrderItem({ orderItem }) {
    const{updateOrder}=useOrderContext();
    const [status,setStatus]=useState();

    useEffect(()=>{
        setStatus(orderItem.status);
    },[orderItem]);

    //------------------------------handle Status change--------------------------------
    const handleStatus=(e)=>{
        setStatus(e.target.value)
        updateOrder({...orderItem,status:e.target.value})
    }
  return (
    <div>
      <div className="allOrdersId">{orderItem.id}</div>
      <div className="allOrdersOrder">
        {orderItem.Order.map((item) => {
          return (
            <div>
              <div>
                <img src={item.thumbnail}></img>
              </div>
              <div>
                {item.brand} {item.title} ({item.category})
              </div>
            </div>
          );
        })}
      </div>
      <div className="allOrdersPrice">
        ₹{orderItem.Order.reduce((acc, item) => parseInt(item.price) + acc, 0)}
      </div>
      <div className="allOrdersAddress">
        {
          <div>
            <span>{orderItem.address.name}</span>
            <span>{orderItem.address.email}</span>
            <span>{orderItem.address.phone}</span>
            <span>{orderItem.address.address}</span>
            <span>
              {orderItem.address.country} / {orderItem.address.state} /{" "}
              {orderItem.address.city} / {orderItem.address.pin}
            </span>
          </div>
        }
      </div>
      <div className="allOrderStatus">
        <select value={status} onChange={(e)=>{handleStatus(e)}}>
            <option value="pending">Pending</option>
            <option value="In Transit">In Transit</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>

        </select>
      </div>
      <div className="allOrderPayment">{orderItem.payment}</div>
      <div className="allOrderDate">{orderItem.date}</div>
      {/* <div>EDIT</div> */}
    </div>
  );
}

export default AllOrderItem;
