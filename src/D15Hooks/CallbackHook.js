import React, { useCallback, useEffect, useMemo, useState } from "react";
import CallbackChild from "./CallbackChild";

function CallbackHook() {
  const [num, setNum] = useState(1);
  const [dark, setDark] = useState(false);
  const theme = {
    backgroundColor: dark ? "blue" : "green",
    color: dark ? "white" : "black",
  };

  //<-----------------------without useMemo-------------------->
  // function b(){
  //   for (let i = 0; i < 1000000000 * 2; i++) {}
  //   return num*2;
  // }
  // let fun=b();

  //<-------------------------with useMemo---------------------------->
  const fun = useMemo(() => {
    for (let i = 0; i < 1000000000 * 2; i++) {}
    return num*2;
  }, [num]);

  return (
    <div style={theme}>
    <center><h1>UseMemo / useCallback</h1></center>
      <h2>Parent </h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((p) => !p)}>Toggle</button>
      <button onClick={() => setNum((p) => p + 1)}>Change num</button>
      <CallbackChild fun={fun} />
      <p>Function from Parent - {fun}</p>
    </div>
  );
}

export default CallbackHook;
