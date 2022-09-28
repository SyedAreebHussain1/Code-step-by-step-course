import React,{useState} from "react";
import "./style.css";
function Home() {
  const [count,setCount] = useState(0)
  return (
    <div className="Home-component">
      <h1>Hooks in functional Component</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Count +</button>
      <button onClick={()=>setCount(count-1)}>Count -</button>
    </div>
  );
}

export default Home;
