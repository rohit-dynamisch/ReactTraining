import React from 'react'

function Children({children}) {
  return (
    <div style={{marginLeft:"50px"}}>
      <h2>Receiving Data from Parent as a Children:-</h2>
      {/* {children} */}
      {children.name}
      {/* {children[0]} */}
      {/* {children(()=>alert("clicked"))} */}
    </div>
  )
}

export default Children
