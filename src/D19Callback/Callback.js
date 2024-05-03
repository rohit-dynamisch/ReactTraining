import React, { memo, useCallback, useEffect, useRef, useState } from "react";

function Callback() {
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  
  const handleAge = useCallback(() => {
    setAge((age) => age + 1);
  }, []);


//   const handleCount = () => {
//     setCount((count) => count + 1);
//   };
//   const handleAge = () => {
//     setAge((age) => age + 1);
//   };


  return (
    <div
      style={{ display: "flex", width: "70vw", justifyContent: "space-around" }}
    >
      <Child1 age={age} handleAge={handleAge} />
      <Child2 count={count} handleCount={handleCount} />
    </div>
  );
}

export default Callback;

const Child1 = memo(({ age, handleAge }) => {
  let ref = useRef(1);
  useEffect(()=>{ref.current=ref.current+1})
  console.log("Child1 rendered!!");
  return (
    <div>
      <h3>Child1</h3>
      <div>{age}</div>
      <button onClick={handleAge}>Inc Age</button>
      <p>Child1 rendered {ref.current} times</p>
    </div>
  );
});

const Child2 = memo(({ count, handleCount }) => {
  let ref = useRef(1);
  console.log("Child2 rendered!!");
  useEffect(() => {
    ref.current = ref.current + 1;
  });
  return (
    <div>
      <h3>Child2</h3>
      <div>{count}</div>
      <button onClick={handleCount}>Inc Age</button>
      <p>Child2 rendered {ref.current} times</p>
    </div>
  );
});
