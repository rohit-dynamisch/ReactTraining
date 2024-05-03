import React, { useState } from 'react'

function Parent() {
    const [count,setCount]=useState(0);
    const [toggle,setToggle]=useState(true)
    const a=100;
    let c=function b(){
        return 20;
    }
  return (
    <div>
    <h1>counter : {count}</h1>
    <button onClick={()=>setCount(count+1)}>INC</button>
    <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      <Child a={a} count={count} />
    </div>
  )
}

export default Parent


const Child=React.memo(({a,count})=>{
    console.log("child renders!")
return (<h1>{a}</h1>)
})