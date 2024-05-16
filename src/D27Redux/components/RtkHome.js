import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { ToastContainer } from 'react-toastify'
import { configureStore } from '@reduxjs/toolkit'

import { Provider, useDispatch, useSelector } from 'react-redux'
import Profile from './Profile'
import { Navigate, useNavigate } from 'react-router-dom'

function RtkHome() {
  const user =useSelector(state=>state.auth.user)
  return (
    <div>
    {
      user.length==0 && <Navigate to="/day27/reduxToolKit/login" replace={true}></Navigate>
  
    }
      <Profile/>
      <ToastContainer/>
    </div>
  )
}

export default RtkHome
