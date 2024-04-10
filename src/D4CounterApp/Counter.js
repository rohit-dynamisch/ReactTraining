import React, { useState } from 'react'

function Counter() {
    const [counter,setCounter]=useState(0)
  return (
    <div>
    <h1><center>COUNTER-</center></h1>
    <h1>{counter}</h1>
    <div>
        <button onClick={()=>setCounter(count=>(count+1)%11)}>Increement</button>
        <button onClick={()=>setCounter(count=>((count-1)+11)%11)}>Decreement</button>
    </div>      
    </div>
  )
}

export default Counter
