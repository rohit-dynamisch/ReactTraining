import React from 'react'
import { useProductContext } from '../context/ProductContext'
import { Link, useNavigate } from 'react-router-dom';

function ProductCard({data}) {
  const navigate=useNavigate();
    const {deleteProduct}=useProductContext();
    const navigateDetails=(e)=>{
      e.stopPropagation();
      navigate(`/project/productDetails/${data.id}`)
    }
  return (
    <div className='card' onClick={navigateDetails}>
    <div className='wishlist'>
    <svg viewBox="0 0 24 24" height="22px" width="22px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#a72a2a"></path> </g></svg>
    <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
      <div className='imgDiv'>
        <img src={data.thumbnail}/>
      </div>
      <div className='cardContent'>
        <div>{data.brand} {data.title}</div>
        <div>{data.price} {data.discountPercentage}</div>
        <div>{data.rating}/5</div>
        <div>
            <Link to="/project/editProduct" state={{data:data}} onClick={(e) => e.stopPropagation()}>Edit </Link>
            <button onClick={(e)=>{e.stopPropagation();deleteProduct(data.id)}}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
