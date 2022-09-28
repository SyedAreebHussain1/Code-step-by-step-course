import "./App.css";
import React from "react";
import User from "./Component/User/User";
import ErrorBound from "./Component/ErrorBound/ErrorBound";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Error Boundary in React</h2>
        <ErrorBound><User/></ErrorBound>
        
      </div>
    );
  }
}
export default App;
