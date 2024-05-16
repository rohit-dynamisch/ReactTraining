import React, { useEffect, useState } from 'react'

function UseLocalStorage() {
    const [user,setUser]=useState('')
    useEffect(() => {
        const userVal = JSON.parse(localStorage.getItem("user"));
        if (userVal) setUser(userVal);
      }, []);
  return user
}

export default UseLocalStorage;
