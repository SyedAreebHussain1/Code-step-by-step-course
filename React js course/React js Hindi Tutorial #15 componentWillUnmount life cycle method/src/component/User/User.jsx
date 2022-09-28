import React, { Component } from "react";
import "./style.css";
class User extends Component {
  componentWillUnmount() {
    // You should not call setState() in componentWillUnmount()
    // matlb is k undr setState() use nh karna chye hamy

    // for example apny user ka component bana rakha ha user ka component apny remove kardiya Unmount kardiya tab ye wala event call hoga
    //apko msg dekhana ha for a very simple example user delete karty he apko example dekhana ha "user has been deleted" tou ap usko componentWillUnmount k undr use kar sakty ho koi or jaisy ApI call karni ya koi or event wo bhi is k undr sakty ho thek ha

    alert("User has been Deleted");
  }
  render() {
    return (
      <div>
        <ul>
          <li>Name: Anil Sidhu</li>
          <li>Email: webanilsidhu@test.com</li>
          <li>Contact: +9654463210</li>
        </ul>
      </div>
    );
  }
}
export default User;
