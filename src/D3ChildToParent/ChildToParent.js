import React from 'react'

function ChildToParent({ParentMethod}) {
  return (
    <div>
      <h2>Passing Data from children to Parent</h2>
      <button onClick={()=>ParentMethod("This is the data from children")}>Click me TO PASS data to Parent!</button>
    </div>
  )
}

export default ChildToParent
