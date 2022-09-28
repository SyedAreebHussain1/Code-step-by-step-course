import React, { Component } from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="Home-component">
        {/* Class #2 */}
        <h2>Home</h2>
        <Link to="/about">About</Link><br/>
        <Link to="/contact">Contact us</Link>
      </div>
    );
  }
}
