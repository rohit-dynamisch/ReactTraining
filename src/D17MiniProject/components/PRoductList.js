import React from 'react'
import ProductCard from './ProductCard'
import ProductListHOC from './ProductListHOC';

function PRoductList({productToShow,handleOpen}) {
  return (
    <>
        {productToShow.length > 0 &&
          productToShow.map((data) => (
            <ProductCard key={data.id} data={data} handleOpen={handleOpen} />
          ))}
      </>
  )
}

export default ProductListHOC(PRoductList);
