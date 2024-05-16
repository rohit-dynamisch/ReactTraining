import axios from "axios";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

const OrderContext = createContext({
  order: [],
  placeOrder: () => {},
});

export function OrderContextProvider({ children }) {
  let url = "http://localhost:3006/orders";
  const [order, setOrder] = useState([]);

  //--------------------fetch user orders----------------------------------
  useEffect(() => {
    (async function () {
      let res = await axios.get(url);
      if (res.status == 200) setOrder(res.data);
    })();
  }, []);

  //--------------------place order function-----------------------------
  const placeOrder = async (data) => {
    try {
      console.log(data);
      let res = await axios.post(url, data);
      if (res.status == 200 || res.status == 201) setOrder([data, ...order]);
    } catch (err) {
      console.log(err);
    }
  };

  //--------------------update order details---------------------
  const updateOrder = async (data) => {
    await axios
      .put(url + "/" + data.id, data)
      .then((res) => {
        if (res.status == 200) {
          setOrder(
            order.map((item) => {
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
  return (
    <OrderContext.Provider value={{ order, setOrder, placeOrder, updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrderContext() {
  const { order, setOrder, placeOrder, updateOrder } = useContext(OrderContext);
  return { order, setOrder, placeOrder, updateOrder };
}
