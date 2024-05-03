import axios from "axios";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

const ProductContext = createContext({
  products: [],
});

export function ProductContextProvider({ children }) {
  let url = "http://localhost:3006/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      let res = await axios.get(url);
      setProducts(res.data);
    })();
  }, []);

  const deleteProduct = async (id) => {
    // try{
    //     let res=await axios.delete(url+"/"+id);
    //     if(res.status==200)
    //     setProducts(products.filter(item=>item.id!=id));
    // }
    // catch(err){
    //     console.log(err)
    // }

    axios
      .delete(url + "/" + id)
      .then((res) => {
        if (res.status == 200)
          setProducts(products.filter((item) => item.id != id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProduct = async (data) => {
    // try {
    //   let res = await axios.put(url + "/" + data.id, data);
    //   if (res.status == 200) {
    //     setProducts(
    //       products.map((item) => {
    //         if (item.id == data.id) return data;
    //         return item;
    //       })
    //     );
    //     setEditData({});
    //   }
    // } catch (err) {
    //   console.log(err);
    // }

    await axios.put(url + "/" + data.id, data).then(res=>{
        if (res.status == 200) {
                setProducts(
                  products.map((item) => {
                    if (item.id == data.id) return data;
                    return item;
                  })
                );
            }
    }).catch(err=>{
        console.log(err)
    })

  };

  const addProduct = async (data) => {
    // try{
    // await axios.post(url, data);
    // setProducts([data, ...products]);
    // }
    // catch(err){
    //     console.log(err)
    // }

    axios.post(url,data).then(res=>{
        if(res.status==201 || res.status==200)
        {
          setProducts([data,...products]);
        console.log("added",data)
        }
    }).catch(err=>{
        console.log(err);
    })
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        deleteProduct,
        updateProduct,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const {
    products,
    deleteProduct,
    updateProduct,
    addProduct,
  } = useContext(ProductContext);
  return {
    products,
    deleteProduct,
    updateProduct,
    addProduct,
  };
}
