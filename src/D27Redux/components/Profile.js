import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../Slice/authSlice';
import { Navigate } from 'react-router-dom';

function Profile() {
  const dispatch=useDispatch();
    const user =useSelector(state=>state.auth.user)
    console.log("user",user)
  return (
    <div style={{marginLeft:"40%"}}>
    {
      !user && <Navigate to="/day27/reduxToolKit/login" replace={true}></Navigate>
  
    }
      <div>
        <h2>Welcome {user[0]?.name}</h2>
        <p>User Details</p>
        <h3>Email - {user[0]?.email}</h3>
        <h3>Number - {user[0]?.number}</h3>
        <h3>Dob - {user[0]?.dob}</h3>
        <h3>Gender  - {user[0]?.gender}</h3>
        <h3>Country - {user[0]?.country}</h3>
        <h3>Pincode - {user[0]?.pincode}</h3>
        <button onClick={()=>dispatch(signOut())}>Logout</button>
      </div>
    </div>
  )
}

export default Profile
