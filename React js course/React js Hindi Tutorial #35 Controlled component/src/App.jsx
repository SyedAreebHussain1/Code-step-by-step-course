import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  submitV() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <h1>controlled Component</h1>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(text) => this.setState({ email: text.target.value })}
        />
        <br />
        <input
          type="password"
          onChange={(text) => this.setState({ password: text.target.value })}
          placeholder="Password"
        />
        <br />
        <button onClick={() => this.submitV()}>Submit</button>
      </div>
    );
  }
}
export default App;
