import React, { useState } from 'react'
import error from "../images/error.jpg"
function BrokenSrcNConsole() {
  const [src,setSrc]=useState("https://www.pixel4k.com/wp-content/uploads/2019/06/ford-mustang-gt-rear-4k_1559764510.jpg.webp")
  function handleError(){
    setSrc(error)
    console.log("Handling Broken Image....")
  }
  function breakImage(){
    setSrc("https://www.pixel4k.com/wp-content/uploads/2019/06/ford-mustang-gt-rear-4k_155976451.jpg.webp")
    console.log("Breaking Src.....")
    console.error("Broken Src!")
  }

  return (
    <>
    <div>
    <h1><center>BROKEN IMAGE</center></h1>
      <img height="300px" src={"undefined"} onError={(e)=>e.target.src=error} alt='react icon'/>
      <img height="300px" src={src} onError={handleError} alt='react icon'/>
      <br/><br/>
      <button onClick={breakImage}>Click here to Break The Image!</button>
    </div>
    <hr/>
    <div>
    <h1><center>CONSOLE - </center></h1>
    <button onClick={()=>console.log("Hello")}>console.log("Hello")</button>
    <br/><br/>
    <button onClick={()=>console.error("Error")}>console.error("Error")</button>
    <br/><br/>
    <button onClick={()=>console.warn("Warning")}>console.warn("Warning")</button>
    <br/><br/>
    <button onClick={()=>console.clear()}>console.clear()</button>
    <br/><br/>
    <button onClick={()=>console.info("Information...")}>console.info("Information")</button>
    <br/><br/>
    <button onClick={()=>console.assert(1==2,"The assert() method writes a message to the console if an expression is false.")}>console.assert(1==2,"The assert() method writes a message to the console if an expression is false.")</button>
    <br/><br/>
    <button onClick={()=>console.count("demo")}>console.count("demo")</button>
    <br/><br/>
    <button onClick={()=>console.table({firstname:"ROhit", lastname:"Badhai"})}>console.table();</button>
    <br/><br/>
    <button onClick={()=>console.time()}>console.time() (start timer)</button>
    <br/><br/>
    <button onClick={()=>console.timeEnd()}>console.timeEnd() (end timer)</button>
    <br/><br/>
    </div>
    </>
  )
}

export default BrokenSrcNConsole


// https://www.pixel4k.com/wp-content/uploads/2019/06/ford-mustang-gt-rear-4k_1559764510.jpg.webp