import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Home from "./component/Home/Home";

const App = () => {
  const [count,SetCount] = useState(0)
  const [data,setData] = useState(100)
  return (
    <div className="App">
      <h1>Memo with React {count}</h1>
      <Home data={data} />
      <button onClick={()=>SetCount(count+1)}>Count</button>
      <button onClick={()=>setData(data+1)}>Data Update</button>
    </div>
  );
};
export default App;
