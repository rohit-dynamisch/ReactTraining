import React from 'react'
import { Outlet } from 'react-router-dom'
import { ProductContextProvider } from '../context/ProductContext'
import Navbar from '../components/Navbar'
import { CartContextProvider } from '../context/CartContext'
import { AuthContextProvider } from '../context/AuthContext'

function ProjectLayout() {
  return (
    <>
    <AuthContextProvider>
    <ProductContextProvider>
    <CartContextProvider>
    <Navbar/>
        <Outlet/>
        </CartContextProvider>
    </ProductContextProvider>
    </AuthContextProvider> 
    </>
  )
}

export default ProjectLayout
