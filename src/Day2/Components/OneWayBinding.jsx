import React from 'react'

function OneWayBinding({counter,inc,dec}) {
  return (
    <div>
    {counter}
    <br/>
    <button onClick={inc}> Increment</button>
    <button onClick={dec}> Decreement</button>
    </div>
  )
}

export default OneWayBinding
