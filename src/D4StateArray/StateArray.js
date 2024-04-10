import React, { useState } from 'react'

function StateArray() {
    const[arr1,setArr1]=useState([1,2,3,4])
    const[arr2,setArr2]=useState([5,6,7,8])
    const[arr3,setArr3]=useState([])
    const [arr,setArr]=useState([10,29,77,1])

    function handleMerge(){
        setArr3([arr1,arr2])
        console.log(arr3)
    }
    function handleStart(){
        setArr([Math.ceil(Math.random()*100),...arr])
        console.log(arr)
    }
    function handleEnd(){
        setArr([...arr,Math.ceil(Math.random()*100)])
        console.log(arr)
    }
  return (
    <>
    <h1><center>Array in State!</center></h1>
    [{arr1.toString()}]
    <br/>
    [{arr2.toString()}]
    <br/>
    [{arr3.toString()}]

    <br/><br/>
    <button onClick={handleMerge}>Click Here to Merge Two Array</button>
    <hr/>
    <center><h1>Adding Elements to State Array-</h1></center>
    <div>
      [{arr.toString()}]
    </div>
    <br/>
    <button onClick={handleStart}>Enter Random Number at start</button>
    <span> </span>
    <button onClick={handleEnd}>Enter Random Number at End</button>
    </>
  )
}

export default StateArray
