import React from 'react'
import { useProductContext } from '../context/ProductContext'
import ProductComponent from '../../D9Loops/ProductComponent';
import ProductCard from './ProductCard';

function Products() {
  let {products}=useProductContext();
  return (
    <div className='products'>
    <div className='filters'>

    </div>

    <div className='productList'>
    {
      products.length>0 && products.map(data=><ProductCard key={data.id} data={data}/>)
    }
    </div>
      
    </div>
  )
}
export default Products
