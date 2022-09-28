import "./App.css";
import React, { useEffect, useState } from "react";
import UseTittle from "./component/useTittle/UseTittle";
const App = () => {
  const [count,setCount] = useState(0)
  UseTittle(count)
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <button onClick={()=>setCount(count+1)}>Count +</button>
      <button onClick={()=>setCount(count-1)}>Count -</button>
    </div>
  );
}
export default App;
