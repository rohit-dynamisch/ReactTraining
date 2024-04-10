import React, { useState } from 'react'

function NestedComponent() {
    const [data,setData]=useState()
    function parentMethod(value){
        setData(value)
    }
  return (
    <div>
    <h1><center>Prop Drilling</center></h1>
    <span>Parent </span>
    <span>Data from Child3 - {data}</span>
      <Child1 parentMethod={parentMethod}/>
    </div>
  )
}

function Child1({parentMethod}){
    return (
        <>
        <p>Child1</p>
            <Child2 parentMethod={parentMethod}/>
        </>
    )
}

function Child2({parentMethod}){
    return (
        <>
        <p>Child2</p>
            <Child3 parentMethod={parentMethod}/>
        </>
    )
}

function Child3({parentMethod}){
    return (
        <>
        <span>Child3</span>
        <button onClick={()=>parentMethod(prompt("Enter data to send to Parent"))}>Click to Pass data to Parent!</button>
            
        </>
    )
}


export default NestedComponent;
