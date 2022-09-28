import "./App.css";
import React from "react";
import Style from "./Component/StyleFolder/Style";
class App extends React.Component {
  render() {
    return (
      // conditional css
      <div className="App">
        <Style data='appply'/>
      </div>
    );
  }
}
export default App;
