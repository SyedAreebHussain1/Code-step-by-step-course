import React, { Component} from "react";
import "./style.css";
class Home extends Component {
  constructor() {
    super();
    console.log("constructor 1st");
  }
  componentDidMount() {
    // componentDidMount tab call hota ha jab hamara data ready ho chuka hota ha
    // API componentDidMount k undr call kary gy
    console.log("componentDidMount 3rd");
  }
  render() {
    console.log("render 2nd");
    return (
      <div className="Home-component">
        <h1>Life Cycle Method</h1>
      </div>
    );
  }
}
export default Home;
