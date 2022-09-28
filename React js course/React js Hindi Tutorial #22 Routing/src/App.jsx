import "./App.css";
import React from "react";
import AppRouter from "./Config/Route";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Hello world</h2>
        <AppRouter/>
      </div>
    );
  }
}
export default App;
