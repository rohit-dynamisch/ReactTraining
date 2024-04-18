import './App.css';
import React, { Component, useState } from "react";
import Page1 from './Day1/pages/Page1';
import Page2 from './Day2/Pages/Page2';
import Children from './D3Children/Children';
import ChildToParent from './D3ChildToParent/ChildToParent';
import DefaultExport, { NamedExportDemo } from './D3Exports/ExportDemo';
import SpreadOperatorNestedObj from './D3SpreadOpNestedObj/SpreadOperatorNestedObj';
import StateAsProps from './D3StateAsProps/StateAsProps';
import UseStateDemo from './D3UseState/UseStateDemo';
import BrokenSrcNConsole from './D4BrokenSrc&Console/BrokenSrcNConsole';
import Counter from './D4CounterApp/Counter';
import StateArray from './D4StateArray/StateArray';
import NestedComponent from './D4NestedComponent/NestedComponent';
import UseEffectDemo from './D5useEffect/UseEffectDemo';
import Form from './D7Events/InputTypesNEvents';
import InputTypesNEvents from './D7Events/InputTypesNEvents';
import ExtraEvents from './D7Events/ExtraEvents';
import Loops from './D9Loops/Loops';
import MapFilterReducs from './D9Loops/MapFilterReducs';
import IterateObj from './D10Filters/IterateObj';
import Scrap from './D10Filters/Scrap';
import FiltersInCard from './D10Filters/FiltersInCard';
import Todo from './D11Todo/Todo';

function App() {
  const [temp,setTemp]=useState("")

  function ParentMethod(data) {
    alert("Inside Parent - "+data)
  }
  const [num,setNum]=useState(0)

  function check(i){
    if(i&1) setTemp("Odd")
    else setTemp("Even")
  }
  

      return (
      <>
       {/* <Page1/> */}
       {/* <Page2/> */}

       {/* HTML */}
       {/* <Children><p>This is the Data from Children</p></Children>  */}

       {/* Object */}
       {/* <Children>{{name:"rohit"}}</Children> */}

       {/* Number */}
       {/* <Children>{100}</Children> */}

       {/* Array */}
       {/* <Children>{[1,2,3,4,5]}</Children> */}

       {/* Function */}
       {/* <Children>{(handleClick)=>(
        <button onClick={handleClick}>Button from Parent</button>
       )}</Children> */}

       {/* <ChildToParent ParentMethod={ParentMethod}/> */}

       {/* <DefaultExport/> */}
       {/* <NamedExportDemo/> */}

       {/* <SpreadOperatorNestedObj/> */}

       {/* <StateAsProps num={num} setNum={setNum} check={check}>{temp}</StateAsProps> */}

       {/* <UseStateDemo/> */}

       {/* <BrokenSrcNConsole/>
       <hr/>
       <Counter/>
       <hr/>
       <StateArray/>
       <hr/>
       <NestedComponent/> */}

       {/* <UseEffectDemo/> */}

       {/* <InputTypesNEvents/> */}
       {/* <ExtraEvents/> */}

       {/* <Loops/> */}
       {/* <MapFilterReducs/> */}

       {/* <IterateObj/> */}
       {/* <Scrap/> */}
       {/* <FiltersInCard/> */}

       {/* <Todo/> */}

      </>
      );
}

export default App;



