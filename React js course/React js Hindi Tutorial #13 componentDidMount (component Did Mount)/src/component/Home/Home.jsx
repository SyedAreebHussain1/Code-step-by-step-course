import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import "./style.css";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    console.log("constructor 1st");
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((json) => this.setState({ data: json.url }))
      // .then((json) => console.log("user=>", json))
      .catch((err) => console.log("Error=>", err));
      console.log('componentDidMount 3rd')
  }
  render() {
    console.log("render 2nd");
    return (
      <div className="Home-component">
        <h1>Life Cycle Method</h1>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}
export default Home;
