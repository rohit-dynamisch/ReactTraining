import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'

function AllHooks() {
  const [breakfast,setBreakfast]=useState(0)
  const [lunch,setLunch]=useState(0)
  const [snacks,setSnacks]=useState(0)
  const [dinner,setDinner]=useState(0)

  const getBreakfastRemaining=useMemo(()=>{
    //heavy computation
    // console.log("memo")
    return 500-breakfast;
  },[breakfast]);

  const getLunchRemaining=useCallback(()=>{
    //heavy computation
    // console.log("callback!")
    return 1000-lunch;
  },[lunch]);

  const getSnacksRemaining=useCallback(()=>{
    //heavy computation
    return 400-snacks;
  },[snacks]);
  
  const getDinnerRemaining=useCallback(()=>{
    //heavy computation
    return 1000-dinner;
  },[dinner]);

  return (
    <div>
    <center><h1>PARENT</h1></center>
    <div>
    <h3>Breakfast calories - {breakfast}</h3>
    <h3>Lunch calories - {lunch}</h3>
    <h3>Snacks calories - {snacks}</h3>
    <h3>Dinner calories - {dinner}</h3>
    </div>

    <div>
    <center><h1>CHILDREN</h1></center>
    <Breakfast setBreakfast={setBreakfast} getBreakfastRemaining={getBreakfastRemaining} />
    <Lunch setLunch={setLunch} getLunchRemaining={getLunchRemaining}/>
    <Snack setSnacks={setSnacks} getSnacksRemaining={getSnacksRemaining}/>
    <Dinner setDinner={setDinner} getDinnerRemaining={getDinnerRemaining}/>
    </div>
    </div>
  )
}

export default AllHooks;


const Breakfast=React.memo(({setBreakfast,getBreakfastRemaining})=>{
  console.log("Breakfast...")
  const [breakfastArr,setBreakfastArr]=useState([])
  const calories=useRef(0);
  const [food,setFood]=useState("")
  return (
    <div className='time'>
    <center><h2>Breakfast {getBreakfastRemaining}</h2></center>
    <div>
    <input placeholder='food..' value={food} onChange={e=>setFood(e.target.value)} />
    <input placeholder='calories..' type='number' ref={calories}/>
    <button onClick={()=>{setBreakfast(p=>p+parseInt(calories.current.value));setBreakfastArr([{food:food,calories:calories.current.value},...breakfastArr])}}>ADD</button>
    </div>
    <div  className="calorieList">
      {
        breakfastArr.map((item,i)=><li key={i}> {food} - {calories.current.value}</li>)
      }
    </div>
    </div>
  )
});

const Lunch=React.memo(({setLunch,getLunchRemaining})=>{
  console.log("Lunch...")
  const [lunchArr,setLunchArr]=useState([])
  const calories=useRef(0);
  const [food,setFood]=useState("")
  return (
    <div className='time'>
    <center><h2>Lunch - {getLunchRemaining()}</h2></center>
    <div>
    <input placeholder='food..' value={food} onChange={e=>setFood(e.target.value)} />
    <input placeholder='calories..' type='number' ref={calories}/>
    <button onClick={()=>{setLunch(p=>p+parseInt(calories.current.value));setLunchArr([{food:food,calories:calories.current.value},...lunchArr])}}>ADD</button>
    </div>
    <div className="calorieList">
      {
        lunchArr.map((item,i)=><li key={i}>{item.food} - {item.calories}</li>)
      }
    </div>
    </div>
  )
});

const Snack=React.memo(({setSnacks,getSnacksRemaining})=>{
  console.log("Snacks...")
  const [snacksArr,setSnacksArr]=useState([])
  const calories=useRef(0);
  const [food,setFood]=useState("")
  return (
    <div className='time'>
    <center><h2>Snack - {getSnacksRemaining()}</h2></center>
    <div>
    <input placeholder='food..' value={food} onChange={e=>setFood(e.target.value)} />
    <input placeholder='calories..' type='number' ref={calories}/>
    <button onClick={()=>{setSnacks(p=>p+parseInt(calories.current.value));setSnacksArr([{food:food,calories:calories.current.value},...snacksArr])}}>ADD</button>
    </div>
    <div className="calorieList">
      {
        snacksArr.map((item,i)=><li key={i}>{item.food} - {item.calories}</li>)
      }
    </div>
    </div>
  )
});

const Dinner=React.memo(({setDinner,getDinnerRemaining})=>{
  console.log("Dinner...")
  let count=useRef(1);
  // useEffect(()=>count.current=count.current+1);
  const [dinnerArr,setDinnerArr]=useState([])
  const calories=useRef(0);
  const [food,setFood]=useState("")
  return (
    <div className='time'>
    <center><h2>Dinner - {getDinnerRemaining()}</h2></center>
    <div>
    <input placeholder='food..' value={food} onChange={e=>setFood(e.target.value)} />
    <input placeholder='focaloriesod..' type='number' ref={calories}/>
    <button onClick={()=>{setDinner(p=>p+parseInt(calories.current.value));setDinnerArr([{food:food,calories:calories.current.value},...dinnerArr])}}>ADD</button>
    </div>
    <div className="calorieList">
      {
        dinnerArr.map((item,i)=><li key={i}>{item.food} - {item.calories}</li>)
      }
    </div>
    </div>
  )
});