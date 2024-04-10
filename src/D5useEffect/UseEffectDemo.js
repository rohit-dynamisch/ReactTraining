import React, { useEffect, useState } from 'react'

function UseEffectDemo() {
    const [val1,setVal1]=useState(1);
    const [val2,setVal2]=useState(1);

    const [effVal1,setEffVal1]=useState(0);
    const [effVal2,setEffVal2]=useState(0);
    const [effEmpty,setEffEmpty]=useState(0);

    const [prev1,setPrev1]=useState(0);
    const[prev2,setPrev2]=useState(0)

    const [news,setNews]=useState();

    useEffect(()=>{
     console.log("This useEffect will run every Time any state changes!")   
    })

    useEffect(async()=>{
        console.log("This useEffect will run only when component is mounted first time (not everytime when state changes)!")   ;
        (async function () {
            const response = await fetch("https://newsapi.org/v2/everything?q=space&from=2024-04-07&to=2024-04-07&sortBy=popularity&apiKey=4c84a34667b64013b1849d5789256ea0");
            const  news = await response.json();
            setNews(news.articles)
          })();
        setEffEmpty(p=>p+1)
    },[])

    useEffect(()=>{
        console.log("This useEffect will run only when val1 component changes!")
        setEffVal1(p=>p+1)   
        if(val1==21) {
            alert("Val1 has exceeded 20!")}
        if(val1==-1) alert("Val1 has subceeded 0!")
        let temp=val1;
        return ()=>setPrev1(val1);
    },[val1])

    useEffect(()=>{
        console.log("This useEffect will run only when val2 component changes!")   
        setEffVal2(p=>p+1)
        if(val2==21) {
            alert("Val2 has exceeded 20!")

        }
        if(val2==-1) {
            alert("Val2 has subceeded 0!")
        }
        return ()=>setPrev2(val2);
    },[val2])
    
    const handleVal1Inc=()=>{
        setVal1(p=>p+1)
    }
    const handleVal2Inc=()=>{
        setVal2(p=>p+1)
    }
    const handleVal1Dec=()=>{
        setVal1(p=>p-1)
    }
    const handleVal2Dec=()=>{
        setVal2(p=>p-1)
    }

    

  return (
    <div>
    <h1><center>All about useEffect and Dependency Array!</center></h1>
    <div>
        <h2>[Val1] useEffect ran {effVal1} times</h2>
        <h2>[Val2] useEffect ran {effVal2} times</h2>
        <h2>[] useEffect ran {effEmpty} times!</h2>
    </div>
      <div>
        <div><h1>Val1 = {val1}</h1></div>
        <p>Previous value val1 = {prev1}</p>
        <button onClick={handleVal1Inc}>Increement</button>
        <button onClick={handleVal1Dec}>Decreement</button>
      </div>

      <div>
        <div><h1>Val2 = {val2}</h1> </div>
        <p>previous value val2= {prev2}</p>
        <button onClick={handleVal2Inc}>Increement</button>
        <button onClick={handleVal2Dec}>Decreement</button>
      </div>

      <hr/>

      <h1><center>Fetching News using API!</center></h1>
      {news?news.map((item,i)=><h3>{i+1} - {item.title}</h3>):<h2>Loading....</h2>}
    </div>
  )
}

export default UseEffectDemo
