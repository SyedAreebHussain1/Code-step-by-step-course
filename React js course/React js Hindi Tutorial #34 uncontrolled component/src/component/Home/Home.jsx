import React,{memo} from "react";
import "./style.css";
function Home(props) {
  console.log('Home=>',props.data)
  return (
    <div className="Home-component">
      <h1>Home Component</h1>
    </div>
  );
}

export default memo(Home);
