import React, { useState } from 'react'

function Task({item:{id,task,priority,status},handlePriorityChange,handleStatus}) {
  return (
    <div className='task'>
      <div className='taskItem'> {task}</div>
      {status=="pending" && <div>
        <select value={priority} onChange={e=>handlePriorityChange(e,id)}>
            <option value="high">High</option>
            <option value="low">Low</option>
        </select>
      </div>}
      <div title='Mark as Complete!' onClick={e=>handleStatus(status,id)}>{status=="pending"?<svg height="42px" width="42px" fill="#000000" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M177.6,80.43a10,10,0,1,0-19.5,4.5,60.76,60.76,0,0,1-6,44.5c-16.5,28.5-53.5,38.5-82,22-28.5-16-38.5-53-22-81.5s53.5-38.5,82-22a9.86,9.86,0,1,0,10-17c-38.5-22.5-87-9.5-109.5,29a80.19,80.19,0,1,0,147,20.5Zm-109.5,11a10.12,10.12,0,0,0-11,17l40,25a10.08,10.08,0,0,0,5.5,1.5,10.44,10.44,0,0,0,8-4l52.5-67.5c3.5-4.5,2.5-10.5-2-14s-10.5-2.5-14,2l-47,60Z"></path></g></svg>:<svg fill="#000000" width="44px" height="44px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>revert</title> <path d="M0.032 16.416q0.128 0.576 0.544 0.992l4 4q0.608 0.608 1.44 0.608 0.8 0 1.376-0.608l4.032-3.968q0.416-0.448 0.544-1.024t-0.128-1.184q-0.224-0.544-0.736-0.896t-1.088-0.32h-1.824q0.704-3.456 3.456-5.728t6.368-2.272q2.72 0 5.024 1.344t3.616 3.648 1.344 4.992-1.344 5.024-3.616 3.648-5.024 1.344q-2.336 0-4.352-1.024t-3.424-2.752l-2.848 2.592q0 0.032-0.032 0.032t-0.064 0.064-0.064 0.032q1.984 2.368 4.768 3.712t6.016 1.344q2.816 0 5.408-1.088t4.48-3.008 2.976-4.448 1.12-5.472-1.12-5.44-2.976-4.448-4.48-2.976-5.408-1.12q-2.624 0-4.992 0.928t-4.224 2.528-3.072 3.808-1.568 4.736h-2.144q-0.608 0-1.12 0.32t-0.736 0.896-0.128 1.184zM16 16q0 0.832 0.576 1.44t1.44 0.576h4q0.8 0 1.408-0.576t0.576-1.44-0.576-1.408-1.408-0.576h-2.016v-2.016q0-0.832-0.576-1.408t-1.408-0.576-1.44 0.576-0.576 1.408v4z"></path> </g></svg>}</div>
    </div>
  )
}

export default Task
