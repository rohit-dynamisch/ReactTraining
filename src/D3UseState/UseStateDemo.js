import React, { useState } from 'react'
import one from "../images/one.svg"
import two from "../images/two.svg"
import three from "../images/three.svg"
import four from "../images/four.svg"
import five from "../images/five.svg"
import six from "../images/six.svg"
import stone from "../images/stone.jpg"
import paper from "../images/paper.jpg"
import scissor from "../images/scissors.jpg"
function UseStateDemo() {
    let gameArr=[stone,paper,scissor]
    let dicesArr=[one,two,three,four,five,six];

    const [dice,setDice]=useState(dicesArr[0])
    const [game,setGame]=useState(gameArr[0])

    let react="React";
    const [jsxContent,setJsxContent]=useState(
        <div>
            <h2>{react} is a Frontend Library!</h2>
        </div>
    )

    const updateJSX=()=>{
        setJsxContent(
            <div>
                <h2>{react} is not a Framework!</h2>
            </div>
        )
    }
  return (
    <div>
      {jsxContent}
      <button onClick={updateJSX}>Click Here to Change JSX state</button>
      <br/>
      <hr/>
      <img src={dice}></img>
      <br/>
      <button onClick={()=>setDice(dicesArr[Math.floor(Math.random()*6)])}>Click Here to Roll dice!(change svg state)</button>
      <hr/>
      <img height="100px" src={game}></img>
      <br/>
      <button onClick={()=>setGame(gameArr[Math.floor(Math.random()*3)])}>Stone/Paper/Scissor!(change img state)</button>

    </div>
  )
}

export default UseStateDemo
