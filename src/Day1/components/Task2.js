import React, { Component } from "react";

class Task2 extends React.Component {
    constructor(props) {
      // console.log("inside const")
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
      // This method is called after the component is mounted to the DOM.
      // You can use this method to make API calls, initialize state, or set up subscriptions.
      console.log('componentDidMount');
    }
  
    componentDidUpdate(prevProps, prevState) {
      // This method is called after the component is updated.
      // You can use this method to compare the previous props and state to the current props and state, and make any necessary changes.
      console.log('componentDidUpdate');
    }
  
    componentWillUnmount() {
      // This method is called before the component is unmounted from the DOM.
      // You can use this method to clean up any subscriptions or timers.
      console.log('componentWillUnmount');
    }
  
    render() {
      // This method is called to render the component.
      // You can use this method to return JSX, which will be rendered to the DOM.
      return (
        <div>
          <h1>My Component</h1>
          <p>Count: {this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
        </div>
      );
    }
  }

  export default Task2;
