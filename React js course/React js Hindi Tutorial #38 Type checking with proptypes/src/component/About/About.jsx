import React from "react";
import PropTypes from 'prop-types'
import { Component } from "react";
class About extends Component{
  render(){
    console.log(this.props)
  return (
    <div className="Home-component">
      <h1>About Component</h1> 
      <h3>{this.props.age}</h3>
      <h3>{this.props.name}</h3>
    </div>
  );
}
}
About.prototype = {
  age:PropTypes.number,
  name:PropTypes.string
}
export default About;
