import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.name = React.createRef()
    this.password = React.createRef()
  }
  submitHandle = (event) => {
    // ye hamary page ko load hony nh dyga submit pe click k bad preventDefault()
    event.preventDefault();
    // console.log('Hello world!')
    console.log('Email=>',this.name.current.value)
    console.log('Password=>',this.password.current.placeholder)

    // empty input hojaye ga //
    this.name.current.value = ''
    this.password.current.value = ''
  };
  render() {
    return (
      <div className="App">
        <h1>Uncontrolled Component</h1>
        <form onSubmit={(event) => {this.submitHandle(event);}}        >
          <input type="text" ref={this.name} placeholder="Enter your Name"/>
          <input type="password" ref={this.password} placeholder="Enter Password" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default App;
