import React, { useEffect, useState } from "react";
import errorImg from "../images/error.jpg";
import one from "../images/one.svg"
import two from "../images/two.svg"
import three from "../images/three.svg"
import four from "../images/four.svg"
import five from "../images/five.svg"

function UseEffectDemo() {
  let imgArr=[one,two,three,four,five]
  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(1);

  const [effVal1, setEffVal1] = useState(0);
  const [effVal2, setEffVal2] = useState(0);
  const [effEmpty, setEffEmpty] = useState(0);

  const [prev1, setPrev1] = useState(0);
  const [prev2, setPrev2] = useState(0);

  const [showImg,setShowImg]=useState(false);
  const [imgSrc,setImgSrc]=useState(0);

  const [todoArr,setTodoArr]=useState([]);
  const [todo,setTodo]=useState("");
  const [cookieName,setCookieName]=useState("")
  const [cookiePassword,setCookiePassword]=useState("")

  const [news, setNews] = useState();
  const [newsTopic, setNewsTopic] = useState("all");

  useEffect(() => {
    console.log("This useEffect will run every Time any state changes!");
  });

  useEffect(() => {
    console.log(
      "This useEffect will run only when component is mounted first time (not everytime when state changes)!"
    );
    (async function () {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${newsTopic}&from=2024-04-07&to=2024-04-07&sortBy=popularity&apiKey=4c84a34667b64013b1849d5789256ea0`
      );
      const news = await response.json();
      setNews(news.articles);
    })();
    setEffEmpty((p) => p + 1);
  }, [newsTopic]);

  useEffect(() => {
    console.log("This useEffect will run only when val1 component changes!");
    setEffVal1((p) => p + 1);
    if (val1 == 21) {
      alert("Val1 has exceeded 20!");
    }
    if (val1 == -1) alert("Val1 has subceeded 0!");
    let temp = val1;
    return function () {
      setPrev1(val1);
    };
  }, [val1]);

  useEffect(() => {
    console.log("This useEffect will run only when val2 component changes!");
    setEffVal2((p) => p + 1);
    if (val2 == 21) {
      alert("Val2 has exceeded 20!");
    }
    if (val2 == -1) {
      alert("Val2 has subceeded 0!");
    }
    return function () {
      setPrev2(val2);
    };
  }, [val2]);


  useEffect(()=>{
    let timeInterval;
    if(showImg){
      timeInterval=setInterval(()=>{
        setImgSrc(i=>((i+1)%5))
      },1000)
    }
    return ()=>clearInterval(timeInterval);
  },[showImg])

  useEffect(()=>{
    setTodoArr(JSON.parse(localStorage.getItem("todos"))??[])
    alert("Here is your Cookie "+document.cookie)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoArr))
  },[todoArr])


  const handleVal1Inc = () => {
    setVal1((p) => p + 1);
  };
  const handleVal2Inc = () => {
    setVal2((p) => p + 1);
  };
  const handleVal1Dec = () => {
    setVal1((p) => p - 1);
  };
  const handleVal2Dec = () => {
    setVal2((p) => p - 1);
  };
  const handleTodo=()=>{
    setTodoArr([todo,...todoArr])
  }

  return (
    <div>
      <h1>
        <center>All about useEffect and Dependency Array!</center>
      </h1>
      <div>
        <h2>[Val1] useEffect ran {effVal1} times</h2>
        <h2>[Val2] useEffect ran {effVal2} times</h2>
        <h2>[] useEffect ran {effEmpty} times!</h2>
      </div>
      <div>
        <div>
          <h1>Val1 = {val1}</h1>
        </div>
        <p>Previous value val1 = {prev1}</p>
        <button onClick={handleVal1Inc}>Increement</button>
        <button onClick={handleVal1Dec}>Decreement</button>
      </div>

      <div>
        <div>
          <h1>Val2 = {val2}</h1>{" "}
        </div>
        <p>previous value val2= {prev2}</p>
        <button onClick={handleVal2Inc}>Increement</button>
        <button onClick={handleVal2Dec}>Decreement</button>
      </div>
      <hr />

      <center><h2>Caraousel Using useEffect and setInterval</h2></center>
      <div>
      <img src={imgArr[imgSrc]}/>
      <button onClick={()=>setShowImg(true)}>Start</button>
      <button onClick={()=>setShowImg(false)}>Stop</button>
      </div>

      <hr />
      <center><h1>LocalStorage/Cookie with useEffect</h1></center>
      <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo} />
      <button onClick={handleTodo}>Add</button>
      <button onClick={()=>{localStorage.setItem("todos",[]);setTodoArr([])}}>Clear</button>
      <ul>
      {todoArr && todoArr.map((item)=><li>{item}</li>)}
      </ul>
      <input type="text" onChange={(e)=>setCookieName(e.target.value)} value={cookieName}/>
      <br/>
      <input type="password" onChange={(e)=>setCookiePassword(e.target.value)} value={cookiePassword}/>
      <br/>
      <button onClick={()=>document.cookie="Id = "+cookieName+" Password = "+cookiePassword}>AddCookie</button>
      <hr/>


      <h1>
        <center>Fetching News using API!</center>
      </h1>
      <div>
        <button onClick={() => setNewsTopic("all")}>All</button>
        <button onClick={() => setNewsTopic("science")}>Science</button>
        <button onClick={() => setNewsTopic("cricket")}>Sports</button>
        <button onClick={() => setNewsTopic("technology")}>Technology</button>
        <button onClick={() => setNewsTopic("space")}>Space</button>
        <button onClick={() => setNewsTopic("entertainment")}>
          Entertainment
        </button>
      </div>
      <div
        style={{
          display: "Flex",
          width: "100vw",
          flexWrap: "wrap",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {news ? (
          news
            .map((item, i) => {
              return (
                <div
                  key={i}
                  style={{
                    flexBasis: "30%",
                    border: "2px solid black",
                    margin: "20px",
                  }}
                >
                  <h3>{item.title}</h3>
                  <img
                    height="100px"
                    src={item.urlToImage + ""}
                    onError={(e) => (e.target.src = errorImg)}
                  />
                  <p>{item.description}</p>
                </div>
              );
            })
            .reverse()
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
    </div>
  );
}

export default UseEffectDemo;
