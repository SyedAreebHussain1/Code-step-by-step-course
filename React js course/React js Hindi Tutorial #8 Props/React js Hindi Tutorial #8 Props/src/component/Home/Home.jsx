import React, { Component } from "react";
import Profile from "../Profile/Profile";
import "./style.css";
export default class Home extends Component {
  render() {
    return (
      <div className="Home-component">
        {/* Class #2 */}
        <h1 className="homes">Home</h1>
        <Profile data={{text:'Hello Props',componentName:'Profile Component'}} name='Areeb Hussain' />
      </div>
    );
  }
}
