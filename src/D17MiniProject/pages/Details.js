import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useCartContext } from "../context/CartContext";

function Details() {
  const { id } = useParams();
  const {addToCart}=useCartContext();
  const { products } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedImg,setSelectedImg]=useState()
  useEffect(() => {
    if (products){
      setSelectedProduct(products.filter((item) => item.id == id)[0]);
    }
  }, [id, products]);

  useEffect(()=>{
    setSelectedImg(selectedProduct?.thumbnail)
  },[selectedProduct])


  return (
    selectedProduct && (
      <div className="detailsContainer">
        <div className="detailsMain">
          <div className="imagePreview">
            <div><img onClick={()=>setSelectedImg(selectedProduct.images[0])} src={selectedProduct.images[0]}></img></div>
            <div><img onClick={()=>setSelectedImg(selectedProduct.images[1])} src={selectedProduct.images[1]}></img></div>
            <div><img onClick={()=>setSelectedImg(selectedProduct.images[2])} src={selectedProduct.images[2]}></img></div>
            <div><img onClick={()=>setSelectedImg(selectedProduct.images[3])} src={selectedProduct.thumbnail}></img></div>
          </div>
          <div className="imagePoster">
            <img src={selectedImg}></img>
          </div>
          <div className="productInfoContainer">
            <div className="productInfo">
              <div>
                <h3>{selectedProduct.title}</h3>
              </div>
              <div>
                <span>{selectedProduct.rating}</span>
                <span>800$</span>
                <span>{selectedProduct.discountPercentage}% off</span>
              </div>
              <div>Brand : {selectedProduct.brand}</div>
              <div>Category : {selectedProduct.category}</div>
              <div>{selectedProduct.description}</div>
              <div>
                <button onClick={()=>addToCart(selectedProduct)}>ADD TO CART</button>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Details;
