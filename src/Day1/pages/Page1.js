import React, { Component } from "react";
import Task1 from "../components/Task1";
import Task2 from "../components/Task2";
import Task3 from "../components/Task3";

class Page1 extends Component {
    render() {
        return (
            <div style={{marginLeft:"50px"}}>
               {/* <Task1/> */}
               <Task2/>
               {/* <Task3/> */}
            </div>
        );
    }
}

export default Page1;



