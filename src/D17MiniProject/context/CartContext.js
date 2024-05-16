import axios from "axios";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCart: () => {},
});

export function CartContextProvider({ children }) {
  let url = "http://localhost:3006/cart";
  const [cart, setCart] = useState([]);

  //--------------------------------fetch user cart on load--------------------------------------
  useEffect(() => {
    (async function () {
      let res = await axios.get(url);
      if (res.status == 200) setCart(res.data);
    })();
  }, []);

  //----------------------------------add product to cart--------------------------------------------
  const addToCart = async (data) => {
    let temp = { ...data, productId: data.id, id: uuidv4(), quantity: 1 };
    try {
      let res = await axios.post(url, temp);
      if (res.status == 200 || res.status == 201) setCart([...cart, temp]);
    } catch (err) {
      console.log(err);
    }
  };

  //-------------------------------------remove product from cart----------------------------------
  const removeFromCart = async (id) => {
    try {
      let res = await axios.delete(url + "/" + id);
      if (res.status == 200 || res.status == 201)
        setCart((cart) => cart.filter((item) => item.id != id));
    } catch (err) {
      console.log(err);
    }
  };

  //--------------------------------------update user cart-----------------------------------------
  const updateCart = async (data) => {
    await axios
      .put(url + "/" + data.id, data)
      .then((res) => {
        if (res.status == 200) {
          setCart(
            cart.map((item) => {
              if (item.id == data.id) return data;
              return item;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //-------------------------------------clear user cart----------------------------
  const clearCart = async () => {
    cart.map((item) => removeFromCart(item.id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const { cart, addToCart, updateCart, removeFromCart, clearCart } =
    useContext(CartContext);
  return { cart, addToCart, updateCart, removeFromCart, clearCart };
}
