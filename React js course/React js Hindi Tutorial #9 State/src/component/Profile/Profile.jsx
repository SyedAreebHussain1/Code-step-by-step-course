import React, { Component } from "react";
import "./style.css";
import { useEffect, useState } from "react";
export default class Profile extends Component {
  constructor(){
    super();
    this.state = {
      name:'peter',
      email:'peter@test.com',
      count:0
    }
  }

  updateState(){
    this.setState({name:'Anil Sidhi',email:'Anil@test.com',count:this.state.count+1})
  }

  render() {
    // console.log("props=>", this.props);
    console.log("render");
    return (
      <div className="profile-component">
        <h1>Hello {this.state.count}</h1>
        <h1>Hello {this.state.name}</h1>
        <h1>Email: {this.state.email}</h1>
        {/* update */}
        <button onClick={()=>{this.updateState()}}>Update Name</button>
      </div>
    );
  }
}
