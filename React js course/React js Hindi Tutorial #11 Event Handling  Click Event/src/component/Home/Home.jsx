import React, { Component, Profiler } from "react";
import "./style.css";
import Profile from "../Profile/Profile";
class Home extends Component {
  render() {
    return (
      <div className="Home-component">
        <Profile/>
      </div>
    );
  }
}
export default Home;
