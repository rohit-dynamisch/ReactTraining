import React, { useEffect, useState } from "react";
import ProductComponent from "./ProductComponent";
import CartComponent from "./CartComponent";

function MapFilterReducs() {
  const [search, setSearch] = useState();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
let a=[]

console.log(a.map(i=>i))
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const addToCart = (product) => {
    let index=cart?.findIndex((cartItem) => cartItem.id == product.id) 
    if (index<0){
        setCart([{...product,quantity:1},...cart])
    }
    else if(cart[index]?.quantity>=5) alert("Quantity cant be greater than 5!")
    else {
        setCart(cart?.map(item=>{
            if(item.id===product.id) {
                return {...item,quantity:item.quantity+1}
            }
            else return item;
        }))
}
};

  const remove = (id) => {
    setCart(cart.filter(item=>item.id!=id));
  };

  const update=({temp,id})=>{
    setCart(cart.map(item=>{
        if(id==item.id) return {...item,quantity:temp};
        else return item;
    }))
    console.log(temp,id)
  }

  useEffect(()=>console.log(cart),[cart])
  return (

    //PRODUCT LIST
    <div className="cartMain">
      <div className="Products">
     <center> <h2>PRODUCTS</h2></center>
        {products.map((product) => (
          <ProductComponent
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            image={product.image}
            rating={product.rating.rate}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* CARTLIST */}
      <div className="Cart">
      <center><h2>CART</h2></center>
      {
       cart ? cart.map(product=>
            <CartComponent key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
            remove={remove}
            update={update}    
            />
        ):
        <center><p>CART IS EMPTY!</p></center>
      }

      {/* TOTAL AMOUNT (REDUCE) */}
      <h1>Total amount: {
        cart.reduce((total,item)=>(item.price*item.quantity)+total,0)      }</h1>
      </div>
    </div>
  );
}

export default MapFilterReducs;
