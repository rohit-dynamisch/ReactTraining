import React, { useEffect, useState } from "react";

function ExtraEvents() {
    
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [data, setData] = useState("");
  const [shwoData, setShwoData] = useState("");

  const [status, setStatus] = useState("");
  const [visibility, setVisibility] = useState("visible");
  const [connection, setConnection] = useState(() =>
    window.navigator.onLine ? "online" : "offline"
  );
  const [viewMode, setViewMode] = useState("");
  const [title, setTitle] = useState(false);

  const [keyboardData, setKeyBoardData] = useState("");
  const [randomKey, setRandomKey] = useState("A");
  const [score, setScore] = useState(0);

  const [result, setResult] = useState(false);

  const [zone, setZone] = useState("none");

  const handleSubmit = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShwoData(data);
    }
  };
  useEffect(() => {
    let interval = setInterval(
      () =>
        setRandomKey(
          characters.charAt(Math.floor(Math.random() * characters.length))
        ),
      1000
    );
    return () => clearInterval(interval);
  }, []);



  const onFocus = () => {
    console.log("Infocus");
    setStatus("Focused");
    document.body.style.backgroundColor = "white";
  };
  const onBlur = () => {
    console.log("OnBlur");
    setStatus("Blur");
    document.body.style.backgroundColor = "grey";
  };

  useEffect(()=>{
    let timeout = setTimeout(() => {
        if (title) document.title = "React App";
        else document.title = "Notification";
        setTitle(!title)
      }, 1500);
  
      return () =>
        clearTimeout(timeout);
     
  },[title])

  useEffect(() => {


    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    onFocus();
    window.addEventListener("resize", function () {
      // console.log(window.innerHeight)
      // console.log(window.innerWidth)
      if (window.innerWidth > 1200) setViewMode("Laptop");
      else if (window.innerWidth > 700) setViewMode("Tablet");
      else setViewMode("Mobile");
    });
    window.addEventListener("visibilitychange", () =>
      setVisibility(document.visibilityState)
    );
    window.addEventListener("offline", () => setConnection("offline"));
    window.addEventListener("online", () => setConnection("online"));
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
      // window.removeEventListener("resize")
      // window.removeEventListener("visibilitychange")
      // window.removeEventListener("offline")
      // window.removeEventListener('online')
    };
  }, []);

  function handleDown(e) {
    if (e.key.toUpperCase() === randomKey) setResult(true);
    else setResult(false);
  }
  function handleUp(e) {
    if (result) setScore((p) => p + 1);
  }
  return (
    <div>
    {title +""}
      <div>
        <h2>
          <center>Submit Data onClick or Enter key!</center>
        </h2>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          onKeyUp={handleSubmit}
        />
        <br />
        <button onClick={handleSubmit}>Click To Submit or Press Enter</button>
        <br />
        <h3>Data - {shwoData}</h3>
        <hr />
      </div>
      <div>
        <h1>
          <center>Window Events!</center>
        </h1>
        <h2>
          Blur/Focused - {status}! | Visibility - {visibility}
        </h2>
        <h2> View Mode(resize) - {viewMode}</h2>
        <h2>Connection : {connection}</h2>
        <hr />
      </div>

      <div>
        <center>
          <h2>Typing Speed Check (Keyboard Event!)</h2>
        </center>
        <div>
          <h1>{randomKey}</h1>
        </div>
        <input
          onKeyDown={handleDown}
          onKeyUp={handleUp}
          type="text"
          value={keyboardData}
          onChange={(e) => setKeyBoardData(e.target.value)}
        />
        <h2>Score : {score} </h2>
      </div>
      <hr />
      <div>
        <center>
          <h2>Mouse Events!</h2>
        </center>
        <h2>Zone - {zone}</h2>
        <div className="zone">
          <div
            onMouseOver={() => setZone("Flying Over Safe Zone!")}
            onMouseOut={() => setZone("none")}
            onMouse
            className="safe"
            onMouseDown={(e) => (e.target.style.backgroundColor = "#83f28f")}
            onMouseUp={(e) => (e.target.style.backgroundColor = "green")}
          ></div>
          <div
            onMouseOver={() => setZone("Flying Over Danger Zone!")}
            onMouseOut={() => setZone("none")}
            className="danger"
            onMouseDown={(e) => (e.target.style.backgroundColor = "#FF7F7F")}
            onMouseUp={(e) => (e.target.style.backgroundColor = "red")}
          ></div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ExtraEvents;
