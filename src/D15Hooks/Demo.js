
import React, { useState, useCallback } from 'react';
const functionsRef = new Set();
const Demo = () => {


const [count, setCount] = useState(0)
const [number, setNumber] = useState(0)

const incrementCounter = useCallback(() => {
    setCount(count + 1);
}, [count]);
const decrementCounter = useCallback(() => {
    setCount(count - 1);
}, [count]);
const incrementNumber = useCallback(() => {
    setNumber(number + 1);
}, [number]);

functionsRef.add(incrementCounter);
functionsRef.add(decrementCounter);
functionsRef.add(incrementNumber);
alert(functionsRef.size);

return (
	<div style={{marginLeft:"50px"}}>
	Count: {count}
	<button onClick={incrementCounter}>
		Increase counter
	</button>
	<button onClick={decrementCounter}>
		Decrease Counter
	</button>
	<button onClick={incrementNumber}>
		increase number
	</button>
	</div>
)
}


export default Demo;

