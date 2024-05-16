import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";

function CartCard({ item }) {
  const { updateCart, cart,removeFromCart } = useCartContext();
  const [cartData, setCartData] = useState(item);
  const [quantity,setQuantity]=useState(item.quantity)
  useEffect(() => {
    setCartData(item);
    setQuantity(item.quantity)
  }, [item]);

  //-------------------------------------handle cart------------------------------
  const handleChange = () => {
    setCartData((temp) => {
      return {
        ...temp,
        quantity:parseInt(quantity),
      };
    });

    updateCart({
      ...cartData,
      quantity: parseInt(quantity),
    });
  };

  useEffect(()=>{
    if(quantity==0){
      removeFromCart(item.id)
    }else
    handleChange();
  },[quantity])

  return (
    <div className="cartItem">
      <div className="cartItemImage">
        <img src={item.thumbnail}></img>
      </div>
      <div className="cartItemInfo">
        <p>{item.title}</p>
        <p>{item.brand}</p>
        <p>{item.category}</p>
        <button style={{backgroundColor:"black",width:"2rem",height:"2rem",border:"none",borderRadius:"50%",cursor:"pointer",marginLeft:"5px",marginRight:"5px",fontSize:"1.5rem",color:"white"}}  onClick={()=>{setQuantity(q=>q-1)}}>-</button>
        <span style={{fontWeight:"bolder",fontSize:"1.2rem"}}>{quantity?quantity:1}</span>
        <button style={{backgroundColor:"black",width:"2rem",height:"2rem",border:"none",borderRadius:"50%",cursor:"pointer",marginLeft:"5px",marginRight:"5px",fontSize:"1.5rem",color:"white"}} onClick={()=>{setQuantity(q=>q+1)}}>+</button>
      </div>
      <div className="cartItemPrice">
        <p>₹{item.price}</p>
        {item.discountPercentage && item.discountPercentage > 0 && (
          <p>{item.discountPercentage}% off</p>
        )}
        <p
          onClick={() => removeFromCart(item.id)}
          style={{
            color: "rgb(79 70 229)",
            fontWeight: "bolder",
            cursor: "pointer",
          }}
        >
          Remove
        </p>
      </div>
    </div>
  );
}

export default CartCard;
