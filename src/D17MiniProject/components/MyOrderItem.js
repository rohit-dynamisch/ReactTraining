import React from "react";

function MyOrderItem({ item }) {
  return (
    <div className="myOrderItem">
      <div className="myOrderHead">
        <div>
          <div>Order Date</div>
          <div>{item.date}</div>
        </div>

        <div>
          <div>Total Price</div>
          <div>₹{item.Order.reduce((acc, item) => parseInt(item.price) + acc, 0)} </div>
        </div>

        <div>
          <div>Shipped To</div>
          <div>
            {item.address.name}, 
            {item.address.address}
          </div>
        </div>

        <div>
          <div>Order id </div>
          <div>{item.id}</div>
        </div>

        <div>
          <div>Status </div>
          <div style={{fontWeight:"bolder",textAlign:"center"}}>{item.status}</div>
        </div>
      </div>

      <div className="myOrderMain">
        {item.Order.map((order) => {
          return (
            <>
              <div className="myOrderContent">
                <div>
                  <img src={order.thumbnail}></img>
                </div>
                <div>
                  <div>
                    {order.title} {order.brand} - ({order.category}) x{" "}
                    {order.quantity}
                  </div>
                  <div>₹{order.price}</div>
                  <div>{order.description}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <hr style={{ width: "100vw", marginLeft: "-225px" }} />
    </div>
  );
}

export default MyOrderItem;
