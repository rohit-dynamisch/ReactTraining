import React, { useEffect, useState } from 'react'
import { useProductContext } from '../context/ProductContext'
import { useLocation, useNavigate } from 'react-router-dom';

function ProductForm() {
    const navigate=useNavigate();
    const location=useLocation();
    let data;
    if(location?.state)
     data=location?.state?.data;

    const {updateProduct,addProduct}=useProductContext();

    const [formData,setFormData]=useState({
                title:"",
                price:"",
                discountPercentage:"",
                brand:"",
                category:"",
                rating:"",
                thumbnail:"https://cdn.dummyjson.com/product-images/6/thumbnail.png"
    });
    const [error,setError]=useState({
        titleError:"",
        priceError:"",
        discountPercentageError:"",
        brandError:"",
        categoryError:"",
        ratingError:"",
        thumbnailError:"https://cdn.dummyjson.com/product-images/6/thumbnail.png"
});

    useEffect(()=>{
        if(data)
        setFormData(data)
    },[data])

    const handleEdit=async(e)=>{
        e.preventDefault();
        
        if(handleValidation()) return;
        if(formData.id){
            await updateProduct(formData);
            setFormData({
                title:"",
                price:"",
                discountPercentage:"",
                brand:"",
                rating:"",
                category:"",
                thumbnail:"https://cdn.dummyjson.com/product-images/6/thumbnail.png"
            })
        }
        navigate('/project')

    }
    const handleChange=(e)=>{
        if(["price","rating","discountPercentage"].includes(e.target.id)){
            setFormData({
                ...formData,
                [e.target.id]:e.target.value
            })
            return 
        }
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }

    const handleValidation=()=>{
        let errorFlag=false;
        setError({
            titleError:"",
            priceError:"",
            discountPercentageError:"",
            brandError:"",
            categoryError:"",
            ratingError:"",
            thumbnailError:"https://cdn.dummyjson.com/product-images/6/thumbnail.png"
    });
        if(!formData.title.trim()){
            errorFlag=true;
            setError(prev=>{return {...prev,titleError:"title is required!"}})
        }
        if(!formData.brand.trim()){
            errorFlag=true;
            setError(prev=>{return{...prev,brandError:"brand is required!"}})
        }
        if(!formData.category.trim()){
            errorFlag=true;
            setError(prev=>{return{...prev,categoryError :"category is required!"}})
        }
        if(!formData.price){
            errorFlag=true;
            setError(prev=>{return{...prev,priceError:"price is required!"}})
        }
        if(!formData.discountPercentage){
            errorFlag=true;
            setError(prev=>{return{...prev,discountPercentageError:"Discount Percentage is required!"}})
        }
        if(!formData.rating){
            errorFlag=true;
            setError(prev=>{return{...prev,ratingError:"rating is required!"}})
        }
        return errorFlag;
    }

    const handleAdd=async(e)=>{
        e.preventDefault();
        
        if(handleValidation()) return;
        else
        {
        await addProduct({...formData,id:Math.ceil(Math.random()*100)+30});
        setFormData({
            title:"",
            price:0,
            discountPercentage:0,
            brand:"",
            category:"",
            rating:0,
            thumbnail:"https://cdn.dummyjson.com/product-images/6/thumbnail.png"
        })}
        navigate('/project')
    }
    useEffect(()=>{
console.log(error)
    },[error])

  return (
    <div className='editForm'>
        {location.state ? <h3>Edit Product</h3>:<h3>Add Product</h3>}
      <form>
        <div>
        <label htmlFor='title'>Title</label>
        <input id='title' value={formData.title} onChange={handleChange} type='text'/>
        <span>{error.titleError}</span>
       </div>
       <div className='price'>
       <label htmlFor='price'>Price</label>
        <input value={formData.price} onChange={handleChange} id='price' type='number'/>
        <span>{error.priceError}</span>
       </div>
       <div className='discount'>
       <label htmlFor='discountPercentage'>Discount Percentage</label>
        <input value={formData.discountPercentage} onChange={handleChange} id='discountPercentage' type='number'/>
        <span>{error.discountPercentageError}</span>
       </div>
       <div>
       <label htmlFor='brand'>Brand</label>
        <input value={formData.brand} onChange={handleChange} id='brand' type='text'/>
       <span>{error.brandError}</span>
       </div>
       <div>
       <label htmlFor='category'>Category</label>
        <input value={formData.category} onChange={handleChange} id='category' type='text'/>
        <span>{error.categoryError}</span>
       </div>
       <div>
       <label htmlFor='rating'>Rating</label>
        <input value={formData.rating} onChange={handleChange} id='rating' type='number'/>
        <span>{error.ratingError}</span>
       </div>
       <div>
        {location.state ? <div onClick={handleEdit}><button>Edit</button></div>
        : <div onClick={handleAdd}><button>Add</button></div>}
      </div>
      </form>
      
    </div>
  )
}

export default  ProductForm;
