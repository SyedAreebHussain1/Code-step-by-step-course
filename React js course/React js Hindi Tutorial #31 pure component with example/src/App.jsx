import logo from "./logo.svg";
import "./App.css";
import React,{PureComponent} from "react";

class App extends PureComponent{
  constructor(){
    super();
    this.state = {
      data:10
    }
  }
  render(){
    console.log('state=>',this.state)
  return (
    <div className="App">
      <h1>Pure Component {this.state.data}</h1>
      <button onClick={()=>{this.setState({data:10})}}>Update State</button>
    </div>
  );
}
}
export default App;
