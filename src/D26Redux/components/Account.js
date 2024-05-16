import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../actions'


function Account({increment,amount}) {
    const[value,setValue]=useState('')
    const dispatch=useDispatch()
  //  const amount=useSelector(state=>state.account.amount)
  return (
    <div>
      <div>
        <h3>Account</h3>
      </div>
      <h3>Amount : { amount}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <input type='text' value={value} onChange={e=>setValue(+e.target.value)}/>
      <button onClick={()=>dispatch(incrementByAmount(value))}>IncrementByAmount</button>
    </div>
  )
}
const mapStateToProps=(state)=>({amount:state.account.amount})
const mapDispatchToProps=(dispatch)=>({
  increment:()=>(dispatch(increment()))
})

export default connect(mapStateToProps,mapDispatchToProps)(Account)
