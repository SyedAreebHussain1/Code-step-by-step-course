import "./App.css";
import React, { Component} from "react";
import About from "./component/About/About";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Type checking with proptypes in React</h1>
        <About age={20} name="Syed Areeb Hussain" />
      </div>
    );
  }
}
export default App;
