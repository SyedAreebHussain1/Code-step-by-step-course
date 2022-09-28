import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import "./style.css";
import User from "../User/User";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
    console.log("constructor");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    return (
      <div className="Home-component">
        <h1>React componentWillUnmount</h1>

        {this.state.toggle ? <User /> : null}
        <button
          onClick={() => {
            this.setState({ toggle: !this.state.toggle });
          }}
        >
          Delete User
        </button>
      </div>
    );
  }
}
export default Home;
