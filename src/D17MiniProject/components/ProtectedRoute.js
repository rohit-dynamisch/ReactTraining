import React, { useEffect } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({children}) {
    const location=useLocation();
    
    const {userAuth}=useAuthContext();
    if(!JSON.parse(localStorage.getItem('user'))) return <Navigate to="/project/auth/login" replace={true}></Navigate>
    return children;
}

export default ProtectedRoute;
