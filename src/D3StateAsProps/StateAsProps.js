import React from 'react'

function StateAsProps({num,setNum,check,children}) {
  return (
    <div style={{marginLeft:"50px"}}>
      Random Number - {num}
      <br/><br/>
      <button onClick={()=>setNum(Math.ceil(Math.random()*100))}>Click Here to Try You Luck!</button>
      <br/><br/>
      <button onClick={()=>check(num)}>Odd/Even Check!</button>
      <br/><br/>
      {children}
    </div>
  )
}

export default StateAsProps
