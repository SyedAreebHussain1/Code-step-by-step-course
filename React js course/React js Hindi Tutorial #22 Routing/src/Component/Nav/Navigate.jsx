import React from "react";
import {
    Link
  } from "react-router-dom";
function Navigate(){
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'> About</Link>
            <Link to='/forms'> Forms</Link>
        </div>
    )
}
export default Navigate;