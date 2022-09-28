import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import "./style.css";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      active: null,
      who:null
    };
    console.log("constructor");
  }
  componentDidUpdate() {
    // jaisy hee meri state update hogi componentDidUpdate apny apse hee call hojaye ga
    // componentDidUpdate ko condition laga k call karna chaye wrna loop chalta rahy ga or error ajye ga 
    // is tarha bhi condition laga sakty ha 
    console.log('componentDidUpdate')
   if(this.state.who == null){
     this.setState({who:'Anil Sidhu'})
   }
  }
  render() {
    console.log("render");
    return (
      <div className="Home-component">
        <h1>React componentDidUpdate</h1>
        <h1>{this.state.who}</h1>
         <button  onClick={()=>this.setState({active:'yes'})}>Activate</button>
      </div>
    );
  }
}
export default Home;
