import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default class About extends Component {
  render() {
    return (
      <div className="Home-component">
        <h2 className="homes">About Component</h2>
        <Link to="/">Home</Link> <br/>
        <Link to="/contact">Contact Us</Link>
      </div>
    );
  }
}
