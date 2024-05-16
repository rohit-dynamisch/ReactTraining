import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import authReducer from '../Slice/authSlice'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
export const store=configureStore({
    reducer:{
      auth:authReducer
    }
  })
function RtkOutlet() {
    
  return (
    <Provider store={store}>
    <div>
      <Outlet/>
      <ToastContainer/>
    </div>
    </Provider>
  )
}

export default RtkOutlet
