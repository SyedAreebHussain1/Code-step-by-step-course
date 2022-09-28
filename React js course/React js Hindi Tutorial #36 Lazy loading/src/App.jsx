import "./App.css";
import React, { Component, Suspense, lazy } from "react";
// import Home from "./component/Home/Home";
const Home = lazy(() => import("./component/Home/Home"));
const About = lazy(() => import("./component/About/About"));
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lazy Loading</h1>
        <Suspense fallback={<div>Please Wait... Home is loading</div>}>
          <Home />
        </Suspense>
        <Suspense fallback={<div>Please Wait... About is loading</div>}>
          <About />
        </Suspense>
      </div>
    );
  }
}
export default App;
