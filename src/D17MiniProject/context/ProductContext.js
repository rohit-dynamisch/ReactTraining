import axios from "axios";
import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import useAPI from "./useAPI";

const ProductContext = createContext({
  products: [],
  productToShow:[]
});

export function ProductContextProvider({ children }) {
  let url = process.env.REACT_APP_PRODUCT_API;
  const [products, setProducts] = useState([]);
  let {data,loading}=useAPI(url);
  const [productToShow, setProductToShow] = useState(products);
  const [deleteId, setDeleteId] = useState();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = React.useState([]);
  const [range, setRange] = React.useState([0, 10000]);
  const [loadingFlag,setLoadingFlag]=useState(true);

  //----------------------------setProducts function-----------------------------
  useEffect(()=>{
    if(data)
    setProducts(data)
  },[data]);

  ///------------------------------loading products indicator---------------------------
  useEffect(()=>{
    let t=setTimeout(()=>setLoadingFlag(loading),5000)
    return ()=>clearTimeout(t)
  },[loading]);

  //----------------------------range filter----------------------
  const handleRange = (event, newValue) => {
    setRange(newValue);
    console.log("range",newValue)
  };

  //----------------------------------category filter--------------------------
  const handleFilter = (event) => {
    const {
      target: { value },
    } = event;
    setFilters(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //--------------------------delete product----------------------
  const handleDelete = () => {
    deleteProduct(deleteId);
    setDeleteId("");
  };

  // //----------------fetch products-----------------------
  // useEffect(() => {
  //   (async function () {
  //     let res = await axios.get(url);
  //     setProducts(res.data);
  //   })();
  // }, []);


  //--------------------delete product------------------------
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
        // if (res.status == 200)
          setProducts(products.filter((item) => item.id != id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //-----------------------------------update product------------------------------
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

    await axios
      .put(url + "/" + data.id, data)
      .then((res) => {
        if (res.status == 200) {
          setProducts(
            products.map((item) => {
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

  //---------------------------------add product------------------------
  const addProduct = async (data) => {
    // try{
    // await axios.post(url, data);
    // setProducts([data, ...products]);
    // }
    // catch(err){
    //     console.log(err)
    // }

    axios
      .post(url, data)
      .then((res) => {
        if (res.status == 201 || res.status == 200) {
          setProducts([data, ...products]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


    //---------------------Product Search Function--------------------------------
    const handleSearch = (e) => {
    
      setSearch(e.target.value);
    };

    const handleProductToShow=()=>{
      let temp;
      if (!search.trim()) {
        temp=products;
      } else {
        temp=
          products.filter((item) => {
            return (item.title +" "+ item.brand +" "+ item.category)
              .toLowerCase()
              .includes(search.toLowerCase());
          })
      }

      if(filters.length>0){
        temp=temp.filter(item=>filters.includes(item.category.toLowerCase()) )
      }

      temp=temp.filter(item=>parseInt(item.price)>=range[0] && parseInt(item.price)<=range[1])

      
      setProductToShow(temp)
    }
  
    useEffect(() => {
      setProductToShow(products);
    }, [products]);

    useEffect(()=>{
      handleProductToShow();
    },[filters,search,range])
  
  return (
    <ProductContext.Provider
      value={{
        products,
        deleteProduct,
        updateProduct,
        addProduct,
        handleDelete,
        setDeleteId,
        productToShow,handleSearch,
        search,setSearch,
        filters,setFilters,handleFilter,
        range,handleRange,loadingFlag
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
    handleDelete,
    setDeleteId,
    productToShow,handleSearch,
    search,setSearch,
    filters,setFilters,handleFilter,
    range,handleRange,loadingFlag
  } = useContext(ProductContext);
  return {
    products,
    deleteProduct,
    updateProduct,
    addProduct,
    handleDelete,
    setDeleteId,
    productToShow,
    search,setSearch,handleSearch,
    filters,setFilters,handleFilter,
    range,handleRange,loadingFlag
  };
}
