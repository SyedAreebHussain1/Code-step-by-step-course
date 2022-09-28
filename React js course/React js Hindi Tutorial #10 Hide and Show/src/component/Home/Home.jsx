import React, { Component } from "react";
import "./style.css";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      name: "Anil-sindu",
    };
  }
  render() {
    const showV = () => {
      // show ki value ! ye laga ny k bad click pe opposite hojaye gee true ha tou false hojaye ge false ha tou true hojaye ge 
      this.setState({ name: "peter", show: !this.state.show });
    };
    return (
      <div className="Home-component">
        {this.state.show ? <h1>hide and show</h1> : null}
        <button onClick={() => showV()}>Toggle me</button>
      </div>
    );
  }
}
export default Home;
