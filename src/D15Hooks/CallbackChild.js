import React, { memo, useState } from 'react'

function CallbackChild({a}) {
    const [temp,setTemp]=useState(0);
    console.log("child render")
  return (
    <div>
    <h2>Child</h2>
      <button onClick={()=>setTemp(p=>p+1)}>Increement:{temp}</button>
    </div>
  )
}

export default memo(CallbackChild)
