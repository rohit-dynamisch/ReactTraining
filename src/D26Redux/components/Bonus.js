import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementBonus } from '../actions'

function Bonus() {
    const dispatch=useDispatch()
    const points=useSelector(state=>state.bonus.points)
    
  return (
    <div>
      <div>
      <h3>Bonus</h3>
      <h2>Total Points {points}</h2>
      <button onClick={ ()=>dispatch(incrementBonus())}>Increment</button>
      </div>
    </div>
  )
}

export default Bonus
