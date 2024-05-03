import React, { useState } from 'react'
import PropValidation from '../Components/PropValidation'
import OneWayBinding from '../Components/OneWayBinding'
import { func } from 'prop-types'


function Page2() {
    const [counter,setCounter]=useState(0)
    function inc(){
        setCounter(c=>c+1)
    }
    function dec(){
        setCounter(c=>c-1)
    }
  return (
    <div style={{marginLeft:"50px"}}>
      <PropValidation name="rohit" age={22} arr={[1,2,3]} func={func}/>
      <br/>
      <OneWayBinding counter={counter} inc={inc} dec={dec}/>
    </div>
  )
}

export default Page2
